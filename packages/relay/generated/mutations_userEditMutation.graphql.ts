/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateUserInput = {
    readonly clientMutationId?: string | null;
    readonly patch: UserPatch;
    readonly code: string;
};
export type UserPatch = {
    readonly id?: number | null;
    readonly name?: string | null;
    readonly code?: string | null;
    readonly sex?: number | null;
    readonly age?: number | null;
    readonly birthday?: any | null;
    readonly avatar?: string | null;
    readonly nickname?: string | null;
    readonly about?: string | null;
    readonly signature?: string | null;
    readonly topicNum?: any | null;
    readonly commentNum?: any | null;
    readonly likeNum?: any | null;
    readonly receivedLikeNum?: any | null;
    readonly receivedCommentNum?: any | null;
    readonly isonline?: boolean | null;
    readonly lastOnlineIp?: string | null;
    readonly lastOnlineTime?: any | null;
    readonly createdAt?: any | null;
    readonly updatedAt?: any | null;
    readonly unreadCommentNum?: any | null;
    readonly unreadMentionNum?: any | null;
    readonly receivedMentionNum?: any | null;
};
export type mutations_userEditMutationVariables = {
    readonly input: UpdateUserInput;
};
export type mutations_userEditMutationResponse = {
    readonly updateUser: {
        readonly user: {
            readonly code: string;
        } | null;
    } | null;
};
export type mutations_userEditMutation = {
    readonly response: mutations_userEditMutationResponse;
    readonly variables: mutations_userEditMutationVariables;
};



/*
mutation mutations_userEditMutation(
  $input: UpdateUserInput!
) {
  updateUser(input: $input) {
    user {
      code
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateUserPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "code",
            "args": null,
            "storageKey": null
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
    "name": "mutations_userEditMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "mutations_userEditMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "mutations_userEditMutation",
    "id": "d4093a09e3999878a1b7d00ea88b5a9b",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = 'f9fa059b8275886039da71474a32f346';
export default node;
