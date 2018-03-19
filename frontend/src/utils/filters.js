const sortVoteScoreAsc = posts => [
  ...posts.sort((a, b) => a.voteScore - b.voteScore),
];
const sortVoteScoreDesc = posts => sortVoteScoreAsc(posts).reverse();

export const orderPosts = (posts, filter) => {
  switch (filter) {
    case 'byScoreLowest':
      return sortVoteScoreAsc(posts);
      break;
    case 'byScoreHighest':
      return sortVoteScoreDesc(posts);
      break;
    default:
      return sortVoteScoreDesc(posts);
      break;
  }
};
