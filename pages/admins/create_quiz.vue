<style>

    body {
        background-color: #f2f2f2;
        position: relative;
        height: 100vh;
        box-sizing: border-box;
    }
    .box{
        text-align: center;
    }

    
    .logoImage{
        background-image: url("../../assets/LitKingLogo.png");
        -webkit-background-size: contain;
        background-size: contain;
        height: 45vw;
        width: 80vw;
        object-fit: contain;
        margin: 0 auto;
        margin-top: 20vh;
        margin-bottom: 10vh;
    }

    .teamSelect {
        border: 1px solid #f2f2f2;
        width: 60vw;
        height: 10vw;
        font-size: 4vw;
        margin-bottom: 1vh;
    }

    .passwordInput {
        border: 1px solid #f2f2f2;
        width: 60vw;
        height: 10vw;
        font-size: 24px;
        margin-top: 0;
        margin-bottom: 10vh;
        font-size: 4vw;
    }

    .loginButton {
        width: 60vw;
        height: 20vw;
        background-image: url("../../assets/LoginButtonImg.png");
        -webkit-background-size: contain;
        background-size: contain;
        border: none;
    }
    
    .quizText{
        width: 400px;
        height: 100px;
    }
    .answer{
        width: 100px;
        height: 50px;
    }
</style>

<template>

    <body>
        <div class="box">
            <br>
            <br>
            <br>
            <input type="textarea" placeholder="問題文" class="quizText">
            <br>
            <br>
            <br>
            <input type="textarea" placeholder="選択肢1" class="answer">
            <input type="textarea" placeholder="選択肢2" class="answer">
            <input type="textarea" placeholder="選択肢3" class="answer">
            <input type="textarea" placeholder="選択肢4" class="answer">
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        </div>
           <div class="box">
               <ul>
                   <li v-for="quiz in this.quizes">
                       <p>問題: {{quiz.description}}</p>
                       <p v-for="choise in quiz.choises">{{choise.name}}</p>
                    </li>
               </ul>
            </div>
    </body>
</template>
<script>
    import Vuex from 'vuex'
    import Cookie from 'cookie-universal-nuxt'
    import axios from 'axios'
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
                quizes: [],
            }
        },
        methods: {
            getQuizes: async function() {
                this.quizes = (await axios.get("https://e01b0f377f24.vps.mizucoffee.net/quiz/list")).data;
                console.log(this.quizes);
            }
        },
        mounted() {
            this.getQuizes();
        }
    }

</script>
