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
import { postSignIn } from "@/apis/member.js";
import firebase from "firebase/app";
import logo from "../../assets/logo.png";
import googleBtn from "../../assets/googleSignIn.png";

import "firebase";
export default {
  name: "SignIn",
  data() {
    return {
      logo,
      googleBtn
    };
  },
  mounted() {
    localStorage.clear();
  },
  methods: {
    googleSignin() {
      var provider = new firebase.auth.GoogleAuthProvider();
      localStorage.removeItem("accessToken");
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
                localStorage.setItem("accessToken", res.data.data.accessToken);
              });
            })
            .catch(function(error) {});
        })
        .then(() => {
          this.$router.push("dashboard");
        })
        .catch(error => {
          console.log("error.code:" + error.code);
          console.log("error.message:" + error.message);
          console.log("error.email:" + error.email);
          console.log("error.credential:" + error.credential);
        });
    }
  }
};
</script>

<template lang="pug">
.SignIn
  h1 學海無涯
  img.logo(:src="logo") 
  br
  Button(@click.native="googleSignin()")
    img(:src='googleBtn')
</template>

<style lang='scss' scoped>
.SignIn {
  min-height: 400px;
  align-items: center;
  justify-content: center;
  .logo{
    height: 100px;
  }
  button{
    height: 0px;
    width: 0px;
    border: 0px;
    img{
      height: 50px;
    }
  }
  
}
</style>
