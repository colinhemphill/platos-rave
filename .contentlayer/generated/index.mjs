// NOTE This file is auto-generated by Contentlayer

export { isType } from 'contentlayer/client'

// NOTE During development Contentlayer imports from `.mjs` files to improve HMR speeds.
// During (production) builds Contentlayer it imports from `.json` files to improve build performance.
import allRooms from './Room/_index.json' assert { type: 'json' }
import changelog from './Changelog/_index.json' assert { type: 'json' }

export { allRooms, changelog }

export const allDocuments = [...allRooms, changelog]


