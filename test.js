var blockapps = require('./index.js');
var Promise = require("bluebird");
blockapps.setProfile("strato-dev", 'http://kjlv12test.centralus.cloudapp.azure.com/strato-single');
var contract = blockapps.Solidity.attach( {"bin":"6060604052610412806100126000396000f360606040526000357c01000000000000000000000000000000000000000000000000000000009004806358793050146100445780638df554b31461005357610042565b005b6100516004805050610062565b005b61006060048050506101f1565b005b61aabb600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555061ccdd600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555061eeff600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550602360036000506000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005081905550602360036000506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005081905550601e60036000506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055505b565b60003073ffffffffffffffffffffffffffffffffffffffff16319050600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166000606460036000506000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054840204604051809050600060405180830381858888f1935050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166000606460036000506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054840204604051809050600060405180830381858888f1935050505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166000606460036000506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054840204604051809050600060405180830381858888f19350505050505b5056","xabi":{"funcs":{"Setup":{"args":{},"selector":"58793050","vals":{}},"Dividend":{"args":{},"selector":"8df554b3","vals":{}}},"vars":{"Victor":{"atBytes":0,"type":"Address"},"Jim":{"atBytes":32,"type":"Address"},"Kieren":{"atBytes":64,"type":"Address"},"ownershipDistribution":{"atBytes":96,"dynamic":true,"value":{"type":"Int","bytes":32},"key":{"type":"Address"},"type":"Mapping"}}},"name":"Payout","address":"ba3971c0a5c3cd818b2940db90e3dc988f723127"} );

console.log("hello");
var afterTXstring ="";
Promise.props(contract.state).then(function(sVars) {

afterTXstring += "\n\n Contract storage state:\n\n";
for (name in sVars) {
    var svar = sVars[name]
    if (typeof svar === "function") {
        continue;
    }
    afterTXstring += "  " + name + " = " + svar + "\n";
};
	console.log(afterTXstring);
});