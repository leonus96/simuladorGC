<template>
  <div class="home">
    <div class="home__container">
      <h1 class="page-title">SIMULACRO DE PREGUNTAS PARA LA EVALUACIÓN DE CONOCIMIENTOS EN LA CONDUCCIÓN PARA POSTULANTES A LICENCIAS DE CONDUCIR</h1> 
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
        </div>
      </div>      
    </div>
    
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "home",
  components: {},
  mounted: function(){
    this.$store.commit("RESET_STATE");
  },
  methods: {
    ...mapMutations(["MUTATE_CATEGORY", "RESET_STATE"]),
    startExam: function(category) {
      this.$store.commit("MUTATE_CATEGORY", category);
      this.$router.push({ name: "exam" });
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
</style>

