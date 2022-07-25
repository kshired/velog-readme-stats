const createBadge = require("../src/cards/velog-badge-with-stats");
const createBadgeDark = require("../src/cards/velog-badge-with-stats-black");
const getStats = require("../src/fetchers/stats-fetcher");

module.exports = async (req, res) => {
  const { name, color } = req.query;
  res.setHeader("Content-Type", "image/svg+xml");
  try {
    const {totalLikes, totalViews} = await getStats(name);
    return res.send(color === "dark" ? createBadgeDark(name, totalLikes, totalViews) : createBadge(name, totalLikes, totalViews));
  } catch (e) {
    return res.send(e.message);
  }
};
