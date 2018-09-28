<template>
    <div class="results">
        <h2 class="">RESULTADOS</h2>
        <div class="results__container card">
            <div class="results__score">{{score}} pts</div>
            <div class="results__statistics">
            </div>
            <div class="results__buttons">
                <a href="#" class="results__button btn btn--red btn--desactivate">Revisar</a>
                <router-link to="/" class="results__button btn btn--green">Otro Intento</router-link>
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
    font-size: 70px;
    margin-bottom: 30px;
  }
  &__statistics {
    @include edItem(100);
     margin-bottom: 30px;
  }
  &__buttons{
    @include edItem(100);
    @include edContainer;
    @include mainCenter;    
  }
  &__button{
    text-decoration: none;
    margin: 0 10px; 
    &:hover{
        text-decoration: none;
    }
  }
}
</style>