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
            {"name": "a", "display_name": "A", password: "we_love_aldy"},
            {"name": "b", "display_name": "B", password: "we_love_aldy"},
            {"name": "c", "display_name": "C", password: "we_love_aldy"},
            {"name": "d", "display_name": "D", password: "we_love_aldy"},
            {"name": "e", "display_name": "E", password: "we_love_aldy"},
            {"name": "f", "display_name": "F", password: "we_love_aldy"},
            {"name": "g", "display_name": "G", password: "we_love_aldy"},
            {"name": "h", "display_name": "H", password: "we_love_aldy"},
            {"name": "i", "display_name": "I", password: "we_love_aldy"},
            {"name": "j", "display_name": "J", password: "we_love_aldy"},
            {"name": "k", "display_name": "K", password: "we_love_aldy"},
            {"name": "l", "display_name": "L", password: "we_love_aldy"},
            {"name": "m", "display_name": "M", password: "we_love_aldy"},
            {"name": "n", "display_name": "N", password: "we_love_aldy"},
            {"name": "p", "display_name": "P", password: "we_love_aldy"},
            {"name": "q", "display_name": "Q", password: "we_love_aldy"},
            {"name": "r", "display_name": "R", password: "we_love_aldy"},
            {"name": "s", "display_name": "S", password: "we_love_aldy"},
            {"name": "t", "display_name": "T", password: "we_love_aldy"},
            {"name": "u", "display_name": "U", password: "we_love_aldy"},
            {"name": "v", "display_name": "V", password: "we_love_aldy"},
            {"name": "W", "display_name": "W", password: "we_love_aldy"},
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