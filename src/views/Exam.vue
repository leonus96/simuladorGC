<template>
  <div class="exam">
    <chronometer></chronometer>
    <div class="exam__container">
      <h2 class="exam__title">Evaluación de conocimientos en la conducción para postulantes
a licencias de conducir de clase AI(Vehículos de la categoría M1, M2 y N1)</h2>
      <div class="question">
        <p class="question__theme">Tema: Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito</p>
        <p class="question__statement"> 1) Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatem ut. Tempora temporibus quas.</p>
        <img src="" alt="" srcset="" class="question__img">

        <div class="question__option">
          <input type="radio" id="a" value="a" v-model="picked" class="question__radio">
          <label for="a" class="question__label">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatem ut. Tempora temporibus quas.</label>  
        </div>         

      </div>
      <button class="exam__button">Siguiente</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import chronometer from "../components/chronometer";
export default {
  components: {
    chronometer
  },
  data: function() {
    return {
      score: 0,
      picked: ""
    };
  },
  methods: {
    fetchQuestions() {
      this.store.dispatch('fetchQuestions');
    }
  },
  computed: mapState()
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
