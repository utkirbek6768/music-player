const state = {
  current: {
    id: 1,
    currentTrack: null,
    currentTrackIndex: 0,
    isTimerPlaying: false,
    muted: false,
    volume: 100,
    shuffle: false,
  },

  player: {
    isTimerPlaying: false,
    muted: false,
    volume: 100,
    shuffle: false,
    currentTrackIndex: 0,
  },
  songs: [
    {
      id: 1,
      name: "Unuticak Dunler",
      artist: "Gazapizm",
      cover:
        "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
      source: "./songs/Gazapizm_Unutulacak.mp3",
      url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
      duration: null,
      isPlaying: false,
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
      isPlaying: false,
    },
    {
      id: 3,
      name: "Cheshmanat",
      artist: "Eham",
      cover:
        "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
      source: "./songs/Ehaam_Cheshmanat.mp3",
      url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
      duration: null,
      isPlaying: false,
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
      isPlaying: false,
    },
    {
      id: 5,
      name: "Ferzah",
      artist: "Canbay & Wolker",
      cover:
        "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
      source: "./songs/Canbay_ Fersah.mp3",
      url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
      duration: null,
      isPlaying: false,
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
      isPlaying: false,
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
      isPlaying: false,
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
      isPlaying: false,
    },
  ],
};

const mutations = {
  mountState(state) {
    for (const element of state.songs) {
      element.isPlaying = false;
    }
    state.current.currentTrack = state.songs[state.current.currentTrackIndex];
  },
  nextState(state) {
    for (const element of state.songs) {
      element.isPlaying = false;
    }
    if (state.current.currentTrackIndex < state.songs.length - 1) {
      state.current.currentTrackIndex++;
      state.current.currentTrack = state.songs[state.current.currentTrackIndex];
      state.songs[state.current.currentTrackIndex].isPlaying = true;
    } else {
      state.current.currentTrackIndex = 0;
      state.current.currentTrack = state.songs[state.current.currentTrackIndex];
    }
  },
  prevState(state) {
    for (const element of state.songs) {
      element.isPlaying = false;
    }
    if (state.current.currentTrackIndex > 0) {
      state.current.currentTrackIndex--;
      state.current.currentTrack = state.songs[state.current.currentTrackIndex];
    } else {
      state.current.currentTrackIndex = state.songs.length - 1;
      state.current.currentTrack = state.songs[state.current.currentTrackIndex];
    }
  },
  playState(state, index) {
    for (const element of state.songs) {
      element.isPlaying = false;
    }
    // if (index) {
    //   state.current.currentTrackIndex = index;
    //   state.current.currentTrack = state.songs[state.current.currentTrackIndex];
    //   state.current.currentTrack.isPlaying = true;
    // }
  },
};
const actions = {};

export default { state, mutations, actions };
