const discord = require('discord.js'); 

  module.exports = {
	name: 'userinfo',
	description: 'Display info about yourself!',
	async execute(interaction) {
		const isBot = "Is not a bot";
		if(interaction.user.bot){
			isBot = "Is a bot"
		}

		let embed = new discord.MessageEmbed()
		.setTitle(`${interaction.user.username}#${interaction.user.discriminator}`)
		.setURL(`${interaction.user.displayAvatarURL()}`)
		.setThumbnail(`${interaction.user.displayAvatarURL()}`)
		.setAuthor(`${interaction.user.username}#${interaction.user.discriminator}` , `${interaction.user.displayAvatarURL()}`)
		.addField("ID", interaction.user.id, true)
		.addField("Bot", isBot, true)
		return interaction.reply({ embeds: [embed] })
	},
};