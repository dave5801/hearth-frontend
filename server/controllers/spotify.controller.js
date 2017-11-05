let spotify = require("../clients/spotify");

export function getAuthorizeURL(req, res) {
  res.send({url: spotify.getAuthrizeUrl()})
}
