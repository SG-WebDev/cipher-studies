(function(t){function e(e){for(var a,n,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],a=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=i[0]))}return t}var a={},s={app:0},r=[];function n(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=a,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/cipher-studies/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"21bb":function(t,e,i){"use strict";var a=i("2dad"),s=i.n(a);s.a},"2dad":function(t,e,i){},"318b":function(t,e,i){"use strict";var a=i("b6ec"),s=i.n(a);s.a},"34ea":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view"),i("div",{staticClass:"nav",attrs:{id:"nav"}},[i("div",{staticClass:"nav__Item"},[i("router-link",{staticClass:"nav__Link",attrs:{to:"/"}},[t._v("Home")])],1),i("div",{staticClass:"nav__Item"},[i("router-link",{staticClass:"nav__Link",attrs:{to:"/rows-transition"}},[t._v("Rows Transition")])],1),i("div",{staticClass:"nav__Item"},[i("router-link",{staticClass:"nav__Link",attrs:{to:"/bbs"}},[t._v("BBS")])],1),i("div",{staticClass:"nav__Item"},[i("router-link",{staticClass:"nav__Link",attrs:{to:"/stegano"}},[t._v("Stegano")])],1)])],1)},r=[],n=(i("5c0b"),i("2877")),o={},l=Object(n["a"])(o,s,r,!1,null,null,null),c=l.exports,u=i("8c4f"),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",{staticClass:"home__Desc"},[i("h1",{staticClass:"home__Heading"},[t._v(" Cipher Studies ")]),i("p",{staticClass:"home__Paragraph"},[t._v(" This is studies project prepared for "),i("i",[t._v("Basics of Data Security")]),t._v(" lessons created by Szymon Grobelny. ")]),i("p",{staticClass:"home__Paragraph"},[t._v(" If you want test implementation of ciphers, algorithms etc. check navigation below. ↓ ")])])])}],h=(i("21bb"),{}),g=Object(n["a"])(h,d,p,!1,null,null,null),m=g.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rows-transition"},[i("h1",[t._v("Rows Transition")]),i("section",{staticClass:"section"},[i("div",{staticClass:"section__Label"},[t._v("Text Input:")]),i("div",{staticClass:"section__Item"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputString,expression:"inputString"}],attrs:{placeholder:"Max "+t.maxChars+" characters and only english characters are acceptable...",maxlength:t.maxChars,name:"rows-transition-input",cols:"30",rows:"10"},domProps:{value:t.inputString},on:{keypress:function(e){return t.limitChars(e)},input:function(e){e.target.composing||(t.inputString=e.target.value)}}})]),i("div",{staticClass:"section__Item"},[i("button",{staticClass:"button",on:{click:t.encryptString}},[t._v("Encrypt Text")]),i("button",{staticClass:"button",on:{click:t.decryptString}},[t._v("Decrypt Text")])]),i("div",{staticClass:"section__Label"},[t._v("Text Output:")]),i("div",{staticClass:"section__Item"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.outputString,expression:"outputString"}],attrs:{placeholder:"There will be output text. If you run decrypt text will be without spaces.",cols:"30",rows:"10"},domProps:{value:t.outputString},on:{input:function(e){e.target.composing||(t.outputString=e.target.value)}}})])]),i("div",{staticClass:"section__Item"},[i("label",{staticClass:"button"},[t._v(" Upload .txt file to encrypt "),i("input",{staticClass:"nativeFileInput",attrs:{type:"file"},on:{change:t.uploadFile}})]),i("a",{staticClass:"button",attrs:{href:"data:text/plain;charset=utf-8,"+encodeURIComponent(t.outputString),download:"encrypted_"+t.currentTime+".txt"}},[t._v(" Save decrypted text as .txt file ")])])])},f=[],_={data(){return{inputString:"",outputString:"",matrix:[],cipherKey:{colsArr:[4,8,1,7,3,6,5,2],colsAmount:8,rowsAmount:400}}},computed:{maxChars(){return this.cipherKey.colsAmount*this.cipherKey.rowsAmount},inputToEncryptString(){return this.inputString.toString().split(" ").join("+").trim()},inputToDecryptString(){return this.inputString.toString().split("+").join(" ")},currentTime(){let t=new Date,e=`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`,i=`${t.getHours()}${t.getMinutes()}${t.getSeconds()}`;return`${e}_${i}`}},methods:{limitChars:function(t){let e=t.key;/^[a-z\d .,:+]*$/i.test(e)||t.preventDefault()},createMatrix(){this.matrix=[];for(let t=0;t<this.cipherKey.rowsAmount;t++){this.matrix[t]=[];for(let e=0;e<this.cipherKey.colsAmount;e++)this.matrix[t][e]=null}},encryptString(){let t=0;this.createMatrix();for(let i=0;i<this.cipherKey.rowsAmount;i++)for(let e=0;e<this.cipherKey.colsAmount;e++)this.inputToEncryptString[t]&&(this.matrix[i][e]=this.inputToEncryptString[t]),t++;let e="";for(let i=0;i<this.cipherKey.colsAmount;i++)for(let t=0;t<this.cipherKey.rowsAmount;t++)this.matrix[t][this.cipherKey.colsArr[i]-1]&&(e=`${e}${this.matrix[t][this.cipherKey.colsArr[i]-1]}`);this.outputString=e},decryptString(){let t=Math.floor(this.inputToDecryptString.length/this.cipherKey.colsAmount),e=this.inputToDecryptString.length%this.cipherKey.colsAmount,i="",a=0;this.createMatrix();for(let s=0;s<this.cipherKey.colsAmount;s++){let i=this.cipherKey.colsArr[s]<=e?t+1:t;for(let t=0;t<i;t++)this.inputToDecryptString[a]&&(this.matrix[t][this.cipherKey.colsArr[s]-1]=this.inputToDecryptString[a],a++)}i=this.matrix.map(t=>t.join("")).join(""),this.outputString=i},uploadFile(t){const e=t.target.files[0],i=new FileReader;i.readAsText(e),i.onload=t=>this.$emit("load",this.inputString=t.target.result)}}},y=_,b=(i("ab14"),Object(n["a"])(y,v,f,!1,null,null,null)),w=b.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bbs"},[i("h1",[t._v("Blum Blum Shub")]),i("section",{staticClass:"section"},[i("div",{staticClass:"section__Label"},[t._v("Bits Series:")]),i("div",{staticClass:"section__Item"},[i("p",{staticClass:"smallText"},[t._v(t._s(t.bitsSeries?t.showBitsSeries:"You're not generate bits yet."))])]),i("div",{staticClass:"section__Label"},[t._v("Tests:")]),i("div",{staticClass:"section__Item"},[i("p",[t._v("Series test: "),i("strong",[t._v(t._s(t.test.series?"valid":"invalid"))])]),i("p",[t._v("Long Series test: "),i("strong",[t._v(t._s(t.test.longSeries?"valid":"invalid"))])]),i("p",[t._v("Single Bit test: "),i("strong",[t._v(t._s(t.test.singleBit?"valid":"invalid"))])]),i("p",[t._v("Poker test: "),i("strong",[t._v(t._s(t.test.poker?"valid":"invalid"))])])]),i("div",{staticClass:"section__Item"},[i("button",{staticClass:"button",on:{click:t.runBBS}},[t._v("RUN")])])])])},C=[],I=i("7409"),x=i.n(I),A={name:"BBS",data(){return{bitsAmount:2e4,bitsSeries:null,x0:0,n:0,prime:0,test:{series:!1,longSeries:!1,singleBit:!1,poker:!1}}},computed:{showBitsSeries(){return this.bitsSeries.toString().split(",").join("")}},methods:{generateBitsSeries(t){this.generateBlumNumber(),this.generateInitX(x()(this.n));let e=x()(this.x0).modPow(2,x()(this.n)),i=e,a=[];for(let s=1;s<=t;s++){let t=x()(i).modPow(2,x()(this.n));i=t;let e=0;e=x()(i).isEven()?0:1,a.push(e)}this.bitsSeries=a},generateBlumNumber(){let t,e=this.generateBigPrimeNumber(),i=this.generateBigPrimeNumber();t=x()(e).multiply(i),console.log(`Blum number is ${t}`),this.n=t},generateInitX(t){let e,i,a=x.a.zero,s=x()(2).pow(512);while(1)if(e=x.a.randBetween(a,s),x.a.gcd(e,t).equals(1)){i=e;break}console.log(`Init X0 number is ${i}`),this.x0=i},generateBigPrimeNumber(){let t,e,i=x.a.zero,a=x()(2).pow(512);while(1)if(t=x.a.randBetween(i,a),x()(t).isPrime()&&x()(t).value>1e4){e=t;break}return console.log(`Big prime number is ${e}`),e},singleBitTest(){let t=[...this.bitsSeries],e=0;t.forEach(t=>{1===t&&e++}),this.test.singleBit=!(e<9725||e>10275)},longSeriesTest(){let t=0,e=[...this.bitsSeries],i=e[0],a=!0;e.forEach((function(s,r){let n=e[r];n===i?(t++,t>=26&&(a=!1)):t=0,i=e[r-1]})),this.test.longSeries=a},seriesTest(){let t=[...this.bitsSeries],e=!1,i=[];for(let a=1;a<=6;a++)i[a]=0;t.forEach((function(e,a){let s=t[a],r=t[a-1],n=t[a-2],o=t[a-3],l=t[a-4],c=t[a-5],u=t[a-6];s===u&&s===c&&s===l&&s===o&&s===n&&s===r&&"undefined"!==typeof s&&(i[6]++,t[a]=void 0,t[a-1]=void 0,t[a-2]=void 0,t[a-3]=void 0,t[a-4]=void 0,t[a-5]=void 0,t[a-6]=void 0)})),t.forEach((function(e,a){let s=t[a],r=t[a-1],n=t[a-2],o=t[a-3],l=t[a-4],c=t[a-5];s===c&&s===l&&s===o&&s===n&&s===r&&"undefined"!==typeof s&&(i[5]++,t[a]=void 0,t[a-1]=void 0,t[a-2]=void 0,t[a-3]=void 0,t[a-4]=void 0,t[a-5]=void 0)})),t.forEach((function(e,a){let s=t[a],r=t[a-1],n=t[a-2],o=t[a-3],l=t[a-4];s===l&&s===o&&s===n&&s===r&&"undefined"!==typeof s&&(i[4]++,t[a]=void 0,t[a-1]=void 0,t[a-2]=void 0,t[a-3]=void 0,t[a-4]=void 0)})),t.forEach((function(e,a){let s=t[a],r=t[a-1],n=t[a-2],o=t[a-3];s===o&&s===n&&s===r&&"undefined"!==typeof s&&(i[3]++,t[a]=void 0,t[a-1]=void 0,t[a-2]=void 0,t[a-3]=void 0)})),t.forEach((function(e,a){let s=t[a],r=t[a-1],n=t[a-2];s===n&&s===r&&"undefined"!==typeof s&&(i[2]++,t[a]=void 0,t[a-1]=void 0,t[a-2]=void 0)})),t.forEach((function(e,a){let s=t[a],r=t[a-1];s===r&&"undefined"!==typeof s&&(i[1]++,t[a]=void 0,t[a-1]=void 0)})),i[1]>2315&&i[1]<2685&&i[2]>1114&&i[2]<1386&&i[3]>527&&i[3]<723&&i[4]>240&&i[4]<384&&i[5]>103&&i[5]<209&&i[6]>103&&i[6]<209&&(e=!0),console.log(i),this.test.series=e},pokerTest(){let t=[...this.bitsSeries],e=[],i=[],a=!1;for(let n=0;n<5e3;n++)e[n]=t.splice(0,4).toString().split(",").join("");for(let n=0;n<16;n++)i[n]=0;e.forEach(t=>{switch(t){case"0000":i[0]++;break;case"0001":i[1]++;break;case"0010":i[2]++;break;case"0011":i[3]++;break;case"0100":i[4]++;break;case"0101":i[5]++;break;case"0110":i[6]++;break;case"0111":i[7]++;break;case"1000":i[8]++;break;case"1001":i[9]++;break;case"1010":i[10]++;break;case"1011":i[11]++;break;case"1101":i[12]++;break;case"1110":i[13]++;break;case"1100":i[14]++;break;case"1111":i[15]++;break;default:break}});let s=0;i.forEach(t=>{s+=Math.pow(t,2)});let r=.0032*s-5e3;r>2.16&&r<46.17&&(a=!0),this.test.poker=a},runBBS(){let t=performance.now();this.generateBitsSeries(this.bitsAmount);let e=performance.now();console.log(`generateBitsSeries() function takes ${e-t} milliseconds`),this.singleBitTest(),this.longSeriesTest(),this.pokerTest(),this.seriesTest();let i=performance.now();console.log(`generateBitsSeries() with four FIPS 140-2 tests takes ${i-t} milliseconds`)}}},B=A,k=(i("318b"),Object(n["a"])(B,S,C,!1,null,"7ae08436",null)),T=k.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rows-transition"},[i("h1",[t._v("Stegano")]),i("section",{staticClass:"section"},[t._m(0),i("div",{staticClass:"section__Item"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputString,expression:"inputString"}],attrs:{placeholder:"Type text to hide here ... ",maxlength:t.maxChars?t.maxChars:524288,name:"rows-transition-input",cols:"30",rows:"10"},domProps:{value:t.inputString},on:{input:function(e){e.target.composing||(t.inputString=e.target.value)}}})]),i("p",[t._v("Maximium chars amount is: "),i("i",[t._v(t._s(t.maxChars?t.maxChars:"It will be calculate after step 2")+" ")])]),t._m(1),i("div",{staticClass:"section__Item"},[i("label",{staticClass:"button"},[t._v(" Upload image to hide text "),i("input",{staticClass:"nativeFileInput",attrs:{type:"file",accept:"image/png, image/jpeg"},on:{change:t.uploadOriginalImage}})])]),t._m(2),t._m(3),t._m(4),i("div",{staticClass:"section__Item"},[i("label",{staticClass:"button"},[t._v(" Upload image with hidden text "),i("input",{staticClass:"nativeFileInput",attrs:{type:"file"},on:{change:t.uploadEncryptedImage}})])]),t._m(5),t._m(6),i("div",{staticClass:"section__Item"},[i("p",[t._v(t._s(t.outputString?t.outputString:"There is no decrypted message yet"))])])])])},$=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section__Label"},[i("b",{staticClass:"stepLabel"},[t._v("Step 1:")]),t._v(" Text Input:")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section__Label"},[i("b",{staticClass:"stepLabel"},[t._v("Step 2:")]),t._v(" Upload image (preferred jpg or png):")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section__Item"},[i("div",{staticClass:"previewContainer"},[i("span",{staticClass:"previewLabel"},[t._v("Original Image Preview:")]),i("img",{staticClass:"previewImage",attrs:{id:"previewIMG"}})]),i("div",{staticClass:"previewContainer"},[i("span",{staticClass:"previewLabel"},[t._v("Original Image (canvas) Preview:")]),i("canvas",{staticClass:"previewImage",attrs:{width:"300",height:"300",id:"previewOriginalIMG"}})]),i("div",{staticClass:"previewContainer"},[i("span",{staticClass:"previewLabel"},[t._v("Encrypted Image (canvas) Preview:")]),i("canvas",{staticClass:"previewImage",attrs:{width:"300",height:"300",id:"previewEncryptedIMG"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section__Label"},[i("b",{staticClass:"stepLabel"},[t._v("Step 3:")]),t._v(" Download encrypted image (right click on encrypted image and save to your device):")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section__Label"},[i("b",{staticClass:"stepLabel"},[t._v("Step 4:")]),t._v(" Upload image with hidden text (from step 3):")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section__Item"},[i("div",{staticClass:"previewContainer"},[i("span",{staticClass:"previewLabel"},[t._v("Uploaded Image Preview:")]),i("canvas",{staticClass:"previewImage",attrs:{width:"300",height:"300",id:"previewUploadedIMG"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section__Label"},[i("b",{staticClass:"stepLabel"},[t._v("Step 5:")]),t._v(" See decrypted text:")])}],L={data(){return{inputString:"",imageNaturalSize:{width:0,height:0},inputArray:null,imageArray:null,uploadedImageArray:null,outputString:"",originalImageBase64:"",encryptedImageBase64:"",index:0}},computed:{maxChars(){return this.imageNaturalSize.width*this.imageNaturalSize.height*3}},methods:{uploadOriginalImage(t){const e=t.target.files[0],i=new FileReader;i.readAsDataURL(e),i.onload=t=>this.$emit("load",this.originalImageBase64=t.target.result),i.onloadend=t=>{this.previewImages()}},previewImages(){this.convertStringToArray();let t=document.querySelector("#previewIMG"),e=document.querySelector("#previewOriginalIMG"),i=document.querySelector("#previewEncryptedIMG"),a=e.getContext("2d"),s=i.getContext("2d"),r=new Image;t.setAttribute("src",this.originalImageBase64),t.classList.add("previewImage--active"),e.classList.add("previewImage--active"),i.classList.add("previewImage--active"),r.src=this.originalImageBase64,a.clearRect(0,0,e.width,e.height),s.clearRect(0,0,i.width,i.height);const n=this;setTimeout((function(){a.drawImage(r,0,0,300,300*r.height/r.width),n.imageArray=a.getImageData(0,0,e.height,e.width)}),500),setTimeout((function(){n.readByte()}),500),setTimeout((function(){s.putImageData(n.imageArray,0,0)}),500),this.imageNaturalSize.width=t.naturalWidth,this.imageNaturalSize.height=t.naturalHeight},uploadEncryptedImage(t){const e=t.target.files[0],i=new FileReader;i.readAsDataURL(e),i.onload=t=>this.$emit("load",this.encryptedImageBase64=t.target.result),i.onloadend=t=>{let e=document.querySelector("#previewUploadedIMG"),i=e.getContext("2d"),a=new Image;e.classList.add("previewImage--active"),a.src=this.encryptedImageBase64;const s=this;setTimeout(()=>{i.drawImage(a,0,0,300,300*a.height/a.width),s.uploadedImageArray=i.getImageData(0,0,e.height,e.width)},500),setTimeout(()=>{s.decryptImage()},500)}},convertStringToArray(){let t=this.inputString.split(""),e=[];t.forEach(t=>{let i=t.charCodeAt(0);e.push(i)}),this.inputArray=new Uint8Array(e),console.log(this.inputArray),console.log("Ascii table of input: "+this.inputArray)},decryptImage(){let t,e=0;console.log(this.uploadedImageArray.data);for(let r=0,n=this.uploadedImageArray.data.length;r<n;r++){if(255!==this.uploadedImageArray.data[r]){e+=this.uploadedImageArray.data[r],t=r;break}if(e+=this.uploadedImageArray.data[r],this.uploadedImageArray.data[r+1]<255){e+=this.uploadedImageArray.data[r+1],t=r+1;break}}let i=e,a=new Uint8Array(e/4),s=0;for(let r=t+1;r<i;r+=4){let t=3&this.uploadedImageArray.data[r],e=(3&this.uploadedImageArray.data[r+1])<<2,i=(3&this.uploadedImageArray.data[r+2])<<4,n=(3&this.uploadedImageArray.data[r+3])<<6,o=t|e|i|n;a[s]=o,s++}console.log("Table of secret in ASCII: "+a),this.decryptMessage(a),console.log("Secret in String: "+this.outputString)},readByte(){console.log("Table of graphic in ASCII before encrypt"),console.log(this.imageArray.data);for(let t=0,e=this.inputArray.length;t<e;t++){if(0===t){let t=4*e;if(console.info("Secret Length("+e+"x4) : "+t),t>255){let e=t/255;if(e%1===0)for(let t=0;t<e;t++)this.imageArray.data[t]=255,this.index++;else{let t,i=e.toString().split(".")[0];e.toString().split(".")[1];for(t=0;t<i;t++)this.imageArray.data[t]=255,this.index++;let a=Math.round(255*(e-i));this.imageArray.data[t]=a,this.index++}}else this.imageArray.data[0]=t,this.index++}let i=this.inputArray[t],a=3&i,s=(12&i)>>2,r=(48&i)>>4,n=(192&i)>>6;this.replaceByte(a),this.replaceByte(s),this.replaceByte(r),this.replaceByte(n)}console.log("Table of graphic in ASCII after encrypt"),console.log(this.imageArray.data)},replaceByte(t){this.imageArray.data[this.index]=252&this.imageArray.data[this.index]|t,this.index++},decryptMessage(t){let e="",i=0,a=0,s=0,r=new Uint8Array(t);r.length>=3&&239===r[0]&&187===r[1]&&191===r[2]&&(i=3);while(i<r.length)if(a=r[i],a<128)e+=String.fromCharCode(a),i++;else if(a>191&&a<224){if(i+1>=r.length)throw"Decode failed.";s=r[i+1],e+=String.fromCharCode((31&a)<<6|63&s),i+=2}else{if(i+2>=r.length)throw"Decode failed.";s=r[i+1];let t=r[i+2];e+=String.fromCharCode((15&a)<<12|(63&s)<<6|63&t),i+=3}console.log("All message has been decrypted."),this.outputString=e}}},M=L,P=(i("8906"),Object(n["a"])(M,E,$,!1,null,"4ff4336c",null)),j=P.exports;a["a"].use(u["a"]);const O=[{path:"/",name:"Home",component:m},{path:"/rows-transition",name:"rows-transition",component:w},{path:"/bbs",name:"BBS",component:T},{path:"/stegano",name:"Stegano",component:j}],D=new u["a"]({routes:O});var K=D;a["a"].config.productionTip=!1,new a["a"]({router:K,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var a=i("9c0c"),s=i.n(a);s.a},8906:function(t,e,i){"use strict";var a=i("34ea"),s=i.n(a);s.a},"9c0c":function(t,e,i){},ab14:function(t,e,i){"use strict";var a=i("e3ef"),s=i.n(a);s.a},b6ec:function(t,e,i){},e3ef:function(t,e,i){}});
//# sourceMappingURL=app.519a4c1c.js.map