<style>
    body {
        background-color: #fff;
        position: relative;
        height: 100vh;
        box-sizing: border-box;
    }

    .logoImage {
        background-image: url("~../assets/LitKingLogo.png");
        -webkit-background-size: contain;
        background-size: contain;
        background-repeat: no-repeat;
        height: 45vw;
        width: 80vw;
        object-fit: contain;
        margin: 0 auto;
        margin-top: 20vh;
    }

    ul {
        padding: 0;
        display: flex;
        flex-flow: row wrap;
        width: 100vw;
        list-style: none;
        margin: 0;
    }

    input {
        width: 30vw;
        height: 30vw;
        background-image: url("~../assets/ChoiceBG.png");
        -webkit-background-size: contain;
        background-size: contain;
        border: none;
        background-color: transparent;
        margin: 5vw;
        color: white;
        text-align: center;
        font-size: 10vw;
    }

</style>
<template>
    <div>
        <div class="logoImage" style="{ backgroundImage: `url(${~../assets/LitKingLogo.png})` }"></div>
        <div v-if="this.quiz">
            <p>Q1. {{this.quiz.description}}</p>
            <ul>
                <li v-for="choise in this.quiz.choises">
                    <input v-bind:value="choise" v-on:click="selectQuiz(choise)">
                </li>
            </ul>
        </div>
        <div v-else>
            aaa
        </div>
    </div>
</template>

<script>
    import Vuex from 'vuex'
    export default {
        head: {
            titleTemplate: '%s - Nuxt.js',
            meta: [{
                    charset: 'utf-8'
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1'
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Meta description'
                }
            ]
        },
        data() {
            return {
                quiz: null
            }
        },
        methods: {
            getCurrentQuiz() {
                this.quiz = {
                    choises: ["a", "b", "c", "d"],
                    image: "",
                    description: "まんげまんげ",
                    answer: 2
                };
            },
            selectQuiz(choise) {
                this.$router.push("/wating_nino")
            }
        },
        created() {

        },
        mounted() {
            this.getCurrentQuiz();
        }
    }

</script>
