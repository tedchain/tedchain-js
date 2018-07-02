﻿// Copyright (c) 2010-2018 The Bitcoin developers.
// Original code was distributed under the MIT software license.
// Copyright (c) 2014-2018 TEDLab Sciences Ltd
// Tedchain code distributed under the GPLv3 license, see COPYING file.

var assert = require("assert");
var ByteBuffer = require("protobufjs").ByteBuffer;
var tedchain = require("../index");
var RecordKey = tedchain.RecordKey;

describe("RecordKey", function () {
    it("toString", function () {
        assert.equal(new RecordKey("/account/path/", "ACC", "/asset/path/").toString(), "/account/path/:ACC:/asset/path/");
    });
    
    it("toByteBuffer", function () {
        assert.equal(
            new RecordKey("/account/path/", "ACC", "/asset/path/").toByteBuffer().toHex(),
            "2f6163636f756e742f706174682f3a4143433a2f61737365742f706174682f");
    });
    
    it("parse string", function () {
        var result1 = RecordKey.parse("/account/path/:ACC:/asset/path/");
        var result2 = RecordKey.parse("/account/path/:DATA:record:name");
        
        assert.equal(result1.path.toString(), "/account/path/");
        assert.equal(result1.recordType, "ACC");
        assert.equal(result1.name, "/asset/path/");
        assert.equal(result2.path.toString(), "/account/path/");
        assert.equal(result2.recordType, "DATA");
        assert.equal(result2.name, "record:name");
    });
    
    it("parse ByteBuffer", function () {
        var result = RecordKey.parse(ByteBuffer.fromHex("2f6163636f756e742f706174682f3a4143433a2f61737365742f706174682f"));
        
        assert.equal(result.path.toString(), "/account/path/");
        assert.equal(result.recordType, "ACC");
        assert.equal(result.name, "/asset/path/");
    });
    
    it("parse invalid", function () {
        assert.throws(function () { RecordKey.parse("/account/path/:ACC"); }, Error);
    });
});
