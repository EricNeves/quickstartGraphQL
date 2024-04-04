async function store({ userService }, req, res) {
  const data = req.body;

  const user = await userService.create(data);

  if (user.error) {
    res.status(400).json({
      error: user.error,
    });
    return;
  }

  res.json(user);
  return;
}

async function login({ userService }, req, res) {
  const data = req.body;

  const user = await userService.authenticate(data);

  if (user.error) {
    res.status(400).json({
      error: user.error,
    });
    return;
  }

  if (user.unauthorized) {
    res.status(401).json({
      error: user.unauthorized,
    });
    return;
  }

  res.json({
    jwt: user
  });
  return;
}

async function info({ userService }, req, res) {
  const user = await userService.fetchInfo(req.user);

  if (user.error) {
    res.status(400).json({
      error: user.error,
    });
    return;
  }

  if (user.unauthorized) {
    res.status(401).json({
      error: user.unauthorized,
    });
    return;
  }

  res.json(user);
  return;
}

module.exports = {
  store,
  login,
  info
};
