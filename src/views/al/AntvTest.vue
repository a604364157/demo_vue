<template>
  <div>
    <div>
      <el-button type="primary" @click="change">切换</el-button>
    </div>
    <div id="mountNode"></div>
    <div id="container" style="width: 800px;height: 600px"></div>
  </div>
</template>

<script>
  import G6 from '@antv/g6'
  import api from '../../assets/api/api'

  export default {
    name: 'AntvTest',

    data () {
      return {
        param: 1
      }
    },

    mounted () {
      this.init(1)
    },

    methods: {
      init (i) {
        switch (i) {
          case 1:
            this.antv1()
            break
          case 2:
            this.antv2()
            break
          default:
            this.$alert('错误')
        }
      },

      antv1 () {
        this.http.get(api.a).then(res => {
          const graph = new G6.Graph({
            container: 'mountNode', // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
            width: 800, // Number，必须，图的宽度
            height: 500, // Number，必须，图的高度
          })
          graph.data(res.data) // 读取 Step 2 中的数据源到图上
          graph.render() // 渲染图
        })
      },

      antv2 () {
        this.http.get(api.b).then(data => {
            const div = document.getElementById('container')
            const width = div.scrollWidth
            const height = div.scrollHeight || 500
            const graph = new G6.TreeGraph({
              container: 'container',
              width,
              height,
              modes: {
                default: [
                  {
                    type: 'collapse-expand',
                    onChange: function onChange (item, collapsed) {
                      const data = item.get('model').data
                      data.collapsed = collapsed
                      return true
                    },
                  },
                  'drag-canvas',
                  'zoom-canvas',
                ],
              },
              defaultNode: {
                size: 26,
                anchorPoints: [
                  [0, 0.5],
                  [1, 0.5],
                ],
                style: {
                  fill: '#C6E5FF',
                  stroke: '#5B8FF9',
                },
              },
              defaultEdge: {
                type: 'cubic-horizontal',
                style: {
                  stroke: '#A3B1BF',
                },
              },
              layout: {
                type: 'mindmap',
                direction: 'H',
                getHeight: () => {
                  return 16
                },
                getWidth: () => {
                  return 16
                },
                getVGap: () => {
                  return 10
                },
                getHGap: () => {
                  return 50
                },
                getSide: d => {
                  if (d.id === 'Classification') {
                    return 'left'
                  }
                  return 'right'
                },
              },
            })

            let centerX = 0
            graph.node(function (node) {
              if (node.id === 'Modeling Methods') {
                centerX = node.x
              }

              return {
                label: node.id,
                labelCfg: {
                  position:
                    node.children && node.children.length > 0
                      ? 'left'
                      : node.x > centerX
                      ? 'right'
                      : 'left',
                  offset: 5,
                },
              }
            })

            graph.data(data.data)
            graph.render()
            graph.fitView()
          })
      },

      change () {
        if (this.param === 1) {
          this.param = 2
        } else {
          this.param = 1
        }
      },
    },

    watch:{
      'param':function (v) {
        this.init(v);
      }
    }

  }
</script>

<style scoped>

</style>
