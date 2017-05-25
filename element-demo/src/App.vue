<template>
  <div id="app">
<el-button type="primary" icon="search">主要按钮</el-button>
<el-button type="danger"  class="el-icon-edit">主要按钮</el-button>
<el-row>
    <el-col :span="12">
          <div class="my-grid ">
            
          </div>
    </el-col>
    <el-col :span="12">
        <div class="my-grid">
          <Date></Date>
        </div>
    </el-col>
</el-row>
    <el-col :span="8">
        <div class="my-grid">
         
        </div>
    </el-col>
     <el-col :span="8">
        <div class="my-grid">
           
        </div>
     </el-col>
     <el-col :span="8">
        <div class="my-grid">
          
        </div>
     </el-col>
<el-row>
  
</el-row>
  </div>
</template>

<script>
import Date from './components/Date.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Date
  }
}
</script>

<style scoped lang="less">
@color:blue;
.height(@h){
  height:@h;
}
.my-grid{
  border: 1px solid @color;
  .height(50px);
}
</style>
