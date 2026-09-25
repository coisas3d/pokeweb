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

class PokemonInstance {
    constructor(speciesId) {
        this.species = Pokedex[speciesId];
        this.level = 5;
        this.exp = 0;
        this.hunger = 100;
        this.sleep = 100;
        this.lastInteractionTime = Date.now();
        this.isEgg = true;
        this.hatchTime = Date.now() + 60000;
        
        // Genética Única (0 a 31) gerada no momento do nascimento
        this.ivs = {
            hp: Math.floor(Math.random() * 32), atk: Math.floor(Math.random() * 32),
            def: Math.floor(Math.random() * 32), spa: Math.floor(Math.random() * 32),
            spd: Math.floor(Math.random() * 32), spe: Math.floor(Math.random() * 32)
        };
        // Esforço (ganho em batalhas futuras)
        this.evs = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
    }

    // Calcula os atributos exatos baseados na fórmula da Geração 3
    calcularStatusReais() {
        // Se for um save antigo que não tinha IVs, cria genéricas para não quebrar o jogo
        if (!this.ivs) this.ivs = { hp: 15, atk: 15, def: 15, spa: 15, spd: 15, spe: 15 };
        if (!this.evs) this.evs = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };

        const calc = (base, iv, ev) => Math.floor((((2 * base + iv + Math.floor(ev / 4)) * this.level) / 100) + 5);
        
        return {
            hp: Math.floor((((2 * this.species.baseStats.hp + this.ivs.hp + Math.floor(this.evs.hp / 4)) * this.level) / 100) + this.level + 10),
            atk: calc(this.species.baseStats.atk, this.ivs.atk, this.evs.atk),
            def: calc(this.species.baseStats.def, this.ivs.def, this.evs.def),
            spa: calc(this.species.baseStats.spa, this.ivs.spa, this.evs.spa),
            spd: calc(this.species.baseStats.spd, this.ivs.spd, this.evs.spd),
            spe: calc(this.species.baseStats.spe, this.ivs.spe, this.evs.spe)
        };
    }
}

class TimeManager {
    static calculateOfflineProgression(pokemonInstance) {
        const now = Date.now();
        const hoursPassed = (now - pokemonInstance.lastInteractionTime) / (1000 * 60 * 60);
        
        if (!pokemonInstance.isEgg) {
            pokemonInstance.hunger = Math.max(0, pokemonInstance.hunger - (hoursPassed * 12.5));
            if (hoursPassed > 0 && pokemonInstance.hunger > 0) {
                pokemonInstance.exp += hoursPassed * (1 / 24);
                if (pokemonInstance.exp >= 1.0 && pokemonInstance.level < 100) {
                    const levelsGained = Math.floor(pokemonInstance.exp);
                    pokemonInstance.level += levelsGained;
                    pokemonInstance.exp -= levelsGained;
                }
            }
        }
        
        pokemonInstance.lastInteractionTime = now;
        return pokemonInstance;
    }
}
