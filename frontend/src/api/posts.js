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

export const createPost = post => {
  const timestamp = Date.now();

  fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({
      ...post,
      id: timestamp.toString(),
      timestamp,
    }),
  }).then(res => res.json());
};

export const editPost = post => {
  const timestamp = Date.now();

  fetch(`${BASE_URL}/posts/${post.id}`, {
    method: 'PUT',
    headers: HEADERS,
    body: JSON.stringify({
      ...post,
      timestamp,
    }),
  }).then(res => res.json());
};
