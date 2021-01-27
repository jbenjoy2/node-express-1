const express = require('express');
const axios = require('axios');
const ExpressError = require('./expressError');
const app = express();

app.use(express.json());

app.post('/', async function(req, res, next) {
	try {
		// declare results array
		let results = [];

		// asyncrhronously get all of the developer objects and add them to array
		for (let dev of req.body.developers) {
			let resp = await axios.get(` https://api.github.com/users/${dev}`);
			results.push(resp);
		}
		// map resolved promises to new array called 'out'
		let out = results.map((r) => ({ name: r.data.name, bio: r.data.bio }));
		// return stringified version of out (can't just use res.json since it has trouble converting circular reference )
		return res.send(JSON.stringify(out));
	} catch (err) {
		return next(err);
	}
});

// 404 error
app.use((req, res, next) => {
	const err = new ExpressError('Not Found', 404);
	return next(err);
});

// generic error handler
app.use((err, req, res, next) => {
	status = err.status || 500;
	return res.status(status).json({ error: err });
});

module.exports = app;
