const Pokedex = {
    1: { id: 1, name: "Bulbasaur", type: "grama", baseStats: { hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45 } },
    4: { id: 4, name: "Charmander", type: "fogo", baseStats: { hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65 } },
    7: { id: 7, name: "Squirtle", type: "agua", baseStats: { hp: 44, atk: 48, def: 65, spa: 50, spd: 64, spe: 43 } },
    152: { id: 152, name: "Chikorita", type: "grama", baseStats: { hp: 45, atk: 49, def: 65, spa: 49, spd: 65, spe: 45 } },
    155: { id: 155, name: "Cyndaquil", type: "fogo", baseStats: { hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65 } },
    158: { id: 158, name: "Totodile", type: "agua", baseStats: { hp: 50, atk: 65, def: 64, spa: 44, spd: 48, spe: 43 } },
    252: { id: 252, name: "Treecko", type: "grama", baseStats: { hp: 40, atk: 45, def: 35, spa: 65, spd: 55, spe: 70 } },
    255: { id: 255, name: "Torchic", type: "fogo", baseStats: { hp: 45, atk: 60, def: 40, spa: 70, spd: 50, spe: 45 } },
    258: { id: 258, name: "Mudkip", type: "agua", baseStats: { hp: 50, atk: 70, def: 50, spa: 50, spd: 50, spe: 40 } }
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

class PokemonInstance {
    constructor(speciesId) {
        this.species = Pokedex[speciesId];
        this.level = 5;
        this.exp = 0;
        
        // Os 4 Pilares de Status do Tamagotchi
        this.food = 80;
        this.energy = 80;
        this.hygiene = 100;
        this.joy = 80;
        this.poops = 0; // Quantidade de sujeira na tela
        this.sleep = false; // Estado de vigília
        
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
    }

    calcularStatusReais() {
        // Conversor para Saves Antigos
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

        // Atributos Puros com Genética
        let statsBase = {
            hp: Math.floor((((2 * this.species.baseStats.hp + this.ivs.hp + Math.floor(this.evs.hp / 4)) * this.level) / 100) + this.level + 10),
            atk: calcRaw('atk'), def: calcRaw('def'), spa: calcRaw('spa'),
            spd: calcRaw('spd'), spe: calcRaw('spe')
        };

        // Penalidade Matemática de Tristeza (Joy Debuff)
        let joyMult = 1.0;
        if (this.joy < 10) joyMult = 0.5;      // -50%
        else if (this.joy < 20) joyMult = 0.7; // -30%
        else if (this.joy < 40) joyMult = 0.8; // -20%
        else if (this.joy < 50) joyMult = 0.9; // -10%

        // O HP nunca sofre Debuff para não matar o mascote.
        let output = { hp: { real: statsBase.hp, penalty: 0, final: statsBase.hp } };

        ['atk', 'def', 'spa', 'spd', 'spe'].forEach(s => {
            let penalized = Math.floor(statsBase[s] * joyMult);
            output[s] = {
                real: statsBase[s],
                penalty: statsBase[s] - penalized,
                final: penalized
            };
        });

        return output;
    }
}

class TimeManager {
    static calculateOfflineProgression(p) {
        const now = Date.now();
        const hoursPassed = (now - p.lastInteractionTime) / (1000 * 60 * 60);
        
        // Conversor para Saves Antigos
        if (p.food === undefined) { p.food = p.hunger || 80; p.energy = 80; p.hygiene = 100; p.joy = 80; p.poops = 0; p.sleep = false;}
        if (p.poops === undefined) p.poops = 0;

        if (!p.isEgg && hoursPassed > 0) {
            // 1. Comida
            p.food = Math.max(0, p.food - (hoursPassed * 12.5));
            
            // 2. Sistema Orgânico de Higiene (Cocô)
            if (p.food > 40 && Math.random() < (0.15 * hoursPassed)) {
                p.poops = Math.min(3, p.poops + 1);
            }
            p.hygiene = Math.max(0, p.hygiene - (hoursPassed * 5) - (p.poops * hoursPassed * 4));

            // 3. Disposição (Energia)
            if (p.sleep && p.food > 0) {
                p.energy = Math.min(100, p.energy + (hoursPassed * 50)); // Dormindo regenera rápido
            } else if (!p.sleep) {
                p.energy = Math.max(0, p.energy - (hoursPassed * 5)); // Acordado drena passivamente
            }

            // 4. Alegria (Penalizada se os cuidados estiverem ruins)
            let joyDrop = hoursPassed * 2;
            if (p.food <= 0) joyDrop += hoursPassed * 10; // Fome 0 destrói a felicidade
            else if (p.food < 30) joyDrop += hoursPassed * 5;
            if (p.hygiene < 30) joyDrop += hoursPassed * 5;
            p.joy = Math.max(0, p.joy - joyDrop);

            // 5. Ganho de Experiência Passiva
            if (p.food > 10 && !p.sleep && p.hygiene >= 30) {
                let expMult = (p.food > 50) ? 1 : 0.5; // Comida > 50% = Nível mais rápido
                p.exp += hoursPassed * (1 / 24) * expMult;
                if (p.exp >= 1.0 && p.level < 100) {
                    const levelsGained = Math.floor(p.exp);
                    p.level += levelsGained;
                    p.exp -= levelsGained;
                }
            }
        }
        
        p.lastInteractionTime = now;
        return p;
    }
}
