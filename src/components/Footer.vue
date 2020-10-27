<template lang="pug">
    Footer.layout-footer-center
      .left 
        .teaminformation
          //- icon.membericon(type='md-contact',size="28")
          //- ul.team 開發人員
          //- icon.membericon(type='md-contact',size="28")
      .right
          ul.team
            li.member 蕭雲洋           
            li.member 曾子銘      
            li.member 陳承祐        
            li.member 劉佩穎            
          ul.emaillist
            .email  devil871018@gmail.com
            .email  kltony9898@gmail.com
            .email  d871212603@gmail.com
            .email  a685288@gmail.com
</template>
<script>
export default {
//   name: "Footer",
//   data() {
//     return {

//     };
//   },
//   methods: {
//   }
};
</script>
<style lang='scss' scoped>
// .layout{
//     border: 1px solid #d7dde4;
//     background: #f5f7f9;
//     position: relative;
//     border-radius: 4px;
//     overflow: hidden;
// }
.layout-footer-center{
    height: 20%;
    text-align: center;
    padding: 50px 200px 50px 200px;
    // background-color: aqua;
}
.left{
    float: left;
    height: 20%;
    width: 50%;
}
.right{
    float: right;
    height: 20%;
    width: 50%;
}
.team{

    list-style-type:none;
    float: left;
    font-size: 20px;
    font-weight:bolder;
    text-align: left;
    .member{  
        text-align: left;
        font-size: 14px;
        font-weight: bold;
    }
}
.membericon{
    float: left;
    border: 10px;
}
.emaillist{
    float: right;
    text-align: left;
}
</style>