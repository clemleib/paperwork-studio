import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the publication state domain
 */

const selectPublicationDomain = state => state.publication || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Publication
 */

const makeSelectPublication = () =>
  createSelector(
    selectPublicationDomain,
    substate => substate,
  );

export default makeSelectPublication;
export { selectPublicationDomain };
