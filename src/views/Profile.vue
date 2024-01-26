<template>
  <div class="main">
    <div class="bg-cover"></div>
    <div class="containerCard">
      <div class="header">
        <i class="fa fa-bars">
          <svg
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
        </i>
        <i class="fa fa-cog">
          <svg
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
        ></i>
      </div>
      <div class="middle">
        <img
          src="https://cdn.pixabay.com/photo/2021/06/04/11/24/woman-6309565_960_720.jpg"
          alt=""
          class="user-pic"
        />
        <h4 class="name">Jane Ortega</h4>
        <h4 class="work">ASP.net | HTML | CSS</h4>
        <h4 class="social">
          <i class="fa fa-facebook"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i class="fa fa-dribbble"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i class="fa fa-twitter"></i>
        </h4>
      </div>
      <div class="footer">
        <button class="btn-follow">play</button><br />
        <i class="fa fa-lock"></i>
        <br />
        <h4 class="profile-status">This profile is hidden</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const play = ref(true);
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  background: url(https://newevolutiondesigns.com/images/freebies/city-wallpaper-18.jpg);
  background-size: cover;
  font-family: verdana;
}

.bg-cover {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 255, 0.2);
  z-index: -1;
}

.containerCard {
  width: 400px;
  height: 500px;
  background: var(--a, linear-gradient(136deg, #b5179e 0%, #7209b7 100%));
  margin: 50px auto;
  border-radius: 12px;
  overflow: hidden;
}

.header i {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  margin-top: 20px;
}

.fa-bars {
  float: left;
  margin-left: 20px;
}

.fa-bars:hover {
  cursor: pointer;
  animation: bars 0.3s ease-in forwards;
}

.fa-cog {
  float: right;
  margin-right: 20px;
}

.fa-cog:hover {
  cursor: pointer;
  animation: rotate 1s ease-in infinite;
}

div.middle {
  position: relative;
  text-align: center;
  top: 70px;
}
div.middle img {
  object-fit: cover;
}

img.user-pic {
  width: 110px;
  height: 110px;
  border-radius: 100%;
  background: rgba(255, 255, 255, 0.7);
  border: 5px solid rgba(255, 255, 255, 1);
}

h4.name {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  padding: 10px;
}

h4.work {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  padding-top: 0px;
}

h4.social {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.5);
  padding: 15px;
}

div.footer {
  position: relative;
  top: 110px;
  height: 180px;
  text-align: center;
  background: rgba(17, 16, 16, 0.7);
  backdrop-filter: blur(15.5px);
}

.btn-follow {
  position: relative;
  padding: 15px 70px;
  top: -22px;
  background: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #f9690e;
  box-shadow: 0px 5px 45px rgba(249, 105, 14, 0.4);
  border: 1px solid transparent;
  transition: all 0.5s ease-in;
}

.btn-follow:hover {
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: #e831f8;
  color: rgba(255, 255, 255, 1);
}

.fa-lock {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.2);
  padding-top: 15px;
}

.profile-status {
  font-size: 12px;
  padding-top: 7px;
  color: white;
}

@keyframes rotate {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}

@keyframes bars {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}
</style>
