[clementtrebuchet@clemozore test]$ truffle test  TestSupplychain.js 
Compiling ./contracts/Migrations.sol...
Compiling ./contracts/coffeeaccesscontrol/ConsumerRole.sol...
Compiling ./contracts/coffeeaccesscontrol/DistributorRole.sol...
Compiling ./contracts/coffeeaccesscontrol/FarmerRole.sol...
Compiling ./contracts/coffeeaccesscontrol/RetailerRole.sol...
Compiling ./contracts/coffeeaccesscontrol/Roles.sol...
Compiling ./contracts/coffeebase/SupplyChain.sol...
Compiling ./contracts/coffeecore/Ownable.sol...
ganache-cli accounts used here...
Contract Owner: accounts[0]  0x0a4af0193e9a197cbdbfb2d70a1343387c0ca799
Farmer: accounts[1]  0x03d6bbbb7eaca5f71bbc07933c1df7f924f612d7
Distributor: accounts[2]  0xb6ba1809e34f88445971af256809a97799a32f9f
Retailer: accounts[3]  0x4da7f4f0b9a9190766a4584f2dfe0fc1e3823c82
Consumer: accounts[4]  0xc405fa2953072317ea9493df3f4fd5d628508e0a


  Contract: SupplyChain
    ✓ Testing smart contract function harvestItem() that allows a farmer to harvest coffee (397ms)
    ✓ Testing smart contract function processItem() that allows a farmer to process coffee (193ms)
    ✓ Testing smart contract function packItem() that allows a farmer to pack coffee (185ms)
    ✓ Testing smart contract function sellItem() that allows a farmer to sell coffee (194ms)
    ✓ Testing smart contract function buyItem() that allows a distributor to buy coffee (326ms)
    ✓ Testing smart contract function shipItem() that allows a distributor to ship coffee (163ms)
    ✓ Testing smart contract function receiveItem() that allows a retailer to mark coffee received (295ms)
    ✓ Testing smart contract function purchaseItem() that allows a consumer to purchase coffee (343ms)
    ✓ Testing smart contract function fetchItemBufferOne() that allows anyone to fetch item details from blockchain
    ✓ Testing smart contract function fetchItemBufferTwo() that allows anyone to fetch item details from blockchain


  10 passing (2s)
