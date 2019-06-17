/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { comments_data$ref } from "./comments_data.graphql";
declare const _Tid_data$ref: unique symbol;
export type Tid_data$ref = typeof _Tid_data$ref;
export type Tid_data = {
    readonly topic: {
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
        readonly userByUserCode: {
            readonly userCode: string;
            readonly name: string;
            readonly nickname: string | null;
            readonly sex: number | null;
            readonly avatar: string | null;
            readonly age: number | null;
            readonly about: string | null;
            readonly signature: string | null;
            readonly unreadCommentNum: any | null;
            readonly unreadMentionNum: any | null;
        } | null;
    } | null;
    readonly likesList: ReadonlyArray<{
        readonly topicId: number;
        readonly userByUserCode: {
            readonly avatar: string | null;
        } | null;
    }> | null;
    readonly " $fragmentRefs": comments_data$ref;
    readonly " $refType": Tid_data$ref;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": "userCode",
  "name": "code",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "nickname",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sex",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "age",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "about",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "signature",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Tid_data",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "id",
      "type": "Int!",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "likes",
      "type": "LikeCondition",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "topic",
      "storageKey": null,
      "args": (v0/*: any*/),
      "concreteType": "Topic",
      "plural": false,
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
            (v2/*: any*/),
            (v1/*: any*/),
            (v3/*: any*/),
            (v4/*: any*/),
            (v5/*: any*/),
            (v6/*: any*/),
            (v7/*: any*/),
            (v8/*: any*/)
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "userByUserCode",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            (v1/*: any*/),
            (v3/*: any*/),
            (v5/*: any*/),
            (v4/*: any*/),
            (v6/*: any*/),
            (v7/*: any*/),
            (v8/*: any*/),
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "unreadCommentNum",
              "args": null,
              "storageKey": null
            },
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
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "likesList",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "condition",
          "variableName": "likes"
        },
        {
          "kind": "Literal",
          "name": "first",
          "value": 1
        }
      ],
      "concreteType": "Like",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "topicId",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "userByUserCode",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": [
            (v4/*: any*/)
          ]
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "comments_data",
      "args": (v0/*: any*/)
    }
  ]
};
})();
(node as any).hash = '28a002846bbe55a891e58afc365711a6';
export default node;
