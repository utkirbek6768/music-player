<template>
  <div class="playWrapper">
    <div class="playWrapperControl">
      <div
        v-for="(track, index) in tracks"
        :key="index"
        class="playImg"
        v-show="currentTrackIndex === index"
      >
        <img :src="track.cover" alt="" />
      </div>

      <div class="playTitleControl">
        <div class="playTitle">{{ currentTrack?.artist }}</div>
        <div class="playDescription">{{ currentTrack?.name }}</div>
      </div>
      <div class="musicController">
        <div class="prevSped">
          <svg
            width="21"
            height="14"
            viewBox="0 0 21 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.0032 11.9046C20.0039 12.1003 19.9513 12.2925 19.851 12.4605C19.7507 12.6286 19.6066 12.7661 19.434 12.8584C19.2643 12.96 19.0703 13.0137 18.8725 13.0137C18.6747 13.0137 18.4807 12.96 18.311 12.8584L10.4964 7.78191C10.3439 7.68457 10.2184 7.55039 10.1315 7.39177C10.0446 7.23314 9.99902 7.05518 9.99902 6.8743C9.99902 6.69342 10.0446 6.51545 10.1315 6.35683C10.2184 6.1982 10.3439 6.06403 10.4964 5.96669L18.311 0.859479C18.4807 0.757805 18.6747 0.704102 18.8725 0.704102C19.0703 0.704102 19.2643 0.757805 19.434 0.859479C19.6066 0.951732 19.7507 1.08927 19.851 1.25731C19.9513 1.42535 20.0039 1.61755 20.0032 1.81324V11.9046Z"
              fill="white"
            />
            <path
              d="M10.0041 11.9046C10.0049 12.1003 9.95228 12.2925 9.852 12.4605C9.75172 12.6286 9.60754 12.7661 9.43496 12.8584C9.26532 12.96 9.07125 13.0137 8.87347 13.0137C8.67569 13.0137 8.48163 12.96 8.31199 12.8584L0.497337 7.78191C0.344881 7.68457 0.219402 7.55039 0.132479 7.39177C0.045557 7.23314 -5.90313e-06 7.05518 -5.90313e-06 6.8743C-5.90313e-06 6.69342 0.045557 6.51545 0.132479 6.35683C0.219402 6.1982 0.344881 6.06403 0.497337 5.96669L8.31199 0.859479C8.48163 0.757805 8.67569 0.704102 8.87347 0.704102C9.07125 0.704102 9.26532 0.757805 9.43496 0.859479C9.60299 0.949228 9.74421 1.08195 9.84421 1.2441C9.9442 1.40625 9.99939 1.59203 10.0041 1.78247V11.9046Z"
              fill="white"
            />
          </svg>
        </div>
        <div @click="prevTrack" class="prev">
          <svg
            width="15"
            height="19"
            viewBox="0 0 15 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.999756 1V17.3222"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.9746 15.0119C13.9753 15.2378 13.9149 15.4597 13.8 15.6541C13.6851 15.8486 13.5199 16.0084 13.3218 16.1168C13.1309 16.227 12.9144 16.285 12.694 16.285C12.4736 16.285 12.2571 16.227 12.0662 16.1168L3.0388 10.2157C2.86258 10.1019 2.7177 9.94576 2.61737 9.76153C2.51705 9.57729 2.46449 9.37086 2.46449 9.16108C2.46449 8.9513 2.51705 8.74487 2.61737 8.56064C2.7177 8.3764 2.86258 8.22024 3.0388 8.10642L12.0913 2.25555C12.2822 2.14536 12.4987 2.08734 12.7191 2.08734C12.9395 2.08734 13.156 2.14536 13.3469 2.25555C13.545 2.36397 13.7102 2.52382 13.8251 2.71828C13.94 2.91273 14.0004 3.13458 13.9998 3.36044L13.9746 15.0119Z"
              fill="white"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div @click="play" v-if="isTimerPlaying" class="pause">
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.6941 0.829268H1.4734C0.982817 0.829268 0.585121 1.22696 0.585121 1.71755V11.4886C0.585121 11.9792 0.982817 12.3769 1.4734 12.3769H3.6941C4.18468 12.3769 4.58238 11.9792 4.58238 11.4886V1.71755C4.58238 1.22696 4.18468 0.829268 3.6941 0.829268Z"
              fill="white"
            />
            <path
              d="M10.2822 0.829313H8.06148C7.5709 0.829313 7.1732 1.22701 7.1732 1.71759V11.4887C7.1732 11.9792 7.5709 12.3769 8.06148 12.3769H10.2822C10.7728 12.3769 11.1705 11.9792 11.1705 11.4887V1.71759C11.1705 1.22701 10.7728 0.829313 10.2822 0.829313Z"
              fill="white"
            />
          </svg>
        </div>
        <div @click="play" v-else class="paly">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
          >
            <path
              d="M13.5 7.13397C14.1667 7.51887 14.1667 8.48112 13.5 8.86602L1.5 15.7942C0.833334 16.1791 2.11047e-07 15.698 2.01867e-07 14.9282L3.66308e-08 1.0718C2.7451e-08 0.301997 0.833333 -0.179129 1.5 0.205771L13.5 7.13397Z"
              fill="#B8B8B8"
            />
          </svg>
        </div>
        <div @click="nextTrack" class="next">
          <svg
            width="15"
            height="19"
            viewBox="0 0 15 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9998 1V17.3222"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.02487 15.0119C1.02426 15.2378 1.08458 15.4597 1.19948 15.6541C1.31438 15.8486 1.47961 16.0084 1.67776 16.1168C1.86863 16.227 2.08514 16.285 2.30553 16.285C2.52593 16.285 2.74244 16.227 2.93331 16.1168L11.9607 10.2157C12.1369 10.1019 12.2818 9.94576 12.3821 9.76153C12.4825 9.57729 12.535 9.37086 12.535 9.16108C12.535 8.9513 12.4825 8.74487 12.3821 8.56064C12.2818 8.3764 12.1369 8.22024 11.9607 8.10642L2.9082 2.25555C2.71733 2.14536 2.50082 2.08734 2.28042 2.08734C2.06003 2.08734 1.84351 2.14536 1.65265 2.25555C1.4545 2.36397 1.28927 2.52382 1.17437 2.71828C1.05947 2.91273 0.999144 3.13458 0.999761 3.36044L1.02487 15.0119Z"
              fill="white"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="nextSped">
          <svg
            width="21"
            height="14"
            viewBox="0 0 21 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.28785 11.9046C0.287105 12.1003 0.3397 12.2925 0.439983 12.4605C0.540266 12.6286 0.684446 12.7661 0.857027 12.8584C1.02667 12.96 1.22073 13.0137 1.41851 13.0137C1.61629 13.0137 1.81036 12.96 1.98 12.8584L9.79465 7.78191C9.9471 7.68457 10.0726 7.55039 10.1595 7.39177C10.2464 7.23314 10.292 7.05518 10.292 6.8743C10.292 6.69342 10.2464 6.51545 10.1595 6.35683C10.0726 6.1982 9.9471 6.06403 9.79465 5.96669L1.98 0.859479C1.81036 0.757805 1.61629 0.704102 1.41851 0.704102C1.22073 0.704102 1.02667 0.757805 0.857027 0.859479C0.684446 0.951732 0.540266 1.08927 0.439983 1.25731C0.3397 1.42535 0.287105 1.61755 0.28785 1.81324V11.9046Z"
              fill="white"
            />
            <path
              d="M10.2869 11.9046C10.2861 12.1003 10.3387 12.2925 10.439 12.4605C10.5393 12.6286 10.6835 12.7661 10.8561 12.8584C11.0257 12.96 11.2198 13.0137 11.4175 13.0137C11.6153 13.0137 11.8094 12.96 11.979 12.8584L19.7937 7.78191C19.9461 7.68457 20.0716 7.55039 20.1585 7.39177C20.2455 7.23314 20.291 7.05518 20.291 6.8743C20.291 6.69342 20.2455 6.51545 20.1585 6.35683C20.0716 6.1982 19.9461 6.06403 19.7937 5.96669L11.979 0.859479C11.8094 0.757805 11.6153 0.704102 11.4175 0.704102C11.2198 0.704102 11.0257 0.757805 10.8561 0.859479C10.688 0.949228 10.5468 1.08195 10.4468 1.2441C10.3468 1.40625 10.2916 1.59203 10.2869 1.78247V11.9046Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div class="range">
        <input
          type="range"
          min="0"
          :max="duration"
          :value="currentTime"
          oninput="clickProgress"
        />
        <div class="rangeTime">
          <output id="rangevalue">{{ currentTime }}</output>
          <output id="rangevalue1">{{ duration }}</output>
        </div>
      </div>
      <div class="volControl">
        <div class="vol">
          <svg
            width="21"
            height="17"
            viewBox="0 0 21 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.90577 5.31987H2.73692C2.35344 5.31987 1.98567 5.4722 1.71451 5.74336C1.44335 6.01452 1.29102 6.38229 1.29102 6.76577V9.65757C1.29102 10.041 1.44335 10.4088 1.71451 10.68C1.98567 10.9511 2.35344 11.1035 2.73692 11.1035H4.90577V5.31987Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.90571 11.1035L10.5592 15.1665C10.7687 15.3114 11.0127 15.3984 11.2666 15.4187C11.5205 15.439 11.7753 15.3919 12.0051 15.2821C12.2544 15.1702 12.4668 14.9898 12.6178 14.7621C12.7688 14.5343 12.8521 14.2685 12.8582 13.9953V2.42805C12.8644 2.1684 12.8005 1.91187 12.6733 1.68543C12.5461 1.45898 12.3602 1.27099 12.1352 1.1412C11.9054 1.03141 11.6506 0.984293 11.3967 1.00461C11.1428 1.02492 10.8988 1.11194 10.6893 1.25687L4.90571 5.31986"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.6419 3.8739C19.6472 5.0893 20.1629 6.6361 20.0878 8.21161C20.0661 9.9973 19.5669 11.7446 18.6419 13.2723"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.75 6.04285C16.2527 6.65054 16.5105 7.42394 16.473 8.2117C16.5105 8.99945 16.2527 9.77285 15.75 10.3806"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <input type="range" min="0" max="100" />
      </div>
      <div class="favoritesControl">
        <div class="rendom">
          <svg
            :class="{ iconsActive: iconsActive.rendom }"
            @click="iconsActive.rendom = !iconsActive.rendom"
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6264 1L18.2857 3.65934L15.6264 6.31868"
              stroke="#7A7A7A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.6374 3.65935H18.2858"
              stroke="#7A7A7A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.6264 8.97806L18.2857 11.6374L15.6264 14.2967"
              stroke="#7A7A7A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 3.65935H5.65385L10.9725 11.6374H18.2857"
              stroke="#7A7A7A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 11.6373H5.65385"
              stroke="#7A7A7A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="replay">
          <svg
            :class="{ iconsActive: iconsActive.replay }"
            @click="iconsActive.replay = !iconsActive.replay"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.53832 17L3.4614 13.9231L6.53832 10.8462"
              stroke="#B8B8B8"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.9999 10.2308V12.6924C16.9999 13.0188 16.8702 13.3318 16.6394 13.5627C16.4086 13.7935 16.0955 13.9231 15.7691 13.9231L3.4614 13.9231"
              stroke="#B8B8B8"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.4616 1.00011L14.5386 4.07703L11.4616 7.15395"
              stroke="#B8B8B8"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 7.7693L1 5.30776C1 4.98134 1.12967 4.66829 1.36048 4.43748C1.5913 4.20666 1.90435 4.07699 2.23077 4.07699L14.5385 4.07699"
              stroke="#B8B8B8"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="likes">
          <svg
            :class="{ iconsActive: iconsActive.likes }"
            @click="iconsActive.likes = !iconsActive.likes"
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.50472 13.518L2.13916 7.75207C-1.32038 4.29253 3.76514 -2.34979 8.50472 3.02403C13.2443 -2.34979 18.3068 4.31559 14.8703 7.75207L8.50472 13.518Z"
              stroke="#B8B8B8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="share">
          <svg
            :class="{ iconsActive: iconsActive.share }"
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
      </div>
    </div>
    <div hidden>
      <audio preload="auto" ref="audio" muted="true"></audio>
    </div>
    <h1 style="border: 1px solid red; color: white"></h1>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, computed } from "vue";
