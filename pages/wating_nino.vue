<style>
    body {
        background-color: #fff;
        position: relative;
        height: 100vh;
        box-sizing: border-box;
    }

    .logoImage {
        background-image: url("~../assets/LitKingLogo.png");
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
    }

    input {
        width: 30vw;
        height: 30vw;
        background-image: url("~../assets/ChoiceBG.png");
        -webkit-background-size: contain;
        background-size: contain;
        border: none;
        background-color: transparent;
        margin: 5vw;
        color: white;
        text-align: center;
        font-size: 10vw;
    }
    img{
        width: 60vw;
        margin-top: 10vh;
    }
    .box{
        text-align: center;
    }

</style>
<template>
    <div class="box">
        <div class="logoImage" style="{ backgroundImage: `url(${~/assets/LitKingLogo.png})` }"></div>
        <img src="~../assets/waiting.png" alt="">
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
    }
  },
  methods: {
    
  }
}
</script>