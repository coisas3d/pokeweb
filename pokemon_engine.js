// 1. BANCO DE DADOS DA ESPÉCIE (Imutável)
// Todos os 151 usarão essa estrutura da Gen 3.
const Pokedex = {
    1: {
        id: 1,
        name: "Bulbasaur",
        baseStats: { hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45 },
        types: ["Grass", "Poison"],
        expYield: 64, // Base para cálculo de experiência ao ser derrotado
        growthRate: "Medium Slow",
        evolution: { targetId: 2, level: 16 }
    },
    4: {
        id: 4,
        name: "Charmander",
        baseStats: { hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65 },
        types: ["Fire"],
        expYield: 62,
        growthRate: "Medium Slow",
        evolution: { targetId: 5, level: 16 }
    }
    // O restante dos 151 será mapeado seguindo estritamente este padrão.
};

// 2. O INDIVÍDUO (O mascote salvo no celular do cliente)
class PokemonInstance {
    constructor(speciesId) {
        this.species = Pokedex[speciesId];
        this.level = 5; // Nível inicial padrão
        this.exp = 0;
        
        // Genética (IVs - Individual Values) - Aleatório de 0 a 31 (Regra Gen 3)
        this.ivs = {
            hp: Math.floor(Math.random() * 32),
            atk: Math.floor(Math.random() * 32),
            def: Math.floor(Math.random() * 32),
            spa: Math.floor(Math.random() * 32),
            spd: Math.floor(Math.random() * 32),
            spe: Math.floor(Math.random() * 32)
        };

        // Treinamento (EVs - Effort Values) - Começam em 0 (Regra Gen 3)
        this.evs = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };

        // Status de Sobrevivência (Mecânica exclusiva do TamaPoke)
        this.hunger = 100; // 0 = faminto, 100 = cheio
        this.sleep = 100;  // 0 = exausto, 100 = descansado
        
        // Timestamp para o relógio interno (calcula a passagem do tempo offline)
        this.lastInteractionTime = Date.now();
    }

    // Função vital: Calcula os stats reais baseados na matemática oficial da Gen 3
    calculateCurrentStats() {
        const calculateStat = (base, iv, ev) => {
            return Math.floor((((2 * base + iv + Math.floor(ev / 4)) * this.level) / 100) + 5);
        };

        return {
            hp: Math.floor((((2 * this.species.baseStats.hp + this.ivs.hp + Math.floor(this.evs.hp / 4)) * this.level) / 100) + this.level + 10),
            atk: calculateStat(this.species.baseStats.atk, this.ivs.atk, this.evs.atk),
            def: calculateStat(this.species.baseStats.def, this.ivs.def, this.evs.def),
            spa: calculateStat(this.species.baseStats.spa, this.ivs.spa, this.evs.spa),
            spd: calculateStat(this.species.baseStats.spd, this.ivs.spd, this.evs.spd),
            spe: calculateStat(this.species.baseStats.spe, this.ivs.spe, this.evs.spe)
        };
    }
}
