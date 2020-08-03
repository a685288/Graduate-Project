<script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js"></script>
<script>
import { postData } from "@/apis/signin.js";
import firebase from "firebase/app";
import "firebase";

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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
  name: "SignIn",
  data() {
    return {
      userData: {
        id: "",
        name: "qq"
      }
    };
  },
  methods: {
    check() {
      this.$router.push("dashboard");
    },
    googleSignin() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => {
          this.userData.id = String(res.credential.accessToken);
          console.log("token::" + this.userData.id);
          // var user = res.user;
        })
        .catch(error => {
          // var errorCode = error.code;
          console.log("error.code" + error.code);
          console.log("error.message" + error.message);
          console.log("error.email" + error.email);
          console.log("error.credential" + error.credential);
        });
      // this.realname();
      this.post();
    },
    // realname() {
    //   // var person = prompt("請輸入您的真實姓名：", "");
    //   // if (person !== null || person !== "") {
    //   //   this.userData.name = person;
    //     this.post();
    // }else{
    //   console.log('請輸入姓名')
    // }
    // },
    // getDatta().then((res) => {
    //   this.posts = res.data;
    // })
    // realname () {
    //   this.$Modal.confirm({
    //     render: (h) => {
    //       return h('Input', {
    //         props: {
    //           value: this.value,
    //           autofocus: true,
    //           placeholder: 'Please enter your name...'
    //         },
    //         on: {
    //           input: (val) => {
    //             this.value = this.userData.name;
    //           }
    //         }
    //       })
    //     }
    //   })
    // },
    post() {
      console.log("post()");
      console.log(this.userData.id + " ??? " + this.userData.name);
      if (this.userData.id !== null && this.userData.name !== null) {
        postData({
          token: this.userData.id,
          name: this.userData.name
        }).then(res => {
          this.posts = res.data;
          this.$router.push("dashboard");
        });
      } else {
        console.log("登入失敗");
      }
    }
  }
};
</script>

<template lang="pug">
.SignIn
  Card.SignCard
    #firebaseui-auth-container
      Button(@click.native="googleSignin()") Google 登入
      //- Button(@click.native="googleSignin()")  {{}}
      Button(type='primary' @click.native="check()") Submit
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
