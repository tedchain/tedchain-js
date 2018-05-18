// Copyright (c) 2010-2018 The Bitcoin developers
// Original code was distributed under the MIT software license.
// Copyright (c) 2014-2018 TEDLab Sciences Ltd
// Tedchain code distributed under the GPLv3 license, see COPYING file.

var assert = require("assert");
var tedchain = require("../index");

describe("Schema", function () {
    it("Record", function () {
        var record = new tedchain.Schema.Record();
        
        record.key = tedchain.ByteBuffer.fromHex("abcd");
        record.value = tedchain.ByteBuffer.fromHex("0123");
        record.version = tedchain.ByteBuffer.fromHex("4567");
        
        assert.equal(record.key.toHex(), "abcd");
        assert.equal(record.value.toHex(), "0123");
        assert.equal(record.version.toHex(), "4567");
    });
    
    it("Mutation", function () {
        var mutation = new tedchain.Schema.Mutation();
        
        mutation.namespace = tedchain.ByteBuffer.fromHex("abcd");
        
        assert.equal(mutation.namespace.toHex(), "abcd");
    });
    
    it("Transaction", function () {
        var transaction = new tedchain.Schema.Transaction();
        
        transaction.mutation = tedchain.ByteBuffer.fromHex("abcd");
        
        assert.equal(transaction.mutation.toHex(), "abcd");
    });
});
