/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _topicAdd_data$ref: unique symbol;
export type topicAdd_data$ref = typeof _topicAdd_data$ref;
export type topicAdd_data = {
    readonly lv2Section: ReadonlyArray<{
        readonly sectionId: number;
        readonly name: string;
        readonly parent: number | null;
    }> | null;
    readonly tags: ReadonlyArray<{
        readonly name: string | null;
        readonly tagId: number;
    }> | null;
    readonly " $refType": topicAdd_data$ref;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "topicAdd_data",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "lv2Section",
      "name": "sectionsList",
      "storageKey": "sectionsList(first:20)",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 20
        }
      ],
      "concreteType": "Section",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": "sectionId",
          "name": "id",
          "args": null,
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "parent",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": "tags",
      "name": "tagsList",
      "storageKey": null,
      "args": null,
      "concreteType": "Tag",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "ScalarField",
          "alias": "tagId",
          "name": "id",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
(node as any).hash = 'a773243a3301f8c8882ca43525dad8fd';
export default node;
