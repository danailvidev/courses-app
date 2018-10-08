const express = require('express');
const router = express.Router();
const url = require('url');

module.exports = (server) => {

  router.get('/courses', (req, res, next) => {
    let url_parts = url.parse(req.originalUrl, true),
      query = url_parts.query,
      from = query.start || 0,
      to = +query.start + +query.count,
      sort = query.sort,
      queryStr = query.query,
      courses = server.db.getState().courses;

    if (!!query.textFragment) {
      courses = courses.filter((course) => course.name.concat(course.description).toUpperCase().indexOf(query.textFragment.toUpperCase()) >= 0);
    }

    if (sort) {
        courses.sort(function (a, b) {
          if (sort == 'asc') {
            return new Date(a.date) - new Date(b.date);
          } else {
            return new Date(b.date) - new Date(a.date);
          }
  
        });
      }

    if (courses.length < to || !to) {
      to = courses.length;
    }
    courses = courses.slice(from, to);

    
    setTimeout( () => {
        res.json(courses);

    }, 2000)
  });

  return router;
};
