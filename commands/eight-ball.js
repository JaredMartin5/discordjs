module.exports = {
	name: 'eight-ball',

	async execute(interaction) {
		let answers = [
			' It is Certain.',
			'It is decidedly so.',
			'Without a doubt.',
			'Yes definitely.',
			'You may rely on it.',
			'As I see it, yes.',
			'Most likely.',
			'Outlook good.',
			'Yes.',
			'Signs point to yes.',
			'Reply hazy, try again.',
			'Ask again later.',
			'Better not tell you now.',
			'Cannot predict now.',
			'Concentrate and ask again.',
			"Don't count on it.",
			'My reply is no.',
			'My sources say no.',
			'Outlook not so good.',
			'Very doubtful.'
		]

		const randomAnswer = Math.floor(Math.random() * answers.length);
		const value = interaction.options.getString('input');

		if (value.substr(-1) === "?") {
			return interaction.reply(answers[randomAnswer]);
		} else {
			return interaction.reply('Needs to be a question!');
		}

	},
};