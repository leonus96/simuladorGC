<template>
  <div class="exam">
    <chronometer @chronometer:time="timeDown"></chronometer>
    <div class="exam__container">
      <h2 class="exam__title">Evaluación de conocimientos en la conducción para postulantes
a licencias de conducir de clase {{category.toUpperCase()}}</h2>
      <div class="question">
        <div class="question__container card">        
        <!--<p class="question__theme" v-text="questions[count].theme"></p>-->
        <p class="question__statement">{{count+1}}) {{questions[count].statement}}</p>
        <div class="question__image">
          <img v-if="questions[count].image != ''" :src="require(`@/assets${questions[count].image}`)" alt="" srcset="">  
        </div>
        <div class="question__option">
          <input type="radio" id="a" value="a" v-model="picked" class="question__radio">
          <label for="a" class="question__label">a) {{questions[count].alternatives.a}}</label>    
        </div>
        <div class="question__option">
          <input type="radio" id="b" value="b" v-model="picked" class="question__radio">
          <label for="b" class="question__label">b) {{questions[count].alternatives.b}}</label>
        </div>
        <div class="question__option">
          <input type="radio" id="c" value="c" v-model="picked" class="question__radio">
          <label for="c" class="question__label">c) {{questions[count].alternatives.c}}</label>
        </div>
        <div class="question__option">
          <input type="radio" id="d" value="d" v-model="picked" class="question__radio">
          <label for="d" class="question__label">d) {{questions[count].alternatives.d}}</label> 
        </div>
        <div class="question__options">
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
      count: 0
    };
  },
  computed: {
    ...mapGetters(["questions", "category"]),
    btnText: function() {
      return this.count == 39 ? "Finalizar" : "Siguiente";
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
      if (this.count == 39) {
        this.$router.push("results");
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
    img{
    }
  }
  &__statement {
    @include edItem(100);
    text-align: left;
    margin-bottom: 30px;
    padding: 0;
  }
  &__option {
    @include edItem(100);
    text-align: left;
  }
  &__options {
    @include edItem(100);
    @include edContainer;
    @include mainCenter;
  }
}
</style>
