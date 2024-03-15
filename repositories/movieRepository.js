const { Movie } = require("../models");

class MovieRepository {
  static findAll = async (params) => {
    try {
      const movie = await Movie.findAll(params);
      return movie;
    } catch (err) {
      throw err;
    }
  };

  static create = async (params) => {
    try {
      const movie = await Movie.create(params);
      return movie;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = MovieRepository;
