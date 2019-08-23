<style>

    *{
        margin: 0;
        padding: 0;
    }
    body{
        background-color: #fff;
        position: relative;
    }
    
    .teams{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-wrap: wrap;
    }
    
    .teams__teamBox{
        width: calc(20vw - 2px);
        height: calc(20vh - 2px);
        border: 1px solid dimgray;
        background-color: blue;
        color: white;
        list-style: none;
        position: relative;
    }

    .teams__teamBox--seikai {
      background-color: red;
    }
   
    .teams__teamBox__teamName{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: 18px;
    }
    .teams__teamBox__teamAnswer{
        text-align: center;
        line-height: 16vh;
        vertical-align: center;
        font-size: 36px;
    }
    .logo{
        position: absolute;
        bottom: 0;
        right: 0;
        width: 40vw;
        height: 20vh;
        background-image: url("../../assets/LitKingLogo.png");
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
    }
</style>
<template>
<div v-if="this.answers">
    <ul class="teams">
        <li v-for="answer in this.answers" v-bind:class="{ 'teams__teamBox': true, 'teams__teamBox--seikai': is_checked && quiz.answer == getChoiceId(answer.choices)}">
            <h1 class="teams__teamBox__teamName">{{answer.name}}</h1>
            <p class="teams__teamBox__teamAnswer">{{getChoiceText(answer.choices)}}</p>
        </li>
    </ul> 
    <div class="logo" v-on:click="is_checked = true">
      <input type="button" v-on:click="next()" value="次へ">
    </div>
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
      answers: [],
      quiz: null,
      teams: null,
      is_checked: false
    }
  },
  methods: {
      async getCurrentQuiz() {
          this.quiz = (await axios.get("http://lit-king.mizucoffee.com/quiz/current")).data;
          console.log(this.quiz );
      },
      async getTeams() {
        this.answers = (await axios.get("http://lit-king.mizucoffee.com/answer")).data;
        console.log(this.teams);
      },
      check() {
        this.is_checked = true;
      },
      async next() {
        // (await axios.post("http://lit-king.mizucoffee.com/quiz/current"));
        this.$router.push("/display/storack_out");
      },
      getChoiceId(choices) {
        var max = 0;
        var max_id = 0;
        choices.forEach(choice => {
          if (choice.count > max) {
            max_id = choice.id;
            max = choice.count;
          }
        });
        return max_id;
      },
      getChoiceText(choices) {
        var index = this.getChoiceId(choices);
        return this.quiz.choices[index].text;
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