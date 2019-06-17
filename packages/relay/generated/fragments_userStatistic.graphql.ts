/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _fragments_userStatistic$ref: unique symbol;
export type fragments_userStatistic$ref = typeof _fragments_userStatistic$ref;
export type fragments_userStatistic = {
    readonly topicNum: any | null;
    readonly commentNum: any | null;
    readonly receivedCommentNum: any | null;
    readonly receivedMentionNum: any | null;
    readonly unreadCommentNum: any | null;
    readonly unreadMentionNum: any | null;
    readonly avatar: string | null;
    readonly nickname: string | null;
    readonly name: string;
    readonly " $refType": fragments_userStatistic$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "fragments_userStatistic",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "topicNum",
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
      "name": "receivedCommentNum",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "receivedMentionNum",
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
      "name": "nickname",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '55747d98bdcc052869a04b30ef9b873f';
export default node;
