<style>
    export default {
        head () {
            return {
                script:;

                    {
                    src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
                }

                ;
                link:;

                    {
                    rel: ;
                    'stylesheet'href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
                }


            }
        }
    }

    body {
        background-color: #f2f2f2;
        position: relative;
        height: 100vh;
        box-sizing: border-box;
    }
    .box{
        text-align: center;
    }

    
    .logoImage{
        background-image: url("~../assets/LitKingLogo.png");
        -webkit-background-size: contain;
        background-size: contain;
        height: 45vw;
        width: 80vw;
        object-fit: contain;
        margin: 0 auto;
        margin-top: 20vh;
        margin-bottom: 10vh;
    }

    .teamSelect {
        border: 1px solid #f2f2f2;
        width: 60vw;
        height: 10vw;
        font-size: 4vw;
        margin-bottom: 1vh;
    }

    .passwordInput {
        border: 1px solid #f2f2f2;
        width: 60vw;
        height: 10vw;
        font-size: 24px;
        margin-top: 0;
        margin-bottom: 10vh;
        font-size: 4vw;
    }

    .loginButton {
        width: 60vw;
        height: 20vw;
        background-image: url("~../assets/LoginButtonImg.png");
        -webkit-background-size: contain;
        background-size: contain;
        border: none;
    }

</style>

<template>

    <body>
           <div class="box">
            <div class="logoImage" style="{ backgroundImage: `url(${~/assets/LitKingLogo.png})` }">
<!--                <img src="~/assets/LitKingLogo.png" alt="">-->
            </div>
            <div id="form">
                <select v-model="selected_team_name" class="teamSelect">
                    <option value='' disabled selected style='display:none;'>選択してください</option>
                    <option v-for="team in teams" v-bind:value="team.name">{{team.display_name}}</option>
                </select>
                <input type="password" v-model="password" name="password" placeholder='Password' class="passwordInput">
                <input type="button" v-on:click="login()" value="" class="loginButton">
            </div>
            </div>
    </body>
</template>
<script>
    import Vuex from 'vuex'
    import Cookie from 'cookie-universal-nuxt'
    export default {
        head: {
            titleTemplate: '%s - Nuxt.js',
            meta: [{
                    charset: 'utf-8'
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1'
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Meta description'
                }
            ]
        },
        data() {
            return {
                password: "",
                selected_team_name: "",
                selected_team: {},
                teams: [{
                        "name": "a",
                        "display_name": "A",
                        password: "we_love_aldy"
                    },
                    {
                        "name": "b",
                        "display_name": "B",
                        password: "we_love_aldy"
                    },
                    {
                        "name": "c",
                        "display_name": "C",
                        password: "we_love_aldy"
                    },
                    {
                        "name": "d",
                        "display_name": "D",
                        password: "we_love_aldy"
                    },
                    {
                        "name": "e",
                        "display_name": "E",
                        password: "we_love_aldy"
                    },
                    {
                        "name": "f",
                        "display_name": "F",
                        password: "we_love_aldy"
                    },
                    {
                        "name": "g",
                        "display_name": "G",
                        password: "we_love_aldy"
                    },
                    {
                        "name": "h",
                        "display_name": "H",
                        password: "we_love_aldy"
                    },
                    {
                        "name": "i",
                        "display_name": "I",
                        password: "we_love_aldy"
                    },
                    {
                        "name": "j",
                        "display_name": "J",
                        password: "we_love_aldy"
                    },
                    {
                        "name": "k",
                        "display_name": "K",
                        password: "we_love_aldy"
                    },
                    {
                        "name": "l",
                        "display_name": "L",
                        password: "we_love_aldy"
                    },
                    {
                        "name": "m",
                        "display_name": "M",
                        password: "we_love_aldy"
                    },
                    {
                        "name": "n",
                        "display_name": "N",
                        password: "we_love_aldy"
                    },
                    {
                        "name": "p",
                        "display_name": "P",
                        password: "we_love_aldy"
                    },
                    {
                        "name": "q",
                        "display_name": "Q",
                        password: "we_love_aldy"
                    },
                    {
                        "name": "r",
                        "display_name": "R",
                        password: "we_love_aldy"
                    },
                    {
                        "name": "s",
                        "display_name": "S",
                        password: "we_love_aldy"
                    },
                    {
                        "name": "t",
                        "display_name": "T",
                        password: "we_love_aldy"
                    },
                    {
                        "name": "u",
                        "display_name": "U",
                        password: "we_love_aldy"
                    },
                    {
                        "name": "v",
                        "display_name": "V",
                        password: "we_love_aldy"
                    },
                    {
                        "name": "W",
                        "display_name": "W",
                        password: "we_love_aldy"
                    },
                ],
            }
        },
        methods: {
            async login() {
                Cookie.set('team_name', this.selected_team_name, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                });
                try {
                    await this.$store.dispatch("login", {
                        team_name: this.selected_team_name,
                        password: this.password
                    })
                    this.$router.push("/")
                } catch (e) {
                    this.error = e.message
                }
            }
        }
    }

</script>
