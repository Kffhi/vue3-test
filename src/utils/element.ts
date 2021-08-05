import { locale, ElButton } from 'element-plus'

import 'element-plus/lib/theme-chalk/index.css'

import lang from 'element-plus/lib/locale/lang/zh-cn'

const components = [ElButton]

locale(lang)

export default (Vue: any) => {
    components.forEach(item => {
        Vue.use(item)
    })
}
