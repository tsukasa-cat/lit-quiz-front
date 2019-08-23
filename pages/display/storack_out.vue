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

    .box{
        display: flex;
    }
    
    .logoImage{
        margin-left: 40px;
        margin-top: 25vh;
        width: 35vw;
        height: 20vw;
        -webkit-background-size: contain;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url("~../../assets/LitKingLogo.png");
    }
    .titleImage{
        margin-left: 40px;
        margin-top: 15vh;
        width: 35vw;
        height: 20vw;
        -webkit-background-size: contain;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url("~../../assets/StorackTitle.png");
    }
    .box__storacks{
        margin-top: 15vh;
        width: 70vh;
        height: 70vh;
        display: flex;
        flex-wrap: wrap;
        border: 5px solid black;
        padding-left: 0;
        margin-left: 40px;
    }
    .box__storacks__storack{
        width: calc(70vh/4 - 2px);
        height: calc(70vh/4 - 2px);
        border: 1px solid black;
        background-color: lawngreen;
        color: white;
        list-style: none;
        position: relative;
    }
    
    .box__storacks__storack__title{
        margin: 0;
        line-height: calc(20vh - 2px);
        vertical-align: center;
        text-align: center;
        font-size: 36px;
        color: black;
        font-weight: 700;
    }

</style>
<template>
<div class="box">
    <ul class="box__storacks">
        <li v-for="(strucks, index) in this.strucks" class="box__storacks__storack">
            <p class="box__storacks__storack__title">{{hiraganas[index]}}</p>
        </li>
    </ul> 
    <div class="sideBox">
        <div class="titleImage"></div>
        <div class="logoImage"></div>
    </div>
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
      strucks: [],
      quiz: null,
      hiraganas: ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た"]
    }
  },
  methods: {
      async getCurrentQuiz() {
          this.quiz = (await axios.get("https://e01b0f377f24.vps.mizucoffee.net/quiz/current")).data;
      },
      async getTeams() {
       this.strucks = (await axios.get("https://e01b0f377f24.vps.mizucoffee.net/struck/list")).data;
      },
      finishQuiz() {
          this.$router.push("/display/choises");
      }
  },
  created() {

  },
  mounted() {
      this.getCurrentQuiz();
      this.getTeams();
  }
}
</script>