module.exports = {
	name: 'pong',
	description: 'Replies with Ping!',
	async execute(interaction) {
		return interaction.reply('Ping!');
	},
};