<template>
  <div id="app">
    <header class="header">
      <div class="header__brand">
        <img src="./assets/logo.png" alt="" srcset="">
      </div>
      <!--<a href="#" class="header__burguer" id="menu_on" v-bind:class="{'header__visible-burguer': menu}" @click="menuClick">
        <span></span>
        <span></span>
        <span></span>
      </a>-->
      <div class="header__controls">
        <p v-if="name != ''" class="header__name">HOLA {{name.toUpperCase()}}</p>
        <router-link v-if="this.$route.path != '/'" to="/" class="btn btn--red">NUEVO POSTULANTE</router-link>
      </div>
    </header>     
      
    <!--<nav class="header__nav" v-bind:class="{ 'header__nav-visible': menu }">
      <ul>
        <li>
          <router-link to="/">INICIO</router-link>
        </li>
      </ul>
    </nav>-->
    <router-view class="content" v-bind:class="{'visible-content': menu}"/>
    <footer>
      Ⓒ 2018 Grupo Car SAC, todos los derechos reservados | Diseñado y desarrollado por <a href="http://tera.pe">Tera</a>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: function() {
   return {
      menu: false,
   }
  },
  methods: {
    menuClick() {
      this.menu = !this.menu;
    }
  },
  computed: {
    ...mapGetters(['name']),
  },
}
</script>


<style lang="scss">
@import 'styles.scss';
:root{
  --primary-color: #FFA000;
  --accent-color: #FF5252;
}
*{
  box-sizing: border-box;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header{
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  align-items: center;
  justify-content: space-between;
  background: var(--primary-color);
  box-shadow: 0 3px 6px rgba(0,0,0,0.16);
  &__brand {
    img{
      height: 70px;
      width: auto;
    }
  }
  &__burguer{
    display: inline-block;
    width: 30px;
    height: 20px;
    position: relative;
    z-index: 2;
    span{
      width: 100%;
      height: 4px;
      border-radius: 4px;
      display: block;
      position: absolute;
      background: white;
      transition: all 0.25s ease;
      transform-origin : 0px 100%;
      &:nth-child(2) {
        top: calc(50% - 2px);
      }
      &:nth-child(3) {
        bottom: 0;
      }
    }
  }
  &__controls {
    display: flex;
  }
    &__name {
      color: white;
      font-weight: 700;
      margin-right: 15px;
    }
  &__visible-burguer {
    span{
      &:nth-child(1){
        transform: rotate(45deg) translate(-2px,1px); 
      }
      &:nth-child(2){
        opacity: 0;
      }
      &:nth-child(3){
        transform: rotate(-45deg) translate(-3px,3px); 
      }
    }
  }
  &__nav{
    position: fixed;
    top: 0;
    bottom: 0;
    right: -300px;
    width: 300px;
    z-index: 1;
    padding: 90px 30px 30px;
    background: #FF5252;
    transition: all 0.75s ease;
    font-size: 1.2em;
    overflow-y: auto;
    ul{
      padding: 0;
    }
    li{
      list-style: none;
    }
    a {
      display:block;
      text-decoration: none;
      padding: 10px;
      color: rgba(255,255,255,0.75);
      border-bottom: 1px solid rgba(255,255,255,0.2);
      transition: all ease 0.25s;
      &:hover{
        color: rgba(255,255,255,1);
        border-bottom-color:rgba(255,255,255,0.4);
      }
    }
  }
  &__nav-visible{
    right: 0;
    opacity: 1;
  }
}
.content{
  transition: all 0.75s ease;
}
.visible-content{
  transform: translateX(-300px);
}

footer {
  margin-top: 20px;
  padding: 12px;
  a{
    color: #4f08a0;
    font-style: italic;
    
  }
}
</style>
