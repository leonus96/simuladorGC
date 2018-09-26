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
    category: '',
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
    },
    MUTATE_CATEGORY: (state, category) => {
      state.category = category;
    }
  },
  actions: {    
    fetchQuestions: ({commit, getters}) => {
      let randomGen = [];
      let randomCat = [];
      //console.log(getters.category);
      if(getters.category == 'ai')
        randomGen = randomN(199, 40);
      else 
        randomGen = randomN(199, 20);      
      switch(getters.category) {
        case 'aiia': randomCat = randomN(22, 20);break;
        case 'aiib': randomCat = randomN(69, 20);break;
        case 'aiiia': randomCat = randomN(71, 20);break;
        case 'aiiib': randomCat = randomN(70, 20);break;
        case 'aiiic': randomCat = randomN(138, 20);break;
      }
      
      randomGen.map(index => {
        database.ref(`/generales/${index}`).once('value').then(snapshot => {
          commit('ADD_QUESTION', snapshot.val());
        })
      });
      
      randomCat.map(index => {
        database.ref(`/${getters.category}/${index}`).once('value').then(snapshot => {
          commit('ADD_QUESTION', snapshot.val());
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
    },
    category(state){
      return state.category;
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