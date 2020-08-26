/**
 *
 * Asynchronously loads the component for Publication
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
