<script>
// 我的課程左邊
import photo from '@/assets/photo.jpg';
export default {
  name: "myinfo",
  data() {
    return {
      photo,
      my: {
        name: "王小明",
        email: "aaa@gmail.com"
      }
    };
  }
};
</script>
<template lang="pug">
Card
  img(:src='photo')
  h2 {{my.name}}
  Icon(type="ios-people")
  | 信箱： {{my.email}}
</template>
<style lang="scss" scoped>
img{
  height: 100%;
  width: 100%;
	border-radius: 50%;
}
</style>