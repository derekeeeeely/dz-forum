/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type queries_searchQueryVariables = {
    readonly keyword: string;
};
export type queries_searchQueryResponse = {
    readonly getFullTextSearch: {
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
    };
};
export type queries_searchQuery = {
    readonly response: queries_searchQueryResponse;
    readonly variables: queries_searchQueryVariables;
};



/*
query queries_searchQuery(
  $keyword: String!
) {
  getFullTextSearch(keyword: $keyword) {
    nodes {
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
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "keyword",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "getFullTextSearch",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "keyword",
        "variableName": "keyword"
      }
    ],
    "concreteType": "TopicsConnection",
    "plural": false,
    "selections": [
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
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "queries_searchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "queries_searchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "queries_searchQuery",
    "id": "a0db64d5caa450f2082fdf3d8df19319",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = 'e19bcee6cf2a8c88803ca1a83d25d35b';
export default node;
