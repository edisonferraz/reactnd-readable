const sortVoteScoreAsc = posts => [
  ...posts.sort((a, b) => a.voteScore - b.voteScore),
];

const sortVoteScoreDesc = posts => sortVoteScoreAsc(posts).reverse();

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

export { orderPosts };
