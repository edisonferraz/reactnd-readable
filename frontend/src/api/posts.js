import { BASE_URL, HEADERS } from './constants';

export const getPosts = () => {
  return fetch(`${BASE_URL}/posts`, { headers: HEADERS }).then(res =>
    res.json()
  );
};

export const getPostsByCategory = category => {
  return fetch(`${BASE_URL}/${category}/posts`, { headers: HEADERS }).then(
    res => res.json()
  );
};
