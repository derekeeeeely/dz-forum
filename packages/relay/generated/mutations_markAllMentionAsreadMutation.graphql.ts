/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type MarkAllMentionAsreadInput = {
    readonly clientMutationId?: string | null;
    readonly usercode?: string | null;
};
export type mutations_markAllMentionAsreadMutationVariables = {
    readonly input: MarkAllMentionAsreadInput;
};
export type mutations_markAllMentionAsreadMutationResponse = {
    readonly markAllMentionAsread: {
        readonly clientMutationId: string | null;
    } | null;
};
export type mutations_markAllMentionAsreadMutation = {
    readonly response: mutations_markAllMentionAsreadMutationResponse;
    readonly variables: mutations_markAllMentionAsreadMutationVariables;
};



/*
mutation mutations_markAllMentionAsreadMutation(
  $input: MarkAllMentionAsreadInput!
) {
  markAllMentionAsread(input: $input) {
    clientMutationId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "MarkAllMentionAsreadInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "markAllMentionAsread",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "MarkAllMentionAsreadPayload",
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
    "name": "mutations_markAllMentionAsreadMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "mutations_markAllMentionAsreadMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "mutations_markAllMentionAsreadMutation",
    "id": "89a75f3778f937c685d25de31e935d76",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = '281983ae9065e000e08ad184aa94beeb';
export default node;
