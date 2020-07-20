import request from '@/utils/request'

export default {
    //分页讲师查询的方法
    getTeacherList(page, limit) {
        return request({
            url: `/eduservice/teacherfront/getTeacherList/${page}/${limit}`,
            method: 'post'
        })
    },
    //获取讲师详情
    getTeacherInfo(id){
        return request({
            url: `/eduservice/teacherfront/getFrontTeacherInfo/${id}`,
            method: 'get'
        })
    } 
}