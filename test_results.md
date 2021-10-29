```bash
[clementtrebuchet@clemozore test]$ truffle test
Using network 'development'.


Compiling your contracts...
===========================
> Compiling ./contracts/coffeebase/SupplyChain.sol
> Artifacts written to /tmp/test--1760667-tt4G676B2bmx
> Compiled successfully using:
   - solc: 0.8.7+commit.e28d00a7.Emscripten.clang
ganache-cli accounts used here...
Contract Owner: accounts[0]  0xe01b804010E22A4CF900ad29C3b6c16Fa3D30f8B
Farmer: accounts[1]  0xc70d8398eE3860E17dBb5Afd4435B83660C0Af98
Distributor: accounts[2]  0x1046620C903E4bfF93608e405B87c7c035E98047
Retailer: accounts[3]  0xc4ed53fEf699Ed757A69CA6e7C3ea9d68CD82497
Consumer: accounts[4]  0x0602a686A8e0bfc77E81341d2BFE796679387479


  Contract: SupplyChain
    ✓ Testing smart contract function harvestItem() that allows a farmer to harvest coffee (1833ms)
    ✓ Testing smart contract function processItem() that allows a farmer to process coffee (1267ms)
    ✓ Testing smart contract function packItem() that allows a farmer to pack coffee (1558ms)
    ✓ Testing smart contract function sellItem() that allows a farmer to sell coffee (929ms)
    ✓ Testing smart contract function buyItem() that allows a distributor to buy coffee (759ms)
    ✓ Testing smart contract function shipItem() that allows a distributor to ship coffee (592ms)
    ✓ Testing smart contract function receiveItem() that allows a retailer to mark coffee received (614ms)
    ✓ Testing smart contract function purchaseItem() that allows a consumer to purchase coffee (626ms)
    ✓ Testing smart contract function fetchItemBufferOne() that allows anyone to fetch item details from blockchain (74ms)
    ✓ Testing smart contract function fetchItemBufferTwo() that allows anyone to fetch item details from blockchain (56ms)


  10 passing (9s)

[clementtrebuchet@clemozore test]$ 
```


