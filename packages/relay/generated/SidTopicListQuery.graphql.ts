/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { Sid_data$ref } from "./Sid_data.graphql";
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
export type SidTopicListQueryVariables = {
    readonly id: number;
    readonly count?: number | null;
    readonly cursor?: any | null;
    readonly condition?: TopicCondition | null;
};
export type SidTopicListQueryResponse = {
    readonly " $fragmentRefs": Sid_data$ref;
};
export type SidTopicListQuery = {
    readonly response: SidTopicListQueryResponse;
    readonly variables: SidTopicListQueryVariables;
};



/*
query SidTopicListQuery(
  $id: Int!
  $count: Int
  $cursor: Cursor
  $condition: TopicCondition
) {
  ...Sid_data_4oJdWl
}

fragment Sid_data_4oJdWl on Query {
  section(id: $id) {
    sectionId: id
    level
    parent
    name
    sort
    description
    avatar
  }
  topics(first: $count, after: $cursor, condition: $condition, orderBy: [UPDATED_AT_DESC]) {
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
    "name": "id",
    "type": "Int!",
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
v2 = {
  "kind": "Variable",
  "name": "id",
  "variableName": "id"
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v5 = [
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
],
v6 = {
  "kind": "ScalarField",
  "alias": "userCode",
  "name": "code",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "nickname",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sex",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "age",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "about",
  "args": null,
  "storageKey": null
},
v11 = {
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
    "name": "SidTopicListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Sid_data",
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
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SidTopicListQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "section",
        "storageKey": null,
        "args": [
          (v2/*: any*/)
        ],
        "concreteType": "Section",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": "sectionId",
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "level",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "parent",
            "args": null,
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "sort",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          (v4/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "topics",
        "storageKey": null,
        "args": (v5/*: any*/),
        "concreteType": "TopicsConnection",
        "plural": false,
        "selections": [
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
                      (v6/*: any*/),
                      (v3/*: any*/),
                      (v7/*: any*/),
                      (v4/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/)
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
                      (v6/*: any*/),
                      (v3/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v4/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
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
        "alias": null,
        "name": "topics",
        "args": (v5/*: any*/),
        "handle": "connection",
        "key": "section_topics",
        "filters": [
          "condition",
          "orderBy"
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "SidTopicListQuery",
    "id": "1893da4c82b6785e2ec2763a72cf88eb",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = '4d5cbadad1bb6dfacfa3c921a46e165c';
export default node;
