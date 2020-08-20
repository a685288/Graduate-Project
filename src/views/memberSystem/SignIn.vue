<script src="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-analytics.js"></script>
<script>
// Firebase
var firebaseConfig = {
  apiKey: "AIzaSyA3X54KKQ_f_QS9PwHdk3gO7N-aQfM6wSg",
  authDomain: "e-learning-4550b.firebaseapp.com",
  databaseURL: "https://e-learning-4550b.firebaseio.com",
  projectId: "e-learning-4550b",
  storageBucket: "e-learning-4550b.appspot.com",
  messagingSenderId: "458064779443",
  appId: "1:458064779443:web:4f2a9cb4881b54f01df8c6",
  measurementId: "G-HMC7V2W4V3"
};
// 初始化 Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
import { postSignIn } from "@/apis/signin.js";
import firebase from "firebase/app";
import "firebase";
export default {
  name: "SignIn",
  methods: {
    check() {
      this.$router.push("dashboard");
    },
    googleSignin() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(res) {
          firebase
            .auth()
            .currentUser.getIdToken(true)
            .then(function(idToken) {
              // api
              postSignIn({
                token: idToken
              }).then(res => {
                localStorage.clear();
                let uid = res.data.data.id;
                let accessToken = res.data.data.accessToken;
                localStorage.uid = uid;
                localStorage.accessToken = accessToken;
              });
            })
            .catch(function(error) {});
        })
        .catch(error => {
          console.log("error.code:" + error.code);
          console.log("error.message:" + error.message);
          console.log("error.email:" + error.email);
          console.log("error.credential:" + error.credential);
        })
        .then(() => {
          this.$router.push("dashboard");
        });
    },
    // 目前未用到
    realname() {
      this.$Modal.confirm({
        render: h => {
          return h("Input", {
            props: {
              value: this.value,
              autofocus: true,
              placeholder: "Please enter your name..."
            },
            on: {
              input: val => {
                this.value = this.userData.name;
              }
            }
          });
        }
      });
    }
  }
};
</script>

<template lang="pug">
.SignIn
  Card.SignCard
    #firebaseui-auth-container
      Button(@click.native="googleSignin()") Google 登入
      Button( @click.native="check()" type='primary') 直接進入網站
</template>

<style lang='scss' scoped>
.SignIn {
  min-height: 400px;
  align-items: center;
  display: flex;
  justify-content: center;
  .SignCard {
    margin: 50px;
    padding: 50px;
    position: relative;
    // max-width: 500px;
    min-width: 500px;
    button {
      margin: 10px;
    }
  }
}
</style>
