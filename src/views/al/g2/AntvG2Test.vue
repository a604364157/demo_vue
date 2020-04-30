<template>
  <div>
    <el-tabs type="border-card" @tab-click="change">
      <el-tab-pane label="线型图">
        <div id="container1"></div>
      </el-tab-pane>
      <el-tab-pane label="柱形图">
        <div id="container2"></div>
      </el-tab-pane>
      <el-tab-pane label="条形图">
        <div id="container3"></div>
      </el-tab-pane>
      <el-tab-pane label="饼状图">
        <div id="container4"></div>
      </el-tab-pane>
      <el-tab-pane label="雷达图">
        <div id="container5"></div>
      </el-tab-pane>
      <el-tab-pane label="漏斗图">
        <div id="container6"></div>
      </el-tab-pane>
      <el-tab-pane label="仪表盘">
        <div id="container7"></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import DataSet from '@antv/data-set'
  import { Chart, registerShape } from '@antv/g2'

  export default {
    name: 'AntvG2',

    data () {
      return {
        param: {
          a: '',
        }
      }
    },

    computed: {
      ac: {
        get: () => {
          return '1'
        },
        set: (val) => {
          this.a = val
        }
      },
      chart1: () => {
        return new Chart({
          container: 'container1',
          autoFit: true,
          height: 500,
          width: 500
        })
      },
      chart2: () => {
        return new Chart({
          container: 'container2',
          autoFit: true,
          height: 500,
          width: 500
        })
      },
      chart3: () => {
        return new Chart({
          container: 'container3',
          autoFit: true,
          height: 500,
          width: 500
        })
      },
      chart4: () => {
        return new Chart({
          container: 'container4',
          autoFit: true,
          height: 500,
          width: 500
        })
      },
      chart5: () => {
        return new Chart({
          container: 'container5',
          autoFit: true,
          height: 500,
          width: 500
        })
      },
      chart6: () => {
        return new Chart({
          container: 'container6',
          autoFit: true,
          height: 500,
          width: 500
        })
      },
      chart7: () => {
        return new Chart({
          container: 'container7',
          autoFit: true,
          height: 500,
          width: 500,
          padding: [0, 0, 30, 0]
        })
      },
    },

    mounted () {
      console.log('page init')
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
          case '2':
            this.func3()
            break
          case '3':
            this.func4()
            break
          case '4':
            this.func5()
            break
          case '5':
            this.func6()
            break
          case '6':
            this.func7()
            break
          default:
            console.log('out of index')
        }
      },

      func1 () {
        const data = [
          {
            year: '1991',
            value: 3
          },
          {
            year: '1992',
            value: 4
          },
          {
            year: '1993',
            value: 3.5
          },
          {
            year: '1994',
            value: 5
          },
          {
            year: '1995',
            value: 4.9
          },
          {
            year: '1996',
            value: 6
          },
          {
            year: '1997',
            value: 7
          },
          {
            year: '1998',
            value: 9
          },
          {
            year: '1999',
            value: 13
          },
        ]

        this.chart1.data(data)
        this.chart1.scale({
          year: {
            range: [0, 1],
          },
          value: {
            min: 0,
            nice: true,
          },
        })

        this.chart1.tooltip({
          showCrosshairs: true, // 展示 Tooltip 辅助线
          shared: true,
        })

        this.chart1.line().position('year*value').label('value')
        this.chart1.point().position('year*value')

        this.chart1.render(true)
      },

      func2 () {
        const data = [
          {
            year: '1951 年',
            sales: 38
          },
          {
            year: '1952 年',
            sales: 52
          },
          {
            year: '1956 年',
            sales: 61
          },
          {
            year: '1957 年',
            sales: 145
          },
          {
            year: '1958 年',
            sales: 48
          },
          {
            year: '1959 年',
            sales: 38
          },
          {
            year: '1960 年',
            sales: 38
          },
          {
            year: '1962 年',
            sales: 38
          },
        ]

        this.chart2.data(data)
        this.chart2.scale('sales', {
          nice: true,
        })

        this.chart2.tooltip({
          showMarkers: false
        })
        this.chart2.interaction('active-region')

        this.chart2.interval().position('year*sales')

        this.chart2.render(true)
      },

      func3 () {
        const data = [
          {
            country: '巴西',
            population: 18203
          },
          {
            country: '印尼',
            population: 23489
          },
          {
            country: '美国',
            population: 29034
          },
          {
            country: '印度',
            population: 104970
          },
          {
            country: '中国',
            population: 131744
          },
        ]

        this.chart3.data(data)
        this.chart3.scale('population', { nice: true })
        this.chart3.coordinate().transpose()
        this.chart3.tooltip({
          showMarkers: false
        })
        this.chart3.interaction('active-region')
        this.chart3.interval().position('country*population')
        this.chart3.render(true)
      },

      func4 () {
        const data = [
          {
            item: '事例一',
            count: 40,
            percent: 0.4
          },
          {
            item: '事例二',
            count: 21,
            percent: 0.21
          },
          {
            item: '事例三',
            count: 17,
            percent: 0.17
          },
          {
            item: '事例四',
            count: 13,
            percent: 0.13
          },
          {
            item: '事例五',
            count: 9,
            percent: 0.09
          },
        ]

        this.chart4.coordinate('theta', {
          radius: 0.75,
        })

        this.chart4.data(data)

        this.chart4.scale('percent', {
          formatter: (val) => {
            val = val * 100 + '%'
            return val
          },
        })

        this.chart4.tooltip({
          showTitle: false,
          showMarkers: false,
        })

        this.chart4
          .interval()
          .position('percent')
          .color('item')
          .label('percent', {
            content: (data) => {
              return `${data.item}: ${data.percent * 100}%`
            },
          })
          .adjust('stack')

        this.chart4.interaction('element-active')

        this.chart4.render()
      },

      func5 () {
        const data = [
          {
            item: 'Design',
            a: 70,
            b: 30
          },
          {
            item: 'Development',
            a: 60,
            b: 70
          },
          {
            item: 'Marketing',
            a: 50,
            b: 60
          },
          {
            item: 'Users',
            a: 40,
            b: 50
          },
          {
            item: 'Test',
            a: 60,
            b: 70
          },
          {
            item: 'Language',
            a: 70,
            b: 50
          },
          {
            item: 'Technology',
            a: 50,
            b: 40
          },
          {
            item: 'Support',
            a: 30,
            b: 40
          },
          {
            item: 'Sales',
            a: 60,
            b: 40
          },
          {
            item: 'UX',
            a: 50,
            b: 60
          },
        ]
        const { DataView } = DataSet
        const dv = new DataView().source(data)
        dv.transform({
          type: 'fold',
          fields: ['a', 'b'], // 展开字段集
          key: 'user', // key字段
          value: 'score', // value字段
        })

        this.chart5.data(dv.rows)
        this.chart5.scale('score', {
          min: 0,
          max: 80,
        })
        this.chart5.coordinate('polar', {
          radius: 0.8,
        })
        this.chart5.tooltip({
          shared: true,
          showCrosshairs: true,
          crosshairs: {
            line: {
              style: {
                lineDash: [4, 4],
                stroke: '#333'
              }
            }
          }
        })
        this.chart5.axis('item', {
          line: null,
          tickLine: null,
          grid: {
            line: {
              style: {
                lineDash: null,
              },
            },
          },
        })
        this.chart5.axis('score', {
          line: null,
          tickLine: null,
          grid: {
            line: {
              type: 'line',
              style: {
                lineDash: null,
              },
            },
          },
        })

        this.chart5
          .line()
          .position('item*score')
          .color('user')
          .size(2)
        this.chart5
          .point()
          .position('item*score')
          .color('user')
          .shape('circle')
          .size(4)
          .style({
            stroke: '#fff',
            lineWidth: 1,
            fillOpacity: 1,
          })
        this.chart5
          .area()
          .position('item*score')
          .color('user')
        this.chart5.render(true)
      },

      func6 () {
        const data = [
          {
            action: '浏览网站',
            pv: 50000
          },
          {
            action: '放入购物车',
            pv: 35000
          },
          {
            action: '生成订单',
            pv: 25000
          },
          {
            action: '支付订单',
            pv: 15000
          },
          {
            action: '完成交易',
            pv: 8000
          },
        ]

        this.chart6.data(data)
        this.chart6.axis(false)
        this.chart6
          .coordinate('rect')
          .transpose()
          .scale(1, -1)
        this.chart6.tooltip({
          showMarkers: false,
        })
        this.chart6
          .interval()
          .adjust('symmetric')
          .position('action*pv')
          .shape('pyramid')
          .color('action', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF'])
          .label(
            'action*pv',
            (action, pv) => {
              return {
                content: `${action} ${pv}`,
              }
            },
            {
              offset: 35,
              labelLine: {
                style: {
                  lineWidth: 1,
                  stroke: 'rgba(0, 0, 0, 0.15)',
                },
              },
            }
          )
          .animate({
            appear: {
              animation: 'fade-in'
            },
            update: {
              annotation: 'fade-in'
            }
          })

        this.chart6.interaction('element-active')

        this.chart6.render(true)
      },

      func7 () {
        function creatData() {
          const data = [];
          const val = (Math.random() * 6).toFixed(1);
          data.push({ value: +val });
          return data;
        }

        // 自定义Shape 部分
        registerShape('point', 'pointer', {
          draw(cfg, container) {
            const group = container.addGroup({});
            // 获取极坐标系下画布中心点
            const center = this.parsePoint({ x: 0, y: 0 });
            // 绘制指针
            group.addShape('line', {
              attrs: {
                x1: center.x,
                y1: center.y,
                x2: cfg.x,
                y2: cfg.y,
                stroke: cfg.color,
                lineWidth: 5,
                lineCap: 'round',
              },
            });
            group.addShape('circle', {
              attrs: {
                x: center.x,
                y: center.y,
                r: 9.75,
                stroke: cfg.color,
                lineWidth: 4.5,
                fill: '#fff',
              },
            });
            return group;
          },
        });

        const color = ['#0086FA', '#FFBF00', '#F5222D'];

        this.chart7.data(creatData());
        this.chart7.animate(false);

        this.chart7.coordinate('polar', {
          startAngle: (-9 / 8) * Math.PI,
          endAngle: (1 / 8) * Math.PI,
          radius: 0.75,
        });
        this.chart7.scale('value', {
          min: 0,
          max: 6,
          tickInterval: 1,
        });

        this.chart7.axis('1', false);
        this.chart7.axis('value', {
          line: null,
          label: {
            offset: -40,
            style: {
              fontSize: 18,
              fill: '#CBCBCB',
              textAlign: 'center',
              textBaseline: 'middle',
            },
          },
          tickLine: {
            length: -24,
          },
          grid: null,
        });
        this.chart7.legend(false);
        this.chart7.tooltip(false);
        this.chart7
          .point()
          .position('value*1')
          .shape('pointer')
          .color('value', (val) => {
            if (val < 2) {
              return color[0];
            } else if (val <= 4) {
              return color[1];
            } else if (val <= 6) {
              return color[2];
            }
          });
        let chart7 = this.chart7
        draw(creatData());
        setInterval(function() {
          draw(creatData());
        }, 1000);

        function draw(data) {
          const val = data[0].value;
          const lineWidth = 25;
          chart7.annotation().clear(true);
          // 绘制仪表盘背景
          chart7.annotation().arc({
            top: false,
            start: [0, 1],
            end: [6, 1],
            style: {
              stroke: '#CBCBCB',
              lineWidth,
              lineDash: null,
            },
          });

          if (val >= 2) {
            chart7.annotation().arc({
              start: [0, 1],
              end: [val, 1],
              style: {
                stroke: color[0],
                lineWidth,
                lineDash: null,
              },
            });
          }

          if (val >= 4) {
            chart7.annotation().arc({
              start: [2, 1],
              end: [4, 1],
              style: {
                stroke: color[1],
                lineWidth,
                lineDash: null,
              },
            });
          }

          if (val > 4 && val <= 6) {
            chart7.annotation().arc({
              start: [4, 1],
              end: [val, 1],
              style: {
                stroke: color[2],
                lineWidth,
                lineDash: null,
              },
            });
          }

          if (val > 2 && val <= 4) {
            chart7.annotation().arc({
              start: [2, 1],
              end: [val, 1],
              style: {
                stroke: color[1],
                lineWidth,
                lineDash: null,
              },
            });
          }

          if (val < 2) {
            chart7.annotation().arc({
              start: [0, 1],
              end: [val, 1],
              style: {
                stroke: color[0],
                lineWidth,
                lineDash: null,
              },
            });
          }

          // 绘制指标数字
          chart7.annotation().text({
            position: ['50%', '85%'],
            content: '合格率',
            style: {
              fontSize: 20,
              fill: '#545454',
              textAlign: 'center',
            },
          });
          chart7.annotation().text({
            position: ['50%', '90%'],
            content: `${data[0].value * 10} %`,
            style: {
              fontSize: 36,
              fill: '#545454',
              textAlign: 'center',
            },
            offsetY: 15,
          });
          chart7.changeData(data);
        }
      },
    },

    watch: {}
  }
</script>

<style scoped>

</style>
