<script>
// 我的課程左邊
import photo from "@/assets/photo.jpg";
export default {
  name: "myinfo",
  props: {
    user: {
      name: String,
      email: String
    }
  },
  data() {
    return {
      photo,
      
    };
  }
};
</script>
<template lang="pug">
  Card
    img(:src='photo')
    h2 {{user.name}}
    Icon(type="ios-people")
    | 信箱： {{user.email}}
</template>
<style lang="scss" scoped>
img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
</style>