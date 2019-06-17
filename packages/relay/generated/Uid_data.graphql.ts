/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { otherDelivered_data$ref } from "./otherDelivered_data.graphql";
declare const _Uid_data$ref: unique symbol;
export type Uid_data$ref = typeof _Uid_data$ref;
export type Uid_data = {
    readonly otherUser: {
        readonly topicNum: any | null;
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
    readonly " $fragmentRefs": otherDelivered_data$ref;
    readonly " $refType": Uid_data$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Uid_data",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "otherCode",
      "type": "String!",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "otherDelivered",
      "type": "TopicCondition",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "otherUser",
      "name": "user",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "code",
          "variableName": "otherCode"
        }
      ],
      "concreteType": "User",
      "plural": false,
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
    },
    {
      "kind": "FragmentSpread",
      "name": "otherDelivered_data",
      "args": [
        {
          "kind": "Variable",
          "name": "condition",
          "variableName": "otherDelivered"
        }
      ]
    }
  ]
};
(node as any).hash = '673606dbd9fc0342f7620a29c917603e';
export default node;
