export const route = {
    RESUME: '/resume',
    PHOTOS: 'https://instagram.com/all_v_/'
}

export const links = {
    GITHUB: "https://github.com/Werwllleh",
    GMAIL: "mailto:allvxm4@gmail.com",
    VK: "https://vk.com/all_v111vv",
    TELEGRAM: "https://telegram.me/all_lllll"
}

export const aboutMe = {
    Name: 'Alexey Aleksandrov',
    Birthday: '05.10.1999',
    Country: 'Russia',
    Languages: 'Russian, English'
}

export const contacts = {
    Gmail: "mailto:allvxm4@gmail.com",
    Vk: "https://vk.com/all_v111vv",
    Telegram: "https://telegram.me/all_lllll"
}

export const theme = {
    DARK: 'theme-dark',
    LIGHT: 'theme-light'
}

export const skills = {
    languages: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Sass/SCSS'],
    libraries_frameworks: ['React', 'Redux', 'Redux Toolkit', 'Zustand', 'Next.js', 'Effector', 'Express', 'Axios', 'Lodash', 'Sequelize'],
    tools: ['Git', 'Node.js', 'Webpack', 'BEM', 'GULP', 'Jest', 'Cypress'],
    databases: ['PostgreSQL']
}

export const works = [
    {
        title: 'Bitroid',
        link: {
            url: 'https://bitroid.ru/',
            text: 'Bitroid'
        },
        description: [
            {
                date_from: '26.01.2022',
                date_until: '10.05.2023',
                subtitle: 'Web developer',
                text: `Первый опыт коммерческой разработки, применяя знания HTML, CSS, Javascript и PHP. В мои обязанности входили: верстка проектов под платформу 1С-Битрикс, верстка лендингов, интеграция шаблонов в CMS, создание инфоблоков, написание активити для облачной и коробочной версии 1С-Битрикс`
            },
        ]
    },
    {
        title: 'Media Works',
        link: {
            url: 'https://mworks.ru/',
            text: 'Media Works'
        },
        description: [
            {
                date_from: '11.09.2023',
                date_until: '',
                subtitle: 'Web developer',
                text: `Верстка лендингов, интернет-магазинов, почтовых писем, создание и поддержка бот-чатов. Верстка на React и Vue. Создание PWA приложений.`
            },
        ]
    },
];

export const educations = [
    {
        description: [
            {
                date_from: '01.09.2020',
                date_until: '01.07.2024',
                subtitle: 'Московский политехнический университет Чебоксарский институт (филиал)',
                text: 'Получено высшее образование. Кафедра «Информационные технологии и системы управления». Направление - Информатика и вычислительная техника (профиль — «Программное обеспечение вычислительной техники и автоматизированных систем»)',
                link: 'https://www.polytech21.ru/'
            },
            {
                date_from: '22.02.2023',
                date_until: '09.06.2023',
                subtitle: 'Yandex Practicum',
                text: 'Был пройден курс от Yandex Practicum по программе React-разработчик и получено удостоверение о повышении квалификации. Изучены: основы библиотеки React, управление состоянием (Redux, Redux Toolkit), настроен роутинг (React-router-dom) и авторизация, TypeScript, WebSocket. В результате был создан проект Stellar Burgers',
                link: 'https://practicum.yandex.ru/'
            },
            {
                date_from: '01.09.2015',
                date_until: '01.07.2019',
                subtitle: 'Чебоксарский электромеханический колледж',
                text: 'Получено среднее профессиональное образование. Специальность - «Организация и технология защиты информации». Квалификация - «Техник по защите информации».',
                link: 'http://www.chemk.org/'
            },
        ]
    },
];
export const projects = [
    {
        description: [
            {
                date_from: '22.02.2023',
                date_until: '09.06.2023',
                subtitle: 'Stellar Burgers',
                text: 'Проектная работа программы React-разработчик от Yandex Practicum. Стэк: React, Redux Toolkit, TypeScript, WebSocket.',
                link: 'https://werwllleh.github.io/react-burger/'

            },
            {
                date_from: '2022',
                subtitle: 'VagBot',
                text: 'Телеграмм-Бот для автомобильного VAG сообщества Чебоксар. Стэк: NodeJs, Express, React, PostgreSQL, Ant Design',
                link: 'https://telegram.me/VW21ClubBot'
            },
            {
                date_from: '2022',
                subtitle: 'Dhome (в разработке)',
                text: 'Сайт-витрина о строительстве домов из СИП панелей. Сайт написан с использованием NextJs.',
                link: 'https://dhome.vercel.app/'
            },
            {
                date_from: '2023',
                subtitle: 'Technodekor',
                text: 'Редизайн для сайта Technodekor',
                link: 'https://werwllleh.github.io/technodekor/'
            },
            {
                date_from: '2023',
                subtitle: 'Innova Clinic',
                text: 'Разработка сайта для Innova Clinic',
                link: 'https://werwllleh.github.io/innova-clinic/'
            },
            {
                date_from: '2023',
                subtitle: 'Santey',
                text: 'Landing page Santey',
                link: 'https://werwllleh.github.io/santey/'
            },

        ]
    }
];
