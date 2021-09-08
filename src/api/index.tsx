import axios from 'axios'
import { Toast } from 'antd-mobile'
// axios.defaults.baseURL = '/api';
axios.defaults.timeout = 5000
let num = 0
// 请求前拦截
axios.interceptors.request.use(
	(config) => {
        num++
		Toast.loading('拼命加载中，请稍后~', 0)
		return config
	},
	(err) => {
        num = 0
		Toast.hide()
		return Promise.reject(err)
	}
)
// 返回后拦截
axios.interceptors.response.use(
	(res) => {
        num--
        if (num === 0) {
            Toast.hide()
        }
		return res
	},
	(err) => {
        num = 0
		Toast.hide()
        Toast.info('服务器错误请稍后重试~', 2);
		return Promise.reject(err)
	}
)

// 获取首页信息
const getHomeData = (params: any) => axios.get('api/data?type=' + params)
// 获取天气信息
const getWeather = (params: string) => axios.get(`now?location=${params}&key=00e4a28d1a1b4432a3e3769ce70afa0e`)

export { getHomeData, getWeather }
