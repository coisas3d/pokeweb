const Pokedex = {
    1:{id:1,name:"Bulbasaur",type:"grama",baseStats:{hp:45,atk:49,def:49,spa:65,spd:65,spe:45}},
    2:{id:2,name:"Ivysaur",type:"grama",baseStats:{hp:60,atk:62,def:63,spa:80,spd:80,spe:60}},
    3:{id:3,name:"Venusaur",type:"grama",baseStats:{hp:80,atk:82,def:83,spa:100,spd:100,spe:80}},
    4:{id:4,name:"Charmander",type:"fogo",baseStats:{hp:39,atk:52,def:43,spa:60,spd:50,spe:65}},
    5:{id:5,name:"Charmeleon",type:"fogo",baseStats:{hp:58,atk:64,def:58,spa:80,spd:65,spe:80}},
    6:{id:6,name:"Charizard",type:"fogo",baseStats:{hp:78,atk:84,def:78,spa:109,spd:85,spe:100}},
    7:{id:7,name:"Squirtle",type:"agua",baseStats:{hp:44,atk:48,def:65,spa:50,spd:64,spe:43}},
    8:{id:8,name:"Wartortle",type:"agua",baseStats:{hp:59,atk:63,def:80,spa:65,spd:80,spe:58}},
    9:{id:9,name:"Blastoise",type:"agua",baseStats:{hp:79,atk:83,def:100,spa:85,spd:105,spe:78}},
    10:{id:10,name:"Caterpie",type:"inseto",baseStats:{hp:45,atk:30,def:35,spa:20,spd:20,spe:45}},
    11:{id:11,name:"Metapod",type:"inseto",baseStats:{hp:50,atk:20,def:55,spa:25,spd:25,spe:30}},
    12:{id:12,name:"Butterfree",type:"inseto",baseStats:{hp:60,atk:45,def:50,spa:90,spd:80,spe:70}},
    13:{id:13,name:"Weedle",type:"inseto",baseStats:{hp:40,atk:35,def:30,spa:20,spd:20,spe:50}},
    14:{id:14,name:"Kakuna",type:"inseto",baseStats:{hp:45,atk:25,def:50,spa:25,spd:25,spe:35}},
    15:{id:15,name:"Beedrill",type:"inseto",baseStats:{hp:65,atk:90,def:40,spa:45,spd:80,spe:75}},
    16:{id:16,name:"Pidgey",type:"normal",baseStats:{hp:40,atk:45,def:40,spa:35,spd:35,spe:56}},
    17:{id:17,name:"Pidgeotto",type:"normal",baseStats:{hp:63,atk:60,def:55,spa:50,spd:50,spe:71}},
    18:{id:18,name:"Pidgeot",type:"normal",baseStats:{hp:83,atk:80,def:75,spa:70,spd:70,spe:101}},
    19:{id:19,name:"Rattata",type:"normal",baseStats:{hp:30,atk:56,def:35,spa:25,spd:35,spe:72}},
    20:{id:20,name:"Raticate",type:"normal",baseStats:{hp:55,atk:81,def:60,spa:50,spd:70,spe:97}},
    21:{id:21,name:"Spearow",type:"normal",baseStats:{hp:40,atk:60,def:30,spa:31,spd:31,spe:70}},
    22:{id:22,name:"Fearow",type:"normal",baseStats:{hp:65,atk:90,def:65,spa:61,spd:61,spe:100}},
    23:{id:23,name:"Ekans",type:"veneno",baseStats:{hp:35,atk:60,def:44,spa:40,spd:54,spe:55}},
    24:{id:24,name:"Arbok",type:"veneno",baseStats:{hp:60,atk:85,def:69,spa:65,spd:79,spe:80}},
    25:{id:25,name:"Pikachu",type:"eletrico",baseStats:{hp:35,atk:55,def:40,spa:50,spd:50,spe:90}},
    26:{id:26,name:"Raichu",type:"eletrico",baseStats:{hp:60,atk:90,def:55,spa:90,spd:80,spe:110}},
    27:{id:27,name:"Sandshrew",type:"terra",baseStats:{hp:50,atk:75,def:85,spa:20,spd:30,spe:40}},
    28:{id:28,name:"Sandslash",type:"terra",baseStats:{hp:75,atk:100,def:110,spa:45,spd:55,spe:65}},
    29:{id:29,name:"NidoranF",type:"veneno",baseStats:{hp:55,atk:47,def:52,spa:40,spd:40,spe:41}},
    30:{id:30,name:"Nidorina",type:"veneno",baseStats:{hp:70,atk:62,def:67,spa:55,spd:55,spe:56}},
    31:{id:31,name:"Nidoqueen",type:"veneno",baseStats:{hp:90,atk:92,def:87,spa:75,spd:85,spe:76}},
    32:{id:32,name:"NidoranM",type:"veneno",baseStats:{hp:46,atk:57,def:40,spa:40,spd:40,spe:50}},
    33:{id:33,name:"Nidorino",type:"veneno",baseStats:{hp:61,atk:72,def:57,spa:55,spd:55,spe:65}},
    34:{id:34,name:"Nidoking",type:"veneno",baseStats:{hp:81,atk:102,def:77,spa:85,spd:75,spe:85}},
    35:{id:35,name:"Clefairy",type:"fada",baseStats:{hp:70,atk:45,def:48,spa:60,spd:65,spe:35}},
    36:{id:36,name:"Clefable",type:"fada",baseStats:{hp:95,atk:70,def:73,spa:95,spd:90,spe:60}},
    37:{id:37,name:"Vulpix",type:"fogo",baseStats:{hp:38,atk:41,def:40,spa:50,spd:65,spe:65}},
    38:{id:38,name:"Ninetales",type:"fogo",baseStats:{hp:73,atk:76,def:75,spa:81,spd:100,spe:100}},
    39:{id:39,name:"Jigglypuff",type:"normal",baseStats:{hp:115,atk:45,def:20,spa:45,spd:25,spe:20}},
    40:{id:40,name:"Wigglytuff",type:"normal",baseStats:{hp:140,atk:70,def:45,spa:85,spd:50,spe:45}},
    41:{id:41,name:"Zubat",type:"veneno",baseStats:{hp:40,atk:45,def:35,spa:30,spd:40,spe:55}},
    42:{id:42,name:"Golbat",type:"veneno",baseStats:{hp:75,atk:80,def:70,spa:65,spd:75,spe:90}},
    43:{id:43,name:"Oddish",type:"grama",baseStats:{hp:45,atk:50,def:55,spa:75,spd:65,spe:30}},
    44:{id:44,name:"Gloom",type:"grama",baseStats:{hp:60,atk:65,def:70,spa:85,spd:75,spe:40}},
    45:{id:45,name:"Vileplume",type:"grama",baseStats:{hp:75,atk:80,def:85,spa:110,spd:90,spe:50}},
    46:{id:46,name:"Paras",type:"inseto",baseStats:{hp:35,atk:70,def:55,spa:45,spd:55,spe:25}},
    47:{id:47,name:"Parasect",type:"inseto",baseStats:{hp:60,atk:95,def:80,spa:60,spd:80,spe:30}},
    48:{id:48,name:"Venonat",type:"inseto",baseStats:{hp:60,atk:55,def:50,spa:40,spd:55,spe:45}},
    49:{id:49,name:"Venomoth",type:"inseto",baseStats:{hp:70,atk:65,def:60,spa:90,spd:75,spe:90}},
    50:{id:50,name:"Diglett",type:"terra",baseStats:{hp:10,atk:55,def:25,spa:35,spd:45,spe:95}},
    51:{id:51,name:"Dugtrio",type:"terra",baseStats:{hp:35,atk:80,def:50,spa:50,spd:70,spe:120}},
    52:{id:52,name:"Meowth",type:"normal",baseStats:{hp:40,atk:45,def:35,spa:40,spd:40,spe:90}},
    53:{id:53,name:"Persian",type:"normal",baseStats:{hp:65,atk:70,def:60,spa:65,spd:65,spe:115}},
    54:{id:54,name:"Psyduck",type:"agua",baseStats:{hp:50,atk:52,def:48,spa:65,spd:50,spe:55}},
    55:{id:55,name:"Golduck",type:"agua",baseStats:{hp:80,atk:82,def:78,spa:95,spd:80,spe:85}},
    56:{id:56,name:"Mankey",type:"lutador",baseStats:{hp:40,atk:80,def:35,spa:35,spd:45,spe:70}},
    57:{id:57,name:"Primeape",type:"lutador",baseStats:{hp:65,atk:105,def:60,spa:60,spd:70,spe:95}},
    58:{id:58,name:"Growlithe",type:"fogo",baseStats:{hp:55,atk:70,def:45,spa:70,spd:50,spe:60}},
    59:{id:59,name:"Arcanine",type:"fogo",baseStats:{hp:90,atk:110,def:80,spa:100,spd:80,spe:95}},
    60:{id:60,name:"Poliwag",type:"agua",baseStats:{hp:40,atk:50,def:40,spa:40,spd:40,spe:90}},
    61:{id:61,name:"Poliwhirl",type:"agua",baseStats:{hp:65,atk:65,def:65,spa:50,spd:50,spe:90}},
    62:{id:62,name:"Poliwrath",type:"agua",baseStats:{hp:90,atk:85,def:95,spa:70,spd:90,spe:70}},
    63:{id:63,name:"Abra",type:"psiquico",baseStats:{hp:25,atk:20,def:15,spa:105,spd:55,spe:90}},
    64:{id:64,name:"Kadabra",type:"psiquico",baseStats:{hp:40,atk:35,def:30,spa:120,spd:70,spe:105}},
    65:{id:65,name:"Alakazam",type:"psiquico",baseStats:{hp:55,atk:50,def:45,spa:135,spd:95,spe:120}},
    66:{id:66,name:"Machop",type:"lutador",baseStats:{hp:70,atk:80,def:50,spa:35,spd:35,spe:35}},
    67:{id:67,name:"Machoke",type:"lutador",baseStats:{hp:80,atk:100,def:70,spa:50,spd:60,spe:45}},
    68:{id:68,name:"Machamp",type:"lutador",baseStats:{hp:90,atk:130,def:80,spa:65,spd:85,spe:55}},
    69:{id:69,name:"Bellsprout",type:"grama",baseStats:{hp:50,atk:75,def:35,spa:70,spd:30,spe:40}},
    70:{id:70,name:"Weepinbell",type:"grama",baseStats:{hp:65,atk:90,def:50,spa:85,spd:45,spe:55}},
    71:{id:71,name:"Victreebel",type:"grama",baseStats:{hp:80,atk:105,def:65,spa:100,spd:70,spe:70}},
    72:{id:72,name:"Tentacool",type:"agua",baseStats:{hp:40,atk:40,def:35,spa:50,spd:100,spe:70}},
    73:{id:73,name:"Tentacruel",type:"agua",baseStats:{hp:80,atk:70,def:65,spa:80,spd:120,spe:100}},
    74:{id:74,name:"Geodude",type:"pedra",baseStats:{hp:40,atk:80,def:100,spa:30,spd:30,spe:20}},
    75:{id:75,name:"Graveler",type:"pedra",baseStats:{hp:55,atk:95,def:115,spa:45,spd:45,spe:35}},
    76:{id:76,name:"Golem",type:"pedra",baseStats:{hp:80,atk:120,def:130,spa:55,spd:65,spe:45}},
    77:{id:77,name:"Ponyta",type:"fogo",baseStats:{hp:50,atk:85,def:55,spa:65,spd:65,spe:90}},
    78:{id:78,name:"Rapidash",type:"fogo",baseStats:{hp:65,atk:100,def:70,spa:80,spd:80,spe:105}},
    79:{id:79,name:"Slowpoke",type:"agua",baseStats:{hp:90,atk:65,def:65,spa:40,spd:40,spe:15}},
    80:{id:80,name:"Slowbro",type:"agua",baseStats:{hp:95,atk:75,def:110,spa:100,spd:80,spe:30}},
    81:{id:81,name:"Magnemite",type:"eletrico",baseStats:{hp:25,atk:35,def:70,spa:95,spd:55,spe:45}},
    82:{id:82,name:"Magneton",type:"eletrico",baseStats:{hp:50,atk:60,def:95,spa:120,spd:70,spe:70}},
    83:{id:83,name:"Farfetch'd",type:"normal",baseStats:{hp:52,atk:65,def:55,spa:58,spd:62,spe:60}},
    84:{id:84,name:"Doduo",type:"normal",baseStats:{hp:35,atk:85,def:45,spa:35,spd:35,spe:75}},
    85:{id:85,name:"Dodrio",type:"normal",baseStats:{hp:60,atk:110,def:70,spa:60,spd:60,spe:100}},
    86:{id:86,name:"Seel",type:"agua",baseStats:{hp:65,atk:45,def:55,spa:45,spd:70,spe:45}},
    87:{id:87,name:"Dewgong",type:"agua",baseStats:{hp:90,atk:70,def:80,spa:70,spd:95,spe:70}},
    88:{id:88,name:"Grimer",type:"veneno",baseStats:{hp:80,atk:80,def:50,spa:40,spd:50,spe:25}},
    89:{id:89,name:"Muk",type:"veneno",baseStats:{hp:105,atk:105,def:75,spa:65,spd:100,spe:50}},
    90:{id:90,name:"Shellder",type:"agua",baseStats:{hp:30,atk:65,def:100,spa:45,spd:25,spe:40}},
    91:{id:91,name:"Cloyster",type:"agua",baseStats:{hp:50,atk:95,def:180,spa:85,spd:45,spe:70}},
    92:{id:92,name:"Gastly",type:"fantasma",baseStats:{hp:30,atk:35,def:30,spa:100,spd:35,spe:80}},
    93:{id:93,name:"Haunter",type:"fantasma",baseStats:{hp:45,atk:50,def:45,spa:115,spd:55,spe:95}},
    94:{id:94,name:"Gengar",type:"fantasma",baseStats:{hp:60,atk:65,def:60,spa:130,spd:75,spe:110}},
    95:{id:95,name:"Onix",type:"pedra",baseStats:{hp:35,atk:45,def:160,spa:30,spd:45,spe:70}},
    96:{id:96,name:"Drowzee",type:"psiquico",baseStats:{hp:60,atk:48,def:45,spa:43,spd:90,spe:42}},
    97:{id:97,name:"Hypno",type:"psiquico",baseStats:{hp:85,atk:73,def:70,spa:73,spd:115,spe:67}},
    98:{id:98,name:"Krabby",type:"agua",baseStats:{hp:30,atk:105,def:90,spa:25,spd:25,spe:50}},
    99:{id:99,name:"Kingler",type:"agua",baseStats:{hp:55,atk:130,def:115,spa:50,spd:50,spe:75}},
    100:{id:100,name:"Voltorb",type:"eletrico",baseStats:{hp:40,atk:30,def:50,spa:55,spd:55,spe:100}},
    101:{id:101,name:"Electrode",type:"eletrico",baseStats:{hp:60,atk:50,def:70,spa:80,spd:80,spe:140}},
    102:{id:102,name:"Exeggcute",type:"grama",baseStats:{hp:60,atk:40,def:80,spa:60,spd:45,spe:40}},
    103:{id:103,name:"Exeggutor",type:"grama",baseStats:{hp:95,atk:95,def:85,spa:125,spd:65,spe:55}},
    104:{id:104,name:"Cubone",type:"terra",baseStats:{hp:50,atk:50,def:95,spa:40,spd:50,spe:35}},
    105:{id:105,name:"Marowak",type:"terra",baseStats:{hp:60,atk:80,def:110,spa:50,spd:80,spe:45}},
    106:{id:106,name:"Hitmonlee",type:"lutador",baseStats:{hp:50,atk:120,def:53,spa:35,spd:110,spe:87}},
    107:{id:107,name:"Hitmonchan",type:"lutador",baseStats:{hp:50,atk:105,def:79,spa:35,spd:110,spe:76}},
    108:{id:108,name:"Lickitung",type:"normal",baseStats:{hp:90,atk:55,def:75,spa:60,spd:75,spe:30}},
    109:{id:109,name:"Koffing",type:"veneno",baseStats:{hp:40,atk:65,def:95,spa:60,spd:45,spe:35}},
    110:{id:110,name:"Weezing",type:"veneno",baseStats:{hp:65,atk:90,def:120,spa:85,spd:70,spe:60}},
    111:{id:111,name:"Rhyhorn",type:"terra",baseStats:{hp:80,atk:85,def:95,spa:30,spd:30,spe:25}},
    112:{id:112,name:"Rhydon",type:"terra",baseStats:{hp:105,atk:130,def:120,spa:45,spd:45,spe:40}},
    113:{id:113,name:"Chansey",type:"normal",baseStats:{hp:250,atk:5,def:5,spa:35,spd:105,spe:50}},
    114:{id:114,name:"Tangela",type:"grama",baseStats:{hp:65,atk:55,def:115,spa:100,spd:40,spe:60}},
    115:{id:115,name:"Kangaskhan",type:"normal",baseStats:{hp:105,atk:95,def:80,spa:40,spd:80,spe:90}},
    116:{id:116,name:"Horsea",type:"agua",baseStats:{hp:30,atk:40,def:70,spa:70,spd:25,spe:60}},
    117:{id:117,name:"Seadra",type:"agua",baseStats:{hp:55,atk:65,def:95,spa:95,spd:45,spe:85}},
    118:{id:118,name:"Goldeen",type:"agua",baseStats:{hp:45,atk:67,def:60,spa:35,spd:50,spe:63}},
    119:{id:119,name:"Seaking",type:"agua",baseStats:{hp:80,atk:92,def:65,spa:65,spd:80,spe:68}},
    120:{id:120,name:"Staryu",type:"agua",baseStats:{hp:30,atk:45,def:55,spa:70,spd:55,spe:85}},
    121:{id:121,name:"Starmie",type:"agua",baseStats:{hp:60,atk:75,def:85,spa:100,spd:85,spe:115}},
    122:{id:122,name:"Mr_Mime",type:"psiquico",baseStats:{hp:40,atk:45,def:65,spa:100,spd:120,spe:90}},
    123:{id:123,name:"Scyther",type:"inseto",baseStats:{hp:70,atk:110,def:80,spa:55,spd:80,spe:105}},
    124:{id:124,name:"Jynx",type:"gelo",baseStats:{hp:65,atk:50,def:35,spa:115,spd:95,spe:95}},
    125:{id:125,name:"Electabuzz",type:"eletrico",baseStats:{hp:65,atk:83,def:57,spa:95,spd:85,spe:105}},
    126:{id:126,name:"Magmar",type:"fogo",baseStats:{hp:65,atk:95,def:57,spa:100,spd:85,spe:93}},
    127:{id:127,name:"Pinsir",type:"inseto",baseStats:{hp:65,atk:125,def:100,spa:55,spd:70,spe:85}},
    128:{id:128,name:"Tauros",type:"normal",baseStats:{hp:75,atk:100,def:95,spa:40,spd:70,spe:110}},
    129:{id:129,name:"Magikarp",type:"agua",baseStats:{hp:20,atk:10,def:55,spa:15,spd:20,spe:80}},
    130:{id:130,name:"Gyarados",type:"agua",baseStats:{hp:95,atk:125,def:79,spa:60,spd:100,spe:81}},
    131:{id:131,name:"Lapras",type:"agua",baseStats:{hp:130,atk:85,def:80,spa:85,spd:95,spe:60}},
    132:{id:132,name:"Ditto",type:"normal",baseStats:{hp:48,atk:48,def:48,spa:48,spd:48,spe:48}},
    133:{id:133,name:"Eevee",type:"normal",baseStats:{hp:55,atk:55,def:50,spa:45,spd:65,spe:55}},
    134:{id:134,name:"Vaporeon",type:"agua",baseStats:{hp:130,atk:65,def:60,spa:110,spd:95,spe:65}},
    135:{id:135,name:"Jolteon",type:"eletrico",baseStats:{hp:65,atk:65,def:60,spa:110,spd:95,spe:130}},
    136:{id:136,name:"Flareon",type:"fogo",baseStats:{hp:65,atk:130,def:60,spa:95,spd:110,spe:65}},
    137:{id:137,name:"Porygon",type:"normal",baseStats:{hp:65,atk:60,def:70,spa:85,spd:75,spe:40}},
    138:{id:138,name:"Omanyte",type:"pedra",baseStats:{hp:35,atk:40,def:100,spa:90,spd:55,spe:35}},
    139:{id:139,name:"Omastar",type:"pedra",baseStats:{hp:70,atk:60,def:125,spa:115,spd:70,spe:55}},
    140:{id:140,name:"Kabuto",type:"pedra",baseStats:{hp:30,atk:80,def:90,spa:55,spd:45,spe:55}},
    141:{id:141,name:"Kabutops",type:"pedra",baseStats:{hp:60,atk:115,def:105,spa:65,spd:70,spe:80}},
    142:{id:142,name:"Aerodactyl",type:"pedra",baseStats:{hp:80,atk:105,def:65,spa:60,spd:75,spe:130}},
    143:{id:143,name:"Snorlax",type:"normal",baseStats:{hp:160,atk:110,def:65,spa:65,spd:110,spe:30}},
    144:{id:144,name:"Articuno",type:"gelo",baseStats:{hp:90,atk:85,def:100,spa:95,spd:125,spe:85}},
    145:{id:145,name:"Zapdos",type:"eletrico",baseStats:{hp:90,atk:90,def:85,spa:125,spd:90,spe:100}},
    146:{id:146,name:"Moltres",type:"fogo",baseStats:{hp:90,atk:100,def:90,spa:125,spd:85,spe:90}},
    147:{id:147,name:"Dratini",type:"dragao",baseStats:{hp:41,atk:64,def:45,spa:50,spd:50,spe:50}},
    148:{id:148,name:"Dragonair",type:"dragao",baseStats:{hp:61,atk:84,def:65,spa:70,spd:70,spe:70}},
    149:{id:149,name:"Dragonite",type:"dragao",baseStats:{hp:91,atk:134,def:95,spa:100,spd:100,spe:80}},
    150:{id:150,name:"Mewtwo",type:"psiquico",baseStats:{hp:106,atk:110,def:90,spa:154,spd:90,spe:130}},
    151:{id:151,name:"Mew",type:"psiquico",baseStats:{hp:100,atk:100,def:100,spa:100,spd:100,spe:100}}
};

