const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token, guildId } = require('./config.json');

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
	if (!interaction.isCommand()) return;

	if (!client.commands.has(interaction.commandName)) return;

	try {
		await client.commands.get(interaction.commandName).execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});


client.on('messageCreate', async message => {
	if (!client.application?.owner) await client.application?.fetch();

	if (message.content.toLowerCase() === '!deploy' && message.author.id === client.application?.owner.id) {
		const data = {
			name: 'ping',
			description: 'Replies with Pong!',

		};

		const command = await client.guilds.cache.get(guildId)?.commands.create(data);
		// 		command.delete()
		//   .then(console.log)
		//   .catch(console.error);
		console.log(command);
	}
});
client.login(token);





//const PREFIX = "!";
// client.on('messageCreate', (message) => {

//     if (message.author.bot) return;

//     if (message.content.startsWith(PREFIX)) {
//         const [CMD_NAME, ...args] = message.content
//             .trim()
//             .substring(PREFIX.length)
//             .split(/\s+/);
//         if (CMD_NAME === 'kick') {
//             if (args.length === 0) return message.reply("Need to provide an user.");
//             if (!message.member.permissions.has('KICK_MEMBERS'))
//                 return message.reply('you do not have permission to kick people.')

//             const member = message.mentions.members.first();

//             if (!member) return message.reply("Please mention a valid member of this server");
//             if (!member.kickable) return message.reply("I cannot kick this member!");

//             member.kick();
//         }
//     }

// });





