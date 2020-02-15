<template>
    <div class="bar">
      <el-row>
        <el-col class="bar-item" :span="8">
          <router-link class="bar-tool" tag="div" to="/planet/walk">走走</router-link>
        </el-col>
        <el-col class="bar-item" :span="8">
          <router-link class="bar-tool" tag="div" to="/planet/gold">赚赚</router-link>
        </el-col>
        <el-col class="bar-item" :span="8">
          <router-link class="bar-tool" tag="div" to="/planet/my">我的</router-link>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "bar"
    }
</script>

<style>
.router-link-active{
  color: #193473;
}
.bar{
  position: fixed;
  bottom: 0px;
  height:40px;
  width: 100%;
  line-height: 40px;
}
.bar-tool{
  cursor: pointer;
}

</style>