const Natures = {
    Hardy: { buff: null, debuff: null }, Lonely: { buff: 'atk', debuff: 'def' }, Brave: { buff: 'atk', debuff: 'spe' },
    Adamant: { buff: 'atk', debuff: 'spa' }, Naughty: { buff: 'atk', debuff: 'spd' }, Bold: { buff: 'def', debuff: 'atk' },
    Docile: { buff: null, debuff: null }, Relaxed: { buff: 'def', debuff: 'spe' }, Impish: { buff: 'def', debuff: 'spa' },
    Lax: { buff: 'def', debuff: 'spd' }, Timid: { buff: 'spe', debuff: 'atk' }, Hasty: { buff: 'spe', debuff: 'def' },
    Serious: { buff: null, debuff: null }, Jolly: { buff: 'spe', debuff: 'spa' }, Naive: { buff: 'spe', debuff: 'spd' },
    Modest: { buff: 'spa', debuff: 'atk' }, Mild: { buff: 'spa', debuff: 'def' }, Quiet: { buff: 'spa', debuff: 'spe' },
    Bashful: { buff: null, debuff: null }, Rash: { buff: 'spa', debuff: 'spd' }, Calm: { buff: 'spd', debuff: 'atk' },
    Gentle: { buff: 'spd', debuff: 'def' }, Sassy: { buff: 'spd', debuff: 'spe' }, Careful: { buff: 'spd', debuff: 'spa' },
    Quirky: { buff: null, debuff: null }
};

