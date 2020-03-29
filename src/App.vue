<template>
  <div id="app">
    <router-view/>
    <div id="nav" class="nav">
      <div class="nav__Item">
        <router-link class="nav__Link" to="/">Home</router-link>
      </div>
      <div class="nav__Item">
        <router-link class="nav__Link" to="/rows-transition">Rows Transition</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$mainColor: #336e7b;
$altColor: #558f9d;
$lightGray: #bdc3c7;
$textColor: #333333;
$textAltColor: #ffffff;

#app {
  font-family: Raleway, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $textColor;
}

.nav {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  &__Item {
    background-color: $lightGray;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
  &__Link {
    color: $textAltColor;
    text-decoration: none;
    font-size: 1.75rem;
    flex-basis: 100%;
    padding: 15px 0;
  }
  .router-link-exact-active {
    background-color: $mainColor;
  }
}
</style>
