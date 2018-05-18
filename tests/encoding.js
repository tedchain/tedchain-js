// Copyright (c) 2010-2018 The Bitcoin developers
// Original code was distributed under the MIT software license.
// Copyright (c) 2014-2018 TEDLab Sciences Ltd
// Tedchain code distributed under the GPLv3 license, see COPYING file.

var assert = require("assert");
var ByteBuffer = require("protobufjs").ByteBuffer;
var Long = require("protobufjs").Long;
var tedchain = require("../index");

describe("encoding", function () {
    it("encodeString", function () {
        var result = tedchain.encoding.encodeString("ABC");
        assert.equal(result.toHex(), "414243");
    });
    
    it("encodeInt64", function () {
        var result = tedchain.encoding.encodeInt64(Long.fromString("25000"));
        assert.equal(result.toHex(), "00000000000061a8");
    });
    
    it("decodeString", function () {
        var result = tedchain.encoding.decodeString(ByteBuffer.fromHex("414243"));
        assert.equal(result, "ABC");
    });
    
    it("decodeInt64", function () {
        var result1 = tedchain.encoding.decodeInt64(ByteBuffer.fromHex("00000000000061a8"));
        var result2 = tedchain.encoding.decodeInt64(ByteBuffer.fromHex(""));
        
        assert.deepEqual(result1, Long.fromString("25000", false));
        assert.deepEqual(result2, Long.fromString("0", false));
    });
});
