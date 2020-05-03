<template>
  <div class="rows-transition">
    <h1>Stegano</h1>
    <section class="section">
      <div class="section__Label"><b class="stepLabel">Step 1:</b> Text Input:</div>
      <div class="section__Item">
        <textarea
                placeholder="Type text to hide here ..."
                :maxlength="maxChars"
                name="rows-transition-input"
                cols="30"
                rows="10"
                v-model="inputString">
        </textarea>
      </div>
      <div class="section__Label"><b class="stepLabel">Step 2:</b> Upload image (preferred jpg or png):</div>
      <div class="section__Item">
        <label class="button">
          Upload image to hide text
          <input class="nativeFileInput"
                 type="file"
                 @change="uploadOriginalImage"
                 accept="image/png, image/jpeg"
          >
        </label>
      </div>
      <div class="section__Item">
        <div class="previewContainer">
          <span class="previewLabel">Original Image Preview:</span>
          <img id="previewIMG" class="previewImage"/>
        </div>
        <div class="previewContainer">
          <span class="previewLabel">Original Image (canvas) Preview:</span>
          <canvas width="300" height="300" id="previewOriginalIMG" class="previewImage"></canvas>
        </div>
        <div class="previewContainer">
          <span class="previewLabel">Encrypted Image (canvas) Preview:</span>
          <canvas width="300" height="300" id="previewEncryptedIMG" class="previewImage"></canvas>
        </div>
      </div>
      <div class="section__Label"><b class="stepLabel">Step 3:</b> Download encrypted image (right click on encrypted image and save to your device):</div>
      <div class="section__Label"><b class="stepLabel">Step 4:</b> Upload image with hidden text (from step 3):</div>
      <div class="section__Item">
        <label class="button">
          Upload image with hidden text
          <input class="nativeFileInput"
                 type="file"
                 @change="uploadEncryptedImage"
          >
        </label>
      </div>
      <div class="section__Item">
        <div class="previewContainer">
          <span class="previewLabel">Uploaded Image Preview:</span>
          <canvas width="300" height="300" id="previewUploadedIMG" class="previewImage"></canvas>
        </div>
      </div>
      <div class="section__Label"><b class="stepLabel">Step 5:</b> See decrypted text:</div>
      <div class="section__Item">
        <p>{{outputString ? outputString : "There is no decrypted message yet"}}</p>
      </div>

    </section>
  </div>
</template>
<style lang="scss" scoped>
  .previewContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
  }
  .previewImage {
    opacity: 0;
    position: absolute;
    width: 0;
    height: 0;
    &--active {
      opacity: 1;
      position: static;
      width: 300px;
      height: auto;
    }
  }
  .previewLabel {
    margin: 12px;
  }
