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

        courseIndex: 0,
        infoList: [
            {
                name: 'What We Do',
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

    },
     
    methods: {
        getIndexCourse(index) {

            this.courseIndex = index;

        },
    },

 }); // <-- END VUE