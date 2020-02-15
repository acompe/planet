<template>
<div class="user-info">
    <el-row>
        <el-col :span="6">
            <div class="demo-basic--circle">
                <div class="block">
                    <el-avatar :size="60" :src="url"></el-avatar>
                </div>
            </div>
        </el-col>
        <el-col :span="18">
          <div class="user-name">
                {{user.name}}
          </div>
          <div class="user-invocation">
            邀请码:{{user.invitation}}
            <el-tag type="info" size="mini">复制</el-tag>
          </div>
        </el-col>
    </el-row>

    <div class="user-gold">
       <el-card shadow="never">
         <el-row>
            <el-col :span="10">
              <div class="user-gold-mount">
                {{user.gold}}
              </div>
              <div class="user-gold-description">
                当前金币
              </div>
            </el-col>
            <el-col :span="4">
                <el-divider direction="vertical"></el-divider>
            </el-col>
            <el-col :span="10">
              <div class="user-gold-mount">
                {{user.rush}}
              </div>
              <div class="user-gold-description">
                金额(元)
              </div>
            </el-col>
        </el-row>
      </el-card>
    </div>
</div>
</template>

<script>
  export default{
    name:'info',
    props:['user']
  }
</script>

<style>
 .user-info .el-divider--vertical{
    height: 2em;
    position: relative;
    top:0.3125rem
  }
  .user-info{
    padding-top: 1.25rem;
  }
  .user-name{
    margin-top: 0.5rem;
    text-align: left;
    font-size: 1.25rem;
  }
  .user-invocation{
    text-align: left;
    font-size: 0.8125rem;
    font-weight: 100;
  }
  .user-gold{
    margin: 1.25rem;
  }
  .user-gold-mount{
    font-size: 1.25rem;
  }
  .user-gold-description{
    font-size: 0.75rem;
    font-weight: 100;
  }
</style>
