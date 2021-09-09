const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Replies with Pong!',
	async execute(interaction) {

		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('CLICK ME!')
					.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
					.setStyle('LINK')
			);

		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('CLICK THIS TITLE!')
			.setURL('https://popcat.click/')
			.setDescription('Just click the title to see the video.');

		await interaction.reply({ content: 'Pong!', ephemeral: false, embeds: [embed], components: [row] });

	},
};