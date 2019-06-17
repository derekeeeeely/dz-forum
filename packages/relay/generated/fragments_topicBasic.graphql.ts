/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _fragments_topicBasic$ref: unique symbol;
export type fragments_topicBasic$ref = typeof _fragments_topicBasic$ref;
export type fragments_topicBasic = {
    readonly topicId: number;
    readonly title: string | null;
    readonly content: string | null;
    readonly commentNum: any | null;
    readonly updatedAt: any;
    readonly createdAt: any;
    readonly likeNum: any | null;
    readonly tags: ReadonlyArray<string | null> | null;
    readonly section: {
        readonly serctionId: number;
        readonly name: string;
    } | null;
    readonly deletedAt: any | null;
    readonly user: {
        readonly userCode: string;
        readonly name: string;
        readonly nickname: string | null;
        readonly avatar: string | null;
        readonly sex: number | null;
        readonly age: number | null;
        readonly about: string | null;
        readonly signature: string | null;
    } | null;
    readonly " $refType": fragments_topicBasic$ref;
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
  "name": "fragments_topicBasic",
  "type": "Topic",
  "metadata": null,
  "argumentDefinitions": [],
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
      "name": "commentNum",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "createdAt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "likeNum",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "tags",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "section",
      "storageKey": null,
      "args": null,
      "concreteType": "Section",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": "serctionId",
          "name": "id",
          "args": null,
          "storageKey": null
        },
        (v0/*: any*/)
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
      "kind": "LinkedField",
      "alias": "user",
      "name": "userByUserCode",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": "userCode",
          "name": "code",
          "args": null,
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "nickname",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "avatar",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "sex",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "age",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "about",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "signature",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
(node as any).hash = '6ccac476832e0609e85cfea2c21efd5c';
export default node;
