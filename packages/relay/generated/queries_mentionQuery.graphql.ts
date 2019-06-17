/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type queries_mentionQueryVariables = {
    readonly keyword: string;
};
export type queries_mentionQueryResponse = {
    readonly getUserByKeywordList: ReadonlyArray<{
        readonly nickname: string | null;
        readonly name: string;
        readonly code: string;
    } | null> | null;
};
export type queries_mentionQuery = {
    readonly response: queries_mentionQueryResponse;
    readonly variables: queries_mentionQueryVariables;
};



/*
query queries_mentionQuery(
  $keyword: String!
) {
  getUserByKeywordList(keyword: $keyword) {
    nickname
    name
    code
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
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "getUserByKeywordList",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "keyword",
        "variableName": "keyword"
      }
    ],
    "concreteType": "User",
    "plural": true,
    "selections": [
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
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "code",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "queries_mentionQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "queries_mentionQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "queries_mentionQuery",
    "id": "d70910273602fa07726e3d885753be36",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = '61fa53353b16614e130751d86e44ab99';
export default node;
