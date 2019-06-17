/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _fragments_tagsList$ref: unique symbol;
export type fragments_tagsList$ref = typeof _fragments_tagsList$ref;
export type fragments_tagsList = {
    readonly name: string | null;
    readonly tagId: number;
    readonly " $refType": fragments_tagsList$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "fragments_tagsList",
  "type": "Tag",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": "tagId",
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '56e7a97cda9608b8af60af31a0a55b13';
export default node;
