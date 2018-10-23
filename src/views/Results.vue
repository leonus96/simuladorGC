<template>
    <div class="results">
        <h2 class="">RESULTADOS</h2>
        <div class="results__container card">
            <div class="results__score">{{score}} pts</div>
            <div class="results__calification" :class="[{calification: 'DESAPROBADO'}, 'results__calification--red']" v-text="calification"></div>
            <div class="results__statistics">
            </div>
            <score-history class="chart"></score-history>
            <div class="results__buttons">
                <a href="#" class="results__button btn btn--red btn--desactivate">Revisar</a>
                <button class="results__button btn btn--green" @click="anotherTry">OTRO INTENTO</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import scoreHistory from "../components/scoreHistory";

export default {
  components: {
    scoreHistory
  },
  beforeMount() {
    this.$store.commit("ADD_SCORE_HISTORY", this.score);
  },
  computed: {
    ...mapGetters(["score"]),
    calification: function() {
      return this.score >= 35 ? "APROBADO" : "DESAPROBADO";
    }
  },
  methods: {
    ...mapMutations(["RESET_EXAM", "ADD_SCORE_HISTORY"]),
    anotherTry() {
      this.$store.commit("RESET_EXAM");
      this.$router.push("/exam");
    }
  }
};
</script>

<style lang="scss">
@import "../styles.scss";

.results {
  &__container {
    @include edContainer();
  }
  &__score {
    @include edItem(100);
    font-size: 70px;
    margin-bottom: 30px;
  }
  &__statistics {
    @include edItem(100);
    margin-bottom: 30px;
  }
  &__buttons {
    @include edItem(100);
    @include edContainer;
    @include mainCenter;
  }
  &__button {
    text-decoration: none;
    margin: 60px 10px 0 10px;
    &:hover {
      text-decoration: none;
    }
  }
  &__calification {
    @include edItem(100);
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    background: rgba(137, 245, 133, 0.863);
  }
  &__calification--red {
    background: rgba(255, 129, 129, 0.863);
  }
  .chart {
    width: 100%;
  }
}
</style>