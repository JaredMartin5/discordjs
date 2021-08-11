//const weather = require('weather-js');

module.exports = {
	name: 'ping',
	description: 'Replies with Pong!',
	async execute(interactionCreate) {
		return interactionCreate.reply('Pong!');
	},
};