import React, { useState, useEffect } from 'react'
import { PullToRefresh, Card, WingBlank, WhiteSpace } from 'antd-mobile'
import { useHistory } from "react-router-dom";
import { getHomeData } from '../api'

interface Params {
	param: string
}
interface DataType {
	[key: string]: string
}

const List: React.FC<Params> = (props) => {
    const history = useHistory();
	const [refreshing, setRefreshing] = useState(false)
	const [data, setData] = useState<DataType[]>([])

	const init = async () => {
		let data = await getHomeData(props.param)
		setData(data.data)
	}
	useEffect(() => {
		init()
	}, [])

    const goDetailPage = () => {
        history.push('/detilPage')
    }

	return (
		<div>
			<PullToRefresh
				damping={60}
				style={{
					height: document.documentElement.clientHeight - 131,
					overflow: 'auto',
				}}
				distanceToRefresh={25}
				getScrollContainer={() => undefined}
				indicator={{}}
				direction="up"
				refreshing={refreshing}
				onRefresh={() => {
					setRefreshing(true)
					setTimeout(() => {
						setRefreshing(false)
					}, 1000)
				}}
			>
				{data.map((i) => (
					<WingBlank size="lg" key={i.id}>
						<WhiteSpace size="lg" />
						<Card onClick={goDetailPage}>
							<Card.Header
								title={i.current_node}
								extra={i.flow_name}
							/>
							<Card.Body>
								{i.name}
							</Card.Body>
							<Card.Footer
								content={i.start_handler}
								extra={i.time}
							/>
						</Card>
						<WhiteSpace size="lg" />
					</WingBlank>
				))}
			</PullToRefresh>
		</div>
	)
}
export default List
