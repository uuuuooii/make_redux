import { INCREASE } from './action-type';
import { actionCreator } from './redux';

export const increase = () => actionCreator(INCREASE);
