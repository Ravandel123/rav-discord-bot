const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});


const prefix = "h!";

//A B C D E F G H I K L M N O P Q R S T V X Y Z

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
      //----------whois-------------------------------------------------------------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'whois':
        var finalString = '';
        who = RecognizeWho(arguments[1], message, command);
        var name = '';
        var whoHelp;
        var n;

        var whoList = [
        'my',
        'Ravandel'
        ];
      
        var firstList = [
        'Abominable', 'Amazing',
        'Best',
        'Cute', 'Cutest',
        'Evil',
        'Gargantuan',
        'Interesting',
        'Masochistic',
        'Primitive', 'Psychopathic',
        'Secret', 'Sadistic', 'Silly', 'Small',
        'Useful', 'Useless',
        'Worst'
        ]

        var secondList = [
        'Abomination',
        'Bodyguard',
        'Experiment',
        'Friend',
        'Plaything', 'Prisoner',
        'Servant', 'Slave',
        'Test Subject', 'Toy'
        ]
        
        who = who.toString();
        who = 'Ravandel'
        name = ReturnRandom(whoList);
        n = who.indexOf('a');
        message.channel.send(who + ' ' + name + ' ' + n)
        
        while(n > -1)
        {
          name = ReturnRandom(whoList);
          n = who.search('a');
        }
        
        
        finalString = name + '\'s' + ' ' + ReturnRandom(firstList) + ' ' + ReturnRandom(secondList)
        
        var mainList = [
        who + ' is ' + finalString + '.',
        who + ' is just ' + finalString + '.',
        who + ' is definitely ' + finalString + '.',
        who + ' looks like ' + finalString + '.'
        ];
        
        message.channel.send(ReturnRandom(mainList))
        break; 
       
      //----------------------------------------------------------------------------------------------------------------------------
      //----------why---------------------------------------------------------------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'why':
        var reason = '';
        
        var rareResponsesList = [
        'Because I say so.',
        'Because you are noob lol.',
        'Because those are orders from the Queen.',
        'You won\'t understand my answer with such a low IQ anyway, so I won\'t even bother explaining it to you lol.',
        'Your small mind is unable to grasp that. XD'
        ];
      
        var soloList = [
        'Bookmaster Awre',
        'the Boobs', 'the Booze',
        'the Coconut', 'Coconuts',
        'Darkness', 'Delight', 'Despair', 'Destruction', 'Doctor Pumpkins', 'Doom', 'the Dung',
        'Evil',
        'Fury',
        'Good', 'the Grove',
        'Honor',
        'Immorality', 'Immortality',
        'Justice',
        'Lemmy', 'the Light',
        'Madness', 'Me', 'Mercy', 'the Moon',
        'the Nut', 'Nuts',
        'Pleasure', 'Power',
        'Ravandel', 'Retribution', 'the Rot',
        'Seda', 'Seismic Activity', 'Shadows', 'Shea', 'Steel', 'the Sun',
        'Urutaa',
        'Vardgo', 'Violence',
        'War', 'the Weed'
        ]

        var dualList1 = [
        'Abominable', 'Aggressive', 'Agile', 'Annointed', 'Awesome', 'Awful',
        'Black','Blood', 'Bloody','Brutal',
        'Cannibalistic',
        'Dark', 'Death', 'Degenerate', 'Destructive', 'Doom', 'Dung',
        'Evil',
        'Faceless', 'Forest', 'Furious', 'Furry', 'Fury',
        'Ghost', 'Glowing', 'Good',
        'Honorable',
        'Immortal', 'Immoral', 'Insane',
        'Just',
        'Lunar',
        'Mad', 'Maniacal', 'Masochistic', 'Meek', 'Mindless',
        'Nutty',
        'Power', 'Primitive', 'Psychopathic',
        'Rotten', 'Ruby',
        'Sacred', 'Sadistic', 'Shadow', 'Smart', 'Solar', 'Steel', 'Strong', 'Suicidal',
        'Vengeful', 'Violent',
        'War', 'Weed', 'White'
        ]

        var dualList2 = [
        'Beef', 'Boobs', 'Booze', 'Brotherhood', 'Brothel',
        'Cannibal', 'Cannibals', 'City', 'Clan', 'Coconut', 'Coconuts', 'Cult',
        'Darkness', 'Delight', 'Delusional', 'Destruction', 'Doom', 'Dung',
        'Fear', 'Fools', 'Forest', 'Furries', 'Furry', 'Fury',
        'Ghost', 'Good', 'Grove', 'Guild',
        'Hand', 'Honor',
        'Intellect',
        'Justice',
        'Light',
        'Madness', 'Maniac', 'Mask', 'Masochism', 'Mercy', 'Moon', 'Mutant',
        'Nut', 'Nuts',
        'Pleasure', 'Pleasures', 'Power', 'Psychopath',
        'Retribution', 'Rot', 'Ruby',
        'Sadism', 'Shadow', 'Shadows', 'Shroud', 'Sun', 'Steel',
        'Troupe',
        'Vengeance', 'Violence',
        'War', 'Weed', 'Woods'
        ]
        
        if(Math.floor(Chance(15)) == true)
        {
          message.channel.send(ReturnRandom(rareResponsesList))
          return;
        }
        
        
        if(Math.floor(Math.random() * 2) == 0)
        {
          reason = '**' + ReturnRandom(soloList) + '**';
        }
        else
        {
          var firstPart = ReturnRandom(dualList1);
          var secondPart = ReturnRandom(dualList2);
          
          while(firstPart == secondPart || firstPart + 's' == secondPart || firstPart + 'es' == secondPart)
          {
            secondPart = ReturnRandom(dualList2);
          }
          
          reason = 'the **' + firstPart + ' ' + secondPart + '**';
        }
        
        responseList = [
        'Because of ' + reason + '.',
        'Its caused by ' + reason + '.',
        'Reason of that = ' + reason + '.'
        ];
        
        message.channel.send(ReturnRandom(responseList))
        break;
        
      //----------------------------------------------------------------------------------------------------------------------------
      //----------how---------------------------------------------------------------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'how':
        var reason = '';
      
        var soloList = [
        'Bookmaster Awre',
        'the Boobs', 'the Booze',
        'the Coconut', 'Coconuts',
        'Darkness', 'Delight', 'Despair', 'Destruction', 'Doctor Pumpkins', 'Doom', 'the Dung',
        'Evil',
        'Fury',
        'Good', 'the Grove',
        'Honor',
        'Immorality', 'Immortality',
        'Justice',
        'Lemmy', 'the Light',
        'Madness', 'Me', 'Mercy', 'the Moon',
        'the Nut', 'Nuts',
        'Pleasure', 'Power',
        'Ravandel', 'Retribution', 'the Rot',
        'Seda', 'Shadows', 'Shea', 'Seismic Activity', 'Steel', 'the Sun',
        'Urutaa',
        'Vardgo', 'Violence',
        'War', 'the Weed'
        ]

        var dualList1 = [
        'Abominable', 'Aggressive', 'Agile', 'Annointed', 'Awesome', 'Awful',
        'Black','Blood', 'Bloody','Brutal',
        'Cannibalistic',
        'Dark', 'Death', 'Degenerate', 'Destructive', 'Doom', 'Dung',
        'Evil',
        'Faceless', 'Forest', 'Furious', 'Furry', 'Fury',
        'Ghost', 'Glowing', 'Good',
        'Honorable',
        'Immortal', 'Immoral', 'Insane',
        'Just',
        'Lunar',
        'Mad', 'Maniacal', 'Masochistic', 'Meek', 'Mindless',
        'Nutty',
        'Power', 'Primitive', 'Psychopathic',
        'Rotten', 'Ruby',
        'Sacred', 'Sadistic', 'Shadow', 'Smart', 'Solar', 'Steel', 'Strong', 'Suicidal',
        'Vengeful', 'Violent',
        'War', 'Weed', 'White'
        ]

        var dualList2 = [
        'Beef', 'Boobs', 'Booze', 'Brotherhood', 'Brothel',
        'Cannibal', 'Cannibals', 'City', 'Clan', 'Coconut', 'Coconuts', 'Cult',
        'Darkness', 'Delight', 'Delusional', 'Destruction', 'Doom', 'Dung',
        'Fear', 'Fools', 'Forest', 'Furries', 'Furry', 'Fury',
        'Ghost', 'Good', 'Grove', 'Guild',
        'Hand', 'Honor',
        'Intellect',
        'Justice',
        'Light',
        'Madness', 'Maniac', 'Mask', 'Masochism', 'Mercy', 'Moon', 'Mutant',
        'Nut', 'Nuts',
        'Pleasure', 'Pleasures', 'Power', 'Psychopath',
        'Retribution', 'Rot', 'Ruby',
        'Sadism', 'Shadow', 'Shadows', 'Shroud', 'Sun', 'Steel',
        'Troupe',
        'Vengeance', 'Violence',
        'War', 'Weed', 'Woods'
        ]
        
        if(Math.floor(Math.random() * 2) == 0)
        {
          reason = '**' + ReturnRandom(soloList) + '**';
        }
        else
        {
          var firstPart = ReturnRandom(dualList1);
          var secondPart = ReturnRandom(dualList2);
          
          while(firstPart == secondPart || firstPart + 's' == secondPart || firstPart + 'es' == secondPart)
          {
            secondPart = ReturnRandom(dualList2);
          }
          
          reason = 'the **' + firstPart + ' ' + secondPart + '**';
        }
        
        responseList = [
        'By using ' + reason + '.',
        'I think ' + '\'' + reason + '\' is the answer.',
        'Definitely by the help of ' + reason + '.',
        'Answer = ' + reason + '.'
        ];

        message.channel.send(ReturnRandom(responseList))

        break;
        
      //----------------------------------------------------------------------------------------------------------------------------
      //----------am, is, are, will, do, does, should, would, was, were, can, could, did,have, has, had-----------------------------
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
      case 'can':
      case 'could':
      case 'did':
      case 'have':
      case 'has':
      case 'had':
        responseList = [
        'Yes.', 'No.',
        'Definitely.', 'Definitely no.',
        'Probably.', 'Probably not.',
        'For sure.', 'Lol no.',
        'Why not?', 'How about no.',
        'Absolutely.', 'Not at all.',
        'It\'s a possibility.', 'Sorry, it\'s not possible.'
        ];

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
      //------------------------------------------------------------rant------------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'rant':
        var fakeList = [
        'boobs of Pamela Anderson',
        'butt of Nicki Minaj'
        ];

        var emptyList = [
        'I love rants about nothing, at least I don\'t need to listen to you.',
        'How about you write something?'
        ];

        responseList = [
        ':cry:',
        'Oh... This is so sad that I am thinking about formatting myself...',
        'And what makes you think it was not deserved?',
        'I am sorry to hear that...',
        'Don\'t worry, all will be all right.',
        'https://i.imgur.com/vL0G4rN.png',

        'Congratulations! You have been nominated for Drama Queen of the year!',
        'Rotfl, this is fascinating, continue and bring me popcorn.',
        'This is probably more fake than ' + ReturnRandom(fakeList) + '.',
        'Am I supposed to cry or laugh at this?',
        'Lol, no one cares anyway.',
        'Stop being crybaby.',
        'I think you should write a book about that.',
        'Stop crying for attention like a small girl.'
        ];

        if(arguments[1] == null)
        {
          message.channel.send(ReturnRandom(emptyList))
        }
        else
        {
          message.channel.send(ReturnRandom(responseList))
        }
        break; 

      //----------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------hate------------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'hate':
        var charactersList = [
        'Stalin',
        'Hitler',
        'Mao Zedong'
        ];

        responseList = [
        'I hate you.',
        'You suck.',
        'You = noob.',
        'You are probably worst person in the world!',
        'Uninstall discord pls.',
        ReturnRandom(charactersList) + ' was better than you.',
        'Can you just leave this server?',
        'I have calculated your IQ and it is exactly ' + Math.floor(Math.random() * 40) + '.',
        'I don\'t know how is that even possible to suck as much as you.',
        'If laughter is the best medicine, your face must be curing the world.',
        'You\'re so ugly, you scared the crap out of the toilet.',
        'It\'s better to let someone think you are an Idiot than to open your mouth and prove it.',
        'I\’m jealous of people that don’t know you!',
        'If I wanted to kill myself I\'d climb your ego and jump to your IQ.',
        'Brains aren\'t everything. In your case they\'re nothing.',
        'I don\'t know what makes you so stupid, but it really works.',
        'I\'d slap you, but that would be animal abuse.',
        'They say opposites attract. I hope you meet someone who is good-looking, intelligent, and cultured.',
        'If ugly were a crime, you\'d get a life sentence.',
        'Your mind is on vacation but your mouth is working overtime.',
        'Shock me, say something intelligent.',
        'I don\'t know what your problem is, but I\'ll bet it\'s hard to pronounce.',
        'You\'re like Monday mornings, nobody likes you.',
        'All day I thought of you... I was at the zoo.',
        'To make you laugh on Saturday, I need to you joke on Wednesday.',
        'If you really spoke your mind, you\'d be speechless.',
        'Every time I\'m next to you, I get a fierce desire to be alone.',
        'How did you get here? Did someone leave your cage open?',
        'Don\'t you have a terribly empty feeling - in your skull?',
        'As an outsider, what do you think of the human race?',
        'Are you always this stupid or is today a special occasion?'
        ];
        message.channel.send(ReturnRandom(responseList))
        break; 

      //----------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------love------------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'love':
        who = RecognizeWho(arguments[1], message, command)

        var array1 = [
        'I love you.',
        'I really, really like you. Like REALLY.',
        'You are amazing!',
        'You are probably best person in the world!',
        'You = awesome.',
        'You are the coolest person I have ever seen!',
        'I think you are hot, I would rate your look 11/10.',
        'Even if you were cloned, you\'d still be one of a kind. And the better looking one.',
        'I would love to spend every minute of every day with you, but some days I actually have to get stuff done.',
        'Your smile is proof that the best things in life are free.',
        'You\'re smarter than Google and Mary Poppins combined.',
        'I think the hardest part about being your friend is pretending as though I like my other friends as much as I like you.',
        'You\'re not someone I pretend to not see in public.',
        'I don\'t have a favourite colour, It\'s pretty much whatever you are wearing.',
        'I can never remember my dreams, but I assume you are always in them.',
        'You inspire me and most likely strangers. Also, friends and stalkers. You are the inspiration to many.',
        'You are so beautiful I would certainly steal your photos, make a fake account and impress people online.',
        'Your face makes other people ugly.',
        'You might be the primary reason for global warming.',
        'If there is one thing I like about you, its that I like more than one thing about you.',
        'You have that kind of body that when others see it they realise they need to workout more.',
        'You are more unique and wonderful than the smell of a new book.',
        'Did you have plastic surgery to become that attractive?',
        'Talking to you is the best part of my day, aside from when I\'m sleeping and when I\'m eating.',
        'You are awkward, in a cute way. Like an elevator ride, but with puppies.',
        'It\'s too bad you don\'t see what I see, if you did you\'d smile and keep looking.',
        'Maybe you should eat some makeup so you can be pretty on the inside too.',
        'I\'m really good at people-watching. I\'m so glad I can share that hobby on you.',
        'You make everything better. If people were more like you the world would be perfect.',
        'You\'re not lazy, just that the people around you are way too active.',
        
        'I love fat people like you!',
        'Usually ugly people disgust me, but you are actually cute.',
        'You are beatiful... On the inside.'
        ];

        var array2 = [
        'I love ' + who + '.',
        'I really, really like ' + who + '. Like REALLY.',
        who + ' is amazing!',
        who + ' is probably best person in the world!',
        who + ' = awesome.',
        who + ' is the coolest person I have ever seen!',
        'I think + who + is hot, I would rate your look 11/10.',
        'Even if ' + who + ' was cloned, ' + who + ' would still be one of a kind. And the better looking one.',
        'I would love to spend every minute of every day with ' + who + ' , but some days I actually have to get stuff done.',
        who + '\'s smile is proof that the best things in life are free.',
        who + ' is smarter than Google and Mary Poppins combined.',
        'I think the hardest part about being ' + who + '\'s friend is pretending as though I like my other friends as much as I like ' + who + '.',
        who + ' is not someone I pretend to not see in public.',
        'I don\'t have a favourite colour, It\'s pretty much whatever ' + who + ' is wearing.',
        'I can never remember my dreams, but I assume ' + who + ' is always in them.',
        who + ' inspire me and most likely strangers. Also, friends and stalkers. ' + who + ' is the inspiration to many.',
        who + ' is so beautiful I would certainly steal ' + who + ' photos, make a fake account and impress people online.',
        who + '\s face makes other people ugly.',
        who + ' might be the primary reason for global warming.',
        'If there is one thing I like about ' + who +', its that I like more than one thing about ' + who + '.',
        who + ' has that kind of body that when others see it they realise they need to workout more.',
        who + ' is more unique and wonderful than the smell of a new book.',
        'Did ' + who + ' have plastic surgery to become that attractive?',
        'Talking to ' + who + ' is the best part of my day, aside from when I\'m sleeping and when I\'m eating.',
        who + ' is awkward, in a cute way. Like an elevator ride, but with puppies.',
        'It\'s too bad ' + who + ' doesn\'t see what I see, if ' + who + ' did ' + who + ' \'d smile and keep looking.',
        'Maybe ' + who + ' should eat some makeup so ' + who + ' can be pretty on the inside too.',
        'I\'m really good at people-watching. I\'m so glad I can share that hobby on ' + who + '.',
        who + ' makes everything better. If people were more like ' + who + ' the world would be perfect.',
        who + ' is not lazy, just that the people around ' + who + ' are way too active.',
        
        'I love fat people like ' + who + '!',
        'Usually ugly people disgust me, but' + who + 'are actually cute.',
         who + ' is beatiful... On the inside.'
        ];

        if(arguments[1] == 'me' || arguments[1] == null)
        {
          responseList = array1;
        }
        else
        {
          responseList = array2;
        }

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
      //------------------------------------------------------------ambush----------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'ambush':
        who = RecognizeWho(arguments[1], message, command);
        var ambushers = '';
        var ambushersNumber = Math.floor(Math.random() * 7 + 1);
        
        responseList = ['Oh no! ' + who + ' has been ambushed by:'];
        
        for (i = 0; i < ambushersNumber; i++) 
        {
          ambushers = ambushers + '\n**' + GenerateRandomClass() + '**';
        }
        

        message.channel.send(ReturnRandom(responseList) + ambushers + '\nWill ' + who + ' survive? :scream:')
        break;

      //----------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------rate------------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'rate':
        var namesList = [
        'Stalin',
        'Hitler',
        'Mao Zedong',
        'Twilight'
        ];

        var firstPartArray = ['', 'Hmm. I\'d rate that ', 'I\'d give that a ', 'I\'d say '];

        var personifiedFirstPartArray = ['', 'Hmm. I\'d rate you ', 'I\'d give you a ', 'I\'d say '];

        var specialArray = [
        'I think we need negative scale for that.',
        'That is completely out of scale!',
        'Better than ' + ReturnRandom(namesList) + '.',
        ReturnRandom(namesList) + ' was better.',
        'Amazing!',
        'Incredible!',
        'Why you even wanna rate that?',
        'Utter garbage.',
        'It\'s over 9000!'
        ];

        var personifiedSpecialArray = [
        'I think we need negative scale to rate you.',
        'You are completely out of scale!',
        'Better than ' + ReturnRandom(namesList) + '.',
        ReturnRandom(namesList) + ' was better than you.',
        'You are amazing!',
        'You are incredible!',
        'Why you even wanna rate yourself?',
        'You suck lol.',
        'You suck.',
        'You are over 9000!'
        ];

        if (arguments[1] == 'me' || arguments[1] == null)
        {
          firstPartArray = personifiedFirstPartArray;
          specialArray = personifiedSpecialArray;
        }

        var response = Math.floor(Math.random() * 10);

        if(response < 2)
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

      //---------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------when-----------------------------------------------------------
      //---------------------------------------------------------------------------------------------------------------------------
      case 'when':
      var timeList = [
      'seconds',
      'minutes',
      'hours',
      'days',
      'years'
      ];

      var timeHours = Math.floor(Math.random() * 24);
      var timeMinutes = Math.floor(Math.random() * 60);

      if(timeHours < 10)
      {
        timeHours = '0' + timeHours;
      }

      if(timeMinutes < 10)
      {
        timeMinutes = '0' + timeMinutes;
      }

      responseList = [
      'Today.',
      'Tomorrow.',
      'Soon.',
      'Now.',
      'Never.',
      'Never lol.',
      'Yesterday.',
      'Soon.',
      'You don\'t understand concept of time anyway lol.',
      'In ' + Math.floor(Math.random() * 11) + ' ' + ReturnRandom(timeList) + '.',
      'In ' + Math.floor(Math.random() * 101) + ' ' + ReturnRandom(timeList) + '.',
      'In ' + Math.floor(Math.random() * 1001) + ' ' + ReturnRandom(timeList) + '.',
      'In ' + (Math.floor(Math.random() * 11) + 2018) + '.',
      'In ' + (Math.floor(Math.random() * 101) + 2018) + '.',
      'In ' + (Math.floor(Math.random() * 1001) + 2018) + '.',
      'Tomorrow ' + timeHours + ':' + timeMinutes + '.',
      'Day after tomorrow ' + timeHours + ':' + timeMinutes + '.'
      ];

      message.channel.send(ReturnRandom(responseList))
      break;

      //----------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------class-----------------------------------------------------------
      //----------------------------------------------------------------------------------------------------------------------------
      case 'class':
        var who = RecognizeWho(arguments[1], message, command)
        var basicString = '';
        var finalString = '';

        if(arguments[1] == 'count')
        {
          finalString = GenerateRandomClass('count');
          message.channel.send('Number of possible outcomes (approximately): ' + finalString + '.');
          return ;
        }
        
        var basePart = [
        'I think ' + who + ' looks like ',
        'I think ' + who + ' would do great as ',
        'I think ' + who + ' would do well as ',
        'I think ' + who + ' would make an excellent ',
        who + ' looks like ',
        who + ' would do great as ',
        who + ' would do well as ',
        who + ' would make an excellent '
        ];

        finalString = GenerateRandomClass();
        basicString = ReturnRandom(basePart);

        if(basicString != basePart[3] && basicString != basePart[7])
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

        message.channel.send(basicString + '**' + GenerateRandomClass() + '**.')

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
        responseList = ['I think you should visit a doctor.',
        'Ravandel is the specialist who you want to talk with about your problems.',
        'Electroshock therapy will work wonders for you.',
        'I would advise lobotomy.',
        'Chill and eat something good.',
        'Go outside.',
        'I would advise ' + Math.floor(Math.random() * 100) + ' hours of sleep.',
        'Get commission from Pumpkins. You will be happy and she will be happpy.',
        'I think you need plastic surgery.',
        'I suggest whipping session in abbey.',
        'Don\'t worry, be happy!',
        'Stop wasting your time on h!help command and do something with your miserable life.',
        'Read a book.',
        'Draw something.',
        'Well praying to God might be a good idea in your situation.'
        ];
        message.channel.send(ReturnRandom(responseList))
        break;


      //---------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------help-----------------------------------------------------------
      //---------------------------------------------------------------------------------------------------------------------------
      case 'version':
        message.channel.send('Version: 1.03')
        break;

      //---------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------commands-----------------------------------------------------------
      //---------------------------------------------------------------------------------------------------------------------------
      case 'commands':
        responseList = 'All commands start from h!\n' +
        '**am, is, are, will, do, does, should, would** - bot will simply answer your question\n'+
        '**help** - bot will try to help you with one of his awesome advices, but you might not like some of his responses\n'+
        '**invite** - bot will link his invite link\n'+
        '**roll nda** - bot will roll [n] Armello dices and will show result afterwards\n'+
        '**roll ndx** - bot will roll [n] dices having [x] sides and will show result afterwards\n'+
        '**peril n** - bot will generate random peril with [n] level of difficulty, if there is no [n] then it will generate random peril with 3-5 difficulty\n'+
        '**rate n** - bot will rate [n], usually on 0-10 scale, but sometimes his answers might be super kind or super rough\n'+
        '**dndalign n** - bot will give DnD alignment for [n]\n'+
        '**choose n1|n2|n3 (...)** - bot will choose one item among all listed\n'+
        '**resolve n** - bot will do resolve check for [n]\n'+
        '**class n** - bot will generate random class or n\n'+
        '**rant n** - bot will generate response to your [n] rant\n'+
        '**when n** - bot will tell you when [n] will occur\n'+
        '**how** - bot will answer your question about -how-\n'+
        '**why** - bot will answer your question about -why-\n'+
        '**version** - bot will send info about his current version\n'+
        'There are other hidden commands, currently there is 3 more.';

        message.channel.send(responseList)
        break;


        
      //---------------------------------------------------------------------------------------------------------------------------
      //------------------------------------------------------------test-----------------------------------------------------------
      //---------------------------------------------------------------------------------------------------------------------------
      case 'test':
        message.channel.send(GenerateRandomClass())
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
    
    function Chance(chanceOfSuccess)
    {
      return (Math.floor(Math.random() * 100) < chanceOfSuccess)
    }

    function GenerateRandomClass(typeOfCheck)
    {
        var finalString = '';
        var firstWord = '';
        var secondWord = '';
        var thirdWord = '';
        var fourthWord = '';
        var fifthWord = '';
        var sixthWord = '';

        var firstPart1 = [
        'Abominable', 'Aggressive', 'Anointed', 'Apprentice', 'Awesome', 'Awful',
        'Badlands', 'Barbaric', 'Brutal',
        'Cannibalistic', 'Cloaked', 'Crazy',
        'Defiant', 'Degenerate', 'Delusional', 'Drunken',
        'Faceless', 'Faded', 'Faithful', 'Fated', 'Feral', 'Forsworn', 'Furious', 'Furry',
        'Greater',
        'High', 'Horned', 'Horrible', 'Huge',
        'Immortal', 'Immortal',
        'Leper', 'Lesser', 'Little',
        'Maniacal', 'Masochistic', 'Mindless', 'Monstrous', 'Mutantic',
        'Offensive',
        'Pale', 'Pathethic', 'Primitive', 'Provocative', 'Psychopathic',
        'Rapturous',
        'Sacred', 'Sadistic', 'Screwed', 'Serial', 'Shamanistic',
        'Undying',
        'Wild'
        ];

        var firstPart2 = [
        'Aegis', 'Absolution', 'Animal',
        'Badlands', 'Bandit', 'Barbaric', 'Battle', 'Black', 'Blood', 'Bone', 'Book', 'Border', 'Bounty', 'Brutal',
        'Camp', 'Cloaked', 'Crime',
        'Death', 'Drug', 'Dung',
        'Feral', 'Flesh', 'Forest', 'Furry',
        'Ghost', 'Grant', 'Grave',
        'High', 'Hound',
        'Iron',
        'Lunar',
        'Money', 'Monster',
        'Pale', 'Plague', 'Pleasure',
        'Savage', 'Shield', 'Solar', 'Soul', 'Spirit', 'Spy', 'Steel',
        'War', 'Wild', 'White'
        ];

        var firstPart3 = [
        'Brothel', 'Brotherhood',
        'Clan', 'Cult',
        'Guild',
        'Sect',
        'Troupe'
        ];

        var secondPart = [
        'Abbot', 'Abomination', 'Admiral', 'Agitator', 'Amazon', 'Ambassador', 'Anchorite', 'Android', 'Antiquarian', 'Apothecary', 'Arbalest', 'Archer', 'Artillerist', 'Artisan', 'Artist', 'Assassin', 'Astrologer', 'Ataman', 'Attendant', 'Automaton', 'Avatar',
        'Badlander', 'Bailiff', 'Bandit', 'Barbarian', 'Barber', 'Bard', 'Beast', 'Berserker', 'Boatman', 'Bodyguard', 'Bombardier', 'Bomber','Bondsman', 'Bonepicker', 'Breaker', 'Brigand', 'Brother', 'Burgher', 'Burglar', 'Butcher',
        'Cadet', 'Calligrapher', 'Cannibal', 'Cantor', 'Captain', 'Cartographer', 'Catechist', 'Cenobite', 'Champion', 'Chanter', 'Charlatan', 'Chimneysweep', 'Coachman', 'Collector', 'Construct', 'Courtesan', 'Cultist', 'Courtier', 'Crusader', 'Cyborg',
        'Defender', 'Demagogue', 'Dilettante', 'Doctor', 'Drover', 'Druid', 'Duelist',
        'Embalmer', 'Enforcer', 'Engineer', 'Entertainer', 'Envoy', 'Exciseman', 'Executioner', 'Exorcist', 'Experiment', 'Explorer',
        'Farmer', 'Ferryman', 'Fighter', 'Firefighter', 'Fisherman', 'Flagellant', 'Follower', 'Foreman', 'Forger', 'Freeholder', 'Friar',
        'Gambler', 'Guard', 'Guardian', 'Gunner',
        'Hage', 'Hellion', 'Herald', 'Highwayman', 'Hunter',
        'Initiate', 'Inquisitor',
        'Jester',
        'Kamikaze', 'Killer', 'King', 'Knight',
        'Leper', 'Lich', 'Lord', 'Lumberjack',
        'Machine', 'Madman', 'Mage', 'Masochist', 'Master', 'Messenger', 'Mohican', 'Monk', 'Monster', 'Musician', 'Mutant',
        'Necromancer', 'Ninja',
        'Occultist',
        'Painter', 'Paladin', 'Pilgrim','Priest', 'Priestess', 'Prisoner', 'Prophet',
        'Queen',
        'Raider', 'Ranger', 'Robber', 'Robot', 'Rogue', 'Ruffian', 'Ruler', 'Runesmith',
        'Sadist', 'Sailor','Samurai', 'Seeker', 'Shaman', 'Shepherd', 'Sister', 'Slaughterer', 'Slave', 'Slayer', 'Soldier', 'Sorcerer', 'Spy', 'Surgeon',
        'Tamer', 'Thief', 'Thug', 'Torturer', 'Trainer', 'Trapper', 'Troglodyte', 'Troll', 
        'Viceroy',
        'Walker', 'Wanderer', 'Warden', 'Warlock', 'Warrior', 'Witch', 'Wizard'
        ];

        var lastPart = [
        'Bookmaster Awre',
        'Blood', 'the Boobs', 'the Booze',
        'the Coconut',
        'Darkness', 'Delight', 'Despair', 'Destruction', 'Doctor Pumpkins', 'Doom', 'the Dung',
        'Evil',
        'the Forest Fools', 'Fury',
        'Good', 'the Grove',
        'Honor',
        'Immorality', 'Immortality',
        'Justice',
        'Lemmy', 'the Light',
        'Madness', 'Masks', 'the Meek', 'Mercy', 'the Moon',
        'the Nut',
        'Pleasure', 'Power',
        'Ravandel', 'Retribution', 'the Rot',
        'Seda', 'Shadows', 'Shea', 'the Shroud', 'Steel', 'the Sun',
        'Urutaa',
        'Vardgo', 'Violence',
        'War', 'the Weed'
        ]

        var lastPart1 = [
        'Abominable', 'Absolute', 'Aggressive', 'Agile', 'Annointed', 'Awesome', 'Awful',
        'Black','Blood', 'Bloody','Brutal',
        'Cannibalistic',
        'Dark', 'Death', 'Degenerate', 'Destructive', 'Doom', 'Dung',
        'Evil',
        'Faceless', 'Forbidden', 'Forest', 'Forgotten', 'Furious', 'Furry', 'Fury',
        'Ghost', 'Glowing', 'Good',
        'Honorable',
        'Immortal', 'Immoral', 'Insane',
        'Just',
        'Lunar',
        'Mad', 'Maniacal', 'Masochistic', 'Meek', 'Mindless',
        'Nutty',
        'Power', 'Primitive', 'Psychopathic',
        'Rotten', 'Ruby',
        'Sacred', 'Sadistic', 'Shadow', 'Smart', 'Solar', 'Steel', 'Strong', 'Suicidal',
        'Vengeful', 'Violent',
        'War', 'Weed', 'White'
        ]

        var lastPart2 = [
        'Absolution',
        'Beef', 'Boobs', 'Booze', 'Brotherhood', 'Brothel',
        'Cannibal', 'Cannibals', 'City', 'Clan', 'Coconut', 'Coconuts', 'Cult',
        'Darkness', 'Delight', 'Delusion', 'Destruction', 'Doom', 'Dung',
        'Fear', 'Fools', 'Forest', 'Furries', 'Furry', 'Fury',
        'Ghost', 'Good', 'Grove', 'Guild',
        'Hand', 'Honor',
        'Intellect',
        'Justice',
        'Light',
        'Madness', 'Maniac', 'Mask', 'Masochism', 'Mercy', 'Moon', 'Mutant',
        'Nut', 'Nuts',
        'Pleasure', 'Pleasures', 'Power', 'Psychopath',
        'Retribution', 'Rot', 'Ruby',
        'Sadism', 'Shadow', 'Shadows', 'Shroud', 'Sun', 'Steel',
        'Troupe',
        'Vengeance', 'Violence',
        'War', 'Weed', 'Woods'
        ]

        //---------------------------------------------------------------------------------------------------------------------------
        if(typeOfCheck == 'count')
        {
          return ((firstPart1.length - 1 ) * (firstPart2.length / 2) * firstPart3.length * secondPart.length * lastPart.length + (firstPart1.length - 1 ) * (firstPart2.length / 2) * firstPart3.length * secondPart.length * lastPart1.length * (lastPart2.length / 2));
        }
        
        
        if(Math.floor(Math.random() * 10) < 5)
        {
          firstWord = ReturnRandom(firstPart1);
          finalString = finalString + firstWord + ' ';
        }

        if(Math.floor(Math.random() * 10) < 5)
        {
          secondWord = ReturnRandom(firstPart2);
          if(firstWord != secondWord)
          {
            finalString = finalString + secondWord + ' ';
          }
        }

        if(Math.floor(Math.random() * 10) < 3)
        {
          thirdWord = ReturnRandom(firstPart3);
          finalString = finalString + thirdWord + ' ';
        }

        fourthWord = ReturnRandom(secondPart);
        if(thirdWord != '' || fourthWord != secondWord)
        {
          finalString = finalString + fourthWord;
        }

        if(Math.floor(Math.random() * 10) < 3)
        {
          finalString = finalString + ' of ' + ReturnRandom(lastPart);
        }
        else if(Math.floor(Math.random() * 10) < 7)
        {
          fifthWord = ReturnRandom(lastPart1);
          sixthWord = ReturnRandom(lastPart2);

          while(fifthWord == sixthWord || fifthWord + 's' == sixthWord || fifthWord + 'es' == sixthWord)
          {
            sixthWord = ReturnRandom(lastPart2);
          }

          finalString = finalString + ' of the ' + fifthWord + ' ' + sixthWord;
        }

      return finalString;
    }

});




// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
                                                                        
