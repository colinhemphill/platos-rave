// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Room = defineDocumentType(() => ({
  name: "Room",
  filePathPattern: "rooms/**/*.md",
  fields: {
    id: {
      type: "string",
      description: "A human readable id to reference the room by",
      required: true
    },
    name: {
      type: "string",
      description: "The name of the room",
      required: true
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/content",
  documentTypes: [Room]
});
export {
  Room,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-VHGYYWDS.mjs.map
