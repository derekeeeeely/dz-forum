/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type LikeTopicInput = {
    readonly clientMutationId?: string | null;
    readonly topicid?: number | null;
    readonly usercode?: string | null;
    readonly type?: string | null;
};
export type mutations_topicLikeMutationVariables = {
    readonly input: LikeTopicInput;
    readonly topicId: number;
};
export type mutations_topicLikeMutationResponse = {
    readonly likeTopic: {
        readonly query: {
            readonly topic: {
                readonly likeNum: any | null;
            } | null;
        } | null;
    } | null;
};
export type mutations_topicLikeMutation = {
    readonly response: mutations_topicLikeMutationResponse;
    readonly variables: mutations_topicLikeMutationVariables;
};



/*
mutation mutations_topicLikeMutation(
  $input: LikeTopicInput!
  $topicId: Int!
) {
  likeTopic(input: $input) {
    query {
      topic(id: $topicId) {
        likeNum
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
    "type": "LikeTopicInput!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "topicId",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "likeTopic",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "LikeTopicPayload",
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
            "name": "topic",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "topicId"
              }
            ],
            "concreteType": "Topic",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "likeNum",
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
    "name": "mutations_topicLikeMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "mutations_topicLikeMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "mutations_topicLikeMutation",
    "id": "c14594462c8b827e5eb52aac179b7f1a",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = '82790e6aa8269bb8af8c1aa1fc9e2988';
export default node;
