var ethValue = require("./Units.js").ethValue;
var polling = require("./routes/pollPromise.js").defaults;
var txParams = require("./Transaction.js").defaults;
var query = require("./HTTPQuery.js").defaults;
var multiTX = require("./MultiTX.js").defaults;

module.exports = setProfile;
function setProfile(profName, apiURL, version) {
    var profile = profiles[profName];

    query.serverURI = apiURL;
    if (typeof version === "string" && version.match(/^[0-9]+\.[0-9]+$/)) {
        query.apiPrefix = "/eth/v" + version;
    }

    polling.pollEveryMS = profile.pollEveryMS;
    polling.pollTimeoutMS = profile.pollTimeoutMS;

    txParams.gasPrice = profile.gasPrice;
    txParams.gasLimit = profile.gasLimit;

    multiTX.address = profile.multiTXaddr;
}

var profiles = {
    "strato-dev" :
    {
        "pollEveryMS" : 500,
        "pollTimeoutMS" : 10000,
        "gasPrice" : ethValue(1).in("wei"),
        "gasLimit" : 3141592,
        "multiTXaddr" : "9459cd601c609ff5251a6fa500ba1c9b8bd8d45a"
    },
    "strato-dev2" :
    {
        "serverURI" : "https://strato-dev2.blockapps.net",
        "pollEveryMS" : 500,
        "pollTimeoutMS" : 10000,
        "gasPrice" : ethValue(1).in("wei"),
        "gasLimit" : 3141592,
        "multiTXaddr" : "9459cd601c609ff5251a6fa500ba1c9b8bd8d45a"
    },
    "ethereum-frontier":
    {
        "pollEveryMS" : 1000,
        "pollTimeoutMS" : 30000,
        "gasPrice" : ethValue(1).in("szabo"),
        "gasLimit" : 1e6
    }
};
module.exports.profiles = profiles;
