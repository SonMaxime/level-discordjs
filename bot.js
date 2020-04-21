const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
 
client.on('ready', () => {
console.log('Bot: Hosting ' + `${client.users.size}` + ' utilisateurs, dans ' + `${client.channels.size}` + 'salons et ' + `${client.guilds.size}` + ' serveurs.');
    client.user.setStatus('do not disturb')
    client.user.setPresence({
        game: {
            name: '.level | by SonMaxime',
            type: "STREAMING",
            imageUrl: "https://www.heroku.com/"
        }
    });
});
 
client.on('message', message => {
 
var userData = JSON.parse(fs.readFileSync('jsonPointID/level.json', 'utf-8'));   
var sender = message.author;
var msg = message.content.toUpperCase();
var prefix = '.'
 
 
if(msg === prefix + 'level') {
    message.channel.send('Vous avez envoyé **' + userData[sender.id].messagesSent + '** messages !' )
}
 
 
if (!userData[sender.id]) userData[sender.id] = {
    messageSent: 0
}
 
userData[sender.id].messagesSent++;
 
 
 
fs.writeFile('jsonPointID/level.json', JSON.stringify(userData), (err) => {
    if (err) console.error(err);
});
 
});
 
client.login('token');
