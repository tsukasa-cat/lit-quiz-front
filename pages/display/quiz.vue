<style>
    body {
        background-color: #fff;
        position: relative;
        height: 100vh;
        box-sizing: border-box;
    }

/*
    .logoImage {
        background-image: url("~../../assets/LitKingLogo.png");
        -webkit-background-size: contain;
        background-size: contain;
        background-repeat: no-repeat;
        height: 45vw;
        width: 80vw;
        object-fit: contain;
        margin: 0 auto;
        margin-top: 20vh;
    }
*/

    

    body{
        background-image: url("~../../assets/ScreenBG.png");
        -webkit-background-size: cover;
        background-size: cover;
    }
    .quizSet {
        display: flex;
    }

    .quizBox {
        width: 45vw;
        margin: 5vh 0 5vh 5vw;
        height: 90vh;
        overflow: hidden;
        background-color:  blue;
    }
    .quizBox__quizText{
        width: 40vw;
        height: 5vw;
        color: aliceblue;
        font-size: 24px;
        padding: 10px;
    }
    .quizBox__quizImage{
        width: 45vw;
        
    }
    
    .quizList{
        width: 50vw;
        height: 90vh;
        display: flex;
    }
    .quizListBox__quizLists{
        position: relative;
        width: 50vw;
    }

    .quizListBox__quizLists li {
        display: inline-flex;
        background-color: gray;
/*        border: 1px solid white;*/
        list-style: none;
        width: 20vw;
        height: 20vw;  
    }
    .quizListBox__quizLists li inputP

    .quizImage {
        height: 70vh;
        margin-top: 15vh;
        margin-left: 5vw;
    }



</style>
<template>
    <div v-if="this.quiz" class="quizSet">
        <div class="quizBox">
            <p class="quizBox__quizText">Q1. {{this.quiz.description}}</p>
            <img class="quizBox__quizImage" src="~../../assets/defaultImage.png">
        </div>
        <div class="quizListBox">
            <ul class="quizListBox__quizLists">
                <li v-for="choise in this.quiz.choises">
                   
                </li>
            </ul>
        </div>
    </div>
    <div v-else>
        aaa
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
                    description: "パンはパンでも食べられないパンはなんだ？",
                    answer: 2
                };
            },
            finishQuiz() {
                this.$router.push("/display/choises");
            }
        },
        created() {

        },
        mounted() {
            this.getCurrentQuiz();
        }
    }

</script>
