<template>
    <div class="rsa">
        <h1>RSA</h1>
        <section class="section">
            <div class="section__Item">
                <p>p:
                    <span class="smallText">{{ p ? p : "Something went wrong."}}</span>
                </p>
                <p>q:
                    <span class="smallText">{{q ? q : "Something went wrong."}}</span>
                </p>
                <p>n:
                    <span class="smallText">{{n ? n : "Something went wrong."}}</span>
                </p>
                <p>phi:
                    <span class="smallText">{{phi ? phi : "Something went wrong."}}</span>
                </p>
            </div>
            <div class="section__Item">
                <button class="button" @click="generateKeys">Generate Keys</button>
            </div>
            <div class="section__Item">
                <p>e:
                    <span class="smallText">{{ e ? e : "You're not generate keys yet."}}</span>
                </p>
                <p>d:
                    <span class="smallText">{{d ? d : "You're not generate keys yet."}}</span>
                </p>
            </div>
            <div class="section__Item">
                <p>Text to encrypt:
                    <span class="smallText">{{ inputText ? inputText : "Something went wrong."}}</span>
                </p>
            </div>
            <div class="section__Item">
                <button class="button" @click="encryptBytes">Encrypt Text</button>
            </div>
            <div class="section__Item">
                <p>Encrypted Input:
                    <span class="smallText">{{ encryptedInput ? encryptedInput : "You're not run encryption yet."}}</span>
                </p>
            </div>
            <div class="section__Item">
                <button class="button" @click="decryptBytes">Decrypt Text</button>
            </div>
            <div class="section__Item">
                <p>Decrypted Text:
                    <span class="smallText">{{ outputText ? outputText : "You're not run decryption yet."}}</span>
                </p>
            </div>
        </section>
    </div>
</template>
<style scoped>
    p {
        padding: 0 15px;
        font-family: "Helvetica", serif;
        font-weight: bold;
    }
    p span {
        font-weight: normal;
    }

</style>
<script>
    import bigInteger from "big-integer";
    export default {
        name: "RSA",
        data() {
            return {
                p: 8089,
                q: 4111,
                e: null,
                d: null,
                inputText: "Lorem ipsum dolor sit amet consectetur efficittur.",
                encryptedBytes: null,
                encryptedInput: null,
                decryptedBytes: null,
                outputText: null,
            };
        },
        computed: {
            n() {
                return this.p * this.q;
            },
            phi() {
                return (this.p - 1) * (this.q - 1);
            },

        },
        methods: {
            generateE() {
                let min = bigInteger.zero;
                // 128 bit number
                let max = bigInteger(2).pow(128);
                let localPhi =  this.phi;
                let testedNumber;
                let e;
                while(true) {
                    testedNumber = bigInteger.randBetween(min, max);
                    if(bigInteger.gcd(testedNumber, localPhi).equals(1) && testedNumber.isPrime()) {
                        e = testedNumber;
                        console.log(testedNumber);
                        console.log(testedNumber.isPrime());
                        break;
                    }
                }
                console.log("Encryption key: " + e);
                this.e = e;
            },
            generateD() {
                let localE = this.e;
                let localPhi = this.phi;
                let d = bigInteger(localE).modInv(localPhi);
                console.log("Decryption key: " + d);
                this.d = d;
            },
            encryptByte(byte) {
                let localE = this.e;
                let localN = this.n;
                return bigInteger(byte).modPow(localE, localN);
            },
            decryptByte(c) {
                let localD = this.d;
                let localN = this.n;
                return bigInteger(c).modPow(localD, localN);
            },
            encryptBytes() {
                let inputText = this.inputText;
                let inputArray = inputText.split("");
                let tempArray = [];
                inputArray.forEach(item => {
                    let asciiItem = item.charCodeAt(0);
                    let encryptedItem = this.encryptByte(asciiItem);
                    tempArray.push(encryptedItem);
                })
                this.encryptedBytes = tempArray;
                console.log("Encrypted Array: ");
                console.log(this.encryptedBytes);
                this.encryptedInput = this.encryptedBytes.toString().split(",").join(" ");
            },
            decryptBytes() {
                let encryptedBytes = this.encryptedBytes;
                let tempArray = [];
                encryptedBytes.forEach(item => {
                    let decryptedItem = this.decryptByte(item);
                    let stringItem = String.fromCharCode(decryptedItem);
                    tempArray.push(stringItem);
                })
                this.decryptedBytes = tempArray;
                console.log("Decrypted Array: ");
                console.log(this.decryptedBytes);
                this.outputText = this.decryptedBytes.toString().split(",").join("");
            },
            generateKeys() {
                this.generateE();
                this.generateD();
            }
        }
    }
</script>
