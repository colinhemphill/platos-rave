import { Metadata } from 'next';

export const APP_NAME = 'Plato’s Rave';
export const APP_DESCRIPTION = 'Bigger than time';
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
