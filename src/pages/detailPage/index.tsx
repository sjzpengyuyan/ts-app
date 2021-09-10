import React, { useEffect, useState } from 'react'
import { Picker, List } from 'antd-mobile'
import { createForm } from 'rc-form'
import { district } from './contents'
import { getGeographyIP, get3Weather } from '../../api'
import PublicHeader from '../../components/publicHeader'
import Chart from '../../components/chart'
import './detailPage.css'

const DetailPage: React.FC = (props: any) => {
	const { getFieldProps } = props.form
	const [aryData, setAryData] = useState([])
	const [value, setValue] = useState(['北京', '北京市'])

	const handleData = (data: any[]) => {
		data.forEach((item) => {
			item.value = item.label
			if (item.children.length) handleData(item.children)
		})
	}
	const sendRequrt = async (e: string | string[]) => {
		let data = await getGeographyIP(e)
		if (data.data.location) {
			let treeData = await get3Weather(data.data.location[0].id)
			setAryData(treeData.data.daily)
		}
	}
	useEffect(() => {
		handleData(district)
		sendRequrt(value)
	}, [])
	const onOK = async (e: string[]) => {
		setValue(e)
		sendRequrt(e)
	}
	return (
		<div>
			<PublicHeader title="详情" />
			<List style={{ backgroundColor: 'white' }}>
				<Picker
					extra="请选择城市"
					data={district}
					title="城市信息"
					{...getFieldProps('district')}
					onOk={(e) => onOK(e)}
					value={value}
				>
					<List.Item arrow="horizontal">城市</List.Item>
				</Picker>
			</List>
			<Chart data={aryData} />
		</div>
	)
}

export default createForm()(DetailPage)
