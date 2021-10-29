```bash
[clementtrebuchet@clemozore project-6]$ truffle migrate --network development

Compiling your contracts...
===========================
> Compiling ./contracts/Migrations.sol
> Compiling ./contracts/coffeeaccesscontrol/ConsumerRole.sol
> Compiling ./contracts/coffeeaccesscontrol/DistributorRole.sol
> Compiling ./contracts/coffeeaccesscontrol/FarmerRole.sol
> Compiling ./contracts/coffeeaccesscontrol/RetailerRole.sol
> Compiling ./contracts/coffeeaccesscontrol/Roles.sol
> Compiling ./contracts/coffeebase/SupplyChain.sol
> Compiling ./contracts/coffeecore/Ownable.sol
> Artifacts written to /home/clementtrebuchet/Documents/PROJECTS/udacity/nd1309-Project-6b-Example-Template/project-6/build/contracts
> Compiled successfully using:
   - solc: 0.8.7+commit.e28d00a7.Emscripten.clang



Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x3c07bd3b7e0fb4716bcfec43983e7f8d0e0bec7b31ef6b765d1eaebe861ff6dd
   > Blocks: 0            Seconds: 0
   > contract address:    0xB2C55E603a46a4494bF238278D797EdD0F783988
   > block number:        432
   > block timestamp:     1635522563
   > account:             0xe01b804010E22A4CF900ad29C3b6c16Fa3D30f8B
   > balance:             98.21801468
   > gas used:            197314 (0x302c2)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00394628 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00394628 ETH


2_deploy_contracts.js
=====================

   Deploying 'FarmerRole'
   ----------------------
   > transaction hash:    0x62839d256e867d0c10f480999897981530b1ea2a4695a0f52e178c8ca0072cbe
   > Blocks: 0            Seconds: 0
   > contract address:    0xfF8efCeAd46317aeaCfA70B86e3B88E4af0664fe
   > block number:        434
   > block timestamp:     1635522564
   > account:             0xe01b804010E22A4CF900ad29C3b6c16Fa3D30f8B
   > balance:             98.2120818
   > gas used:            254342 (0x3e186)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00508684 ETH


   Deploying 'DistributorRole'
   ---------------------------
   > transaction hash:    0x877d9f4d8eb5317824aa979b4a428c13fdb55d6c6311740a62f70d3d256775e6
   > Blocks: 0            Seconds: 0
   > contract address:    0x022477Af00A33664707BE4B2C08d7c114Be4e907
   > block number:        435
   > block timestamp:     1635522564
   > account:             0xe01b804010E22A4CF900ad29C3b6c16Fa3D30f8B
   > balance:             98.20699496
   > gas used:            254342 (0x3e186)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00508684 ETH


   Deploying 'RetailerRole'
   ------------------------
   > transaction hash:    0xba0f31e6777efaea093bf3e8d4f242529200ee122f7e76634ba583a39f6d8338
   > Blocks: 0            Seconds: 0
   > contract address:    0x4f8FE7Cf5Db3891Cf52183757c941041fC543c85
   > block number:        436
   > block timestamp:     1635522564
   > account:             0xe01b804010E22A4CF900ad29C3b6c16Fa3D30f8B
   > balance:             98.20190812
   > gas used:            254342 (0x3e186)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00508684 ETH


   Deploying 'ConsumerRole'
   ------------------------
   > transaction hash:    0x04fd22e5ae021f7fe54ce1dfe1318c4bb8007d8d2a22be637f3c44a08c79de4a
   > Blocks: 0            Seconds: 0
   > contract address:    0xad54BfE55D8A9D9aca500bA2845CE759E438b484
   > block number:        437
   > block timestamp:     1635522565
   > account:             0xe01b804010E22A4CF900ad29C3b6c16Fa3D30f8B
   > balance:             98.19682128
   > gas used:            254342 (0x3e186)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00508684 ETH


   Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0x4c3cc2a20f5922332604a0f1fecd2e7dc61419ced69991b63aa6b005fffbf4bb
   > Blocks: 0            Seconds: 0
   > contract address:    0x0853Cc7Bcd93B449a506Eb53E49E0d30cC54FC34
   > block number:        438
   > block timestamp:     1635522565
   > account:             0xe01b804010E22A4CF900ad29C3b6c16Fa3D30f8B
   > balance:             98.15761256
   > gas used:            1960436 (0x1de9f4)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.03920872 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.05955608 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.06350236 ETH


[clementtrebuchet@clemozore project-6]$ 


```