/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _home_data$ref: unique symbol;
export type home_data$ref = typeof _home_data$ref;
export type home_data = {
    readonly hotTopics: {
        readonly nodes: ReadonlyArray<{
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
        } | null>;
    } | null;
    readonly recentTopics: {
        readonly nodes: ReadonlyArray<{
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
        } | null>;
    } | null;
    readonly sectionsList: ReadonlyArray<{
        readonly sectionId: number;
        readonly level: number | null;
        readonly parent: number | null;
        readonly name: string;
        readonly sort: number | null;
        readonly description: string | null;
        readonly avatar: string | null;
    }> | null;
    readonly homeStatistics: ReadonlyArray<any | null> | null;
    readonly " $refType": home_data$ref;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "nodes",
    "storageKey": null,
    "args": null,
    "concreteType": "Topic",
    "plural": true,
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
          (v1/*: any*/)
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
          {
            "kind": "ScalarField",
            "alias": "userCode",
            "name": "code",
            "args": null,
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "nickname",
            "args": null,
            "storageKey": null
          },
          (v2/*: any*/),
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
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Fragment",
  "name": "home_data",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "hotTopics",
      "name": "topics",
      "storageKey": "topics(first:10,orderBy:\"COMMENT_NUM_DESC\")",
      "args": [
        (v0/*: any*/),
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": "COMMENT_NUM_DESC"
        }
      ],
      "concreteType": "TopicsConnection",
      "plural": false,
      "selections": (v3/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": "recentTopics",
      "name": "topics",
      "storageKey": "topics(first:10,orderBy:\"CREATED_AT_DESC\")",
      "args": [
        (v0/*: any*/),
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": "CREATED_AT_DESC"
        }
      ],
      "concreteType": "TopicsConnection",
      "plural": false,
      "selections": (v3/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sectionsList",
      "storageKey": "sectionsList(first:10)",
      "args": [
        (v0/*: any*/)
      ],
      "concreteType": "Section",
      "plural": true,
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
        (v1/*: any*/),
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
        (v2/*: any*/)
      ]
    },
    {
      "kind": "ScalarField",
      "alias": "homeStatistics",
      "name": "getHomeStatisticsList",
      "args": null,
      "storageKey": null
    }
  ]
};
})();
(node as any).hash = '77bb88e1eebeacc826c925a91e7c5191';
export default node;
