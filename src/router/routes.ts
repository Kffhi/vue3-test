import { RouteRecordRaw } from 'vue-router'
import ProjectInfo from '../views/project/projectInfo.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/projectInfo'
    },
    {
        path: '/projectInfo',
        name: 'ProjectInfo',
        component: ProjectInfo
    },
    {
        path: '/modelRepository',
        name: 'ModelRepository',
        component: () => import('../views/model/modelRepository.vue') // 懒加载组件
    }
]
export default routes
