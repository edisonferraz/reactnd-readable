const sortVoteScoreAsc = posts => [
  ...posts.sort((a, b) => a.voteScore - b.voteScore),
];

const sortVoteScoreDesc = posts => sortVoteScoreAsc(posts).reverse();

const sortDateOldest = posts => [
  ...posts.sort((a, b) => a.timestamp - b.timestamp),
];

const sortDateNewest = posts => sortDateOldest(posts).reverse();

export const orderPosts = (posts, filter) => {
  switch (filter) {
    case 'byScoreLowest':
      return sortVoteScoreAsc(posts);
      break;
    case 'byScoreHighest':
      return sortVoteScoreDesc(posts);
      break;
    case 'byDateOldest':
      return sortDateOldest(posts);
      break;
    case 'byDateNewest':
      return sortDateNewest(posts);
      break;
    default:
      return sortVoteScoreDesc(posts);
      break;
  }
};
