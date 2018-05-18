// Copyright (c) 2010-2018 The Bitcoin developers
// Original code was distributed under the MIT software license.
// Copyright (c) 2014-2018 TEDLab Sciences Ltd
// Tedchain code distributed under the GPLv3 license, see COPYING file.

"use strict";

var bitcore = require("bitcore-lib");
var ByteBuffer = require("protobufjs").ByteBuffer;

/**
 * Provides the ability to sign a mutation.
 * 
 * @constructor
 * @param {!HDPrivateKey} privateKey The private key used to sign the mutations.
 */
function MutationSigner(privateKey) {
    this.publicKey = ByteBuffer.wrap(privateKey.publicKey.toBuffer());
    this._signer = bitcore.crypto.ECDSA().set({
        endian: "big",
        privkey: privateKey.privateKey
    });
}

/** 
 * Signs a mutatation.
 * 
 * @param {!ByteBuffer} mutation The mutation to sign.
 * @return {!ByteBuffer} The signature.
 */
MutationSigner.prototype.sign = function (mutation) {
    var transactionBuffer = new Uint8Array(mutation.toArrayBuffer());
    var hash = bitcore.crypto.Hash.sha256(bitcore.crypto.Hash.sha256(transactionBuffer));
    
    var signatureBuffer = this._signer.set({ hashbuf: hash }).sign().sig.toBuffer();
    
    return ByteBuffer.wrap(signatureBuffer);
};

module.exports = MutationSigner;