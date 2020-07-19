import request from '@/utils/request'
export default {
    //根据手机号发送验证码
    sendCodeByPhone(phone) {
        return request({
            url: `/edumsm/msm/send/${phone}`,
            method: 'get'
        })
    },
    //注册方法
    registerMember(formItem) {
        return request({
            url: `/ucenter/member/register`,
            method: 'post',
            data: formItem
        })
    }
}