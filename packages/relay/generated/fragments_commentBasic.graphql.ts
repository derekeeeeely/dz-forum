/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _fragments_commentBasic$ref: unique symbol;
export type fragments_commentBasic$ref = typeof _fragments_commentBasic$ref;
export type fragments_commentBasic = {
    readonly commentId: number;
    readonly content: string | null;
    readonly updatedAt: any;
    readonly topic: {
        readonly topicId: number;
        readonly title: string | null;
    } | null;
    readonly deletedAt: any | null;
    readonly parentId: number | null;
    readonly read: boolean | null;
    readonly " $refType": fragments_commentBasic$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "fragments_commentBasic",
  "type": "Comment",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": "commentId",
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "content",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "updatedAt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "topic",
      "storageKey": null,
      "args": null,
      "concreteType": "Topic",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": "topicId",
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "title",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "deletedAt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "parentId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "read",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '077bea599365da5d1c4e9442013ead69';
export default node;