const MoveDB = {
    'absorb': { name: 'Absorb', type: 'grama', pwr: 20, acc: 100 },
    'acid': { name: 'Acid', type: 'veneno', pwr: 40, acc: 100 },
    'acid_armor': { name: 'Acid Armor', type: 'veneno', pwr: 0, acc: 100 },
    'aerial_ace': { name: 'Aerial Ace', type: 'voador', pwr: 60, acc: 100 },
    'aeroblast': { name: 'Aeroblast', type: 'voador', pwr: 100, acc: 95 },
    'agility': { name: 'Agility', type: 'psiquico', pwr: 0, acc: 100 },
    'air_cutter': { name: 'Air Cutter', type: 'voador', pwr: 55, acc: 95 },
    'amnesia': { name: 'Amnesia', type: 'psiquico', pwr: 0, acc: 100 },
    'ancient_power': { name: 'AncientPower', type: 'pedra', pwr: 60, acc: 100 },
    'aromatherapy': { name: 'Aromatherapy', type: 'grama', pwr: 0, acc: 100 },
    'astonish': { name: 'Astonish', type: 'fantasma', pwr: 30, acc: 100 },
    'aurora_beam': { name: 'Aurora Beam', type: 'gelo', pwr: 65, acc: 100 },
    'barrage': { name: 'Barrage', type: 'normal', pwr: 15, acc: 85 },
    'barrier': { name: 'Barrier', type: 'psiquico', pwr: 0, acc: 100 },
    'baton_pass': { name: 'Baton Pass', type: 'normal', pwr: 0, acc: 100 },
    'belly_drum': { name: 'Belly Drum', type: 'normal', pwr: 0, acc: 100 },
    'bind': { name: 'Bind', type: 'normal', pwr: 15, acc: 85 },
    'bite': { name: 'Bite', type: 'sombrio', pwr: 60, acc: 100 },
    'blizzard': { name: 'Blizzard', type: 'gelo', pwr: 120, acc: 70 },
    'block': { name: 'Block', type: 'normal', pwr: 0, acc: 100 },
    'body_slam': { name: 'Body Slam', type: 'normal', pwr: 85, acc: 100 },
    'bone_club': { name: 'Bone Club', type: 'terra', pwr: 65, acc: 85 },
    'bone_rush': { name: 'Bone Rush', type: 'terra', pwr: 25, acc: 90 },
    'bonemerang': { name: 'Bonemerang', type: 'terra', pwr: 50, acc: 90 },
    'bounce': { name: 'Bounce', type: 'voador', pwr: 85, acc: 85 },
    'brick_break': { name: 'Brick Break', type: 'lutador', pwr: 75, acc: 100 },
    'bubble': { name: 'Bubble', type: 'agua', pwr: 20, acc: 100 },
    'bubble_beam': { name: 'BubbleBeam', type: 'agua', pwr: 65, acc: 100 },
    'bug_bite': { name: 'Bug Bite', type: 'inseto', pwr: 60, acc: 100 },
    'calm_mind': { name: 'Calm Mind', type: 'psiquico', pwr: 0, acc: 100 },
    'camouflage': { name: 'Camouflage', type: 'normal', pwr: 0, acc: 100 },
    'charge': { name: 'Charge', type: 'eletrico', pwr: 0, acc: 100 },
    'clamp': { name: 'Clamp', type: 'agua', pwr: 35, acc: 85 },
    'comet_punch': { name: 'Comet Punch', type: 'normal', pwr: 18, acc: 85 },
    'confuse_ray': { name: 'Confuse Ray', type: 'fantasma', pwr: 0, acc: 100 },
    'confusion': { name: 'Confusion', type: 'psiquico', pwr: 50, acc: 100 },
    'constrict': { name: 'Constrict', type: 'normal', pwr: 10, acc: 100 },
    'conversion': { name: 'Conversion', type: 'normal', pwr: 0, acc: 100 },
    'conversion_2': { name: 'Conversion 2', type: 'normal', pwr: 0, acc: 100 },
    'cosmic_power': { name: 'Cosmic Power', type: 'psiquico', pwr: 0, acc: 100 },
    'counter': { name: 'Counter', type: 'lutador', pwr: 0, acc: 100 },
    'covet': { name: 'Covet', type: 'normal', pwr: 40, acc: 100 },
    'crabhammer': { name: 'Crabhammer', type: 'agua', pwr: 90, acc: 85 },
    'cross_chop': { name: 'Cross Chop', type: 'lutador', pwr: 100, acc: 80 },
    'crunch': { name: 'Crunch', type: 'sombrio', pwr: 80, acc: 100 },
    'curse': { name: 'Curse', type: 'fantasma', pwr: 0, acc: 100 },
    'defense_curl': { name: 'Defense Curl', type: 'normal', pwr: 0, acc: 100 },
    'destiny_bond': { name: 'Destiny Bond', type: 'fantasma', pwr: 0, acc: 100 },
    'detect': { name: 'Detect', type: 'lutador', pwr: 0, acc: 100 },
    'dig': { name: 'Dig', type: 'terra', pwr: 60, acc: 100 },
    'disable': { name: 'Disable', type: 'normal', pwr: 0, acc: 100 },
    'dizzy_punch': { name: 'Dizzy Punch', type: 'normal', pwr: 70, acc: 100 },
    'double_edge': { name: 'Double-Edge', type: 'normal', pwr: 120, acc: 100 },
    'double_kick': { name: 'Double Kick', type: 'lutador', pwr: 30, acc: 100 },
    'double_slap': { name: 'DoubleSlap', type: 'normal', pwr: 15, acc: 85 },
    'double_team': { name: 'Double Team', type: 'normal', pwr: 0, acc: 100 },
    'dragon_breath': { name: 'DragonBreath', type: 'dragao', pwr: 60, acc: 100 },
    'dragon_dance': { name: 'Dragon Dance', type: 'dragao', pwr: 0, acc: 100 },
    'dragon_rage': { name: 'Dragon Rage', type: 'dragao', pwr: 0, acc: 100 },
    'dream_eater': { name: 'Dream Eater', type: 'psiquico', pwr: 100, acc: 100 },
    'drill_peck': { name: 'Drill Peck', type: 'voador', pwr: 80, acc: 100 },
    'dynamic_punch': { name: 'DynamicPunch', type: 'lutador', pwr: 100, acc: 50 },
    'earthquake': { name: 'Earthquake', type: 'terra', pwr: 100, acc: 100 },
    'egg_bomb': { name: 'Egg Bomb', type: 'normal', pwr: 100, acc: 75 },
    'ember': { name: 'Ember', type: 'fogo', pwr: 40, acc: 100 },
    'encore': { name: 'Encore', type: 'normal', pwr: 0, acc: 100 },
    'endeavor': { name: 'Endeavor', type: 'normal', pwr: 0, acc: 100 },
    'endure': { name: 'Endure', type: 'normal', pwr: 0, acc: 100 },
    'explosion': { name: 'Explosion', type: 'normal', pwr: 250, acc: 100 },
    'extreme_speed': { name: 'ExtremeSpeed', type: 'normal', pwr: 80, acc: 100 },
    'faint_attack': { name: 'Faint Attack', type: 'sombrio', pwr: 60, acc: 100 },
    'fake_out': { name: 'Fake Out', type: 'normal', pwr: 40, acc: 100 },
    'fake_tears': { name: 'Fake Tears', type: 'sombrio', pwr: 0, acc: 100 },
    'false_swipe': { name: 'False Swipe', type: 'normal', pwr: 40, acc: 100 },
    'feather_dance': { name: 'FeatherDance', type: 'voador', pwr: 0, acc: 100 },
    'fire_blast': { name: 'Fire Blast', type: 'fogo', pwr: 120, acc: 85 },
    'fire_punch': { name: 'Fire Punch', type: 'fogo', pwr: 75, acc: 100 },
    'fire_spin': { name: 'Fire Spin', type: 'fogo', pwr: 15, acc: 70 },
    'fissure': { name: 'Fissure', type: 'terra', pwr: 0, acc: 30 },
    'flail': { name: 'Flail', type: 'normal', pwr: 0, acc: 100 },
    'flame_wheel': { name: 'Flame Wheel', type: 'fogo', pwr: 60, acc: 100 },
    'flamethrower': { name: 'Flamethrower', type: 'fogo', pwr: 95, acc: 100 },
    'flatter': { name: 'Flatter', type: 'sombrio', pwr: 0, acc: 100 },
    'focus_energy': { name: 'Focus Energy', type: 'normal', pwr: 0, acc: 100 },
    'follow_me': { name: 'Follow Me', type: 'normal', pwr: 0, acc: 100 },
    'foresight': { name: 'Foresight', type: 'normal', pwr: 0, acc: 100 },
    'fury_attack': { name: 'Fury Attack', type: 'normal', pwr: 15, acc: 85 },
    'fury_cutter': { name: 'Fury Cutter', type: 'inseto', pwr: 10, acc: 95 },
    'fury_swipes': { name: 'Fury Swipes', type: 'normal', pwr: 18, acc: 80 },
    'future_sight': { name: 'Future Sight', type: 'psiquico', pwr: 80, acc: 90 },
    'giga_drain': { name: 'Giga Drain', type: 'grama', pwr: 60, acc: 100 },
    'glare': { name: 'Glare', type: 'normal', pwr: 0, acc: 75 },
    'growl': { name: 'Growl', type: 'normal', pwr: 0, acc: 100 },
    'growth': { name: 'Growth', type: 'normal', pwr: 0, acc: 100 },
    'grudge': { name: 'Grudge', type: 'fantasma', pwr: 0, acc: 100 },
    'guillotine': { name: 'Guillotine', type: 'normal', pwr: 0, acc: 30 },
    'gust': { name: 'Gust', type: 'voador', pwr: 40, acc: 100 },
    'harden': { name: 'Harden', type: 'normal', pwr: 0, acc: 100 },
    'haze': { name: 'Haze', type: 'gelo', pwr: 0, acc: 100 },
    'headbutt': { name: 'Headbutt', type: 'normal', pwr: 70, acc: 100 },
    'heat_wave': { name: 'Heat Wave', type: 'fogo', pwr: 100, acc: 90 },
    'helping_hand': { name: 'Helping Hand', type: 'normal', pwr: 0, acc: 100 },
    'hi_jump_kick': { name: 'Hi Jump Kick', type: 'lutador', pwr: 85, acc: 90 },
    'horn_attack': { name: 'Horn Attack', type: 'normal', pwr: 65, acc: 100 },
    'horn_drill': { name: 'Horn Drill', type: 'normal', pwr: 0, acc: 30 },
    'hydro_pump': { name: 'Hydro Pump', type: 'agua', pwr: 120, acc: 80 },
    'hyper_beam': { name: 'Hyper Beam', type: 'normal', pwr: 150, acc: 90 },
    'hyper_fang': { name: 'Hyper Fang', type: 'normal', pwr: 80, acc: 90 },
    'hyper_voice': { name: 'Hyper Voice', type: 'normal', pwr: 90, acc: 100 },
    'hypnosis': { name: 'Hypnosis', type: 'psiquico', pwr: 0, acc: 60 },
    'ice_beam': { name: 'Ice Beam', type: 'gelo', pwr: 95, acc: 100 },
    'ice_punch': { name: 'Ice Punch', type: 'gelo', pwr: 75, acc: 100 },
    'icicle_spear': { name: 'Icicle Spear', type: 'gelo', pwr: 10, acc: 100 },
    'icy_wind': { name: 'Icy Wind', type: 'gelo', pwr: 55, acc: 95 },
    'imprison': { name: 'Imprison', type: 'psiquico', pwr: 0, acc: 100 },
    'ingrain': { name: 'Ingrain', type: 'grama', pwr: 0, acc: 100 },
    'iron_tail': { name: 'Iron Tail', type: 'aco', pwr: 100, acc: 75 },
    'jump_kick': { name: 'Jump Kick', type: 'lutador', pwr: 70, acc: 95 },
    'karate_chop': { name: 'Karate Chop', type: 'lutador', pwr: 50, acc: 100 },
    'kinesis': { name: 'Kinesis', type: 'psiquico', pwr: 0, acc: 80 },
    'knock_off': { name: 'Knock Off', type: 'sombrio', pwr: 20, acc: 100 },
    'leech_life': { name: 'Leech Life', type: 'inseto', pwr: 20, acc: 100 },
    'leech_seed': { name: 'Leech Seed', type: 'grama', pwr: 0, acc: 90 },
    'leer': { name: 'Leer', type: 'normal', pwr: 0, acc: 100 },
    'lick': { name: 'Lick', type: 'fantasma', pwr: 20, acc: 100 },
    'light_screen': { name: 'Light Screen', type: 'psiquico', pwr: 0, acc: 100 },
    'lock_on': { name: 'Lock-On', type: 'normal', pwr: 0, acc: 100 },
    'lovely_kiss': { name: 'Lovely Kiss', type: 'normal', pwr: 0, acc: 75 },
    'low_kick': { name: 'Low Kick', type: 'lutador', pwr: 0, acc: 100 },
    'mach_punch': { name: 'Mach Punch', type: 'lutador', pwr: 40, acc: 100 },
    'magical_leaf': { name: 'Magical Leaf', type: 'grama', pwr: 60, acc: 100 },
    'magnitude': { name: 'Magnitude', type: 'terra', pwr: 0, acc: 100 },
    'mean_look': { name: 'Mean Look', type: 'normal', pwr: 0, acc: 100 },
    'meditate': { name: 'Meditate', type: 'psiquico', pwr: 0, acc: 100 },
    'mega_drain': { name: 'Mega Drain', type: 'grama', pwr: 40, acc: 100 },
    'mega_kick': { name: 'Mega Kick', type: 'normal', pwr: 120, acc: 75 },
    'mega_punch': { name: 'Mega Punch', type: 'normal', pwr: 80, acc: 85 },
    'megahorn': { name: 'Megahorn', type: 'inseto', pwr: 120, acc: 85 },
    'memento': { name: 'Memento', type: 'sombrio', pwr: 0, acc: 100 },
    'metal_claw': { name: 'Metal Claw', type: 'aco', pwr: 50, acc: 95 },
    'metal_sound': { name: 'Metal Sound', type: 'aco', pwr: 0, acc: 85 },
    'meteor_mash': { name: 'Meteor Mash', type: 'aco', pwr: 100, acc: 85 },
    'metronome': { name: 'Metronome', type: 'normal', pwr: 0, acc: 100 },
    'mimic': { name: 'Mimic', type: 'normal', pwr: 0, acc: 100 },
    'mind_reader': { name: 'Mind Reader', type: 'normal', pwr: 0, acc: 100 },
    'minimize': { name: 'Minimize', type: 'normal', pwr: 0, acc: 100 },
    'mirror_coat': { name: 'Mirror Coat', type: 'psiquico', pwr: 0, acc: 100 },
    'mirror_move': { name: 'Mirror Move', type: 'voador', pwr: 0, acc: 100 },
    'mist': { name: 'Mist', type: 'gelo', pwr: 0, acc: 100 },
    'moonlight': { name: 'Moonlight', type: 'normal', pwr: 0, acc: 100 },
    'mud_shot': { name: 'Mud Shot', type: 'terra', pwr: 55, acc: 95 },
    'mud_slap': { name: 'Mud-Slap', type: 'terra', pwr: 20, acc: 100 },
    'mud_sport': { name: 'Mud Sport', type: 'terra', pwr: 0, acc: 100 },
    'night_shade': { name: 'Night Shade', type: 'fantasma', pwr: 0, acc: 100 },
    'nightmare': { name: 'Nightmare', type: 'fantasma', pwr: 0, acc: 100 },
    'odor_sleuth': { name: 'Odor Sleuth', type: 'normal', pwr: 0, acc: 100 },
    'outrage': { name: 'Outrage', type: 'dragao', pwr: 90, acc: 100 },
    'pay_day': { name: 'Pay Day', type: 'normal', pwr: 40, acc: 100 },
    'peck': { name: 'Peck', type: 'voador', pwr: 35, acc: 100 },
    'perish_song': { name: 'Perish Song', type: 'normal', pwr: 0, acc: 100 },
    'petal_dance': { name: 'Petal Dance', type: 'grama', pwr: 70, acc: 100 },
    'pin_missile': { name: 'Pin Missile', type: 'inseto', pwr: 14, acc: 85 },
    'poison_fang': { name: 'Poison Fang', type: 'veneno', pwr: 50, acc: 100 },
    'poison_gas': { name: 'Poison Gas', type: 'veneno', pwr: 0, acc: 55 },
    'poison_powder': { name: 'PoisonPowder', type: 'veneno', pwr: 0, acc: 75 },
    'poison_sting': { name: 'Poison Sting', type: 'veneno', pwr: 15, acc: 100 },
    'pound': { name: 'Pound', type: 'normal', pwr: 40, acc: 100 },
    'powder_snow': { name: 'Powder Snow', type: 'gelo', pwr: 40, acc: 100 },
    'protect': { name: 'Protect', type: 'normal', pwr: 0, acc: 100 },
    'psybeam': { name: 'Psybeam', type: 'psiquico', pwr: 65, acc: 100 },
    'psych_up': { name: 'Psych Up', type: 'normal', pwr: 0, acc: 100 },
    'psychic': { name: 'Psychic', type: 'psiquico', pwr: 90, acc: 100 },
    'pursuit': { name: 'Pursuit', type: 'sombrio', pwr: 40, acc: 100 },
    'quick_attack': { name: 'Quick Attack', type: 'normal', pwr: 40, acc: 100 },
    'rage': { name: 'Rage', type: 'normal', pwr: 20, acc: 100 },
    'rain_dance': { name: 'Rain Dance', type: 'agua', pwr: 0, acc: 100 },
    'rapid_spin': { name: 'Rapid Spin', type: 'normal', pwr: 20, acc: 100 },
    'razor_leaf': { name: 'Razor Leaf', type: 'grama', pwr: 55, acc: 95 },
    'recover': { name: 'Recover', type: 'normal', pwr: 0, acc: 100 },
    'reflect': { name: 'Reflect', type: 'psiquico', pwr: 0, acc: 100 },
    'refresh': { name: 'Refresh', type: 'normal', pwr: 0, acc: 100 },
    'rest': { name: 'Rest', type: 'psiquico', pwr: 0, acc: 100 },
    'revenge': { name: 'Revenge', type: 'lutador', pwr: 60, acc: 100 },
    'reversal': { name: 'Reversal', type: 'lutador', pwr: 0, acc: 100 },
    'roar': { name: 'Roar', type: 'normal', pwr: 0, acc: 100 },
    'rock_blast': { name: 'Rock Blast', type: 'pedra', pwr: 25, acc: 80 },
    'rock_throw': { name: 'Rock Throw', type: 'pedra', pwr: 50, acc: 90 },
    'role_play': { name: 'Role Play', type: 'psiquico', pwr: 0, acc: 100 },
    'rolling_kick': { name: 'Rolling Kick', type: 'lutador', pwr: 60, acc: 85 },
    'rollout': { name: 'Rollout', type: 'pedra', pwr: 30, acc: 90 },
    'safeguard': { name: 'Safeguard', type: 'normal', pwr: 0, acc: 100 },
    'sand_attack': { name: 'Sand-Attack', type: 'terra', pwr: 0, acc: 100 },
    'sand_tomb': { name: 'Sand Tomb', type: 'terra', pwr: 15, acc: 70 },
    'sandstorm': { name: 'Sandstorm', type: 'pedra', pwr: 0, acc: 100 },
    'scary_face': { name: 'Scary Face', type: 'normal', pwr: 0, acc: 100 },
    'scratch': { name: 'Scratch', type: 'normal', pwr: 40, acc: 100 },
    'screech': { name: 'Screech', type: 'normal', pwr: 0, acc: 85 },
    'seismic_toss': { name: 'Seismic Toss', type: 'lutador', pwr: 0, acc: 100 },
    'self_destruct': { name: 'Selfdestruct', type: 'normal', pwr: 200, acc: 100 },
    'shadow_ball': { name: 'Shadow Ball', type: 'fantasma', pwr: 80, acc: 100 },
    'shadow_punch': { name: 'Shadow Punch', type: 'fantasma', pwr: 60, acc: 100 },
    'sharpen': { name: 'Sharpen', type: 'normal', pwr: 0, acc: 100 },
    'sheer_cold': { name: 'Sheer Cold', type: 'gelo', pwr: 0, acc: 30 },
    'silver_wind': { name: 'Silver Wind', type: 'inseto', pwr: 60, acc: 100 },
    'sing': { name: 'Sing', type: 'normal', pwr: 0, acc: 55 },
    'sky_attack': { name: 'Sky Attack', type: 'voador', pwr: 140, acc: 90 },
    'sky_uppercut': { name: 'Sky Uppercut', type: 'lutador', pwr: 85, acc: 90 },
    'slam': { name: 'Slam', type: 'normal', pwr: 80, acc: 75 },
    'slash': { name: 'Slash', type: 'normal', pwr: 70, acc: 100 },
    'sleep_powder': { name: 'Sleep Powder', type: 'grama', pwr: 0, acc: 75 },
    'sleep_talk': { name: 'Sleep Talk', type: 'normal', pwr: 0, acc: 100 },
    'sludge': { name: 'Sludge', type: 'veneno', pwr: 65, acc: 100 },
    'sludge_bomb': { name: 'Sludge Bomb', type: 'veneno', pwr: 90, acc: 100 },
    'smog': { name: 'Smog', type: 'veneno', pwr: 20, acc: 70 },
    'smokescreen': { name: 'Smokescreen', type: 'normal', pwr: 0, acc: 100 },
    'snore': { name: 'Snore', type: 'normal', pwr: 40, acc: 100 },
    'soft_boiled': { name: 'Softboiled', type: 'normal', pwr: 0, acc: 100 },
    'solar_beam': { name: 'Solar Beam', type: 'grama', pwr: 120, acc: 100 },
    'sonic_boom': { name: 'SonicBoom', type: 'normal', pwr: 0, acc: 90 },
    'spark': { name: 'Spark', type: 'eletrico', pwr: 65, acc: 100 },
    'spike_cannon': { name: 'Spike Cannon', type: 'normal', pwr: 20, acc: 100 },
    'spikes': { name: 'Spikes', type: 'terra', pwr: 0, acc: 100 },
    'spit_up': { name: 'Spit Up', type: 'normal', pwr: 0, acc: 100 },
    'spite': { name: 'Spite', type: 'fantasma', pwr: 0, acc: 100 },
    'splash': { name: 'Splash', type: 'normal', pwr: 0, acc: 100 },
    'spore': { name: 'Spore', type: 'grama', pwr: 0, acc: 100 },
    'stockpile': { name: 'Stockpile', type: 'normal', pwr: 0, acc: 100 },
    'stomp': { name: 'Stomp', type: 'normal', pwr: 65, acc: 100 },
    'string_shot': { name: 'String Shot', type: 'inseto', pwr: 0, acc: 95 },
    'stun_spore': { name: 'Stun Spore', type: 'grama', pwr: 0, acc: 75 },
    'submission': { name: 'Submission', type: 'lutador', pwr: 80, acc: 80 },
    'substitute': { name: 'Substitute', type: 'normal', pwr: 0, acc: 100 },
    'super_fang': { name: 'Super Fang', type: 'normal', pwr: 0, acc: 90 },
    'superpower': { name: 'Superpower', type: 'lutador', pwr: 120, acc: 100 },
    'supersonic': { name: 'Supersonic', type: 'normal', pwr: 0, acc: 55 },
    'surf': { name: 'Surf', type: 'agua', pwr: 95, acc: 100 },
    'swagger': { name: 'Swagger', type: 'normal', pwr: 0, acc: 90 },
    'swallow': { name: 'Swallow', type: 'normal', pwr: 0, acc: 100 },
    'sweet_scent': { name: 'Sweet Scent', type: 'normal', pwr: 0, acc: 100 },
    'swift': { name: 'Swift', type: 'normal', pwr: 60, acc: 100 },
    'swords_dance': { name: 'Swords Dance', type: 'normal', pwr: 0, acc: 100 },
    'synthesis': { name: 'Synthesis', type: 'grama', pwr: 0, acc: 100 },
    'tackle': { name: 'Tackle', type: 'normal', pwr: 35, acc: 95 },
    'tail_whip': { name: 'Tail Whip', type: 'normal', pwr: 0, acc: 100 },
    'take_down': { name: 'Take Down', type: 'normal', pwr: 90, acc: 85 },
    'teleport': { name: 'Teleport', type: 'psiquico', pwr: 0, acc: 100 },
    'thrash': { name: 'Thrash', type: 'normal', pwr: 90, acc: 100 },
    'thunder': { name: 'Thunder', type: 'eletrico', pwr: 120, acc: 70 },
    'thunder_punch': { name: 'ThunderPunch', type: 'eletrico', pwr: 75, acc: 100 },
    'thunder_shock': { name: 'ThunderShock', type: 'eletrico', pwr: 40, acc: 100 },
    'thunder_wave': { name: 'Thunder Wave', type: 'eletrico', pwr: 0, acc: 100 },
    'thunderbolt': { name: 'Thunderbolt', type: 'eletrico', pwr: 95, acc: 100 },
    'tickle': { name: 'Tickle', type: 'normal', pwr: 0, acc: 100 },
    'transform': { name: 'Transform', type: 'normal', pwr: 0, acc: 100 },
    'tri_attack': { name: 'Tri Attack', type: 'normal', pwr: 80, acc: 100 },
    'trick': { name: 'Trick', type: 'psiquico', pwr: 0, acc: 100 },
    'twineedle': { name: 'Twineedle', type: 'inseto', pwr: 25, acc: 100 },
    'twister': { name: 'Twister', type: 'dragao', pwr: 40, acc: 100 },
    'uproar': { name: 'Uproar', type: 'normal', pwr: 50, acc: 100 },
    'vice_grip': { name: 'ViceGrip', type: 'normal', pwr: 55, acc: 100 },
    'vine_whip': { name: 'Vine Whip', type: 'grama', pwr: 35, acc: 100 },
    'vital_throw': { name: 'Vital Throw', type: 'lutador', pwr: 70, acc: 100 },
    'water_gun': { name: 'Water Gun', type: 'agua', pwr: 40, acc: 100 },
    'water_sport': { name: 'Water Sport', type: 'agua', pwr: 0, acc: 100 },
    'waterfall': { name: 'Waterfall', type: 'agua', pwr: 80, acc: 100 },
    'whirlwind': { name: 'Whirlwind', type: 'normal', pwr: 0, acc: 100 },
    'will_o_wisp': { name: 'Will-O-Wisp', type: 'fogo', pwr: 0, acc: 75 },
    'wing_attack': { name: 'Wing Attack', type: 'voador', pwr: 60, acc: 100 },
    'withdraw': { name: 'Withdraw', type: 'agua', pwr: 0, acc: 100 },
    'wrap': { name: 'Wrap', type: 'normal', pwr: 15, acc: 85 },
    'yawn': { name: 'Yawn', type: 'normal', pwr: 0, acc: 100 },
    'zap_cannon': { name: 'Zap Cannon', type: 'eletrico', pwr: 120, acc: 50 }
};

