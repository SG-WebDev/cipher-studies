<template>
    <div class="bbs">
        <h1>Blum Blum Shub</h1>
        <section class="section">
            <div class="section__Label">Bits Series:</div>
            <div class="section__Item">
                <p class="smallText">{{bitsSeries ? bitsSeries : "You're not generate bits yet."}}</p>
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
        methods: {
            generateBitsSeries(amount) {

            },
            runBBS() {

            }
        }
    }
</script>
