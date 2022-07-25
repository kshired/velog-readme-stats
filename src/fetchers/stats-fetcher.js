const { request } = require("../utils");

const fetcher = (username, cursor = null) => {
  return request({
    query: `query Posts($cursor: ID, $username: String, $temp_only: Boolean, $tag: String, $limit: Int) {
      posts(cursor: $cursor, username: $username, temp_only: $temp_only, tag: $tag, limit: $limit) {
        id
        title
        short_description
        tags
        likes
        views
        }
      }`,
    variables: {
      username,
      cursor,
      limit: 100,
    },
  });
};

async function getStats(name) {
  let response;
  let posts = [];

  while (true) {
    try {
      if (response && response.data.data.posts.length >= 20) {
        response = await fetcher(name, posts[posts.length - 1].id);
      } else {
        response = await fetcher(name);
      }
    } catch(e) {
      throw new Error(e);
    }

    posts = [...posts, ...response.data.data.posts];
    if (response.data.data.posts.length < 100) break;
  }

  const totalLikes = posts.map(post => post.likes).reduce((prev,cur) => prev + cur,0)
  const totalViews = posts.map(post => post.views).reduce((prev,cur) => prev + cur,0)

  return {
    totalLikes, 
    totalViews
  }
}

module.exports = getStats;