const Learnsets = {
    '1': [[1,'tackle'],[4,'growl'],[7,'leech_seed'],[10,'vine_whip'],[15,'poison_powder'],[15,'sleep_powder'],[20,'razor_leaf'],[25,'sweet_scent'],[32,'growth'],[39,'synthesis'],[46,'solar_beam']],
    '2': [[1,'tackle'],[1,'growl'],[1,'leech_seed'],[4,'growl'],[7,'leech_seed'],[10,'vine_whip'],[15,'poison_powder'],[15,'sleep_powder'],[22,'razor_leaf'],[29,'sweet_scent'],[38,'growth'],[47,'synthesis'],[56,'solar_beam']],
    '3': [[1,'tackle'],[1,'growl'],[1,'leech_seed'],[1,'vine_whip'],[4,'growl'],[7,'leech_seed'],[10,'vine_whip'],[15,'poison_powder'],[15,'sleep_powder'],[22,'razor_leaf'],[29,'sweet_scent'],[41,'growth'],[53,'synthesis'],[65,'solar_beam']],
    '4': [[1,'scratch'],[1,'growl'],[7,'ember'],[13,'metal_claw'],[19,'smokescreen'],[25,'scary_face'],[31,'flamethrower'],[37,'slash'],[43,'dragon_rage'],[49,'fire_spin']],
    '5': [[1,'scratch'],[1,'growl'],[1,'ember'],[7,'ember'],[13,'metal_claw'],[20,'smokescreen'],[27,'scary_face'],[34,'flamethrower'],[41,'slash'],[48,'dragon_rage'],[55,'fire_spin']],
    '6': [[1,'heat_wave'],[1,'scratch'],[1,'growl'],[1,'ember'],[1,'metal_claw'],[7,'ember'],[13,'metal_claw'],[20,'smokescreen'],[27,'scary_face'],[34,'flamethrower'],[36,'wing_attack'],[44,'slash'],[54,'dragon_rage'],[64,'fire_spin']],
    '7': [[1,'tackle'],[4,'tail_whip'],[7,'bubble'],[10,'withdraw'],[13,'water_gun'],[18,'bite'],[23,'rapid_spin'],[28,'protect'],[33,'rain_dance'],[40,'skull_bash'],[47,'hydro_pump']],
    '8': [[1,'tackle'],[1,'tail_whip'],[1,'bubble'],[4,'tail_whip'],[7,'bubble'],[10,'withdraw'],[13,'water_gun'],[19,'bite'],[25,'rapid_spin'],[31,'protect'],[37,'rain_dance'],[45,'skull_bash'],[53,'hydro_pump']],
    '9': [[1,'tackle'],[1,'tail_whip'],[1,'bubble'],[1,'withdraw'],[4,'tail_whip'],[7,'bubble'],[10,'withdraw'],[13,'water_gun'],[19,'bite'],[25,'rapid_spin'],[31,'protect'],[42,'rain_dance'],[55,'skull_bash'],[68,'hydro_pump']],
    '10': [[1,'tackle'],[1,'string_shot']],
    '11': [[1,'harden'],[7,'harden']],
    '12': [[1,'confusion'],[10,'confusion'],[13,'poison_powder'],[14,'stun_spore'],[15,'sleep_powder'],[18,'supersonic'],[23,'whirlwind'],[28,'gust'],[34,'psybeam'],[40,'safeguard'],[47,'silver_wind']],
    '13': [[1,'poison_sting'],[1,'string_shot'],[15,'bug_bite']],
    '14': [[1,'harden'],[7,'harden']],
    '15': [[1,'fury_attack'],[10,'fury_attack'],[15,'focus_energy'],[20,'twineedle'],[25,'rage'],[30,'pursuit'],[35,'pin_missile'],[40,'agility'],[45,'endeavor']],
    '16': [[1,'tackle'],[5,'sand_attack'],[9,'gust'],[13,'quick_attack'],[19,'whirlwind'],[25,'wing_attack'],[31,'feather_dance'],[39,'agility'],[47,'mirror_move']],
    '17': [[1,'tackle'],[1,'sand_attack'],[1,'gust'],[5,'sand_attack'],[9,'gust'],[13,'quick_attack'],[20,'whirlwind'],[27,'wing_attack'],[34,'feather_dance'],[43,'agility'],[52,'mirror_move']],
    '18': [[1,'tackle'],[1,'sand_attack'],[1,'gust'],[1,'quick_attack'],[5,'sand_attack'],[9,'gust'],[13,'quick_attack'],[20,'whirlwind'],[27,'wing_attack'],[34,'feather_dance'],[48,'agility'],[62,'mirror_move']],
    '19': [[1,'tackle'],[1,'tail_whip'],[7,'quick_attack'],[13,'hyper_fang'],[20,'focus_energy'],[27,'pursuit'],[34,'super_fang'],[41,'endeavor']],
    '20': [[1,'tackle'],[1,'tail_whip'],[1,'quick_attack'],[7,'quick_attack'],[13,'hyper_fang'],[20,'scary_face'],[30,'pursuit'],[40,'super_fang'],[50,'endeavor']],
    '21': [[1,'peck'],[1,'growl'],[7,'leer'],[13,'fury_attack'],[19,'pursuit'],[25,'aerial_ace'],[31,'mirror_move'],[37,'drill_peck'],[43,'agility']],
    '22': [[1,'peck'],[1,'growl'],[1,'leer'],[1,'fury_attack'],[7,'leer'],[13,'fury_attack'],[26,'pursuit'],[32,'mirror_move'],[40,'drill_peck'],[47,'agility']],
    '23': [[1,'wrap'],[1,'leer'],[8,'poison_sting'],[13,'bite'],[20,'glare'],[25,'screech'],[32,'acid'],[37,'stockpile'],[37,'swallow'],[37,'spit_up'],[44,'haze']],
    '24': [[1,'wrap'],[1,'leer'],[1,'poison_sting'],[1,'bite'],[8,'poison_sting'],[13,'bite'],[20,'glare'],[28,'screech'],[38,'acid'],[46,'stockpile'],[46,'swallow'],[46,'spit_up'],[56,'haze']],
    '25': [[1,'thunder_shock'],[1,'growl'],[6,'tail_whip'],[8,'thunder_wave'],[11,'quick_attack'],[15,'double_team'],[20,'slam'],[26,'thunderbolt'],[33,'agility'],[41,'thunder'],[50,'light_screen']],
    '26': [[1,'thunder_shock'],[1,'tail_whip'],[1,'quick_attack'],[1,'thunderbolt']],
    '27': [[1,'scratch'],[6,'defense_curl'],[11,'sand_attack'],[17,'poison_sting'],[23,'slash'],[30,'swift'],[37,'fury_swipes'],[45,'sand_tomb'],[53,'sandstorm']],
    '28': [[1,'scratch'],[1,'defense_curl'],[1,'sand_attack'],[6,'defense_curl'],[11,'sand_attack'],[17,'poison_sting'],[24,'slash'],[33,'swift'],[42,'fury_swipes'],[52,'sand_tomb'],[62,'sandstorm']],
    '29': [[1,'growl'],[1,'scratch'],[8,'tail_whip'],[12,'double_kick'],[17,'poison_sting'],[20,'bite'],[23,'helping_hand'],[30,'fury_swipes'],[38,'flatter'],[47,'crunch']],
    '30': [[1,'growl'],[1,'scratch'],[8,'tail_whip'],[12,'double_kick'],[18,'poison_sting'],[22,'bite'],[26,'helping_hand'],[34,'fury_swipes'],[43,'flatter'],[53,'crunch']],
    '31': [[1,'scratch'],[1,'tail_whip'],[1,'double_kick'],[1,'poison_sting'],[22,'body_slam'],[43,'superpower']],
    '32': [[1,'leer'],[1,'peck'],[8,'focus_energy'],[12,'double_kick'],[17,'poison_sting'],[20,'horn_attack'],[23,'helping_hand'],[30,'fury_attack'],[38,'flatter'],[47,'horn_drill']],
    '33': [[1,'leer'],[1,'peck'],[8,'focus_energy'],[12,'double_kick'],[18,'poison_sting'],[22,'horn_attack'],[26,'helping_hand'],[34,'fury_attack'],[43,'flatter'],[53,'horn_drill']],
    '34': [[1,'peck'],[1,'focus_energy'],[1,'double_kick'],[1,'poison_sting'],[22,'thrash'],[43,'megahorn']],
    '35': [[1,'pound'],[1,'growl'],[5,'encore'],[9,'sing'],[13,'double_slap'],[17,'follow_me'],[21,'minimize'],[25,'defense_curl'],[29,'metronome'],[33,'cosmic_power'],[37,'moonlight'],[41,'light_screen'],[45,'meteor_mash']],
    '36': [[1,'sing'],[1,'double_slap'],[1,'minimize'],[1,'metronome']],
    '37': [[1,'ember'],[5,'tail_whip'],[9,'roar'],[13,'quick_attack'],[17,'will_o_wisp'],[21,'confuse_ray'],[25,'imprison'],[29,'flamethrower'],[33,'safeguard'],[37,'grudge'],[41,'fire_spin']],
    '38': [[1,'ember'],[1,'quick_attack'],[1,'confuse_ray'],[1,'safeguard'],[45,'fire_spin']],
    '39': [[1,'sing'],[4,'defense_curl'],[9,'pound'],[14,'disable'],[19,'rollout'],[24,'double_slap'],[29,'rest'],[34,'body_slam'],[39,'mimic'],[44,'hyper_voice'],[49,'double_edge']],
    '40': [[1,'sing'],[1,'disable'],[1,'defense_curl'],[1,'double_slap']],
    '41': [[1,'leech_life'],[6,'astonish'],[11,'supersonic'],[16,'bite'],[21,'wing_attack'],[26,'confuse_ray'],[31,'air_cutter'],[36,'mean_look'],[41,'poison_fang'],[46,'haze']],
    '42': [[1,'screech'],[1,'leech_life'],[1,'astonish'],[1,'supersonic'],[6,'astonish'],[11,'supersonic'],[16,'bite'],[21,'wing_attack'],[28,'confuse_ray'],[35,'air_cutter'],[42,'mean_look'],[49,'poison_fang'],[56,'haze']],
    '43': [[1,'absorb'],[7,'sweet_scent'],[14,'poison_powder'],[16,'stun_spore'],[18,'sleep_powder'],[23,'acid'],[32,'moonlight'],[39,'petal_dance']],
    '44': [[1,'absorb'],[1,'sweet_scent'],[1,'poison_powder'],[7,'sweet_scent'],[14,'poison_powder'],[16,'stun_spore'],[18,'sleep_powder'],[24,'acid'],[35,'moonlight'],[44,'petal_dance']],
    '45': [[1,'absorb'],[1,'aromatherapy'],[1,'stun_spore'],[1,'mega_drain'],[44,'petal_dance']],
    '46': [[1,'scratch'],[7,'stun_spore'],[13,'poison_powder'],[19,'leech_life'],[25,'spore'],[31,'slash'],[37,'growth'],[43,'giga_drain'],[49,'aromatherapy']],
    '47': [[1,'scratch'],[1,'stun_spore'],[1,'poison_powder'],[7,'stun_spore'],[13,'poison_powder'],[19,'leech_life'],[27,'spore'],[35,'slash'],[43,'growth'],[51,'giga_drain'],[59,'aromatherapy']],
    '48': [[1,'tackle'],[1,'disable'],[1,'foresight'],[9,'supersonic'],[17,'confusion'],[20,'poison_powder'],[25,'leech_life'],[28,'stun_spore'],[33,'psybeam'],[36,'sleep_powder'],[41,'psychic']],
    '49': [[1,'silver_wind'],[1,'tackle'],[1,'disable'],[1,'foresight'],[1,'supersonic'],[9,'supersonic'],[17,'confusion'],[20,'poison_powder'],[25,'leech_life'],[28,'stun_spore'],[31,'gust'],[36,'psybeam'],[42,'sleep_powder'],[52,'psychic']],
    '50': [[1,'sand_attack'],[1,'scratch'],[5,'growl'],[9,'magnitude'],[17,'dig'],[21,'fury_swipes'],[25,'mud_slap'],[33,'slash'],[41,'earthquake'],[49,'fissure']],
    '51': [[1,'tri_attack'],[1,'scratch'],[1,'sand_attack'],[1,'growl'],[5,'growl'],[9,'magnitude'],[17,'dig'],[21,'fury_swipes'],[25,'mud_slap'],[26,'sand_tomb'],[38,'slash'],[51,'earthquake'],[64,'fissure']],
    '52': [[1,'scratch'],[1,'growl'],[10,'bite'],[18,'pay_day'],[25,'faint_attack'],[31,'screech'],[36,'fury_swipes'],[40,'slash'],[43,'fake_out'],[45,'swagger']],
    '53': [[1,'scratch'],[1,'growl'],[1,'bite'],[10,'bite'],[18,'pay_day'],[25,'faint_attack'],[34,'screech'],[42,'fury_swipes'],[49,'slash'],[55,'fake_out'],[61,'swagger']],
    '54': [[1,'water_sport'],[1,'scratch'],[5,'tail_whip'],[10,'disable'],[16,'confusion'],[23,'screech'],[31,'psych_up'],[40,'fury_swipes'],[50,'hydro_pump']],
    '55': [[1,'water_sport'],[1,'scratch'],[1,'tail_whip'],[1,'disable'],[5,'tail_whip'],[10,'disable'],[16,'confusion'],[23,'screech'],[31,'psych_up'],[44,'fury_swipes'],[58,'hydro_pump']],
    '56': [[1,'scratch'],[1,'leer'],[6,'low_kick'],[11,'karate_chop'],[16,'fury_swipes'],[21,'focus_energy'],[26,'seismic_toss'],[31,'cross_chop'],[36,'swagger'],[41,'screech'],[46,'thrash']],
    '57': [[1,'scratch'],[1,'leer'],[1,'low_kick'],[1,'rage'],[6,'low_kick'],[11,'karate_chop'],[16,'fury_swipes'],[21,'focus_energy'],[26,'seismic_toss'],[28,'rage'],[35,'cross_chop'],[44,'swagger'],[53,'screech'],[62,'thrash']],
    '58': [[1,'bite'],[1,'roar'],[7,'ember'],[13,'leer'],[19,'odor_sleuth'],[25,'take_down'],[31,'flame_wheel'],[37,'helping_hand'],[43,'agility'],[49,'flamethrower']],
    '59': [[1,'bite'],[1,'roar'],[1,'ember'],[1,'odor_sleuth'],[49,'extreme_speed']],
    '60': [[1,'bubble'],[7,'hypnosis'],[13,'water_gun'],[19,'double_slap'],[25,'rain_dance'],[31,'body_slam'],[37,'belly_drum'],[43,'hydro_pump']],
    '61': [[1,'bubble'],[1,'hypnosis'],[1,'water_gun'],[7,'hypnosis'],[13,'water_gun'],[19,'double_slap'],[27,'rain_dance'],[35,'body_slam'],[43,'belly_drum'],[51,'hydro_pump']],
    '62': [[1,'water_gun'],[1,'hypnosis'],[1,'double_slap'],[1,'submission'],[35,'submission'],[51,'mind_reader']],
    '63': [[1,'teleport']],
    '64': [[1,'teleport'],[1,'kinesis'],[1,'confusion'],[16,'confusion'],[18,'disable'],[21,'psybeam'],[23,'reflect'],[25,'recover'],[30,'future_sight'],[33,'role_play'],[36,'psychic'],[43,'trick']],
    '65': [[1,'teleport'],[1,'kinesis'],[1,'confusion'],[16,'confusion'],[18,'disable'],[21,'psybeam'],[23,'reflect'],[25,'recover'],[30,'future_sight'],[33,'calm_mind'],[36,'psychic'],[43,'trick']],
    '66': [[1,'low_kick'],[1,'leer'],[7,'focus_energy'],[13,'karate_chop'],[19,'seismic_toss'],[22,'foresight'],[25,'revenge'],[31,'vital_throw'],[37,'submission'],[40,'cross_chop'],[43,'scary_face'],[49,'dynamic_punch']],
    '67': [[1,'low_kick'],[1,'leer'],[1,'focus_energy'],[7,'focus_energy'],[13,'karate_chop'],[19,'seismic_toss'],[22,'foresight'],[25,'revenge'],[33,'vital_throw'],[41,'submission'],[46,'cross_chop'],[51,'scary_face'],[59,'dynamic_punch']],
    '68': [[1,'low_kick'],[1,'leer'],[1,'focus_energy'],[7,'focus_energy'],[13,'karate_chop'],[19,'seismic_toss'],[22,'foresight'],[25,'revenge'],[33,'vital_throw'],[41,'submission'],[46,'cross_chop'],[51,'scary_face'],[59,'dynamic_punch']],
    '69': [[1,'vine_whip'],[6,'growth'],[11,'wrap'],[15,'sleep_powder'],[17,'poison_powder'],[19,'stun_spore'],[23,'acid'],[30,'sweet_scent'],[37,'razor_leaf'],[45,'slam']],
    '70': [[1,'vine_whip'],[1,'growth'],[1,'wrap'],[6,'growth'],[11,'wrap'],[15,'sleep_powder'],[17,'poison_powder'],[19,'stun_spore'],[24,'acid'],[33,'sweet_scent'],[42,'razor_leaf'],[54,'slam']],
    '71': [[1,'stockpile'],[1,'spit_up'],[1,'swallow'],[1,'vine_whip'],[1,'sleep_powder'],[1,'sweet_scent'],[1,'razor_leaf']],
    '72': [[1,'poison_sting'],[6,'supersonic'],[12,'constrict'],[19,'acid'],[25,'bubble_beam'],[30,'wrap'],[36,'barrier'],[43,'screech'],[49,'hydro_pump']],
    '73': [[1,'poison_sting'],[1,'supersonic'],[1,'constrict'],[6,'supersonic'],[12,'constrict'],[19,'acid'],[25,'bubble_beam'],[30,'wrap'],[38,'barrier'],[47,'screech'],[55,'hydro_pump']],
    '74': [[1,'tackle'],[1,'defense_curl'],[6,'mud_sport'],[11,'rock_throw'],[16,'magnitude'],[21,'self_destruct'],[26,'rollout'],[31,'rock_blast'],[36,'earthquake'],[41,'explosion'],[46,'double_edge']],
    '75': [[1,'tackle'],[1,'defense_curl'],[1,'mud_sport'],[1,'rock_throw'],[6,'mud_sport'],[11,'rock_throw'],[16,'magnitude'],[21,'self_destruct'],[29,'rollout'],[37,'rock_blast'],[45,'earthquake'],[53,'explosion'],[62,'double_edge']],
    '76': [[1,'tackle'],[1,'defense_curl'],[1,'mud_sport'],[1,'rock_throw'],[6,'mud_sport'],[11,'rock_throw'],[16,'magnitude'],[21,'self_destruct'],[29,'rollout'],[37,'rock_blast'],[45,'earthquake'],[53,'explosion'],[62,'double_edge']],
    '77': [[1,'quick_attack'],[5,'growl'],[9,'tail_whip'],[14,'ember'],[19,'stomp'],[25,'fire_spin'],[31,'take_down'],[38,'agility'],[45,'bounce'],[53,'fire_blast']],
    '78': [[1,'quick_attack'],[1,'growl'],[1,'tail_whip'],[1,'ember'],[5,'growl'],[9,'tail_whip'],[14,'ember'],[19,'stomp'],[25,'fire_spin'],[31,'take_down'],[38,'agility'],[40,'fury_attack'],[50,'bounce'],[63,'fire_blast']],
    '79': [[1,'curse'],[1,'yawn'],[1,'tackle'],[6,'growl'],[13,'water_gun'],[17,'confusion'],[24,'disable'],[29,'headbutt'],[36,'amnesia'],[40,'psychic'],[47,'psych_up']],
    '80': [[1,'curse'],[1,'yawn'],[1,'tackle'],[1,'growl'],[6,'growl'],[13,'water_gun'],[17,'confusion'],[24,'disable'],[29,'headbutt'],[36,'amnesia'],[37,'withdraw'],[44,'psychic'],[55,'psych_up']],
    '81': [[1,'metal_sound'],[1,'tackle'],[6,'thunder_shock'],[11,'supersonic'],[16,'sonic_boom'],[21,'thunder_wave'],[26,'spark'],[32,'lock_on'],[38,'swift'],[44,'screech'],[50,'zap_cannon']],
    '82': [[1,'metal_sound'],[1,'tackle'],[1,'thunder_shock'],[1,'supersonic'],[6,'thunder_shock'],[11,'supersonic'],[16,'sonic_boom'],[21,'thunder_wave'],[26,'spark'],[35,'lock_on'],[44,'tri_attack'],[53,'screech'],[62,'zap_cannon']],
    '83': [[1,'peck'],[6,'sand_attack'],[11,'leer'],[16,'fury_attack'],[21,'knock_off'],[26,'fury_cutter'],[31,'swords_dance'],[36,'agility'],[41,'slash'],[46,'false_swipe']],
    '84': [[1,'peck'],[1,'growl'],[9,'pursuit'],[13,'fury_attack'],[21,'tri_attack'],[25,'rage'],[33,'uproar'],[37,'drill_peck'],[45,'agility']],
    '85': [[1,'peck'],[1,'growl'],[1,'pursuit'],[1,'fury_attack'],[9,'pursuit'],[13,'fury_attack'],[21,'tri_attack'],[25,'rage'],[38,'uproar'],[47,'drill_peck'],[60,'agility']],
    '86': [[1,'headbutt'],[9,'growl'],[17,'icy_wind'],[21,'aurora_beam'],[29,'rest'],[37,'take_down'],[41,'ice_beam'],[49,'safeguard']],
    '87': [[1,'signal_beam'],[1,'headbutt'],[1,'growl'],[1,'icy_wind'],[1,'aurora_beam'],[9,'growl'],[17,'icy_wind'],[21,'aurora_beam'],[29,'rest'],[34,'sheer_cold'],[42,'take_down'],[51,'ice_beam'],[64,'safeguard']],
    '88': [[1,'poison_gas'],[1,'pound'],[4,'harden'],[8,'disable'],[13,'sludge'],[19,'minimize'],[26,'screech'],[34,'acid_armor'],[43,'sludge_bomb'],[53,'memento']],
    '89': [[1,'poison_gas'],[1,'pound'],[1,'harden'],[4,'harden'],[8,'disable'],[13,'sludge'],[19,'minimize'],[26,'screech'],[34,'acid_armor'],[47,'sludge_bomb'],[61,'memento']],
    '90': [[1,'tackle'],[1,'withdraw'],[8,'icicle_spear'],[15,'supersonic'],[22,'aurora_beam'],[29,'protect'],[36,'leer'],[43,'clamp'],[50,'ice_beam']],
    '91': [[1,'withdraw'],[1,'supersonic'],[1,'aurora_beam'],[1,'protect'],[36,'spikes'],[43,'spike_cannon']],
    '92': [[1,'hypnosis'],[1,'lick'],[8,'spite'],[13,'curse'],[16,'night_shade'],[21,'confuse_ray'],[28,'dream_eater'],[33,'destiny_bond'],[36,'shadow_ball'],[41,'nightmare'],[48,'mean_look']],
    '93': [[1,'hypnosis'],[1,'lick'],[1,'spite'],[8,'spite'],[13,'curse'],[16,'night_shade'],[21,'confuse_ray'],[25,'shadow_punch'],[31,'dream_eater'],[39,'destiny_bond'],[45,'shadow_ball'],[53,'nightmare'],[64,'mean_look']],
    '94': [[1,'hypnosis'],[1,'lick'],[1,'spite'],[8,'spite'],[13,'curse'],[16,'night_shade'],[21,'confuse_ray'],[25,'shadow_punch'],[31,'dream_eater'],[39,'destiny_bond'],[45,'shadow_ball'],[53,'nightmare'],[64,'mean_look']],
    '95': [[1,'tackle'],[1,'screech'],[8,'bind'],[12,'rock_throw'],[19,'harden'],[23,'rage'],[30,'dragon_breath'],[34,'sandstorm'],[41,'slam'],[45,'iron_tail'],[52,'sand_tomb'],[56,'double_edge']],
    '96': [[1,'pound'],[1,'hypnosis'],[7,'disable'],[11,'confusion'],[17,'headbutt'],[21,'poison_gas'],[27,'meditate'],[31,'psychic'],[37,'psych_up'],[41,'swagger'],[47,'future_sight']],
    '97': [[1,'nightmare'],[1,'pound'],[1,'hypnosis'],[1,'disable'],[1,'confusion'],[7,'disable'],[11,'confusion'],[17,'headbutt'],[21,'poison_gas'],[29,'meditate'],[35,'psychic'],[43,'psych_up'],[49,'swagger'],[57,'future_sight']],
    '98': [[1,'bubble'],[5,'leer'],[12,'vice_grip'],[16,'harden'],[23,'mud_shot'],[27,'stomp'],[34,'guillotine'],[38,'protect'],[45,'crabhammer'],[49,'flail']],
    '99': [[1,'metal_claw'],[1,'bubble'],[1,'leer'],[1,'vice_grip'],[1,'harden'],[5,'leer'],[12,'vice_grip'],[16,'harden'],[23,'mud_shot'],[27,'stomp'],[38,'guillotine'],[42,'protect'],[57,'crabhammer'],[65,'flail']],
    '100': [[1,'charge'],[1,'tackle'],[8,'screech'],[15,'sonic_boom'],[21,'spark'],[27,'self_destruct'],[32,'rollout'],[37,'light_screen'],[42,'swift'],[46,'explosion'],[49,'mirror_coat']],
    '101': [[1,'charge'],[1,'tackle'],[1,'screech'],[1,'sonic_boom'],[8,'screech'],[15,'sonic_boom'],[21,'spark'],[27,'self_destruct'],[34,'rollout'],[41,'light_screen'],[48,'swift'],[54,'explosion'],[59,'mirror_coat']],
    '102': [[1,'barrage'],[1,'uproar'],[1,'hypnosis'],[7,'reflect'],[13,'leech_seed'],[19,'confusion'],[25,'stun_spore'],[31,'poison_powder'],[37,'sleep_powder'],[43,'solar_beam']],
    '103': [[1,'barrage'],[1,'hypnosis'],[1,'confusion'],[19,'stomp'],[31,'egg_bomb']],
    '104': [[1,'growl'],[5,'tail_whip'],[9,'bone_club'],[13,'headbutt'],[17,'leer'],[21,'focus_energy'],[25,'bonemerang'],[29,'rage'],[33,'false_swipe'],[37,'thrash'],[41,'bone_rush'],[45,'double_edge']],
    '105': [[1,'growl'],[1,'tail_whip'],[1,'bone_club'],[1,'headbutt'],[5,'tail_whip'],[9,'bone_club'],[13,'headbutt'],[17,'leer'],[21,'focus_energy'],[25,'bonemerang'],[32,'rage'],[39,'false_swipe'],[46,'thrash'],[53,'bone_rush'],[61,'double_edge']],
    '106': [[1,'revenge'],[1,'double_kick'],[6,'meditate'],[11,'rolling_kick'],[16,'jump_kick'],[20,'brick_break'],[21,'focus_energy'],[26,'hi_jump_kick'],[31,'mind_reader'],[36,'foresight'],[41,'endure'],[46,'mega_kick'],[51,'reversal']],
    '107': [[1,'revenge'],[1,'comet_punch'],[7,'agility'],[13,'pursuit'],[20,'mach_punch'],[26,'thunder_punch'],[26,'ice_punch'],[26,'fire_punch'],[32,'sky_uppercut'],[38,'mega_punch'],[44,'detect'],[50,'counter']],
    '108': [[1,'lick'],[7,'supersonic'],[12,'defense_curl'],[18,'knock_off'],[23,'stomp'],[29,'wrap'],[34,'disable'],[40,'slam'],[45,'screech'],[51,'refresh']],
    '109': [[1,'poison_gas'],[1,'tackle'],[9,'smog'],[17,'self_destruct'],[21,'sludge'],[25,'smokescreen'],[33,'haze'],[41,'explosion'],[45,'destiny_bond'],[49,'memento']],
    '110': [[1,'poison_gas'],[1,'tackle'],[1,'smog'],[1,'self_destruct'],[9,'smog'],[17,'self_destruct'],[21,'sludge'],[25,'smokescreen'],[33,'haze'],[44,'explosion'],[51,'destiny_bond'],[58,'memento']],
    '111': [[1,'horn_attack'],[1,'tail_whip'],[10,'stomp'],[15,'fury_attack'],[24,'scary_face'],[29,'rock_blast'],[38,'horn_drill'],[43,'take_down'],[52,'earthquake'],[57,'megahorn']],
    '112': [[1,'horn_attack'],[1,'tail_whip'],[1,'stomp'],[1,'fury_attack'],[10,'stomp'],[15,'fury_attack'],[24,'scary_face'],[29,'rock_blast'],[38,'horn_drill'],[46,'take_down'],[58,'earthquake'],[66,'megahorn']],
    '113': [[1,'pound'],[1,'growl'],[5,'tail_whip'],[9,'refresh'],[13,'soft_boiled'],[17,'double_slap'],[23,'minimize'],[29,'sing'],[35,'egg_bomb'],[41,'defense_curl'],[49,'light_screen'],[57,'double_edge']],
    '114': [[1,'ingrain'],[1,'constrict'],[4,'sleep_powder'],[10,'absorb'],[13,'growth'],[19,'poison_powder'],[22,'vine_whip'],[28,'bind'],[31,'mega_drain'],[37,'stun_spore'],[40,'slam'],[46,'tickle']],
    '115': [[1,'comet_punch'],[1,'leer'],[7,'bite'],[13,'tail_whip'],[19,'fake_out'],[25,'mega_punch'],[31,'rage'],[37,'endure'],[43,'dizzy_punch'],[49,'reversal']],
    '116': [[1,'bubble'],[8,'smokescreen'],[15,'leer'],[22,'water_gun'],[29,'twister'],[36,'agility'],[43,'hydro_pump'],[50,'dragon_dance']],
    '117': [[1,'bubble'],[1,'smokescreen'],[1,'leer'],[1,'water_gun'],[8,'smokescreen'],[15,'leer'],[22,'water_gun'],[29,'twister'],[40,'agility'],[51,'hydro_pump'],[62,'dragon_dance']],
    '118': [[1,'peck'],[1,'tail_whip'],[1,'water_sport'],[10,'supersonic'],[15,'horn_attack'],[24,'flail'],[29,'fury_attack'],[38,'waterfall'],[43,'horn_drill'],[52,'agility'],[57,'megahorn']],
    '119': [[1,'peck'],[1,'tail_whip'],[1,'water_sport'],[1,'supersonic'],[10,'supersonic'],[15,'horn_attack'],[24,'flail'],[29,'fury_attack'],[41,'waterfall'],[49,'horn_drill'],[61,'agility'],[69,'megahorn']],
    '120': [[1,'tackle'],[1,'harden'],[6,'water_gun'],[10,'rapid_spin'],[15,'recover'],[19,'camouflage'],[24,'swift'],[28,'bubble_beam'],[33,'minimize'],[37,'light_screen'],[42,'cosmic_power'],[46,'hydro_pump']],
    '121': [[1,'water_gun'],[1,'rapid_spin'],[1,'recover'],[1,'swift'],[33,'confuse_ray']],
    '122': [[1,'barrier'],[5,'confusion'],[8,'substitute'],[12,'meditate'],[15,'double_slap'],[19,'light_screen'],[19,'reflect'],[22,'magical_leaf'],[26,'encore'],[29,'psybeam'],[33,'recycle'],[36,'trick'],[40,'role_play'],[43,'psychic'],[47,'baton_pass'],[50,'safeguard']],
    '123': [[1,'quick_attack'],[1,'leer'],[6,'focus_energy'],[11,'pursuit'],[16,'false_swipe'],[21,'agility'],[26,'wing_attack'],[31,'slash'],[36,'swords_dance'],[41,'double_team'],[46,'fury_cutter']],
    '124': [[1,'pound'],[1,'lick'],[1,'lovely_kiss'],[1,'powder_snow'],[9,'lovely_kiss'],[13,'powder_snow'],[21,'double_slap'],[25,'ice_punch'],[35,'mean_look'],[41,'fake_tears'],[51,'body_slam'],[57,'perish_song'],[67,'blizzard']],
    '125': [[1,'quick_attack'],[1,'leer'],[1,'thunder_punch'],[9,'thunder_punch'],[17,'light_screen'],[25,'swift'],[36,'screech'],[47,'thunderbolt'],[58,'thunder']],
    '126': [[1,'ember'],[1,'leer'],[1,'smog'],[1,'fire_punch'],[7,'leer'],[13,'smog'],[19,'fire_punch'],[25,'smokescreen'],[33,'sunny_day'],[41,'flamethrower'],[49,'confuse_ray'],[57,'fire_blast']],
    '127': [[1,'vice_grip'],[1,'focus_energy'],[7,'bind'],[13,'seismic_toss'],[19,'harden'],[25,'revenge'],[31,'brick_break'],[37,'guillotine'],[43,'submission'],[49,'swords_dance']],
    '128': [[1,'tackle'],[1,'tail_whip'],[4,'rage'],[8,'horn_attack'],[13,'scary_face'],[19,'pursuit'],[26,'swagger'],[34,'rest'],[43,'thrash'],[53,'take_down']],
    '129': [[1,'splash'],[15,'tackle'],[30,'flail']],
    '130': [[1,'thrash'],[20,'bite'],[25,'dragon_rage'],[30,'leer'],[35,'twister'],[40,'hydro_pump'],[45,'rain_dance'],[50,'dragon_dance'],[55,'hyper_beam']],
    '131': [[1,'water_gun'],[1,'growl'],[1,'sing'],[7,'mist'],[13,'body_slam'],[19,'confuse_ray'],[25,'perish_song'],[31,'ice_beam'],[37,'rain_dance'],[43,'safeguard'],[49,'hydro_pump'],[55,'sheer_cold']],
    '132': [[1,'transform']],
    '133': [[1,'tackle'],[1,'tail_whip'],[1,'helping_hand'],[8,'sand_attack'],[16,'growl'],[23,'quick_attack'],[30,'bite'],[36,'baton_pass'],[42,'take_down']],
    '134': [[1,'tackle'],[1,'tail_whip'],[1,'helping_hand'],[8,'sand_attack'],[16,'water_gun'],[23,'quick_attack'],[30,'bite'],[36,'aurora_beam'],[42,'haze'],[47,'acid_armor'],[52,'hydro_pump']],
    '135': [[1,'tackle'],[1,'tail_whip'],[1,'helping_hand'],[8,'sand_attack'],[16,'thunder_shock'],[23,'quick_attack'],[30,'double_kick'],[36,'pin_missile'],[42,'thunder_wave'],[47,'agility'],[52,'thunder']],
    '136': [[1,'tackle'],[1,'tail_whip'],[1,'helping_hand'],[8,'sand_attack'],[16,'ember'],[23,'quick_attack'],[30,'bite'],[36,'fire_spin'],[42,'smog'],[47,'leer'],[52,'flamethrower']],
    '137': [[1,'conversion_2'],[1,'tackle'],[1,'conversion'],[9,'agility'],[12,'psybeam'],[20,'recover'],[24,'sharpen'],[32,'lock_on'],[36,'tri_attack'],[44,'recycle'],[48,'zap_cannon']],
    '138': [[1,'constrict'],[1,'withdraw'],[13,'bite'],[19,'water_gun'],[25,'mud_shot'],[31,'leer'],[37,'protect'],[43,'tickle'],[49,'ancient_power'],[55,'hydro_pump']],
    '139': [[1,'constrict'],[1,'withdraw'],[1,'bite'],[1,'water_gun'],[13,'bite'],[19,'water_gun'],[25,'mud_shot'],[31,'leer'],[37,'protect'],[40,'spike_cannon'],[46,'tickle'],[55,'ancient_power'],[65,'hydro_pump']],
    '140': [[1,'scratch'],[1,'harden'],[13,'absorb'],[19,'leer'],[25,'mud_shot'],[31,'sand_attack'],[37,'endure'],[43,'metal_sound'],[49,'mega_drain'],[55,'ancient_power']],
    '141': [[1,'fury_cutter'],[1,'scratch'],[1,'harden'],[1,'absorb'],[1,'leer'],[13,'absorb'],[19,'leer'],[25,'mud_shot'],[31,'sand_attack'],[37,'endure'],[40,'slash'],[46,'metal_sound'],[55,'mega_drain'],[65,'ancient_power']],
    '142': [[1,'wing_attack'],[8,'agility'],[15,'bite'],[22,'supersonic'],[29,'ancient_power'],[36,'scary_face'],[43,'take_down'],[50,'hyper_beam']],
    '143': [[1,'tackle'],[5,'amnesia'],[9,'defense_curl'],[13,'belly_drum'],[17,'headbutt'],[21,'yawn'],[25,'rest'],[29,'snore'],[33,'body_slam'],[37,'sleep_talk'],[41,'block'],[45,'covet'],[49,'rollout'],[53,'hyper_beam']],
    '144': [[1,'gust'],[1,'powder_snow'],[13,'mist'],[25,'agility'],[37,'mind_reader'],[49,'ice_beam'],[61,'reflect'],[73,'blizzard'],[85,'sheer_cold']],
    '145': [[1,'peck'],[1,'thunder_shock'],[13,'thunder_wave'],[25,'agility'],[37,'detect'],[49,'drill_peck'],[61,'charge'],[73,'light_screen'],[85,'thunder']],
    '146': [[1,'wing_attack'],[1,'ember'],[13,'fire_spin'],[25,'agility'],[37,'endure'],[49,'flamethrower'],[61,'safeguard'],[73,'heat_wave'],[85,'sky_attack']],
    '147': [[1,'wrap'],[1,'leer'],[8,'thunder_wave'],[15,'twister'],[22,'dragon_rage'],[29,'slam'],[36,'agility'],[43,'safeguard'],[50,'outrage'],[57,'hyper_beam']],
    '148': [[1,'wrap'],[1,'leer'],[1,'thunder_wave'],[1,'twister'],[8,'thunder_wave'],[15,'twister'],[22,'dragon_rage'],[29,'slam'],[38,'agility'],[47,'safeguard'],[56,'outrage'],[65,'hyper_beam']],
    '149': [[1,'wrap'],[1,'leer'],[1,'thunder_wave'],[1,'twister'],[8,'thunder_wave'],[15,'twister'],[22,'dragon_rage'],[29,'slam'],[38,'agility'],[47,'safeguard'],[55,'wing_attack'],[61,'outrage'],[75,'hyper_beam']],
    '150': [[1,'confusion'],[1,'disable'],[11,'barrier'],[22,'mist'],[33,'swift'],[44,'recover'],[55,'safeguard'],[66,'psychic'],[77,'psych_up'],[88,'future_sight'],[99,'amnesia']],
    '151': [[1,'pound'],[10,'transform'],[20,'mega_punch'],[30,'metronome'],[40,'psychic'],[50,'ancient_power']]
};

