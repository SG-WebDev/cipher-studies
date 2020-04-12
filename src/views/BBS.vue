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
        word-break: break-all;
    }
</style>
<script>
    import bigInteger from "big-integer";
    export default {
        name: "BBS",
        data() {
            return {
                bitsAmount: 20000,
                bitsSeries: null,
                x0: 0,
                n: 0,
                prime: 0,
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
            generateBitsSeries(amount) {
                this.generateBlumNumber();
                this.generateInitX(bigInteger(this.n));

                let x0 = bigInteger(this.x0).modPow(2, bigInteger(this.n));
                let x_prev = x0;
                let arrayOfBits = [];
                for(let i = 1; i <= amount; i++) {
                    let xi =  bigInteger(x_prev).modPow(2, bigInteger(this.n));
                    x_prev = xi;
                    let lsb = 0;
                    if (bigInteger(x_prev).isEven()) {
                        console.log("Negative bit address");
                        lsb = 0;
                    } else {
                        console.log("Positive bit address");
                        lsb = 1;
                    }
                    arrayOfBits.push(lsb);
                }
                this.bitsSeries = arrayOfBits;
            },
            generateBlumNumber() {
                let n;
                let p = this.generateBigPrimeNumber();
                let q = this.generateBigPrimeNumber();
                n = bigInteger(p).multiply(q);
                console.log(`Blum number is ${n}`);
                this.n = n;
            },
            generateInitX(n) {
                //512 bit number
                let min = bigInteger.zero;
                let max = bigInteger(2).pow(512);
                let testedNumber;
                let x0;
                while(true) {
                    testedNumber = bigInteger.randBetween(min, max);
                    if(bigInteger.gcd(testedNumber, n).equals(1)) {
                        x0 = testedNumber;
                        break;
                    }
                }
                console.log(`Init X0 number is ${x0}`)
                this.x0 = x0;
            },
            generateBigPrimeNumber() {
                //512 bit number
                let min = bigInteger.zero;
                let max = bigInteger(2).pow(512);
                let testedNumber;
                let bigPrimeNumber;
                while(true) {
                    testedNumber = bigInteger.randBetween(min, max);
                    if(bigInteger(testedNumber).isPrime() && bigInteger(testedNumber).value > 10000) {
                        bigPrimeNumber = testedNumber;
                        break;
                    }
                }
                console.log(`Big prime number is ${bigPrimeNumber}`)
                return bigPrimeNumber;
            },
            runBBS() {
                let t0 = performance.now();
                this.generateBitsSeries(this.bitsAmount);
                let t1 = performance.now();
                alert(`generateBitsSeries() function takes ${(t1 - t0)} milliseconds`)
            }
        }
    }
</script>