import store from "@/store";
// const track = computed(() => {
//   return store.modules.tracks;
// });
const iconsActive = ref([
  {
    rendom: false,
    replay: false,
    likes: false,
    share: false,
  },
]);

const audio = ref(null);
const circleLeft = ref(null);
const barWidth = ref(null);
const duration = ref(null);
const currentTime = ref(null);
const isTimerPlaying = ref(false);
const tracks = ref([
  {
    id: 1,
    name: "Unuticak Dunler",
    artist: "Gazapizm",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
    source: "./songs/Gazapizm_Unutulacak.mp3",
    url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
    duration: null,
    favorited: false,
  },
  {
    id: 2,
    name: "Bezam Boro",
    artist: "Eham",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
    source: "./songs/Ehaam_Bezan.mp3",
    url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
    duration: null,
    favorited: false,
  },
  {
    id: 3,
    name: "Cheshmanat",
    artist: "Eham",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
    source: "./songs/Ehaam_Cheshmanat",
    url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
    duration: null,
    favorited: false,
  },
  {
    id: 4,
    name: "Sultane",
    artist: "Eham",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
    source: "./songs/Ehaam_Soltane.mp3",
    url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
    duration: null,
    favorited: false,
  },
  {
    id: 5,
    name: "Ferzah",
    artist: "Canbay & Wolker",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
    source: "./songs/Canbay_Fersah.mp3",
    url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
    duration: null,
    favorited: false,
  },
  {
    id: 6,
    name: "Tanho Nazar",
    artist: "Eham",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",
    source: "./songs/Sirvan_Nazar.mp3",
    url: "https://www.youtube.com/watch?v=HhoATZ1Imtw",
    duration: null,
    favorited: false,
  },
  {
    id: 7,
    name: "Takrorie",
    artist: "Sirvan Khosvari",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",
    source: "./songs/Sirvan_Tekrarie.mp3",
    url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
    duration: null,
    favorited: false,
  },
  {
    id: 8,
    name: "Xaniar",
    artist: "Sirvan Khosvari",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
    source: "./songs/Sirvan_Xaniar.mp3",
    url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
    duration: null,
    favorited: false,
  },
]);
const currentTrack = ref(null);
const currentTrackIndex = ref(0);