const MoveManager = {
    atualizarMovimentos(pokemon) {
        if (!pokemon.moves) pokemon.moves = [null, null, null, null];
        if (!pokemon.learnedMoves) pokemon.learnedMoves = [];
        
        const learnset = Learnsets[pokemon.species.id] || [];
        
        learnset.forEach(m => {
            const lvlAprendizado = m[0];
            const moveId = m[1];

            if (pokemon.level >= lvlAprendizado && !pokemon.learnedMoves.includes(moveId)) {
                pokemon.learnedMoves.push(moveId);
                const slotLivre = pokemon.moves.indexOf(null);
                if (slotLivre !== -1) {
                    pokemon.moves[slotLivre] = moveId;
                }
            }
        });
    }
};

class PokemonInstance {
    constructor(speciesId) {
        this.species = Pokedex[speciesId];
        this.level = 5;
        this.exp = 0;
        
        this.food = 80;
        this.energy = 80;
        this.hygiene = 100;
        this.joy = 80;
        this.poops = 0; 
        this.sleep = false; 
        
        this.lastInteractionTime = Date.now();
        this.isEgg = true;
        this.hatchTime = Date.now() + 60000;
        
        this.ivs = {
            hp: Math.floor(Math.random() * 32), atk: Math.floor(Math.random() * 32),
            def: Math.floor(Math.random() * 32), spa: Math.floor(Math.random() * 32),
            spd: Math.floor(Math.random() * 32), spe: Math.floor(Math.random() * 32)
        };
        this.evs = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
        const natureKeys = Object.keys(Natures);
        this.nature = natureKeys[Math.floor(Math.random() * natureKeys.length)];

        this.moves = [null, null, null, null];
        this.learnedMoves = [];
    }

