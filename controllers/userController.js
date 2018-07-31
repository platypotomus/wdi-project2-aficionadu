const User = require('../models/user');

function usersShow(req, res) {
  const userId = req.params.id;
  User
    .findById(userId)
    .then(user => {
      console.log('Users show. User is', user);
      res.render('users/show', { user });
    });
}

function usersEdit(req, res) {
  User
    .findById(req.params.id)
    .then(user => res.render('users/edit', { user }))
    .catch(err => res.status(404).send(err));
}

function usersUpdate(req, res) {
  User
    .findByIdAndUpdate(req.params.id, req.body)
    .then(user => res.redirect(`/users/${user.id}`))
    .catch(err => res.status(500).send(err));
}

module.exports = {
  show: usersShow,
  edit: usersEdit,
  update: usersUpdate
};

////// TO GET REVIEWS
// User
//   .findById(req.params.id)
//   .then(user => {
//     const reviews = user.getReviews();
//   })
