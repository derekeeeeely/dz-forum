/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateCommentInput = {
    readonly clientMutationId?: string | null;
    readonly patch: CommentPatch;
    readonly id: number;
};
export type CommentPatch = {
    readonly id?: number | null;
    readonly userCode?: string | null;
    readonly targetUser?: string | null;
    readonly topicId?: number | null;
    readonly parentId?: number | null;
    readonly content?: string | null;
    readonly mentioncodes?: ReadonlyArray<string | null> | null;
    readonly createdAt?: any | null;
    readonly updatedAt?: any | null;
    readonly deletedAt?: any | null;
    readonly path?: ReadonlyArray<number | null> | null;
    readonly read?: boolean | null;
};
export type mutations_topicDetailDeleteCommentMutationVariables = {
    readonly input: UpdateCommentInput;
};
export type mutations_topicDetailDeleteCommentMutationResponse = {
    readonly updateComment: {
        readonly comment: {
            readonly commentId: number;
        } | null;
    } | null;
};
export type mutations_topicDetailDeleteCommentMutation = {
    readonly response: mutations_topicDetailDeleteCommentMutationResponse;
    readonly variables: mutations_topicDetailDeleteCommentMutationVariables;
};



/*
mutation mutations_topicDetailDeleteCommentMutation(
  $input: UpdateCommentInput!
) {
  updateComment(input: $input) {
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
    "type": "UpdateCommentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateComment",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateCommentPayload",
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
    "name": "mutations_topicDetailDeleteCommentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "mutations_topicDetailDeleteCommentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "mutations_topicDetailDeleteCommentMutation",
    "id": "c28f15aac6b9159126c745e021d262e4",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = 'fc863507ef2080cf9f2e6e5775f8e506';
export default node;
