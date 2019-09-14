const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");
 
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});
 
bot.on('message', message => {
 
var userData = JSON.parse(fs.readFileSync('jsonPointID/level.json', 'utf-8'));   
var sender = message.author;
var msg = message.content.toUpperCase();
var prefix = '>'
 
 
if(msg === prefix + 'USERSTATS') {
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
 
bot.login('token');
