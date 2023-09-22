import { createRouter, createWebHistory } from 'vue-router'
//createWebHashHistory
/*const routes = [{
        path: '/',
        name: 'Сранение текста онлайн',
        meta: {
            title: 'Сранение текста онлайн',
            description: 'Инструмент для сравнения двух текстов онлайн'
        },
        component: () =>
            import ('../views/Сompare.vue')
    },
    {
        path: '/perfix',
        name: 'Добавление перфиксов онлайн',
        meta: {
            title: 'Добавление перфиксов онлайн',
            description: 'Инструмент для добавления слов или символа в начало (перфикс) или конец (постфикс) каждой строки списка'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../views/Perfix.vue')
    }
]*/


const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'Сранение текста онлайн',
            meta: {
                title: 'Сранение текста онлайн',
                description: 'Инструмент для сравнения двух текстов онлайн'
            },
            component: () =>
                import ('../views/Сompare.vue')
        },
        {
            path: '/perfix',
            name: 'Добавление перфиксов онлайн',
            meta: {
                title: 'Добавление перфиксов онлайн',
                description: 'Инструмент для добавления слов или символа в начало (перфикс) или конец (постфикс) каждой строки списка'
            },
            component: () =>
                import ('../views/Perfix.vue')
        },
        {
            path: '/speller',
            name: 'Проверка орфографии онлайн',
            meta: {
                title: 'Проверка орфографии онлайн',
                description: 'Инструмент для проверки орфографии(текст) онлайн'
            },
            component: () =>
                import ('../views/Speller.vue')
        }
    ]
})

export default router