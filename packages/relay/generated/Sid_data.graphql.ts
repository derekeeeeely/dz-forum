/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _Sid_data$ref: unique symbol;
export type Sid_data$ref = typeof _Sid_data$ref;
export type Sid_data = {
    readonly section: {
        readonly sectionId: number;
        readonly level: number | null;
        readonly parent: number | null;
        readonly name: string;
        readonly sort: number | null;
        readonly description: string | null;
        readonly avatar: string | null;
    } | null;
    readonly topics: {
        readonly edges: ReadonlyArray<{
            readonly cursor: any | null;
            readonly node: {
                readonly topicId: number;
                readonly title: string | null;
                readonly content: string | null;
                readonly commentNum: any | null;
                readonly updatedAt: any;
                readonly createdAt: any;
                readonly likeNum: any | null;
                readonly tags: ReadonlyArray<string | null> | null;
                readonly section: {
                    readonly serctionId: number;
                    readonly name: string;
                } | null;
                readonly deletedAt: any | null;
                readonly user: {
                    readonly userCode: string;
                    readonly name: string;
                    readonly nickname: string | null;
                    readonly avatar: string | null;
                    readonly sex: number | null;
                    readonly age: number | null;
                    readonly about: string | null;
                    readonly signature: string | null;
                } | null;
                readonly userByUserCode: {
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
            } | null;
        }>;
    } | null;
    readonly " $refType": Sid_data$ref;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": "userCode",
  "name": "code",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "nickname",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sex",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "age",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "about",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "signature",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Sid_data",
  "type": "Query",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "topics"
        ]
      }
    ]
  },
  "argumentDefinitions": [
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
      "defaultValue": 10
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
    },
    {
      "kind": "LocalArgument",
      "name": "orderBy",
      "type": "[TopicsOrderBy!]",
      "defaultValue": [
        "UPDATED_AT_DESC"
      ]
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "section",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "id"
        }
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
        (v0/*: any*/),
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
        (v1/*: any*/)
      ]
    },
    {
      "kind": "LinkedField",
      "alias": "topics",
      "name": "__section_topics_connection",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "condition",
          "variableName": "condition"
        },
        {
          "kind": "Variable",
          "name": "orderBy",
          "variableName": "orderBy"
        }
      ],
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
                    (v0/*: any*/)
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
                    (v2/*: any*/),
                    (v0/*: any*/),
                    (v3/*: any*/),
                    (v1/*: any*/),
                    (v4/*: any*/),
                    (v5/*: any*/),
                    (v6/*: any*/),
                    (v7/*: any*/)
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
                    (v2/*: any*/),
                    (v0/*: any*/),
                    (v3/*: any*/),
                    (v4/*: any*/),
                    (v1/*: any*/),
                    (v5/*: any*/),
                    (v6/*: any*/),
                    (v7/*: any*/),
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
    }
  ]
};
})();
(node as any).hash = 'bfd364c38ac9bc904fab4d39376060f4';
export default node;
