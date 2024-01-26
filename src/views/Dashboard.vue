<template>
  <main class="main">
    <div class="search-component">
      <div class="search-control">
        <button>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2914 19.5829C15.4229 19.5829 19.5829 15.4229 19.5829 10.2914C19.5829 5.15991 15.4229 1 10.2914 1C5.15991 1 1 5.15991 1 10.2914C1 15.4229 5.15991 19.5829 10.2914 19.5829Z"
              stroke="#B8B8B8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23.2857 23.2857L16.8571 16.8571"
              stroke="#B8B8B8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <input
          type="text"
          placeholder="search music, artist, genre"
          class="search"
        />
      </div>
    </div>
    <div class="mainTitle">
      <span
        ><svg
          width="20"
          height="25"
          viewBox="0 0 20 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.28571 23.2857C7.65265 23.2857 9.57143 21.3669 9.57143 19C9.57143 16.6331 7.65265 14.7143 5.28571 14.7143C2.91878 14.7143 1 16.6331 1 19C1 21.3669 2.91878 23.2857 5.28571 23.2857Z"
            stroke="url(#paint0_linear_7_883)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.57144 19V1C10.8096 1 12.0357 1.24388 13.1796 1.71771C14.3235 2.19154 15.3629 2.88604 16.2384 3.76156C17.114 4.63709 17.8085 5.67649 18.2823 6.82041C18.7561 7.96434 19 9.19039 19 10.4286V10.4286"
            stroke="url(#paint1_linear_7_883)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_7_883"
              x1="-0.105121"
              y1="13.3956"
              x2="12.3346"
              y2="14.1584"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#B5179E" />
              <stop offset="1" stop-color="#7209B7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_7_883"
              x1="8.35581"
              y1="-1.76924"
              x2="22.0768"
              y2="-1.32851"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#B5179E" />
              <stop offset="1" stop-color="#7209B7" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      Discover Genre
    </div>
    <div class="cardControl">
      <div v-for="(card, index) in cardData" :key="index" class="card">
        <img :src="card.url" alt="gitara img" class="card-img" />
        <div class="card__footer">
          <div class="card__footer__title-control">
            <div class="card-title">{{ card.title }}</div>
            <div class="tracks-count">
              <span>{{ card.count }}</span> tracks
            </div>
          </div>
          <div class="card-button">
            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.19695 22.6845C0.695284 22.7718 0.357164 23.2498 0.468057 23.7468C1.10205 26.5881 2.3652 29.2555 4.16902 31.5504C6.16302 34.0872 8.75538 36.0896 11.7137 37.378C14.672 38.6664 17.9038 39.2006 21.1194 38.9326C24.335 38.6647 27.4338 37.6029 30.138 35.8426C32.8423 34.0823 35.0675 31.6785 36.6141 28.8466C38.1607 26.0147 38.9804 22.8432 38.9997 19.6166C39.0189 16.3899 38.2372 13.2089 36.7246 10.3587C35.3562 7.78034 33.4284 5.54562 31.0869 3.81582C30.6774 3.51325 30.1033 3.62893 29.8205 4.05233C29.5376 4.47573 29.6532 5.04636 30.0612 5.35094C32.1498 6.90985 33.8705 8.91433 35.0958 11.2231C36.4654 13.8038 37.1732 16.684 37.1557 19.6055C37.1383 22.5271 36.3961 25.3986 34.9957 27.9627C33.5954 30.5269 31.5806 32.7034 29.1321 34.2972C26.6835 35.8911 23.8778 36.8524 20.9663 37.095C18.0548 37.3377 15.1286 36.854 12.45 35.6874C9.77142 34.5208 7.4242 32.7078 5.61875 30.4108C4.00352 28.3559 2.86709 25.971 2.28697 23.4303C2.17362 22.9338 1.69861 22.5972 1.19695 22.6845Z"
                fill="#DEDEDE"
              />
              <path
                d="M27.5 19.134C28.1667 19.5189 28.1667 20.4811 27.5 20.866L17 26.9282C16.3333 27.3131 15.5 26.832 15.5 26.0622L15.5 13.9378C15.5 13.168 16.3333 12.6869 17 13.0718L27.5 19.134Z"
                fill="#DEDEDE"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="playlistControl">
      <div class="playTitleControl">
        <div class="earphoneAndTitle">
          <div class="earphone">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.85713 13H6.14284C5.19607 13 4.42856 13.7675 4.42856 14.7143V21.5714C4.42856 22.5182 5.19607 23.2857 6.14284 23.2857H7.85713C8.8039 23.2857 9.57142 22.5182 9.57142 21.5714V14.7143C9.57142 13.7675 8.8039 13 7.85713 13Z"
                stroke="url(#paint0_linear_7_906)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.1429 13H16.4286C15.4818 13 14.7143 13.7675 14.7143 14.7143V21.5714C14.7143 22.5182 15.4818 23.2857 16.4286 23.2857H18.1429C19.0896 23.2857 19.8572 22.5182 19.8572 21.5714V14.7143C19.8572 13.7675 19.0896 13 18.1429 13Z"
                stroke="url(#paint1_linear_7_906)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 16.4286V12.1429C1 9.18759 2.17398 6.35336 4.26367 4.26367C6.35336 2.17398 9.18759 1 12.1429 1C15.0981 1 17.9324 2.17398 20.022 4.26367C22.1117 6.35336 23.2857 9.18759 23.2857 12.1429V16.4286"
                stroke="url(#paint2_linear_7_906)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_7_906"
                  x1="3.76549"
                  y1="11.4176"
                  x2="11.2504"
                  y2="11.6471"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B5179E" />
                  <stop offset="1" stop-color="#7209B7" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_7_906"
                  x1="14.0512"
                  y1="11.4176"
                  x2="21.5361"
                  y2="11.6471"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B5179E" />
                  <stop offset="1" stop-color="#7209B7" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_7_906"
                  x1="-1.87331"
                  y1="-1.37363"
                  x2="30.3389"
                  y2="1.47955"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B5179E" />
                  <stop offset="1" stop-color="#7209B7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="playTitle">Top Music</div>
        </div>
        <div class="playTitleControl-link">show more >></div>
      </div>
    </div>
    <div hidden>
      <audio preload="auto" ref="audio" muted="true"></audio>
    </div>
    <div class="musicItemControl">
      <div
        @click="testHandler(index)"
        v-for="(music, index) in tracks"
        :key="index"
        class="musicItem"
      >
        <div class="musicItemIndex" :class="{ indexActive: music.isPlaying }">
          {{ index + 1 }}
        </div>
        <div class="musicItemImg" :class="{ imgActive: music.isPlaying }">
          <img :src="music.cover" alt="Rasim qani" />
        </div>
        <div class="musicItemTitle" :class="{ titleAvtive: music.isPlaying }">
          {{ music.artist }} -
          <span>{{ music.name }}</span>
        </div>
        <div
          class="musicItemTimeCount"
          :class="{ timeCountActive: music.isPlaying }"
        >
          {{ music?.duration }}
        </div>

        <div @click="play(index)" class="playButton">
          <div v-if="music.isPlaying" class="playButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="26"
              viewBox="0 0 18 26"
              fill="none"
            >
              <rect
                width="5"
                height="26"
                rx="2.5"
                fill="url(#paint0_linear_9_59)"
              />
              <rect
                x="13"
                width="5"
                height="26"
                rx="2.5"
                fill="url(#paint1_linear_9_59)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_9_59"
                  x1="-0.644654"
                  y1="-4.00001"
                  x2="6.63814"
                  y2="-3.91413"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B5179E" />
                  <stop offset="1" stop-color="#7209B7" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_9_59"
                  x1="12.3553"
                  y1="-4.00001"
                  x2="19.6381"
                  y2="-3.91413"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B5179E" />
                  <stop offset="1" stop-color="#7209B7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div v-else class="playButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="22"
              viewBox="0 0 19 22"
              fill="none"
            >
              <path
                d="M18.5 10.134C19.1667 10.5189 19.1667 11.4811 18.5 11.866L2 21.3923C1.33333 21.7772 0.5 21.2961 0.5 20.5263L0.5 1.47372C0.5 0.703919 1.33333 0.222795 2 0.607695L18.5 10.134Z"
                fill="#B8B8B8"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<!-- script start -->
