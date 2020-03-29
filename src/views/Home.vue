<template>
  <div class="home">
    <div class="home__Desc">
      <h1 class="home__Heading">
        Cipher Studies
      </h1>
      <p class="home__Paragraph">
        This is studies project prepared for <i>Basics of Data Security</i> lessons created by Szymon Grobelny.
      </p>
      <p class="home__Paragraph">
        If you want test implementation of ciphers, algorithms etc. check navigation below. &#8595;
      </p>
    </div>
  </div>
</template>
<style lang="scss">
  .home {
    &__Heading {
      font-size: 3rem;
      font-weight: 600;
    }
    &__Desc {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
    }
  }
</style>
<script>
// @ is an alias to /src

export default {
  name: 'Home',

}
</script>
