import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'Сранение текста онлайн, добавление префиксов',
            meta: {
                title: 'Сранение текста онлайн, добавление префиксов',
                description: 'Инструмент для сравнения двух текстов онлайн, добавление префиксов'
            },
            component: () =>
                import ('../views/Сompare.vue')
        },
        {
            path: '/prefix',
            name: 'Добавление префикса, приствки онлайн',
            meta: {
                title: 'Добавление префиксов онлайн',
                description: 'Инструмент для добавления слов или символа в начало (префиксов) или конец (суффиксов) каждой строки списка'
            },
            component: () =>
                import ('../views/Prefix.vue')
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