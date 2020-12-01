/**********************
 * iACCADEMY
 *********************/

 const iAccademy = new Vue ({

    el: '#iAccademy',

    data: {

        // HEADER / NABAR

        // POPULATING NAVBAR LIST
        navbarList: [
            {
                item: 'home',
            },
            {
                item: 'courses',
            },
            {
                item: 'instructors',
            },
            {
                item: 'events',
            },
            {
                item: 'pages',
            },
            {
                item: 'elements',
            },
        ],

        // POPULATING NAVBAR CTA LIST
        ctaList: [
            {
                icon: 'fa-search',
            },
            {
                icon: 'fa-shopping-bag',
                bagde: true,
            },
            {
                icon: 'fa-bars',
            },
        ],

        // MAIN SMALL CARDS
        smCards: [
            {
                image: '1',
                title: 'Languages'
            },
            {
                image: '2',
                title: 'Software'
            },
            {
                image: '3',
                title: 'Business'
            },
            {
                image: '4',
                title: 'Chemistry'
            },
            {
                image: '5',
                title: 'Science'
            },
            {
                image: '6',
                title: 'DIT&Craft'
            },
        ],

        // COURSE INFO SECTION
        courseIndex: 0,
        infoList: [
            {
                name: 'What We Do',
                title: 'Learn Possibilities',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, iusto? Nostrum, ducimus similique amet hic sunt at velit totam deserunt perspiciatis, repellendus minus suscipit tempore ullam numquam blanditiis cum dicta!',
                list: [ 
                    'We enrich throught learning.',
                    'Maximizing potential through individual attention.',
                    'The trusted name for specialized training.',
                    'People teach. People learn. This in whewe they connect.'
                ],
                image: '',
            },
            {
                name: 'Degree Programme',
                title: 'Learn Ciaone',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, iusto? Nostrum, ducimus similique amet hic sunt at velit totam deserunt perspiciatis, repellendus minus suscipit tempore ullam numquam blanditiis cum dicta! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, iusto? Nostrum, ducimus similique amet hic sunt at velit totam deserunt perspiciatis, repellendus minus suscipit tempore ullam numquam blanditiis cum dicta!',
                list: [ 
                    'We enrich throught learning.',
                    'Maximizing potential through individual attention.',
                    'The trusted name for specialized training.',
                    'People teach. People learn. This in whewe they connect.'
                ],
                image: '',
            },
            {
                name: 'Career Achievements',
                title: 'Learn Prova',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, iusto? Nostrum, ducimus similique amet hic sunt at velit totam deserunt perspiciatis, repellendus minus suscipit tempore ullam numquam blanditiis cum dicta! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, iusto? Nostrum, ducimus similique amet hic sunt at velit totam deserunt perspiciatis, repellendus minus suscipit tempore ullam numquam blanditiis cum dicta!',
                list: [ 
                    'We enrich throught learning.',
                    'Oke potential through individual attention.',
                    'The trusted name for specialized training.',
                    'People teach. People learn. This in whewe they connect.'
                ],
                image: '',
            },
            {
                name: 'Personal Managment',
                title: 'Learn Possibilities',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, iusto? Nostrum, ducimus similique amet hic sunt at velit totam deserunt perspiciatis, repellendus minus suscipit tempore ullam numquam blanditiis cum dicta! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, iusto? Nostrum, ducimus similique amet hic sunt at velit totam deserunt perspiciatis, repellendus minus suscipit tempore ullam numquam blanditiis cum dicta!',
                list: [ 
                    'We enrich throught learning.',
                    'Maximizing potential through individual attention.',
                    'The trusted name for specialized training.',
                    'People teach. People learn. This in whewe they connect.'
                ],
                image: '',
            },
            {
                name: 'Steps To Success',
                title: 'Learn Possibilities',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, iusto? Nostrum, ducimus similique amet hic sunt at velit totam deserunt perspiciatis, repellendus minus suscipit tempore ullam numquam blanditiis cum dicta! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, iusto? Nostrum, ducimus similique amet hic sunt at velit totam deserunt perspiciatis, repellendus minus suscipit tempore ullam numquam blanditiis cum dicta!',
                list: [ 
                    'We enrich throught learning.',
                    'People teach. People learn. This in whewe they connect.'
                ],
                image: '',
            },
            {
                name: 'Knowledge Transfer',
                title: 'Learn Possibilities',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, iusto? Nostrum, ducimus similique amet hic sunt at velit totam deserunt perspiciatis, repellendus minus suscipit tempore ullam numquam blanditiis cum dicta! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, iusto? Nostrum, ducimus similique amet hic sunt at velit totam deserunt perspiciatis, repellendus minus suscipit tempore ullam numquam blanditiis cum dicta!',
                list: [ 
                    'We enrich throught learning.',
                    'Maximizing potential through individual attention.',
                    'The trusted name for specialized training.',
                    'People teach. People learn. This in whewe they connect.'
                ],
                image: '',
            },
        ],

        // POPULAR COURSE SLIDER

        courseSlider: [
            {
                image: './img/main/courses/popular-courses/course-5-f-img',
                title: 'Android Developer',
                author: 'David Sanders',
                price: 'free',
                text: 'Quidem natus. Soluta id, provident, provident hic vero ut numquam assumenda fuga autem exercitationem quae!',
                tags: [
                    {
                        icon: 'fa-user',
                        text: '1',
                    },
                    {
                        icon: 'fa-tag',
                        text: 'PROGRAMMING',
                    }
                ],
            },
            {
                image: './img/main/courses/popular-courses/course-6-f-img',
                title: 'Web Designer',
                author: 'Jennefer Powell',
                price: 'free',
                text: 'Quidem natus. Soluta id, provident, provident hic vero ut numquam assumenda fuga autem exercitationem quae!',
                tags: [
                    {
                        icon: 'fa-user',
                        text: '1',
                    },
                    {
                        icon: 'fa-tag',
                        text: 'PROGRAMMING',
                    }
                ],
            },
            {
                image: './img/main/courses/popular-courses/course-12-f-img',
                title: 'Financial Modeling',
                author: 'Edward Bowman',
                price: '$20',
                text: 'Quidem natus. Soluta id, provident, provident hic vero ut numquam assumenda fuga autem exercitationem quae!',
                tags: [
                    {
                        icon: 'fa-user',
                        text: '1',
                    },
                    {
                        icon: 'fa-tag',
                        text: 'BUSINESS',
                    }
                ],
            },
        ],

        // ADV LIST
        indexAdv: '',
        advList: [
            {
                img: 'h5-client-5',
                imgH: 'h5-client-5-h'
            },
            {
                img: 'h5-client-1',
                imgH: 'h5-client-1-h'
            },
            {
                img: 'h5-client-2',
                imgH: 'h5-client-2-h'
            },
            {
                img: 'h5-client-1',
                imgH: 'h5-client-1-h'
            },
        ],

        // FOOTER LIST
        footerCourses: [
            {
                title: 'Businness English',
                sub: 'Preston Marshall',
            },
            {
                title: 'Social Computing',
                sub: 'David Sanders',
            },
            {
                title: 'Learn Spanish',
                sub: 'Jennie King',
            },
        ],

        footerSupport: [
            'User dashboard',
            'Contact Us',
            'FAQ',
            'Course Offer',
            'Events'
        ],

    },

    methods: {
        getIndexCourse(index) {

            this.courseIndex = index;

        },
        changeH(i) {

            this.indexAdv = i

            if (this.imgHover === false) {
                this.imgHover = true
            } else {
                this.imgHover = false
            }

        }
    },

 }); // <-- END VUE