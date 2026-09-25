// Banco de Dados Base (Expandido para Kanto, Johto e Hoenn)
const Pokedex = {
    1: { id: 1, name: "Bulbasaur", type: "grass", baseStats: { hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45 } },
    4: { id: 4, name: "Charmander", type: "fire", baseStats: { hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65 } },
    7: { id: 7, name: "Squirtle", type: "water", baseStats: { hp: 44, atk: 48, def: 65, spa: 50, spd: 64, spe: 43 } },
    152: { id: 152, name: "Chikorita", type: "grass", baseStats: { hp: 45, atk: 49, def: 65, spa: 49, spd: 65, spe: 45 } },
    155: { id: 155, name: "Cyndaquil", type: "fire", baseStats: { hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65 } },
    158: { id: 158, name: "Totodile", type: "water", baseStats: { hp: 50, atk: 65, def: 64, spa: 44, spd: 48, spe: 43 } },
    252: { id: 252, name: "Treecko", type: "grass", baseStats: { hp: 40, atk: 45, def: 35, spa: 65, spd: 55, spe: 70 } },
    255: { id: 255, name: "Torchic", type: "fire", baseStats: { hp: 45, atk: 60, def: 40, spa: 70, spd: 50, spe: 45 } },
    258: { id: 258, name: "Mudkip", type: "water", baseStats: { hp: 50, atk: 70, def: 50, spa: 50, spd: 50, spe: 40 } }
};

class PokemonInstance {
    constructor(speciesId) {
        this.species = Pokedex[speciesId];
        this.level = 5;
        this.exp = 0;
        this.hunger = 100;
        this.sleep = 100;
        this.lastInteractionTime = Date.now();
        
        // Mecânica do Ovo solicitada
        this.isEgg = true;
        this.hatchTime = Date.now() + 60000; // Eclode 60.000 ms (1 minuto) após a criação
    }
}

class TimeManager {
    static calculateOfflineProgression(pokemonInstance) {
        const now = Date.now();
        const hoursPassed = (now - pokemonInstance.lastInteractionTime) / (1000 * 60 * 60);
        
        // Se ainda for um ovo, não perde fome nem ganha níveis
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
