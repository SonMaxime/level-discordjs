const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");
const embed = new Discord.RichEmbed();
 
bot.on('ready', () => {
  console.log(`Connecté en tant que ${bot.user.tag}!`);
});
 
bot.on('message', message => {
 
var userData = JSON.parse(fs.readFileSync('jsonPointID/level.json', 'utf-8'));   
var sender = message.author;
var msg = message.content.toUpperCase();
var prefix = '/'
 
 
if(msg === prefix + 'level') {
    message.channel.send({embed: {
    const embed = new Discord.RichEmbed()
  .setTitle("Vous avez envoyé **' + userData[sender.id].messagesSent + '** messages !")
  .setColor(0x00AE86)
  .setDescription("Niveau : En cours de dev/?")
 
  message.channel.send({embed});
 
 
if (!userData[sender.id]) userData[sender.id] = {
    messageSent: 0
}
 
userData[sender.id].messagesSent++;
 
 
 
fs.writeFile('jsonPointID/level.json', JSON.stringify(userData), (err) => {
    if (err) console.error(err);
});
 
});
 
bot.login('NjExNDgzMTkwMTAzNjM4MDI5.XXZkFQ.jsLG5Bkq6VkrAG033qY9grdtZB0');
