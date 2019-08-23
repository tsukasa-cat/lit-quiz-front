<style>

    body{
        background-color: #fff;
        position: relative;
        height: 100vh;
        box-sizing: border-box;
        background-image: url("../../assets/ScreenBG.png");
        -webkit-background-size: cover;
        background-size: cover;
    }

    .box{
        display: flex;
    }
    
    .logoImage{
        margin-left: 40px;
        margin-top: 75vh;
        width: 25vw;
        height: 20vw;
        -webkit-background-size: contain;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url("../../assets/LitKingLogo.png");
    }
    .box__storacks{
        margin-top: 10vh;
        width: 80vh;
        height: 80vh;
        display: flex;
        flex-wrap: wrap;
        border: 5px solid black;
        padding-left: 0;
        margin-left: 40px;
    }
    .box__storacks__storack{
        width: calc(20vh - 2px);
        height: calc(20vh - 2px);
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
        <li v-for="(struck, index) in this.strucks" class="box__storacks__storack">
            <p class="box__storacks__storack__title">{{hiraganas[index]}}:{{struck.point}}</p>
        </li>
    </ul> 
    <div class="logoImage"></div>
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
      quiz: null,
      hiraganas: ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た"],
      strucks: []
    }
  },
  methods: {
      async getCurrentQuiz() {
          this.quiz = (await axios.get("https://e01b0f377f24.vps.mizucoffee.net/quiz/current")).data;
      },
      async getTeams() {
        this.strucks = (await axios.get("https://e01b0f377f24.vps.mizucoffee.net/struck/list")).data;
        console.log(this.strucks);
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