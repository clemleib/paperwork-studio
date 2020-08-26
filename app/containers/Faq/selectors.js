import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the faq state domain
 */

const selectFaqDomain = state => state.faq || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Faq
 */

const makeSelectFaq = () =>
  createSelector(
    selectFaqDomain,
    substate => substate,
  );

export default makeSelectFaq;
export { selectFaqDomain };
