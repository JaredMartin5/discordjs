const weather = require('weather-js');
const discord = require('discord.js');

module.exports = {
    name: 'weather',
    description: 'Search for the current weather in your desired city.',
    options: [{
        name: 'input',
        type: 'STRING',
        description: 'City, State',
        required: true,
    }],
    async execute(interaction) {
        const value = interaction.options.getString('input');

        weather.find({ search: value, degreeType: 'F' }, function (err, result) {
            try {
                let embed = new discord.MessageEmbed()
                    .setTitle(`Weather - ${result[0].location.name}`)
                    .setColor("#ff2050")
                    .setDescription("Temperature units can may be differ some time")
                    .addField("Temperature", `${result[0].current.temperature} F`, true)
                    .addField("Sky Text", result[0].current.skytext, true)
                    .addField("Humidity", result[0].current.humidity, true)
                    .addField("Wind Speed", result[0].current.windspeed, true)
                    .addField("Observation Time", result[0].current.observationtime, true)
                    .addField("Wind Display", result[0].current.winddisplay, true)
                    .setThumbnail(result[0].current.imageUrl);
                console.log(embed)
                return interaction.reply({ embeds: [embed] })
            } catch (err) {
                return interaction.reply("Not a valid location.");
            }
        });
    },

}