// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Room = defineDocumentType(() => ({
  name: "Room",
  filePathPattern: "rooms/*.md",
  fields: {
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
//# sourceMappingURL=compiled-contentlayer-config-V5GHGOKP.mjs.map
