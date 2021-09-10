import React from 'react'
import { NavBar, Icon } from 'antd-mobile'
import { useHistory } from "react-router-dom";

interface params {
	title: string
}

const PublicHeader: React.FC<params> = (props) => {
	const { title } = props
    const history = useHistory()
	return (
		<NavBar
			mode="dark"
			icon={<Icon type="left" />}
			onLeftClick={() => history.goBack()}
			rightContent={[
				<Icon key="0" type="search" style={{ marginRight: '16px' }} />,
			]}
		>
			{title}
		</NavBar>
	)
}
export default PublicHeader
