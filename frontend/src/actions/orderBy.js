import { ORDER_BY } from './constants';

export const orderBy = order => ({
  type: ORDER_BY,
  order,
});
