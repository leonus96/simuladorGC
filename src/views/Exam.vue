<template>
  <div class="exam">
    <chronometer></chronometer>
    <div class="exam__container">
      <h2 class="exam__title">Evaluación de conocimientos en la conducción para postulantes
a licencias de conducir de clase AI(Vehículos de la categoría M1, M2 y N1)</h2>
      <div class="question">
        <!--<p class="question__theme" v-text="questions[count].theme"></p>-->
        <p class="question__statement">{{count+1}}) {{questions[count].statement}}</p>
        <img src="" alt="" srcset="" class="question__img" v-if="questions[count].image !=''">
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
          <label for="d" class="question__label">d) {{questions[count].alternatives.d}}</label> </div>     
        </div>
      <button class="exam__button" @click="check" v-text="btnText"></button>
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
    };
  },
  computed: {
    ...mapGetters(['questions']),
    btnText: function() {
      return this.count == 5 ? "Finalizar" : "Siguiente";
    }
  },
  created() {
    this.fetchQuestions();
  },
  methods: {
    ...mapMutations(['ADD_DEVELOPMENT']),
    ...mapActions(['fetchQuestions']),
    check() {
      let item = {};
      item.response = this.picked;
      item.correct = this.questions[this.count].response;
      if(item.response == item.correct)
        this.$store.commit('INCREMENT_SCORE');
      this.$store.commit('ADD_DEVELOPMENT', item);
      this.count++;
      this.picked = "";
      if(this.count == 5){
        this.$router.push('results');
      }
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
  &__button {
    padding: 15px;
    background: var(--primary-color);
    padding: 15px;
    border-radius: 5px;
    margin: 10px 10px;
    box-shadow: 0 5px #888888;
  }
}
.question {
  @include edContainer;
  background: white;
  padding: 15px;
  border: 1px solid lightgray;
  border-radius: 4px;
  margin-bottom: 30px;
  &__theme {
    @include edItem(100);
    font-weight: 700;
    margin-bottom: 30px;
    padding: 0;
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
}
</style>
