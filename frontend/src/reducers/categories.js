import { FETCH_CATEGORIES_SUCCESS } from 'actions/constants';

function categories(state = [], action) {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return action.categories;
    default:
      return state;
  }
}

export default categories;
