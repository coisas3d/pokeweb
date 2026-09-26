import os
import requests
import time

# URL base do repositório oficial do PMDCollab
BASE_URL = "https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/sprite/"

# Arquivos essenciais que precisamos para o nosso TamaPoke funcionar perfeitamente
FILES_TO_DOWNLOAD = [
    "AnimData.xml",
    "Idle-Anim.png",
    "Walk-Anim.png",
    "Sleep-Anim.png",
    "Eat-Anim.png",
    "Hurt-Anim.png",
    "Strike-Anim.png",
    "Attack-Anim.png"
]

def main():
    print("Iniciando o download dos 151 Pokémon de Kanto...")
    
    # Cria a pasta raiz 'sprites' se não existir
    if not os.path.exists("sprites"):
        os.makedirs("sprites")

    # Loop de 1 até 151 (Bulbasaur até Mew)
    for i in range(1, 152):
        poke_id = f"{i:04d}" # Formata para 4 dígitos (ex: 1 vira '0001')
        local_dir = f"sprites/{poke_id}"
        
        # Cria a pasta local para o Pokémon específico
        os.makedirs(local_dir, exist_ok=True)
        
        print(f"\nBaixando dados do Pokémon ID: {poke_id}...")
        
        for filename in FILES_TO_DOWNLOAD:
            remote_url = f"{BASE_URL}{poke_id}/0000/0000/{filename}"
            local_path = os.path.join(local_dir, filename)

            # Se o arquivo já foi baixado antes, ele pula (bom para caso a internet caia)
            if os.path.exists(local_path):
                continue

            try:
                response = requests.get(remote_url, timeout=10)
                
                # Só salva se o arquivo existir no servidor deles (Código 200)
                if response.status_code == 200:
                    with open(local_path, "wb") as f:
                        f.write(response.content)
                    print(f"  [OK] {filename}")
                else:
                    # Alguns Pokémon não tem animação de Attack, usam apenas Strike, etc.
                    print(f"  [--] Ignorado (Não existe): {filename}")
            except Exception as e:
                print(f"  [ERRO] Falha ao baixar {filename}: {e}")

        # Uma pausa minúscula de meio segundo entre cada Pokémon para não sermos bloqueados pelo GitHub
        time.sleep(0.5) 

    print("\nDownload concluído com sucesso! Pasta 'sprites' pronta para uso.")

if __name__ == "__main__":
    main()
