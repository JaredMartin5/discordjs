const discord = require('discord.js'); 
  module.exports = {
	name: 'user-info',
	description: 'Display info about yourself!',
	async execute(interaction) {
		let embed = new discord.MessageEmbed()
		return interaction.reply(`Your username: ${interaction.user.username}\nYour ID: ${interaction.user.id}\n Your Avatar: ${interaction.user.displayAvatarURL()} `);
	},
};