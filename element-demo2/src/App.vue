<template>
  <div id="app">
    <el-button @click="get">普通按钮</el-button>
     <div>
      {{myMessage}}
    </div>
    <hr/>
    <el-button type="primary">普通按钮</el-button>
    <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
    <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions0">
    </el-date-picker>
    <myButton @click.native="get"></myButton>
   
  </div>
</template>

<script>
import myButton from './components/Button.vue'
import axios from 'axios'
export default {
  components:{
    myButton
  },
  name: 'app',
  data () {
    return {
      myMessage:'默认数据',
      msg: 'Welcome to Your Vue.js App',
      radio:'1',
      value1:''
    }
  },
  methods:{
    get(){
     axios.get('a.txt')
     .then(function(res){
         this.myMessage=res.data;

     }.bind(this)).catch(function(err){
      console.log(err);
     })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
