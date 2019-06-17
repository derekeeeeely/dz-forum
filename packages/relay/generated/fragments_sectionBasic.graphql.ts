/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _fragments_sectionBasic$ref: unique symbol;
export type fragments_sectionBasic$ref = typeof _fragments_sectionBasic$ref;
export type fragments_sectionBasic = {
    readonly sectionId: number;
    readonly level: number | null;
    readonly parent: number | null;
    readonly name: string;
    readonly sort: number | null;
    readonly description: string | null;
    readonly avatar: string | null;
    readonly " $refType": fragments_sectionBasic$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "fragments_sectionBasic",
  "type": "Section",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": "sectionId",
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "level",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "parent",
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
      "name": "sort",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "avatar",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '01a47dfe35d998ed49fa80e1556d7c14';
export default node;
