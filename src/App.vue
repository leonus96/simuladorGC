<template>
  <div id="app">
    <nav class="nav">
      <div class="nav__container">
        <a class="nav__brand">
          <img src="./assets/logo.png" alt="" srcset="">
        </a>
        <ul class="nav__menu" id="nav">
          <li><router-link to="/" class="nav__menu-item">Inicio</router-link></li>
          <li><router-link to="/exam" class="nav__menu-item">Examen</router-link></li>
        </ul>
      </div>      
    </nav>    
    <router-view/>
  </div>
</template>

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
.nav {
  background: var(--primary-color);
  color: white;
  &__container{
    @include edContainer;
    @include mainJustify;
    flex-direction: row;
  }
  &__brand{
    padding: 10px 0 10px 0;
    img{
      max-height: 100px;
      width: auto;
      display: block;
    }
  }
  &__menu{    
    @include edMenu(l,navBar);
    width: 20%;
  }
  &__menu-item{
    text-decoration: none;
    padding: 15px;
    &:hover{
      color: var(--accent-color);
    }    
  }
}
</style>
