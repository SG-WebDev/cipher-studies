<template>
    <div class="rsa">
        <h1>RSA</h1>
        <section class="section">
            <div class="section__Item">
                <p>p:
                    <span class="smallText">{{ p ? p : "You're not run algorithm yet."}}</span>
                </p>
                <p>q:
                    <span class="smallText">{{q ? q : "You're not run algorithm yet."}}</span>
                </p>
                <p>n:
                    <span class="smallText">{{n ? n : "You're not run algorithm yet."}}</span>
                </p>
                <p>phi:
                    <span class="smallText">{{phi ? phi : "You're not run algorithm yet."}}</span>
                </p>
            </div>
            <div class="section__Item">
                <p>e (encrypted key):
                    <span class="smallText">{{ e ? e : "You're not run algorithm yet."}}</span>
                </p>
                <p>d (decrypted key):
                    <span class="smallText">{{d ? d : "You're not run algorithm yet."}}</span>
                </p>
            </div>
            <div class="section__Item">
                <button class="button" @click="runRSA">RUN</button>
            </div>
        </section>
    </div>
</template>
<style scoped>
    p {
      padding: 0 15px;
        font-family: "Helvetica", serif;
    }
    .smallText {
        font-weight: bold;
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
            };
        },
        computed: {
            n() {
                return this.p * this.q;
            },
            phi() {
                return (this.p - 1) * (this.q - 1);
            }
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
            runRSA() {
                this.generateE();
                this.generateD();
            }
        }
    }
</script>
