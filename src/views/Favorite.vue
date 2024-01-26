<script setup lang="ts">
import Button from "@components/Button";
import Notification from "@components/Notification";
import Lucide from "@components/Lucide";
import { Slideover } from "@components/Headless";
import { FormLabel, FormInput } from "@components/Form";
import LoadingIcon from "@components/LoadingIcon";
import http from "@utils/axios";
import { useListStore } from "@stores/selectLists";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import {
  reactive,
  toRefs,
  InputHTMLAttributes,
  onBeforeMount,
  watch,
  ref,
} from "vue";
import Tree from "ant-design-vue/lib/tree";
import "../tree.css";

interface IForm {
  name: string | null;
  slug: string | null;
  permissions: any;
}

interface IProps extends InputHTMLAttributes {
  open: true | false;
  targetId: any;
}

const initialForm = {
  name: "",
  slug: "",
  permissions: [],
};

const emit = defineEmits(["close", "refresh"]);

const props = defineProps<IProps>();
let loading = ref(false);

watch(props, (e) => {
  if (e.open) {
    fetchItem();
  }
});

let form = reactive<IForm>({ ...initialForm });

const rules = {
  name: {
    required,
    minLength: minLength(2),
  },
  slug: {
    required,
  },
};

const validate = useVuelidate(rules, toRefs(form));

const resetForm = () => {
  Object.assign(form, initialForm);
  validate.value.$reset();
};
const close = () => {
  emit("close");
  resetForm();
};

const listStore = useListStore();

const submit = () => {
  validate.value.$touch();
  if (validate.value.$invalid) {
  } else {
    loading.value = true;
    let formOne = JSON.parse(JSON.stringify(form));
    formOne.permissions = form.permissions.concat(halfChecked.value);
    http
      .put(`/roles/${props.targetId}`, formOne)
      .then((res) => {
        loading.value = false;
        close();
        emit("refresh");
      })
      .catch((err) => {
        loading.value = false;
        console.error(err);
      });
  }
};

const selectedKeys = ref<number[]>([]);
const selectedKeys2 = ref<number[]>([]);

const iteratePermission = (permissions) => {
  permissions.map((item) => {
    if (item.children.length) {
      let isset = selectedKeys.value.includes(item.id);
      if (isset) {
        halfChecked.value.push(item.code);
      }
      iteratePermission(item.children);
    } else {
      let isset = selectedKeys.value.includes(item.id);
      if (isset) {
        selectedKeys2.value.push(item.id);
        form.permissions = selectedKeys2.value;
      }
    }
  });
};

const fetchItem = () => {
  if (props.targetId) {
    http
      .get(`/roles/${props.targetId}`)
      .then((res) => {
        form.name = res.data.result.name;
        form.slug = res.data.result.slug;
        selectedKeys.value = res.data.result.permissions;
        iteratePermission(listStore.getPermissionTree);
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

const halfChecked = ref<number[]>([]);
const check = (e, a) => {
  halfChecked.value = a.halfCheckedKeys;
};

onBeforeMount(() => {
  fetchItem();
});
</script>

<template>
  <Notification id="success-notification-content" class="flex hidden">
    <Lucide icon="CheckCircle" class="text-success" />
    <div class="ml-4 mr-4">
      <div class="font-medium">Успешно</div>
      <div class="mt-1 text-slate-500">успешно завершен!</div>
    </div>
  </Notification>
  <Notification id="failed-notification-content" class="flex hidden">
    <Lucide icon="XCircle" class="text-danger" />
    <div class="ml-4 mr-4">
      <div class="font-medium">Ошибка</div>
      <div class="mt-1 text-slate-500">
        проверьте форму и повторите попытку.
      </div>
    </div>
  </Notification>
  <Slideover backdrop="static" :open="props.open" @close="emit('close')">
    <Slideover.Panel>
      <a
        @click="emit('close')"
        class="absolute top-0 left-0 right-auto mt-4 -ml-12"
        href="#"
      >
        <Lucide icon="X" class="w-8 h-8 text-slate-400" />
      </a>
      <Slideover.Title>
        <h2 class="mr-auto text-base font-medium">Изменить</h2>
      </Slideover.Title>
      <Slideover.Description :key="form.permissions + '2'">
        <div class="mb-3">
          <FormLabel htmlFor="modal-form-1">
            <span class="text-danger">*</span> Название
          </FormLabel>
          <FormInput
            v-model="form.name"
            id="modal-form-1"
            type="text"
            :class="{ 'border-danger': validate.name.$error }"
          />
          <template v-if="validate.name.$error">
            <div
              v-for="(error, index) in validate.name.$errors"
              :key="index"
              class="mt-2 text-danger"
            >
              {{ error.$message }}
            </div>
          </template>
        </div>
        <div class="mb-3">
          <FormLabel htmlFor="modal-form-2">
            <span class="text-danger">*</span> Slug
          </FormLabel>
          <FormInput
            v-model="form.slug"
            id="modal-form-2"
            type="text"
            :class="{ 'border-danger': validate.slug.$error }"
          />
          <template v-if="validate.slug.$error">
            <div
              v-for="(error, index) in validate.slug.$errors"
              :key="index"
              class="mt-2 text-danger"
            >
              {{ error.$message }}
            </div>
          </template>
        </div>
        <div>
          <FormLabel> Разрешение </FormLabel>
          <Tree
            v-model:checkedKeys="form.permissions"
            checkable
            :tree-data="listStore.getPermissionTree"
            :fieldNames="{ children: 'children', title: 'name', key: 'id' }"
            @check="check"
          >
          </Tree>
        </div>
      </Slideover.Description>
      <Slideover.Footer>
        <Button
          variant="outline-secondary"
          type="button"
          @click="emit('close')"
          class="w-20 mr-1"
        >
          Закрыть
        </Button>
        <Button
          @click="submit()"
          variant="primary"
          :disabled="loading"
          class=""
        >
          Сохранить
          <LoadingIcon
            v-show="loading"
            icon="oval"
            color="white"
            class="w-4 h-4 ml-2"
          />
        </Button>
      </Slideover.Footer>
    </Slideover.Panel>
  </Slideover>
</template>
