<template>
  <div class="exam">
    <chronometer @chronometer:time="timeDown"></chronometer>
    <div class="exam__container">
      <h2 v-if="count == 0" class="exam__title">Evaluación de conocimientos en la conducción para postulantes
a licencias de conducir de clase {{category.toUpperCase()}}</h2>
      <div class="question">
        <div class="question__container card">        
        <!--<p class="question__theme" v-text="questions[count].theme"></p>-->
        <p class="question__statement">{{count+1}}) {{questions[count].statement}}</p>
        <div class="question__image">
          <img v-if="questions[count].image != ''" :src="require(`@/assets${questions[count].image}`)" alt="" srcset="">  
        </div>
        <div class="question__option" v-bind:class="[a_class]">          
          <input type="radio" id="a" value="a" v-model="picked" class="question__radio">
          <img v-if="questions[count].alternatives.a_img" :src="require(`@/assets${questions[count].alternatives.a_img}`)" alt="" srcset="">
          <label v-else for="a" class="question__label">a) {{questions[count].alternatives.a}}</label>    
        </div>
        <div class="question__option" v-bind:class="[b_class]">
          <input type="radio" id="b" value="b" v-model="picked" class="question__radio">
          <img v-if="questions[count].alternatives.b_img" :src="require(`@/assets${questions[count].alternatives.b_img}`)" alt="" srcset="">
          <label v-else for="b" class="question__label">b) {{questions[count].alternatives.b}}</label>
          
        </div>
        <div class="question__option" v-bind:class="[c_class]">
          <input type="radio" id="c" value="c" v-model="picked" class="question__radio">
          <img v-if="questions[count].alternatives.c_img" :src="require(`@/assets${questions[count].alternatives.c_img}`)" alt="" srcset="">
          <label v-else for="c" class="question__label">c) {{questions[count].alternatives.c}}</label>
        </div>
        <div class="question__option" v-bind:class="[d_class]">
          <input type="radio" id="d" value="d" v-model="picked" class="question__radio">
          <img v-if="questions[count].alternatives.d_img" :src="require(`@/assets${questions[count].alternatives.d_img}`)" alt="" srcset="">
          <label v-else for="d" class="question__label">d) {{questions[count].alternatives.d}}</label> 
        </div>
        <div class="question__options">
          <button class="exam__button btn btn--green" @click="checkQuestion">Revisar</button>
          <button class="exam__button btn" @click="check" v-text="btnText"></button>
        </div>        
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import chronometer from "../components/chronometer";
export default {
  components: {
    chronometer
  },
  data: function() {
    return {
      picked: "",
      count: 0,
      a_class: '',
      b_class: '',
      c_class: '',
      d_class: '',
    };
  },
  computed: {
    ...mapGetters(["questions", "category"]),
    btnText: function() {
      return this.count == 40 ? "Finalizar" : "Siguiente";
    }
  },
  created() {
    this.fetchQuestions();
  },
  methods: {
    ...mapMutations(["ADD_DEVELOPMENT"]),
    ...mapActions(["fetchQuestions", "fetchCurrentImage"]),
    check() {
      let item = {};
      item.response = this.picked;
      item.correct = this.questions[this.count].response;
      if (item.response == item.correct) this.$store.commit("INCREMENT_SCORE");
      this.$store.commit("ADD_DEVELOPMENT", item);
      this.count++;
      this.picked = "";
      this.a_class = '';
      this.b_class = '';
      this.c_class = '';
      this.d_class = '';
      if (this.count == 40) {
        this.$router.push("results");
      }
    },
    checkQuestion() {
      let item = {};
      item.response = this.picked;
      item.correct = this.questions[this.count].response;
      if (item.response == item.correct) {
        switch(item.response){
          case 'a': this.a_class = 'green'; break;
          case 'b': this.b_class = 'green'; break;
          case 'c': this.c_class = 'green'; break;
          case 'd': this.d_class = 'green'; break;
        }
      } else{
        switch(item.correct){
          case 'a': this.a_class = 'green'; break;
          case 'b': this.b_class = 'green'; break;
          case 'c': this.c_class = 'green'; break;
          case 'd': this.d_class = 'green'; break;
        }
        switch(item.response){
          case 'a': this.a_class = 'red'; break;
          case 'b': this.b_class = 'red'; break;
          case 'c': this.c_class = 'red'; break;
          case 'd': this.d_class = 'red'; break;
        }
      }
    },
    timeDown(){
      this.$router.push("results");
    }
  }
};
</script>

<style lang="scss">
@import "../styles.scss";
.exam {
  &__container {
    @include edContainer;
    @include mainCenter;
    text-align: left;
  }
  
  &__title {
    text-align: center;
    display: block;
  }
}
.question {
  @include edContainer;
  margin-bottom: 30px;
  margin-top: 20px;
  padding: 0 15px;
  &__container {
    @include edItem(100);
  }
  &__theme {
    @include edItem(100);
    font-weight: 700;
    margin-bottom: 30px;
    padding: 0;
  }
  &__image{
    @include edItem(100);
    text-align: center;
  }
  &__statement {
    @include edItem(100);
    text-align: left;
    margin-bottom: 30px;
    padding: 0;
    font-weight: bold;
  }
  &__option {
    @include edItem(100);
    text-align: left;
  }
  &__options {
    @include edItem(100);
    @include edContainer;
    @include mainCenter;
    margin-top: 30px;
  }
}
.red{
  background: rgb(255, 110, 110);
}
.green{
  background: rgb(154, 255, 168);
}
</style>
