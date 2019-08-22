<template>
<div v-if="this.quiz">
    <p>Q1. {{this.quiz.description}}</p> 
    <ul>
        <li v-for="choise in this.quiz.choises">
            <input v-bind:value="choise" v-on:click="selectQuiz(choise)">
        </li>
    </ul> 
</div>
<div v-else>
    aaa
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
      quiz: null,
      answers: []
    }
  },
  methods: {
      getCurrentQuiz() {
          this.quiz = {choises: ["a", "b", "c", "d"], image: "", description: "まんげまんげ", answer: 2};
      },
      getAnswers() {
        this.answers = [];
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