import Cookie from 'cookie-universal-nuxt'
export default {
    async login({ commit }, { team_name, password }) {
      console.log(commit)
      try {
        // ここでは仮に
        // メールアドレス： test@email
        // パスワード： 123456789
        // が登録されてある状態を想定しています。
        let teams = [
            {"name": "a", "display_name": "A", password: "meimei"},
            {"name": "b", "display_name": "B", password: "nino"},
            {"name": "c", "display_name": "C", password: "fumicchi"},
            {"name": "d", "display_name": "D", password: "zume-rieshi"},
            {"name": "e", "display_name": "E", password: "picchi"},
            {"name": "f", "display_name": "F", password: "godiva"},
            {"name": "g", "display_name": "G", password: "kosu"},
            {"name": "h", "display_name": "H", password: "nakatomo"},
            {"name": "i", "display_name": "I", password: "shumai"},
            {"name": "j", "display_name": "J", password: "kaku"},
            {"name": "k", "display_name": "K", password: "yunochan"},
            {"name": "l", "display_name": "L", password: "gorori-makkan"},
            {"name": "m", "display_name": "M", password: "mizu"},
            {"name": "n", "display_name": "N", password: "aldy"},
            {"name": "o", "display_name": "O", password: "harami"},
            {"name": "p", "display_name": "P", password: "i-ji-"},
            {"name": "q", "display_name": "Q", password: "se-na-mu-n"},
            {"name": "r", "display_name": "R", password: "rikako"},
            {"name": "s", "display_name": "S", password: "apple"},
            {"name": "t", "display_name": "T", password: "gaito"},
            {"name": "u", "display_name": "U", password: "chu-toro"},
            {"name": "v", "display_name": "V", password: "hazuki"},
            {"name": "w", "display_name": "W", password: "rihoppe"},
        ];
        let selected_team = teams.filter(team => team.name == team_name)[0];
        if (selected_team["password"] != password) {
            throw new Error("error!!!")
        } 

        // 入力したメールアドレスとパスワードが
        // すでに登録されているメールアドレスとパスワードと一致した場合、変数dataに入力値が渡されます。
        let data = selected_team;
        document.cookie = 'team_name='+team_name+'; path=/';
        // Cookie.set('team_name', team_name, {
        //   path: '/',
        //   maxAge: 60 * 60 * 24 * 7
        // });
        // 変数dataのを次のmutations.jsにあるAUTHED_USERメソッドに渡します。
        commit("AUTHED_USER", data)
      } catch (e) {
        throw e
      }
    }
  }