// Copyright (c) 2010-2018 The Bitcoin developers
// Original code was distributed under the MIT software license.
// Copyright (c) 2014-2018 TEDLab Sciences Ltd
// Tedchain code distributed under the GPLv3 license, see COPYING file.

var assert = require("assert");
var tedchain = require("../index");
var LedgerPath = tedchain.LedgerPath;

describe('LedgerPath', function () {
    it('toString', function () {
        assert.equal(new LedgerPath(["a", "b", "c"]).toString(), "/a/b/c/");
        assert.equal(new LedgerPath(["a"]).toString(), "/a/");
        assert.equal(new LedgerPath([]).toString(), "/");
    });
    
    it('parse valid', function () {
        assert.deepEqual(LedgerPath.parse("/a/b/c/").parts, ["a", "b", "c"]);
        assert.deepEqual(LedgerPath.parse("/a/").parts, ["a"]);
        assert.deepEqual(LedgerPath.parse("/").parts, []);
    });
    
    it('parse invalid', function () {
        assert.throws(function () { LedgerPath.parse("abc/def/"); }, Error);
        assert.throws(function () { LedgerPath.parse("abc/"); }, Error);
        assert.throws(function () { LedgerPath.parse("/abc/def"); }, Error);
        assert.throws(function () { LedgerPath.parse("/abc"); }, Error);
        assert.throws(function () { LedgerPath.parse(""); }, Error);
        assert.throws(function () { LedgerPath.parse("/abc//def/"); }, Error);
        assert.throws(function () { LedgerPath.parse("/abc/def//"); }, Error);
    });
});
