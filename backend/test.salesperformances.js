// TEST
// Add api route for adding / removing salesperformance entries
/*
    URLs:
        /api/salesperformance/increase/:performance_name?username=<username>
        /api/salesperformance/decrease:performance_name?username=<username>
        /api/salesperformance/weekly?username=<username>
        /api/salesperformance/monthly?username=<username>
        /api/salesperformance/yearly?username=<username>
            ->  all of these get requests need to contain a token in the request.
                This token needs to be from an admin or from the loggedin user
                The slaesperformance database object is then queried by the username url param.
                It needs to be checked if the username url param is from the same user as the token is, if the token is NOT an admin token

                The weekly monthly yearly routes can then be filtered with the performances array which contains an object with a date property
*/

const mongoose = require('mongoose');
const salesperformanceModel = require('./models/salesperformance.model');
const userModel = require('./models/user.model');

let values = [
	{ name: 'mobile', goalWeekly: 4, goalMonthly: 16, goalYearly: 192 },
	{ name: 'dslandtv', goalWeekly: 7, goalMonthly: 28, goalYearly: 5416 },
	{ name: 'accessory', goalWeekly: 1354, goalMonthly: 5416, goalYearly: 64992 },
	{ name: 'aoit', goalWeekly: 372, goalMonthly: 1488, goalYearly: 17856 },
	{ name: 'internetsecurity', goalWeekly: 0, goalMonthly: 0, goalYearly: 0 },
	{ name: 'myserviceabo', goalWeekly: 0, goalMonthly: 0, goalYearly: 0 },
	{ name: 'protectionplus', goalWeekly: 0, goalMonthly: 0, goalYearly: 0 }
];

const writeSPOtoDBTest = async function() {
	await mongoose.connect('mongodb://127.0.0.1:27017/salesperformance', { useNewUrlParser: true, useUnifiedTopology: true });
	userModel
		.findOne({ username: 'LukeZzz' })
		.then(user => {
			values.forEach(obj => {
				let tempModel = new salesperformanceModel({
					user,
					name: obj.name,
					goalWeekly: obj.goalWeekly,
					goalMonthly: obj.goalMonthly,
					goalYearly: obj.goalYearly,
					performances: []
				});

				tempModel
					.save()
					.then(spo => {
						console.log(`Created spo: ${JSON.stringify(spo)}`);
					})
					.catch(err => console.log(err));
			});
		})
		.catch(err => console.log(err));
};

writeSPOtoDBTest();
