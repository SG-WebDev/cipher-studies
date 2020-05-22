<template>
    <div class="dh">
        <h1>Diffie-Hellman</h1>
        <section class="section">
            <div class="section__Label">Common values:</div>
            <div class="section__Item">
                <p>p:
                    <span class="smallText">{{ p ? p : "You're not run algorithm yet."}}</span>
                </p>
                <p>g:
                    <span class="smallText">{{g ? g : "You're not run algorithm yet."}}</span>
                </p>
            </div>
            <div class="section__Label">Client A values:</div>
            <div class="section__Item">
                <p>x:
                    <span class="smallText">{{clientA.x ? clientA.x : "You're not run algorithm yet."}}</span>
                </p>
                <p>k:
                    <span class="smallText">{{clientA.k ? clientA.k : "You're not run algorithm yet."}}</span>
                </p>
            </div>
            <div class="section__Label">Client B values:</div>
            <div class="section__Item">
                <p>y:
                    <span class="smallText">{{clientB.y ? clientB.y : "You're not run algorithm yet."}}</span>
                </p>
                <p>k: {{clientB.k ? clientB.k : "You're not run algorithm yet."}}</p>
            </div>
            <div class="section__Label">Common public key:</div>
            <div class="section__Item">
                <p>k:
                    <strong class="smallText">{{k ? k : "You're not run algorithm yet."}}</strong>
                </p>
            </div>
            <div class="section__Item">
                <button class="button" @click="runDH">RUN</button>
            </div>
        </section>
    </div>
</template>
<style scoped>
    .section__Item {
        flex-direction: column;
    }
    .smallText {
        font-size: 12px;
        word-break: break-all;
    }
</style>
<script>
    import bigInteger from "big-integer";
    export default {
        name: "DH",
        data() {
            return {
                p: null,
                g: null,
                k: null,
                clientA: {
                    x: null,
                    k: null
                },
                clientB: {
                    y: null,
                    k: null
                }
            };
        },
        computed: {

        },
        methods: {
            generateP() {
                //512 bit number
                let min = bigInteger.zero;
                let max = bigInteger(2).pow(512);
                let testedNumber;
                let bigPrimeNumber;
                while(true) {
                    testedNumber = bigInteger.randBetween(min, max);
                    console.log(testedNumber.bitLength());
                    if(bigInteger(testedNumber).isPrime()) {
                        bigPrimeNumber = testedNumber;
                        break;
                    }
                }
                console.log(`Big prime number is ${bigPrimeNumber}`)
                this.p = bigPrimeNumber;
            },
            generateG() {

            },
            runDH() {
                this.generateP();
            }
        }
    }
</script>
