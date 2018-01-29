import { BASE_URL, HEADERS } from './constants';

export const getPosts = () => {
  return fetch(`${BASE_URL}/posts`, { headers: HEADERS }).then(res =>
    res.json()
  );
};
