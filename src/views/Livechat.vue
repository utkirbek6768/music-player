<template>
  <div class="main">
    <div class="chatHeader">
      <div class="burgerHorizontal">
        <svg
          class="animation"
          width="30"
          height="8"
          viewBox="0 0 30 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#B8B8B8" />
          <circle cx="15" cy="4" r="4" fill="#B8B8B8" />
          <circle cx="26" cy="4" r="4" fill="#B8B8B8" />
        </svg>
      </div>
      <div class="members">Live Chat Members</div>
      <div class="membersImages">
        <div class="images">
          <img src="/img1.png" alt="" />
        </div>
        <div class="images">
          <img src="/img2.png" alt="" />
        </div>
        <div class="images">
          <img src="/img3.png" alt="" />
        </div>
      </div>
    </div>
    <div id="chatBody" class="chatBody">
      <div
        v-for="(chat, index) in chatData"
        :key="index"
        :class="{ user: chat.user }"
        class="memberControl"
      >
        <div class="membrImg">
          <img :src="chat.url" alt="" />
        </div>
        <div class="membrBody">
          <div class="membrName">
            <div class="name">{{ chat.name }}</div>
            <span>{{ chat.newDate }} </span>
          </div>
          <div class="memberMessage">
            {{ chat.message }}
          </div>
        </div>
      </div>
    </div>
    <div class="chatForm">
      <input
        @keyup.enter="addMessage()"
        v-model="newMessageContent"
        type="text"
        class="input"
        placeholder="Enter the message"
      />
      <div class="sendControl">
        <div class="smile">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1429 23.6428C18.297 23.6428 23.2857 18.6541 23.2857 12.5C23.2857 6.34595 18.297 1.35712 12.1429 1.35712C5.98883 1.35712 1 6.34595 1 12.5C1 18.6541 5.98883 23.6428 12.1429 23.6428Z"
              stroke="#7A7A7A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.48584 14.2143C7.34298 17.3 10.7716 19.1857 13.8573 18.3286C15.743 17.6429 17.2858 16.1 17.8001 14.2143"
              stroke="#7A7A7A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.37144 9.84286C8.13475 9.84286 7.94287 9.65098 7.94287 9.41429C7.94287 9.1776 8.13475 8.98572 8.37144 8.98572"
              stroke="#7A7A7A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.37134 9.84286C8.60803 9.84286 8.79991 9.65098 8.79991 9.41429C8.79991 9.1776 8.60803 8.98572 8.37134 8.98572"
              stroke="#7A7A7A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.9144 9.84286C15.6777 9.84286 15.4858 9.65098 15.4858 9.41429C15.4858 9.1776 15.6777 8.98572 15.9144 8.98572"
              stroke="#7A7A7A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.9143 9.84286C16.151 9.84286 16.3429 9.65098 16.3429 9.41429C16.3429 9.1776 16.151 8.98572 15.9143 8.98572"
              stroke="#7A7A7A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="share">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.25328 13.6517C6.05002 13.6517 7.50656 12.1951 7.50656 10.3984C7.50656 8.60167 6.05002 7.14513 4.25328 7.14513C2.45654 7.14513 1 8.60167 1 10.3984C1 12.1951 2.45654 13.6517 4.25328 13.6517Z"
              stroke="#7A7A7A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5435 19.7967C18.3403 19.7967 19.7968 18.3402 19.7968 16.5434C19.7968 14.7467 18.3403 13.2902 16.5435 13.2902C14.7468 13.2902 13.2903 14.7467 13.2903 16.5434C13.2903 18.3402 14.7468 19.7967 16.5435 19.7967Z"
              stroke="#7A7A7A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5435 7.50656C18.3403 7.50656 19.7968 6.05002 19.7968 4.25328C19.7968 2.45654 18.3403 1 16.5435 1C14.7468 1 13.2903 2.45654 13.2903 4.25328C13.2903 6.05002 14.7468 7.50656 16.5435 7.50656Z"
              stroke="#7A7A7A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.15965 8.95245L13.6373 5.69917"
              stroke="#7A7A7A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.15965 11.8443L13.6373 15.0976"
              stroke="#7A7A7A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div @click="addMessage()" class="send">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6844 19.3431L14.425 23.0786C14.6572 23.3108 14.9449 23.4798 15.2608 23.5696C15.5766 23.6593 15.9102 23.6669 16.2299 23.5915C16.5495 23.5161 16.8445 23.3602 17.087 23.1388C17.3295 22.9173 17.5113 22.6375 17.6152 22.326L23.7541 3.89228C23.8675 3.55297 23.8841 3.18877 23.802 2.84056C23.7199 2.49234 23.5424 2.17389 23.2895 1.92092C23.0365 1.66795 22.718 1.49047 22.3698 1.4084C22.0216 1.32633 21.6574 1.34291 21.3181 1.45628L2.88439 7.60028C2.57386 7.70463 2.29507 7.88642 2.07434 8.12849C1.85361 8.37055 1.69825 8.66489 1.62292 8.98371C1.54759 9.30252 1.55479 9.63527 1.64384 9.95053C1.73288 10.2658 1.90083 10.5531 2.13182 10.7854L6.83068 15.4894L6.67125 21.4294L10.6844 19.3431Z"
              stroke="#7A7A7A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23.204 1.84027L6.83081 15.4894"
              stroke="#7A7A7A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
