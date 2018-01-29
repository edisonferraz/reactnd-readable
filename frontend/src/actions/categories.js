import Api from '../api';
import { FETCH_CATEGORIES_SUCCESS } from './constants';

const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories,
});

export const getCategories = dispatch => {
  return dispatch => {
    Api.getCategories().then(categories =>
      dispatch(fetchCategoriesSuccess(categories))
    );
  };
};
