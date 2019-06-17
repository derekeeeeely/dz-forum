/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { comment_data$ref } from "./comment_data.graphql";
export type commentsReceivedQueryVariables = {
    readonly userCode: string;
    readonly count?: number | null;
    readonly cursor?: any | null;
};
export type commentsReceivedQueryResponse = {
    readonly " $fragmentRefs": comment_data$ref;
};
export type commentsReceivedQuery = {
    readonly response: commentsReceivedQueryResponse;
    readonly variables: commentsReceivedQueryVariables;
};



/*
query commentsReceivedQuery(
  $userCode: String!
  $count: Int
  $cursor: Cursor
) {
  ...comment_data_1ZoC9M
}

fragment comment_data_1ZoC9M on Query {
  receivedComments: getUserReceivedComments(first: $count, after: $cursor, usercode: $userCode) {
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
    "name": "userCode",
    "type": "String!",
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
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  {
    "kind": "Variable",
    "name": "usercode",
    "variableName": "userCode"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "commentsReceivedQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "comment_data",
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          },
          {
            "kind": "Variable",
            "name": "userCode",
            "variableName": "userCode"
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "commentsReceivedQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "receivedComments",
        "name": "getUserReceivedComments",
        "storageKey": null,
        "args": (v1/*: any*/),
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
        "alias": "receivedComments",
        "name": "getUserReceivedComments",
        "args": (v1/*: any*/),
        "handle": "connection",
        "key": "comment_receivedComments",
        "filters": [
          "usercode"
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "commentsReceivedQuery",
    "id": "240844c18144a6e62ed6aa4276c708ba",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = '469712fbf1d31ef7f41f661e92a77350';
export default node;
