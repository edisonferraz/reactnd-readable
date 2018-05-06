const sortVoteScoreAsc = array => [
  ...array.sort((a, b) => a.voteScore - b.voteScore),
];

const sortVoteScoreDesc = array => sortVoteScoreAsc(array).reverse();

const sortDateOldest = posts => [
  ...posts.sort((a, b) => a.timestamp - b.timestamp),
];

const sortDateNewest = posts => sortDateOldest(posts).reverse();

const orderPosts = (posts, filter) => {
  switch (filter) {
    case 'byScoreLowest':
      return sortVoteScoreAsc(posts);
    case 'byScoreHighest':
      return sortVoteScoreDesc(posts);
    case 'byDateOldest':
      return sortDateOldest(posts);
    case 'byDateNewest':
      return sortDateNewest(posts);
    default:
      return sortVoteScoreDesc(posts);
  }
};

const orderComments = (comments, filter) => {
  switch (filter) {
    default:
      return sortVoteScoreDesc(comments);
  }
};

export { orderPosts, orderComments };
