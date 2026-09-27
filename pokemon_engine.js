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
    122:{id:122,name:"Mr. Mime",type:"psiquico",baseStats:{hp:40,atk:45,def:65,spa:100,spd:120,spe:90}},
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
    'tackle': { name: 'Tackle', type: 'normal', pwr: 40, acc: 100 },
    'growl': { name: 'Growl', type: 'normal', pwr: 0, acc: 100 },
    'scratch': { name: 'Scratch', type: 'normal', pwr: 40, acc: 100 },
    'pound': { name: 'Pound', type: 'normal', pwr: 40, acc: 100 },
    'tail_whip': { name: 'Tail Whip', type: 'normal', pwr: 0, acc: 100 },
    'peck': { name: 'Peck', type: 'voador', pwr: 35, acc: 100 },
    'gust': { name: 'Gust', type: 'voador', pwr: 40, acc: 100 },
    'vine_whip': { name: 'Vine Whip', type: 'grama', pwr: 45, acc: 100 },
    'leech_seed': { name: 'Leech Seed', type: 'grama', pwr: 0, acc: 90 },
    'razor_leaf': { name: 'Razor Leaf', type: 'grama', pwr: 55, acc: 95 },
    'solar_beam': { name: 'Solar Beam', type: 'grama', pwr: 120, acc: 100 },
    'ember': { name: 'Ember', type: 'fogo', pwr: 40, acc: 100 },
    'flamethrower': { name: 'Flamethrower', type: 'fogo', pwr: 90, acc: 100 },
    'fire_blast': { name: 'Fire Blast', type: 'fogo', pwr: 110, acc: 85 },
    'bubble': { name: 'Bubble', type: 'agua', pwr: 40, acc: 100 },
    'water_gun': { name: 'Water Gun', type: 'agua', pwr: 40, acc: 100 },
    'surf': { name: 'Surf', type: 'agua', pwr: 90, acc: 100 },
    'hydro_pump': { name: 'Hydro Pump', type: 'agua', pwr: 110, acc: 80 },
    'thundershock': { name: 'Thundershock', type: 'eletrico', pwr: 40, acc: 100 },
    'thunderbolt': { name: 'Thunderbolt', type: 'eletrico', pwr: 90, acc: 100 },
    'thunder': { name: 'Thunder', type: 'eletrico', pwr: 110, acc: 70 },
    'confusion': { name: 'Confusion', type: 'psiquico', pwr: 50, acc: 100 },
    'psychic': { name: 'Psychic', type: 'psiquico', pwr: 90, acc: 100 },
    'rock_throw': { name: 'Rock Throw', type: 'pedra', pwr: 50, acc: 90 },
    'rock_slide': { name: 'Rock Slide', type: 'pedra', pwr: 75, acc: 90 },
    'magnitude': { name: 'Magnitude', type: 'terra', pwr: 70, acc: 100 },
    'earthquake': { name: 'Earthquake', type: 'terra', pwr: 100, acc: 100 },
    'karate_chop': { name: 'Karate Chop', type: 'lutador', pwr: 50, acc: 100 },
    'cross_chop': { name: 'Cross Chop', type: 'lutador', pwr: 100, acc: 80 },
    'poison_sting': { name: 'Poison Sting', type: 'veneno', pwr: 15, acc: 100 },
    'sludge_bomb': { name: 'Sludge Bomb', type: 'veneno', pwr: 90, acc: 100 },
    'ice_beam': { name: 'Ice Beam', type: 'gelo', pwr: 90, acc: 100 },
    'blizzard': { name: 'Blizzard', type: 'gelo', pwr: 110, acc: 70 },
    'bite': { name: 'Bite', type: 'sombrio', pwr: 60, acc: 100 },
    'crunch': { name: 'Crunch', type: 'sombrio', pwr: 80, acc: 100 },
    'lick': { name: 'Lick', type: 'fantasma', pwr: 30, acc: 100 },
    'shadow_ball': { name: 'Shadow Ball', type: 'fantasma', pwr: 80, acc: 100 },
    'dragon_rage': { name: 'Dragon Rage', type: 'dragao', pwr: 0, acc: 100 },
    'outrage': { name: 'Outrage', type: 'dragao', pwr: 120, acc: 100 },
    'metal_claw': { name: 'Metal Claw', type: 'aco', pwr: 50, acc: 95 },
    'iron_tail': { name: 'Iron Tail', type: 'aco', pwr: 100, acc: 75 },
    'twister': { name: 'Twister', type: 'dragao', pwr: 40, acc: 100 },
    'string_shot': { name: 'String Shot', type: 'inseto', pwr: 0, acc: 95 },
    'bug_bite': { name: 'Bug Bite', type: 'inseto', pwr: 60, acc: 100 },
    'megahorn': { name: 'Megahorn', type: 'inseto', pwr: 120, acc: 85 },
    'body_slam': { name: 'Body Slam', type: 'normal', pwr: 85, acc: 100 },
    'hyper_beam': { name: 'Hyper Beam', type: 'normal', pwr: 150, acc: 90 },
    'sing': { name: 'Sing', type: 'normal', pwr: 0, acc: 55 },
    'sleep_powder': { name: 'Sleep Powder', type: 'grama', pwr: 0, acc: 75 },
    'poison_powder': { name: 'Poison Powder', type: 'veneno', pwr: 0, acc: 75 }
};

