# Notes pour hardhat: 

## Methodes importantes hardhat : 
install : npm install --save-dev hardhat  
initialisation: npx hardhat init (puis enter tout le temps)  
lancement de blockchain locale de dev : npx hardhat node  
déploiement de contrat :   
methode ignition : npx hardhat ignition deploy ./ignition/modules/NOM.js --network localhost  
methode script : npx hardhat run ./script/NOM.js --network localhost  
(le network localhost n'est pas configurer, mais il faut le nommer pour avoir un state qu'on peut utiliser)  


## Pour passer en publique (testnet ou mainnet)
- on telecharge dotenv :   
npm install dotenv
- On va récuperer une api key sur un service provider (Infura, alchemy, ankr...)
- On créé un fichier ".env" qui permet de mettre ses identifiants  
Ex : RPC_URL = http... (sans ponctuation)
- on vérifie que le fichier .gitignore comporte bien le .env (et les node_modules)
- on configure hardhat dans le hardhat.config.js avec un network publique
- on déploie de manière classique, en précisant --network networkchoisi

## Utiliser la console
npx hardhat console --network X  
une fois dessus plusieurs fonctions ont été vues
- se connecter a un contrat :  
const contract = await ethers.getContractAt("NomContrat", AddressContrat);  
- interagir sur un contrat :  
await contract.NomFunction();  
- Si vous etes en localnode, cela utilisera le premier signer dont vous avez une private key
- Recuperer la balance d'une address  
await ethers.provider.getBalance(Address)

## Forker 
Pour interagir sur un réseau existant (testnet ou mainnet)  
On peut reproduire les conditions du reel grace aux requetes RPC  
Ainsi, en modifiant notre hardhat config tel que dans le fichier ici, et en lançant  
npx hardhat node --network hardhat  
vous pourrez interagir sur le réseau choisi
Voir les slides du 17/10 pour des exercices à ce sujet