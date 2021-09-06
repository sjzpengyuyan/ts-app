import moment from 'moment';
const tabBarTtems = [
    {
        title: '待审批',
        key: 'todo',
        picUrl: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
        selectUrl:'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
    },
    {
        title: '我发起',
        key: 'category',
        picUrl: 'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg',
        selectUrl:'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg',
    },
    {
        title: '已审批',
        key: 'cart',
        picUrl: 'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg',
        selectUrl:'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg',
    },
    {
        title: '已抄送',
        key: 'concemed',
        picUrl: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
        selectUrl:'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
    },
]

const time = (timer:string):string => {
    return moment(timer).format('YYYY年MM月DD日')
}


export { tabBarTtems, time }