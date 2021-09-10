import axios from 'axios'
import { Toast } from 'antd-mobile'
// axios.defaults.baseURL = '/api';
axios.defaults.timeout = 5000
let num = 0
const key = '00e4a28d1a1b4432a3e3769ce70afa0e'
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
const getHomeData = (params: any) => axios.get('https://5e528b14d90e6c00149913cf.mockapi.io/api/data?type=' + params)
// 获取天气信息
const getWeather = (params: string) => axios.get(`https://devapi.qweather.com/v7/weather/now?location=${params}&key=${key}`)
// 获取地理编码
const getGeographyIP = (params: string | any[]) => {
    let url = 'https://geoapi.qweather.com/v2/city/lookup?location='
    console.log(params);
    
    if (params.length === 2) {
        url = url + params[1] + '&admin=' + params[0] + `&key=${key}`
    } else {
        url = url + params[2] + '&admin=' + params[1] + '&admin=' + params[0] + `&key=${key}`
    }
    console.log(url);
    
    return axios.get(url)
}
// 获取三天天气情况
const get3Weather = (params: string) => axios.get(`https://devapi.qweather.com/v7/weather/3d?location=${params}&key=${key}`)
export { getHomeData, getWeather, getGeographyIP, get3Weather }
