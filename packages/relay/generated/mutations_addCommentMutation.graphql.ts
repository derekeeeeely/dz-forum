/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type CreateCommentInput = {
    readonly clientMutationId?: string | null;
    readonly comment: CommentInput;
};
export type CommentInput = {
    readonly id?: number | null;
    readonly userCode?: string | null;
    readonly topicId: number;
    readonly parentId?: number | null;
    readonly content?: string | null;
    readonly createdAt?: any | null;
    readonly updatedAt?: any | null;
    readonly deletedAt?: any | null;
    readonly path?: ReadonlyArray<number | null> | null;
    readonly read?: boolean | null;
    readonly targetUser?: string | null;
    readonly mentioncodes?: ReadonlyArray<string | null> | null;
};
export type mutations_addCommentMutationVariables = {
    readonly input: CreateCommentInput;
};
export type mutations_addCommentMutationResponse = {
    readonly createComment: {
        readonly comment: {
            readonly commentId: number;
        } | null;
    } | null;
};
export type mutations_addCommentMutation = {
    readonly response: mutations_addCommentMutationResponse;
    readonly variables: mutations_addCommentMutationVariables;
};



/*
mutation mutations_addCommentMutation(
  $input: CreateCommentInput!
) {
  createComment(input: $input) {
    comment {
      commentId: id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateCommentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createComment",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateCommentPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "comment",
        "storageKey": null,
        "args": null,
        "concreteType": "Comment",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": "commentId",
            "name": "id",
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
    "name": "mutations_addCommentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "mutations_addCommentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "mutations_addCommentMutation",
    "id": "359390f69014e2ced73f03643b23b04c",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = 'bd73a330bde3e1b9363f86d07a462be3';
export default node;
