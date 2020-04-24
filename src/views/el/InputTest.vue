<template>
  <div style="margin-left: 20px">
    <el-row :gutter="20">
      <!--普通输入框-->
      <el-col :span="6">
        <el-input v-model="text1" size="small" placeholder="请输入内容"/>
      </el-col>
      <!--只读和禁用输入框-->
      <el-col :span="6">
        <el-input v-model="text1" size="small" placeholder="请输入内容" readonly/>
      </el-col>
      <el-col :span="6">
        <el-input v-model="text1" size="small" placeholder="请输入内容" disabled/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <!--带清空的输入框-->
      <el-col :span="6">
        <el-input v-model="text1" size="small" placeholder="请输入内容" clearable/>
      </el-col>
      <!--密码输入框-->
      <el-col :span="6">
        <el-input v-model="text1" size="small" placeholder="请输入内容" show-password/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <!--带图标的输入框（属性）-->
      <el-col :span="6">
        <el-input v-model="text1" size="small" placeholder="请输入内容" suffix-icon="el-icon-date"/>
      </el-col>
      <el-col :span="6">
        <el-input v-model="text1" size="small" placeholder="请输入内容" prefix-icon="el-icon-search"/>
      </el-col>
      <!--带图标的输入框（slot）-->
      <el-col :span="6">
        <el-input v-model="text1" size="small" placeholder="请输入内容"><i slot="suffix" class="el-input__icon el-icon-date"/></el-input>
      </el-col>
      <el-col :span="6">
        <el-input v-model="text1" size="small" placeholder="请输入内容"><i slot="prefix" class="el-input__icon el-icon-search"/></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <!--文本输入域-->
      <el-col :span="12">
        <el-input type="textarea" v-model="text1" size="small" placeholder="请输入内容"/>
      </el-col>
      <!--文本输入域（自适应高度）-->
      <el-col :span="6">
        <el-input type="textarea" autosize v-model="text1" size="small" placeholder="请输入内容"/>
      </el-col>
      <el-col :span="6">
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model="text1" size="small" placeholder="请输入内容"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <!--复合文本输入框-->
      <el-col :span="6">
        <el-input v-model="text1" size="small" placeholder="请输入内容">
          <template slot="prepend">Http://</template>
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-input v-model="text1" size="small" placeholder="请输入内容">
          <template slot="append">.com</template>
        </el-input>
      </el-col>
      <el-col :span="12">
        <el-input v-model="text1" placeholder="请输入内容" class="input-with-select">
          <el-select v-model="select1" slot="prepend" placeholder="请选择">
            <el-option label="选项1" value="1"/>
            <el-option label="选项2" value="2"/>
            <el-option label="选项3" value="3"/>
          </el-select>
          <el-button slot="append" icon="el-icon-search"/>
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'InputTest',
    data() {
      return {
        text1: '',
        select1: ''
      }
    }
  }
</script>

<style scoped>

</style>
