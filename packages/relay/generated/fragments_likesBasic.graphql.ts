/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _fragments_likesBasic$ref: unique symbol;
export type fragments_likesBasic$ref = typeof _fragments_likesBasic$ref;
export type fragments_likesBasic = {
    readonly topicId: number;
    readonly userByUserCode: {
        readonly avatar: string | null;
    } | null;
    readonly " $refType": fragments_likesBasic$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "fragments_likesBasic",
  "type": "Like",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "topicId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "userByUserCode",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "avatar",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = 'e49ed3fb27a7f99b28c5705ad0c7ed25';
export default node;
