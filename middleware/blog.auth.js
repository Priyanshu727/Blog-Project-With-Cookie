const userAuth = (req, res, next) => {
  const { username, email, password, phone } = req.body;

  if (username && email && password && phone) {
    next();
  } else {
    res.send("invalid data");
  }
};

const isAuth = (req, res, next) => {
  let { user } = req.cookies;

  if (user) {
    next();
  } else {
    return res.redirect("/login");
  }
};

module.exports = { userAuth, isAuth };
