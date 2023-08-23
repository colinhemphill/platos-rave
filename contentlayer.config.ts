import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Room = defineDocumentType(() => ({
  name: 'Room',
  filePathPattern: 'rooms/**/*.md',
  fields: {
    id: {
      type: 'string',
      description: 'A human readable id to reference the room by',
      required: true,
    },
    name: {
      type: 'string',
      description: 'The name of the room',
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Room],
});
