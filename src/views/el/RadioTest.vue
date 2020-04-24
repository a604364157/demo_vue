<template>
  <div>
    <el-row>
      <!--普通的单选框-->
      <el-radio style="margin-left: 20px" v-model="radio" label="1" @change="changeRadio">备选项</el-radio>
      <el-radio v-model="radio" label="2" @change="changeRadio">备选项</el-radio>
    </el-row>
    <el-row>
      <!--禁用状态的单选框-->
      <el-radio style="margin-left: 20px" disabled v-model="radio2" label="1">备选项</el-radio>
      <el-radio v-model="radio2" disabled label="2">备选项</el-radio>
    </el-row>
    <el-row>
      <!--单选框组-->
      <el-radio-group v-model="radio3" @change="changeRadio">
        <el-radio label="1">备选项</el-radio>
        <el-radio label="2">备选项</el-radio>
        <el-radio label="3">备选项</el-radio>
      </el-radio-group>
    </el-row>
    <el-row>
      <!--按钮样式单选框-->
      <el-radio-group v-model="radio4" size="mini" @change="changeRadio">
        <el-radio-button label="1">备选项</el-radio-button>
        <el-radio-button label="2">备选项</el-radio-button>
        <el-radio-button label="3">备选项</el-radio-button>
      </el-radio-group>
    </el-row>
    <!--边框样式单选框-->
    <el-radio-group v-model="radio5" size="mini" @change="changeRadio">
      <el-radio label="1" border>备选项</el-radio>
      <el-radio label="2" border>备选项</el-radio>
      <el-radio label="3" border>备选项</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
  export default {
    name: 'RadioTest',
    data () {
      return {
        radio: '',
        radio2: '1',
        radio3: '1',
        radio4: '1',
        radio5: '1',
      }
    },
    methods: {
      changeRadio (v) {
        console.log(v)
      }
    }
  }
</script>

<style scoped>

</style>
