/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { delivered_data$ref } from "./delivered_data.graphql";
export type TopicCondition = {
    readonly id?: number | null;
    readonly userCode?: string | null;
    readonly sectionId?: number | null;
    readonly title?: string | null;
    readonly content?: string | null;
    readonly likeNum?: any | null;
    readonly commentNum?: any | null;
    readonly type?: number | null;
    readonly status?: number | null;
    readonly createdAt?: any | null;
    readonly updatedAt?: any | null;
    readonly deletedAt?: any | null;
    readonly tags?: ReadonlyArray<string | null> | null;
    readonly mentioncodes?: ReadonlyArray<string | null> | null;
};
export type otherDeliveredTopicListQueryVariables = {
    readonly count?: number | null;
    readonly cursor?: any | null;
    readonly condition?: TopicCondition | null;
};
export type otherDeliveredTopicListQueryResponse = {
    readonly " $fragmentRefs": delivered_data$ref;
};
export type otherDeliveredTopicListQuery = {
    readonly response: otherDeliveredTopicListQueryResponse;
    readonly variables: otherDeliveredTopicListQueryVariables;
};



/*
query otherDeliveredTopicListQuery(
  $count: Int
  $cursor: Cursor
  $condition: TopicCondition
) {
  ...delivered_data_47T3jf
}

fragment delivered_data_47T3jf on Query {
  deliveredTopics: topics(first: $count, after: $cursor, condition: $condition, orderBy: [CREATED_AT_DESC]) {
    totalCount
    edges {
      cursor
      node {
        topicId: id
        title
        content
        commentNum
        updatedAt
        createdAt
        likeNum
        tags
        section {
          serctionId: id
          name
        }
        deletedAt
        user: userByUserCode {
          userCode: code
          name
          nickname
          avatar
          sex
          age
          about
          signature
        }
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
    "type": "TopicCondition",
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
      "CREATED_AT_DESC"
    ]
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": "userCode",
  "name": "code",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "nickname",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sex",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "age",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "about",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "signature",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "otherDeliveredTopicListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "delivered_data",
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
    "name": "otherDeliveredTopicListQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "deliveredTopics",
        "name": "topics",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "TopicsConnection",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalCount",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "TopicsEdge",
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
                    "name": "commentNum",
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
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "createdAt",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "likeNum",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "tags",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "section",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Section",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": "serctionId",
                        "name": "id",
                        "args": null,
                        "storageKey": null
                      },
                      (v3/*: any*/)
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
                    "kind": "LinkedField",
                    "alias": "user",
                    "name": "userByUserCode",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v3/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/)
                    ]
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
                      (v4/*: any*/),
                      (v3/*: any*/),
                      (v5/*: any*/),
                      (v7/*: any*/),
                      (v6/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
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
        "alias": "deliveredTopics",
        "name": "topics",
        "args": (v2/*: any*/),
        "handle": "connection",
        "key": "delivered_deliveredTopics",
        "filters": [
          "condition",
          "orderBy"
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "otherDeliveredTopicListQuery",
    "id": "212cc461384a191798caeba602a35d6e",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = 'b2a7dd07146533c8471fcd3d5612b73f';
export default node;
