/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type MentionCondition = {
    readonly id?: number | null;
    readonly userCode?: string | null;
    readonly targetUser?: string | null;
    readonly topicId?: number | null;
    readonly parentId?: number | null;
    readonly createdAt?: any | null;
    readonly updatedAt?: any | null;
    readonly deletedAt?: any | null;
    readonly commentId?: number | null;
    readonly read?: boolean | null;
};
export type subscriptionsMentionSubscriptionVariables = {
    readonly userCode: string;
    readonly topicName: string;
    readonly condition?: MentionCondition | null;
};
export type subscriptionsMentionSubscriptionResponse = {
    readonly listen: {
        readonly query: {
            readonly user: {
                readonly unreadMentionNum: any | null;
                readonly unreadCommentNum: any | null;
            } | null;
            readonly getUserReceivedMentionsList: ReadonlyArray<{
                readonly commentId: number | null;
                readonly userByUserCode: {
                    readonly name: string;
                } | null;
                readonly topic: {
                    readonly title: string | null;
                    readonly topicId: number;
                } | null;
            }> | null;
        } | null;
    };
};
export type subscriptionsMentionSubscription = {
    readonly response: subscriptionsMentionSubscriptionResponse;
    readonly variables: subscriptionsMentionSubscriptionVariables;
};



/*
subscription subscriptionsMentionSubscription(
  $userCode: String!
  $topicName: String!
  $condition: MentionCondition
) {
  listen(topic: $topicName) {
    query {
      user(code: $userCode) {
        unreadMentionNum
        unreadCommentNum
      }
      getUserReceivedMentionsList: mentionsList(first: 1, condition: $condition, orderBy: CREATED_AT_DESC) {
        commentId
        userByUserCode {
          name
        }
        topic {
          title
          topicId: id
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userCode",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "topicName",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "condition",
    "type": "MentionCondition",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "listen",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "topic",
        "variableName": "topicName"
      }
    ],
    "concreteType": "ListenPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "query",
        "storageKey": null,
        "args": null,
        "concreteType": "Query",
        "plural": false,
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
                "name": "unreadMentionNum",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "unreadCommentNum",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "getUserReceivedMentionsList",
            "name": "mentionsList",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "condition",
                "variableName": "condition"
              },
              {
                "kind": "Literal",
                "name": "first",
                "value": 1
              },
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": "CREATED_AT_DESC"
              }
            ],
            "concreteType": "Mention",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "commentId",
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
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  }
                ]
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
                    "alias": null,
                    "name": "title",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": "topicId",
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "subscriptionsMentionSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "subscriptionsMentionSubscription",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "subscriptionsMentionSubscription",
    "id": "4e2e588aff692c17c45dc39915cc8598",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = 'd06e93ad8b516b4abb6ff9ff419f4ff8';
export default node;