const play = (e) => {
  if (audio.value.paused) {
    audio.value.play();
    isTimerPlaying.value = true;
  } else {
    audio.value.pause();
    isTimerPlaying.value = false;
  }
};

const nextTrack = () => {
  store.commit("nextState");
  currentTrackIndex.value = store.state.tracks.current.currentTrackIndex;
  currentTrack.value = tracks.value[currentTrackIndex.value];
};

const prevTrack = () => {
  store.commit("prevState");
  currentTrackIndex.value = store.state.tracks.current.currentTrackIndex;
  currentTrack.value =
    tracks.value[store.state.tracks.current.currentTrackIndex];
};

const favoriteTrack = () => {
  currentTrack.value.favorited = !currentTrack.value.favorited;
};

onMounted(() => {
  audio.value = new Audio();
  currentTrack.value = tracks.value[currentTrackIndex.value];
  //   console.log(currentTrack.value);

  audio.value.addEventListener("loadedmetadata", () => {
    duration.value = audio.value.duration.toFixed(0);
  });

  audio.value.addEventListener("timeupdate", () => {
    currentTime.value = audio.value.currentTime.toFixed(0);
    const progressWidth =
      (audio.value.currentTime / audio.value.duration) * 100;
    barWidth.value = progressWidth.toFixed(0);
    circleLeft.value = `calc(${progressWidth}% - 7.5px)`;
  });

  audio.value.addEventListener("ended", () => {
    isTimerPlaying.value = false;
    nextTrack();
    audio.value.play();
    isTimerPlaying.value = true;
  });

  currentTrack.value = tracks.value[currentTrackIndex.value];

  const prefetchCovers = () => {
    tracks.value.forEach((track) => {
      const img = new Image();
      img.src = track.cover;
    });
  };

  prefetchCovers();
});

