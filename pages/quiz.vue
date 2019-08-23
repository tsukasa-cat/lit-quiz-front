<template>
<div v-if="this.quiz">
    <p>Q1. {{this.quiz.description}}</p> 
    <ul>
        <li v-for="choice in this.quiz.choices">
            <input v-bind:value="choice.name" v-on:click="selectQuiz(choice)">
        </li>
    </ul> 
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
          this.quiz = (await axios.get("https://e01b0f377f24.vps.mizucoffee.net/quiz/current")).data;
          console.log(this.quiz);
      },
      selectQuiz(choise) {
          this.$router.push("/wating_nino");
      }
  },
  created() {

  },
  mounted() {
      this.getCurrentQuiz();
  }
}
</script>