const chatData = ref([
  {
    user: false,
    url: "/img1.png",
    name: "Jane Ortega",
    newDate: "08.00",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos odit quibusdam nam nulla voluptatum ipsam recusandae illum rerum, fugit consequuntur velit sed inventore, reiciendis hic mollitia optio fugiat iure distinctio",
  },
  {
    user: false,
    url: "/img2.png",
    name: "Jane Ortega",
    newDate: "08.00",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos odit quibusdam nam nulla voluptatum ipsam recusandae illum rerum, fugit consequuntur velit sed inventore, reiciendis hic mollitia optio fugiat iure distinctio",
  },
  {
    user: true,
    url: "/userAvatar.png",
    name: "Jane Ortega",
    newDate: "08.00",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos odit quibusdam nam nulla voluptatum ipsam recusandae illum rerum, fugit consequuntur velit sed inventore, reiciendis hic mollitia optio fugiat iure distinctio",
  },
  {
    user: false,
    url: "/img3.png",
    name: "Jane Ortega",
    newDate: "08.00",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos odit quibusdam nam nulla voluptatum ipsam recusandae illum rerum, fugit consequuntur velit sed inventore, reiciendis hic mollitia optio fugiat iure distinctio",
  },
  {
    user: true,
    url: "/userAvatar.png",
    name: "Jane Ortega",
    newDate: "08.00",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos odit quibusdam nam nulla voluptatum ipsam recusandae illum rerum, fugit consequuntur velit sed inventore, reiciendis hic mollitia optio fugiat iure distinctio",
  },
  {
    user: false,
    url: "/img1.png",
    name: "Jane Ortega",
    newDate: "08.00",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos odit quibusdam nam nulla voluptatum ipsam recusandae illum rerum, fugit consequuntur velit sed inventore, reiciendis hic mollitia optio fugiat iure distinctio",
  },
]);
const newMessageContent = ref("");
const addMessage = async () => {
  await chatData.value.push({
    user: true,
    url: "/userAvatar.png",
    name: "Jane Ortega",
    newDate: new Date().toLocaleString(),
    message: newMessageContent.value,
  });
  newMessageContent.value = "";
  toBottom();
};
const toBottom = () => {
  var messages = document.querySelector("#chatBody");
  messages.scrollTo(0, messages.scrollHeight);
};
onMounted(() => {
  toBottom();
});
</script>
<style lang="scss" scoped>
.animation circle:nth-child(1) {
  animation: livechat 2s infinite ease;
}
.animation circle:nth-child(2) {
  animation: livechat 2s infinite ease;
  animation-delay: 0.33s;
}
.animation circle:nth-child(3) {
  animation: livechat 2s infinite ease;
  animation-delay: 0.66s;
}
@keyframes livechat {
  0% {
    fill: #ca2baf;
  }
  50% {
    fill: #b8b8b8;
  }

  100% {
    fill: #ca2baf;
  }
}
.chatHeader {
  display: flex;
  align-items: center;
  width: 100%;
  height: 72px;
  flex-shrink: 0;
  background: rgba(23, 23, 23, 0.5);
  backdrop-filter: blur(8px);
  padding: 24px;
  margin-bottom: 50px;
  margin-top: 10px;
}
.burgerHorizontal {
  margin-right: 24px;
}
.members {
  color: #b9b9b9;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.4px;
  text-transform: capitalize;
}
.membersImages {
  margin-left: auto;
  display: flex;

  .images {
    width: 31px;
    height: 31px;
    flex-shrink: 0;
    border-radius: 31px;
    border: 1px solid blueviolet;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
    &:nth-child(2) {
      transform: translateX(-10px);
    }
    &:nth-child(3) {
      transform: translateX(-20px);
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}

.chatBody {
  height: 79vh;
  overflow: auto;
}
.memberControl {
  display: flex;
  margin-bottom: 40px;
  .membrImg {
    width: 53px;
    height: 53px;
    flex-shrink: 0;
    border-radius: 100%;
    margin-right: 15px;
    outline: 2px solid blueviolet;
    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }
  .membrName {
    display: flex;
    align-items: flex-end;
    padding: 0px;
    margin-bottom: 13px;

    .name {
      color: #fff;
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 86%; /* 17.2px */
      letter-spacing: 0.4px;
      text-transform: capitalize;
      margin-right: 10px;
    }

    span {
      color: #fff;
      font-family: Inter;
      font-size: 10px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      letter-spacing: 0.2px;
      text-transform: capitalize;
    }
  }
  .memberMessage {
    max-width: 400px;
    display: inline-flex;
    padding: 8px 17px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 0px 10px 10px 10px;
    background: #1d1d1d;
    overflow: auto;
  }
}
.user {
  display: flex;
  justify-content: flex-end;
  .membrImg {
    order: 2 !important;
    margin-left: 15px;
    margin-right: 0px;
  }
  .membrBody {
    order: 1 !important;
    .memberMessage {
      max-width: 400px;
      display: inline-flex;
      padding: 8px 17px;
      align-items: flex-start;
      gap: 10px;
      border-radius: 10px 0px 10px 10px;
      background: #1d1d1d;
    }
  }
}
.chatForm {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 19px 33px 19px 16px;
  align-items: center;
  gap: 41px;
  background: #111;
  box-shadow: 6px 4px 100px 0px rgba(0, 0, 0, 0.8);
  .input {
    width: 100%;
    display: flex;
    padding: 15px 452px 15px 22px;
    align-items: center;
    gap: 22px;
    border-radius: 36px;
    background: rgba(65, 65, 65, 0.65);
    backdrop-filter: blur(88px);
    border: none;
    outline: none;
    color: #b8b8b8;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.32px;
    text-transform: capitalize;
  }
}
.sendControl {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 137px;
}
</style>
