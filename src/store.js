import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import firebaseConfig from './config/firebase'

// Initialize Firebase
firebase.initializeApp(firebaseConfig.config);

Vue.use(Vuex)
const database = firebase.database();

export default new Vuex.Store({
  state: {
    questions: [],
    development: [],
    score: 0
  },
  mutations: {
    ADD_QUESTION: (state, question) => {
      state.questions.push(question);
    },
    ADD_DEVELOPMENT: (state, development) => {
      state.development.push(development);
    },
    INCREMENT_SCORE: (state) => {
      state.score++;
    }
  },
  actions: {
    fetchQGenerales: context => {
      const randomIndex = randomN(199, 20);
      
      randomIndex.map(index => {
        database.ref(`/generales/${index}`).once('value').then(snapshot => {
          context.commit('ADD_QUESTION', snapshot.val());
        })
      });      
    }
  },
  getters: {
    questions(state) {
      return state.questions;
    },
    development(state){
      return state.development;
    },
    score(state){
      return state.score;
    }
  }
});

function randomN(max, length) {
  let arr = []
  while (arr.length < length) {
    let randomnumber = Math.floor(Math.random() * max) + 1;
    if (arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
  }
  return arr;
} 