const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Replies with Pong!',
	async execute(interaction) {
		if (interaction.commandName === 'ping') {
			const row = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setLabel('CLICK ME!')
						.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
						.setStyle('LINK'),
				);
	
			await interaction.reply({ content: 'Pong!', components: [row] });
		}
	},
};