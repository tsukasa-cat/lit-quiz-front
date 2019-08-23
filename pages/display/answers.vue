<template>
<div v-if="this.teams">
    <ul>
        <li v-for="team in this.teams">
            {{team.name}}
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
      quiz: null,
      teams: null
    }
  },
  methods: {
      async getCurrentQuiz() {
          this.quiz = (await axios.get("https://e01b0f377f24.vps.mizucoffee.net/quiz/current")).data;
      },
      async getTeams() {
        // this.teams = (await axios.get("https://e01b0f377f24.vps.mizucoffee.net/team/list")).data;
        this.teams = [
          {name: "A"},
          {name: "A"},
          {name: "A"},
          {name: "A"},
          {name: "A"}
        ];
        console.log(this.teams);
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