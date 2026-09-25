
// Banco de Dados Base
const Pokedex = {
    1: { id: 1, name: "Bulbasaur", baseStats: { hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45 }, types: ["Grass", "Poison"], expYield: 64, evolution: { targetId: 2, level: 16 } },
    4: { id: 4, name: "Charmander", baseStats: { hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65 }, types: ["Fire"], expYield: 62, evolution: { targetId: 5, level: 16 } },
    7: { id: 7, name: "Squirtle", baseStats: { hp: 44, atk: 48, def: 65, spa: 50, spd: 64, spe: 43 }, types: ["Water"], expYield: 63, evolution: { targetId: 8, level: 16 } }
};

// Construtor do Monstrinho
class PokemonInstance {
    constructor(speciesId) {
        this.species = Pokedex[speciesId];
        this.level = 5;
        this.exp = 0;
        this.ivs = { hp: Math.floor(Math.random() * 32), atk: Math.floor(Math.random() * 32), def: Math.floor(Math.random() * 32), spa: Math.floor(Math.random() * 32), spd: Math.floor(Math.random() * 32), spe: Math.floor(Math.random() * 32) };
        this.evs = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
        this.hunger = 100;
        this.sleep = 100;
        this.lastInteractionTime = Date.now();
    }
}

// Motor de Experiência
class ExperienceEngine {
    constructor() {
        this.battlesRequiredForLevel = { 1: 4, 21: 8, 51: 15, 81: 25 };
    }
    getBattlesNeeded(currentLevel) {
        let required = 4;
        for (const [levelThreshold, battles] of Object.entries(this.battlesRequiredForLevel)) {
            if (currentLevel >= parseInt(levelThreshold)) required = battles;
        }
        return required;
    }
}

// Motor de Tempo
class TimeManager {
    static calculateOfflineProgression(pokemonInstance) {
        const now = Date.now();
        const hoursPassed = (now - pokemonInstance.lastInteractionTime) / (1000 * 60 * 60);
        pokemonInstance.hunger = Math.max(0, pokemonInstance.hunger - (hoursPassed * 12.5));
        
        if (hoursPassed > 0 && pokemonInstance.hunger > 0) {
            pokemonInstance.exp += hoursPassed * (1 / 24);
            if (pokemonInstance.exp >= 1.0 && pokemonInstance.level < 100) {
                const levelsGained = Math.floor(pokemonInstance.exp);
                pokemonInstance.level += levelsGained;
                pokemonInstance.exp -= levelsGained;
            }
        }
        pokemonInstance.lastInteractionTime = now;
        return pokemonInstance;
    }
}