    calcularStatusReais() {
        if (this.food === undefined) { this.food = this.hunger || 80; this.energy = 80; this.hygiene = 100; this.joy = 80; this.poops = 0; this.sleep = false; }
        if (this.poops === undefined) this.poops = 0;

        const calcRaw = (statName) => {
            let base = this.species.baseStats[statName];
            let iv = this.ivs[statName];
            let ev = this.evs[statName];
            let rawStat = Math.floor((((2 * base + iv + Math.floor(ev / 4)) * this.level) / 100) + 5);
            let multiplier = 1.0;
            const natureData = Natures[this.nature];
            if (natureData.buff === statName) multiplier = 1.1;
            if (natureData.debuff === statName) multiplier = 0.9;
            return Math.floor(rawStat * multiplier);
        };

        let statsBase = {
            hp: Math.floor((((2 * this.species.baseStats.hp + this.ivs.hp + Math.floor(this.evs.hp / 4)) * this.level) / 100) + this.level + 10),
            atk: calcRaw('atk'), def: calcRaw('def'), spa: calcRaw('spa'),
            spd: calcRaw('spd'), spe: calcRaw('spe')
        };

        let joyMult = 1.0;
        if (this.joy < 10) joyMult = 0.5;      
        else if (this.joy < 20) joyMult = 0.7; 
        else if (this.joy < 40) joyMult = 0.8; 
        else if (this.joy < 50) joyMult = 0.9; 

        let output = { hp: { real: statsBase.hp, penalty: 0, final: statsBase.hp } };

        ['atk', 'def', 'spa', 'spd', 'spe'].forEach(s => {
            let penalized = Math.floor(statsBase[s] * joyMult);
            output[s] = { real: statsBase[s], penalty: statsBase[s] - penalized, final: penalized };
        });

        return output;
    }
}

