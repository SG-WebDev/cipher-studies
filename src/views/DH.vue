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
                <p>x(private key):
                    <span class="smallText">{{clientA.x ? clientA.x : "You're not run algorithm yet."}}</span>
                </p>
                <p>X:
                    <span class="smallText">{{clientA.X ? clientA.X : "You're not run algorithm yet."}}</span>
                </p>
                <p>k(public key):
                    <span class="smallText">{{clientA.k ? clientA.k : "You're not run algorithm yet."}}</span>
                </p>
            </div>
            <div class="section__Label">Client B values:</div>
            <div class="section__Item">
                <p>y(private key):
                    <span class="smallText">{{clientB.y ? clientB.y : "You're not run algorithm yet."}}</span>
                </p>
                <p>Y:
                    <span class="smallText">{{clientB.Y ? clientB.Y : "You're not run algorithm yet."}}</span>
                </p>
                <p>k(public key):
                    <span class="smallText">{{clientB.k ? clientB.k : "You're not run algorithm yet."}}</span>
                </p>
            </div>
            <div class="section__Label">Common public key:</div>
            <div class="section__Item">
                <p>k(public key):
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
    p {
        padding: 0 15px;
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
                    X: null,
                    k: null,
                },
                clientB: {
                    y: null,
                    Y: null,
                    k: null,
                }
            };
        },
        computed: {

        },
        methods: {
            setP() {
                //static prime number
                this.p = 71;
            },
            setG() {
                // static primitive root modulo n
                this.g = 7;
            },
            getClientAPrivateKey() {
                //512 bit length number
                let min = bigInteger.zero;
                let max = bigInteger(2).pow(512);
                let bigRandomNumber = bigInteger.randBetween(min, max);
                this.clientA.x = bigRandomNumber;
                let g = this.g;
                let p = this.p;
                let x = bigInteger(this.clientA.x);
                let X = bigInteger(g).modPow(x, p)
                this.clientA.X = X;
            },
            getClientBPrivateKey() {
                //512 bit length number
                let min = bigInteger.zero;
                let max = bigInteger(2).pow(512);
                let bigRandomNumber = bigInteger.randBetween(min, max);
                this.clientB.y = bigRandomNumber;
                let g = this.g;
                let p = this.p;
                let y = bigInteger(this.clientB.y);
                let Y = bigInteger(g).modPow(y, p)
                this.clientB.Y = Y;

            },
            getClientAPublicKey() {
                let Y = this.clientB.Y;
                let x = bigInteger(this.clientA.x);
                let p = this.p;
                this.clientA.k = bigInteger(Y).modPow(x, p);
            },
            getClientBPublicKey() {
                let X = this.clientA.X;
                let y = bigInteger(this.clientB.y);
                let p = this.p;
                this.clientB.k = bigInteger(X).modPow(y, p);
            },
            setCommonKey() {
                let clientAPublicKey = this.clientA.k;
                let clientBPublicKey = this.clientB.k;
                if(bigInteger(clientAPublicKey).equals(bigInteger(clientBPublicKey))) {
                    this.k = clientAPublicKey;
                }
                else {
                    this.k = "Something went wrong :/";
                }
            },
            runDH() {
                this.setP();
                this.setG();
                this.getClientAPrivateKey();
                this.getClientBPrivateKey();
                this.getClientAPublicKey();
                this.getClientBPublicKey();
                this.setCommonKey();
            }
        }
    }
</script>
