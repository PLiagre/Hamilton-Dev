const hre = require("hardhat");

async function main() {

    // récuperation du contrat
    const Sstorage = await ethers.getContractFactory('Storage');

    // connexion au contrat déployé
    const storage = Sstorage.attach("0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9");

  let number = await storage.retrieve()
  console.log('Default number : ' + number.toString())

  await storage.store(80)

  number = await storage.retrieve()
  console.log('Updated number : ' + number.toString())


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});