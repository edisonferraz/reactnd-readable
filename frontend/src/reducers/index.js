import { combineReducers } from 'redux';

import categories from './categories';
import posts from './posts';
import orderBy from './orderBy';

export default combineReducers({ categories, posts, orderBy });