<script setup>
import { ref, watch, onMounted } from "vue";
import store from "@/store";

const cardData = ref([
  {
    url: "/gitara.png",
    title: "Acoustic",
    count: "120",
  },
  {
    url: "/gitares.png",
    title: "Acoustic",
    count: "120",
  },
  {
    url: "/microphone.png",
    title: "Acoustic",
    count: "120",
  },
]);
const testHandler = (e) => {
  store.commit("playState", e);
  currentTrack.value = store.state.tracks.current.currentTrack;
};

const audio = ref(null);
const tracks = ref(null);
const circleLeft = ref(null);
const barWidth = ref(null);
const duration = ref(null);
const currentTime = ref(null);
const isTimerPlaying = ref(false);
const currentTrack = ref(null);
const transitionName = ref(null);

const play = () => {
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
  currentTrack.value = store.state.tracks.current.currentTrack;
};

const prevTrack = () => {
  store.commit("prevState");
  currentTrack.value = store.state.tracks.current.currentTrack;
};

const currentTimeHandler = () => {
  currentTime.value = 100;
};

onMounted(() => {
  store.commit("mountState");
  store.commit("playState");
  audio.value = new Audio();
  currentTrack.value = store.state.tracks.current.currentTrack;
  tracks.value = store.state.tracks.songs;

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

  currentTrack.value = store.state.tracks.current.currentTrack;
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
<!-- script end -->
<style lang="scss" scoped>
.search-component {
  display: flex;
  justify-content: center;
  margin-top: 37px;
}
.search-control {
  width: 100%;
  height: 50px;
  margin: 15px auto;
  display: inline-flex;
  padding: 05px 22px;
  align-items: center;
  gap: 22px;
  border-radius: 36px;
  background: rgba(65, 65, 65, 0.65);
  backdrop-filter: blur(88px);
  button {
    background-color: transparent;
    border: none;
  }
}
.search {
  background: transparent;
  outline: none;
  border: none;
  width: 80%;
  height: 100%;
  padding-left: 20px;
  color: #b8b8b8;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.32px;
  text-transform: capitalize;
}
.mainTitle {
  margin: 27px 0px;
  color: #f1f1f1;
  font-family: Inter;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.52px;
  text-transform: capitalize;
  span {
    margin: 20px;
  }
}
.cardControl {
  margin-bottom: 66px;
  display: flex;
}
.card {
  width: 239px;
  height: 269px;
  position: relative;
  border-radius: 20px;
  display: flex;
  align-items: end;
  margin-right: 24px;
  &:last-child {
    margin-right: 0px;
  }

  .card-img {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
}
.card__footer {
  width: 100%;
  height: 68px;
  padding: 0px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  border-radius: 0px 0px 20px 20px;
  background: rgba(69, 69, 69, 0.7);
  backdrop-filter: blur(15.5px);
}
.card__footer__title-control {
  .card-title {
    color: #dedede;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.8px;
    text-transform: capitalize;
    margin-bottom: 7px;
  }
  .tracks-count {
    color: #fff;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.24px;
    text-transform: capitalize;
  }
}
.playTitleControl {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
}
.earphoneAndTitle {
  display: flex;
  align-items: center;
  .earphone {
    margin-right: 23px;
  }
  .playTitle {
    color: #f1f1f1;
    font-family: Inter;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.52px;
    text-transform: capitalize;
  }
}
.playTitleControl-link {
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
  text-decoration-line: underline;
  text-transform: capitalize;
  background: var(--a, linear-gradient(136deg, #b5179e 0%, #7209b7 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.musicItem {
  display: flex;
  align-items: center;
  width: 100%;
  height: 79px;
  flex-shrink: 0;
  background: #1d1d1d;
  padding: 10px 30px;
  margin-bottom: 16px;
  .musicItemIndex {
    margin-right: 42px;
    color: #b8b8b8;
    font-family: Inter;
    font-size: 27px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.54px;
    text-transform: capitalize;
  }
  .musicItemImg {
    margin-right: 30px;
    width: 58px;
    height: 58px;
    border-radius: 100%;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }
  .musicItemTitle {
    margin-right: 112px;
    color: #b8b8b8;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.32px;
    text-transform: capitalize;
  }
  .musicItemTimeCount {
    margin-right: 80px;
    color: #b8b8b8;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.32px;
    text-transform: capitalize;
  }
  .musicItemEqualizer {
    width: 23px;
    height: 26px;
    flex-shrink: 0;
    fill: var(--a, linear-gradient(136deg, #b5179e 0%, #7209b7 100%));
  }
  .playButton {
    margin-left: auto;
  }
}
.musicItem {
  display: flex;
  align-items: center;
  width: 100%;
  height: 79px;
  flex-shrink: 0;
  background: #1d1d1d;
  padding: 10px 30px;
  .indexActive {
    margin-right: 42px;
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.6px;
    text-transform: capitalize;
    background: var(--a, linear-gradient(136deg, #b5179e 0%, #7209b7 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .imgActive {
    outline: 4px solid #b5179e;
    width: 58px;
    height: 58px;
    border-radius: 100%;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  }
  .musicItmTitle,
  .titleAvtive {
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.36px;
    text-transform: capitalize;
    background: var(--a, linear-gradient(136deg, #b5179e 0%, #7209b7 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .timeCountActive {
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.36px;
    text-transform: capitalize;
    background: var(--a, linear-gradient(136deg, #b5179e 0%, #7209b7 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .musicItemEqualizer {
    width: 23px;
    height: 26px;
    flex-shrink: 0;
    fill: var(--a, linear-gradient(136deg, #b5179e 0%, #7209b7 100%));
  }
}
</style>
