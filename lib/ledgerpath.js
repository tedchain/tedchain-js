// Copyright (c) 2010-2018 The Bitcoin developers
// Original code was distributed under the MIT software license.
// Copyright (c) 2015-2018 TEDLab Sciences Ltd
// Tedchain code distributed under the GPLv3 license, see COPYING file.

"use strict";

/**
 * Represents a path within the chain hierarchy.
 * 
 * @constructor
 * @param {!Array<!string>} parts The parts from which the path is composed.
 */
function LedgerPath(parts) {
    /**
     * The parts from which the path is composed.
     * 
     * @name LedgerPath#parts
     * @type !Array<!string>
     */
    this.parts = parts;
}

/** 
 * Returns the string representation of the path.
 * 
 * @return {string} The string representation of the path.
 */
LedgerPath.prototype.toString = function () {
    return "/" + this.parts.map(function (item) { return item + "/"; }).join("");
};

/** 
 * Parses a chain path from a string.
 * 
 * @param {string} value The value to parse.
 * @return {!LedgerPath} The parsed path.
 */
LedgerPath.parse = function (value) {
    var parts = value.split("/");
    
    if (parts.length < 2 || parts[0] !== "" || parts[parts.length - 1] !== "") {
        throw new Error("Invalid path");
    }
    
    for (var i = 1; i < parts.length - 1; i++) {
        if (parts[i] === "") {
            throw new Error("Invalid path");
        }
    }

    return new LedgerPath(parts.slice(1, parts.length - 1));
};

module.exports = LedgerPath;
