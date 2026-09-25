const DB_NAME = "PokeWebDB";
const DB_VERSION = 1;
const STORE_NAME = "saveData";

function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                // 'id' será a chave de busca (ex: 'slot_ativo', 'pc_box')
                db.createObjectStore(STORE_NAME, { keyPath: "id" }); 
            }
        };

        request.onsuccess = (event) => resolve(event.target.result);
        request.onerror = (event) => reject("Erro BD: " + event.target.errorCode);
    });
}

async function saveGame(pokemonInstance) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], "readwrite");
        const store = transaction.objectStore(STORE_NAME);
        
        // Salvamos o mascote atual no slot principal
        const request = store.put({ id: 'active_slot', data: pokemonInstance });

        request.onsuccess = () => resolve(true);
        request.onerror = (e) => reject(e.target.errorCode);
    });
}

async function loadGame() {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], "readonly");
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get('active_slot');

        request.onsuccess = (event) => {
            if (event.target.result) resolve(event.target.result.data);
            else resolve(null); // Retorna nulo se for o primeiro acesso
        };
        request.onerror = (e) => reject(e.target.errorCode);
    });
}
