import request from '@/utils/request'
export default {
    //生成订单接口
    generateOrder(courseId) {
        return request({
            url: `/eduorder/order/createOrder/${courseId}`,
            method: 'post'
        })
    },
    //根据订单号查询订单信息
    getOrderInfo(orderNo) {
        return request({
            url: `/eduorder/order/getOrderInfo/${orderNo}`,
            method: 'get'
        })
    },
    //生成支付二维码
    generateQRCode(orderNo) {
        return request({
            url: `/eduorder/paylog/createQRCode/${orderNo}`,
            method: 'get'
        })
    },
    //查询订单状态
    queryPayStatus(orderNo) {
        return request({
            url: `/eduorder/paylog/queryPayStatus/${orderNo}`,
            method: 'get'
        })
    }
}