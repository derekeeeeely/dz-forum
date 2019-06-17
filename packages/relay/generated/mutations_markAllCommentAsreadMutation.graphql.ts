/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type MarkAllCommentAsreadInput = {
    readonly clientMutationId?: string | null;
    readonly usercode?: string | null;
};
export type mutations_markAllCommentAsreadMutationVariables = {
    readonly input: MarkAllCommentAsreadInput;
};
export type mutations_markAllCommentAsreadMutationResponse = {
    readonly markAllCommentAsread: {
        readonly clientMutationId: string | null;
    } | null;
};
export type mutations_markAllCommentAsreadMutation = {
    readonly response: mutations_markAllCommentAsreadMutationResponse;
    readonly variables: mutations_markAllCommentAsreadMutationVariables;
};



/*
mutation mutations_markAllCommentAsreadMutation(
  $input: MarkAllCommentAsreadInput!
) {
  markAllCommentAsread(input: $input) {
    clientMutationId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "MarkAllCommentAsreadInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "markAllCommentAsread",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "MarkAllCommentAsreadPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
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
    "name": "mutations_markAllCommentAsreadMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "mutations_markAllCommentAsreadMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "mutations_markAllCommentAsreadMutation",
    "id": "c6bfb4bf155de180084ae3f2c4fa4a35",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = 'f547a33ea687ff887ef214a26221afc4';
export default node;
