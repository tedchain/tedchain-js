// Copyright (c) 2010-2018 The Bitcoin developers
// Original code was distributed under the MIT software license.
// Copyright (c) 2014-2018 TEDLab Sciences Ltd
// Tedchain code distributed under the GPLv3 license, see COPYING file

var assert = require("assert");
var bitcore = require("bitcore-lib");
var ByteBuffer = require("protobufjs").ByteBuffer;
var tedchain = require("../index");
var MutationSigner = tedchain.MutationSigner;

describe("MutationSigner", function () {
    it("sign", function () {
        var privateKey = new bitcore.HDPrivateKey();
        var signer = new MutationSigner(privateKey);
        
        var result = signer.sign(ByteBuffer.fromHex("abcdef01234567"));
        
        assert.notEqual(result.toHex(), "");
    });
});
