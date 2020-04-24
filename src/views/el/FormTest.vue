<template>
  <div>
    <!--表单 ref命名表单，label-width指定内部标签宽度， @submit.native.prevent禁止回车提交或submit按钮提交-->
    <el-form ref="form" v-model="param" label-width="80px" size="small" @submit.native.prevent>
      <!--required可以显示红色*-->
      <el-form-item :label="$tc('formTest.label1')" :required="true">
        <el-input style="width: 150px" v-model="param.a" :placeholder="$tc('common.inputDefaultMsg')"/>
      </el-form-item>

      <el-form-item label="选择框B">
        <el-select v-model="param.b" placeholder="请选择" value="" @change="changeSelectB">
          <el-option v-for="(item, i) in param.bs" :key="i" :label="item.t" :value="item.v"/>
        </el-select>
      </el-form-item>

      <el-form-item label="时间控件C">
        <!--type=datetime时，可以同时日期时间-->
        <el-date-picker type="date" placeholder="请选择日期" v-model="param.c1" style="width: 150px"/>
        <el-time-picker placeholder="请选择时间" v-model="param.c2" style="width: 150px"/>
      </el-form-item>

      <el-form-item label="开关D">
        <el-switch v-model="param.d" @change="changeSwitch"/>
      </el-form-item>

      <el-form-item label="复选框E">
        <el-checkbox-group v-model="param.e" style="display: inline-block">
          <el-checkbox v-for="(item, i) in param.es" :key="i" :label="item" @change="changeCheckbox"/>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="单选框F">
        <el-radio-group v-model="param.f" style="display: inline-block">
          <el-radio v-for="(item, i) in param.fs" :key="i" :label="item" @change="changeRadio"/>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="文本域G">
        <!--el的文本域好像不能拖宽-->
        <el-input type="textarea" v-model="param.g" style="width: 200px"/>
      </el-form-item>

      <el-form-item label="按钮">
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>

      <el-form-item label="组件单项详细测试">
        <el-link href="/input" target="_self" type="success">文本框</el-link>
        <el-link href="/radio" target="_self">单选框</el-link>
        <el-link href="/checkbox" target="_self" type="primary">复选框</el-link>
        <el-link href="/antv" target="_self" type="primary">阿里脑图</el-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'FormTest',
  data () {
    return {
      param: {
        a: '',
        bs: [
          {
            t: 'aaa',
            v: '1'
          },
          {
            t: 'bbb',
            v: '2'
          }
        ],
        b: '',
        c1: '',
        c2: '',
        d: false,
        es: [
          'aaa',
          'bbb',
          'ccc'
        ],
        e: [],
        fs: ['aaa', 'bbb', 'ccc'],
        f: [],
        g: ''
      }
    }
  },
  mounted () {
    this.init()
  },

  methods: {
    async init () {
      this.param.a = '这是初始化的值'
    },
    changeSelectB (v) {
      console.log('下拉选B的值=' + v)
      console.log('下拉选B的值=' + this.param.b)
      const find = this.param.bs.find(item => item.v === v)
      if (find) {
        console.log('下拉选B的文本=' + find.t)
      }
    },
    changeSwitch (v) {
      console.log('开关的值=' + v)
      console.log('开关的值=' + this.param.d)
    },
    changeCheckbox (checked) {
      console.log(checked)
      console.log(this.param.e)
    },
    changeRadio (v) {
      console.log(v)
      console.log(this.param.f)
    },
    submit () {
      this.$message({
        message: '提交成功了',
        type: 'success'
      })
    },
    cancel () {
      this.$message.error('报错了')
    }
  }
}
</script>

<style scoped>
</style>
