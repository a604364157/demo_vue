<template>
  <div>
    <el-tabs type="border-card" @tab-click="change">
      <el-tab-pane label="脑图树">
        <div id="mountNode1"></div>
      </el-tab-pane>
      <el-tab-pane label="脑图树(自定义节点)">
        <div id="mountNode2"></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import G6 from '@antv/g6'
  import api from '../../../assets/api/api'

  export default {
    name: 'AntvG6',

    data () {
      return {
        param: 1
      }
    },

    computed: {
      graph1: () => new G6.TreeGraph({
        container: 'mountNode1',
        width: 800,
        height: 600,
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
      }),
      graph2: () => new G6.TreeGraph({
        container: 'mountNode2',
        width: 800,
        height: 800,
        modes: {
          default: [
            {
              type: 'collapse-expand',
              onChange: function onChange (item, collapsed) {
                const data = item.get('model')
                const icon = item.get('group').find(element => element.get('name') === 'collapse-icon')
                if (collapsed) {
                  icon.attr('symbol', this.EXPAND_ICON)
                } else {
                  icon.attr('symbol', this.COLLAPSE_ICON)
                }
                data.collapsed = collapsed
                return true
              },
            },
            'drag-canvas',
            'zoom-canvas',
          ],
        },
        defaultNode: {
          type: 'tree-node',
          anchorPoints: [
            [0, 0.5],
            [1, 0.5],
          ],
        },
        defaultEdge: {
          type: 'cubic-horizontal',
          style: {
            stroke: '#A3B1BF',
          },
        },
        layout: {
          type: 'compactBox',
          direction: 'LR',
          getId: function getId (d) {
            return d.id
          },
          getHeight: function getHeight () {
            return 16
          },
          getWidth: function getWidth () {
            return 16
          },
          getVGap: function getVGap () {
            return 20
          },
          getHGap: function getHGap () {
            return 80
          },
        },
      })
    },

    mounted () {
      this.func1()
    },

    methods: {
      change (val) {
        switch (val.index) {
          case '0':
            this.func1()
            break
          case '1':
            this.func2()
            break
          default:
            this.$alert('错误')
        }
      },

      func1 () {
        this.http.get(api.b).then(data => {
          let centerX = 0
          this.graph1.node(function (node) {
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

          this.graph1.data(data.data)
          this.graph1.render()
          this.graph1.fitView()
        })
      },

      func2 () {
        G6.registerNode(
          'tree-node',
          {
            drawShape: function drawShape (cfg, group) {
              const rect = group.addShape('rect', {
                attrs: {
                  fill: '#fff',
                  stroke: '#666',
                },
                name: 'rect-shape',
              })
              const content = cfg.name.replace(/(.{19})/g, '$1\n')
              const text = group.addShape('text', {
                attrs: {
                  text: content,
                  x: 0,
                  y: 0,
                  textAlign: 'left',
                  textBaseline: 'middle',
                  fill: '#666',
                },
                name: 'rect-shape',
              })
              const bbox = text.getBBox()
              const hasChildren = cfg.children && cfg.children.length > 0
              if (hasChildren) {
                group.addShape('marker', {
                  attrs: {
                    x: bbox.maxX + 6,
                    y: bbox.minX + bbox.height / 2 - 6,
                    r: 6,
                    symbol: this.COLLAPSE_ICON,
                    stroke: '#666',
                    lineWidth: 2,
                  },
                  name: 'collapse-icon',
                })
              }
              rect.attr({
                x: bbox.minX - 4,
                y: bbox.minY - 6,
                width: bbox.width + (hasChildren ? 26 : 8),
                height: bbox.height + 12,
              })
              return rect
            },
          },
          'single-node',
        )
        this.http.get(api.c).then(res => {
          G6.Util.traverseTree(res.data, function (item) {
            item.id = item.name
          })
          this.graph2.data(res.data)
          this.graph2.render()
          this.graph2.fitView()
        })
      },
      COLLAPSE_ICON (x, y, r) {
        return [
          ['M', x, y],
          ['a', r, r, 0, 1, 0, r * 2, 0],
          ['a', r, r, 0, 1, 0, -r * 2, 0],
          ['M', x + 2, y],
          ['L', x + 2 * r - 2, y],
        ]
      },
      EXPAND_ICON (x, y, r) {
        return [
          ['M', x, y],
          ['a', r, r, 0, 1, 0, r * 2, 0],
          ['a', r, r, 0, 1, 0, -r * 2, 0],
          ['M', x + 2, y],
          ['L', x + 2 * r - 2, y],
          ['M', x + r, y - r + 2],
          ['L', x + r, y + r - 2],
        ]
      }
    },

    watch: {}

  }
</script>

<style scoped>

</style>
