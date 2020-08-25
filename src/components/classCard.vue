<script>
export default {};
</script>
<template lang="pug">
  //- Col
  //-   router-link(v-if='first<=item.sectionNum&&item.sectionNum<=last' :to="{path: 'course/' + item.classId }" )
  //-         Card.card
  //-           .img
  //-             img(v-if='item.img != "" ' :src="item.img" )
  //-             img(v-else :src="defaultClass") 
  //-           .title {{item.topic}}
  //-           .topics
  //-             img(:src='topic')
  //-             |主題：{{item.sectionNum}}
  //-           .teacher
  //-             img(:src='teacher') 
  //-             |授課老師：{{item.teacherName}} 老師
  //-           hr
  //-           .content {{item.intro}}
</template>
<style lang="scss" scoped>
</style>