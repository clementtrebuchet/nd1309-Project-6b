```bash
[clementtrebuchet@clemozore test]$ truffle migrate --network development --reset

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x09dac07abd9e6a8df64aa950a7da1ab8ed6a15829f7d9a3c3389d369142023ed
   > Blocks: 0            Seconds: 0
   > contract address:    0xe01B61eb4e423f40072eDF714723D3ED55f143c8
   > block number:        1038
   > block timestamp:     1635690515
   > account:             0xc70d8398eE3860E17dBb5Afd4435B83660C0Af98
   > balance:             108.13509231
   > gas used:            197314 (0x302c2)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00197314 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00197314 ETH


2_deploy_contracts.js
=====================

   Replacing 'FarmerRole'
   ----------------------
   > transaction hash:    0x33149a6d96249ab5c9f8c5f04183160fa1590bac59876691e9052babbbc5c1ba
   > Blocks: 0            Seconds: 0
   > contract address:    0xb4cC9b35d6C9a1F825eA393C60448a69708f4490
   > block number:        1040
   > block timestamp:     1635690517
   > account:             0xc70d8398eE3860E17dBb5Afd4435B83660C0Af98
   > balance:             108.13136446
   > gas used:            330483 (0x50af3)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00330483 ETH


   Replacing 'DistributorRole'
   ---------------------------
   > transaction hash:    0x360e891f9976e1d887ab09b542133eef388eaad77b6b13a1f7282c3b887c1abc
   > Blocks: 0            Seconds: 0
   > contract address:    0x47e57cE26aEE88a0F903e2f7Fc79990507D48B79
   > block number:        1041
   > block timestamp:     1635690517
   > account:             0xc70d8398eE3860E17dBb5Afd4435B83660C0Af98
   > balance:             108.12805963
   > gas used:            330483 (0x50af3)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00330483 ETH


   Replacing 'RetailerRole'
   ------------------------
   > transaction hash:    0xbdbb1b23bd9aae8c2bb77d6d8b4a69902feb87a9113218aa17516060a4a4a3c8
   > Blocks: 0            Seconds: 0
   > contract address:    0x5Cfcf2683d0bC9fB35b18F1192eB6BB334aa2517
   > block number:        1042
   > block timestamp:     1635690518
   > account:             0xc70d8398eE3860E17dBb5Afd4435B83660C0Af98
   > balance:             108.1247548
   > gas used:            330483 (0x50af3)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00330483 ETH


   Replacing 'ConsumerRole'
   ------------------------
   > transaction hash:    0x0ada29748931f8d25345f00719dc6fc6453c9aebe7dae3ea59405713c68f329c
   > Blocks: 0            Seconds: 0
   > contract address:    0x697434a511C644A51ACf980B8f1314BdBC3c1407
   > block number:        1043
   > block timestamp:     1635690519
   > account:             0xc70d8398eE3860E17dBb5Afd4435B83660C0Af98
   > balance:             108.12144997
   > gas used:            330483 (0x50af3)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00330483 ETH


   Replacing 'SupplyChain'
   -----------------------
   > transaction hash:    0xaa02322adfae8a8bf87263c675ce63cea5f4e5247f1aa80df7ee8824c3bfd482
   > Blocks: 0            Seconds: 0
   > contract address:    0x92e100347cf9C47c588AC6C3d77EecD564357170
   > block number:        1044
   > block timestamp:     1635690520
   > account:             0xc70d8398eE3860E17dBb5Afd4435B83660C0Af98
   > balance:             108.09965986
   > gas used:            2179011 (0x213fc3)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.02179011 ETH


   Replacing 'Roles'
   -----------------
   > transaction hash:    0x26c1cf92f7f9ab24822cbde548a62da6474c10eeed5b10ffe9eefefe52a394c3
   > Blocks: 0            Seconds: 0
   > contract address:    0x96b700bC43cfc282CD087D82d1AC78EF6D4188E3
   > block number:        1045
   > block timestamp:     1635690520
   > account:             0xc70d8398eE3860E17dBb5Afd4435B83660C0Af98
   > balance:             108.09893769
   > gas used:            72217 (0x11a19)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00072217 ETH


   Replacing 'Ownable'
   -------------------
   > transaction hash:    0xdaa175392b4d05f083e686d26bd2fd21e79736ebfee83fbdc931e0e8bdbb1354
   > Blocks: 0            Seconds: 0
   > contract address:    0x68bd97B7b70Ec3435368FD9b87B31C1Afc6dAa0e
   > block number:        1046
   > block timestamp:     1635690521
   > account:             0xc70d8398eE3860E17dBb5Afd4435B83660C0Af98
   > balance:             108.09559559
   > gas used:            334210 (0x51982)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0033421 ETH


   Replacing 'Context'
   -------------------
   > transaction hash:    0x15ab29dd1f7d87ed4fc7487fcd28e1791e39b28d5f617217a252a77b8105de83
   > Blocks: 0            Seconds: 0
   > contract address:    0x065A86372d2EEFde451c3ac9e6edfD205D2C183d
   > block number:        1047
   > block timestamp:     1635690521
   > account:             0xc70d8398eE3860E17dBb5Afd4435B83660C0Af98
   > balance:             108.09492493
   > gas used:            67066 (0x105fa)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00067066 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.03974436 ETH


Summary
=======
> Total deployments:   9
> Final cost:          0.0417175 ETH


```