<template lang="pug">
.SignIn
  .logo
    img(:src="logo")
    h1 學海無涯
    .content
      p 想要遠端教學嗎？
      p 想要整理學校的所有課程嗎？
      p 想要提升自主學習的能力嗎？
      p 學海無涯 讓你的上課不再單調
    Card.login(dis-hover)
      h3(slot="title") 登入方式
      .googleSignin
        Button(
          size="large",
          icon="logo-google",
          @click.native="googleSignin()"
        ) google
  .area
    ul.circles
      li 
      li 
      li 
      li 
      li 
      li 
      li 
      li
      li 
      li
</template>
<script>
// Firebase
let firebaseConfig = {
  apiKey: "AIzaSyA3X54KKQ_f_QS9PwHdk3gO7N-aQfM6wSg",
  authDomain: "e-learning-4550b.firebaseapp.com",
  databaseURL: "https://e-learning-4550b.firebaseio.com",
  projectId: "e-learning-4550b",
  storageBucket: "e-learning-4550b.appspot.com",
  messagingSenderId: "458064779443",
  appId: "1:458064779443:web:4f2a9cb4881b54f01df8c6",
  measurementId: "G-HMC7V2W4V3",
};
// 初始化 Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
import { postSignIn } from "@/apis/member.js";
import firebase from "firebase/app";
import logo from "../../assets/logo.png";
import googleBtn from "../../assets/googleSignIn.png";
import "firebase";
let provider = new firebase.auth.GoogleAuthProvider();
export default {
  name: "SignIn",
  data() {
    return {
      logo,
      googleBtn,
    };
  },
  mounted() {
    localStorage.clear();
  },
  methods: {
    async googleSignin() {
      await localStorage.removeItem("studentToken");
      try {
        await firebase.auth().signInWithPopup(provider);
        let idToken = await firebase.auth().currentUser.getIdToken(true);
        let res = await postSignIn({ token: idToken });
        if (res.data.status.code === 0) {
          localStorage.setItem("studentToken", res.data.data.accessToken);
          this.$router.push("dashboard");
        }
      } catch (err) {
        this.$Message.error("登入失敗");
        console.log(err);
      }
    },
  },
};
</script>
<style lang='scss' scoped>
.SignIn {
  height: 100%;
  width: 100%;
  justify-items: center;
  position: relative;
  .logo {
    z-index: 0;
    display: flex;
    flex-direction: column;
    color: #0c4a60;
    font-size: 35px;
    img {
      width: 200px;
      margin: 0 auto;
      max-height: 200px;
    }
    .content {
      font-size: 20px;
    }
    .login {
      margin: 10px auto;
      width: 20%;
      .googleSignin {
        margin: 5px;
      }
    }
  }
}

@import url("https://fonts.googleapis.com/css?family=Exo:400,700");
// * {
//   margin: 0px;
//   padding: 0px;
// }
// body {
//   font-family: "Exo", sans-serif;
// }
.area {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  // background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  background-color: #abdff1;

  width: 100%;
  height: 100vh;
}
.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.4);
  animation: animate 25s linear infinite;
  bottom: -150px;
}
.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}
.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}
.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}
.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}
.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}
.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}
.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}
.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}
.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}
.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}
@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }
  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>
