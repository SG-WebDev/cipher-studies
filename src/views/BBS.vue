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
                <p>Series test: <strong>{{test.series ? "valid" : "invalid"}}</strong></p>
                <p>Long Series test: <strong>{{test.longSeries ? "valid" : "invalid"}}</strong></p>
                <p>Single Bit test: <strong>{{test.singleBit ? "valid" : "invalid"}}</strong></p>
                <p>Poker test: <strong>{{test.poker ? "valid" : "invalid"}}</strong></p>
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
                        lsb = 0;
                    } else {
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
                console.log(`Init X0 number is ${x0}`);
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
            singleBitTest() {
                let bits = [...this.bitsSeries];
                let i = 0;
                bits.forEach(bit => {
                    if(bit === 1) {
                        i++;
                    }
                });

                this.test.singleBit = !((i < 9725) || (i > 10275));
            },
            longSeriesTest() {
                let i = 0;
                let bits = [...this.bitsSeries];
                let lastBit = bits[0];
                let isValid = true;
                bits.forEach(function(item, index) {
                    let testedBit = bits[index];
                    if(testedBit === lastBit) {
                        i++;
                        if(i>=26) {
                            isValid = false;
                        }
                    } else {
                        i = 0;
                    }
                    lastBit = bits[index-1];
                });
                this.test.longSeries = isValid;
            },
            seriesTest() {
                let bits = [...this.bitsSeries];
                let isValid = false;
                let schemas = [];
                for(let y = 1; y <= 6; y++) {
                    schemas[y] = 0;
                }
                bits.forEach(function(item, index) {
                    let testedBit = bits[index];
                    let prevBit = bits[index-1];
                    let prev2Bit = bits[index-2];
                    let prev3Bit = bits[index-3];
                    let prev4Bit = bits[index-4];
                    let prev5Bit = bits[index-5];
                    let prev6Bit = bits[index-6];

                    if( testedBit === prev6Bit &&
                        testedBit === prev5Bit &&
                        testedBit === prev4Bit &&
                        testedBit === prev3Bit &&
                        testedBit === prev2Bit &&
                        testedBit === prevBit &&
                        typeof testedBit !== "undefined") {
                        schemas[6]++;
                        bits[index] = undefined;
                        bits[index-1] = undefined;
                        bits[index-2] = undefined;
                        bits[index-3] = undefined;
                        bits[index-4] = undefined;
                        bits[index-5] = undefined;
                        bits[index-6] = undefined;
                    }
                });
                bits.forEach(function(item, index) {
                    let testedBit = bits[index];
                    let prevBit = bits[index-1];
                    let prev2Bit = bits[index-2];
                    let prev3Bit = bits[index-3];
                    let prev4Bit = bits[index-4];
                    let prev5Bit = bits[index-5];

                    if( testedBit === prev5Bit &&
                        testedBit === prev4Bit &&
                        testedBit === prev3Bit &&
                        testedBit === prev2Bit &&
                        testedBit === prevBit &&
                        typeof testedBit !== "undefined") {
                        schemas[5]++;
                        bits[index] = undefined;
                        bits[index-1] = undefined;
                        bits[index-2] = undefined;
                        bits[index-3] = undefined;
                        bits[index-4] = undefined;
                        bits[index-5] = undefined;
                    }
                });
                bits.forEach(function(item, index) {
                    let testedBit = bits[index];
                    let prevBit = bits[index-1];
                    let prev2Bit = bits[index-2];
                    let prev3Bit = bits[index-3];
                    let prev4Bit = bits[index-4];

                    if( testedBit === prev4Bit &&
                        testedBit === prev3Bit &&
                        testedBit === prev2Bit &&
                        testedBit === prevBit &&
                        typeof testedBit !== "undefined") {
                        schemas[4]++;
                        bits[index] = undefined;
                        bits[index-1] = undefined;
                        bits[index-2] = undefined;
                        bits[index-3] = undefined;
                        bits[index-4] = undefined;
                    }
                });
                bits.forEach(function(item, index) {
                    let testedBit = bits[index];
                    let prevBit = bits[index-1];
                    let prev2Bit = bits[index-2];
                    let prev3Bit = bits[index-3];

                    if( testedBit === prev3Bit &&
                        testedBit === prev2Bit &&
                        testedBit === prevBit &&
                        typeof testedBit !== "undefined") {
                        schemas[3]++;
                        bits[index] = undefined;
                        bits[index-1] = undefined;
                        bits[index-2] = undefined;
                        bits[index-3] = undefined;
                    }
                });
                bits.forEach(function(item, index) {
                    let testedBit = bits[index];
                    let prevBit = bits[index-1];
                    let prev2Bit = bits[index-2];

                    if( testedBit === prev2Bit  &&
                        testedBit === prevBit &&
                        typeof testedBit !== "undefined") {
                        schemas[2]++;
                        bits[index] = undefined;
                        bits[index-1] = undefined;
                        bits[index-2] = undefined;
                    }
                });
                bits.forEach(function(item, index) {
                    let testedBit = bits[index];
                    let prevBit = bits[index-1];
                    if( testedBit === prevBit &&
                        typeof testedBit !== "undefined") {
                        schemas[1]++;
                        bits[index] = undefined;
                        bits[index-1] = undefined;
                    }
                });
                if( schemas[1] > 2315 && schemas[1] < 2685 &&
                    schemas[2] > 1114 && schemas[2] < 1386 &&
                    schemas[3] > 527 && schemas[3] < 723 &&
                    schemas[4] > 240 && schemas[4] < 384 &&
                    schemas[5] > 103 && schemas[5] < 209 &&
                    schemas[6] > 103 && schemas[6] < 209 ) {
                    isValid = true;
                }
                console.log(schemas);
                this.test.series = isValid;
            },
            pokerTest() {
                let bits = [...this.bitsSeries];
                let bitsSegments = [];
                let schemas = [];
                let isValid = false;
                for (let x = 0; x < 5000; x++) {
                    bitsSegments[x] = bits.splice(0, 4).toString()
                        .split(",")
                        .join("");
                }
                for(let y = 0; y < 16; y++) {
                    schemas[y] = 0;
                }
                bitsSegments.forEach(bitsSegment => {
                    switch (bitsSegment) {
                        case '0000': schemas[0]++; break;
                        case '0001': schemas[1]++; break;
                        case '0010': schemas[2]++; break;
                        case '0011': schemas[3]++; break;
                        case '0100': schemas[4]++; break;
                        case '0101': schemas[5]++; break;
                        case '0110': schemas[6]++; break;
                        case '0111': schemas[7]++; break;
                        case '1000': schemas[8]++; break;
                        case '1001': schemas[9]++; break;
                        case '1010': schemas[10]++; break;
                        case '1011': schemas[11]++; break;
                        case '1101': schemas[12]++; break;
                        case '1110': schemas[13]++; break;
                        case '1100': schemas[14]++; break;
                        case '1111': schemas[15]++; break;
                        default: break;
                    }
                });

                let sigma = 0;
                schemas.forEach(schema => {
                    sigma += Math.pow(schema, 2);
                });

                let x = (16/5000) * sigma - 5000;
                if((x > 2.16) && (x < 46.17)) {
                    isValid = true;
                }
                this.test.poker = isValid;
            },
            runBBS() {
                let t0 = performance.now();
                this.generateBitsSeries(this.bitsAmount);
                let t1 = performance.now();
                console.log(`generateBitsSeries() function takes ${(t1 - t0)} milliseconds`);
                this.singleBitTest();
                this.longSeriesTest();
                this.pokerTest();
                this.seriesTest();
                let t2 = performance.now();
                console.log(`generateBitsSeries() with four FIPS 140-2 tests takes ${(t2 - t0)} milliseconds`)
            }
        }
    }
</script>
