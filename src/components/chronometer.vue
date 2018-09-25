<template>
    <div class="chronometer">
        <div class="chronometer__container">
            <p class="chronometer__text">Tiempo Restante: 
                <span v-text="minutes"></span>:
                <span v-text="seconds"></span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      hours: 0,
      minutes: 39,
      seconds: 59
    };
  },
  beforeMount() {
    setInterval(this.inicio, 1000);
  },
  methods: {
    inicio() {
        if(this.seconds > 0){
            this.seconds--;
        }
        if(this.seconds == 0){
            this.minutes--;
            this.seconds = 60;
        }
        if(this.minutes == 0){
            alert('tiempo!');
        }
    }
  }
};
</script>

<style lang="scss">
@import "../styles.scss";
.chronometer {
  @include edContainer;
  @include mainCenter;
  padding: 15px 0;
  &__text{
      font-size: 30px;
      margin: 0;
  }
}
</style>

