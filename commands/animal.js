const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    name: 'animal',
    description: 'Get an image or fact about an animal.',
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select')
                    .setPlaceholder('Nothing selected')
                    .addOptions([
                        {
                            label: 'cat image',
                            description: 'Get an image of a cat',
                            value: 'cat image',
                        },
                        {
                            label: 'dog image',
                            description: 'Get an image of a dog',
                            value: 'dog image',
                        },
                        {
                            label: 'cat fact',
                            description: 'Get a fact about a cat',
                            value: 'cat fact',
                        },
                        {
                            label: 'dog fact',
                            description: 'Get an fact about a dog',
                            value: 'dog fact',
                        }

                    ]),
            );
        await interaction.reply({ content: 'Choose an animal', components: [row] });
    },
};