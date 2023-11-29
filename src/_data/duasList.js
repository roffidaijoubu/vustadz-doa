const fs = require("fs");
const path = require("path");

const duasDir = path.join(__dirname, "duas");
const duaFiles = fs.readdirSync(duasDir);

module.exports = duaFiles.map((file) => {
	return {
		name: path.basename(file, ".json"),
		data: require(`./duas/${file}`),
	};
});
