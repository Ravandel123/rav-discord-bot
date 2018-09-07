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
  var arguments = message.content.split(' ');
  var rollValue;

  switch (command) 
  {
      //----------------------------------------------------------------------------------------------------------------------------
      //----------am, is, are, will, do, does---------------------------------------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'am':
      case 'is':
      case 'are':
      case 'will':
      case 'do':
      case 'does':
        var responseList = ['Yes.', 'No.', 'Definitely.', 'Probably.', 'Probably not.', 'Definitely no.'];

        rollValue = Math.floor(Math.random() * 10);
        
        if(rollValue == 0)
        {
          message.channel.send(responseList[Math.floor(Math.random() * responseList.length)])
        }
        else
        {
          message.channel.send('No u.')
        }

        break;

      //----------------------------------------------------------------------------------------------------------------------------
      //----------choose------------------------------------------------------------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'choose':
        var clearedChoices = message.content.slice(prefix.length + command.length);
        var rollItems = clearedChoices.split('|');

        message.channel.send(rollItems[Math.floor(Math.random() * rollItems.length)])
        break;

      //------------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------resolve-----------------------------------------------------------
      //------------------------------------------------------------------------------------------------------------------------------
      case 'resolve':
        var afflictionsArray = ['Paranoid', 'Selfish', 'Irrational', 'Fearful', 'Hopeless', 'Abusive', 'Masochistic', 'Rapturous'];
        var virtuesArray = ['Powerful', 'Courageous', 'Stalwart', 'Vigorous', 'Focused'];
        var result;
        var who = arguments[1];

        if (who == 'me')
        {
          who = message.author;
        }

        rollValue = Math.floor(Math.random() * 4);

        if(rollValue == 0)
        {
          rollValue = Math.floor(Math.random() * virtuesArray.length);
          result = virtuesArray[rollValue];
        }
        else
        {
          rollValue = Math.floor(Math.random() * afflictionsArray.length);
          result = afflictionsArray[rollValue];
        }

        message.channel.send(who + '\'s resolve is tested...\n' + who + ' is **' + result + '**')
        break;  

      //----------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------you-------------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'you':
        var responseList = ['No u', 'No you.', 'You too.'];
        message.channel.send(responseList[Math.floor(Math.random() * responseList.length)])
        break; 

      //----------------------------------------------------------------------------------------------------------------------------
			//------------------------------------------------------------dndalign--------------------------------------------------------
			//----------------------------------------------------------------------------------------------------------------------------
			case 'dndalign':
        var responseList = ['Lawful Good.', 'Lawful Neutral.', 'Lawful Evil.', 'Neutral Good.', 'True Neutral.', 'Neutral Evil.', 'Chaotic Evil.', 'Chaotic Neutral.', 'Chaotic Good.'];
        var who = arguments[1];

        if (who == 'me')
        {
          who = message.author;
        }
        message.channel.send(who + ' is ' + responseList[Math.floor(Math.random() * responseList.length)])
        break;
        
      //----------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------rate------------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'rate':
        var firstPartArray = ['', 'Hmm. I\'d rate that ', 'I\'d give that a ', 'I\'d say '];
        var personifiedFirstPartArray = ['', 'Hmm. I\'d rate you ', 'I\'d give you a ', 'I\'d say '];
        var specialArray = ['I think we need negative scale for that.', 'That is completely out of scale!', 'Better than Twilight.', 'Amazing!', 'Incredible!', 'Why you even wanna rate that?', 'Utter garbage.'];
        var personifiedSpecialArray = ['I think we need negative scale to rate you.', 'You are completely out of scale!', 'Better than Twilight.', ' You are amazing!', 'You are incredible!', 'Why you even wanna rate yourself?', 'You suck lol.', 'You suck.'];

        if (arguments[1] == 'me')
        {
          firstPartArray = personifiedFirstPartArray;
          specialArray = personifiedSpecialArray;
        }
        
        var response = Math.floor(Math.random() * 10);

        if(response == 0)
        {
          message.channel.send(specialArray[Math.floor(Math.random() * specialArray.length)])
        }
        else
        {
          message.channel.send(firstPartArray[Math.floor(Math.random() * firstPartArray.length)] + Math.floor(Math.random() * 14) + '/10')
        }
        break;

      //---------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------roll-----------------------------------------------------------
      //---------------------------------------------------------------------------------------------------------------------------
      case 'roll':
        var rollItems = arguments[1].split('d');
        var numberOfRolls = rollItems[0];
        var typeOfDice = rollItems[1];
        var i;
        var rollsIndividuals = '[';
        var rollsTotalAmount = 0;
          
        if(typeOfDice == 'a')
        {
          var armellDiceAmount = [0, 0, 0, 0, 0, 0];
        
          for (i = 0; i < numberOfRolls; i++) 
          {
            rollValue = Math.floor(Math.random() * 6);
            armellDiceAmount[rollValue]++;
          }
          
          message.channel.send('Result: [Rot: ' + armellDiceAmount[0] + ', Sword: ' + armellDiceAmount[1] + ', Sun: ' + armellDiceAmount[2] + ', Moon: ' + armellDiceAmount[3] + ', Shield: ' + armellDiceAmount[4] + ', Wyld: ' + armellDiceAmount[5] + ']')
          break;
        }
        else
        {
          for (i = 0; i < numberOfRolls; i++)
          {
            rollValue = Math.floor(Math.random() * typeOfDice + 1);
            rollsIndividuals = rollsIndividuals + rollValue;
            
            if(i != numberOfRolls)
            {
              rollsIndividuals = rollsIndividuals + ',';
            }
            
            rollsTotalAmount = rollsTotalAmount + rollValue;
          }
        }
        message.channel.send('Result: ' + rollsIndividuals + '] Total amount: ' + rollsTotalAmount)
        break;

    //---------------------------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------invite---------------------------------------------------------
    //---------------------------------------------------------------------------------------------------------------------------
    case 'invite':
      message.channel.send('https://discordapp.com/oauth2/authorize?client_id=485910048032161792&scope=bot')
      break;
		  
  }
});


// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
