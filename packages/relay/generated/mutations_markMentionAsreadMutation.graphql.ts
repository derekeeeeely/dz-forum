/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type MarkMentionAsreadInput = {
    readonly clientMutationId?: string | null;
    readonly mentionid?: number | null;
    readonly usercode?: string | null;
};
export type mutations_markMentionAsreadMutationVariables = {
    readonly input: MarkMentionAsreadInput;
    readonly userCode: string;
};
export type mutations_markMentionAsreadMutationResponse = {
    readonly markMentionAsread: {
        readonly query: {
            readonly user: {
                readonly unreadMentionNum: any | null;
            } | null;
        } | null;
    } | null;
};
export type mutations_markMentionAsreadMutation = {
    readonly response: mutations_markMentionAsreadMutationResponse;
    readonly variables: mutations_markMentionAsreadMutationVariables;
};



/*
mutation mutations_markMentionAsreadMutation(
  $input: MarkMentionAsreadInput!
  $userCode: String!
) {
  markMentionAsread(input: $input) {
    query {
      user(code: $userCode) {
        unreadMentionNum
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
    "type": "MarkMentionAsreadInput!",
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
    "name": "markMentionAsread",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "MarkMentionAsreadPayload",
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
                "name": "unreadMentionNum",
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
    "name": "mutations_markMentionAsreadMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "mutations_markMentionAsreadMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "mutations_markMentionAsreadMutation",
    "id": "6bcef7d497dc435e150a88932ab6f2f2",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = '95f88629cd75295035251893989f6024';
export default node;
