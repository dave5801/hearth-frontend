const accountsUrl = "https://accounts.spotify.com";
const axios = require("axios");
const config = require("../../config");
const queryString = require('query-string');

exports.getAuthorizeURL = () => {

  // Using an array
  let params = {
    client_id: config.spotify.client_id,
    response_type: 'code',
    redirect_uri: config.spotify.redirect_uri,
    scopes: config.spotify.scopes
  };
  return accountsUrl + "/authorize?" + queryString.stringify(params);
}