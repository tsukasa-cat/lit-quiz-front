<template>
<div v-if="this.quiz">
    <p>Q1. {{this.quiz.description}}</p> 
    <ul>
        <li v-for="choise in this.quiz.choices">
            <p>{{choise.text}}</p>
            <input v-bind:value="choise.name" v-on:click="selectQuiz(choise.name)">
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