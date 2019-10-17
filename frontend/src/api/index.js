const API = {
    USERS: {
        SIGNIN: '/api/users/signin',
        SIGNUP: '/api/users/signup',
        VERIFY: '/api/users/verify',
        VERIFY_ADMIN: '/api/users/verifyAdmin',
    },
    SALESPERFORMANCE: {
        INCREASE: (performance_name, username) =>
            `/api/salesperformance/increase/${performance_name}?username=${username}`,
        DECREASE: (performance_name, username) =>
            `/api/salesperformance/decrease/${performance_name}?username=${username}`,
        ALL_PERFORMANCES: '/api/salesperformance/allPerformances',
        UPDATE_GOALS: username =>
            `/api/salesperformance/updateGoals?username=${username}`,
    },
};

export default API;
