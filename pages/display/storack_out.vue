<template>
<div>
    <ul>
        <li v-for="(hiragana, index) in this.hiraganas">
            {{hiragana}}
        </li>
    </ul> 
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
      hiraganas: ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た"]
    }
  },
  methods: {
      async getCurrentQuiz() {
          this.quiz = (await axios.get("https://e01b0f377f24.vps.mizucoffee.net/quiz/current")).data;
      },
      async getTeams() {
        // this.teams = (await axios.get("https://e01b0f377f24.vps.mizucoffee.net/team/list")).data;
        this.teams = [
          {name: "A", choise: "ちょこ"},
          {name: "A", choise: "ちょこ"},
          {name: "A", choise: "ちょこ"},
          {name: "A", choise: "ちょこ"},
          {name: "A", choise: "ちょこ"}
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