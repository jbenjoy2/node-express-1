const fs = require('fs');
const process = require('process');
const axios = require('axios');

function writeToFile(file, data) {
	fs.writeFile(file, data, 'utf8', (err) => {
		if (err) {
			console.error(`Cannot write file ${file}: ${err}`);
			process.exit(1);
		} else {
			console.log(`Wrote to ${file}`);
		}
	});
}

async function getURLData(url) {
	try {
		let res = await axios.get(url);
		return res.data;
	} catch (error) {
		console.error(`Couldn't download ${url}`);
	}
}

function createName(url) {
	if (url.slice(0, 5) === 'https') {
		url = url.slice(8);
	} else if (url.slice(0, 4) === 'http') {
		url = url.slice(7);
	}

	if (url.slice(0, 3) === 'www') {
		url = url.slice(4);
	}
	if (url.indexOf('/') !== -1) {
		url = url.slice(0, url.indexOf('/'));
	}
	return url;
}

function writeData(input) {
	fs.readFile(input, 'utf8', async (err, data) => {
		if (err) {
			console.error(`Error reading ${input}: ${err}`);
			process.exit(1);
		} else {
			let arr = data.split('\n');
			for (let url of arr) {
				let name = createName(url);
				let data = await getURLData(url);
				if (!(data instanceof Error)) {
					writeToFile(name, data);
				}
			}
		}
	});
}

writeData(process.argv[2]);
