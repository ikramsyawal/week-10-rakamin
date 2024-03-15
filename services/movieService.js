const movieRepository = require("../repositories/movieRepository");

class MovieService {
  static findAll = async (params) => {
    try {
      const movies = await movieRepository.findAll(params);
      return movies;
    } catch (err) {
      throw err;
    }
  };

  static create = async (data) => {
    try {
      const movies = await movieRepository.create(data);
      return movies;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = MovieService;
