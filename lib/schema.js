// Copyright (c) 2010-2018 The Bitcoin developers
// Original code was distributed under the MIT software license.
// Copyright (c) 2014-2018 TEDLab Sciences Ltd
// Tedchain code distributed under the GPLv3 license, see COPYING file.

"use strict";

var ByteBuffer = require("protobufjs").ByteBuffer;
var ProtoBuf = require("protobufjs");

/*jshint multistr: true */
var schema = "                      \
syntax = 'proto3';                  \
                                    \
package Tedchain;                  \
                                    \
message RecordValue {               \
    bytes data = 1;                 \
}                                   \
                                    \
message Record {                    \
    bytes key = 1;                  \
    RecordValue value = 2;          \
    bytes version = 3;              \
}                                   \
                                    \
message Mutation {                  \
    bytes namespace = 1;            \
    repeated Record records = 2;    \
    bytes metadata = 3;             \
}                                   \
                                    \
message Transaction {               \
    bytes mutation = 1;             \
    int64 timestamp = 2;            \
    bytes transaction_metadata = 3; \
}";

var builder = ProtoBuf.loadProto(schema).build();

module.exports = {
    Record: builder.Tedchain.Record,
    Mutation: builder.Tedchain.Mutation,
    Transaction: builder.Tedchain.Transaction
};
