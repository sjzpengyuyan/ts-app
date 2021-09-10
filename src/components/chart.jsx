import React, { useEffect } from 'react'
import _ from 'lodash'
import F2 from '@antv/f2'

export default function Chart(props) {
    let data = []
    if (props.data.length) {
        let max = props.data.map(item => {return {date: item.fxDate, type: '最高气温', value: item.tempMax}})
        let min = props.data.map(item => {return {date: item.fxDate, type: '最低气温', value: item.tempMin}})
        data = max.concat(min)
        console.log(data);
    }
	useEffect(() => {
		const chart = new F2.Chart({
			id: 'container',
			pixelRatio: window.devicePixelRatio,
		})
		chart.source(data)
		chart.scale('date', {
			type: 'timeCat',
			tickCount: 3,
		})
		chart.scale('value', {
			tickCount: 5,
		})
		chart.axis('date', {
			label: function label(text, index, total) {
				// 只显示每一年的第一天
				const textCfg = {
					textAlign: '',
				}
				if (index === 0) {
					textCfg.textAlign = 'left'
				} else if (index === total - 1) {
					textCfg.textAlign = 'right'
				}
				return textCfg
			},
		})
		chart.tooltip({
			custom: true, // 自定义 tooltip 内容框
			onChange: function onChange(obj) {
				const legend = chart.get('legendController').legends.top[0]
				const tooltipItems = obj.items
				const legendItems = legend.items
				const map = {}
				legendItems.forEach(function (item) {
					map[item.name] = _.clone(item)
				})
				tooltipItems.forEach(function (item) {
					const name = item.name
					const value = item.value
					if (map[name]) {
						map[name].value = value
					}
				})
				legend.setItems(_.values(map))
			},
			onHide: function onHide() {
				const legend = chart.get('legendController').legends.top[0]
				legend.setItems(chart.getLegendItems().country)
			},
		})
		chart.line().position('date*value').color('type')
		chart.render()
	})
	return (
		<div>
			<canvas
				id="container"
				width={window.innerWidth}
				height="280"
			></canvas>
		</div>
	)
}
