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
  margin-bottom: 60px;
  overflow: hidden;
}
h1 {
  font-size: 3rem;
  font-weight: 500;
  margin: 25px 0;
}

.nav {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  &__Item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    overflow: hidden;
  }
  &__Link {
    background-color: $lightGray;
    color: $textAltColor;
    text-decoration: none;
    font-size: 1.75rem;
    flex-basis: 100%;
    padding: 15px;
    margin: auto;
    align-self: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: all 0.2s ease-in-out;
    font-weight: 500;
  }
  .router-link-exact-active {
    background-color: $mainColor;
  }
}
.section {
  padding: 15px 25px;
  &__Item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
    margin-bottom: 16px;
  }
  &__Label {
    margin-top: 8px;
    margin-bottom: 16px;
    font-size: 1.25rem;
    font-weight: 300;
  }
}
textarea {
  resize: vertical;
  width: 100%;
}

.button {
  appearance: none;
  margin: 15px;
  box-shadow: none;
  background-color: $altColor;
  color: $textAltColor;
  font-size: 1rem;
  border: 2px solid $altColor;
  padding: 15px 35px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: inherit;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    color: $textColor;
    background-color: #ffffff;
  }
}

@media screen and (max-width: 768px) {
  .nav__Link {
    font-size: 1.25rem;
  }
}
</style>
