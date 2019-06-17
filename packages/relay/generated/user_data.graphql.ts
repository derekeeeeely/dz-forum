/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { comment_data$ref } from "./comment_data.graphql";
import { delivered_data$ref } from "./delivered_data.graphql";
import { mention_data$ref } from "./mention_data.graphql";
import { participated_data$ref } from "./participated_data.graphql";
declare const _user_data$ref: unique symbol;
export type user_data$ref = typeof _user_data$ref;
export type user_data = {
    readonly user: {
        readonly topicNum: any | null;
        readonly commentNum: any | null;
        readonly receivedCommentNum: any | null;
        readonly receivedMentionNum: any | null;
        readonly unreadCommentNum: any | null;
        readonly unreadMentionNum: any | null;
        readonly avatar: string | null;
        readonly nickname: string | null;
        readonly name: string;
    } | null;
    readonly " $fragmentRefs": delivered_data$ref & participated_data$ref & comment_data$ref & mention_data$ref;
    readonly " $refType": user_data$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "user_data",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "userCode",
      "type": "String!",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "delivered",
      "type": "TopicCondition",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "participated",
      "type": "CommentCondition",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "mentioned",
      "type": "MentionCondition",
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
    },
    {
      "kind": "FragmentSpread",
      "name": "delivered_data",
      "args": [
        {
          "kind": "Variable",
          "name": "condition",
          "variableName": "delivered"
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "participated_data",
      "args": [
        {
          "kind": "Variable",
          "name": "condition",
          "variableName": "participated"
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "comment_data",
      "args": [
        {
          "kind": "Variable",
          "name": "userCode",
          "variableName": "userCode"
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "mention_data",
      "args": [
        {
          "kind": "Variable",
          "name": "condition",
          "variableName": "mentioned"
        }
      ]
    }
  ]
};
(node as any).hash = 'c0c97607122c218ba8b5ac588c638935';
export default node;
