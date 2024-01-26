<template>
  <div class="defaultWrapper">
    <div class="body">
      <div class="left-menu">
        <div class="logo">
          <img src="/logo.png" alt="Rasim qani" />
        </div>
        <span class="menu-title">Menu</span>
        <div class="hr">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="2"
            viewBox="0 0 213 2"
            fill="none"
          >
            <path d="M0 1H213" stroke="url(#paint0_linear_15_164)" />
            <defs>
              <linearGradient
                id="paint0_linear_15_164"
                x1="-27.4623"
                y1="0.846153"
                x2="-25.654"
                y2="24.4641"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B5179E" />
                <stop offset="1" stop-color="#7209B7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <ul class="menu-wrapper">
          <li
            v-for="(menu, index) in menuData"
            :key="index"
            class="menu-item"
            :class="{ active: router.currentRoute.value.fullPath == menu.url }"
          >
            <RouterLink
              @click="activeHandler(menu.title)"
              :to="menu.url"
              class="menuLink"
            >
              <span class="svg">
                <img :src="menu.icon" alt="menu icon" />
              </span>
              {{ menu.title }}
            </RouterLink>
          </li>
        </ul>
        <span class="menu-title" style="margin-top: 100px; display: block"
          >Help</span
        >
        <div class="hr">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="2"
            viewBox="0 0 213 2"
            fill="none"
          >
            <path d="M0 1H213" stroke="url(#paint0_linear_15_164)" />
            <defs>
              <linearGradient
                id="paint0_linear_15_164"
                x1="-27.4623"
                y1="0.846153"
                x2="-25.654"
                y2="24.4641"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B5179E" />
                <stop offset="1" stop-color="#7209B7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <ul class="menu-wrapper">
          <li class="menu-item">
            <span class="svg"
              ><svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.27561 3.19925L6.816 1.8043C6.90714 1.56812 7.06748 1.36496 7.27602 1.22145C7.48457 1.07793 7.73159 1.00075 7.98475 1H9.01525C9.26841 1.00075 9.51543 1.07793 9.72398 1.22145C9.93252 1.36496 10.0929 1.56812 10.184 1.8043L10.7244 3.19925L12.5592 4.25489L14.0421 4.02868C14.289 3.99517 14.5404 4.03582 14.7641 4.14546C14.9879 4.25511 15.174 4.4288 15.2988 4.64448L15.8015 5.52418C15.9303 5.74328 15.9897 5.9963 15.9717 6.24983C15.9538 6.50336 15.8594 6.74549 15.701 6.94427L14.7836 8.11301V10.2243L15.7261 11.393C15.8845 11.5918 15.9789 11.8339 15.9969 12.0875C16.0148 12.341 15.9555 12.594 15.8267 12.8131L15.324 13.6928C15.1991 13.9085 15.013 14.0822 14.7893 14.1918C14.5655 14.3015 14.3142 14.3421 14.0672 14.3086L12.5843 14.0824L10.7495 15.1381L10.2091 16.533C10.118 16.7692 9.95766 16.9723 9.74911 17.1159C9.54057 17.2594 9.29354 17.3366 9.04039 17.3373H7.98475C7.73159 17.3366 7.48457 17.2594 7.27602 17.1159C7.06748 16.9723 6.90714 16.7692 6.816 16.533L6.27561 15.1381L4.44081 14.0824L2.95788 14.3086C2.71096 14.3421 2.45965 14.3015 2.23588 14.1918C2.01211 14.0822 1.82599 13.9085 1.70117 13.6928L1.19848 12.8131C1.06967 12.594 1.01032 12.341 1.02827 12.0875C1.04622 11.8339 1.14062 11.5918 1.29902 11.393L2.21642 10.2243V8.11301L1.27389 6.94427C1.11549 6.74549 1.02109 6.50336 1.00314 6.24983C0.985189 5.9963 1.04454 5.74328 1.17335 5.52418L1.67603 4.64448C1.80086 4.4288 1.98698 4.25511 2.21074 4.14546C2.43451 4.03582 2.68583 3.99517 2.93275 4.02868L4.41567 4.25489L6.27561 3.19925ZM5.98657 9.16865C5.98657 9.66576 6.13398 10.1517 6.41016 10.565C6.68634 10.9784 7.07888 11.3005 7.53815 11.4908C7.99742 11.681 8.50279 11.7308 8.99035 11.6338C9.4779 11.5368 9.92575 11.2974 10.2773 10.9459C10.6288 10.5944 10.8682 10.1466 10.9651 9.659C11.0621 9.17144 11.0123 8.66607 10.8221 8.2068C10.6319 7.74753 10.3097 7.35499 9.89639 7.07881C9.48306 6.80263 8.99711 6.65522 8.5 6.65522C7.8334 6.65522 7.1941 6.92003 6.72274 7.39139C6.25138 7.86275 5.98657 8.50205 5.98657 9.16865V9.16865Z"
                  stroke="#B8B8B8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
            ></span>
            Settings
          </li>
          <li class="menu-item">
            <span class="svg"
              ><svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.15385 7.34613H3.30769C3.4607 7.34613 3.60744 7.40691 3.71564 7.51511C3.82383 7.6233 3.88462 7.77004 3.88462 7.92305V10.8077C3.88462 10.9607 3.82383 11.1074 3.71564 11.2156C3.60744 11.3238 3.4607 11.3846 3.30769 11.3846H2.15385C1.84783 11.3846 1.55434 11.263 1.33795 11.0466C1.12157 10.8302 1 10.5368 1 10.2307V8.49998C1 8.19396 1.12157 7.90047 1.33795 7.68408C1.55434 7.4677 1.84783 7.34613 2.15385 7.34613V7.34613Z"
                  stroke="#B8B8B8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.8461 11.3846H13.6923C13.5393 11.3846 13.3925 11.3238 13.2844 11.2156C13.1762 11.1074 13.1154 10.9607 13.1154 10.8077V7.92307C13.1154 7.77007 13.1762 7.62332 13.2844 7.51513C13.3925 7.40693 13.5393 7.34615 13.6923 7.34615H14.8461C15.1522 7.34615 15.4457 7.46772 15.662 7.68411C15.8784 7.90049 16 8.19398 16 8.5V10.2308C16 10.5368 15.8784 10.8303 15.662 11.0467C15.4457 11.263 15.1522 11.3846 14.8461 11.3846V11.3846Z"
                  stroke="#B8B8B8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.3846 14.5577C11.9967 14.5577 12.5836 14.3146 13.0164 13.8818C13.4492 13.449 13.6923 12.862 13.6923 12.25V11.3846"
                  stroke="#B8B8B8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.94231 13.1154C10.3248 13.1154 10.6917 13.2673 10.9622 13.5378C11.2327 13.8083 11.3846 14.1752 11.3846 14.5577C11.3846 14.9402 11.2327 15.3071 10.9622 15.5776C10.6917 15.848 10.3248 16 9.94231 16H8.21154C7.82901 16 7.46216 15.848 7.19167 15.5776C6.92119 15.3071 6.76923 14.9402 6.76923 14.5577C6.76923 14.1752 6.92119 13.8083 7.19167 13.5378C7.46216 13.2673 7.82901 13.1154 8.21154 13.1154H9.94231Z"
                  stroke="#B8B8B8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.30769 7.34615V6.19231C3.30769 4.81522 3.85474 3.49454 4.82849 2.52079C5.80223 1.54705 7.12292 1 8.5 1C9.87709 1 11.1978 1.54705 12.1715 2.52079C13.1453 3.49454 13.6923 4.81522 13.6923 6.19231V7.34615"
                  stroke="#B8B8B8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.76923 5.03845V6.76922"
                  stroke="#B8B8B8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.2308 5.03845V6.76922"
                  stroke="#B8B8B8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.76923 9.07693C6.76923 10.6116 10.2308 10.6116 10.2308 9.07693"
                  stroke="#B8B8B8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
            ></span>
            FAQs
          </li>
        </ul>
      </div>

      <!-- ------------------------------------------------ -->
      <RouterView />
      <!-- ------------------------------------------------ -->
      <div class="right-menu">
        <div class="userControl">
          <div class="userAvatar">
            <img src="/userAvatar.png" alt="userAvatar" />
          </div>
          <div class="userNameControl">
            <div class="userName">Jane Ortega</div>
            <div class="userdescription">Premium Blog</div>
          </div>
          <div class="call">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="25"
              viewBox="0 0 31 25"
              fill="none"
            >
              <path
                d="M12.1429 1C14.0933 1 15.9639 1.77482 17.3431 3.15402C18.7223 4.53322 19.4971 6.40381 19.4971 8.35429C19.4971 16.5314 22.48 18.1429 23.2857 18.1429H1C1.82286 18.1429 4.78857 16.5143 4.78857 8.35429C4.78857 6.40381 5.5634 4.53322 6.94259 3.15402C8.32179 1.77482 10.1924 1 12.1429 1V1Z"
                stroke="#B8B8B8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.57141 21.28C9.7196 21.8492 10.0524 22.3531 10.5178 22.7128C10.9831 23.0725 11.5547 23.2677 12.1428 23.2677C12.731 23.2677 13.3025 23.0725 13.7679 22.7128C14.2332 22.3531 14.5661 21.8492 14.7143 21.28"
                stroke="#B8B8B8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle cx="24" cy="16" r="7" fill="url(#paint0_linear_102_80)" />
              <defs>
                <linearGradient
                  id="paint0_linear_102_80"
                  x1="15.195"
                  y1="6.84615"
                  x2="35.5132"
                  y2="8.09208"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B5179E" />
                  <stop offset="1" stop-color="#7209B7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div class="artistControl">
          <div class="artistControlTitle">Top Artist</div>
          <div class="artistList">
            <div
              v-for="(artist, index) in artistData"
              :key="index"
              class="artist"
            >
              <div class="artistAvatar">
                <img :src="artist.url" alt="userAvatar" />
              </div>
              <div class="artistNameControl">
                <div class="artistName">{{ artist.name }}</div>
                <div class="artistdescription">{{ artist.description }}</div>
              </div>
              <div class="burger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                >
                  <path
                    d="M1.84615 3.69231C2.86575 3.69231 3.69231 2.86575 3.69231 1.84615C3.69231 0.826551 2.86575 0 1.84615 0C0.826551 0 0 0.826551 0 1.84615C0 2.86575 0.826551 3.69231 1.84615 3.69231Z"
                    fill="#B8B8B8"
                  />
                  <path
                    d="M1.84615 9.84614C2.86575 9.84614 3.69231 9.01959 3.69231 7.99999C3.69231 6.98039 2.86575 6.15384 1.84615 6.15384C0.826551 6.15384 0 6.98039 0 7.99999C0 9.01959 0.826551 9.84614 1.84615 9.84614Z"
                    fill="#B8B8B8"
                  />
                  <path
                    d="M1.84615 16C2.86575 16 3.69231 15.1734 3.69231 14.1538C3.69231 13.1342 2.86575 12.3077 1.84615 12.3077C0.826551 12.3077 0 13.1342 0 14.1538C0 15.1734 0.826551 16 1.84615 16Z"
                    fill="#B8B8B8"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="artistControl">
          <div class="artistControlTitle">Recently Played</div>
          <div class="artistList">
            <div
              v-for="(played, index) in playedData"
              :key="index"
              class="artist"
            >
              <div class="artistAvatar">
                <img :src="played.url" alt="userAvatar" />
              </div>
              <div class="artistNameControl">
                <div class="artistName">{{ played.name }}</div>
                <div class="artistdescription">{{ played.description }}</div>
              </div>
              <div class="burger">
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <PlayControl :artistData="artistData" />
  </div>
</template>
<script setup>
import { ref, watchEffect } from "vue";
import { RouterLink } from "vue-router";
import router from "@/router";
import store from "@/store";
import PlayControl from "@/components/PlayControl.vue";
const menuData = ref([
  {
    url: "/profile",
    active: false,
    title: "Profile",
    icon: "../../public/svg/profile.svg",
  },
  {
    url: "/testplayer",
    active: false,
    title: "TestPlayer",
    icon: "../../public/svg/profile.svg",
  },
  {
    url: "/",
    active: false,
    title: "Dashboard",
    icon: "../../public/svg/dashboard.svg",
  },
  {
    url: "/favorite",
    active: true,
    title: "Favorite",
    icon: "../../public/svg/favorite.svg",
  },
  {
    url: "/livechat",
    active: false,
    title: "Live chat",
    icon: "../../public/svg/chat.svg",
  },
  {
    url: "/friends",
    active: false,
    title: "Friends",
    icon: "../../public/svg/friends.svg",
  },
  {
    url: "/mobileapp",
    active: false,
    title: "Mobile app",
    icon: "../../public/svg/mobile.svg",
  },
]);

const artistData = ref([
  {
    url: "./userAvatar.png",
    name: "Tarisa",
    description: "Premium Blog",
  },
  {
    url: "./userAvatar.png",
    name: "Tarisa",
    description: "Premium Blog",
  },
  {
    url: "./userAvatar.png",
    name: "Tarisa",
    description: "Premium Blog",
  },
  {
    url: "./userAvatar.png",
    name: "Tarisa",
    description: "Premium Blog",
  },
]);
const playedData = ref([
  {
    url: "../../public/userAvatar.png",
    name: "Tarisa",
    description: "5m ago",
  },
  {
    url: "../../public/userAvatar.png",
    name: "Tarisa",
    description: "5m ago",
  },
  {
    url: "../../public/userAvatar.png",
    name: "Tarisa",
    description: "5m ago",
  },
  {
    url: "../../public/userAvatar.png",
    name: "Tarisa",
    description: "5m ago",
  },
]);
</script>

<style lang="scss" scoped>
.active {
  border-radius: 6px;
  background: var(--a, linear-gradient(136deg, #b5179e 0%, #7209b7 100%));
}
.defaultWrapper {
  position: relative;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  height: 100%;
  max-width: 1920px;
  margin: auto;
  background: #111;
  color: #b8b8b8;
}
.body {
  display: flex;
  margin: 0px;
  padding: 0px;
  height: 100%;
  max-width: 1920px;
  margin: auto;
  background: #111;
  color: #b8b8b8;
}
.left-menu {
  height: 100vh;
  width: 300px;
  padding: 20px;
  padding-left: 36px;
}
.menu-wrapper {
  list-style: none;
}
.logo {
  text-align: center;
  margin: 30px 0px 30px 0px;
}
.menu-title {
  color: #b9b9b9;
  font-family: Inter;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.38px;
  text-transform: capitalize;
}
.menu-item {
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  color: #b8b8b8;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.32px;
  text-transform: capitalize;
  .menuLink {
    color: #b8b8b8;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.32px;
    text-transform: capitalize;
    text-decoration: none;
  }
  .svg {
    margin-right: 15px;
  }
}
.hr {
  margin: 10px 0px;
  width: 100%;
}
.right-menu {
  height: 100vh;
  width: 348px;
  padding-right: 36px;
  margin-right: auto !important;
}
.userControl {
  display: flex;
  align-items: center;
  margin: 47px 0px;
  .userAvatar {
    width: 52px;
    height: 52px;
    border-radius: 52px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
    margin-right: 25px;
  }
  .userNameControl {
    width: 162px;
    .userName {
      color: #fff;
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.4px;
      text-transform: capitalize;
      margin-bottom: 5px;
    }
    .userdescription {
      color: #b8b8b8;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.24px;
      text-transform: capitalize;
    }
  }
}
.artist {
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  padding: 6px 16px;
  background: rgba(35, 35, 35, 0.6);
  .artistAvatar {
    width: 50px;
    height: 40px;
    border-radius: 100%;
    margin-right: 25px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100%;
    }
  }
  .artistNameControl {
    width: 162px;
    margin-right: 67px;
  }
}
.artistControl {
  .artistControlTitle {
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.32px;
    text-transform: capitalize;
    margin: 32px;
  }
  .artistdescription {
    color: #b8b8b8;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.24px;
    text-transform: capitalize;
  }
}
</style>
