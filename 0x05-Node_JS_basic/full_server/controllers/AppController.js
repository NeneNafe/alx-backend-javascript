module.exports = class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hell Holberton School!');
  }
};
