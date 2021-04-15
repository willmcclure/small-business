const state = {
    listings: [
        {
            "id": 1,
            "name": "The Austin Shaker",
            "description": "Liqour Store",
            "address": "420 N Pleasant Valley Rd B",
            "hours": "11am - 9pm",
            "url": "https://www.theaustinshaker.com/",
            "phone": "512-551-8108"
        },
        {
            "id": 2,
            "name": "Los Comales",
            "description": "Festive cantina with vibrant decor specializing in standard Tex-Mex offerings & happy hour deals.",
            "address": "2136 E 7th St, Austin, TX 78702",
            "hours": "11am - 9pm",
            "url": "https://loscomalesatx.com/",
            "phone": "(512) 480-9358"
        },
        {
            "id": 3,
            "name": "The University of Texas at Austin",
            "description": "The University of Texas at Austin, shortened to UT Austin, UT, or Texas, is a public research university in Austin, Texas and the flagship institution of the University of Texas System.",
            "address": "Austin, TX 78712",
            "hours": "24 hours a day",
            "url": "https://www.utexas.edu/",
            "phone": "512-555-5555"
        },
        {
            "id": 4,
            "name": "Big Commerce Headquarters",
            "description": "BigCommerce is a public technology company and provides a SaaS ecommerce platform.",
            "address": "11305 Four Points Drive. Building 2, 3rd Floor. Austin, Texas 78726",
            "hours": "24 hours a day",
            "url": "https://www.bigcommerce.com/",
            "phone": "412-555-5555"
        },
        {
            "id": 5,
            "name": "Texas State Capitol",
            "description": "The Texas State Capitol is the capitol building and seat of government of the American state of Texas.",
            "address": "1100 Congress Ave, Austin, TX 78701",
            "hours": "24 hours a day",
            "url": "https://tspb.texas.gov/plan/tours/tours.html",
            "phone": "512-555-5555"
        }
    ],

    user: [{
        loggedIn: false,
        username: '',
        password: ''
    }]
}

export default state