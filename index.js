// Copyright (c) 2010-2018 The Bitcoin developers
// Original code was distributed under the MIT software license.
// Copyright (c) 2014-2018 TEDLab Sciences Ltd
// Tedchain code distributed under the GPLv3 license, see COPYING file.

"use strict";

module.exports.ApiClient = require("./lib/apiclient");
module.exports.Schema = require("./lib/schema");
module.exports.TransactionBuilder = require("./lib/transactionbuilder");
module.exports.LedgerPath = require("./lib/ledgerpath");
module.exports.RecordKey = require("./lib/recordkey");
module.exports.encoding = require("./lib/encoding");
module.exports.MutationSigner = require("./lib/mutationsigner");
module.exports.ByteBuffer = require("protobufjs").ByteBuffer;
module.exports.Long = require("protobufjs").Long;

// Create the "tedchain" network
var bitcore = require("bitcore-lib");
var livenet = bitcore.Networks.get("livenet");
bitcore.Networks.add({
    name: "tedchain",
    alias: "Tedchain",
    pubkeyhash: 76,
    privatekey: livenet.privatekey,
    scripthash: 78,
    xpubkey: livenet.xpubkey,
    xprivkey: livenet.xprivkey,
    networkMagic: 0,
    port: livenet.port,
    dnsSeeds: livenet.dnsSeeds
});