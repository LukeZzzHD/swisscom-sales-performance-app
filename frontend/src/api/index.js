const API = {
    USERS: {
        SIGNIN: 'localhost:4000/api/users/signin',
        SIGNUP: 'localhost:4000/api/users/signup',
        VERIFY: 'localhost:4000/api/users/verify',
        VERIFY_ADMIN: 'localhost:4000/api/users/verifyAdmin'
    },
    SALESPERFORMANCE: {
        INCREASE: performance_name => `localhost:4000/api/salesperformance/increase/${performance_name}`,
        DECREASE: performance_name => `localhost:4000/api/salesperformance/decrease/${performance_name}`,
        WEEKLY: 'localhost:4000/api/salesperformance/weekly',
        MONTHLY: 'localhost:4000/api/salesperformance/monthly',
        YEARLY: 'localhost:4000/api/salesperformance/yearly'
    }
};

export default API;
