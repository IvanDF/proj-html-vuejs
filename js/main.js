/**********************
 * iACCADEMY
 *********************/

 const iAccademy = new Vue ({

     el: '#iAccademy',

     data: {

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

     },
     
     methods: {},

 }); // <-- END VUE