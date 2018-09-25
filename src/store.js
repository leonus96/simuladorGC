import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';

Vue.use(Vuex)
const database = firebase.database();

export default new Vuex.Store({
  state: {
    questions: []
  },

  mutations: {
    [GET_QUESTIONS](state, questions) {
      state.questions = questions;
    }
  },

  actions: {
    fetchQuestions(context) {
      let questions = [];
      const randomIndex = randomN(199, 20);

      var ref = database.ref('/generales/');

      randomIndex.map(index => {
        ref.limitToFirst(index).limitToLast(1).once('value').then(snapshoot => {
          questions.push(snapshoot.val());
        });
      });

      context.commit(FETCH_QUESTIONS, questions);
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