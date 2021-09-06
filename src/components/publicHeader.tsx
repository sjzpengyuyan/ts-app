import React from 'react'
import { NavBar, Icon } from 'antd-mobile'

interface params {
	title: string
}

const PublicHeader: React.FC<params> = (props) => {
	const { title } = props
	return (
		<NavBar
			mode="dark"
			icon={<Icon type="left" />}
			onLeftClick={() => console.log('onLeftClick')}
			rightContent={[
				<Icon key="0" type="search" style={{ marginRight: '16px' }} />,
			]}
		>
			{title}
		</NavBar>
	)
}
export default PublicHeader
