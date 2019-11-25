const Discord = require('discord.js');
const clientDiscord = new Discord.Client
const Commande = "!commande"
module.exports.run = (clientDiscord, message, args) => {
    const str = message.content.substring(Commande.length).trim();
    const exampleEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
	.setAuthor('Commande', 'http://www.belstaffjacketsoutlet.co.uk/wp-content/uploads/2019/09/cropped-discordies1.png')
	.setDescription(message.author.tag + " à commandé " + str + " !Tu seras notifié dés que ta commande sera prête 😉")
	.setThumbnail('http://www.belstaffjacketsoutlet.co.uk/wp-content/uploads/2019/09/cropped-discordies1.png')
	.addBlankField()
	.setTimestamp()
	.setFooter('Titan Bot', 'http://www.belstaffjacketsoutlet.co.uk/wp-content/uploads/2019/09/cropped-discordies1.png');
    clientDiscord.channels.get ("648123065708052480").send (exampleEmbed);
   };
module.exports.help = {
    name: 'commande'
};