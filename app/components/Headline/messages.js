/*
 * Headline Messages
 *
 * This contains all the text for the Headline component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Headline';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Headline component!',
  },
});
