class MovieController {
  // GET /movies
  static findAll(req, res, next) {
    res.send("Hello World");
  }

  // GET /movies/:id
  static findOne(req, res, next) {
    res.send("Hello World");
  }

  // POST /movies
  static create(req, res, next) {
    res.send("Hello World");
  }

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
