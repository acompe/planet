<template>
    <div>
      <info :user="user"></info>
      <rule v-for="(rule,index) in rules" :rule='rule' :key="index"></rule>
    </div>
</template>

<script>
  import rule from './user/rule.vue';
  import info from './user/info.vue'
  export default {
      name: "my",
      data () {
        return {
          url: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          rules:[
            {rulename:'邀请好友',ioc:'el-icon-bicycle',color:'red'},
            {rulename:'我的成就',ioc:'el-icon-magic-stick',color:'#EEDC82'},
            {rulename:'健康测评',ioc:'el-icon-loading',color:'#AB82FF'},
            {rulename:'步数记录',ioc:'el-icon-document-remove',color:'#98FB98'},
            {rulename:'我的客服',ioc:'el-icon-headset',color:'#FFE7BA'},
          ],
          user:{
            name: '游客身份',
            invitation: '*********',
            gold: '7000',
            rush: '0.7'
          }
        }
      },
      components:{
        rule: rule,
        info: info
      }
  }

</script>

<style scoped>

</style>