class TimeManager {
    static calculateOfflineProgression(p) {
        const now = Date.now();
        const hoursPassed = (now - p.lastInteractionTime) / (1000 * 60 * 60);
        
        if (p.food === undefined) { p.food = p.hunger || 80; p.energy = 80; p.hygiene = 100; p.joy = 80; p.poops = 0; p.sleep = false;}
        if (p.poops === undefined) p.poops = 0;

        if (!p.isEgg && hoursPassed > 0) {
            p.food = Math.max(0, p.food - (hoursPassed * 12.5));
            
            if (p.food > 40 && Math.random() < (0.15 * hoursPassed)) {
                p.poops = Math.min(3, p.poops + 1);
            }
            p.hygiene = Math.max(0, p.hygiene - (hoursPassed * 5) - (p.poops * hoursPassed * 4));

            if (p.sleep && p.food > 0) {
                p.energy = Math.min(100, p.energy + (hoursPassed * 50)); 
            } else if (!p.sleep) {
                p.energy = Math.max(0, p.energy - (hoursPassed * 5)); 
            }

            let joyDrop = hoursPassed * 2;
            if (p.food <= 0) joyDrop += hoursPassed * 10; 
            else if (p.food < 30) joyDrop += hoursPassed * 5;
            if (p.hygiene < 30) joyDrop += hoursPassed * 5;
            p.joy = Math.max(0, p.joy - joyDrop);

            if (p.food > 10 && !p.sleep && p.hygiene >= 30) {
                let expMult = (p.food > 50) ? 1 : 0.5; 
                p.exp += hoursPassed * (1 / 24) * expMult;
                if (p.exp >= 1.0 && p.level < 100) {
                    const levelsGained = Math.floor(p.exp);
                    p.level += levelsGained;
                    p.exp -= levelsGained;
                    MoveManager.atualizarMovimentos(p); 
                }
            }
        }
        
        p.lastInteractionTime = now;
        return p;
    }
}
