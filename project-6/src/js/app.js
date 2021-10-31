App = {
    web3Provider: null,
    contracts: {},
    sku: 0,
    upc: 0,
    metamaskAccountID: "0x0000000000000000000000000000000000000000",
    ownerID: "0x0000000000000000000000000000000000000000",
    originFarmerID: "0x0000000000000000000000000000000000000000",
    originFarmName: null,
    originFarmInformation: null,
    originFarmLatitude: null,
    originFarmLongitude: null,
    productNotes: null,
    productPrice: 0,
    distributorID: "0x0000000000000000000000000000000000000000",
    retailerID: "0x0000000000000000000000000000000000000000",
    consumerID: "0x0000000000000000000000000000000000000000",
    init: async function () {
        App.readForm();
        /// Setup access to blockchain
        return await App.initWeb3();
    },
    readForm: function () {
        App.sku = $("#sku").val();
        App.upc = $("#upc").val();
        App.ownerID = $("#ownerID").val();
        App.originFarmerID = $("#originFarmerID").val();
        App.originFarmName = $("#originFarmName").val();
        App.originFarmInformation = $("#originFarmInformation").val();
        App.originFarmLatitude = $("#originFarmLatitude").val();
        App.originFarmLongitude = $("#originFarmLongitude").val();
        App.productNotes = $("#productNotes").val();
        App.productPrice = $("#productPrice").val();
        App.distributorID = $("#distributorID").val();
        App.retailerID = $("#retailerID").val();
        App.consumerID = $("#consumerID").val();

        console.log(
            App.sku,
            App.upc,
            App.ownerID,
            App.originFarmerID,
            App.originFarmName,
            App.originFarmInformation,
            App.originFarmLatitude,
            App.originFarmLongitude,
            App.productNotes,
            App.productPrice,
            App.distributorID,
            App.retailerID,
            App.consumerID
        );
    },
    initWeb3: async function () {
        /// Find or Inject Web3 Provider
        /// Modern dapp browsers...
        if (window.ethereum) {
            App.web3Provider = Web3.givenProvider;
            App.web3 = new Web3(Web3.givenProvider);
            await window.ethereum.enable();
        } else {
            App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545');
            App.web3 = new Web3(App.web3Provider);
        }
        await App.getMetaskAccountID();
        await App.initSupplyChain();
    },
    initSupplyChain: function () {
        /// Source the truffle compiled smart contracts
        var jsonSupplyChain = '../../build/contracts/SupplyChain.json';
        /// JSONfy the smart contracts
        $.getJSON(jsonSupplyChain, function (data) {
            console.log('data', data);
            var SupplyChainArtifact = data;
            App.contracts.SupplyChain = TruffleContract(SupplyChainArtifact);
            App.contracts.SupplyChain.setProvider(App.web3Provider);
            console.log("provider", App.web3Provider);
            console.log("SupplyChain", App.contracts.SupplyChain);
            App.fetchEvents();
        });
        return App.bindEvents();
    },
    getMetaskAccountID: async function () {
        App.networkID = await App.web3.eth.net.getId();
        App.metamaskAccountID = (await App.web3.eth.getAccounts())[0];
    },
    bindEvents: function () {
        $(document).on('click', App.handleButtonClick);
    },
    handleButtonClick: async function (event) {
        event.preventDefault();
        App.getMetaskAccountID();
        var processId = parseInt($(event.target).data('id'));
        console.log('processId', processId);
        switch (processId) {
            case 1:
                await App.harvestItem(event);
                break;
            case 2:
                await App.processItem(event);
                break;
            case 3:
                await App.packItem(event);
                break;
            case 4:
                await App.sellItem(event);
                break;
            case 5:
                await App.buyItem(event);
                break;
            case 6:
                await App.shipItem(event);
                break;
            case 7:
                await App.receiveItem(event);
                break;
            case 8:
                await App.purchaseItem(event);
                break;
            case 9:
                await App.fetchItemBufferOne(event);
                break;
            case 10:
                await App.fetchItemBufferTwo(event);
                break;
            case 11:
                await App.AddDistributor(event);
                break;
            case 12:
                await App.AddRetailer(event);
                break;
            case 13:
                await App.AddConsumer(event);
                break;
            case 14:
                await App.farmerTransferToDistributor(event);
                break;
            case 15:
                await App.DistributorTransferToRetailer(event);
                break;
            case 16:
                await App.RetailerTransferToConsumer(event);
                break;

        }
    },
    harvestItem: function (event) {
        event.preventDefault();
        var processId = parseInt($(event.target).data('id'));
        App.contracts.SupplyChain.deployed().then(function (instance) {
            return instance.harvestItem(
                App.upc,
                App.metamaskAccountID,
                App.originFarmName,
                App.originFarmInformation,
                App.originFarmLatitude,
                App.originFarmLongitude,
                App.productNotes,
                {from: App.metamaskAccountID}
            );
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('harvestItem', result);
        }).catch(function (err) {
            console.log(err.message);
        });
    },
    processItem: function (event) {
        event.preventDefault();
        var processId = parseInt($(event.target).data('id'));
        App.contracts.SupplyChain.deployed().then(function (instance) {
            return instance.processItem(App.upc, {from: App.metamaskAccountID});
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('processItem', result);
        }).catch(function (err) {
            console.log(err.message);
        });
    },
    packItem: function (event) {
        event.preventDefault();
        var processId = parseInt($(event.target).data('id'));
        App.contracts.SupplyChain.deployed().then(function (instance) {
            return instance.packItem(App.upc, {from: App.metamaskAccountID});
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('packItem', result);
        }).catch(function (err) {
            console.log(err.message);
        });
    },
    sellItem: function (event) {
        event.preventDefault();
        var processId = parseInt($(event.target).data('id'));
        App.contracts.SupplyChain.deployed().then(function (instance) {
            const productPrice = App.web3.utils.toWei(App.productPrice, "ether");
            return instance.sellItem(App.upc, productPrice, {from: App.metamaskAccountID});
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('sellItem', result);
        }).catch(function (err) {
            console.log(err.message);
        });
    },
    buyItem: function (event) {
        event.preventDefault();
        /*        App.contracts.SupplyChain.deployed().then(async function (instance) {
                    await instance.addDistributor(App.distributorID, {from: App.metamaskAccountID});
                });*/
        App.contracts.SupplyChain.deployed().then(function (instance) {
            const walletValue = App.web3.utils.toWei(App.productPrice, "ether");
            return instance.buyItem(App.upc, {from: App.metamaskAccountID, value: walletValue});
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('buyItem', result);
        }).catch(function (err) {
            console.log(err.message);
        });
    },
    shipItem: function (event) {
        event.preventDefault();
        var processId = parseInt($(event.target).data('id'));

        App.contracts.SupplyChain.deployed().then(function (instance) {
            return instance.shipItem(App.upc, {from: App.metamaskAccountID});
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('shipItem', result);
        }).catch(function (err) {
            console.log(err.message);
        });
    },
    receiveItem: function (event) {
        event.preventDefault();
        var processId = parseInt($(event.target).data('id'));

        App.contracts.SupplyChain.deployed().then(function (instance) {
            return instance.receiveItem(App.upc, {from: App.metamaskAccountID});
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('receiveItem', result);
        }).catch(function (err) {
            console.log(err.message);
        });
    },
    purchaseItem: function (event) {
        event.preventDefault();
        var processId = parseInt($(event.target).data('id'));
        App.contracts.SupplyChain.deployed().then(function (instance) {
            return instance.purchaseItem(App.upc, {from: App.metamaskAccountID});
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('purchaseItem', result);
        }).catch(function (err) {
            console.log(err.message);
        });
    },
    fetchItemBufferOne: function () {
        ///   event.preventDefault();
        ///    var processId = parseInt($(event.target).data('id'));
        App.upc = $('#upc').val();
        console.log('upc', App.upc);

        App.contracts.SupplyChain.deployed().then(function (instance) {
            return instance.fetchItemBufferOne(App.upc);
        }).then(function (result) {
            $("#ftc-item").text(JSON.stringify(result, null, 4));
            console.log('fetchItemBufferOne', result);
        }).catch(function (err) {
            console.log(err.message);
        });
    },
    fetchItemBufferTwo: function () {
        ///    event.preventDefault();
        ///    var processId = parseInt($(event.target).data('id'));

        App.contracts.SupplyChain.deployed().then(function (instance) {
            return instance.fetchItemBufferTwo.call(App.upc);
        }).then(function (result) {
            $("#ftc-item").text(JSON.stringify(result, null, 4));
            console.log('fetchItemBufferTwo', result);
        }).catch(function (err) {
            console.log(err.message);
        });
    },
    fetchEvents: function () {
        if (typeof App.contracts.SupplyChain.currentProvider.sendAsync !== "function") {
            App.contracts.SupplyChain.currentProvider.sendAsync = function () {
                return App.contracts.SupplyChain.currentProvider.send.apply(
                    App.contracts.SupplyChain.currentProvider,
                    arguments
                );
            };
        }

        App.contracts.SupplyChain.deployed().then(function (instance) {
            var events = instance.allEvents(function (err, log) {
                if (!err)
                    $("#ftc-events").append('<li>' + log.event + ' - ' + log.transactionHash + '</li>');
            });
        }).catch(function (err) {
            console.log(err.message);
        });

    },
    farmerTransferToDistributor(event) {
        event.preventDefault();
        App.contracts.SupplyChain.deployed().then(async function (instance) {
            await instance.transferOwnership(App.distributorID, {from: App.metamaskAccountID}).then(async function () {
            }).catch(function (result) {
                console.log(result);
            }).catch(function (err){
                console.log(err.result);
                return false;
            });
        });
    },
    DistributorTransferToRetailer(event) {
        event.preventDefault();
        App.contracts.SupplyChain.deployed().then(async function (instance) {
            await instance.transferOwnership(App.retailerID, {from: App.metamaskAccountID}).then(async function () {
            }).catch(function (result) {
                console.log(result);
            }).catch(function (err){
                console.log(err.result);
                return false;
            });
        });
    },
    RetailerTransferToConsumer(event) {
        event.preventDefault();
        App.contracts.SupplyChain.deployed().then(async function (instance) {
            await instance.transferOwnership(App.consumerID, {from: App.metamaskAccountID}).then(async function () {
            }).catch(function (result) {
                console.log(result);
            }).catch(function (err){
                console.log(err.result);
                return false;
            });
        });
    },
    AddDistributor(event) {
        App.contracts.SupplyChain.deployed().then(async function (instance) {
            await instance.addDistributor(App.distributorID, {from: App.metamaskAccountID}).then(function () {
           }).catch(function (result){
               console.log(result);
               return true;
           }).catch(function (err){
               console.log(err.message);
               return false;
            })
        });
    },
    AddRetailer(event) {
         App.contracts.SupplyChain.deployed().then(async function (instance) {
            await instance.addRetailer(App.retailerID, {from: App.metamaskAccountID}).then(function () {
           }).catch(function (result){
               console.log(result);
           }).catch(function (err){
               console.log(err.message);
               return false;
            })
        });
    },
    AddConsumer(event) {
        App.contracts.SupplyChain.deployed().then(async function (instance) {
            await instance.addConsumer(App.consumerID, {from: App.metamaskAccountID}).then(function () {
           }).catch(function (result){
               console.log(result);
               return true;
           }).catch(function (err){
               console.log(err.message);
               return false;
            })
        });
    }
};

$(function () {
    $(window).load(function () {
        App.init();
    });
});
