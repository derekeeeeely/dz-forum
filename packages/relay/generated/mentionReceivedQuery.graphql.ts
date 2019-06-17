/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { mention_data$ref } from "./mention_data.graphql";
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
export type mentionReceivedQueryVariables = {
    readonly condition?: MentionCondition | null;
    readonly count?: number | null;
    readonly cursor?: any | null;
};
export type mentionReceivedQueryResponse = {
    readonly " $fragmentRefs": mention_data$ref;
};
export type mentionReceivedQuery = {
    readonly response: mentionReceivedQueryResponse;
    readonly variables: mentionReceivedQueryVariables;
};



/*
query mentionReceivedQuery(
  $condition: MentionCondition
  $count: Int
  $cursor: Cursor
) {
  ...mention_data_47T3jf
}

fragment mention_data_47T3jf on Query {
  receivedMentions: mentions(first: $count, after: $cursor, condition: $condition) {
    edges {
      cursor
      node {
        mentionId: id
        topic {
          topicId: id
          title
        }
        updatedAt
        commentId
        read
        userByUserCode {
          userCode: code
          name
          nickname
          sex
          avatar
          age
          about
          signature
          unreadCommentNum
          unreadMentionNum
        }
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "condition",
    "type": "MentionCondition",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "Cursor",
    "defaultValue": null
  }
],
v1 = {
  "kind": "Variable",
  "name": "condition",
  "variableName": "condition"
},
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  (v1/*: any*/),
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "mentionReceivedQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "mention_data",
        "args": [
          (v1/*: any*/),
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "mentionReceivedQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "receivedMentions",
        "name": "mentions",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "MentionsConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "MentionsEdge",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Mention",
                "plural": false,
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
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": "receivedMentions",
        "name": "mentions",
        "args": (v2/*: any*/),
        "handle": "connection",
        "key": "mention_receivedMentions",
        "filters": [
          "condition"
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "mentionReceivedQuery",
    "id": "cd8eb38be6900b5a27fe5aaf6c72500c",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = 'f209e0b5614c63b7681765fd34a41db3';
export default node;
