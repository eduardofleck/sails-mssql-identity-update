/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      description:
        "Securely hashed representation of the user's login password.",
      protect: true,
    },
    changePasswordNextLogin: {
      type: "boolean",
      defaultsTo: false,
    },
    language: {
      type: "string",
      isIn: ["PT", "EN", "ES", "CZ"],
    },
  },
};