watch(currentTrack, () => {
  audio.value.src = currentTrack.value.source;
  audio.value.load();
  isTimerPlaying.value = false;
  setTimeout(() => {
    play();
  }, 300);
});
</script>
<style lang="scss" scoped>
.playWrapper {
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #111;
  .playWrapperControl {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 26px;
    padding-bottom: 10px;
    background: #111;
    max-width: 1920px;
    .playImg {
      width: 76px;
      height: 76px;
      flex-shrink: 0;
      border-radius: 100%;
      margin-right: 36px;
      outline: 2px solid #7209b7;
      img {
        width: 100%;
        height: 100%;
        border-radius: inherit;
      }
    }
    .playTitleControl {
      width: 250px;
      margin-right: 46px;
      display: flex;
      .playTitle {
        margin-right: 10px;
      }
    }
    .musicController {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 228px;
      margin-right: 46px;
      .prev,
      .prevSped,
      .next,
      .nextSped {
        svg:hover path {
          fill: #b5179e;
          cursor: pointer;
        }
      }
      .pause,
      .play:hover {
        cursor: pointer;
      }
      .pause,
      .paly {
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        background: var(--a, linear-gradient(136deg, #b5179e 0%, #7209b7 100%));
      }
    }
    .favoritesControl {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 228px;
      margin-right: 46px;
      .vol {
        display: flex;
        align-items: center;
      }
    }
    .iconsActive path {
      stroke: #b5179e !important;
    }
    .range {
      margin-right: 46px;
      .rangeTime {
        display: flex;
        justify-content: space-between;
      }
      input[type="range"] {
        cursor: pointer;
        width: 455px;
        height: 5px;
        accent-color: #b5179e;
        border-radius: 10px;
      }
    }
    .volControl {
      display: flex;
      align-items: center;
      margin-right: 50px;
      svg {
        margin-right: 5px;
      }
      input[type="range"] {
        cursor: pointer;
        width: 82px;
        height: 4px;
        accent-color: #b5179e;
        border-radius: 10px;
      }
    }
  }
}
</style>
