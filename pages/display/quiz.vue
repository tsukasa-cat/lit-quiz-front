<style>
    body {
        background-color: #fff;
        position: relative;
        height: 100vh;
        box-sizing: border-box;
    }

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

    ul {
        padding: 0;
        display: flex;
        flex-flow: row wrap;
        width: 100vw;
        height: 20vh;
        list-style: none;
        text-align: center;
    }
    li{
        width: 20vw;   
    }
    img{
        width: 40vw;
        margin-top: 5vh;
    }
    .box{
        width: 100vw;
        height: 100vh;
        text-align: center;
        background-image: url("~../../assets/ScreenBG.png");
        -webkit-background-size: cover;
        background-size: cover;
    }
    .questionList{
        width: 40vw;
        height: 10vh;
        margin: 0 auto;
        overflow: hidden;
    }
    li{
        background-color: gray;
        border: 1px solid white;
    }

</style>
<template>
<div class="box">
    <div v-if="this.quiz">
        <img class="quizImage" src="~../../assets/defaultImage.png">
        <p>Q1. {{this.quiz.description}}</p>
        <div class="questionList">
        <ul>
            <li v-for="choise in this.quiz.choises">
                <input v-bind:value="choise" v-on:click="selectQuiz(choise)">
            </li>
        </ul>
        </div>
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
      getCurrentQuiz() {
          this.quiz = {choises: ["a", "b", "c", "d"], image: "", description: "まんげまんげ", answer: 2};
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