<template>
    <div class="results">
        <div class="results__container">
            <div class="results__score">{{score}} pts</div>
            <div class="results__statistics">
            </div>
            <div class="results__buttons">
                <button class="exam__button">Revisar</button>
                <button class="exam__button">Otro Intento</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed:{
        ...mapGetters(['score'])
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
    font-size: 50px;
    padding: 15px 0;
  }
  &__statistics {
    @include edItem(100);
  }
}
</style>