</style>
<script>
  export default {
    data() {
      return {
        inputString: '',
        inputArray: null,
        imageArray: null,
        uploadedImageArray: null,
        outputString: '',
        originalImageBase64: '',
        encryptedImageBase64: '',
        index: 0,
        maxChars: 256
      };
    },
    methods: {
      uploadOriginalImage(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => this.$emit("load",
                this.originalImageBase64 =  e.target.result);
        reader.onloadend = e => {
          this.previewImages();
        }
      },
      previewImages() {
        this.convertStringToArray();
        let originalImage =  document.querySelector('#previewIMG'),
            originalCanvas = document.querySelector('#previewOriginalIMG'),
            encryptedCanvas = document.querySelector('#previewEncryptedIMG'),
            ctx = originalCanvas.getContext( '2d' ),
            ctxSecret = encryptedCanvas.getContext( '2d' ),
            tempIMG = new Image();
        originalImage.setAttribute('src', this.originalImageBase64);
        originalImage.classList.add('previewImage--active');
        originalCanvas.classList.add('previewImage--active');
        encryptedCanvas.classList.add('previewImage--active');
        tempIMG.src = this.originalImageBase64;
        const self = this;
        setTimeout(function () {
          ctx.drawImage(tempIMG, 0, 0 );
          self.imageArray = ctx.getImageData( 0, 0, originalCanvas.height, originalCanvas.width );
        }, 500);
        setTimeout(function () {
          self.readByte()
        }, 500);
        setTimeout(function () {
          ctxSecret.putImageData(self.imageArray, 0, 0 );
        }, 500);
      },
      uploadEncryptedImage(e) {
        const encryptedFile = e.target.files[0];
        const reader1 = new FileReader();
        reader1.readAsDataURL(encryptedFile);
        reader1.onload = e => this.$emit("load",
                this.encryptedImageBase64 =  e.target.result);
        reader1.onloadend = e => {
          let coverAfter = document.querySelector( '#previewUploadedIMG' ),
                  ctxCoverAfter = coverAfter.getContext( '2d' ),
                  anotherTempImg = new Image();
          coverAfter.classList.add('previewImage--active');
          anotherTempImg.src = this.encryptedImageBase64;
          const self = this;
          setTimeout(() => {
            ctxCoverAfter.drawImage(anotherTempImg, 0, 0 );
            self.uploadedImageArray = ctxCoverAfter.getImageData( 0, 0, coverAfter.height, coverAfter.width );
          }, 500);
          setTimeout(() => {
            self.decryptImage();
          }, 500);
        }
      },
      convertStringToArray() {
        let array = this.inputString.split('');
        let asciiArray = [];
        array.forEach(item => {
          let asciiItem = item.charCodeAt(0);
          asciiArray.push(asciiItem);
        });
        this.inputArray = new Uint8Array(asciiArray);
        console.log(this.inputArray);
        console.log("Ascii table of input: " + this.inputArray);
      },
      decryptImage() {
        let totalLength = 0;
        let lastIndex;
        console.log(this.uploadedImageArray.data);
        for (let b = 0, viewLength = this.uploadedImageArray.data.length; b < viewLength; b++) {
          if (this.uploadedImageArray.data[b] === 255) {
            totalLength += this.uploadedImageArray.data[b];
            if (this.uploadedImageArray.data[b + 1] < 255) {
              totalLength += this.uploadedImageArray.data[b + 1];
              lastIndex = b + 1;
              break;
            }
          } else {
            totalLength += this.uploadedImageArray.data[b];
            lastIndex = b;
            break;
          }
        }
        let secretLength = totalLength;
        let outputArray = new Uint8Array(totalLength / 4);
        let j = 0;
        for (let i = (lastIndex + 1); i < secretLength; i = i + 4) {
          let aShift = (this.uploadedImageArray.data[i] & 3);
          let bShift = (this.uploadedImageArray.data[i + 1] & 3) << 2;
          let cShift = (this.uploadedImageArray.data[i + 2] & 3) << 4;
          let dShift = (this.uploadedImageArray.data[i + 3] & 3) << 6;
          let result = ( ( ( aShift | bShift) | cShift ) | dShift );
          outputArray[ j ] = result;
          j++;
        }
        console.log("Table of secret in ASCII: " + outputArray)
        this.decryptMessage(outputArray);
        console.log("Secret in String: " + this.outputString);
      },
      readByte() {
        console.log("Table of graphic in ASCII before encrypt")
        console.log(this.imageArray.data)
        for ( let i = 0, length = this.inputArray.length; i < length; i++ ) {
          if (i === 0) {
            let secretLength = length * 4;
            console.info( 'Secret Length(' + length + 'x4) : ' + secretLength )
            if ( secretLength > 255 ) {
              let division = secretLength / 255;
              if ( division % 1 === 0 ) {
                for ( let z = 0; z < division; z++ ) {
                  this.imageArray.data[z] = 255;
                  this.index++;
                }
              }
              else {

                let firstPortion = division.toString().split(".")[0];
                let secondPortion = division.toString().split(".")[1];
                let y;
                for ( y = 0; y < firstPortion; y++ ) {
                  this.imageArray.data[y] = 255;
                  this.index++;
                }

                let numberLeft = Math.round( ( division - firstPortion ) * 255 );
                this.imageArray.data[y] = numberLeft;
                this.index++;
              }

            } else {
              this.imageArray.data[0] = secretLength;
              this.index++;
            }
          }
          let asciiCode = this.inputArray[i];
          let first2bit = ( asciiCode & 0x03 );
          let first4bitMiddle = ( asciiCode & 0x0C ) >> 2;
          let first6bitMiddle = ( asciiCode & 0x30 ) >> 4;
          let first8bitMiddle = ( asciiCode & 0xC0 ) >> 6;
          this.replaceByte( first2bit );
          this.replaceByte( first4bitMiddle );
          this.replaceByte( first6bitMiddle );
          this.replaceByte( first8bitMiddle );
        }
        console.log("Table of graphic in ASCII after encrypt")
        console.log(this.imageArray.data)
      },
      replaceByte(bits) {
        this.imageArray.data[this.index] = (this.imageArray.data[this.index] & 0xFC) | bits;
        this.index++;
      },
      decryptMessage(arrayBuffer) {
        let result = "";
        let i = 0;
        let char = 0;
        let char2 = 0;
        let data = new Uint8Array(arrayBuffer);

        if (data.length >= 3 && data[0] === 0xef && data[1] === 0xBB && data[2] === 0xBF) {
          i = 3;
        }
        while (i < data.length) {
          char = data[i];
          if (char < 128) {
            result += String.fromCharCode(char);
            i++;
          } else if (char > 191 && char < 224) {
            if (i + 1 >= data.length) {
              throw "Decode failed.";
            }
            char2 = data[i + 1];
            result += String.fromCharCode(((char & 31) << 6) | (char2 & 63));
            i += 2;
          } else {
            if (i + 2 >= data.length) {
              throw "Decode failed.";
            }
            char2 = data[i + 1];
            let char3 = data[i + 2];
            result += String.fromCharCode(((char & 15) << 12) | ((char2 & 63) << 6) | (char3 & 63));
            i += 3;
          }
        }
        console.log("All message has been decrypted.")
        this.outputString = result;
      },
    }
  };
</script>