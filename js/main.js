/**********************
 * iACCADEMY
 *********************/

 const iAccademy = new Vue ({

    el: '#iAccademy',

    data: {

        // HEADER / NABAR
        scrolled: false,

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

        // HERO SLIDER
        heroIndex: 0,
        heroSlider: [
            {
                image: 'h5-slide-3-background',
                title: 'Contemporary Ideas',
                text: 'Lorem ipsum dolor, elit. Sed odio ipsam iste in esse quo eos numquam ipsa ullam repellendus, alias praesentium quis atque ex ducimus deserunt illum!',
                button: 'REGISTER NOW',
            },
            {
                image: 'h5-slide-3-background',
                title: 'Contemporary Ideas2',
                text: ' ipsam iste in esse quo eos numquam ipsa ullam repellendus, alias praesentium quis atque ex ducimus deserunt illum!',
                button: 'REGISTER NOW',
            },
            {
                image: 'h5-slide-3-background',
                title: 'Contemporary Ideas3',
                text: 'Lorem ipsum dolor, elit.Lorem ipsum dolor, elit.Lorem ipsum dolor, elit.Lorem ipsum dolor, elit. Sed odio ipsam iste in esse quo eos numquam ipsa ullam repellendus, alias praesentium quis atque ex ducimus deserunt illum!',
                button: 'REGISTER NOW',
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

        // STUDENTS SLIDER
        studentsIndex: 0,
        studentSlider: [
            {
                image: 'testimonials-standard-2',
                text: 'consectetur adipisicing elit. Ducimus obcaecati qui illum deleniti iste repudiandae dolor, sit amet consectetur psam ea libero iste in esse quo eos numquam ipsa ullam repellendus, alias praesentium quis atque ex ducimus deserunt illum!',
                name: 'Johan Collins',
                type: 'STUDENT',
            },
            {
                image: 'testimonials-standard-2',
                text: 'consectetur adipisicing elit. Ducimus obcaecati qui illum deleniti iste repudiandae dolor, sit amet consectetur psam ea libero iste in esse quo eos numquam ipsa ullam repellendus, alias praesentium quis atque ex ducimus deserunt illum!',
                name: 'Johan Collins2',
                type: 'TEACHER',
            },
            {
                image: 'testimonials-standard-2',
                text: 'consectetur adipisicing elit. Ducimus obcaecati qui illum deleniti iste repudiandae dolor, sit amet consectetur psam ea libero iste in esse quo eos numquam ipsa ullam repellendus, alias praesentium quis atque ex ducimus deserunt illum!',
                name: 'Johan Collins3',
                type: 'DESIGNER',
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
        coursesIndex: 0,
        courseSlider: [
            {
                slider: [
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
            },
            {
                slider: [
                    {
                        image: './img/main/courses/popular-courses/course-5-f-img',
                        title: 'Web Developer',
                        author: 'Andrea Sancez',
                        price: '$16',
                        text: 'provident hic vero ut numquam assumenda fuga autem exercitationem quae!',
                        tags: [
                            {
                                icon: 'fa-user',
                                text: '4',
                            },
                            {
                                icon: 'fa-tag',
                                text: 'PROGRAMMING',
                            },
                            {
                                icon: 'fa-tag',
                                text: 'BUSINESS',
                            },
                        ],
                    },
                    {
                        image: './img/main/courses/popular-courses/course-6-f-img',
                        title: 'Web Designer',
                        author: 'Jennefer Powell',
                        price: '$20',
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
                        title: 'Designer',
                        author: 'Edward',
                        price: '$90',
                        text: 'Quidem natusnatusnatusnatusnatus. Soluta id, provident, provident hic vero ut numquam assumenda fuga autem exercitationem quae!',
                        tags: [
                            {
                                icon: 'fa-user',
                                text: '4',
                            },
                            {
                                icon: 'fa-tag',
                                text: 'DESING',
                            }
                        ],
                    },
                ],
            },
            {
                slider: [
                    {
                        image: './img/main/courses/popular-courses/course-5-f-img',
                        title: 'Android Developer',
                        author: 'David Sanders',
                        price: '$89',
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
                        price: '$67',
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

    created() {
        this.startSlider()
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

        },
        navCircleHero( index ) {
            this.heroIndex = index
        },
        navCircleStudents( index ) {
            this.studentsIndex = index
        },
        navCircleCourses( index ) {
            this.coursesIndex = index
        },
        startSlider() {
            this.intervalId = setInterval(() => {
                this.heroIndex ++;

                if ( this.heroIndex > this.heroSlider.length - 1 ) {
                    this.heroIndex = 0;
                }
                this.studentsIndex ++;

                if ( this.studentsIndex > this.studentSlider.length - 1 ) {
                    this.studentsIndex = 0;
                }
                this.coursesIndex ++;

                if ( this.coursesIndex > this.courseSlider.length - 1 ) {
                    this.coursesIndex = 0;
                }
            }, 5000);
        },
        stopSlider() {
            clearInterval(this.intervalId);
        },
    },
    mounted(){
        // HEADER ON SCROLL
        window.document.onscroll = () => {
            let navbar = document.getElementsByClassName('main-header')[0];
            if(window.scrollY > navbar.offsetTop){
              this.scrolled = true;
              } else {
              this.scrolled = false;
            }
          }
        },
 }); // <-- END VUE