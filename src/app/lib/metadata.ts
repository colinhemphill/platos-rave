import { Metadata } from 'next';

export const APP_NAME = 'Plato’s Rave: Bigger Than Time';
export const APP_DESCRIPTION =
  'A text adventure inspired by My Brother, My Brother & Me.';
export const APP_URL = 'https://platosrave.com';

export const metadataOpenGraphDefaults: Metadata['openGraph'] = {
  description: APP_DESCRIPTION,
  locale: 'en-US',
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  type: 'website',
  url: APP_URL,
};

export const metadataTwitterDefaults: Metadata['twitter'] = {
  creator: '@colin_hemphill',
  description: APP_DESCRIPTION,
  site: APP_NAME,
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
};
