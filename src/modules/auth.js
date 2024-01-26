import AuthServise from "../servise/auth";

const state = {
  isLoading: false,
  user: null,
  errors: null,
  isLoggedIn: null,
};
const getters = {
  currentUser: (state) => {
    return state.user;
  },
  currentUserData: (state) => {
    if (state.user) {
      return state.user.data;
    } else {
      return [];
    }
  },
};

const mutations = {};
const actions = {
  searchMusicList() {
    return new Promise((resolve) => {
      AuthServise.searchMusic()
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => console.log(err));
    });
  },
  getTracksList() {
    return new Promise((resolve) => {
      AuthServise.getTracks()
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => console.log(err));
    });
  },
};

export default { state, mutations, actions, getters };
