/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _fragments_userBasic$ref: unique symbol;
export type fragments_userBasic$ref = typeof _fragments_userBasic$ref;
export type fragments_userBasic = {
    readonly userCode: string;
    readonly name: string;
    readonly nickname: string | null;
    readonly sex: number | null;
    readonly avatar: string | null;
    readonly age: number | null;
    readonly about: string | null;
    readonly signature: string | null;
    readonly unreadCommentNum: any | null;
    readonly unreadMentionNum: any | null;
    readonly " $refType": fragments_userBasic$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "fragments_userBasic",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": "userCode",
      "name": "code",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
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
      "name": "sex",
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "unreadCommentNum",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "unreadMentionNum",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '0087e40fdbbd0a5355a185f70015e37e';
export default node;
