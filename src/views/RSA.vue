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
        </section>
    </div>
</template>
<style scoped>
    p {
      padding: 0 15px;
        font-family: "Helvetica", serif;
    }
</style>
<script>
    export default {
        name: "RSA",
        data() {
            return {
                p: 8089,
                q: 4111
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
        }
    }
</script>
