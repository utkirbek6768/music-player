import { createStore } from "vuex";
import auth from "../modules/auth";
import tracks from "../modules/tracks";
const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth, tracks },
  strict: true,
});
export default store;
