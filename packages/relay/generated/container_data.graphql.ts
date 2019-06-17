/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _container_data$ref: unique symbol;
export type container_data$ref = typeof _container_data$ref;
export type container_data = {
    readonly user: {
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
    } | null;
    readonly " $refType": container_data$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "container_data",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "userCode",
      "type": "String!",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "code",
          "variableName": "userCode"
        }
      ],
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
    }
  ]
};
(node as any).hash = 'ed6bff771ff5125d1e6279ad4125cd47';
export default node;
