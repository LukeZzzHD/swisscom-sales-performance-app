const API = {
    USERS: {
        SIGNIN: '/api/users/signin',
        SIGNUP: '/api/users/signup',
        VERIFY: '/api/users/verify',
        VERIFY_ADMIN: '/api/users/verifyAdmin'
    },
    SALESPERFORMANCE: {
        INCREASE: performance_name => `/api/salesperformance/increase/${performance_name}`,
        DECREASE: performance_name => `/api/salesperformance/decrease/${performance_name}`,
        WEEKLY: '/api/salesperformance/weekly',
        MONTHLY: '/api/salesperformance/monthly',
        YEARLY: '/api/salesperformance/yearly'
    }
};

export default API;
