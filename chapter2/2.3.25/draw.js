function draw (data, M) {
  const chartDom = document.getElementById('chart')
  const myChart = echarts.init(chartDom)
  let option

  option = {
    title: {
      text: '排序时间图'
    },
    tooltip: {
      trigger: 'axis',
      formatter (params) {
        return [
          'M: ' + params[0].axisValue + '<br />',
          'Time: ' + params[0].data
        ].join('')
      }
    },
    xAxis: {
      type: 'category',
      data: Array.from({ length: M }, (item, index) => index)
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} ms'
      },
    },
    series: [
      {
        data,
        type: 'line',
        name: 'time',
        smooth: true,
        markPoint: {
          data: [
            {
              type: 'min',
              name: 'Min',
              symbol: 'pin',
              symbolSize: 100,
              label: {
                fontFamily: 'sans-serif',
                borderType: 'solid',
                formatter (param) {
                  return `M: ${param.data.coord[0]}\nTime: ${param.data.coord[1]}`
                }
              }
            }
          ]
        }
      }
    ]
  }

  myChart.setOption(option)
}

export default draw