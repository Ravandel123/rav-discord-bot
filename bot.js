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
  var responseList;
  var i;

  switch (command) 
  {
      //----------------------------------------------------------------------------------------------------------------------------
      //----------am, is, are, will, do, does, should, would------------------------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'am':
      case 'is':
      case 'are':
      case 'will':
      case 'do':
      case 'does':
      case 'should':
			case 'would':
        responseList = ['Yes.', 'No.', 'Definitely.', 'Probably.', 'Probably not.', 'Definitely no.', 'Why not?'];

        rollValue = RandomNumber(10);
        
        if(rollValue == 0)
        {
          message.channel.send('No u.')
        }
        else
        {
          message.channel.send(RandomElement(responseList))
        }

        break;

      //----------------------------------------------------------------------------------------------------------------------------
      //----------choose------------------------------------------------------------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'choose':
        var clearedChoices = message.content.slice(prefix.length + command.length);
        var rollItems = clearedChoices.split('|');

        message.channel.send(RandomElement(rollItems))
        break;

      //------------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------resolve-----------------------------------------------------------
      //------------------------------------------------------------------------------------------------------------------------------
      case 'resolve':
        var afflictionsArray = ['Paranoid', 'Selfish', 'Irrational', 'Fearful', 'Hopeless', 'Abusive', 'Masochistic', 'Rapturous'];
        var virtuesArray = ['Powerful', 'Courageous', 'Stalwart', 'Vigorous', 'Focused'];
        var result;
        who = RecognizeWho(arguments[1], message, command)

        rollValue = RandomNumber(4);;

        if(rollValue == 0)
        {
          rollValue = RandomNumber(virtuesArray.length);
          result = virtuesArray[rollValue];
        }
        else
        {
          rollValue = RandomNumber(afflictionsArray.length);
          result = afflictionsArray[rollValue];
        }

        message.channel.send(who + '\'s resolve is tested...\n' + who + ' is **' + result + '**')
        break;

      //----------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------you-------------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'you':
        responseList = ['No u.', 'No you.', 'You too.', 'Stop it please!', 'Enough of that!'];
        message.channel.send(RandomElement(responseList))
        break; 

      //----------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------dndalign--------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'dndalign':
        responseList = ['Lawful Good.', 'Lawful Neutral.', 'Lawful Evil.', 'Neutral Good.', 'True Neutral.', 'Neutral Evil.', 'Chaotic Evil.', 'Chaotic Neutral.', 'Chaotic Good.'];
        who = RecognizeWho(arguments[1], message, command)
          
        message.channel.send(who + ' is **' + RandomElement(responseList) + '**')
        break;
        
      //----------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------rate------------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'rate':
        var firstPartArray = ['', 'Hmm. I\'d rate that ', 'I\'d give that a ', 'I\'d say '];
        var personifiedFirstPartArray = ['', 'Hmm. I\'d rate you ', 'I\'d give you a ', 'I\'d say '];
        var specialArray = ['I think we need negative scale for that.', 'That is completely out of scale!', 'Better than Twilight.', 'Amazing!', 'Incredible!', 'Why you even wanna rate that?', 'Utter garbage.'];
        var personifiedSpecialArray = ['I think we need negative scale to rate you.', 'You are completely out of scale!', 'Better than Twilight.', ' You are amazing!', 'You are incredible!', 'Why you even wanna rate yourself?', 'You suck lol.', 'You suck.'];

        if (arguments[1] == 'me' || arguments[1] == null)
        {
          firstPartArray = personifiedFirstPartArray;
          specialArray = personifiedSpecialArray;
        }
        
        var response = RandomNumber(10);

        if(response == 0)
        {
          message.channel.send(RandomElement(specialArray))
        }
        else
        {
          message.channel.send(RandomElement(firstPartArray) + RandomNumber(14) + '/10.')
        }
        break;
        
      //---------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------roll-----------------------------------------------------------
      //---------------------------------------------------------------------------------------------------------------------------
      case 'roll':
        var rollItems = arguments[1].split('d');
        var numberOfRolls = rollItems[0];
        var typeOfDice = rollItems[1];
        var rollsIndividuals = '[';
        var rollsTotalAmount = 0;
          
        if(typeOfDice == 'a')
        {
          armellDiceAmount = RollArmelloDices(numberOfRolls);
          
          message.channel.send('Result: [Rot: ' + armellDiceAmount[0] + ', Sword: ' + armellDiceAmount[1] + ', Sun: ' + armellDiceAmount[2] + ', Moon: ' + armellDiceAmount[3] + ', Shield: ' + armellDiceAmount[4] + ', Wyld: ' + armellDiceAmount[5] + ']')
          break;
        }
        else
        {message.channel.send(typeOfDice);
          for (i = 0; i < numberOfRolls; i++)
          {
            
            rollValue = RandomNumber(typeOfDice + 1);
            message.channel.send('Roll value ' + i + ' ' + rollValue);
            rollsIndividuals = rollsIndividuals + rollValue;
            
            if(i != numberOfRolls - 1)
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
        
      //---------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------help-----------------------------------------------------------
      //---------------------------------------------------------------------------------------------------------------------------
      case 'help':
        responseList = ['I think you should visit a doctor.', 'Ravandel is the specialist who you want to talk with about your problems.', 'Electroshock therapy will work wonders for you.',
        'I would advise lobotomy.', 'Chill and eat something good.', 'Go outside.', 'I would advise 8h of sleep.', 'Get commission from Pumpkins. You will be happy and she will be happpy.',
        'I think you need plastic surgery.'];
        message.channel.send(RandomElement(responseList))
        break;
        
      //---------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------peril----------------------------------------------------------
      //---------------------------------------------------------------------------------------------------------------------------
      case 'peril':
        if (arguments[1] == null)
        {
          rollValue = RandomNumber(3);
          rollValue = rollValue + 3;
        }
        else
        {
          rollValue = arguments[1];
        }
        
        armellDiceAmount = RollArmelloDices(rollValue);
        message.channel.send('Peril: [Rot: ' + armellDiceAmount[0] + ', Sword: ' + armellDiceAmount[1] + ', Sun: ' + armellDiceAmount[2] + ', Moon: ' + armellDiceAmount[3] + ', Shield: ' + armellDiceAmount[4] + ', Wyld: ' + armellDiceAmount[5] + ']')
        break;
        
      //---------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------help-----------------------------------------------------------
      //---------------------------------------------------------------------------------------------------------------------------
      case 'version':
        message.channel.send('Version: 1.0')
        break;
      
      //---------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------commands-----------------------------------------------------------
      //---------------------------------------------------------------------------------------------------------------------------
      case 'commands':
        responseList = ['All commands start from h!',
        '**am, is, are, will, do, does, should, would** - bot will simply answer your question',
        '**help** - bot will try to help you with one of his awesome advices, but you might not like some of his responses',
        '**invite** - bot will link his invite link',
        '**roll nDa** - bot will roll [n] Armello dices and will show result afterwards',
        '**roll nDx** - bot will roll [n] dices having [x] sides and will show result afterwards',
        '**rate n** - bot will rate [n], usually on 0-10 scale, but sometimes his answers might be super kind or super rough',
        '**dndalign n** - bot will give DnD alignment for [n]',
        '**choose n1|n2|n3 (...)** - bot will choose one item among all listed',
        '**resolve n** - bot will do resolve check for [n]',
        '**version** - bot will send info about his current version',
        'There are other hidden commands, currently there is 1 more.',
        ];
        
        for (i = 0; i < responseList.length; i++) 
        {
          message.channel.send(responseList[i])
        }
        break;
        
    }
    
    function RandomNumber(max)
    {
      return Math.floor(Math.random() * max);
    }
    
    function RandomElement(listOfElements)
    {
      return listOfElements[Math.floor(Math.random() * listOfElements.length)];
    }
    
    function RecognizeWho(who, message, command)
    {
      if (who == 'me' || who == null)
      {
        return message.author;
      }
        
      return message.content.slice(prefix.length + command.length + 1);
    }
    
    function RollArmelloDices(rolls)
    {
      var armellDicesAmount = [0, 0, 0, 0, 0, 0];
      var val;
        
      for (i = 0; i < rolls; i++) 
      {
        val = Math.floor(Math.random() * 6);
        armellDicesAmount[val]++;
      }
      
      return armellDicesAmount;
    }
	

});




// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
