module.exports = {
    updateAmt: function (attribute, newValue) {
        this[attribute] = newValue;
        return this.save();
    },

    addToArray: function (attribute, objId) {
        this[attribute].push(objId);
        return this.save();
    },

    removeFromArray: function (attribute, objId) {
        const index = this[attribute].indexOf(objId);
        this[attribute].splice(index, 1);
        return this.save();
    },

    updateSchemaObject: function (attribute, newId) {
        this[attribute] = newId;
        return this.save();
    }
};