<template>
  <div class="rule">
    <el-row>
      <el-col :span="23">
        <i :class="rule.ioc" class="rule-ico" :style="{color: rule.color}"></i>
        <span class="rule-font">{{rule.rulename}}</span>
      </el-col>
      <el-col :span="1">
        <i class="el-icon-arrow-right" style="color: #A9A9A9;"></i>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name:'rule',
    props:['rule'],
  }
</script>

<style>
  .rule{
    margin: 0rem 1.5625rem;
    margin-top: 0.625rem;
    padding-bottom: 10px;
    text-align: left;
    font-size: 0.9375rem;
    border-bottom: 1px solid #f1f1f1;
  }
  .rule-ico{
    font-size: 1.5625rem;
  }
  .rule-font{
    font-size: 0.9375rem;
    padding: 0.625rem;
    position: relative;
    bottom: 0.25rem;
  }
</style>