const l_normal = [{lvl:1,id:'tackle'},{lvl:5,id:'tail_whip'},{lvl:15,id:'body_slam'},{lvl:40,id:'hyper_beam'}];
const l_fire = [{lvl:1,id:'scratch'},{lvl:7,id:'ember'},{lvl:20,id:'bite'},{lvl:30,id:'flamethrower'},{lvl:45,id:'fire_blast'}];
const l_water = [{lvl:1,id:'tackle'},{lvl:7,id:'bubble'},{lvl:15,id:'water_gun'},{lvl:30,id:'surf'},{lvl:45,id:'hydro_pump'}];
const l_grass = [{lvl:1,id:'tackle'},{lvl:7,id:'leech_seed'},{lvl:13,id:'vine_whip'},{lvl:25,id:'razor_leaf'},{lvl:45,id:'solar_beam'}];
const l_bug = [{lvl:1,id:'tackle'},{lvl:5,id:'string_shot'},{lvl:15,id:'bug_bite'},{lvl:30,id:'megahorn'}];
const l_electric = [{lvl:1,id:'tackle'},{lvl:7,id:'thundershock'},{lvl:20,id:'bite'},{lvl:30,id:'thunderbolt'},{lvl:45,id:'thunder'}];
const l_psychic = [{lvl:1,id:'confusion'},{lvl:15,id:'body_slam'},{lvl:30,id:'psychic'},{lvl:50,id:'hyper_beam'}];
const l_rock = [{lvl:1,id:'tackle'},{lvl:10,id:'rock_throw'},{lvl:25,id:'magnitude'},{lvl:35,id:'rock_slide'},{lvl:50,id:'earthquake'}];
const l_poison = [{lvl:1,id:'poison_sting'},{lvl:10,id:'bite'},{lvl:20,id:'poison_powder'},{lvl:35,id:'sludge_bomb'}];
const l_fight = [{lvl:1,id:'scratch'},{lvl:10,id:'karate_chop'},{lvl:25,id:'body_slam'},{lvl:40,id:'cross_chop'}];
const l_ghost = [{lvl:1,id:'lick'},{lvl:15,id:'confusion'},{lvl:30,id:'shadow_ball'},{lvl:45,id:'psychic'}];
const l_dragon = [{lvl:1,id:'twister'},{lvl:15,id:'dragon_rage'},{lvl:30,id:'body_slam'},{lvl:50,id:'outrage'}];
const l_ice = [{lvl:1,id:'pound'},{lvl:10,id:'water_gun'},{lvl:25,id:'ice_beam'},{lvl:45,id:'blizzard'}];

