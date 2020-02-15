<template>
 <el-tabs class="walk" v-model="activeName" style="height: 100%;" stretch>
   <el-tab-pane style="height: 100%;" label="走路" name="walk">
     <div class="walkbg">

     </div>
     <div style="padding: 0.625rem;">
       <div style="float: left;font-size: 1.25rem;font-weight: 700;">
        今日数据
       </div>
       <div style="float: right;font-size: 0.9375rem;font-weight: 100;">
         附近的人>
       </div>
     </div>
   </el-tab-pane>
   <el-tab-pane label="跑步" name="run">
     <div class="walkbg">
       跑步
     </div>
   </el-tab-pane>
 </el-tabs>
</template>

<script>
    export default {
        name: "walk",
        methods:{
        },
        data() {
          return {
            activeName: 'walk'
          };
        }
    }
</script>

<style>
.walk .el-tabs__header{
  margin: 0;
}
.walk .el-tabs__nav-wrap{
  background-color:#193473 ;
}
.walk .el-tabs__nav-wrap::after{
  content: none;
}
.walk .el-tabs__nav-scroll{
  padding-left: 30%;
  padding-right: 30%;
}
.walk .el-tabs__active-bar{
  background-color: white;
}
.walk .el-tabs__item{
  color: darkgray;
}
.walk .el-tabs__item:hover{
  color: white;
}
.walk .el-tabs__item.is-active{
  color: white;
}
.walk .el-tabs__content{
  height: 80%;
}
.walk .el-tab-pane{
  height: 100%;
}
.walk .walkbg{
  height: 40%;
  background-image: linear-gradient(#193473, #17496b);
  background-color: ;
}
</style>
