import request from '@/utils/request'

export default {
    //分页课程查询带条件的方法
    getCourseList(page, limit, searchObj) {
        return request({
            url: `/eduservice/coursefront/getFrontCourses/${page}/${limit}`,
            method: 'post',
            data: searchObj
        })
    },
    //查询所有课程分类
    getAllSubject() {
        return request({
            url: `/eduservice/edu-subject/getAllSubject`,
            method: 'get'
        })
    },
    //查询课程详情
    getCourseInfo(courseId) {
        return request({
            url: `/eduservice/coursefront/getFrontCourseInfo/${courseId}`,
            method: 'get'
        })
    }
}