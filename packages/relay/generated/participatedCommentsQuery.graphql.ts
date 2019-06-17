/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { participated_data$ref } from "./participated_data.graphql";
export type CommentCondition = {
    readonly id?: number | null;
    readonly userCode?: string | null;
    readonly topicId?: number | null;
    readonly parentId?: number | null;
    readonly content?: string | null;
    readonly createdAt?: any | null;
    readonly updatedAt?: any | null;
    readonly deletedAt?: any | null;
    readonly path?: ReadonlyArray<number | null> | null;
    readonly read?: boolean | null;
    readonly targetUser?: string | null;
    readonly mentioncodes?: ReadonlyArray<string | null> | null;
};
export type participatedCommentsQueryVariables = {
    readonly count?: number | null;
    readonly cursor?: any | null;
    readonly condition?: CommentCondition | null;
};
export type participatedCommentsQueryResponse = {
    readonly " $fragmentRefs": participated_data$ref;
};
export type participatedCommentsQuery = {
    readonly response: participatedCommentsQueryResponse;
    readonly variables: participatedCommentsQueryVariables;
};



/*
query participatedCommentsQuery(
  $count: Int
  $cursor: Cursor
  $condition: CommentCondition
) {
  ...participated_data_47T3jf
}

fragment participated_data_47T3jf on Query {
  participatedComments: comments(first: $count, after: $cursor, condition: $condition, orderBy: [UPDATED_AT_DESC]) {
    edges {
      cursor
      node {
        commentId: id
        content
        updatedAt
        topic {
          topicId: id
          title
        }
        deletedAt
        parentId
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
    "name": "count",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "Cursor",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "condition",
    "type": "CommentCondition",
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
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": [
      "UPDATED_AT_DESC"
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "participatedCommentsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "participated_data",
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
    "name": "participatedCommentsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "participatedComments",
        "name": "comments",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "CommentsConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "CommentsEdge",
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
                "concreteType": "Comment",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": "commentId",
                    "name": "id",
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
                    "name": "updatedAt",
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
                    "name": "deletedAt",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "parentId",
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
        "alias": "participatedComments",
        "name": "comments",
        "args": (v2/*: any*/),
        "handle": "connection",
        "key": "participated_participatedComments",
        "filters": [
          "condition",
          "orderBy"
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "participatedCommentsQuery",
    "id": "67f7ba4e43f2e3d45339e136b511e987",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = '4d787a60fbb69c54da4f382e809a6213';
export default node;
