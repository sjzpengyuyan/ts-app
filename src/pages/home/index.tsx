import React, { useState, useEffect } from 'react'
import { TabBar, NoticeBar } from 'antd-mobile'
import PublicHeader from '../../components/publicHeader'
import { tabBarTtems, time } from './contents'
import List from '../../components/listView'
import { getWeather } from '../../api'

interface weatherObj {
	[key: string]: string
}

const Home: React.FC = () => {
	const [selectedTab, setSelectedTab] = useState('todo')
	const [title, setTitle] = useState('待审批流程')
	const [weather, setWeather] = useState<weatherObj>({})
	const [position, setPosition] = useState('暂时无法获取位置信息')
    const selected = (key: string, title: string): void => {
        setTitle(title + '流程')
        setSelectedTab(key)
    }
    useEffect(() => {
        get_weather()
    }, [])
    const get_weather = async() => {
        let position = window.sessionStorage.getItem('position')
        if (!position) {
            return
        }
        const location = JSON.parse(position)
        setPosition(location.city)
        console.log()
        let data = await getWeather(location.lng + ',' + location.lat)
        setWeather(data.data.now)
    }
	return (
		<div>
			<PublicHeader title={title} />
            <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                {time(weather.obsTime)}，{position}，天气：{weather.text}，温度：{weather.temp}°，体感温度：{weather.feelsLike}°
            </NoticeBar>
			<TabBar
				unselectedTintColor="#949494"
				tintColor="#33A3F4"
				barTintColor="white"
				hidden={false}
				tabBarPosition="top"
                prerenderingSiblingsNumber={0}
			>
				{tabBarTtems.map((item) => (
					<TabBar.Item
						title={item.title}
						key={item.key}
                        icon={<div style={{width: '22px', height: '22px', background: `url(${item.picUrl}) center center /  21px 21px no-repeat`}}/>}
                        selectedIcon={<div style={{width: '22px', height: '22px', background: `url(${item.selectUrl}) center center /  21px 21px no-repeat`}}/>}
                        selected={selectedTab === item.key}
                        onPress={() => {selected(item.key, item.title)}}
					>
                        <List param={item.key}/>
                    </TabBar.Item>
				))}
			</TabBar>
		</div>
	)
}

export default Home
