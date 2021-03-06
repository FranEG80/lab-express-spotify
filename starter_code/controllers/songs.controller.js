const createError = require('http-errors');
const spotifyApi = require('../configs/db.config')

module.exports.list = (req, res, next) => {
  spotifyApi.searchArtists(req.query.search)
        .then(data => {
          data.body.artists.items.forEach(element => console.log(`The received data from API - Artists:`,element));
          res.render('songs/list',{
            artists: data.body.artists.items
          })
        })
        .catch(err => {
          console.log('The error while searching artists occurred: ', err);
        });
}