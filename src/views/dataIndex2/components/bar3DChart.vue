<template>
  <div>
		<div id="bar3DChart"></div>
	</div>
</template>
<script>
export default {
	name: 'bar3DChart',
	data() {
		return {

		}
	},
	mounted() {
		this.getData()
	},
	methods: {
		getData() {
			this.chartInit()
		},
		chartInit() {
			let hours = ['微课', '课件', '测验', '微课程'];
			let days = ['星期一', '星期二', '星期三', '星期四'];
			let data = [
				[0, 0, 5],
				[0, 1, 1],
				[0, 2, 2],
				[0, 3, 8],
				[1, 0, 3],
				[1, 1, 5],
				[1, 2, 1],
				[1, 3, 9],
				[2, 0, 4],
				[2, 1, 8],
				[2, 2, 4],
				[2, 3, 8],
				[3, 0, 6],
				[3, 1, 7],
				[3, 2, 4],
				[3, 3, 9],
			];
			let myChart = this.$echarts.init(document.getElementById('bar3DChart'))
			let options = {
				title: {
					text: '第13周报告',
					textStyle: {
						fontSize: 18,
						fontWeight: 600,
						fontFamily: 'siyuanheiti_Thin',
						color: '#ffffff'
					},
					top: 10,
					left: 10,
					subtext: '100万',
					subtextStyle: {
						fontSize: 16,
						color: '#ffffff'
					}
				},
				tooltip: {
					show: false
				},
				visualMap: {
					show: false,
					max: 20,
					inRange: {
						color: ['#0a6ae0', '#8e2f12', '#0a6ae0', '#0a6ae0', '#8e2f12', '#f391a9', '#d71345']
					}
				},
				xAxis3D: {
					name: '',
					type: 'category',
					data: hours,
					axisLabel: {
						textStyle: {
							color: '#1f8e74'
						}
					}
				},
				yAxis3D: {
					name: '',
					type: 'category',
					data: days,
					axisLabel: {
						textStyle: {
							color: '#1f8e74'
						}
					}
				},
				zAxis3D: {
					name: '',
					type: 'value',
					axisLabel: {
						textStyle: {
							color: '#1f8e74'
						}
					}
				},
				grid3D: {
					boxWidth: 120,
					boxDepth: 120,
					axisTick: {
						show: false
					},
					axisLine: {
						lineStyle: {
							color: '#ccc',
							width: 1
						}
					},
					axisLabel: {
						textStyle: {
							color: '#1f8e74',
							fontSize: 14
						}
					},
					light: {
						main: {
							intensity: 1.2,
							shadow: true
						},
						ambient: {
							intensity: 0.7,
							shadow: true
						}
					},
					viewControl: {
						alpha: 15,
						beta: 40,
						autoRotate: true,
						zoomSensitivity: 0,
						autoRotateAfterStill: 5,
						distance: 250
					}
				},
				series: [{
					type: 'bar3D',
					name: '数量',
					data: data.map(function(item) {
						return {
							value: [item[0], item[1], item[2]]
						}
					}),
					shading: 'lambert',
					label: {
						show: true,
						distance: 1,
						textStyle: {
							color: '#9c7a1b',
							fontSize: 18,
							borderWidth: 0,
							borderColor: 'none',
							backgroundColor: 'rgba(255,255,255,0)',
							fontFamily: 'impact, Simhei'
						},
					},
					itemStyle: {
						opacity: 1
					},
					/*emphasis: {
							label: {
									textStyle: {
											fontSize: 20,
											color: '#900'
									}
							},
							itemStyle: {
									color: '#900'
							}
					}*/
				}]
			}
			myChart.setOption(options)
		}
	}
}
</script>
<style lang="scss" scoped>
#bar3DChart{
	width: 100%;
	height: 400px;
}
</style>
