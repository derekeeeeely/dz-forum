/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type MarkCommentAsreadInput = {
    readonly clientMutationId?: string | null;
    readonly commentid?: number | null;
    readonly usercode?: string | null;
};
export type mutations_markCommentAsreadMutationVariables = {
    readonly input: MarkCommentAsreadInput;
    readonly userCode: string;
};
export type mutations_markCommentAsreadMutationResponse = {
    readonly markCommentAsread: {
        readonly query: {
            readonly user: {
                readonly unreadCommentNum: any | null;
            } | null;
        } | null;
    } | null;
};
export type mutations_markCommentAsreadMutation = {
    readonly response: mutations_markCommentAsreadMutationResponse;
    readonly variables: mutations_markCommentAsreadMutationVariables;
};



/*
mutation mutations_markCommentAsreadMutation(
  $input: MarkCommentAsreadInput!
  $userCode: String!
) {
  markCommentAsread(input: $input) {
    query {
      user(code: $userCode) {
        unreadCommentNum
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "MarkCommentAsreadInput!",
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
    "name": "markCommentAsread",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "MarkCommentAsreadPayload",
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
    "name": "mutations_markCommentAsreadMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "mutations_markCommentAsreadMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "mutations_markCommentAsreadMutation",
    "id": "99e6216998d2416d7283d9ab15bdff4e",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = '8fca97b3fa3252a8ab17a3e45b6cf48e';
export default node;
