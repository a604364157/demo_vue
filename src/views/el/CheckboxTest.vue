<template>
  <div style="margin-left: 20px">
    <el-row>
      <!--普通多选框-->
      <el-checkbox v-model="box1">备选项</el-checkbox>
      <el-checkbox v-model="box2">备选项</el-checkbox>
      <el-checkbox v-model="box3" disabled>备选项</el-checkbox>
    </el-row>
    <el-row>
      <!--多选框组-->
      <el-checkbox-group v-model="boxList1">
        <el-checkbox label="a">备选项</el-checkbox>
        <el-checkbox label="b">备选项</el-checkbox>
        <el-checkbox label="c">备选项</el-checkbox>
        <el-checkbox label="d" disabled>备选项</el-checkbox>
        <el-checkbox label="e" disabled>备选项</el-checkbox>
      </el-checkbox-group>
    </el-row>
    <el-row>
      <!--带全选状态-->
      <div>
        <el-row>
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        </el-row>
        <el-row>
          <el-checkbox-group v-model="boxList2" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="(item, i) in cityList" :key="i" :label="item">{{item}}</el-checkbox>
          </el-checkbox-group>
        </el-row>
      </div>
    </el-row>
    <el-row>
      <!--最小和最大选中数-->
      <el-checkbox-group v-model="boxList3" :max="3" :min="1">
        <el-checkbox v-for="(item, i) in cityList" :key="i" :label="item">{{item}}</el-checkbox>
      </el-checkbox-group>
    </el-row>
    <el-row>
      <!--按钮样式多选框-->
      <el-checkbox-group v-model="boxList4" size="mini">
        <el-checkbox-button v-for="(item, i) in cityList" :key="i" :label="item">{{item}}</el-checkbox-button>
      </el-checkbox-group>
    </el-row>
    <el-row>
      <el-checkbox-group v-model="boxList5" size="mini">
        <el-checkbox v-for="(item, i) in cityList" :key="i" :label="item" border>{{item}}</el-checkbox>
      </el-checkbox-group>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'CheckboxTest',
  data () {
    return {
      box1: true,
      box2: false,
      box3: true,
      boxList1: ['a', 'd'],
      isIndeterminate: false,
      checkAll: false,
      cityList: ['上海', '北京', '广州', '深圳'],
      boxList2: [],
      boxList3: [],
      boxList4: [],
      boxList5: []
    }
  },

  methods: {
    handleCheckAllChange (v) {
      this.boxList2 = v ? this.cityList : []
      this.isIndeterminate = false
    },

    handleCheckedCitiesChange (v) {
      const checkedCount = v.length
      this.checkAll = checkedCount === this.cityList.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cityList.length
    }
  }
}
</script>

<style scoped>

</style>
