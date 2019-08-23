<style>
    body {
        background-color: #fff;
        position: relative;
        height: 100vh;
        box-sizing: border-box;
    }

    .logoImage {
        background-image: url("../assets/LitKingLogo.png");
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
        background-image: url("../assets/ChoiceBG.png");
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
        <div class="logoImage" style="{ backgroundImage: `url(${../assets/LitKingLogo.png})` }"></div>
        <div v-if="this.quiz">
            <p>Q1. {{this.quiz.description}}</p>
            <ul>
                <li v-for="(choice, index) in this.quiz.choices">
                    <input type="button" v-bind:value="choice.name" v-on:click="selectQuiz(index)">
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
import axios from 'axios'
import cookie from 'cookie-universal-nuxt'
import { async } from 'q';
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
      team_name: null
    }
  },
  methods: {
      async getCurrentQuiz() {
          this.quiz = (await axios.get("http://lit-king.mizucoffee.com/quiz/current")).data;
          console.log(this.quiz);
          this.confirmIsAnswered();
      },
      async selectQuiz(index) {
        // console.log(index);
        // return;
        await axios.post('http://lit-king.mizucoffee.com/answer', {
        // axios.post('http://192.168.11.97:3000/answer', {
          answer_id: index,
          team_id: this.team_name.toUpperCase()
        });

        var answered_quiz_ids = localStorage.getItem("answered_quiz_ids") ? JSON.parse(localStorage.getItem("answered_quiz_ids")) : [];
        console.log(answered_quiz_ids);
        answered_quiz_ids.push(this.quiz._id);

        localStorage.setItem("answered_quiz_ids", JSON.stringify(answered_quiz_ids));
        this.$router.push("/wating_nino");
        
      },
      confirmLogin() {
        // this.$cookies.get('article01')
        this.team_name = this.getCookieArray().team_name;
        if (!this.team_name) {
          this.$router.push("/login");
        }
        console.log(this.team_name);
      },
      confirmIsAnswered() {
        var answered_quiz_ids = localStorage.getItem("answered_quiz_ids") ? JSON.parse(localStorage.getItem("answered_quiz_ids")) : [];
        var flag = false;
        console.log(this.quiz);
        console.log("a"+this.quiz._id);
        console.log("a"+answered_quiz_ids);
        for(var i = 0; i< answered_quiz_ids.length; i++) {
          if (answered_quiz_ids[i] == this.quiz._id) {
            flag = true;
          }
        }
        if (flag) {
          this.$router.push("/wating_nino");
        }
      },
      getCookieArray(){
        var arr = new Array();
        if(document.cookie != ''){
          var tmp = document.cookie.split('; ');
          for(var i=0;i<tmp.length;i++){
            var data = tmp[i].split('=');
            arr[data[0]] = decodeURIComponent(data[1]);
          }
        }
        return arr;
      }
  },
  created() {
  },
  mounted() {
    // async function() {
    //   await this.getCurrentQuiz();
    // }
    this.getCurrentQuiz();
    // this.confirmIsAnswered();
    this.confirmLogin();
  }
}
</script>