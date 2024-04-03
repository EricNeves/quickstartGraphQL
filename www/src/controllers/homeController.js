function home({ homeService }, req, res) {
  const message = homeService.fetchMessage();

  res.json(message);
  return;
}

module.exports = {
  home,
};
