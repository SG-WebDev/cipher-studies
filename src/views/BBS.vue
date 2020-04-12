<template>
    <div class="bbs">
        <h1>Blum Blum Shub</h1>
        <section class="section">
            <div class="section__Label">Bits Series:</div>
            <div class="section__Item">
                <p class="smallText">{{bitsSeries ? showBitsSeries : "You're not generate bits yet."}}</p>
            </div>
            <div class="section__Label">Tests:</div>
            <div class="section__Item">
                <p>Series test: {{test.series ? "valid" : "invalid"}}</p>
                <p>Long Series test: {{test.longSeries ? "valid" : "invalid"}}</p>
                <p>Single Bit test: {{test.singleBit ? "valid" : "invalid"}}</p>
                <p>Poker test: {{test.poker ? "valid" : "invalid"}}</p>
            </div>
            <div class="section__Item">
                <button class="button" @click="runBBS">RUN</button>
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
    }
</style>
<script>
    import numberTheory from "number-theory"
    import bigInt from "big-integer"
    export default {
        name: "BBS",
        data() {
            return {
                bitsAmount: 20000,
                bitsSeries: null,
                test: {
                    series: false,
                    longSeries: false,
                    singleBit: false,
                    poker: false
                }
            };
        },
        computed: {
            showBitsSeries() {
                return this.bitsSeries.toString()
                    .split(",")
                    .join("");
            },
        },
        methods: {
            generateBlumNumber() {
            },
            generateInitX() {
            },
            generateBitsSeries(amount) {
                let n = this.generateBlumNumber;
                let x = this.generateInitX;
                let x0 = numberTheory.powerMod(x, 2, n);
                let x_prev = x0;
                let arrayOfBits = [];
                for(let i = 1; i <= amount; i++) {
                    let bitMask = 1 << 5;
                    let xi =  numberTheory.powerMod(x_prev, 2, n)
                    x_prev = xi;
                    let lsb = 0;
                    if ((xi & bitMask) != 0) {
                        console.log("Positive bit address");
                        lsb = 1;
                    } else {
                        console.log("Negative bit address");
                        lsb = 0;
                    }
                    arrayOfBits.push(lsb);
                }
                this.bitsSeries = arrayOfBits;
            },
            generateBigPrimeNumber() {
                //256 bit number
                let min = bigInt.zero;
                let max = bigInt(2).pow(256);
                while(true) {
                    let number = bigInt.randBetween(min, max);
                    console.log(number)
                    if(bigInt(number).isPrime() && number > 10000) {
                        console.log(bigInt(number).isPrime());
                        console.log(bigInt(number).value);
                        break;
                    }

                }
            },
            runBBS() {
                this.generateBigPrimeNumber();
            }
        }
    }
</script>
