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

     },
     
     methods: {},

 }); // <-- END VUE