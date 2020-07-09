<script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-analytics.js"></script>
<script>
</script>
<script>
import firebase from "../../../firebase.js";
// import { postData } from '@/apis/course.js';
export default {
  name: "SignIn",
  data() {
    return {
      //   formDate: {
      //     account: "",
      //     password: ""
      //   },
      rules: {}
    };
  },
  methods: {
    check: function() {
      this.$router.push("dashboard");
    },
    googlesignin() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // 可以獲得 Google 提供 token，token可透過 Google API 獲得其他數據
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log("sign1");
          this.googlesignin2(user);
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
        });
    },
    googlesignin2(user) {
      console.log("sign2");
      // 獲取用戶訊息
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          console.log("email" + email);
        } else { 
        }
      });
      console.log("roruter");
      this.realname();
    },
    realname() {
      var person = prompt("請輸入您的真實姓名：", "");
      if (person !== null || person !== "") {
        console.log("push");
        this.$router.push("dashboard");
      }
    }
    //     axios
    //         .get('https://jsonplaceholder.typicode.com/posts')
    //         .then((res) => {
    //             this.posts = res.data;
    //         })

    //     getDatta().then((res) => {
    //         this.posts = res.data;
    //     })

    //     postData({
    //         title: 'foo',
    //         userId: 1,
    //         body: 'bar'
    //     }).then(res => {
    //         this.posts = res.data;
    //     });
  }
};
</script>

<template lang="pug">
    .SignIn
        Card.SignCard
            #firebaseui-auth-container
            #loader(v-if="")
            Button.btns(@click="googlesignin") Google 登入
            Button.btns( @click="realname()") Google 註冊
            Button.btns(type='primary' @click="check()") Submit

            //- Form(ref='formData' :model="formData")
            //-     FormItem(label='account' prop='account')
            //-         Input(type='text' v-model='account' placeholder='account')
            //-     FormItem(label='password' prop='password')
            //-         Input(type='password' v-model='password' placeholder='password')
            //-     FormItem
            //-         Button.btns(type='primary' @click="check()") Submit
            //-         Button.btns(type='' @click="") Sign up
</template>

<style lang='scss' scoped>
.SignIn {
  min-height: 400px;
  align-items: center;
  display: flex;
  justify-content: center;
}
.SignCard {
  margin: 50px;
  padding: 50px;
  position: relative;
  // max-width: 500px;
  min-width: 500px;
}
.btns {
  margin: 10px;
}
</style>
