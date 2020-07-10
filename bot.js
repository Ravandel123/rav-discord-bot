const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});


const prefix = "h!";

//A B C D E F G H I K L M N O P Q R S T U V W X Y Z

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'Admiring Myself',
            type: "STREAMING",
            url: "https://www.google.pl"
        }
    });
});

client.on("message", message => {
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  var arguments = message.content.split(' ');
  var rollValue;
  var response;
  var responseList;
  var responseList1;
  var responseList2;
  var specialList;
  var multiplier;
  var multiplierBig;
  var i;
  var j;

  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----Pictures----------------------------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------

   var pictureHasselHug = 'https://imgur.com/OAU20PS'
   var pictureSummonFToGive = 'https://imgur.com/Rpn7Q8e'
   var pictureImproviseAdaptOvercome = 'https://imgur.com/DlBYayG'
   var pictureOrbitalBombardment = 'https://imgur.com/gNucxNw'
   var pictureMeGusta = 'https://imgur.com/FogG79P'
   var pictureSupremeVictoryDuck = 'https://imgur.com/fr0BMd4'


  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----Arrays------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  var additionalWordList1 = [
  ' lol', ', yes-yes', ' xD', ' lmao'
  ]
  
  var additionalLol = '';
  if(Chance(25))
    additionalLol = ReturnRandom(additionalWordList1)

  var serialsList = [
  'Alladin',
  'Baywatch', 'Birdemic',
  'Dumb & Dumber', 'Dumb & Dumber 2',
  'Ferocious Female Freedom Fighters', 'Frozen',
  'Howard the Duck',
  'King Kong Lives',
  'Matrix',
  'Pterodactyl Woman from Beverly Hills',
  'Rambo',
  'Scary Movie', 'Shrek', 'Star Wars',
  'Theodore Rex'
  ]
  
  var furryPlacesList = [
  'Anthro New England', 'Arizona Fur Con', 'Anthrocon',
  'Biggest Little Fur Con',
  'Califur', 'ConFurence', 'Confurgence', 'Conifur Northwest',
  'Eurofurence',
  'Furry Fiesta', 'Furry Weekend Atlanta', 'Fur the \'More\'',
  'Mephit Furmeet', 'Middle Earth', 'Midwest FurFest',
  'Rainfurrest', 'Rocky Mountain Fur Con',
  'VancouFur'
  ]
  
  var galaxies = [
  'Andromeda',
  'Messier 49',
  'NGC 1399',
  'NGC 4261',
  'M60-UCD1',
  'Markarian 335'
  ]
  
  var timeList = [
  'seconds',
  'minutes',
  'hours',
  'days',
  'years'
  ]
  
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----People------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  var serverPeopleList = [
  'Awre', 'Deciduu', 'Doctor Pumpkins', 'Glorious AYY FB', 'Horther', 'Izzy', 'Lemmy', 'Me', 'Radian', 'Ravandel', 'Ruby', 'Seda', 'Shea', 'Tyrrikz', 'Urutaa', 'Vardgo', 'Wolf Scribe', 'You'
  ]
  
  var villainsPeopleList = [
  'Darth Maul', 'Darth Vader',
  'Gollum',
  'Hannibal Lecter',
  'Voldemort',
  'Malodorous',
  'Palpatine',
  'Saruman', 'Sauron'
  ]
  
  var protagonistsPeopleList = [
  'Bella from Twilight', 'Braveheart',
  'King Arthur',
  'Robin Hood'
  ]
  
  var famousPeopleList = [
  'Albert Einstein',
  'Caligula',
  'Bill Gates',
  'Pope Francis'
  ]

  var specialPeopleList = [
  'Everybody', 'Nobody'
  ]
  
  var peopleStandardServerList = serverPeopleList.concat(specialPeopleList)
  var peopleAllList = serverPeopleList.concat(villainsPeopleList, protagonistsPeopleList, specialPeopleList, famousPeopleList)
  
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----Adjectives--------------------------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  var afflictionsList = ['Abusive', 'Fearful', 'Hopeless', 'Irrational', 'Masochistic', 'Paranoid', 'Rapturous', 'Selfish']
  
  var virtuesList = ['Courageous', 'Focused', 'Powerful', 'Stalwart', 'Vigorous']

  var coloursList = [
  'Black', 'Blue',
  'Green', 'Grey',
  'Pink',
  'Red',
  'White',
  'Yellow'
  ]
  
  var specialAfflictionsList = [
  'Aberrant', 'Aggressive', 'Alcoholic', 'Anxious', 
  'Barbaric', 'Brainwashed', 
  'Cannibalistic', 'Crazy',
  'Degenerate', 'Delusional', 'Depressive', 'Destructive', 'Deviant', 'Dumb',
  'Feral', 'Ferocious', 'Foolish', 'Furious', 'Furry',
  'Heartless', 'Horny', 
  'Idiotic', 'Imbecilic', 'Inane', 'Insane', 
  'Lazy', 
  'Maniacal', 'Mindless', 'Murderous', 'Mutantic',
  'Narcissistic',
  'Pathethic', 'Pathologic', 'Perverse', 'Primitive', 'Psychopathic',
  'Racist', 'Ravenous',
  'Sadistic', 'Stupid'
  ]
  
  var specialVirtuesList = [
  'Clever', 
  'Fearsome', 
  'Mighty', 
  'Relentless', 
  'Undying'
  ]
  
  var adjectivesNormalList = [
  'Aerial', 'Aeronautic', 'Agile', 'Animate', 'Aquatic',
  'Clever', 'Cloaked', 'Convinced',
  'Faceless', 'Faded', 'Faithful', 'Fated', 'Forsworn', 'Frozen',
  'Great', 'Greater',
  'High', 'Horned', 'Hypnotic', 
  'Immortal',
  'Judicial',  
  'Lesser', 'Living', 'Lunar',
  'Pale',
  'Solar', 'Stormful', 'Strong', 
  'Winged', 'Wise',
  'Vengeful'
  ]

  var adjectivesFunnyList = [
  'Abominable', 'Absurd', 'Adorable', 'Amateur', 'Amazing', 'Amusing', 'Anointed', 'Artistic', 'Awesome', 'Awful',
  'Banana', 'Best', 'Believable', 'Bioluminescent', 'Bloody', 'Brutal',
  'Celestial', 'Coconutty', 'Corvid', 'Creepy', 'Crystalline', 'Cute', 'Cutest',
  'Dark', 'Deadly', 'Defiant', 'Delicate', 'Dirty', 'Disgusting', 'Domesticated', 'Doomed', 'Drooly', 'Drugged', 'Drunken', 'Dungy',
  'Evil',
  'Fast', 'Feisty', 'Fiery', 'Forbidden', 'Fossilized', 'Foul', 'Funny',
  'Gargantuan', 'Gelatinous', 'Good', 'Gross',
  'Haunted', 'Hideous', 'Hilarious', 'Horrible', 'Huge', 'Hungry',
  'Immoral', 'Indoctrinated', 'Innocent', 'Interesting', 
  'Leper', 'Little', 'Lobotomized',
  'Magical', 'Monstrous',
  'Naive', 'Nippled', 'Nutty',
  'Offensive',
  'Pleasurable', 'Pointless', 'Programmed', 'Provocative',
  'Ridiculous', 'Robotic', 'Rotten',
  'Sacred', 'Sacrifical', 'Savage', 'Scary', 'Screwed', 'Secret', 'Serial', 'Shamanistic', 'Silly', 'Slimy', 'Slow', 'Smart', 'Starving', 'Stinky', 'Suicidal',
  'Tamed', 'Tentacled', 'Torturous', 'Trusted',
  'Ugly', 'Unintelligent', 'Useful', 'Useless',
  'Valuable', 'Verdant', 'Vile', 'Violent',
  'Weedy', 'Wild', 'Worst'
  ]

  var adjectivesEndingSinglePartList = [
  'the Birds', 'Blood','the Booze',
  'the Coconut', 'the Coconuts',
  'Darkness', 'the Dead', 'Degeneration', 'Delight', 'Despair', 'Destruction', 'Doom', 'Dung',
  'Evil',
  'Fury',
  'the Hazelnut', 'the Hazelnuts',
  'Immorality', 'Immortality', 'Insanity',
  'Madness', 'Magic', 'Masochism', 'the Moon', 'the Murder',
  'the Nipples', 'the Nut', 'the Nuts',
  'Pleasure', 'Pleasures', 'Power',
  'the Rot',
  'Sadism', 'Shadows', 'Sorrow', 'the Storm', 'the Sun',
  'Tentacles',
  'War', 'the Weed'
  ]
  
  var adjectivesAfflictionsVirtuesList = afflictionsList.concat(virtuesList, specialAfflictionsList, specialVirtuesList)
  var adjectivesStandardList = adjectivesFunnyList.concat(adjectivesNormalList, specialAfflictionsList, specialVirtuesList)
  var adjectivesAllList = afflictionsList.concat(virtuesList, specialAfflictionsList, specialVirtuesList, adjectivesNormalList, adjectivesFunnyList, coloursList)
  var adjectivesEndingAllSingle = adjectivesEndingSinglePartList.concat(peopleAllList)
  
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----Adverbs-----------------------------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------

  var baseAdverbsList = [
  'Absentmindedly', 'Absolutely', 'Abstractedly', 'Abundantly', 'Adoringly', 'Aggressively', 'Attractively', 'Awkwardly',
  'Beautifully', 'Briskly', 'Brutally',
  'Cannibalistically', 'Carefully', 'Cautiously', 'Cheerfully', 'Cheerily', 'Competitively', 'Completely', 'Conservatively', 'Contritely', 'Copiously', 'Correctly', 'Cosmically',
  'Deadly',
  'Eagerly', 'Effectively', 'Effortlessly', 'Entirely', 'Excellently', 'Exceptionally', 'Excessively', 'Extravagantly', 'Extremely',
  'Famously', 'Fantastically', 'Faultlessly', 'Feebly', 'Foolishly', 'Frantically', 'Furiously',
  'Gently', 'Gingerly', 'Girlishly', 'Gorgeously', 'Gracefully', 'Graciously', 'Grimly', 'Guardedly',
  'Half-heartedly', 'Happily', 'Heartlessly', 'Hungrily',
  'Idiotically', 'Idly', 'Inattentively',
  'Lazily', 'Lifelessly', 'Loyally',
  'Magnificently', 'Maniacally', 'Masochistically', 'Mega', 'Mindlessly', 'Mutantically',
  'Narcissistically', 'Nimbly',
  'Overly',
  'Perfectly', 'Pathetically', 'Pleasantly', 'Plentifully', 'Practically', 'Primitively', 'Profusely', 'Properly', 'Purely',
  'Quietly', 'Questioningly', 'Quite', 'Quizzically', 
  'Ravenously', 'Really', 'Recklessly', 'Remorsefully', 'Rightly', 'Ruefully', 'Ruthlessly',
  'Sadistically', 'Savagely', 'Silently', 'Slightly', 'Sloppily', 'Splendidly', 'Stupidly', 'Stylishly', 'Superbly', 'Sunnily', 'Super',
  'Terribly', 'Thirstily', 'Totally',
  'Ultra', 'Unabashedly', 'Unevenly', 'Urgently', 'Utterly',
  'Very', 'Viciously',
  'Warily', 'Weakly', 'Well', 'Wishfully', 'Witlessly', 'Wholly', 'Worriedly'
  ];
  
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----Creatures---------------------------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  var animalsStandardList = [
  'Alligator', 'Alpaca', 'Amoeba', 'Armadillo',
  'Baboon', 'Badger', 'Bat', 'Bear', 'Bee', 'Bug', 'Bull', 'Bumblebee',
  'Cat', 'Chameleon', 'Cheetah', 'Chicken', 'Chimpanzee', 'Cockroach', 'Cow', 'Coyote', 'Cricket', 'Crocodile',
  'Dog', 'Dolphin', 'Donkey', 'Duck',
  'Elephant', 'Ermine',
  'Ferret', 'Fish', 'Fox',
  'Gecko', 'Giraffe', 'Goat', 'Gorilla',
  'Hare', 'Hedgehog', 'Hippo', 'Hornbill', 'Hornet', 'Horse',
  'Iguana',
  'Llama','Lion', 'Lizard', 'Lynx',
  'Macaw', 'Monkey', 'Moth', 'Mouse',
  'Nudibranch',
  'Octopus', 'Orangutan', 'Orca', 'Otter', 'Owl',
  'Pangolin', 'Panther', 'Parasite', 'Parrot', 'Penguin', 'Pigeon',
  'Raccoon', 'Rat', 'Raven', 'Rhesus Macaque',
  'Seal', 'Sheep', 'Skink', 'Sloth', 'Snail', 'Snake', 'Spider', 'Squirrel', 'Swan',
  'Tiger', 'Toucan',
  'Vulture',
  'Wasp', 'Whale', 'Wolf', 'Worm',
  'Zebra'
  ]
  
  var classesStandardList = [
  'Abbot', 'Admiral', 'Agitator', 'Amazon', 'Ambassador', 'Anchorite', 'Antiquarian', 'Apothecary', 'Arbalest', 'Archer', 'Artillerist', 'Artisan', 'Artist', 'Assassin', 'Astrologer', 'Ataman', 'Attendant',
  'Badlander', 'Bailiff', 'Bandit', 'Barbarian', 'Barber', 'Bard', 'Baron', 'Barrator', 'Berserker', 'Boatman', 'Bodyguard', 'Bombardier', 'Bomber','Bondsman', 'Bonepicker', 'Breaker', 'Brigand', 'Brother', 'Burgher', 'Burglar', 'Butcher',
  'Cadet', 'Calligrapher', 'Cantor', 'Captain', 'Cartographer', 'Catcher', 'Catechist', 'Cenobite', 'Champion', 'Chanter', 'Charlatan', 'Chevalier', 'Chimneysweep', 'Coachman', 'Collector','Courtesan', 'Countess', 'Cultist', 'Convict', 'Courtier', 'Crusader', 
  'Defender', 'Demagogue', 'Dilettante', 'Doctor', 'Drover', 'Druid', 'Duelist',
  'Elder', 'Embalmer', 'Enforcer', 'Engineer', 'Entertainer', 'Envoy', 'Exciseman', 'Executioner', 'Exorcist', 'Experiment', 'Explorer',
  'Farmer', 'Ferryman', 'Fighter', 'Firefighter', 'Fisherman', 'Flagellant', 'Follower', 'Fool', 'Foreman', 'Forger', 'Freeholder', 'Friar', 'Frogwive',
  'Gambler', 'Geomancer', 'Guard', 'Guardian', 'Gunner',
  'Hage', 'Hellion', 'Herald', 'Highwayman', 'Hunter',
  'Illusionist', 'Initiate', 'Innkeeper', 'Interrogator', 'Inquisitor',
  'Jailer', 'Jester', 'Journeyman',
  'Kamikaze', 'Kidnapper', 'Killer', 'King', 'Knight', 'Knight Errant', 'Kossar',
  'Lamplighter', 'Laner', 'Lay', 'Leper', 'Lich', 'Litigant', 'Lord', 'Lumberjack',
  'Madman', 'Mage', 'Magician', 'Maiden', 'Man-at-Arms', 'Marauder', 'Mariner', 'Master', 'Mate', 'Mediator', 'Mentor', 'Mercenary', 'Merchant', 'Messenger', 'Militiaman', 'Miner', 'Minstrel', 'Mohican', 'Monk', 'Muleskinner', 'Musician', 'Mystic',
  'Navigator', 'Necromancer', 'Necrodancer', 'Nekomancer', 'Ninja', 'Noble', 'Nomad', 
  'Occultist', 'Outlaw', 'Outrider', 
  'Painter', 'Paladin', 'Pamphleteer', 'Peasant', 'Penitent', 'Physician', 'Pilgrim', 'Pistolier', 'Politician', 'Prelate', 'Priest', 'Priestess', 'Prisoner', 'Prophet', 'Protagonist',
  'Queen',
  'Racketeer', 'Raconteur', 'Rapscallion', 'Raider', 'Ranger', 'Rat Catcher', 'Reaver', 'Riverwarden', 'Roadwarden', 'Robber', 'Rogue', 'Ruffian', 'Ruler', 'Runebearer', 'Runesmith',
  'Sailor','Samurai', 'Scholar', 'Scout', 'Scribe', 'Seaman', 'Seeker', 'Seer', 'Sergeant', 'Servant', 'Shaman', 'Shepherd', 'Shieldbreaker', 'Sister', 'Skald', 'Skimmer', 'Slaughterer', 'Slaver', 'Slayer', 'Smuggler', 'Soldier', 'Sorcerer', 'Spy', 'Squire', 'Stevedore', 'Steward', 'Strider', 'Surgeon', 'Student',
  'Tamer', 'Targeteer', 'Thief', 'Thug', 'Toll Keeper', 'Torturer', 'Tradesman', 'Trainer', 'Trapper', 
  'Vagabond', 'Valet', 'Valkyrie', 'Vendor', 'Veteran', 'Viceroy', 'Vigilant',
  'Walker', 'Wanderer', 'Warden', 'Warleader', 'Warlock', 'Warlord', 'Warrior', 'Watchman', 'Witch', 'Witcher', 'Wizard', 'Whaler', 'Woodsman', 'Wrecker',
  'Yeoman',
  'Zaelot'
  ];
  
  var classesFunnyList = [
  'Abomination', 'Android', 'Animal', 'Automaton', 'Avatar',
  'Bastard', 'Beast', 
  'Cannibal', 'Colossus', 'Construct', 'Cyborg',
  'Device',
  'Friend', 'Furry',
  'Garbage',
  'Idiot',
  'Kid', 
  'Machine', 'Masochist', 'Marionette', 'Monster', 'Mutant', 
  'Noob',
  'Parasite', 'Pawn', 'Plaything', 'Primitive',
  'Robot',
  'Sadist', 'Savage', 'Slave',
  'Test Subject', 'Toy', 'Troglodyte', 'Troll',
  'Zombie'
  ]
  
  var classesFullList = classesStandardList.concat(classesFunnyList)
  var creaturesFullList = animalsStandardList.concat(classesStandardList, classesFunnyList)

  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----Darkest Dungeon---------------------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  var ddQuotesAfflictionList = [
  'The human mind - fragile like a robin\'s egg.',
  'Wherefore, heroism?',
  'The mind cannot hope to withstand such an assault.',
  'Even the aged oak will fall to the tempest\'s winds.',
  'Madness, our old friend!',
  'One can sometimes find clarity in madness, but only rarely...',
  'Madness - sublimity of the intelligence, or so it has been said.',
  'The bulwarks of the mind have fallen!',
  'The abyss is made manifest!',
  'Frustration and fury, more destructive than a hundred cannons.',
  'Fear and frailty finally claim their due.',
  'The walls close in, the shadows whisper of conspiracy!',
  'There can be no hope in this hell, no hope at all.',
  'Self-preservation is paramount - at any cost!',
  'Those who covet injury find it in no short supply.',
  'Reeling, gasping, taken over the edge into madness!'
  ]
  
  var ddQuotesVirtuesList = [
  'A moment of valor shines brightest against a backdrop of despair.',
  'Adversity can foster hope, and resilience.',
  'A moment of clarity in the eye of the storm...',
  'Anger is power - unleash it!',
  'Many fall in the face of chaos; but not this one, not today.'
  ]
  
  var ddQuotesStrikingCriticalHitList = [
  'A decisive pummelling!',
  'A powerful blow!',
  'A devastating blow!',
  'Impressive!',
  'The ground quakes!',
  'A singular strike!',
  'Well struck!',
  'Precision and power!',
  'Unnerved, unbalanced...',
  'Precision and power!	'
  ]
  
  var ddQuotesReceivingCriticalHitList = [
  'How quickly the tide turns!',
  'How quickly the tide turns!',
  'Grievous injury, palpable fear...',
  'Such a terrible assault cannot be left unanswered!',
  'Death waits for the slightest lapse in concentration.',
  'Exposed to a killing blow!',
  'Ringing ears, blurred vision - the end approaches...',
  'Dazed, reeling, about to break...',
  'Unnerved, unbalanced...',
  'A dizzying blow to body and brain!'
  ]
  
  var ddQuotesDeathDoorList = [
  'Perched at the very precipice of oblivion...',
  'A hand-breadth from becoming unwound...',
  'Teetering on the brink, facing the abyss...',
  'And now the true test... hold fast, or expire?',
  'As life ebbs, terrible vistas of emptiness reveal themselves.'
  ]
  var ddQuotesDeathblowList = [
  'Survival is a tenuous proposition in this sprawling tomb.',
  'More blood soaks the soil, feeding the evil therein.',
  'Another life wasted in the pursuit of glory and gold.',
  'This is no place for the weak, or the foolhardy.',
  'This is no place for the weak, or foolhardy.',
  'More dust, more ashes, more disappointment.'
  ]
  
  var ddQuotesWinningBattleList = [
  'These nightmarish creatures can be felled! They can be beaten!',
  'Seize this momentum! Push on to the task\'s end!',
  'This expedition, at least, promises success.',
  'As victories mount, so too will resistance.',
  'Success so clearly in view... or is it merely a trick of the light?',
  'Remind yourself that overconfidence is a slow and insidious killer.',
  'A trifling victory, but a victory nonetheless.',
  'Be wary - triumphant pride precipitates a dizzying fall...',
  'Ghoulish horrors - brought low and driven into the mud!'
  ]
  
  var ddQuotesAllList = ddQuotesAfflictionList.concat(ddQuotesVirtuesList, ddQuotesStrikingCriticalHitList, ddQuotesReceivingCriticalHitList, ddQuotesDeathDoorList, ddQuotesDeathblowList, ddQuotesWinningBattleList)
  

  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----D&D---------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  var dndAlignmentsList = [
  'Lawful Good.', 'Lawful Neutral.', 'Lawful Evil.', 'Neutral Good.', 'True Neutral.', 'Neutral Evil.', 'Chaotic Evil.', 'Chaotic Neutral.', 'Chaotic Good.'
  ]
  
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----Items-------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  var itemsWeaponsList = [
  'Arbalest', 'AK-47', 'Atomic Bomb', 'Axe',
  'Bardiche', 'Bazooka', 'Bludgeon', 'Bomb', 'Bow', 'Broadsword',
  'Chain', 'Chainsaw', 'Claymore', 'Club', 'Coconut', 'Crossbow', 'Crowbar',
  'Dagger', 'Disintegrator',
  'Estoc',
  'Falchion', 'Fist', 'Flail', 'Flamethrower', 'Fork',
  'Gladius', 'Glaive', 'Greatsword',
  'Halberd', 'Hammer',
  'Icicle',
  'Kama', 'Katana', 'Knife', 'Kukri',
  'Lance', 'Lasso', 'Longsword',
  'Mace', 'Machine Gun', 'Maul', 'Minigun', 'Missile', 'Missile Launcher', 'Morning Star', 'Musket',
  'Nuclear Missile', 'Nut',
  'Pike', 'Polearm', 'Poleaxe',
  'Quarterstaff',
  'Rapier', 'Revolver', 'Rocket Launcher', 'Rope',
  'Sabre', 'Scimitar', 'Scythe', 'Shortsword', 'Shotgun', 'Shuriken', 'Sickle', 'Sledgehammer', 'Sling', 'Spear', 'Spoon', 'Staff', 'Stick', 'Sword',
  'Tesla Coil', 'Tomahawk', 'Tool',
  'Uzi',
  'Wakizashi', 'Wand', 'Warhammer', 'Whip'
  ];
  
  var itemsMealList = [
  'Breakfast', 'Brunch', 'Dinner', 'Lunch', 'Supper'
  ]
  
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----Measurements------------------------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  var measurementLengthList = [
  'centimeters', 'decimeters', 'feet', 'inches', 'kilometers', 'meters', 'miles', 'millimeters', 'yards'
  ]
  
  var measurementVolumeList = [
  'cubics', 'cups', 'gallons', 'liters', 'milliliters', 'pints', 'quarts'
  ]
  
  var measurementWeighList = [
  'decagrams', 'grams', 'kilograms', 'ounces', 'pounds', 'tons'
  ]
  
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----Names-------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  var nameOneSyllableMale = [
  'Ash',
  'Bohb', 'Bron',
  'Calh',
  'Dalt', 'Drall', 'Drax',
  'Fiur',
  'Gem', 'Gird', 'Grok', 'Grum', 'Gue',
  'Hexx',
  'Kalt', 'Kardd', 'Karth', 'Kel',
  'Nef',
  'Rab',
  'Sark','Shyn', 'Sizz', 'Spint', 'Styg',
  'Tark', 'Thant', 'Tharj', 'Thrall', 'Torr', 'Tosch',
  'Vey', 'Vix', 'Voy','Vlad',
  'Wegg',
  'Xsi',
  'Yog', 'Yott',
  'Zanj'
  ];
  
  var nameFirstSyllable2Male = [
  'A', 'Ag', 'Ais', 'Aj', 'Al', 'An', 'Ar', 'As', 'Ax', 'Ay',
  'Ba', 'Bal', 'Bi', 'Bid', 'Bloom', 'Bof', 'Bra', 'Bro', 'Brog', 'Bu', 'Bun',
  'Ca', 'Cal', 'Char', 'Chri', 'Clan', 'Cla', 'Cor', 'Cuth',
  'Da', 'Dal', 'Dar', 'Dark', 'De', 'Del', 'Der', 'Des', 'Dra',
  'E', 'Ed', 'El', 'En',
  'Fa', 'Faf', 'Fah', 'Fal', 'Fer', 'Fi', 'Fla',
  'Ga', 'Gag',  'Gal', 'Gan', 'Gar', 'Ge', 'Ger', 'Gil', 'Gim', 'Gra', 'Gret', 'Grin', 'Gru', 'Gun',
  'Ha', 'Has', 'Hag', 'Har',
  'I', 'Ig', 'Il', 'In',
  'Jar', 'Je', 'Jer', 'Ju',
  'Kas', 'Ke', 'Kil', 'Khor', 'Ko', 'Kor', 'Krel', 'Kur', 'Kyr',
  'La', 'Lai', 'Lem', 'Lo', 'Loy',
  'Ma', 'Mad', 'Mag', 'Mal', 'Man', 'Mer', 'Mon', 'Mul', 'Mun',
  'Na', 'Ne', 'Nim', 'Nor', 'Ny',
  'O', 'Or', 'Oys',
  'Pa', 'Phe', 'Pir',
  'Qu',
  'Ra', 'Ran', 'Rash', 'Ri', 'Rit', 'Ro', 'Ru', 'Ry',
  'San', 'Sha', 'Shak', 'Sip', 'Sol', 'Stra', 'Sy',
  'Ta', 'Tar', 'Te', 'Ted', 'Tha', 'Tho', 'Thu', 'Thor', 'Tro', 'Ty',
  'U', 'Ul', 'Uv',
  'Vad', 'Ver', 'Vi', 'Vir', 'Vo',
  'War', 'Wer', 'Wol', 'Wor', 'Wy', 'Wys',
  'Xar', 'Xe', 'Xy',
  'Y',
  'Zam', 'Zu', 'Zy'
  ];
  
  var nameSecondSyllable2Male = [
  'art',
  'bac', 'bal', 'bar', 'berg', 'bert', 'bin', 'boz', 'bu', 'bus',
  'ce', 'chin', 'com', 'con', 'cus', 'cy',
  'dal', 'dalf', 'dan', 'dar', 'dek', 'den', 'din', 'dit', 'do', 'dor', 'dox', 'dro', 'dross', 'dun', 'dush',
  'fax', 'fir', 'fner', 'fred', 'fric', 'fus',
  'gal', 'gash', 'gem', 'gham', 'gil', 'go', 'gor', 'gos', 'grim', 'guk', 'gus',
  'ham','hild',
  'it',
  'jit',
  'ka', 'ker', 'kes', 'kial', 'kin', 'kon', 'krus',
  'lach', 'land', 'las', 'lem', 'lex', 'ley', 'li', 'lich', 'lid', 'lin', 'linn', 'lion', 'lis', 'lith', 'lon', 'loo', 'lor', 'lu',
  'mar', 'mer', 'min', 'mog', 'mus', 'myr',
  'nar', 'nard', 'nax', 'ne', 'ner', 'nis', 'no', 'nor', 'nos', 'nosh', 'nur', 'nus', 'nuz',
  'od', 'ok', 'on',
  'par', 'pih',
  'raih', 'ralt', 'rath', 'rek', 'ren', 'ret', 'rey', 'ric', 'rin', 'rion', 'ris', 'rius', 'rlon', 'rog', 'ron', 'rosh', 'run', 'rus', 'ryk',
  'sa', 'sham', 'shan', 'shnard', 'sin', 'sis', 'stan', 'stian', 'storn', 'stral',
  'tal', 'tan', 'thas', 'thran', 'ti', 'tner', 'ton', 'tos', 'tram', 'trim',
  'ur',
  'van', 'ven', 'vian', 'vius', 'vis', 'vin', 'von', 'vor',
  'wall', 'war', 'well', 'wick', 'win', 'wulf',
  'xon',
  'ym', 'ymr',
  'zar', 'zil', 'zir', 'zis', 'zok', 'zuss'
  ];

  var nameFirstSyllable3Male = [
  'A', 'Ar', 'As',
  'Bo', 'Bra',
  'Co',
  'Da', 'De',
  'El', 'Er', 'Ez',
  'Ge', 'Gur',
  'He',
  'I', 'In',
  'Ja', 'Je', 'Jed',
  'Ka', 'Krel',
  'Le',
  'Ma', 'Mar', 'Mi', 'Mo',
  'Pi',
  'Ra', 'Ru',
  'Sa', 'Sar', 'Sco',
  'Tal', 'Tho', 'To', 'Ty',
  'U',
  'Vla',
  'Zi'
  ];

  var nameSecondSyllable3Male = [
  'an',
  'bar', 'bo',
  'ca', 'chi', 'ci',
  'da', 'di',
  'e',
  'fre',
  'gna',
  'hin',
  'ja',
  'ken', 'ki',
  'la', 'le', 'li', 'lis', 'lix',
  'ma', 'mo',
  'ne', 'ni', 'nis', 'no',
  'que',
  'ra', 'rai', 're', 'ro', 'run', 'rus',
  'sa', 'san', 'ser',
  'te', 'tha', 'tid', 'tral',
  'u',
  'van', 've',
  'zi'
  ];

  var nameThirdSyllable3Male = [
  'al', 'an',
  'con',
  'del', 'dor', 'doth', 'dram',
  'gar', 'gark', 'go', 'gus',
  'kas', 'kith',
  'lin',
  'mar', 'mer', 'mir', 'mon', 'my',
  'ni', 'niel', 'nius',
  'on', 'os',
  'ram', 're', 'ri', 'rim', 'rio', 'ris', 'ro', 'rogg', 'rug',
  'sar', 'shan', 'shar', 'shi', 'shnar', 'son', 'sos',
  'tar', 'te', 'tin', 'tius', 'tos',
  'us',
  'vald', 'vich',
  'won',
  'xi', 'xion', 'xor'
  ];
  
  var nameFirstSyllable4Male = [
  'A', 'Al', 'Am',
  'E',
  'The',
  'Xer'
  ];

  var nameSecondSyllable4Male = [
  'da',
  'e',
  'ham',
  'li',
  'mu',
  'o'
  ];

  var nameThirdSyllable4Male = [
  'do',
  'ma',
  'na',
  'va'
  ];

  var nameFourthSyllable4Male = [
  'cius',
  'e',
  'in',
  'ret', 'ro', 'rus'
  ];
  
  var nameOneSyllableFemale = [
  'Ash',
  'Beck',
  'Gem',
  'Styg',
  'Voy',
  'Xsi'
  ];

  var nameFirstSyllable2Female = [
  'A', 'An', 'As',
  'Bris',
  'Ca', 'Cai', 'Char', 'Cie', 'Cy',
  'Fio',
  'Gret',
  'Is',
  'Kyr',
  'Lu',
  'Me', 'Mi',
  'Ny',
  'O',
  'Pa', 'Py',
  'Ris', 'Ro',
  'San', 'Shi', 'Sor', 'Syl', 'Syn',
  'Thu', 'Ti', 'Ty',
  'Ver'
  ];
  
  var nameSecondSyllable2Female = [
  'ca', 'chin',
  'dish', 'dra',
  'le', 'lid',
  'mus',
  'na', 'nar', 'nya',
  'ra', 're', 'riam', 'ris', 'rist',
  'sa', 'sha', 'sic', 'sis',
  'tlin', 'tra',
  'va', 'via',
  'ya'
  ];

  var nameFirstSyllable3Female = [
  'A', 'Ad', 'Ak',
  'Cas',
  'Da',
  'Ga', 'Gun',
  'I',
  'Je',
  'Kin',
  'La', 'Le', 'Lo',
  'Me', 'Mir', 'Mu',
  'Ne',
  'O',
  'Se', 'Sep', 'Syl',
  'Ta',
  'Va'
  ];

  var nameSecondSyllable3Female = [
  'bet',
  'cta',
  'de', 'dria', 'du',
  'e',
  'gnis',
  'hin',
  'i',
  'ke', 'kro',
  'lan', 'le', 'les', 'lo',
  'me', 'mi', 'mo',
  'na', 'no',
  'o',
  'pha',
  're', 'rien', 'ro', 'ru',
  'ta', 'tien',
  'va'
  ];

  var nameThirdSyllable3Female = [
  'bel',
  'da', 'dia',
  'ha',
  'la', 'lei',
  'ka',
  'ma', 'myth',
  'na', 'nas', 'ne',
  'ra', 're', 'ria','roth',
  'sa', 'sha',
  'tra',
  'va', 'via'
  ];
  
  var nameFirstSyllable4Female = [
  'A', 'An',
  'Be',
  'Ca', 'Cas',
  'Jo',
  'Se',
  'Vi'
  ];

  var nameSecondSyllable4Female = [
  'a',
  'de', 'do',
  'na',
  're',
  'se', 'sio',
  'the', 'tho'
  ];

  var nameThirdSyllable4Female = [
  'fen',
  'lai',
  'mi',
  'ni',
  'pe','phi',
  'ri',
  'tri',
  'u'
  ];

  var nameFourthSyllable4Female = [
  'ce',
  'de',
  'ia',
  'na', 'ne',
  'sa',
  'ta',
  'za'
  ];
  
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----Places------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------

  var placeMainList = [
  'Abbey', 'Altar', 'Amphitheater', 'Arena',
  'Basement', 'Barrens', 'Brothel',
  'Cartel', 'Cave', 'Citadel', 'City', 'Chamber', 'Cliffs', 'Colosseum', 'Cornfield',
  'Den', 'Desert', 'Dojo', 'Dungeon',
  'Encampment',
  'Field', 'Forest', 'Fort', 'Fortress', 'Fountain',
  'Galaxy', 'Garrison', 'Grove', 'Guild', 'Gym',
  'Home', 'House', 'Hovel', 'Hub',
  'Island',
  'Jail',
  'Kingdom', 'Kitchen',
  'Lake', 'Land', 'Lighthouse',
  'Marsh', 'Moon', 'Moor', 'Mountain', 'Mountains',
  'Ocean', 'Outpost',
  'Palace', 'Plains', 'Planet', 'Prison', 'Pyramid',
  'Rainforest', 'Realm', 'Refuge', 'River', 'Room', 'Ruins',
  'Sanctum', 'School', 'Sea', 'Sewers', 'Ship', 'Space', 'Stronghold', 'Swamp',
  'Temple', 'Tomb', 'Tower', 'Town', 'Township', 'Treetops',
  'Village',
  'Wastes', 'Waterfall', 'Wilderness', 'Woods',
  'Ziggurat'
  ]
  
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----Prepositions------------------------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  var prepositionsPlaces = [
  'at', 'in', 'on'
  ]
  
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----Sizes-------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  var sizeBigList = [
  'Astronomical', 'Big', 'Colossal', 'Enormous', 'Gargantuan', 'Giant', 'Gigantic', 'Huge', 'Large', 'Monstrous', 'Tremendous'
  ]
  
  var sizeSmallList = [
  'Diminutive', 'Little', 'Small', 'Tiny'
  ]
  
  var sizeAverageList = [
  'Average', 'Medium'
  ]
  
  var sizeList = sizeBigList.concat(sizeSmallList, sizeAverageList)
  
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----Values------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  var valuesIRLCurrencies = [
  'Bucks',
  '$',
  '€',
  '£'
  ]
  
  var valuesFantasy = [
  'Copper',
  'Silver',
  'Gold'
  ]
  
  var valuesTroll = [
  'Priceless',
  'Worthless'
  ]
  
  var valuesStandardList = valuesIRLCurrencies.concat(valuesFantasy)
  
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----Verbs-------------------------------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  var verbsStandardList = [
  'Buy',
  'Draw',
  'Feed',
  'Observe',
  'Pet',
  'Sketch'
  ]
  
  var verbsStandardContinuousList = [
  'Awooing',
  'Chirping',
  'Dancing', 'Drawing', 'Drinking',
  'Eating',
  'Feeding',
  'Gaming',
  'Looking around',
  'Paying', 'Playing',
  'Ranting',
  'Screaming', 'Sketching', 'Sleeping', 'Sulking', 'Swimming',
  'Taking a dump',
  'Whipping'
  ]

  var verbsStandardContinuousHumanInteractionsList = [
  'Apologizing to', 'Assaulting', 'Awooing with',
  'Beating', 'Buying',
  'Chirping with', 'Complimenting',
  'Dancing with', 'Drawing', 'Drinking with',
  'Eating with',
  'Feeding',
  'Gaming with',
  'Ignoring',
  'Kicking',
  'Observing',
  'Partying with', 'Paying', 'Petting', 'Playing', 'Playing with',
  'Ranting at',
  'Screaming at', 'Screaming with', 'Sketching', 'Swimming with',
  'Taking a dump with',
  'Verbally Abusing',
  'Whipping'
  ]
  
  var verbsHumanInteractionsList = [
  'Apologize', 'Applaud',
  'Compliment',
  'Ignore',
  'Pay',
  ]
  
  var verbsAllList = verbsStandardList.concat(verbsHumanInteractionsList)
  
 
  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  switch (command) 
  {
    //----------------------------------------------------------------------------------------------------------------------------
    //----------%-----------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case '%':
      if(arguments[1] == null)
        return;
      
      who = RecognizeWhoSimple(arguments[2], message, command);
      
      if(Chance(50))
        i = Rnd(100)
      else
        i = Rnd(200)
        
      message.channel.send(who + ' is ' + Rnd(i) + '% ' + arguments[1] + '.')
      break;
    
    //----------------------------------------------------------------------------------------------------------------------------
    //----------am, are, can, could, did, do, does, is, have, had, has, shall, should, was, were, will, would---------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'am':
    case 'are':
    case 'can':
    case 'could':
    case 'did':
    case 'do':
    case 'does':
    case 'is':
    case 'have':
    case 'had':
    case 'has':
    case 'shall':
    case 'should':
    case 'was':
    case 'were':
    case 'will':
    case 'would':
    case 'wanna':
    
      specialList = [
      'Why you asking me about that' + additionalLol + '.',
      'This question is stupid' + additionalLol + '.',
      'I think the answer is obvious' + additionalLol + '.',
      'Do I really need to answer this' + additionalLol + '?',
      'No u' + additionalLol + '.',
      'Sorry but that question is disgusting' + additionalLol + '.'
      ]
      
      responseList = [
      'Yes', 'No',
      'Definitely', 'Definitely no',
      'Probably', 'Probably not',
      'For sure', 'Impossible',
      'Why not', 'How about no',
      'Absolutely', 'Not at all',
      'It\'s a possibility', 'Nah',
      'Totally', 'No way',
      'Affirmative', 'Negative',
      'Yup', 'Nope',
      'Sure', 'Under no circumstances',
      'Partially', 'A bit', 'Slightly', 'Somehow',
      'Likely', 'Unlikely'
      ];

      message.channel.send(ReturnRandom(responseList) + additionalLol + '.')
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------ambush------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'ambush':
      who = RecognizeWho(arguments[1], message, command);
      var ambushers = '';
      var ambushersNumber = Math.floor(Math.random() * 7 + 1);
      
      responseList = ['Oh no! ' + who + ' has been ambushed by:'];
      
      for (i = 0; i < ambushersNumber; i++) 
        ambushers = ambushers + '\n**' + GenerateRandomClass() + '**';

      message.channel.send(ReturnRandom(responseList) + ambushers + '\nWill ' + who + ' survive? :scream:')
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------amount, percent---------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
      case 'amount': 
      case 'percent':
      
      var additionalPercent = '';
      var properMultiplier = 0;
      
      if(command == 'percent')
      {
        additionalPercent = '%';
        properMultiplier = Rnd(GenerateMultiplier(2));
      }
      else
      {
        properMultiplier = Rnd(GenerateMultiplier(8));
      }
      
      additionalList = [
      ' more than ',
      ' less than ',
      ' exactly ',
      ' below ',
      ' over ',
      ' definitely ',
      ' probably ',
      ' almost'
      ];
      
      responseList = [
      properMultiplier + additionalPercent + '.',
      'This is' + ReturnRandom(additionalList) + properMultiplier + additionalPercent + '.',
      'My calculations show that this will be' + ReturnRandom(additionalList) + properMultiplier + additionalPercent + '.',
      'I think it\'s ' + properMultiplier + additionalPercent + '.'
      ];
      

      message.channel.send(ReturnRandom(responseList))
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------animal------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
      case 'animal':
      var who = RecognizeWho(arguments[1], message, command)
      
      var animal1 = GenerateRandomAnimal()
      var animalCorrect1 = AddAnA(animal1) + animal1
      animalCorrect1 = MakeStringBold(animalCorrect1)
      
      var animal2 = GenerateRandomAnimal()
      var animalCorrect2 = AddAnA(animal2) + animal2
      animalCorrect2 = MakeStringBold(animalCorrect2)
      
      var responses = [
      'I think ' + who + ' looks like ' + animalCorrect1 + additionalLol + '.',
      'I think ' + who + ' would do great as ' + animalCorrect1 + additionalLol + '.',
      'I think ' + who + ' would do well as ' + animalCorrect1 + '.',
      'I think ' + who + ' looks like a cross between ' + animalCorrect1 + ' and ' + animalCorrect2 + additionalLol + '.',
      who + ' looks like ' + animalCorrect1 + additionalLol + '.',
      who + ' would do great as ' + animalCorrect1 + additionalLol + '.',
      who + ' would do well as ' + animalCorrect1 + additionalLol + '.',
      who + ' looks like ' + animalCorrect1 + ' from ' + MakeStringBold(GenerateRandomPlace()) + additionalLol + '.',
      who + ' looks like something between ' + animalCorrect1 + ' and ' + animalCorrect2 + additionalLol + '.',
      who + ' looks like some kind of mix of ' + animalCorrect1 + ' and ' + animalCorrect2 + additionalLol + '.'
      ];
      
      var specialResponseList = [
      'I think ' + who + ' actually resemble more some kind of mushroom than an animal' + additionalLol + '.',
      'I think ' + who + ' actually resemble more some kind of plant than an animal' + additionalLol + '.',
      who + ' looks like some kind of unidentified animal' + additionalLol + '.',
      'I think ' + who + ' is the last of its kind, probably the rest of ' + who + ' race is extinct' + additionalLol + '.',
      who + ' looks like a pet of ' + MakeStringBold(ReturnRandom(serverPeopleList)) + additionalLol + '.'
      ];
      
      if(Chance(7))
        message.channel.send(ReturnRandom(specialResponseList))
      else
        message.channel.send(ReturnRandom(responses))
      break;

    //----------------------------------------------------------------------------------------------------------------------------
    //----------braindmg----------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'braindmg':
      responseList = [
      'https://www.youtube.com/watch?v=eh7lp9umG2I',
      'https://www.youtube.com/watch?v=vTIIMJ9tUc8',
      'https://www.youtube.com/watch?v=MNyG-xu-7SQ',
      'https://www.youtube.com/watch?v=jofNR_WkoCE',
      'https://www.youtube.com/watch?v=kffacxfA7G4',
      'https://www.youtube.com/watch?v=qcFybw4mSOk',
      'https://www.youtube.com/watch?v=3fk9Xvh32hM',
      'https://www.youtube.com/watch?v=nF7lv1gfP1Q',
      'https://www.youtube.com/watch?v=be1EOu7f790'
      ];
      who = RecognizeWho(arguments[1], message, command)

      message.channel.send(ReturnRandom(responseList))
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------capacity, volume--------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'capacity':
    case 'volume':
      specialList = [
      'That is beyond the capacity of the all oceans combined' + additionalLol + '.',
      'Not enough capacious' + additionalLol + '.',
      'Too capacious' + additionalLol + '.',
      'Immeasurable' + additionalLol + '!',
      'Infinite' + additionalLol + '!',
      'Dunno' + additionalLol + '!',
      'I don\'t know' + additionalLol + '!',
      'I won\'t tell you' + additionalLol + '!'
      ];
      
      responseList = [
      'Capacity of that is definitely ' + Rnd(GenerateMultiplier(2)) + ' ' + ReturnRandom(measurementVolumeList) + '.',
      'Around ' + Rnd(GenerateMultiplier(2)) + ' ' + ReturnRandom(measurementVolumeList) + '.',
      'Exactly ' + Rnd(GenerateMultiplier(2)) + ' ' + ReturnRandom(measurementVolumeList) + '.',
      'It\'s close to ' + Rnd(GenerateMultiplier(2)) + ' ' + ReturnRandom(measurementVolumeList) + '.',
      'I think the capacity of that is less than ' + Rnd(GenerateMultiplier(2)) + ' ' + ReturnRandom(measurementVolumeList) + '.',
      'I think the capacity of that is more than ' + Rnd(GenerateMultiplier(2)) + ' ' + ReturnRandom(measurementVolumeList) + '.'
      ];

      if(Chance(15))
        message.channel.send(ReturnRandom(specialList))
      else
        message.channel.send(ReturnRandom(responseList))
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------celebrate---------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'celebrate':
    
    response = '';
      
      responseList1 = [
      'https://i.imgur.com/KAxuMuU.png',
      'https://i.imgur.com/mdXZzVb.png',
      'https://i.imgur.com/nY38kvJ.jpg',
      'https://i.imgur.com/YUvEpDk.jpg',
      'https://i.imgur.com/U75V8Qr.jpg',
      'https://i.imgur.com/du6fIsg.jpg',
      pictureSupremeVictoryDuck
      ];
      
      responseList2 = [
      'Yay! Celebration time!',
      'Cool! Just remember to not invite ' + ReturnRandom(serverPeopleList) + '.',
      'Awesome! Just remember to invite ' + ReturnRandom(peopleStandardServerList) + '.',
      'Sorry I am not joining that' +additionalLol + '.',
      'I will prepare party in **' + GenerateRandomPlace() + '**.',
      'Yeah! Lets bring **' + GenerateRandomWeapon() + '** to the party' + additionalLol + '!',
      ':tada: :tada: :tada: :tada: :tada:'
      ];
      
      if(Chance(10))
        response = ReturnRandom(responseList1) + ' \n'
        
      response = response + ReturnRandom(responseList2)
      
      
      message.channel.send(response)
      break;
    
    //----------------------------------------------------------------------------------------------------------------------------
    //----------chance, chances---------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'chance':
    case 'chances':
      if(arguments[1] == null)
        return;

      if(Chance(50))
        i = Rnd(100)
      else
        i = Rnd(200)

      responseList = [
      'Chance for this: ' + Rnd(i) + '%.',
      'Chance for that: ' + Rnd(i) + '%.',
      'Exactly ' + Rnd(i) + '%.',
      'Definitely ' + Rnd(i) + '%.'
      ];

      message.channel.send(ReturnRandom(responseList))
      break;
    
    //----------------------------------------------------------------------------------------------------------------------------
    //----------choose------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'choose':
      var clearedChoices = message.content.slice(prefix.length + command.length);
      var rollItems = clearedChoices.split('|');

      message.channel.send(ReturnRandom(rollItems))
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------class-----------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'class':
      var who = RecognizeWho(arguments[1], message, command)
      var basicString = '';
      var finalString = '';
      var vClass

      if(arguments[1] == 'count')
      {
        finalString = GenerateRandomClass('count');
        message.channel.send('Number of possible outcomes (approximately): ' + finalString + '.');
        return;
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
      
      vClass = GenerateRandomClass()

      basicString = ReturnRandom(basePart);

      if(basicString != basePart[3] && basicString != basePart[7])
        basicString = basicString + AddAnA(vClass)

      message.channel.send(basicString + '**' + vClass + '**.')
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------cost, price, value------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'cost':
    case 'price':
    case 'value':
      specialList = [
      'That is worthless.',
      'That is priceless.',
      'You need to give ' + GenerateRandomWeapon() + ' for that.',
      'Only acceptable payment for that is ' + ReturnRandom(serverPeopleList) + '.'
      ]
        
      responseList = [
      Rnd(GenerateMultiplier(8)) + ' ' + ReturnRandom(valuesStandardList) + '.',
      'That costs ' + Rnd(GenerateMultiplier(8)) + ' ' + ReturnRandom(valuesStandardList) + '.',
      'That is worth ' + Rnd(GenerateMultiplier(8)) + ' ' + ReturnRandom(valuesStandardList) + '.',
      'Price for that is exactly ' + Rnd(GenerateMultiplier(8)) + ' ' + ReturnRandom(valuesStandardList) + '.'
      ];

      if(Chance(15))
        message.channel.send(ReturnRandom(specialList))
      else
        message.channel.send(ReturnRandom(responseList))
      
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------ddcheck-----------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'ddcheck':
      who = RecognizeWho(arguments[1], message, command);

      if(Chance(67))
        message.channel.send(who + ' survived!.\n\n' + MakeStringBold('"' + ReturnRandom(ddQuotesWinningBattleList) + '"'))
      else
        message.channel.send(who + ' survived!.\n\n' + MakeStringBold('"' + ReturnRandom(ddQuotesDeathblowList) + '"'))
      break;
    
    //----------------------------------------------------------------------------------------------------------------------------
    //----------ddquote-----------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'ddquote':
      switch(arguments[1])
      {
        case '1':
          message.channel.send('**"' + ReturnRandom(ddQuotesAfflictionList) + '"**')
          break;
          
        case '2':
          message.channel.send('**"' + ReturnRandom(ddQuotesVirtuesList) + '"**')
          break;

        case '3':
          message.channel.send('**"' + ReturnRandom(ddQuotesStrikingCriticalHitList) + '"**')
          break;
          
        case '4':
          message.channel.send('**"' + ReturnRandom(ddQuotesReceivingCriticalHitList) + '"**')
          break;

        case '5':
          message.channel.send('**"' + ReturnRandom(ddQuotesDeathDoorList) + '"**')
          break; 
        
        case '6':
          message.channel.send('**"' + ReturnRandom(ddQuotesWinningBattleList) + '"**')
          break; 
          
        case '7':
          message.channel.send('**"' + ReturnRandom(ddQuotesDeathblowList) + '"**')
          break; 

        default:
          message.channel.send('**"' + ReturnRandom(ddQuotesAllList) + '"**')
      }
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------dndalign--------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'dndalign':
      who = RecognizeWho(arguments[1], message, command)

      message.channel.send(who + ' is **' + ReturnRandom(dndAlignmentsList) + '**')
      break;  
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------hate, insult------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'hate':
    case 'insult':
      responseList = [
      'I hate you.',
      'You suck.',
      'You = noob.',
      'You are probably worst person in the world!',
      'Uninstall discord pls.',
      ReturnRandom(villainsPeopleList) + ' was better than you.',
      'Can you just leave this server?',
      'I have calculated your IQ and it is exactly ' + Math.floor(Math.random() * 40) + '.',
      'I don\'t know how is that even possible to suck as much as you.',
      'If laughter is the best medicine, your face must be curing the world.',
      'You\'re so ugly, you scared the crap out of the toilet.',
      'It\'s better to let someone think you are an Idiot than to open your mouth and prove it.',
      'I\'m jealous of people that don\'t know you!',
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
      'To make you laugh on Saturday, I need to tell you a joke on Wednesday.',
      'If you really spoke your mind, you\'d be speechless.',
      'Every time I\'m next to you, I get a fierce desire to be alone.',
      'How did you get here? Did someone leave your cage open?',
      'Don\'t you have a terribly empty feeling - in your skull?',
      'As an outsider, what do you think of the human race?',
      'Are you always this stupid or is today a special occasion?',
      'I believed in evolution until I met you.',
      'Mirrors don\'t lie, and lucky for you, they also don\'t laugh.',
      'No wonder everyone talks about you behind your back.',
      'Your face makes onions cry.',
      'If you were twice as smart, you\'d still be stupid.',
      'I\'m not saying that I hate you, but I\'d unplug your life support machine to charge my mobile.',
      'I wasn\'t born with enough middle fingers to let you know how I feel about you.',
      'I heard your parents took you to a dog show and you won.',
      'You look like something I\'d draw with my left hand.',
      'You\'re so fake, Barbie is jealous.',
      'Of course I talk like an idiot... How else would you understand me?',
      'What are you doing here? Did someone leave your cage open?',
      'I could eat a bowl of alphabet soup and crap out a smarter comeback than what you just said.',
      'I\'d love to insult you, but I won\'t do as well as nature did.',
      'You\'re living proof that evolution can go in reverse.',
      'You\'re so ugly, Hello Kitty said goodbye to you.',
      'You\'re so ugly the only dates you get are on a calendar.',
      'You\'re the reason they invented double doors.',
      'You\'re so dumb, I bet your dog teaches you tricks.',
      'If you were on fire and I had water, I\'d drink it.',
      'You\'ve got a great face for make up.',
      'You didn\'t just fall out of the stupid tree, you were dragged through dumbass forest.',
      'Shut up, you\'ll never be the man your mother is.',
      'Keep rolling your eyes, maybe you\'ll find a brain back there.',
      'Fake hair, fake nails, fake smile. Are you sure you weren\'t made in China?',
      'I\'m not saying you\'re stupid, I\'m just saying you\'ve got bad luck when it comes to thinking.',
      'There\'s only one problem with your face... I can see it.',
      'You\'re so fat you could sell shade.',
      'I bet your brain feels good as new, seeing that you\'ve never used it.',
      'Do you still love nature, despite what it did to you?',
      'What are you going to do for a face when the baboon wants his butt back?',
      'Those clothes don\'t make you look stupid. You make you look stupid.',
      'I think you are worse than people who like pineapple pizza.'
      ];
      
      message.channel.send(ReturnRandom(responseList))
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------heaviness, mass,weight-------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'heaviness':
    case 'mass':
    case 'weight':
      specialList = [
      'That is beyond the mass of supermassive black hole in ' + ReturnRandom(galaxies) + ' Galaxy' + additionalLol + '.',
      'Too light' + additionalLol + '.',
      'Too heavy' + additionalLol + '.',
      'Immeasurable' + additionalLol + '!',
      'Infinite' + additionalLol + '!',
      'Dunno' + additionalLol + '!',
      'I don\'t know' + additionalLol + '!',
      'I won\'t tell you' + additionalLol + '!'
      ];
      
      responseList = [
      'That weigh definitely ' + Rnd(GenerateMultiplier(2)) + ' ' + ReturnRandom(measurementWeighList) + '.',
      'That weigh around ' + Rnd(GenerateMultiplier(2)) + ' ' + ReturnRandom(measurementWeighList) + '.',
      'Weigh of that is exactly ' + Rnd(GenerateMultiplier(2)) + ' ' + ReturnRandom(measurementWeighList) + '.',
      'I think it\'s less than ' + Rnd(GenerateMultiplier(2)) + ' ' + ReturnRandom(measurementWeighList) + '.',
      'I think it\'s more than ' + Rnd(GenerateMultiplier(2)) + ' ' + ReturnRandom(measurementWeighList) + '.'
      ];

      if(Chance(15))
        message.channel.send(ReturnRandom(specialList))
      else
        message.channel.send(ReturnRandom(responseList))
      
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------height, length, width---------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'height':
    case 'length':
    case 'width':
      specialList = [
      'Beyond the horizon' + additionalLol + '.',
      'It\'s so short that I don\'t even see that' + additionalLol + '.',
      'Too short' + additionalLol + '.',
      'Too long' + additionalLol + '.',
      'Immeasurable' + additionalLol + '!',
      'Infinite' + additionalLol + '!',
      'I think that soon might reach the Moon' + additionalLol + '.',
      'Dunno' + additionalLol + '!',
      'I don\'t know' + additionalLol + '!',
      'I won\'t tell you' + additionalLol + '!'
      ];
      
      responseList = [
      'It\'s definitely ' + Rnd(GenerateMultiplier(2)) + ' ' + ReturnRandom(measurementLengthList) + ' .',
      'It\'s around ' + Rnd(GenerateMultiplier(2)) + ' ' + ReturnRandom(measurementLengthList) + ' .',
      'That is exactly ' + Rnd(GenerateMultiplier(2)) + ' ' + ReturnRandom(measurementLengthList) + '.',
      'I think it\'s less than ' + Rnd(GenerateMultiplier(2)) + ' ' + ReturnRandom(measurementLengthList) + '.',
      'I think it\'s more than ' + Rnd(GenerateMultiplier(2)) + ' ' + ReturnRandom(measurementLengthList) + '.'
      ];

      if(Chance(15))
        message.channel.send(ReturnRandom(specialList))
      else
        message.channel.send(ReturnRandom(responseList))
      break;
      
    //---------------------------------------------------------------------------------------------------------------------------
    //----------help-------------------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------------------------------
    case 'help':
      responseList1 = [
      'I think you should visit a doctor.',
      'Ravandel is the specialist who you want to talk with about your problems.',
      'Electroshock therapy will work wonders for you.',
      'I would advise lobotomy.',
      'Chill and eat something good.',
      'Get commission from Pumpkins. You will be happy and she will be happpy.',
      'I think you need plastic surgery.',
      'I suggest whipping session in the abbey.',
      'Don\'t worry, be happy!',
      'Stop wasting your time on h!help command and do something with your miserable life.',
      'Read a book.',
      'Draw something.',
      'Well, praying to God might be a good idea in your situation.',
      'Educate yourself.',
      'Take out the trash, because your home looks like garbage dump' + additionalLol + '.',
      'Go into woods and try to find Yeti.',
      'Tell your bullies they\'re hurting you.',
      'There are bigger problems than your depression.',
      'Ignore the bullies.',
      'Don\'t trust anyone.',
      'Get new friends.',
      'Buy a house.',
      'Just let it go.',
      'If you feel alone, watch a horror movie before going to bed. You won\'t feel alone anymore.',
      'No flashlight on your phone? Take a photo of the sun, and use it in the dark.',
      'No ice for drinks? Use frozen vegetables.',
      'It\'s very expensive to eat 3 times a day. Wake up later, miss breakfast, and save money.',
      'Having a bad day? No worries! Wear sunglasses. Now you\'re having a bad evening.',
      'If you can\'t afford virtual reality headsets, you can close your eyes and imagine everything you want.',
      'A glove filled with warm water creates the illusion that you\'re not alone.'
      ];
      
      responseList2 = [
      'I think you should talk to **' + ReturnRandom(serverPeopleList) + additionalLol + '**.',
      'Go outside for ' + Rnd(12) + ' hours' + additionalLol + '.',
      'I would advise ' + Rnd(12) + ' hours of sleep' + additionalLol + '.',
      'You should take a trip to **' + GenerateRandomPlace() + additionalLol + '**.',
      'Watch ' + ReturnRandom(serialsList) + additionalLol +  '.',
      'Learn how to use **' + GenerateRandomWeapon() + additionalLol +  '**.',
      ReturnRandom(verbsStandardList) + ' ' + GenerateRandomAnimal() + additionalLol +  '.',
      ReturnRandom(verbsAllList) + ' ' + ReturnRandom(peopleStandardServerList) + additionalLol +  '.',
      'Have you tried going to ' + GenerateRandomPlace() + ' and using ' + GenerateRandomWeapon() + additionalLol +  '?',
      'Eat ' + GenerateRandomSize() + ' ' + ReturnRandom(itemsMealList) + additionalLol + '.',
      'You shouldn\'t have gone to ' + ReturnRandom(furryPlacesList) + '.',
      '*Gives you his hand.*'
      ]
      
      if(Chance(20))
        message.channel.send(ReturnRandom(responseList1))
      else
        message.channel.send(ReturnRandom(responseList2))
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------how---------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'how':
      var reason = '';

      var soloList = [
      'Abduction', 'Abomination', 'Acid', 'Art', 'Atomic Bomb',
      'Ballista', 'Bandits', 'Battering Ram', 'Bookmaster Awre',
      'the Booze', 'Brainwashing',
      'C4', 'Catapult', 'Cloning', 'the Coconut', 'Coconuts',
      'Darkness', 'Deciduu', 'Delight', 'Despair', 'Destruction', 'Doctor Pumpkins', 'Doom', 'the Drugs', 'the Dung', 'Duplication Device',
      'Electroshock Therapy', 'Evil',
      'Fury',
      'Gambling', 'Garbage',
      'Immorality',
      'Job', 'Justice',
      'Kidnapping',
      'Lemmy','Lobotomy',
      'Madness', 'Me', 'Money',
      'Nuclear Missle', 'the Nut', 'Nuts',
      'Pleasure', 'Power',
      'Ravandel','the Rot',
      'Seda','Shea', 'Seismic Activity', 
      'Trebuchet', 'Troglodyte',
      'Ugliness', 'Urutaa', 'Uselessness',
      'Vardgo', 'Violence',
      'War', 'the Weed', 'Whipping in the Abbey', 'Wolf Scribe'
      ]

      var dualList1 = [
      'Abominable', 'Aggressive','Annointed', 'Awesome', 'Awful',
      'Blood', 'Bloody','Brutal',
      'Cannibalistic', 'Celestial', 
      'Dark', 'Death', 'Degenerate', 'Destructive', 'Doom', 'Dung',
      'Evil',
      'Furious', 'Furry', 'Fury',
      'Immortal', 'Immoral', 'Insane',
      'Mad', 'Maniacal', 'Masochistic','Mindless',
      'Nutty',
      'Primitive', 'Psychopathic',
      'Rotten',
      'Sacred', 'Sadistic', 'Smart', 'Strong', 'Suicidal',
      'Vengeful', 'Violent',
      'Useless',
      'War', 'Weed'
      ]

      var dualList2 = [
      'Bandits', 'Beef','Booze', 'Brothel',
      'Cannibal', 'Cannibals','Coconut', 'Coconuts', 'Cult',
      'Darkness', 'Delight', 'Delusion', 'Destruction', 'Doom', 'Drug', 'Drugs', 'Dung',
      'Fear', 'Fools','Furries', 'Furry', 'Fury',
      'Ghost',
      'Hand', 'Honor',
      'Intellect',
      'Justice',
      'Light',
      'Madness', 'Maniac', 'Mask', 'Masochism', 'Mercy', 'Money', 'Moon', 'Mutant',
      'Nut', 'Nuts',
      'Pleasure', 'Pleasures', 'Power', 'Psychopath',
      'Retribution', 'Rot',
      'Sadism',
      'Troglodyte', 'Troll',
      'Vengeance', 'Violence',
      'War', 'Weed', 'Whipping'
      ]
      
      if(Chance(15))
        reason = '**' + GenerateRandomItem() + '**';
      else if(Chance(60))
        reason = '**' + ReturnRandom(soloList) + '**';
      else
      {
        var firstPart = ReturnRandom(dualList1);
        var secondPart = ReturnRandom(dualList2);
        
        while(firstPart == secondPart || firstPart + 's' == secondPart || firstPart + 'es' == secondPart)
          secondPart = ReturnRandom(dualList2);
        
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
      
    //---------------------------------------------------------------------------------------------------------------------------
    //-----hug-------------------------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------------------------------
    case 'hug':
      who = RecognizeWhoSimpler(arguments[1], message, command)
      
      responseList1 = [
      ':hugging:',
      '*Hugs ' + who + '*.',
      pictureHasselHug
      ]
      
      responseList2 = [
      'Sorry but I am not touching ' + who + '. This is gross' + additionalLol + '.',
      'Nah, let ' + ReturnRandom(serverPeopleList) + ' hugs you.',
      'Nope, no hugs for you' + additionalLol + '.'
      ]
      
      if(Chance(15))
        message.channel.send(ReturnRandom(responseList2))
      else
        message.channel.send(ReturnRandom(responseList1))
      break;
      
    //---------------------------------------------------------------------------------------------------------------------------
    //-----invite----------------------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------------------------------
    case 'invite':
      message.channel.send('https://discordapp.com/oauth2/authorize?client_id=485910048032161792&scope=bot')
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //-----love-------------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'love':
      who = RecognizeWhoSimpler(arguments[1], message, command)

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
      'I love your honesty and sincerity.',
      'I would hang out with you even if you hadn\'t showered for a couple days.',
      'I would be really okay with you seeing me without makeup, that\'s how much I like you.',
      'You have really good taste in friends (i.e. me).',
      'If you cooked something really gross, I like you enough that I would tell you instead of politely eating it and hating everything.',
      'If you were running for president, I would vote for you.',
      'Our lives would be incomplete without you in it.',
      'There\'s ordinary, and then there\'s you.',
      'You are my favourite weakness.',
      'You look great for your age.',
      'I bet you taste great.',
      'You\'re hot for whatever race you are.',
      'You look like a sexy sausage.',
      'You\'re so small and cute. I want to pick you up and put you in my pocket.',
      
      'I love fat people like you!',
      'I love how ugly you are.',
      'Usually ugly people disgust me, but you are actually cute.',
      'You are beatiful... On the inside.',
      'I don\'t care what everyone else says. I don\'t think you\'re that bad.'
      ];

      var array2 = [
      'I love ' + who + '.',
      'I really, really like ' + who + '. Like REALLY.',
      who + ' is amazing!',
      who + ' is probably best person in the world!',
      who + ' = awesome.',
      who + ' is the coolest person I have ever seen!',
      'I think ' + who + ' is hot, I would rate ' + who + ' look 11/10.',
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
      'I love ' + who + ' honesty and sincerity.',
      'I would hang out with ' + who + ' even if you hadn\'t showered for a couple days.',
      'I would be really okay with ' + who + ' seeing me without makeup, that\'s how much I like ' + who + '.',
      who + ' has really good taste in friends (i.e. me).',
      'If ' + who + ' cooked something really gross, I like ' + who + ' enough that I would tell ' + who + ' instead of politely eating it and hating everything.',
      'If ' + who + ' was running for president, I would vote for ' + who + '.',
      'Our lives would be incomplete without ' + who + ' in it.',
      'There\'s ordinary, and then there\'s ' + who + ' .',
      who + ' is my favourite weakness.',
      'You look great for your age.',
      'I bet ' + who + ' tastes great.',
      who + ' is hot for whatever race you are.',
      who + ' looks like a sexy sausage.',
      who + ' is so small and cute. I want to pick ' + who + ' up and put ' + who + ' in my pocket.',
      
      'I love fat people like ' + who + '!',
      'I love how ugly ' + who + ' is.',
      'Usually ugly people disgust me, but' + who + ' is actually cute.',
      who + ' is beatiful... On the inside.',
      'I don\'t care what everyone else says. I don\'t think ' + who + ' is that bad.'
      ];

      if(arguments[1] == 'me' || arguments[1] == null)
        responseList = array1;
      else
        responseList = array2;

      message.channel.send(ReturnRandom(responseList))
      break;
      
      
    //----------------------------------------------------------------------------------------------------------------------------
    //-----mood-------------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'mood':
      var array1 = [
      ReturnRandom(verbsStandardContinuousHumanInteractionsList) + ' ' + GenerateRandomPerson() + ' ' + ReturnRandom(prepositionsPlaces) + ' ' + GenerateRandomPlace() + '.',
      ReturnRandom(verbsStandardContinuousList) + ' ' + ReturnRandom(prepositionsPlaces) + ' ' + GenerateRandomPlace() + '.'
      ]

      message.channel.send(ReturnRandom(array1))
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //-----name-------------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'name':
      var finalString = '';
      
      if(arguments[1] == 'count')
      {
        message.channel.send(TotalNamesCount())
        return;
      }

      if(arguments[1] != 'm' && arguments[1] != 'f')
        if(Chance(50))
          arguments[1] = 'm'
        else
          arguments[1] = 'f'
      
      if(arguments[3] < 0 || arguments[3] > 100 || arguments[3] == null)
        arguments[3] = 1;

      var i = 0;
      
      while(i != arguments[3])
      {
        i = i + 1;
        
        if(arguments[1] == 'm')
          finalString = finalString + GenerateRandomMaleName(arguments[2])
        else
          finalString = finalString + GenerateRandomFemaleName(arguments[2])
          
        if(i != arguments[3])
          finalString = finalString + ', '
      }
      
      message.channel.send(finalString)
      break;
    
    //---------------------------------------------------------------------------------------------------------------------------
    //-----peril-----------------------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------------------------------
    case 'peril':
      if (arguments[1] == null)
      {
        rollValue = Math.floor(Math.random() * 3);
        rollValue = rollValue + 3;
      }
      else
        rollValue = arguments[1];

      armellDiceAmount = RollArmelloDices(rollValue);
      message.channel.send('Peril: [Rot: ' + armellDiceAmount[0] + ', Sword: ' + armellDiceAmount[1] + ', Sun: ' + armellDiceAmount[2] + ', Moon: ' + armellDiceAmount[3] + ', Shield: ' + armellDiceAmount[4] + ', Wyld: ' + armellDiceAmount[5] + ']')
      break;
      
    //---------------------------------------------------------------------------------------------------------------------------
    //-----pic----------------------------------------------------------
    //---------------------------------------------------------------------------------------------------------------------------
    case 'pic':
      var linkToPic;
      
      switch(arguments[1])
      {
        case 'kidding':
          linkToPic = 'https://i.imgur.com/8lJPYe4.png';
          break;
          
        case 'bait':
          linkToPic = 'https://i.imgur.com/cbqQp0Y.png';
          break;
          
        case 'idontgetit':
          linkToPic = 'https://i.imgur.com/rVzWUTn.png';
          break;
          
        case 'jackie':
          linkToPic = 'https://i.imgur.com/hbdTAl8.png';
          break;
          
        case 'noob':
          linkToPic = 'https://i.imgur.com/NU3XxPO.png';
          break;
          
        case 'throw':
          linkToPic = 'https://i.imgur.com/9Jnf496.png';
          break;
          
        case 'dosomething':
          linkToPic = 'https://i.imgur.com/b1wvo8w.png';
          break;
          
        case 'concerned':
          linkToPic = 'https://i.imgur.com/2wQTVwd.png';
          break;
          
        case 'trollface':
          linkToPic = 'https://i.imgur.com/RMHWix2.png';
          break;
          
        case 'sad':
          linkToPic = 'https://i.imgur.com/MznCnvD.png';
          break;
          
        case 'megusta':
          linkToPic = 'https://i.imgur.com/FogG79P.png';
          break;
          
        case 'truestory':
          linkToPic = 'https://i.imgur.com/9uTkseS.png';
          break;
          
        case 'impossibru':
          linkToPic = 'https://i.imgur.com/PRQABCC.png';
          break;
          
        case 'bsmeter':
          linkToPic = 'https://i.imgur.com/WulIVtE.png';
          break;
          
        case 'nope':
          linkToPic = 'https://i.imgur.com/jJTZIm0.png';
          break;
          
        case 'cute':
          linkToPic = 'https://i.imgur.com/BOKeJOG.png';
          break;

        case 'drakeyes':
          linkToPic = 'https://i.imgur.com/5ZITUta.png';
          break;
          
        case 'confused':
          linkToPic = 'https://i.imgur.com/DVQvh46.png';
          break;
          
        case 'seemslegit':
          linkToPic = 'https://i.imgur.com/vCCXGeB.png';
          break;
          
        case 'chuckok':
          linkToPic = 'https://i.imgur.com/UZBv7Zc.png';
          break;
          
        case 'pokerface':
          linkToPic = 'https://i.imgur.com/zjmq40J.png';
          break;
          
        case 'dude':
          linkToPic = 'https://i.imgur.com/9FiB5OP.png';
          break;
          
        case 'obvious':
          linkToPic = 'https://i.imgur.com/CixYqts.png';
          break;
          
        case 'iamout':
          linkToPic = 'https://i.imgur.com/mHpudgf.png';
          break;
          
        case 'fairenough':
          linkToPic = 'https://i.imgur.com/HJi9wjU.png';
          break;
          
        case 'facepalm':
          linkToPic = 'https://i.imgur.com/eLUsk9d.png';
          break;
          
        case 'doubt':
          linkToPic = 'https://i.imgur.com/xBFh4Te.png';
          break;
          
        case 'goodjob':
          linkToPic = 'https://i.imgur.com/F2n0KMt.png';
          break;
          
        case 'yeah':
          linkToPic = 'https://i.imgur.com/JA3doBb.png';
          break;

        case 'cool':
          linkToPic = 'https://i.imgur.com/cVRVmyf.png';
          break;
          
        case 'bplease':
          linkToPic = 'https://i.imgur.com/kHV47Ou.png';
          break;
          
        case 'wtf':
          linkToPic = 'https://i.imgur.com/OV8c83R.png';
          break;
          
        case 'arnielikes':
          linkToPic = 'https://i.imgur.com/9d6X5R1.png';
          break;
          
        case 'doitnow':
          linkToPic = 'https://i.imgur.com/EckwoVF.png';
          break;
          
        case 'what':
          linkToPic = 'https://i.imgur.com/vsr0rjs.png';
          break;

        case 'mickey':
          linkToPic = 'https://i.imgur.com/tR7VZE0.png';
          break;
          
        case 'attack':
          linkToPic = 'https://i.imgur.com/YjHRiJv.png';
          break;
          
        case 'sinister':
          linkToPic = 'https://i.imgur.com/9hlYrxY.png';
          break;
          
        case 'drakeno':
          linkToPic = 'https://i.imgur.com/w1kTtJA.png';
          break;
          
        case 'xd':
          linkToPic = 'https://i.imgur.com/Fyup5xA.png';
          break;
          
        case 'smart':
          linkToPic = 'https://i.imgur.com/VefDNlk.png';
          break;

        case 'mellikes':
          linkToPic = 'https://i.imgur.com/LGCsLMV.png';
          break;
          
        case 'parkerlikes':
          linkToPic = 'https://i.imgur.com/K8Dyg6e.png';
          break;
          
        case 'angry':
          linkToPic = 'https://i.imgur.com/nkUiuSU.png';
          break;
          
        case 'pulpfictionlikes':
          linkToPic = 'https://i.imgur.com/ev7uVuY.png';
          break;
          
        case 'trap':
          linkToPic = 'https://i.imgur.com/sBDvybj.png';
          break;
          
        case 'wall':
          linkToPic = 'https://i.imgur.com/uqZPyK5.png';
          break;

        case 'prehistory':
          linkToPic = 'https://i.imgur.com/ETPzsbH.png';
          break;
          
        case 'throwanother':
          linkToPic = 'https://i.imgur.com/u6IwHm9.png';
          break;
          
        case 'krillin':
          linkToPic = 'https://i.imgur.com/duiEzEQ.png';
          break;
          
        case 'keanu':
          linkToPic = 'https://i.imgur.com/LLnZqPk.png';
          break;
          
        case 'dontwannalive':
          linkToPic = 'https://i.imgur.com/IRbUTj2.png';
          break;
          
        case 'charliecocaine':
          linkToPic = 'https://i.imgur.com/OZqdJcg.png';
          break;

        case 'trollorstupid':
          linkToPic = 'https://i.imgur.com/5jXnVLw.png';
          break;
          
        case 'itsatrap':
          linkToPic = 'https://i.imgur.com/VPvC9jk.png';
          break;
          
        case 'nopower':
          linkToPic = 'https://i.imgur.com/oS67pzi.png';
          break;
          
        case 'bsintensifies':
          linkToPic = 'https://i.imgur.com/OSNCumq.png';
          break;
          
        case 'pasta':
          linkToPic = 'https://i.imgur.com/gd3Lx1T.png';
          break;
          
        case 'mythbusters':
          linkToPic = 'https://i.imgur.com/lETdU4E.png';
          break;

        case 'xzibit':
          linkToPic = 'https://i.imgur.com/bRXSiBb.png';
          break;
          
        case '10score':
          linkToPic = 'https://i.imgur.com/I9CTKlr.png';
          break;
          
        case 'doublelikes':
          linkToPic = 'https://i.imgur.com/ph18a49.png';
          break;
          
        case 'genius':
          linkToPic = 'https://i.imgur.com/PPx5BLM.png';
          break;
          
        case 'sweating':
          linkToPic = 'https://i.imgur.com/acWwV40.png';
          break;
          
        case 'rambolikes':
          linkToPic = 'https://i.imgur.com/XvJ83ih.png';
          break;

        case 'orbital':
          linkToPic = 'https://i.imgur.com/gNucxNw.png';
          break;

        case 'crossover':
          linkToPic = 'https://i.imgur.com/pQljlNR.png';
          break;
          
        case 'offend':
          linkToPic = 'https://i.imgur.com/2TkYGXE.png';
          break;

        case 'doesntaffect':
          linkToPic = 'https://i.imgur.com/f96tYIG.png';
          break;
          
        case 'propaganda':
          linkToPic = 'https://i.imgur.com/eJPlUkk.png';
          break;
          
        case 'babyyeah':
          linkToPic = 'https://i.imgur.com/QKp0hq6.png';
          break;
          
        case 'wrong':
          linkToPic = 'https://i.imgur.com/Ea3ztjf.png';
          break;
          
        case 'worsttrade':
          linkToPic = 'https://i.imgur.com/pBkajpu.png';
          break;
          
        case 'terminatorlikes':
          linkToPic = 'https://i.imgur.com/edpMSyL.png';
          break;

        case 'dafuq':
          linkToPic = 'https://i.imgur.com/fZPrp8Z.png';
          break;

        case 'beating':
          linkToPic = 'https://i.imgur.com/clP1SJf.png';
          break;
          
        case 'booze':
          linkToPic = 'https://i.imgur.com/Hh58h6B.png';
          break;

        case 'mcmahon1':
          linkToPic = 'https://i.imgur.com/wqSZgQN.png';
          break;
          
        case 'mcmahon2':
          linkToPic = 'https://i.imgur.com/VBJqzAJ.png';
          break;
          
        case 'mcmahon3':
          linkToPic = 'https://i.imgur.com/BTVb9Kq.png';
          break;
          
        case 'adapt':
          linkToPic = 'https://i.imgur.com/DlBYayG.png';
          break;
          
        case 'evilestthing':
          linkToPic = 'https://i.imgur.com/lWWgZ8s.png';
          break;
          
        case 'laugh':
          linkToPic = 'https://i.imgur.com/O1aCpTA.png';
          break;

        case 'summon':
          linkToPic = pictureSummonFToGive
          break;
          
        case 'shotgun':
          linkToPic = 'https://i.imgur.com/qr1upDI.png';
          break;
          
        case 'barbaric':
          linkToPic = 'https://i.imgur.com/Ml1uB28.png';
          break;
        
        case 'justdoit':
          linkToPic = 'https://i.imgur.com/yE6Q5fv.png';
          break;
          
        default:
          linkToPic = 'Available pics!\n' +
          '**kidding**\n'+
          '**doubt**\n'+
          '**bait**\n'+
          '**idontgetit**\n'+
          '**jackie**\n'+
          '**noob**\n'+
          '**throw**\n'+
          '**dosomething**\n'+
          '**concerned**\n'+
          '**trollface**\n'+
          '**sad**\n'+
          '**megusta**\n'+
          '**truestory**\n'+
          '**impossibru**\n'+
          '**bsmeter**\n'+
          '**nope**\n'+
          '**cute**\n'+
          '**drakeyes**\n'+
          '**confused**\n'+
          '**seemslegit**\n'+
          '**chuckok**\n'+
          '**pokerface**\n'+
          '**dude**\n'+
          '**obvious**\n'+
          '**iamout**\n'+
          '**fairenough**\n'+
          '**facepalm**\n'+
          '**goodjob**\n'+
          '**yeah**\n'+
          '**cool**\n'+
          '**bplease**\n'+
          '**wtf**\n'+
          '**arnielikes**\n'+
          '**doitnow**\n'+
          '**what**\n'+
          '**mickey**\n'+
          '**attack**\n'+
          '**sinister**\n'+
          '**drakeno**\n'+
          '**xd**\n'+
          '**smart**\n'+
          '**mellikes**\n'+
          '**parkerlikes**\n'+
          '**angry**\n'+
          '**pulpfictionlikes**\n'+
          '**trap**\n'+
          '**wall**\n'+
          '**prehistory**\n'+
          '**throwanother**\n'+
          '**krillin**\n'+
          '**keanu**\n'+
          '**dontwannalive**\n'+
          '**charliecocaine**\n'+
          '**trollorstupid**\n'+
          '**itsatrap**\n'+
          '**nopower**\n'+
          '**bsintensifies**\n'+
          '**pasta**\n'+
          '**mythbusters**\n'+
          '**xzibit**\n'+
          '**10score**\n'+
          '**doublelikes**\n'+
          '**genius**\n'+
          '**sweating**\n'+
          '**rambolikes**\n'+
          '**orbital**\n'+
          '**crossover**\n'+
          '**offend**\n'+
          '**doesntaffect**\n'+
          '**propaganda**\n'+
          '**babyyeah**\n'+
          '**wrong**\n'+
          '**worsttrade**\n'+
          '**terminatorlikes**\n'+
          '**dafuq**\n'+
          '**beating**\n'+
          '**booze**\n'+
          '**mcmahon1**\n'+
          '**mcmahon2**\n'+
          '**mcmahon3**\n'+
          '**adapt**\n'+
          '**evilestthing**\n'+
          '**laugh**\n'+
          '**summon**\n'+
          '**shotgun**\n'+
          '**barbaric**\n'+
          '**justdoit**\n'
          ;
          break;
      }
      
      message.channel.send(linkToPic)
      break;
    
    //----------------------------------------------------------------------------------------------------------------------------
    //----------rant------------------------------------------------------------
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
      
      responseList1 = [
      'Oh... This is so sad that I am thinking about formatting myself...',
      'And what makes you think it was not deserved' + additionalLol + '?',
      'I am sorry to hear that...',
      'Congratulations! You have been nominated for Drama Queen of the year' + additionalLol + '!',
      'Rotfl, this is fascinating, continue and bring me popcorn' + additionalLol + '.',
      'This is probably more fake than ' + ReturnRandom(fakeList) + additionalLol + '.',
      'Am I supposed to cry or laugh at this' + additionalLol + '?',
      'Stop being crybaby' + additionalLol + '.',
      'I think you should write a book about that' + additionalLol + '.',
      'Stop crying for attention like a small girl' + additionalLol + '.',
      'Please cancel my subscription to your issues' + additionalLol + '.',
      'Pleas stop already with this BS' + additionalLol + '.',
      'I totally understand now why you feel that way. Thank you for letting me know' + additionalLol + '.',
      'I don\'t remember asking for your opinion' + additionalLol + '.',
      'This is so sad, can we get an OOF' + additionalLol + '?',
      pictureSummonFToGive,
      pictureOrbitalBombardment,
      pictureMeGusta,
      pictureImproviseAdaptOvercome
      ];
      
      responseList2 = [
      ':cry:',
      'Don\'t worry, all will be all right' + additionalLol + '.',
      'Lol, no one cares anyway.',
      pictureHasselHug,
      'And you made ' + ReturnRandom(peopleAllList) + ' cry' + additionalLol + '.',
      Rnd(100) + ' ' + GenerateRandomAnimal() + ' died because of that' + additionalLol + '.',
      'That information just made me ' + ReturnRandom(baseAdverbsList) + ' ' + ReturnRandom(adjectivesAfflictionsVirtuesList) + additionalLol + '.',
      'That information just made me ' + ReturnRandom(adjectivesAfflictionsVirtuesList) + additionalLol + '.',
      'You need to visit ' + GenerateRandomPlace() + ' in order to get better' + additionalLol + '.',
      'That problem looks ' + GenerateRandomSize() + additionalLol + '.'
      ];

      if(arguments[1] == null)
        message.channel.send(ReturnRandom(emptyList))
      else
      {
        if(Chance(20))
          message.channel.send(ReturnRandom(responseList1))
        else
          message.channel.send(ReturnRandom(responseList2))
      }
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------rate------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'rate':
      var firstPartArray = ['', 'Hmm. I\'d rate that ', 'I\'d give that ', 'I\'d say '];
      var personifiedFirstPartArray = ['', 'Hmm. I\'d rate you ', 'I\'d give you a ', 'I\'d say '];

      var specialArray = [
      'I think we need a negative scale for that.',
      'That is completely out of scale!',
      'Better than ' + ReturnRandom(villainsPeopleList) + '.',
      ReturnRandom(villainsPeopleList) + ' was better.',
      'Amazing!',
      'Incredible!',
      'Why you even wanna rate that?',
      'Utter garbage.',
      'Over 9000!'
      ];

      var personifiedSpecialArray = [
      'I think we need a negative scale to rate you.',
      'You are completely out of scale!',
      'Better than ' + ReturnRandom(villainsPeopleList) + '.',
      ReturnRandom(villainsPeopleList) + ' was better than you.',
      'You are amazing!',
      'You are incredible!',
      'Why you even wanna rate yourself?',
      'You suck lol.',
      'You suck.',
      'Over 9000!'
      ];

      if (arguments[1] == 'me' || arguments[1] == null)
      {
        firstPartArray = personifiedFirstPartArray;
        specialArray = personifiedSpecialArray;
      }

      if(Chance(15))
        message.channel.send(ReturnRandom(specialArray))
      else
        message.channel.send(ReturnRandom(firstPartArray) + Math.floor(Math.random() * 14) + '/10.')
      break;
      
    //------------------------------------------------------------------------------------------------------------------------------
    //----------resolve-----------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------------
    case 'resolve':
      var result;
      var quoteList = ddQuotesAfflictionList;
      who = RecognizeWho(arguments[1], message, command)

      if(Chance(20))
        if(Chance(25))
        {
          result = ReturnRandom(specialVirtuesList);
          quoteList = ddQuotesVirtuesList;
        }
        else
          result = ReturnRandom(specialAfflictionsList);
      else if (Chance(25))
      {
        result = ReturnRandom(virtuesList);
        quoteList = ddQuotesVirtuesList;
      }
      else
        result = ReturnRandom(afflictionsList);

      message.channel.send(who + '\'s resolve is tested...\n' + who + ' is **' + result + '**\n\n' + MakeStringBold('"' + ReturnRandom(quoteList) + '"'))
      break;
      
    //---------------------------------------------------------------------------------------------------------------------------
    //----------roll-----------------------------------------------------------
    //---------------------------------------------------------------------------------------------------------------------------
    case 'roll':
      var rollItems;
      var numberOfRolls;
      var typeOfDice;
      var rollsIndividuals = '[';
      var rollsTotalAmount = 0;

      if(arguments[1] == null)
      {
        numberOfRolls = 1;
        typeOfDice = 6;
      }
      else
      {
        rollItems = arguments[1].split('d');
        numberOfRolls = rollItems[0];
        typeOfDice = rollItems[1];
      }

      if(numberOfRolls == null || numberOfRolls == 0)
        numberOfRolls = 1;

      if(typeOfDice == null || typeOfDice == 0)
        typeOfDice = 6;

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
          rollValue = RndNo0(typeOfDice);
          rollsIndividuals = rollsIndividuals + rollValue;

          if(i != numberOfRolls - 1)
            rollsIndividuals = rollsIndividuals + ',';

          rollsTotalAmount = rollsTotalAmount + rollValue;
        }
      }
      
      message.channel.send('Result: ' + rollsIndividuals + '] Total amount: ' + rollsTotalAmount)
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------size--------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'size':
      var properSizeList;

      switch(Rnd(2))
      {
        case 0:
          properSizeList = sizeBigList;
          break;
          
        case 1:
          properSizeList = sizeSmallList;
          break;
        
        case 2:
          properSizeList = sizeAverageList;
          break;
      }
      
      specialList = [
      'This is the smallest thing i have ever seen in my life' + additionalLol + '.',
      'This is the biggest thing i have ever seen in my life' + additionalLol + '.',
      'Immeasurable' + additionalLol + '!',
      'Infinite' + additionalLol + '!',
      'I fear that size' + additionalLol + '!',
      'Dunno' + additionalLol + '!',
      'I don\'t know' + additionalLol + '!',
      'I won\'t tell you' + additionalLol + '!'
      ];
      
      responseList = [
      'That is ' + ReturnRandom(properSizeList) + additionalLol + '.',
      ReturnRandom(properSizeList) + additionalLol + '.',
      'Too ' + ReturnRandom(properSizeList) + additionalLol + '.'
      ];

      if(Chance(15))
        message.channel.send(ReturnRandom(specialList))
      else
        message.channel.send(ReturnRandom(responseList))
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //-----specificname-------------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'specificname':
      var finalString = '';
      var i = 0;
      var choice = 0;
      
      if(arguments[2] == null)
        arguments[2] = ''
        
      if(arguments[4] < 0 || arguments[4] > 100 || arguments[4] == null)
        arguments[4] = 1;
      
      if(arguments[1] == 'end')
      {
        if(arguments[3] == 'm')
          choice = 1
        else
          choice = 2
      }
      else
      {
        if(arguments[3] == 'm')
          choice = 3
        else
          choice = 4
      } 

      while(i != arguments[4])
      {
        i = i + 1;
        
        switch (choice)
        {   
          case 1:
            finalString = finalString + GenerateRandomEndingMaleName(arguments[2])
            break
        
          case 2:
            finalString = finalString + GenerateRandomEndingFemaleName(arguments[2])
            break
            
          case 3:
            finalString = finalString + GenerateRandomStartingMaleName(arguments[2])
            break
            
          case 4:
            finalString = finalString + GenerateRandomStartingFemaleName(arguments[2])
            break
        }

        if(i != arguments[4])
          finalString = finalString + ', '
      }

      message.channel.send(finalString)
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------weapon------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'weapon':
      message.channel.send('**' + GenerateRandomWeapon() + '**')
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------weapons-----------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'weapons':
      var numberOfWeapons = Rnd(5) + 3;

      for (i = 0; i < numberOfWeapons; i++)
        message.channel.send('**' + GenerateRandomWeapon() + '**')
      break;
      
    //---------------------------------------------------------------------------------------------------------------------------
    //----------when-----------------------------------------------------------
    //---------------------------------------------------------------------------------------------------------------------------
    case 'when':
      var timeHours = Math.floor(Math.random() * 24);
      var timeMinutes = Math.floor(Math.random() * 60);

      if(timeHours < 10)
        timeHours = '0' + timeHours;

      if(timeMinutes < 10)
        timeMinutes = '0' + timeMinutes;

      specialList = [
      'Today.',
      'Tomorrow.',
      'Soon.',
      'Now.',
      'Never.',
      'Never lol.',
      'Yesterday.',
      'Soon.',
      'You don\'t understand concept of time anyway' + additionalLol + '.',
      ];
      
      responseList = [
      'In ' + Rnd(GenerateMultiplier(2)) + ' ' + ReturnRandom(timeList) + '.',
      'In ' + (Rnd(GenerateMultiplier(2)) + 2018) + '.',
      'Tomorrow ' + timeHours + ':' + timeMinutes + '.',
      'Day after tomorrow ' + timeHours + ':' + timeMinutes + '.'
      ];

      if(Chance(50))
        message.channel.send(ReturnRandom(responseList))
      else
        message.channel.send(ReturnRandom(specialList))
        
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------where-------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'where':
      message.channel.send('**' + GenerateRandomPlace() + '**')
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------who---------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'who':
      message.channel.send(GenerateRandomPerson())
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------whois-------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'whois':
      var finalString = '';
      var mainList;
      var vPerson;
      who = RecognizeWho(arguments[1], message, command);
      
      var specialList = [
      'nobody',
      'a noob',
      'nobody special',
      'a random person',
      'a VIP',
      'someone from a TV show',
      'someone from the Anime',
      'someone funny',
      'a communist',
      'a marxist',
      'a savage'
      ];
      
      if(Chance(50))
        person = TransformToProperEndingApostrophe(ReturnRandom(peopleAllList))
      else
        person = 'my'
      
      if(Chance(30))
      {
        var mainList = [
        'I think I saw ' + who + ' in ' + GenerateRandomPlace() + '.',
        who + ' was probably with me in ' + GenerateRandomPlace() + '.',
        'I rescued ' + who + ' from the ' + ReturnRandom(creaturesFullList) + ' in ' + ReturnRandom(serialsList) + '.',
        who + ' was that ' + ReturnRandom(creaturesFullList) + ' in ' + ReturnRandom(serialsList) + '.',
        'I have definitely seen ' + who + ' in ' + GenerateRandomPlace() + '.'
        ];
      }
      else 
      {
        if(Chance(15))
          finalString = ReturnRandom(specialList);
        else
        {
          if(Chance(35))
            finalString = person + ' ' + ReturnRandom(adjectivesAllList) + ' ' + ReturnRandom(classesFunnyList);
          if(Chance(35))
            finalString = person + ' ' + ReturnRandom(adjectivesAllList) + ' ' + ReturnRandom(creaturesFullList);
          if(Chance(35))
            finalString = person + ' ' + ReturnRandom(adjectivesAllList) + ' ' + ReturnRandom(animalsStandardList);
          else
            finalString = person + ' ' + ReturnRandom(classesFunnyList);
        }

        mainList = [
        who + ' is ' + finalString + '.',
        who + ' is probably ' + finalString + '.',
        who + ' is just ' + finalString + '.',
        who + ' is definitely ' + finalString + '.',
        who + ' looks like ' + finalString + '.'
        ];
      }       
      
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
      'You won\'t understand my answer with such a low IQ anyway, so I don\'t even bother explaining it to you.',
      'Your small mind is unable to grasp that.'
      ];
    
      var soloList = [
      'Abduction', 'Animal Abuse', 'the Art',
      'Bookmaster Awre', 'the Booze', 'the Brainwashing',
      'Chloroform', 'the Coconut', 'the Coconuts', 'Communism', 
      'Darkness', 'Delight', 'Despair', 'Destruction', 'Doctor Pumpkins', 'Doom', 'Dung', 'Duplication Device',
      'Evil',
      'Famine', 'Food', 'Fun', 'Fury',
      'the Gambling', 'the Garbage', 'Good',
      'Honor', 'Hunger',
      'Immorality', 'Immortality',
      'Job', 'Justice',
      'Kidnapping',
      'Lemmy', 'Lobotomy',
      'Madness', 'Me', 'Mercy', 'the Money', 'the Music',
      'the Nut', 'Nuts',
      'Pleasure', 'Power',
      'Ravandel', 'Retribution', 'the Rot', 'the Rumors',
      'Seda', 'Seismic Activity', 'Shadows', 'Shea', 'Small Brain', 'Starvation',
      'Ugliness', 'Urutaa', 'Uselessness',
      'Vardgo', 'Violence',
      'War', 'the Weed', 'Whipping', 'Wolf Scribe'
      ]

      var dualList1 = [
      'Abominable', 'Adorable', 'Aggressive','Annointed', 'Awesome', 'Awful',
      'Black','Blood', 'Bloody','Brutal',
      'Cannibalistic', 'Celestial',
      'Dark', 'Death', 'Degenerate', 'Destructive', 'Doom', 'Dung',
      'Electroshock Therapy', 'Evil',
      'Faceless', 'Furious', 'Furry', 'Fury',
      'Honorable', 'Hungry',
      'Immortal', 'Immoral', 'Insane',
      'Lunar',
      'Mad', 'Maniacal', 'Masochistic','Mindless', 'Music',
      'Nutty',
      'Pesimistic', 'Pleasure', 'Power', 'Primitive', 'Psychopathic',
      'Rotten', 'Ruby',
      'Sacred', 'Sadistic', 'Strong', 'Suicidal',
      'Violent',
      'Useless',
      'War', 'Weed'
      ]

      var dualList2 = [
      'Booze', 'Brain', 'Brothel',
      'Cannibal', 'Cannibals','Coconut', 'Coconuts', 'Cult',
      'Darkness', 'Delight', 'Delusion', 'Destruction', 'Doom', 'Dung',
      'Electroshock Therapy',
      'Fear', 'Fools', 'Furries', 'Furry', 'Fury',
      'Intellect',
      'Madness', 'Maniac', 'Mask', 'Masochism','Money', 'Music', 'Mutant',
      'Nut', 'Nuts',
      'Pleasure', 'Pleasures', 'Power', 'Psychopath',
      'Rot',
      'Sadism',
      'Vengeance', 'Violence',
      'War', 'Weed', 'Whipping'
      ]
      
      if(Math.floor(Chance(15)))
      {
        message.channel.send(ReturnRandom(rareResponsesList))
        return;
      }
      
      if(Chance(60))
        reason = '**' + ReturnRandom(soloList) + '**';
      else
      {
        var firstPart = ReturnRandom(dualList1);
        var secondPart = ReturnRandom(dualList2);
        
        while(firstPart == secondPart || firstPart + 's' == secondPart || firstPart + 'es' == secondPart)
          secondPart = ReturnRandom(dualList2);
        
        reason = 'the **' + firstPart + ' ' + secondPart + '**';
      }
      
      responseList = [
      'Because of ' + reason + additionalLol + '.',
      'It\'s caused by ' + reason + additionalLol + '.',
      'Reason of that is clear -  ' + reason + additionalLol + '.',
      ];
      
      message.channel.send(ReturnRandom(responseList))
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------you---------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'you':
      responseList = [
      'No u.',
      'No you.',
      'You too.',
      'Stop it please!',
      'Enough of that!',
      'No point in stating the obvious.',
      'Who told you to tell me that?',
      'Are you a spy? Who sent you?',
      'You\'re not the first one to tell me that today.',
      'After hearing what you just said, I realized that honest people still do exists!',
      'Oh, really? I think I\'m just ahead of you by one bath.',
      'True, I couldn\'t agree more.',
      'Coming from you, that means a lot!',
      'Careful, you might get burned.',
      'You\'re welcome.',
      'I\'m warning you, I\'m too hot for you to handle.',
      'You mean great in bed? Thanks!',
      'Why?',
      'I know. Wish I could say the same about you.',
      'Yeah...I wanted to ask you out, but my friend said I\'m now out of your league.',
      'I\'m glad I made your day brighter.',
      'Well, hanging around the right people really changes you.',
      'Yeah, I\'m getting tired of being mistaken for Ravandel.',
      'Stop it before I fall in love with you.',
      'I love your honesty and sincerity.',
      'It must be the meds kicking in.',
      'Peace be with you!',
      'Shut up baby.',
      'Excuse me?!',
      'It\'s extremely rare for me to hear that.',
      'Do you really think I care about your opinion lol?',
      'It\'s tough being such a sex symbol.',
      'Oh sorry, what? I was too busy thinking about how gorgeous I am.',
      'Give me a pen and I\'ll give you my autograph.',
      'Sorry, you must have mistaken me for someone else.',
      'Thanks, but I prefer to be noticed for my intellectual capacity.',
      'I know.',
      'Yeah, the genie finally granted my wish.',
      'Look who\'s talking XD.',
      'Is that the best you\'ve got?',
      'You must be looking at a mirror.',
      'Shucks, my hair!',
      'I love you too!',
      'Thanks, I woke up like this.',
      'Thank you, so please vote for me in the next elections.',
      'Thanks, fan!'
      ];
      
      message.channel.send(ReturnRandom(responseList))
      break;
      
    //----------------------------------------------------------------------------------------------------------------------------
    //----------test--------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------
    case 'test':
      message.channel.send(TransformToProperEndingApostrophe('everybody'))
      message.channel.send(TransformToProperEndingApostrophe('nobody'))
    break;
      
    //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //----------commands------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    case 'commands':
      responseList = 'All commands start from h!\n' +
      '**% [x] [y] : [y]is % [x]**\n'+
      '**am, are, can, could, did, do, does, is, have, had, has, shall, should, wanna, was, were, will, would**\n'+
      '**ambush**\n'+
      '**amount**\n'+
      '**animal : [x] = person**\n'+
      '**braindmg**\n'+
      '**capacity, volume**\n'+
      '**celebrate**\n'+
      '**chance, chances**\n'+
      '**choose [x]|[y]|[z][...] : [x], [y], [z] = choices**\n'+
      '**class [x] : [x] = person**\n'+
      '**cost, price, value**\n'+
      '**ddcheck [x] : [x] = person**\n'+
      '**ddquote [x] : [x] = number**\n'+
      '**dndalign [x] : [x] = person**\n'+
      '**hate, insult**\n'+
      '**heaviness, mass, weight**\n'+
      '**height, length, widtht**\n'+
      '**help**\n'+
      '**how**\n'+
      '**hug [x] : [x] = person**\n'+
      '**invite**\n'+
      '**love [x] : [x] = person**\n'+
      '**mood**\n'+
      '**name [x] [y] [z] : [x] = "m" or "f", [y] = numbers of syllables, [z] = number of generated names**\n'+
      '**percent**\n'+
      '**peril [x] : [x] = number**\n'+
      '**rant [x] : [x] = something**\n'+
      '**resolve [x] : [x] = person**\n'+
      '**roll [x]d[y] : [x] = number of rolls, [y] = number of sides, "a" for armello dice**\n'+
      '**size**\n'+
      '**specificname [x] [y] [z] [n]: [x] = "end" or "start", [y] = syllable, [z] = "m" or "f", [n] = number of generated names**\n'+
      '**weapon**\n'+
      '**weapons**\n'+
      '**when**\n'+
      '**where**\n'+
      '**who**\n'+
      '**whois**\n'+
      '**why**\n'+
      '**you**\n'+
      '**pic [x] : [x] = pic name**\n'
      ;

      message.channel.send(responseList)
      break;
  }

  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------FUNCTIONS-----------------------------------------------------------------------------------------------------------------
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  function MakeStringBold(stringToMakeBold)
  {
    stringToMakeBold = '**' + stringToMakeBold + '**'
    return stringToMakeBold;
  }
  
  function AddAnA(stringToCheck)
  {
    switch(stringToCheck.charAt(0))
    {
      case 'A':
      case 'a':
      case 'E':
      case 'e':
      case 'I':
      case 'i':
      case 'O':
      case 'o':
      case 'U':
      case 'u':
      case 'Y':
      case 'y':
        return 'an '

      default:
        return 'a '
    }
  }

  function ReturnLastChar(array)
  {
    var x;
    x = array.charAt(array.length - 1)
    return x
  }
  
  function AddEndingApostrophe(stringToCheck)
  {
    if(ReturnLastChar(stringToCheck) == 's')
      return '\''
    else
      return '\'s'
  }
  
  function TransformToProperEndingApostrophe(stringToCheck)
  {
    switch(stringToCheck)
    {   
      case 'my':
      case 'My':
        return stringToCheck
        
      case 'me':
      case 'Me':
        return 'my'
    
      case 'nobody':
      case 'Nobody':
        return 'no one\'s'
        
      case 'everybody':
      case 'Everybody':
        return 'everyone\'s'
        
      default:
        return stringToCheck + AddEndingApostrophe(stringToCheck)
    }
  }

  function ReturnRandom(listOfElements)
  {
    return listOfElements[Math.floor(Math.random() * listOfElements.length)];
  }

  function RecognizeWho(arg, message, command)
  {
    if (arg == 'me' || arg == null)
      return message.author;

    return message.content.slice(prefix.length + command.length + 1);
  }
  
  function RecognizeWhoSimple(arg, message, command)
  {
    if (arg == 'me' || arg == null)
      return message.author;

    return arg;
  }
  
  function RecognizeWhoSimpler(arg, message, command)
  {
    if (arg == 'me' || arg == null)
      return 'you';

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
    return ((Math.floor(Math.random() * 100) < chanceOfSuccess) == true);
  }
  
  function Rnd(maximum)
  {
    return Math.floor(Math.random() * (maximum + 1));
  }
  
  function TotalNamesCount()
  {
    var namesMaleCount = (nameOneSyllableMale.length) + ((nameFirstSyllable2Male.length) * (nameSecondSyllable2Male.length)) + ((nameFirstSyllable3Male.length) * (nameSecondSyllable3Male.length) * (nameThirdSyllable3Male.length)) + ((nameFirstSyllable4Male.length) * (nameSecondSyllable4Male.length) * (nameThirdSyllable4Male.length) * (nameFourthSyllable4Male.length));
    var namesFemaleCount = (nameOneSyllableFemale.length) + ((nameFirstSyllable2Female.length) * (nameSecondSyllable2Female.length)) + ((nameFirstSyllable3Female.length) * (nameSecondSyllable3Female.length) * (nameThirdSyllable3Female.length)) + ((nameFirstSyllable4Female.length) * (nameSecondSyllable4Female.length) * (nameThirdSyllable4Female.length) * (nameFourthSyllable4Female.length));
    return (namesMaleCount + namesFemaleCount);
  }
  
  function GenerateRandomMaleName(syllablesNumber)
  {
    var generatedRandomMaleName = ''
    
    if(syllablesNumber != 1 && syllablesNumber != 2 && syllablesNumber != 3 && syllablesNumber != 4)
      syllablesNumber = RndNo0(4)

    switch (syllablesNumber)
    {
      case '1':
      case 1:
        generatedRandomMaleName = ReturnRandom(nameOneSyllableMale)
      break;
      
      case '2':
      case 2:
        generatedRandomMaleName = ReturnRandom(nameFirstSyllable2Male) + ReturnRandom(nameSecondSyllable2Male)
      break;
      
      case '3':
      case 3:
        generatedRandomMaleName = ReturnRandom(nameFirstSyllable3Male) + ReturnRandom(nameSecondSyllable3Male) + ReturnRandom(nameThirdSyllable3Male)
      break;
      
      case '4':
      case 4:
        generatedRandomMaleName = ReturnRandom(nameFirstSyllable4Male) + ReturnRandom(nameSecondSyllable4Male) + ReturnRandom(nameThirdSyllable4Male) + ReturnRandom(nameFourthSyllable4Male)
      break;
    }

    return generatedRandomMaleName;
  }
  
  function GenerateRandomFemaleName(syllablesNumber)
  {
    var generatedRandomFemaleName = ''
    
    if(syllablesNumber != 1 && syllablesNumber != 2 && syllablesNumber != 3 && syllablesNumber != 4)
      syllablesNumber = RndNo0(4)

    switch (syllablesNumber)
    {
      case '1':
      case 1:
        generatedRandomFemaleName = ReturnRandom(nameOneSyllableFemale)
      break;
      
      case '2':
      case 2:
        generatedRandomFemaleName = ReturnRandom(nameFirstSyllable2Female) + ReturnRandom(nameSecondSyllable2Female)
      break;
      
      case '3':
      case 3:
        generatedRandomFemaleName = ReturnRandom(nameFirstSyllable3Female) + ReturnRandom(nameSecondSyllable3Female) + ReturnRandom(nameThirdSyllable3Female)
      break;
      
      case '4':
      case 4:
        generatedRandomFemaleName = ReturnRandom(nameFirstSyllable4Female) + ReturnRandom(nameSecondSyllable4Female) + ReturnRandom(nameThirdSyllable4Female) + ReturnRandom(nameFourthSyllable4Female)
      break;
    }

    return generatedRandomFemaleName;
  }
  
  function GenerateRandomStartingMaleName(syllable)
  {
    var generatedName = ''
    var syllablesNumber = RndNo0(3)

    switch (syllablesNumber)
    {   
      case '1':
      case 1:
        generatedName = syllable + ReturnRandom(nameSecondSyllable2Male)
      break;
      
      case '2':
      case 2:
        generatedName = syllable + ReturnRandom(nameSecondSyllable3Male) + ReturnRandom(nameThirdSyllable3Male)
      break;
      
      case '3':
      case 3:
        generatedName = syllable + ReturnRandom(nameSecondSyllable4Male) + ReturnRandom(nameThirdSyllable4Male) + ReturnRandom(nameFourthSyllable4Male)
      break;
    }

    return generatedName;
  }
  
  function GenerateRandomEndingMaleName(syllable)
  {
    var generatedName = ''
    var syllablesNumber = RndNo0(3)

    switch (syllablesNumber)
    {   
      case '1':
      case 1:
        generatedName = ReturnRandom(nameFirstSyllable2Male) + syllable
      break;
      
      case '2':
      case 2:
        generatedName = ReturnRandom(nameFirstSyllable3Male) + ReturnRandom(nameSecondSyllable3Male) + syllable
      break;
      
      case '3':
      case 3:
        generatedName = ReturnRandom(nameFirstSyllable4Male) + ReturnRandom(nameSecondSyllable4Male) + ReturnRandom(nameThirdSyllable4Male) + syllable
      break;
    }

    return generatedName;
  }
  
  function GenerateRandomStartingFemaleName(syllable)
  {
    var generatedName = ''
    var syllablesNumber = RndNo0(3)

    switch (syllablesNumber)
    {   
      case '1':
      case 1:
        generatedName = syllable + ReturnRandom(nameSecondSyllable2Female)
      break;
      
      case '2':
      case 2:
        generatedName = syllable + ReturnRandom(nameSecondSyllable3Female) + ReturnRandom(nameThirdSyllable3Female)
      break;
      
      case '3':
      case 3:
        generatedName = syllable + ReturnRandom(nameSecondSyllable4Female) + ReturnRandom(nameThirdSyllable4Female) + ReturnRandom(nameFourthSyllable4Female)
      break;
    }

    return generatedName;
  }
  
  function GenerateRandomEndingFemaleName(syllable)
  {
    var generatedName = ''
    var syllablesNumber = RndNo0(3)

    switch (syllablesNumber)
    {   
      case '1':
      case 1:
        generatedName = ReturnRandom(nameFirstSyllable2Female) + syllable
      break;
      
      case '2':
      case 2:
        generatedName = ReturnRandom(nameFirstSyllable3Female) + ReturnRandom(nameSecondSyllable3Female) + syllable
      break;
      
      case '3':
      case 3:
        generatedName = ReturnRandom(nameFirstSyllable4Female) + ReturnRandom(nameSecondSyllable4Female) + ReturnRandom(nameThirdSyllable4Female) + syllable
      break;
    }

    return generatedName;
  }

  function RndNo0(maximum)
  {
    return Math.floor(Math.random() * maximum) + 1;
  }
  
  function GenerateRandomPlace()
  {
    return 'the ' + GenerateRandomString4(baseAdverbsList, adjectivesAllList, placeMainList, adjectivesEndingAllSingle);
  }
  
  function GenerateRandomAnimal()
  {
    return GenerateRandomString4(baseAdverbsList, adjectivesAllList, animalsStandardList, adjectivesEndingAllSingle);
  }
  
  function GenerateRandomRace()
  {
    return GenerateRandomString3Prefix(baseAdverbsList, adjectivesAllList, racesList);
  }
  
  function GenerateRandomWeapon()
  {
    return GenerateRandomString4(baseAdverbsList, adjectivesStandardList, itemsWeaponsList, adjectivesEndingAllSingle);
  }
  
  function GenerateRandomItem()
  {
    return GenerateRandomWeapon();
  }
  
  function GenerateRandomSize()
  {
    var size1;
    
    switch(Rnd(2))
    {
      case 0:
        size1 = sizeBigList;
        break;
        
      case 1:
        size1 = sizeSmallList;
        break;
      
      case 2:
        size1 = sizeAverageList;
        break;
    }
    
    return ReturnRandom(size1);
  }
  
  function GenerateMultiplier(maximum)
  {
    var multiplier = 10;
    
    for (i = 0; i < RndNo0(maximum); i++) 
    {
      multiplier = multiplier * 10;
      if(Chance(50))
        break;
    }
    
    return multiplier + 1;
  }
  
  function GenerateRandomPerson()
  {
    if(Chance(90))
      return ReturnRandom(peopleStandardServerList)
    else
      return ReturnRandom(villainsPeopleList)
  }
  
  function GenerateRandomString3(firstList, secondList, thirdList)
  {
    var finalString = '';
    var firstWord = '';
    var secondWord = '';
    var thirdWord = '';
    
    if(Chance(70))
    {
      firstWord = ReturnRandom(firstList);
      finalString = firstWord;
    }
    
    secondWord = ReturnRandom(secondList);
    if(firstWord != '')
      finalString = finalString + ' ' + secondWord
    else
      finalString = secondWord
    
    if(Chance(70))
    {
      thirdWord = ReturnRandom(thirdList);
      finalString = finalString + ' of ' + thirdWord;
    }
  
    return finalString;
  }
  
  function GenerateRandomString3Prefix(firstList, secondList, thirdList)
  {
    var finalString = '';
    var firstWord = '';
    var secondWord = '';
    var thirdWord = '';
    
    if(Chance(70))
    {
      if(Chance(50))
        finalString = ReturnRandom(firstList) + ' ';
        
      secondWord = ReturnRandom(secondList);
      finalString = finalString + secondWord;
    }
    
    thirdWord = ReturnRandom(thirdList);
    if(secondWord != '')
      finalString = finalString + ' ' + thirdWord
    else
      finalString = thirdWord
  
    return finalString;
  }
  
  function GenerateRandomString4(firstList, secondList, thirdList, fourthList)
  {
    var finalString = '';
    var firstWord = '';
    var secondWord = '';
    var thirdWord = '';
    var fourthWord = '';
    
    if(Chance(70))
    {
      if(Chance(50))
        finalString = ReturnRandom(firstList) + ' ';
        
      secondWord = ReturnRandom(secondList);
      finalString = finalString + secondWord;
    }
    
    thirdWord = ReturnRandom(thirdList);
    if(secondWord != '')
      finalString = finalString + ' ' + thirdWord
    else
      finalString = thirdWord
    
    if(Chance(70))
    {
      fourthWord = ReturnRandom(fourthList);
      finalString = finalString + ' of ' + fourthWord;
    }
  
    return finalString;
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

      var firstPart2 = [
      'Absolution', 'Aegis', 'Aerial', 'Animal',
      'Badlands', 'Bandit', 'Barbaric', 'Battle', 'Black', 'Blood', 'Bone', 'Book', 'Border', 'Bounty', 'Brutal',
      'Camp', 'Celestial', 'Cloaked', 'Crime',
      'Death', 'Drug', 'Dung',
      'Famine', 'Feral', 'Flame', 'Flesh', 'Foolish', 'Forest', 'Frost', 'Furry',
      'Ghost', 'Grail', 'Grant', 'Grave',
      'Hag', 'Hedge', 'Hedgecraft', 'High', 'Hound', 'Hug', 'Hungry', 'Hypnotic', 
      'Ice', 'Iron',
      'Judicial',
      'Lunar',
      'Magic', 'Money', 'Monster', 'Music',
      'Norse',
      'Pale', 'Pit', 'Plague', 'Pleasure',
      'Questing',
      'Robotic',
      'Savage', 'Sea', 'Sewer', 'Shield', 'Slime', 'Solar', 'Soul', 'Spirit', 'Spy', 'Steel', 'Steppes', 'Storm',
      'Temple', 'Tentacle', 'Tomb',
      'Verdant', 'Village',
      'War', 'Wild', 'Winged', 'Wise', 'White'
      ];

      var firstPart3 = [
      'Brothel', 'Brotherhood',
      'Clan', 'Cult',
      'Guild',
      'Pact',
      'Sect',
      'Troupe'
      ];

      var lastPart = [
      'Bookmaster Awre',
      'the Blazing Sun', 'Blood','the Booze',
      'the Coconut',
      'Darkness', 'Delight', 'Despair', 'Destruction', 'Doctor Pumpkins', 'Doom', 'the Dung',
      'Evil',
      'the Forest Fools', 'Fury',
      'Good', 'the Grove',
      'Honor', 'the Hunger',
      'Immorality', 'Immortality', 'the Inner Circle',
      'Justice',
      'Lemmy', 'the Light',
      'Madness', 'the Magic', 'Malice', 'the Meek', 'Mercy', 'the Moon', 'the Murder',
      'the Nipples',
      'the Nut',
      'Pleasure', 'Power',
      'Ravandel', 'the Raven', 'the Realm', 'Retribution', 'the Rot',
      'Seda', 'Shadows', 'Shea', 'the Shroud', 'Steel', 'the Storm', 'the Sun',
      'Tentacles',
      'Urutaa',
      'Vardgo', 'Violence',
      'War', 'the Weed', 'Wolf Scribe'
      ]

      var lastPart1 = [
      'Abominable', 'Absolute', 'Adorable', 'Aggressive', 'Agile', 'Animate', 'Annointed', 'Awesome', 'Awful',
      'Black', 'Blood', 'Bloody','Brutal',
      'Cannibalistic', 'Celestial', 'Chittering', 'Clever',
      'Dark', 'Death', 'Degenerate', 'Destructive', 'Dirty', 'Doom', 'Dung',
      'Evil',
      'Faceless', 'Flame', 'Forbidden', 'Forest', 'Forgotten', 'Furious', 'Furry', 'Fury',
      'Ghost', 'Glowing', 'Good', 'Greater',
      'Heartless', 'Honorable', 'Horny', 'Hungry',
      'Icy', 'Immortal', 'Immoral', 'Insane',
      'Just',
      'Lesser', 'Lunar',
      'Mad', 'Magica', 'Maniacal', 'Masochistic', 'Meek', 'Mighty', 'Mindless', 'Murderous',
      'Nutty',
      'Power', 'Primitive', 'Psychopathic',
      'Rocket', 'Rotten', 'Ruby',
      'Sacred', 'Sadistic', 'Shadow', 'Smart', 'Solar', 'Starving', 'Steel', 'Strong', 'Suicidal',
      'Vengeful', 'Violent',
      'War', 'Weed', 'White'
      ]

      var lastPart2 = [
      'Absolution',
      'Beef', 'Booze', 'Brotherhood', 'Brothel',
      'Cacao-Tree', 'Cannibal', 'Cannibals', 'City', 'Clan', 'Coconut', 'Coconuts', 'Cult',
      'Darkness', 'Delight', 'Delusion', 'Destruction', 'Doom', 'Dung',
      'Fear', 'Food', 'Fools', 'Forest', 'Furries', 'Furry', 'Fury',
      'Ghost', 'Good', 'Grove', 'Guild',
      'Hand', 'Honor',
      'Intellect',
      'Justice',
      'Light',
      'Madness', 'Magic', 'Malice', 'Maniac', 'Mask', 'Masochism', 'Mercy', 'Moon', 'Murder', 'Mutant',
      'Nipple', 'Nipples', 'Nut', 'Nuts',
      'Pleasure', 'Pleasures', 'Power', 'Psychopath',
      'Retribution', 'Rocket', 'Rot', 'Ruby',
      'Sadism', 'Shadow', 'Shadows', 'Shroud', 'Sun', 'Starvation', 'Steel', 'Storm',
      'Tentacle', 'Tentacles', 'Troupe',
      'Vengeance', 'Violence',
      'War', 'Weed', 'Woods'
      ]

      //---------------------------------------------------------------------------------------------------------------------------
      
      if(typeOfCheck == 'count')
      {
        return ((adjectivesAllList.length - 1 ) * (firstPart2.length / 2) * firstPart3.length * classesFullList.length * lastPart.length + (adjectivesAllList.length - 1 ) * (firstPart2.length / 2) * firstPart3.length * classesFullList.length * lastPart1.length * (lastPart2.length / 2));
      }
      
      if(Math.floor(Math.random() * 10) < 5)
      {
        firstWord = ReturnRandom(adjectivesAllList);
        finalString = finalString + firstWord + ' ';
      }

      if(Math.floor(Math.random() * 10) < 5)
      {
        secondWord = ReturnRandom(firstPart2);
        if(firstWord != secondWord)
          finalString = finalString + secondWord + ' ';
      }

      if(Math.floor(Math.random() * 10) < 3)
      {
        thirdWord = ReturnRandom(firstPart3);
        finalString = finalString + thirdWord + ' ';
      }

      fourthWord = ReturnRandom(classesFullList);
      if(thirdWord != '' || fourthWord != secondWord)
        finalString = finalString + fourthWord;

      if(Math.floor(Chance(30)))
        finalString = finalString + ' of ' + ReturnRandom(lastPart);
      else if(Chance(70))
      {
        fifthWord = ReturnRandom(lastPart1);
        sixthWord = ReturnRandom(lastPart2);

        while(fifthWord == sixthWord || fifthWord + 's' == sixthWord || fifthWord + 'es' == sixthWord)
          sixthWord = ReturnRandom(lastPart2);

        finalString = finalString + ' of the ' + fifthWord + ' ' + sixthWord;
      }

    return finalString;
  }

});

//size, weight, volume, ddquote, animal


// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
                                                                        
