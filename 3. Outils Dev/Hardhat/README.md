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