<template>
  <div class="home">
    <div class="home__container">
      <h1 class="page-title">SIMULACRO DE PREGUNTAS PARA LA EVALUACIÓN DE POSTULANTES A LICENCIAS DE CONDUCIR DEL GRUPOCAR</h1> 
      <div class="home__modes">        
        <div class="card home__modes-container ">
          <p class="home__text">Ante todo felicitarlos por ingresar a nuestro simulador de entrenamiento. El examen contiene 40 preguntas y tiene una duración de 40 minutos, y para su aprobación, el postulante deberá de acertar por lo menos treinta y cinco (35) respuestas de las cuarenta (40) preguntas. Es importante realizar este examen en completo silencio para evitar distracciones.</p>
          <p class="home__text">Los componentes de este examen son temas de: Obligaciones del Conductor en materia de tránsito, Inspección Técnica Vehicular, Reglamento Nacional de Vehículos, Reglamento Nacional de Responsabilidad Civil y Seguros Obligatorios de Accidentes de Tránsito, Reglamento de Placa Única Nacional de Rodaje y Primeros Auxilios, en caso de accidentes de tránsito.</p>
          <p class="home__text">Acabada la prueba, deseamos que lean los comentarios de todos e identifiquen el tema que les falta reforzar, con miras a estar aptos para el examen de Licencia de Conducir.</p>
          <p class="home__text">Selecciona la categoría a la que postula:</p>
          <div class="home__mode">          
            <button class="btn" @click="startExam('ai')">AI</button>
          </div>
          <div class="home__mode">          
            <button class="btn" @click="startExam('aiia')">AIIa</button>
          </div>
          <div class="home__mode">          
            <button class="btn" @click="startExam('aiib')">AIIb</button>
          </div>
          <div class="home__mode">          
            <button class="btn" @click="startExam('aiiia')">AIIIa</button>
          </div>
          <div class="home__mode">          
            <button class="btn" @click="startExam('aiiib')">AIIIb</button>
          </div>
          <div class="home__mode">          
            <button class="btn" @click="startExam('aiiic')">AIIIc</button>
          </div>    
          <div class="home__mode">          
            <button class="btn btn--desactivate">Proyección</button>
          </div>        
        </div>
      </div>      
    </div>
    <modal name="Hello!" :width="350" :height="250" @before-close="modalNoClose" class="modal">
      <div class="modal__container">
        <p class="modal__item modal__title">Bienvenido</p>
        <input type="text" name="name" id="name" class="modal__item modal__input" placeholder="Ingresa tu nombre" v-model="name">
        <button class="btn modal__item" @click="fetchName">Ingresar</button>
      </div>      
    </modal>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "home",
  data() {
    return {
      name: '',
      close: false,
    }
  },
  components: {},
  mounted: function(){
    this.$store.commit("RESET_STATE");
    this.$modal.show('Hello!');
  },
  methods: {
    ...mapMutations(["MUTATE_CATEGORY", "RESET_STATE", "MUTATE_NAME"]),
    startExam: function(category) {
      this.$store.commit("MUTATE_CATEGORY", category);
      this.$router.push({ name: "exam" });
    },
    modalNoClose(event) {
      if(!this.close)
        event.stop();
    },
    fetchName(){
      this.close = true;
      this.$modal.hide('Hello!');
      this.$store.commit("MUTATE_NAME", this.name);      
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
    @include edItem(100);
    text-align: justify;
    margin-bottom: 30px;
  }
  &__modes {
    @include edContainer;
    padding: 0 15px;
    &-container {
      @include edItem(100);
      @include edContainer;
    }
  }
  &__mode {
    @include edItem(100, 1/2, 1/4);
    @include edContainer;
    padding: 10px;
    .btn {
      @include edItem(100);
    }
  }
}
.modal{
  &__container{
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__item {
    margin: 15px 0;
  }
  &__label {
    display: block;
    width: 100%;
  }
  &__title {
    font-weight: 700;
    font-size: 20px;
  }
  &__input {
    display: block;
    width: 100%;
    padding: 5px 5px;
    border-radius: 4px; 
    border: 1px solid gray;
  }
}
</style>

