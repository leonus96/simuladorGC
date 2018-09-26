<template>
  <div class="home">
    <div class="home__container">
      <h1 class="page-title">Simulador Grupo Car</h1>
      <p class="home__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora incidunt, natus dolorem hic soluta reprehenderit ratione dolor? Maiores necessitatibus expedita neque, accusamus optio possimus pariatur harum alias nulla, voluptas unde.</p>
      <div class="home__modes">
        <button class="home__mode" @click="startExam('ai')">AI</button>
        <button class="home__mode" @click="startExam('aiia')">AIIa</button>
        <button class="home__mode" @click="startExam('aiib')">AIIb</button>
        <button class="home__mode" @click="startExam('aiiia')">AIIIa</button>
        <button class="home__mode" @click="startExam('aiiib')">AIIIb</button>
        <button class="home__mode" @click="startExam('aiiic')">AIIIc</button>
      </div>      
    </div>
    
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "home",
  components: {},
  methods: {
    ...mapMutations(['MUTATE_CATEGORY']),
    startExam: function(category) {
      this.$store.commit('MUTATE_CATEGORY', category);
      this.$router.push( {name: 'exam'});
    }
  }
};
</script>

<style lang="scss">
@import "../styles.scss";
.home {
  &__container {
    @include edContainer;
  }
  &__text {
    text-align: justify;
  }
  &__modes {
    @include edContainer;
    background: white;
    padding: 15px;
    border: 1px solid lightgray;
    border-radius: 4px;
    
  }
  &__mode{
    @include edItem(1/4);
    width: calc(25% - 20px);
    background: var(--primary-color);
    padding: 15px;
    border-radius: 5px;
    margin: 10px 10px;
    box-shadow: 0 5px #888888;
  }
}
</style>

