/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _fragments_mentionBasic$ref: unique symbol;
export type fragments_mentionBasic$ref = typeof _fragments_mentionBasic$ref;
export type fragments_mentionBasic = {
    readonly mentionId: number;
    readonly topic: {
        readonly topicId: number;
        readonly title: string | null;
    } | null;
    readonly updatedAt: any;
    readonly commentId: number | null;
    readonly read: boolean | null;
    readonly " $refType": fragments_mentionBasic$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "fragments_mentionBasic",
  "type": "Mention",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": "mentionId",
      "name": "id",
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
      "name": "updatedAt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "commentId",
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
(node as any).hash = 'e6d96d1c75ff0b9552b8fa26f0e590fd';
export default node;
