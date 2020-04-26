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
      <div class="section__Label"><b class="stepLabel">Step 2:</b> Upload image:</div>
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
        <span class="previewLabel">Original Image Preview:</span>
        <img id="previewOriginalIMG" class="previewImage" src="" alt="Preview of uploaded image">
        <span class="previewLabel">Encrypted Image Preview:</span>
        <img id="previewEncryptedIMG" class="previewImage" src="" alt="Preview of uploaded image">
      </div>
      <div class="section__Label"><b class="stepLabel">Step 3:</b> Download image:</div>
      <div class="section__Item">
        <label class="button">
          Download image with hidden text
          <input class="nativeFileInput"
                 type="file"
                 @change="downloadEncryptedImage"
          >
        </label>
      </div>
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
      <div class="section__Label"><b class="stepLabel">Step 5:</b> See decrypted text:</div>
      <div class="section__Item">
        <p>{{outputString ? outputString : "There is no decrypted message yet"}}</p>
      </div>

    </section>
  </div>
</template>
<style lang="scss" scoped>
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
    flex-basis: 100%;
}
</style>
<script>
  export default {
    data() {
      return {
        inputString: '',
        outputString: '',
        maxChars: '256000' //256kB
      };
    },
    computed: {

    },
    methods: {
      uploadOriginalImage() {

      },
      previewOriginalImage() {

      },
      previewEncryptedImage() {

      },
      downloadEncryptedImage() {

      },
      uploadEncryptedImage() {

      },
    }
  };
</script>