const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});


const prefix = "h!";

client.on("message", message => {
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  switch (command) 
  {
      //----------------------------------------------------------------------------------------------------------------------------
	  //------------------------------------------------------------am, is, are, will, do, does-------------------------------------
	  //----------------------------------------------------------------------------------------------------------------------------
      case 'am':
      case 'is':
      case 'are':
      case 'will':
      case 'do':
      case 'does':
        var responseList = ['Yes.', 'No.', 'Definitely.', 'Probably.', 'Probably not.', 'Definitely no.'];
      
        message.channel.send(responseList[Math.floor(Math.random() * responseList.length)])
        break;
          
      //----------------------------------------------------------------------------------------------------------------------------
	  //------------------------------------------------------------choose----------------------------------------------------------
	  //----------------------------------------------------------------------------------------------------------------------------
      case 'choose':
        var clearedChoices = message.slice(prefix.length + command.length);
        var rollItems = clearedChoices.split('|');

        message.channel.send(rollItems[Math.floor(Math.random() * rollItems.length)])
        break;
          
          
          
          
          
          
          
          
          
          
          
          
    }
});
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
