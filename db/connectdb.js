const mongoose = require('mongoose');

exports.connectdb = () => {
	mongoose.connect(process.env.MONGOURI, (err) => {
		if (err) return err.message;
		console.log('connected to db');
	});
};
