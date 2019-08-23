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
        
        background-image: url("~../../assets/opendBG.png");
        -webkit-background-size: 95%;
        background-size: 95%;
        background-repeat: no-repeat;
        color: blue;
        
    }
    .box__storacks__storack__opend{
        background-image: url("~../../assets/opendBG.png");
        -webkit-background-size: 95%;
        background-size: 95%;
        background-repeat: no-repeat;
        color: blue;
    }
    .box__storacks__storack__titel__opend{
        color: blue;
    }


    .box__storacks__storack__title--opend{
        margin: 0;
        line-height: calc(20vh - 2px);
        vertical-align: center;
        text-align: center;
        font-size: 36px;
         color: blue!important;
        font-weight: 700;
    }

    .box__storacks__storack--opened {
      background-image: url("~../../assets/opendBG.png");
      -webkit-background-size: 95%;
      background-size: 95%;
      background-repeat: no-repeat;
      color: blue!important;
    }

    .box__storacks__storack__title--opend {
      
    }

</style>
<template>
<div v-show="this.strucks" class="box">
    <ul class="box__storacks">

        <li v-for="(struck, index) in this.strucks" v-on:click="select(struck, index)" v-bind:class="{ 'box__storacks__storack': true, 'box__storacks__storack--opened': struck.isOpened}">
            <p v-if="struck.isOpened" class="box__storacks__storack__title--opend">{{struck.point}}</p>
            <p v-else class="box__storacks__storack__title">
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
      async select(struck, index){
        if (struck.isOpened) {
          return;
        }
        // await axios.post("https://e01b0f377f24.vps.mizucoffee.net/struck/open", {id: index});
        struck.isOpened = true;
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