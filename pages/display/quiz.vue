<style>

    body{
        background-color: #fff;
        position: relative;
        height: 100vh;
        box-sizing: border-box;
        background-image: url("~../../assets/ScreenBG.png");
        -webkit-background-size: cover;
        background-size: cover;
    }
    .quizSet {
        display: flex;
    }

    .quizBox {
        width: 50vw;
        margin: 5vh 0 5vh 5vw;
        height: 90vh;
        position: relative;
        overflow: hidden;
        
    }
    .quizBox__quizText{
        width: 50vw;
        font-size: 24px;
        background-image:url("~../../assets/quizTextBG.png");
        -webkit-background-size: 95% 100%;
        background-size: 95% 100%;
        padding: 30px;
        padding-right: 0;
        color: dimgray;
        font-weight: 700;
        
    }
    .quizBox__quizImage{
        width: 50vw;
        height: 50vw;
        margin-top: 3vw;
        position: relative;
        bottom: 0;
    }
    
    
    .quizList{
        width: 40vw;
        height: 90vh;
        display: flex;
    }
    .quizListBox{
        position: relative;
    }
    
    .quizListBox__quizLists{
        position: absolute;
        bottom:0;
        width: 40vw;
        padding: 0;
        padding-left: 20px;
    }

    .quizListBox__quizLists li {
        display: inline-flex;
        list-style: none;
        margin: 1vw;
        width: 18vw;
        height: 18vw;  
        font-size: 24px;
        bottom: 20px;
        position: relative;
        background-image: url("~../../assets/ChoiceBG.png");
        -webkit-background-size: cover;
        background-size: cover;
        color: white;
    }
    .quizListBox__quizLists li p{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        margin: 0;
        width: 100%;
        text-align: center;
        font-weight: 700;
    }

    .quizListBox__logoImage{
        margin-left: 40px;
        margin-top: 10vh;
        width: 35vw;
        height: 20vw;
        -webkit-background-size: contain;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url("~../../assets/LitKingLogo.png");
    }
   



</style>
<template>
    <div v-if="this.quiz" class="quizSet">
        <div class="quizBox">
            <p class="quizBox__quizText">Q1. {{this.quiz.description}}</p>
            <img class="quizBox__quizImage" src="~../../assets/defaultImage.png">
        </div>
        <div class="quizListBox">
            <div class="quizListBox__logoImage"></div>
            <ul class="quizListBox__quizLists">
                <li v-for="choice in this.quiz.choices">
                   <p>{{choice.name}}:{{choice.text}}</p>
                </li>
            </ul>
        </div>
        <input type="button" value="投票をとじる" v-on:click="finishQuiz()">
    </div>
    <div v-else>
        aaa
    </div>
</template>


<script>
import Vuex from 'vuex'
import axios from 'axios'
export default {
  head: {
    titleTemplate: '%s - Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  data() {
    return {
      quiz: null
    }
  },
  methods: {
      async getCurrentQuiz() {
          this.quiz = (await axios.get("http://lit-king.mizucoffee.com/quiz/current")).data;
          console.log(this.quiz);
      },
      async finishQuiz() {
          await axios.post("http://lit-king.mizucoffee.com/answer/stop");
          this.$router.push("/display/answers");
      }
  },
  created() {

  },
  mounted() {
      this.getCurrentQuiz();
  }
}
</script>
