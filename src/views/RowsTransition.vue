<template>
  <div class="rows-transition">
    <h1>Rows Transition</h1>
    <section class="section">
      <div class="section__Label">Text Input:</div>
      <div class="section__Item">
        <textarea
                :placeholder="`Max ${maxChars} characters and only english characters are acceptable...`"
                :maxlength="maxChars" name="rows-transition-input"
                cols="30"
                rows="10"
                v-model="inputString"
                @keypress="limitChars($event)">
        </textarea>
      </div>
      <div class="section__Item">
        <button class="button" @click="encryptString">Encrypt Text</button>
<!--        <button @click="decryptString">Decrypt Text</button>-->
      </div>
      <div class="section__Label">Text Output:</div>
      <div class="section__Item">
        <textarea
                placeholder="There will be decrypted text"
                cols="30"
                rows="10"
                v-model="outputString">
        </textarea>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        inputString: "",
        outputString: "",
        encryptMatrix: [],
        decryptMatrix: [],
        cipherKey: {
          colsArr: [4,8,1,7,3,6,5,2],
          colsAmount: 8,
          rowsAmount: 400
        },
      };
    },
    computed: {
      maxChars() {
        return this.cipherKey.colsAmount * this.cipherKey.rowsAmount;
      },
      encryptionString() {
        return this.inputString.toString()
                .split(" ")
                .join("")
                .trim();
      }
    },
    methods: {
      limitChars: function (e) {
        let char = e.key;
        if (!/^[a-z\d .,:]*$/i.test(char)) {
          e.preventDefault()
        }
      },
      encryptString() {
        // create matrix
        this.encryptMatrix = [];
        for (let i = 0; i < this.cipherKey.rowsAmount; i++) {
          this.encryptMatrix[i] = [];
          for (let x = 0; x < this.cipherKey.colsAmount; x++) {
            this.encryptMatrix[i][x] = null;
          }
        }
        // fill encryption matrix by chars
        let char = 0;
        for (let i = 0; i < this.cipherKey.rowsAmount; i++) {
          for (let x = 0; x < this.cipherKey.colsAmount; x++) {
            if(this.encryptionString[char]) {
              this.encryptMatrix[i][x] = this.encryptionString[char];
            }
            char++;
          }
        }

        let encryptedString = '';
        for (let x = 0; x < this.cipherKey.colsAmount; x++) {
          for (let i = 0; i < this.cipherKey.rowsAmount; i++) {
            if(this.encryptMatrix[i][this.cipherKey.colsArr[x]-1]) {
              encryptedString = `${encryptedString}${this.encryptMatrix[i][this.cipherKey.colsArr[x]-1]}`;
            }
          }
        }
        this.outputString = encryptedString;
      }
    }
  };
</script>