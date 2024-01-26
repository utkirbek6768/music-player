import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Test from "@/layouts/Test.vue";
import Dashboard from "@/views/Dashboard.vue";
import Profile from "@/views/Profile.vue";
import Favorite from "@/views/Favorite.vue";
import Livechat from "@/views/Livechat.vue";
import Friends from "@/views/Friends.vue";
import MobileApp from "@/views/MobileApp.vue";
import TestPlayer from "@/views/TestPlayer.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/test",
      name: "test",
      component: Test,
      meta: {
        title: "test",
        permission: "all",
      },
    },
    {
      path: "/",
      name: "layout",
      component: DefaultLayout,
      children: [
        {
          path: "/",
          name: "dashboard",
          component: Dashboard,
          meta: {
            title: "Dashboard",
            permission: 100000,
          },
        },
        {
          path: "/profile",
          name: "profile",
          component: Profile,
          meta: {
            title: "Profile",
            permission: 100000,
          },
        },
        {
          path: "/favorite",
          name: "favorite",
          component: Favorite,
          meta: {
            title: "Favorite",
            permission: 100000,
          },
        },
        {
          path: "/livechat",
          name: "livechat",
          component: Livechat,
          meta: {
            title: "Livechat",
            permission: 100000,
          },
        },
        {
          path: "/friends",
          name: "friends",
          component: Friends,
          meta: {
            title: "Friends",
            permission: 100000,
          },
        },
        {
          path: "/mobileapp",
          name: "mobileapp",
          component: MobileApp,
          meta: {
            title: "MobileApp",
            permission: 100000,
          },
        },
        {
          path: "/testplayer",
          name: "testplayer",
          component: TestPlayer,
          meta: {
            title: "testplayer",
            permission: 100000,
          },
        },
      ],
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   var permissionList = localStorage.getItem("permissions")?.split(",");
//   if (to.meta.permission == "all") {
//     next();
//     return;
//   } else if (permissionList) {
//     let per = permissionList.includes(String(to.meta.permission));
//     if (per) {
//       next();
//       return;
//     } else {
//       next("/permission/denied");
//     }
//   } else {
//     next("/permission/denied");
//   }
// });
export default router;
