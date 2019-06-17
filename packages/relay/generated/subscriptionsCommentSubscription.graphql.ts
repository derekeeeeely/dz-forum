/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type subscriptionsCommentSubscriptionVariables = {
    readonly topicName: string;
    readonly userCode: string;
};
export type subscriptionsCommentSubscriptionResponse = {
    readonly listen: {
        readonly query: {
            readonly user: {
                readonly unreadCommentNum: any | null;
                readonly unreadMentionNum: any | null;
            } | null;
            readonly getUserReceivedCommentsList: ReadonlyArray<{
                readonly commentId: number;
                readonly userByUserCode: {
                    readonly name: string;
                } | null;
                readonly topic: {
                    readonly title: string | null;
                    readonly topicId: number;
                } | null;
            } | null> | null;
        } | null;
    };
};
export type subscriptionsCommentSubscription = {
    readonly response: subscriptionsCommentSubscriptionResponse;
    readonly variables: subscriptionsCommentSubscriptionVariables;
};



/*
subscription subscriptionsCommentSubscription(
  $topicName: String!
  $userCode: String!
) {
  listen(topic: $topicName) {
    query {
      user(code: $userCode) {
        unreadCommentNum
        unreadMentionNum
      }
      getUserReceivedCommentsList(usercode: $userCode, first: 1) {
        commentId: id
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
    "name": "topicName",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "userCode",
    "type": "String!",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "getUserReceivedCommentsList",
            "storageKey": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 1
              },
              {
                "kind": "Variable",
                "name": "usercode",
                "variableName": "userCode"
              }
            ],
            "concreteType": "Comment",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": "commentId",
                "name": "id",
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
    "name": "subscriptionsCommentSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "subscriptionsCommentSubscription",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "subscriptionsCommentSubscription",
    "id": "ec3d23deee1a3408d24fb3178351cebe",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = 'aa0b00d5ccc778f03327331b3a3fd560';
export default node;
