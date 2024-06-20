
// for ian, store password in a more secure way, https://discordjs.guide/creating-your-bot/#using-environment-variables 
token = "";

// Client is our bot
const { Client, IntentsBitField, ButtonBuilder, ButtonStyle } = require('discord.js')


// Intents is a set of permissions that our bot can use 
// https://discord.com/developers/docs/topics/gateway#list-of-intents
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});


// => is called an arrow function, message is the message that is created
client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }

    if (message.content === 'Logan is so gay') {
        message.reply('Facts!');
    }

    // const btn1 = new ButtonBuilder()
    //     .setLabel('pee pee poo poo')
    //     .setStyle(ButtonStyle.Primary)
    //     .setCustomId('btn1');

    // const btn2 = new ButtonBuilder()
    // .setLabel('pee pee poo poo')
    // .setStyle(ButtonStyle.Danger)
    // .setCustomId('btn2');
});

client.login(`${token}`);