const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Replies with pong.'),
    new SlashCommandBuilder().setName('pong').setDescription('Replies with ping.'),
    new SlashCommandBuilder().setName('animal').setDescription('Gives information about different animals.'),
    new SlashCommandBuilder().setName('userinfo').setDescription('Replies with user info.'),
    new SlashCommandBuilder().setName('eight-ball').setDescription('Seek advice from the 8-Ball!').addStringOption(option =>
        option.setName('input')
        .setDescription('The question to ask the ball')
        .setRequired(true)),
    new SlashCommandBuilder().setName('weather').setDescription('Seek advice from the 8-Ball!').addStringOption(option =>
        option.setName('location')
        .setDescription('Search for the current weather in your desired city.')
        .setRequired(true))
]
    .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        );

        console.log('Successfully registered application commands.');
    } catch (error) {
        console.error(error);
    }
})();
