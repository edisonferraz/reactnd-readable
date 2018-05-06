import { BASE_URL, HEADERS } from './constants';

export const getComments = id => {
  return fetch(`${BASE_URL}/posts/${id}/comments`, { headers: HEADERS })
    .then(res => res.json())
    .then(comments => comments);
};

export const addComment = comment => {
  return fetch(`${BASE_URL}/comments`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(comment),
  }).then(res => res.json());
};

export const updateComment = comment => {
  return fetch(`${BASE_URL}/comments/${comment.id}`, {
    method: 'PUT',
    headers: HEADERS,
    body: JSON.stringify(comment),
  }).then(res => res.json());
};

export const deleteComment = commentId => {
  return fetch(`${BASE_URL}/comments/${commentId}`, {
    method: 'DELETE',
    headers: HEADERS,
  }).then(res => res.json());
};

export const voteComment = (comentId, vote) => {
  return fetch(`${BASE_URL}/comments/${comentId}`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ option: vote }),
  }).then(res => res.json());
};
