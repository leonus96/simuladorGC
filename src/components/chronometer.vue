<template>
    <div class="chronometer" v-bind:class="{'chronometer-fixed': fixed}">
        <div class="chronometer__container">
            <p class="chronometer__text">Tiempo Restante: 
                <span v-text="minutes"></span>:<span v-if="seconds< 10">0{{seconds}}</span> <span v-else v-text="seconds"></span>
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
      seconds: 59,
      fixed: false,
    };
  },
  beforeMount() {
    setInterval(this.init, 1000);
  },
  methods: {
    init() {
      if (this.seconds > -1) {
        this.seconds--;
        if (this.minutes == 0 && this.seconds == 0) {
          this.end();
        }
      }
      if (this.seconds == -1) {
        this.seconds = 60;
        this.minutes--;        
      }
    },
    end() {
      this.$emit("chronometer:time");
    },
    handleScroll() {
      if(window.scrollY > 95){
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    }
  },
  created(){
    window.addEventListener('scroll', this.handleScroll);
  },
  destroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style lang="scss">
@import "../styles.scss";
.chronometer {  
  &__container {
    @include edContainer;
    @include mainCenter;
  }
  background: gray;
  color: white;
  font-weight: bold;
  padding: 15px 0;
  &__text {
    font-size: 30px;
    margin: 0;
  }
}
.chronometer-fixed {
  position: fixed;
  width: 100%;
  top: 0;
}
</style>

