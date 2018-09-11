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
      //----------am, is, are, will, do, does, should, would, was, were-------------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'am':
      case 'is':
      case 'are':
      case 'will':
      case 'do':
      case 'does':
      case 'should':
      case 'would':
      case 'was':
      case 'were':
        responseList = ['Yes.', 'No.', 'Definitely.', 'Probably.', 'Probably not.', 'Definitely no.'];

        rollValue = Math.floor(Math.random() * 10);
        
        if(rollValue == 0)
        {
          message.channel.send('No u.')
        }
        else
        {
          message.channel.send(ReturnRandom(responseList))
        }

        break;

      //----------------------------------------------------------------------------------------------------------------------------
      //----------choose------------------------------------------------------------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'choose':
        var clearedChoices = message.content.slice(prefix.length + command.length);
        var rollItems = clearedChoices.split('|');

        message.channel.send(ReturnRandom(rollItems))
        break;

      //------------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------resolve-----------------------------------------------------------
      //------------------------------------------------------------------------------------------------------------------------------
      case 'resolve':
        var afflictionsArray = ['Paranoid', 'Selfish', 'Irrational', 'Fearful', 'Hopeless', 'Abusive', 'Masochistic', 'Rapturous'];
        var virtuesArray = ['Powerful', 'Courageous', 'Stalwart', 'Vigorous', 'Focused'];
        var result;
        who = RecognizeWho(arguments[1], message, command)

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
        responseList = ['No u.', 'No you.', 'You too.', 'Stop it please!', 'Enough of that!'];
        message.channel.send(ReturnRandom(responseList))
        break; 

      //----------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------dndalign--------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'dndalign':
        responseList = ['Lawful Good.', 'Lawful Neutral.', 'Lawful Evil.', 'Neutral Good.', 'True Neutral.', 'Neutral Evil.', 'Chaotic Evil.', 'Chaotic Neutral.', 'Chaotic Good.'];
        who = RecognizeWho(arguments[1], message, command)
          
        message.channel.send(who + ' is **' + ReturnRandom(responseList) + '**')
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
        
        var response = Math.floor(Math.random() * 10);

        if(response == 0)
        {
          message.channel.send(ReturnRandom(specialArray))
        }
        else
        {
          message.channel.send(ReturnRandom(firstPartArray) + Math.floor(Math.random() * 14) + '/10.')
        }
        break;
        
      //---------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------roll-----------------------------------------------------------
      //---------------------------------------------------------------------------------------------------------------------------
      case 'roll':
        var rollsIndividuals = '[';
        var rollsTotalAmount = 0;
        
        if(arguments[1] == null)
        {
          arguments[1] = '1d6';
        }
        
        var rollItems = arguments[1].split('d');
        var numberOfRolls = rollItems[0];
        var typeOfDice = rollItems[1];
        
        if(numberOfRolls == null)
        {
          numberOfRolls = 1;
        }
        
        if(typeOfDice == null)
        {
          typeOfDice = 6;
        }
          
        if(typeOfDice == 'a')
        {
          armellDiceAmount = RollArmelloDices(numberOfRolls);
          
          message.channel.send('Result: [Rot: ' + armellDiceAmount[0] + ', Sword: ' + armellDiceAmount[1] + ', Sun: ' + armellDiceAmount[2] + ', Moon: ' + armellDiceAmount[3] + ', Shield: ' + armellDiceAmount[4] + ', Wyld: ' + armellDiceAmount[5] + ']')
          break;
        }
        else
        {
          for (i = 0; i < numberOfRolls; i++)
          {
            rollValue = Math.floor(Math.random() * typeOfDice + 1);
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
      //------------------------------------------------------------peril----------------------------------------------------------
      //---------------------------------------------------------------------------------------------------------------------------
      case 'peril':
        if (arguments[1] == null)
        {
          rollValue = Math.floor(Math.random() * 3);
          rollValue = rollValue + 3;
        }
        else
        {
          rollValue = arguments[1];
        }
        
        armellDiceAmount = RollArmelloDices(rollValue);
        message.channel.send('Peril: [Rot: ' + armellDiceAmount[0] + ', Sword: ' + armellDiceAmount[1] + ', Sun: ' + armellDiceAmount[2] + ', Moon: ' + armellDiceAmount[3] + ', Shield: ' + armellDiceAmount[4] + ', Wyld: ' + armellDiceAmount[5] + ']')
        break;
        
      //----------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------class-----------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'class':
        var who = RecognizeWho(arguments[1], message, command)
        var basicString = '';
        var finalString = '';
        var additionalString = false;
        var firstWord = '';
        var secondWord = '';

        var basePart = [who + ' looks like ', 'I think ' + who + ' would do great as ', 'I think ' + who + ' would do well as ', 'I think ' + who + ' would make an excellent '];

        var firstPart1 = [
        'Aggressive', 'Anointed', 'Apprentice', 'Awesome', 'Awful',
        'Badlands', 'Barbaric', 'Brutal',
        'Cloaked',
        'Defiant', 'Drunken',
        'Faded', 'Faithful', 'Fated', 'Feral', 'Forsworn',
        'Greater',
        'High', 'Horrible',
        'Lesser',
        'Masochistic',
        'Offensive',
        'Pale', 'Provocative',
        'Rapturous',
        'Sadistic', 'Screwed', 'Serial',
        'Wild'
        ];

        var firstPart2 = [
        'Aegis', 'Animal',
        'Badlands', 'Barbaric', 'Battle', 'Black', 'Blood', 'Bone', 'Book', 'Border', 'Bounty', 'Brutal',
        'Camp', 'Cloaked', 'Crime',
        'Death', 'Drug', 'Dung',
        'Feral', 'Forest',
        'Grave',
        'High',
        'Pale', 'Pleasure',
        'Savage', 'Spy',
        'Wild', 'White'
        ];
        
        var firstPart3 = [
        'Brothel', 'Brotherhood',
        'Clan', 'Cult',
        'Guild',
        'Sect'
        ];
        
        var secondPart = [
        'Abbot', 'Admiral', 'Agitator', 'Amazon', 'Ambassador', 'Anchorite', 'Apothecary', 'Archer', 'Artillerist', 'Artisan', 'Artist', 'Assassin', 'Astrologer', 'Ataman', 'Attendant',
        'Badlander', 'Bailiff', 'Bandit', 'Barbarian', 'Barber', 'Bard', 'Beast', 'Boatman', 'Bodyguard', 'Bondsman', 'Bonepicker', 'Brigand', 'Brother', 'Burgher', 'Burglar',
        'Cadet', 'Calligrapher', 'Cannibal', 'Cantor', 'Captain', 'Cartographer', 'Catechist', 'Cenobite', 'Champion', 'Charlatan', 'Chimneysweep', 'Coachman', 'Collector', 'Cultist', 'Courtesan', 'Courtier', 'Crusader',
        'Defender', 'Druid',
        'Executioner', 'Experiment',
        'Fighter', 'Fisherman', 'Follower', 
        'Guard', 
        'Highwayman', 'Hunter',
        'Inquisitor',
        'Jester',
        'Kamikaze', 'Killer', 'King', 'Knight',
        'Leper', 'Lord', 'Lumberjack',
        'Madman', 'Mage', 'Masochist', 'Master', 'Messenger', 'Mohican', 'Monk', 'Monster', 'Musician', 'Mutant',
        'Necromancer', 'Ninja',
        'Painter', 'Paladin', 'Pilgrim','Priest', 'Priestess', 'Prisoner', 'Prophet',
        'Queen',
        'Ranger', 'Robber', 'Rogue', 'Ruffian', 'Ruler', 'Runesmith',
        'Sadist', 'Sailor','Samurai', 'Shaman', 'Shepherd', 'Sister', 'Slave', 'Slayer', 'Soldier', 'Sorcerer', 'Surgeon',
        'Tamer', 'Thief', 'Thug', 'Torturer', 'Trainer', 'Troglodyte', 'Troll', 
        'Warlock', 'Warrior', 'Witch', 'Wizard'
        ];
        
        var lastPart = [
        'Blood', 'the Booze',
        'the Coconut',
        'Darkness', 'Delight', 'Despair', 'Destruction', 'Doctor Pumpkins', 'Doom', 'the Dung',
        'Evil',
        'the Forest Fools', 'Fury',
        'Good', 'the Grove',
        'Honor',
        'Immorality', 'Immortality',
        'Justice',
        'the Light',
        'Madness', 'Masks', 'the Meek', 'Mercy', 'the Moon',
        'the Nut',
        'Pleasure', 'Power',
        'Retribution', 'the Rot',
        'Shadows', 'the Shroud', 'Steel', 'the Sun',
        'the Wyld'
        ]
        
        //---------------------------------------------------------------------------------------------------------------------------

        if(Math.floor(Math.random() * 10) < 5)
        {
          firstWord = ReturnRandom(firstPart1) + ' ';
          finalString = finalString + firstWord;
        }
        
        if(Math.floor(Math.random() * 10) < 5)
        {
          secondWord = ReturnRandom(firstPart2) + ' ';
          if(firstWord != secondWord)
          {
            finalString = finalString + secondWord;
          }
        }
        
        if(Math.floor(Math.random() * 10) < 3)
        {
          finalString = finalString + ReturnRandom(firstPart3) + ' ';
        }

        finalString = finalString + ReturnRandom(secondPart);


        if(Math.floor(Math.random() * 10) < 5)
        {
          finalString = finalString + ' of ' + ReturnRandom(lastPart);
        }

        basicString = ReturnRandom(basePart);
        
        if(basicString != basePart[3])
        {
          switch(finalString.charAt(0))
          {
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
            case 'Y':
            basicString = basicString + 'an ';
            break;
            
            case 'B':
            case 'C':
            case 'D':
            case 'F':
            case 'G':
            case 'H':
            case 'J':
            case 'K':
            case 'L':
            case 'M':
            case 'N':
            case 'Q':
            case 'P':
            case 'R':
            case 'S':
            case 'T':
            case 'V':
            case 'W':
            case 'X':
            case 'Z':
            basicString = basicString + 'a ';
            break;
          }
        }
        
        if(arguments[1] == 'count')
        {
          message.channel.send('Number of possible outcomes (approximately): ' + (firstPart1.length - 1 ) * (firstPart2.length / 2) * firstPart3.length * secondPart.length * lastPart.length)
        }
        else
        {
          message.channel.send(basicString + '**' + finalString + '**.')
        }
        
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
        message.channel.send(ReturnRandom(responseList))
        break;
        
      
      //---------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------help-----------------------------------------------------------
      //---------------------------------------------------------------------------------------------------------------------------
      case 'version':
        message.channel.send('Version: 1.01')
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
    
    
    function ReturnRandom(listOfElements)
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
