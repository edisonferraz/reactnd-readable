import { ORDER_BY } from 'actions/constants';

function order(state = '', action) {
  switch (action.type) {
    case ORDER_BY:
      return action.order;
    default:
      return state;
  }
}

export default order;
