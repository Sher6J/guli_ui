import request from '@/utils/request'
export default {
    //登录方法
    submitLogin(userInfo) {
        return request({
            url: `/ucenter/member/login`,
            method: 'post',
            data: userInfo
        })
    },
    //根据token值获取用户信息
    getMemberInfo() {
        return request({
            url: `/ucenter/member/getMemberInfo`,
            method: 'get'
        })
    }
}