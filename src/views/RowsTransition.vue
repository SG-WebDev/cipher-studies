<template>
  <div class="rows-transition">
    <h1>Rows Transition</h1>
    <section class="section">
      <div class="section__Label">Text Input:</div>
      <div class="section__Item">
        <textarea :placeholder="`Max ${maxChars} characters...`" :maxlength="maxChars" name="rows-transitioon-input" id="" cols="30" rows="10" v-model="inputString"></textarea>
      </div>
      <div class="section__Label">Text Output:</div>
    </section>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        inputString: "",
        outputString: "",
        cipherKey: {
          colsArr: [4,8,1,7,3,6,5,2],
          colsAmount: 8,
          rowsAmount: 400
        },
      };
    },
    computed: {
      maxChars: function () {
        return this.cipherKey.colsAmount * this.cipherKey.rowsAmount;
      }
    },
    watch: {
    },
    methods: {
    }
  };
</script>