const createBadge = require("../src/cards/velog-badge-with-stats");
const getStats = require("../src/fetchers/stats-fetcher");

module.exports = async (req, res) => {
  const { name } = req.query;
  res.setHeader("Content-Type", "image/svg+xml");
  try {
    const {totalLikes, totalViews} = await getStats(name);
    return res.send(createBadge(name, totalLikes, totalViews));
  } catch (e) {
    return res.send(e.message);
  }
};
