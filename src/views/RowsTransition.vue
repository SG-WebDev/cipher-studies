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
        <button class="button" @click="decryptString">Decrypt Text</button>
      </div>
      <div class="section__Label">Text Output:</div>
      <div class="section__Item">
        <textarea
                placeholder="There will be output text. If you run decrypt text will be without spaces."
                cols="30"
                rows="10"
                v-model="outputString">
        </textarea>
      </div>
    </section>
    <div class="section__Item">
      <label class="button">
        Upload .txt file to encrypt
        <input class="nativeFileInput"
               type="file"
               @change="uploadFile"
        >
      </label>
      <a  class="button"
          :href="`data:text/plain;charset=utf-8,${encodeURIComponent(outputString)}`"
          :download="`encrypted_${currentTime}.txt`"
      >
        Save decrypted text as .txt file
      </a>
    </div>
  </div>
</template>
<style lang="scss">
  .nativeFileInput {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    z-index: -1;
  }
</style>
<script>
  export default {
    data() {
      return {
        inputString: "",
        outputString: "",
        matrix: [],
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
      inputToEncryptString() {
        return this.inputString.toString()
                .split(" ")
                .join("+")
                .trim();
      },
      inputToDecryptString() {
        return this.inputString.toString()
                .split("+")
                .join(" ");
      },
      currentTime() {
        let today = new Date();
        let date = `${today.getFullYear()}-${(today.getMonth()+1)}-${today.getDate()}`;
        let time = `${today.getHours()}${today.getMinutes()}${today.getSeconds()}`;
        return `${date}_${time}`;
      }
    },
    methods: {
      limitChars: function (e) {
        let char = e.key;
        if (!/^[a-z\d .,:+]*$/i.test(char)) {
          e.preventDefault()
        }
      },
      createMatrix() {
        this.matrix = [];
        for (let i = 0; i < this.cipherKey.rowsAmount; i++) {
          this.matrix[i] = [];
          for (let x = 0; x < this.cipherKey.colsAmount; x++) {
            this.matrix[i][x] = null;
          }
        }
      },
      encryptString() {
        let char = 0;
        this.createMatrix();

        // fill encryption matrix by chars
        for (let i = 0; i < this.cipherKey.rowsAmount; i++) {
          for (let x = 0; x < this.cipherKey.colsAmount; x++) {
            if(this.inputToEncryptString[char]) {
              this.matrix[i][x] = this.inputToEncryptString[char];
            }
            char++;
          }
        }

        let encryptedString = '';
        for (let x = 0; x < this.cipherKey.colsAmount; x++) {
          for (let i = 0; i < this.cipherKey.rowsAmount; i++) {
            if(this.matrix[i][this.cipherKey.colsArr[x]-1]) {
              encryptedString = `${encryptedString}${this.matrix[i][this.cipherKey.colsArr[x]-1]}`;
            }
          }
        }

        this.outputString = encryptedString;
      },
      decryptString() {
        let colsAmounts = Math.floor(this.inputToDecryptString.length/this.cipherKey.colsAmount);
        let modCols = this.inputToDecryptString.length%this.cipherKey.colsAmount;
        let decryptedString = '';
        let char = 0;
        this.createMatrix();

        for(let i = 0; i < this.cipherKey.colsAmount; i++){
          let rowsAmount = this.cipherKey.colsArr[i] <= modCols ? colsAmounts+1 : colsAmounts;
          for(let x = 0; x < rowsAmount; x++){
            if(this.inputToDecryptString[char]) {
              this.matrix[x][this.cipherKey.colsArr[i]-1] = this.inputToDecryptString[char];
              char++;
            }
          }
        }
        
        decryptedString =  this.matrix
                .map(e => e.join(""))
                .join("");

        this.outputString = decryptedString;
      },
      uploadFile(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = e => this.$emit("load",
                this.inputString =  e.target.result);
      }
    }
  };
</script>