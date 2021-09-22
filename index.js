const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token, guildId } = require('./config.json');
const fetch = require('node-fetch')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log(`${client.user.tag} is logged in.`);
});

client.on('interactionCreate', async interaction => {

	if (interaction.customId === 'select') {
		let value = interaction.values[0];
		value = value.split(" ");
		fetch(`https://some-random-api.ml/animal/${value[0]}`)
			.then(res => res.json())
			.then(json => {
				if (value[1] === "image") {
					interaction.update({ content: json.image, components: [] });
				} else {
					interaction.update({ content: json.fact, components: [] });
				}
			});
	}

	if (!interaction.isCommand() || !client.commands.has(interaction.commandName)) return;

	try {
		await client.commands.get(interaction.commandName).execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(token);