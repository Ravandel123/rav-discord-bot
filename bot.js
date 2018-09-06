const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 2) == 'h!') 
	{
        var args = message.substring(2).split(' ');
        var cmd = args[0];
        var cmd2 = args[1];
       
        args = args.splice(1);
		
		var rollValue;

    switch(cmd) 
		{
			//----------------------------------------------------------------------------------------------------------------------------
			//------------------------------------------------------------rate------------------------------------------------------------
			//----------------------------------------------------------------------------------------------------------------------------
			case 'rate':
			var firstPartArray = ['', 'Hmm. I\'d rate that ', 'I\'d give that a ', 'I\'d say '];
			var personifiedFirstPartArray = ['', 'Hmm. I\'d rate you ', 'I\'d give you a ', 'I\'d say '];
			var specialArray = ['I think we need negative scale for that.', 'That is completely out of scale!', 'Better than Twilight.', 'Amazing!', 'Incredible!', 'Why you even wanna rate that?', 'Utter garbage.'];
			var personifiedSpecialArray = ['I think we need negative scale to rate you.', 'You are completely out of scale!', 'Better than Twilight.', ' You are amazing!', 'You are incredible!', 'Why you even wanna rate yourself?', 'You suck lol.', 'You suck.'];
			
			var response = Math.floor(Math.random() * 10);
			
			if (cmd2 == 'me')
			{
				firstPartArray = personifiedFirstPartArray;
				specialArray = personifiedSpecialArray;
			}
			
			if(response == 0)
			{
				bot.sendMessage({
					to: channelID,
					message: specialArray[Math.floor(Math.random() * specialArray.length)]
				});
			}
			else
			{
				bot.sendMessage({
					to: channelID,
					message: firstPartArray[Math.floor(Math.random() * firstPartArray.length)] + Math.floor(Math.random() * 14) + '/10'
				});
			}
            break;
			
			//----------------------------------------------------------------------------------------------------------------------------
			//------------------------------------------------------------am, is, are, will-----------------------------------------------
			//----------------------------------------------------------------------------------------------------------------------------
			case 'am':
			case 'is':
			case 'are':
			case 'will':
			var responseList = ['Yes.', 'No.', 'Definitely.', 'Probably.', 'Probably not.', 'Definitely no.'];
			
            bot.sendMessage({
                to: channelID,
                message: responseList[Math.floor(Math.random() * responseList.length)]
            });
            break;
			
			//----------------------------------------------------------------------------------------------------------------------------
			//------------------------------------------------------------choose----------------------------------------------------------
			//----------------------------------------------------------------------------------------------------------------------------
			case 'choose':
			var clearedChoices = message.substring(9, message.length);
			
			var rollItems = clearedChoices.split('|');

            bot.sendMessage({
                to: channelID,
                message: rollItems[Math.floor(Math.random() * rollItems.length)]
            });
            break;
			
			//----------------------------------------------------------------------------------------------------------------------------
			//------------------------------------------------------------dndalign--------------------------------------------------------
			//----------------------------------------------------------------------------------------------------------------------------
			case 'dndalign':
			var responseList = ['Lawful Good.', 'Lawful Neutral.', 'Lawful Evil.', 'Neutral Good.', 'True Neutral.', 'Neutral Evil.', 'Chaotic Evil.', 'Chaotic Neutral.', 'Chaotic Good.'];
			
			var who = cmd2;
			
			if (cmd2 == 'me')
			{
				who = user;
			}
			
            bot.sendMessage({
                to: channelID,
                message: who + ' is ' + responseList[Math.floor(Math.random() * responseList.length)]
            });
            break;
			
			//----------------------------------------------------------------------------------------------------------------------------
			//------------------------------------------------------------you-------------------------------------------------------------
			//----------------------------------------------------------------------------------------------------------------------------
			case 'you':
			var responseList = ['No u', 'No you.', 'You too.'];
			
            bot.sendMessage({
                to: channelID,
                message: responseList[Math.floor(Math.random() * responseList.length)]
            });
            break;
			
			//------------------------------------------------------------------------------------------------------------------------------
			//------------------------------------------------------------resolve-----------------------------------------------------------
			//------------------------------------------------------------------------------------------------------------------------------
			case 'resolve':
			var afflictionsArray = ['Paranoid', 'Selfish', 'Irrational', 'Fearful', 'Hopeless', 'Abusive', 'Masochistic', 'Rapturous'];
			var virtuesArray = ['Powerful', 'Courageous', 'Stalwart', 'Vigorous', 'Focused'];
			var result;
			var who = cmd2;
			
			if (cmd2 == 'me')
			{
				who = user;
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

			bot.sendMessage({
				to: channelID,
                message: who + '\'s resolve is tested...\n' + who + ' is **' + result + '**'
            });		
            break;
		  //---------------------------------------------------------------------------------------------------------------------------
		  //------------------------------------------------------------roll-----------------------------------------------------------
		  //---------------------------------------------------------------------------------------------------------------------------
	      case 'roll':
		  var rollItems = cmd2.split('d');
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
			
			bot.sendMessage({
					to: channelID,
					message: 'Result: [Rot: ' + armellDiceAmount[0] + ', Sword: ' + armellDiceAmount[1] + ', Sun: ' + armellDiceAmount[2] + ', Moon: ' + armellDiceAmount[3] + ', Shield: ' + armellDiceAmount[4] + ', Wyld: ' + armellDiceAmount[5] + ']'
				});		
				break;
			
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
			
			bot.sendMessage({
					to: channelID,
					message: 'Result: ' + rollsIndividuals + '] Total amount: ' + rollsTotalAmount
				});		
				break;
		  }
        }
     }
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