const Learnsets = {
    '1': l_grass, '2': l_grass, '3': l_grass, '4': l_fire, '5': l_fire, '6': l_fire, '7': l_water, '8': l_water, '9': l_water,
    '10': l_bug, '11': l_bug, '12': l_bug, '13': l_bug, '14': l_bug, '15': l_bug, '16': [{lvl:1,id:'peck'},{lvl:10,id:'gust'},{lvl:25,id:'twister'}], '17': [{lvl:1,id:'peck'},{lvl:10,id:'gust'}], '18': [{lvl:1,id:'peck'},{lvl:10,id:'gust'}],
    '19': l_normal, '20': l_normal, '21': [{lvl:1,id:'peck'}], '22': [{lvl:1,id:'peck'}], '23': l_poison, '24': l_poison,
    '25': l_electric, '26': l_electric, '27': l_rock, '28': l_rock, '29': l_poison, '30': l_poison, '31': l_poison, '32': l_poison, '33': l_poison, '34': l_poison,
    '35': l_normal, '36': l_normal, '37': l_fire, '38': l_fire, '39': [{lvl:1,id:'sing'},{lvl:10,id:'pound'},{lvl:25,id:'body_slam'}], '40': [{lvl:1,id:'sing'}],
    '41': l_poison, '42': l_poison, '43': l_grass, '44': l_grass, '45': l_grass, '46': l_bug, '47': l_bug, '48': l_bug, '49': l_bug,
    '50': l_rock, '51': l_rock, '52': l_normal, '53': l_normal, '54': l_water, '55': l_water, '56': l_fight, '57': l_fight, '58': l_fire, '59': l_fire,
    '60': l_water, '61': l_water, '62': l_water, '63': l_psychic, '64': l_psychic, '65': l_psychic, '66': l_fight, '67': l_fight, '68': l_fight,
    '69': l_grass, '70': l_grass, '71': l_grass, '72': l_water, '73': l_water, '74': l_rock, '75': l_rock, '76': l_rock, '77': l_fire, '78': l_fire,
    '79': l_water, '80': l_water, '81': l_electric, '82': l_electric, '83': l_normal, '84': l_normal, '85': l_normal, '86': l_ice, '87': l_ice,
    '88': l_poison, '89': l_poison, '90': l_ice, '91': l_ice, '92': l_ghost, '93': l_ghost, '94': l_ghost, '95': l_rock, '96': l_psychic, '97': l_psychic,
    '98': l_water, '99': l_water, '100': l_electric, '101': l_electric, '102': l_grass, '103': l_grass, '104': l_rock, '105': l_rock,
    '106': l_fight, '107': l_fight, '108': l_normal, '109': l_poison, '110': l_poison, '111': l_rock, '112': l_rock, '113': l_normal,
    '114': l_grass, '115': l_normal, '116': l_water, '117': l_water, '118': l_water, '119': l_water, '120': l_water, '121': l_water,
    '122': l_psychic, '123': l_bug, '124': l_ice, '125': l_electric, '126': l_fire, '127': l_bug, '128': l_normal, '129': [{lvl:1,id:'tackle'},{lvl:15,id:'body_slam'}],
    '130': l_water, '131': l_ice, '132': l_normal, '133': l_normal, '134': l_water, '135': l_electric, '136': l_fire, '137': l_normal,
    '138': l_rock, '139': l_rock, '140': l_rock, '141': l_rock, '142': l_rock, '143': l_normal, '144': l_ice, '145': l_electric,
    '146': l_fire, '147': l_dragon, '148': l_dragon, '149': l_dragon, '150': l_psychic, '151': l_psychic
};
const MoveManager = {
    atualizarMovimentos(pokemon) {
        if (!pokemon.moves) pokemon.moves = [null, null, null, null];
        if (!pokemon.learnedMoves) pokemon.learnedMoves = [];
        
        const learnset = Learnsets[pokemon.species.id] || [];
        
        learnset.forEach(m => {
            if (pokemon.level >= m.lvl && !pokemon.learnedMoves.includes(m.id)) {
                pokemon.learnedMoves.push(m.id);
                const slotLivre = pokemon.moves.indexOf(null);
                if (slotLivre !== -1) {
                    pokemon.moves[slotLivre] = m.id;
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
