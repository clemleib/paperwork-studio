/*
 * Faq Messages
 *
 * This contains all the text for the Faq container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Faq';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Faq container!',
  },
});
