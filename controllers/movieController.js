const MovieService = require("../services/movieService");

class MovieController {
  // GET /movies
  static findAll = async (req, res, next) => {
    try {
      const movies = await MovieService.findAll(req.query);
      res.status(200).json(movies);
    } catch (err) {
      next(err);
    }
  };

  // GET /movies/:id
  static findOne(req, res, next) {
    res.send("Hello World");
  }

  // POST /movies
  static create = async (req, res, next) => {
    try {
      const movies = await MovieService.create(req.body);
      res.status(201).json(movies);
    } catch (err) {
      next(err);
    }
  };

  // PUT /movies/:id
  static update(req, res, next) {
    res.send("Hello World");
  }

  // DELETE /movies/:id
  static destroy(req, res, next) {
    res.send("Hello World");
  }
}

module.exports = MovieController;
