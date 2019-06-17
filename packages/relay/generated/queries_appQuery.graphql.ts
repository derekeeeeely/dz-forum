/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { Sid_data$ref } from "./Sid_data.graphql";
import { Tid_data$ref } from "./Tid_data.graphql";
import { Uid_data$ref } from "./Uid_data.graphql";
import { container_data$ref } from "./container_data.graphql";
import { home_data$ref } from "./home_data.graphql";
import { topicAdd_data$ref } from "./topicAdd_data.graphql";
import { user_data$ref } from "./user_data.graphql";
export type TopicCondition = {
    readonly id?: number | null;
    readonly userCode?: string | null;
    readonly sectionId?: number | null;
    readonly title?: string | null;
    readonly tags?: ReadonlyArray<string | null> | null;
    readonly content?: string | null;
    readonly mentioncodes?: ReadonlyArray<string | null> | null;
    readonly likeNum?: any | null;
    readonly commentNum?: any | null;
    readonly type?: number | null;
    readonly status?: number | null;
    readonly createdAt?: any | null;
    readonly updatedAt?: any | null;
    readonly deletedAt?: any | null;
};
export type MentionCondition = {
    readonly id?: number | null;
    readonly userCode?: string | null;
    readonly targetUser?: string | null;
    readonly topicId?: number | null;
    readonly parentId?: number | null;
    readonly commentId?: number | null;
    readonly read?: boolean | null;
    readonly createdAt?: any | null;
    readonly updatedAt?: any | null;
    readonly deletedAt?: any | null;
};
export type CommentCondition = {
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
export type LikeCondition = {
    readonly id?: number | null;
    readonly userCode?: string | null;
    readonly topicId?: number | null;
    readonly createdAt?: any | null;
    readonly updatedAt?: any | null;
    readonly deletedAt?: any | null;
};
export type queries_appQueryVariables = {
    readonly userCode: string;
    readonly otherCode: string;
    readonly isHomePage: boolean;
    readonly isSectionPage: boolean;
    readonly isUserCenterPage: boolean;
    readonly isOtherCenterPage: boolean;
    readonly isTopicAddPage: boolean;
    readonly isTopicPage: boolean;
    readonly sectionId: number;
    readonly topicId: number;
    readonly sectionTopicCondition?: TopicCondition | null;
    readonly delivered?: TopicCondition | null;
    readonly mentioned?: MentionCondition | null;
    readonly otherDelivered?: TopicCondition | null;
    readonly participated?: CommentCondition | null;
    readonly likes?: LikeCondition | null;
};
export type queries_appQueryResponse = {
    readonly " $fragmentRefs": container_data$ref & home_data$ref & Sid_data$ref & user_data$ref & Uid_data$ref & topicAdd_data$ref & Tid_data$ref;
};
export type queries_appQuery = {
    readonly response: queries_appQueryResponse;
    readonly variables: queries_appQueryVariables;
};



/*
query queries_appQuery(
  $userCode: String!
  $otherCode: String!
  $isHomePage: Boolean!
  $isSectionPage: Boolean!
  $isUserCenterPage: Boolean!
  $isOtherCenterPage: Boolean!
  $isTopicAddPage: Boolean!
  $isTopicPage: Boolean!
  $sectionId: Int!
  $topicId: Int!
  $sectionTopicCondition: TopicCondition
  $delivered: TopicCondition
  $mentioned: MentionCondition
  $otherDelivered: TopicCondition
  $participated: CommentCondition
  $likes: LikeCondition
) {
  ...container_data_OLEuM
  ...home_data @include(if: $isHomePage)
  ...Sid_data_efbRh @include(if: $isSectionPage)
  ...user_data_1HQLGw @include(if: $isUserCenterPage)
  ...Uid_data_4lGG4r @include(if: $isOtherCenterPage)
  ...topicAdd_data @include(if: $isTopicAddPage)
  ...Tid_data_J6XUK @include(if: $isTopicPage)
}

fragment container_data_OLEuM on Query {
  user(code: $userCode) {
    userCode: code
    name
    nickname
    sex
    avatar
    age
    about
    signature
    unreadCommentNum
    unreadMentionNum
  }
}

fragment home_data on Query {
  hotTopics: topics(first: 10, orderBy: COMMENT_NUM_DESC) {
    nodes {
      topicId: id
      title
      content
      commentNum
      updatedAt
      createdAt
      likeNum
      tags
      section {
        serctionId: id
        name
      }
      deletedAt
      user: userByUserCode {
        userCode: code
        name
        nickname
        avatar
        sex
        age
        about
        signature
      }
    }
  }
  recentTopics: topics(first: 10, orderBy: CREATED_AT_DESC) {
    nodes {
      topicId: id
      title
      content
      commentNum
      updatedAt
      createdAt
      likeNum
      tags
      section {
        serctionId: id
        name
      }
      deletedAt
      user: userByUserCode {
        userCode: code
        name
        nickname
        avatar
        sex
        age
        about
        signature
      }
    }
  }
  sectionsList(first: 10) {
    sectionId: id
    level
    parent
    name
    sort
    description
    avatar
  }
  homeStatistics: getHomeStatisticsList
}

fragment Sid_data_efbRh on Query {
  section(id: $sectionId) {
    sectionId: id
    level
    parent
    name
    sort
    description
    avatar
  }
  topics(first: 10, condition: $sectionTopicCondition, orderBy: [UPDATED_AT_DESC]) {
    edges {
      cursor
      node {
        topicId: id
        title
        content
        commentNum
        updatedAt
        createdAt
        likeNum
        tags
        section {
          serctionId: id
          name
        }
        deletedAt
        user: userByUserCode {
          userCode: code
          name
          nickname
          avatar
          sex
          age
          about
          signature
        }
        userByUserCode {
          userCode: code
          name
          nickname
          sex
          avatar
          age
          about
          signature
          unreadCommentNum
          unreadMentionNum
        }
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment user_data_1HQLGw on Query {
  user(code: $userCode) {
    topicNum
    commentNum
    receivedCommentNum
    receivedMentionNum
    unreadCommentNum
    unreadMentionNum
    avatar
    nickname
    name
  }
  ...delivered_data_2d3mmQ
  ...participated_data_44utoZ
  ...comment_data_OLEuM
  ...mention_data_2MbY6k
}

fragment Uid_data_4lGG4r on Query {
  otherUser: user(code: $otherCode) {
    topicNum
    userCode: code
    name
    nickname
    sex
    avatar
    age
    about
    signature
    unreadCommentNum
    unreadMentionNum
  }
  ...otherDelivered_data_3tPVTh
}

fragment topicAdd_data on Query {
  lv2Section: sectionsList(first: 20) {
    sectionId: id
    name
    parent
  }
  tags: tagsList {
    name
    tagId: id
  }
}

fragment Tid_data_J6XUK on Query {
  topic(id: $topicId) {
    topicId: id
    title
    content
    commentNum
    updatedAt
    createdAt
    likeNum
    tags
    section {
      serctionId: id
      name
    }
    deletedAt
    user: userByUserCode {
      userCode: code
      name
      nickname
      avatar
      sex
      age
      about
      signature
    }
    userByUserCode {
      userCode: code
      name
      nickname
      sex
      avatar
      age
      about
      signature
      unreadCommentNum
      unreadMentionNum
    }
  }
  likesList(first: 1, condition: $likes) {
    topicId
    userByUserCode {
      avatar
    }
  }
  ...comments_data_12I42M
}

fragment comments_data_12I42M on Query {
  comments: getTopicReceivedComments(first: 20, topicid: $topicId) {
    edges {
      cursor
      node {
        commentId: id
        content
        updatedAt
        topic {
          topicId: id
          title
        }
        deletedAt
        parentId
        read
        userByUserCode {
          userCode: code
          name
          nickname
          sex
          avatar
          age
          about
          signature
          unreadCommentNum
          unreadMentionNum
        }
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment otherDelivered_data_3tPVTh on Query {
  otherDeliveredTopics: topics(first: 20, condition: $otherDelivered, orderBy: [CREATED_AT_DESC]) {
    totalCount
    edges {
      cursor
      node {
        topicId: id
        title
        content
        commentNum
        updatedAt
        createdAt
        likeNum
        tags
        section {
          serctionId: id
          name
        }
        deletedAt
        user: userByUserCode {
          userCode: code
          name
          nickname
          avatar
          sex
          age
          about
          signature
        }
        userByUserCode {
          userCode: code
          name
          nickname
          sex
          avatar
          age
          about
          signature
          unreadCommentNum
          unreadMentionNum
        }
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment delivered_data_2d3mmQ on Query {
  deliveredTopics: topics(first: 20, condition: $delivered, orderBy: [CREATED_AT_DESC]) {
    totalCount
    edges {
      cursor
      node {
        topicId: id
        title
        content
        commentNum
        updatedAt
        createdAt
        likeNum
        tags
        section {
          serctionId: id
          name
        }
        deletedAt
        user: userByUserCode {
          userCode: code
          name
          nickname
          avatar
          sex
          age
          about
          signature
        }
        userByUserCode {
          userCode: code
          name
          nickname
          sex
          avatar
          age
          about
          signature
          unreadCommentNum
          unreadMentionNum
        }
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment participated_data_44utoZ on Query {
  participatedComments: comments(first: 20, condition: $participated, orderBy: [UPDATED_AT_DESC]) {
    edges {
      cursor
      node {
        commentId: id
        content
        updatedAt
        topic {
          topicId: id
          title
        }
        deletedAt
        parentId
        read
        userByUserCode {
          userCode: code
          name
          nickname
          sex
          avatar
          age
          about
          signature
          unreadCommentNum
          unreadMentionNum
        }
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment comment_data_OLEuM on Query {
  receivedComments: getUserReceivedComments(first: 20, usercode: $userCode) {
    edges {
      cursor
      node {
        commentId: id
        content
        updatedAt
        topic {
          topicId: id
          title
        }
        deletedAt
        parentId
        read
        userByUserCode {
          userCode: code
          name
          nickname
          sex
          avatar
          age
          about
          signature
          unreadCommentNum
          unreadMentionNum
        }
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment mention_data_2MbY6k on Query {
  receivedMentions: mentions(first: 20, condition: $mentioned) {
    edges {
      cursor
      node {
        mentionId: id
        topic {
          topicId: id
          title
        }
        updatedAt
        commentId
        read
        userByUserCode {
          userCode: code
          name
          nickname
          sex
          avatar
          age
          about
          signature
          unreadCommentNum
          unreadMentionNum
        }
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userCode",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "otherCode",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "isHomePage",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "isSectionPage",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "isUserCenterPage",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "isOtherCenterPage",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "isTopicAddPage",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "isTopicPage",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "sectionId",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "topicId",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "sectionTopicCondition",
    "type": "TopicCondition",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "delivered",
    "type": "TopicCondition",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "mentioned",
    "type": "MentionCondition",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "otherDelivered",
    "type": "TopicCondition",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "participated",
    "type": "CommentCondition",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "likes",
    "type": "LikeCondition",
    "defaultValue": null
  }
],
v1 = {
  "kind": "Variable",
  "name": "userCode",
  "variableName": "userCode"
},
v2 = {
  "kind": "Variable",
  "name": "condition",
  "variableName": "sectionTopicCondition"
},
v3 = {
  "kind": "Variable",
  "name": "id",
  "variableName": "sectionId"
},
v4 = {
  "kind": "Variable",
  "name": "id",
  "variableName": "topicId"
},
v5 = [
  {
    "kind": "Variable",
    "name": "code",
    "variableName": "userCode"
  }
],
v6 = {
  "kind": "ScalarField",
  "alias": "userCode",
  "name": "code",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "nickname",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sex",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "age",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "about",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "signature",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "unreadCommentNum",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "unreadMentionNum",
  "args": null,
  "storageKey": null
},
v16 = [
  (v6/*: any*/),
  (v7/*: any*/),
  (v8/*: any*/),
  (v9/*: any*/),
  (v10/*: any*/),
  (v11/*: any*/),
  (v12/*: any*/),
  (v13/*: any*/),
  (v14/*: any*/),
  (v15/*: any*/)
],
v17 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v18 = {
  "kind": "ScalarField",
  "alias": "topicId",
  "name": "id",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "content",
  "args": null,
  "storageKey": null
},
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "commentNum",
  "args": null,
  "storageKey": null
},
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "updatedAt",
  "args": null,
  "storageKey": null
},
v23 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "createdAt",
  "args": null,
  "storageKey": null
},
v24 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "likeNum",
  "args": null,
  "storageKey": null
},
v25 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "tags",
  "args": null,
  "storageKey": null
},
v26 = {
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
    (v7/*: any*/)
  ]
},
v27 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "deletedAt",
  "args": null,
  "storageKey": null
},
v28 = {
  "kind": "LinkedField",
  "alias": "user",
  "name": "userByUserCode",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    (v7/*: any*/),
    (v8/*: any*/),
    (v10/*: any*/),
    (v9/*: any*/),
    (v11/*: any*/),
    (v12/*: any*/),
    (v13/*: any*/)
  ]
},
v29 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "nodes",
    "storageKey": null,
    "args": null,
    "concreteType": "Topic",
    "plural": true,
    "selections": [
      (v18/*: any*/),
      (v19/*: any*/),
      (v20/*: any*/),
      (v21/*: any*/),
      (v22/*: any*/),
      (v23/*: any*/),
      (v24/*: any*/),
      (v25/*: any*/),
      (v26/*: any*/),
      (v27/*: any*/),
      (v28/*: any*/)
    ]
  }
],
v30 = {
  "kind": "ScalarField",
  "alias": "sectionId",
  "name": "id",
  "args": null,
  "storageKey": null
},
v31 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "parent",
  "args": null,
  "storageKey": null
},
v32 = [
  (v30/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "level",
    "args": null,
    "storageKey": null
  },
  (v31/*: any*/),
  (v7/*: any*/),
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
  (v10/*: any*/)
],
v33 = {
  "kind": "Literal",
  "name": "orderBy",
  "value": [
    "UPDATED_AT_DESC"
  ]
},
v34 = [
  (v2/*: any*/),
  (v17/*: any*/),
  (v33/*: any*/)
],
v35 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v36 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "userByUserCode",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": (v16/*: any*/)
},
v37 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v38 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "edges",
  "storageKey": null,
  "args": null,
  "concreteType": "TopicsEdge",
  "plural": true,
  "selections": [
    (v35/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "node",
      "storageKey": null,
      "args": null,
      "concreteType": "Topic",
      "plural": false,
      "selections": [
        (v18/*: any*/),
        (v19/*: any*/),
        (v20/*: any*/),
        (v21/*: any*/),
        (v22/*: any*/),
        (v23/*: any*/),
        (v24/*: any*/),
        (v25/*: any*/),
        (v26/*: any*/),
        (v27/*: any*/),
        (v28/*: any*/),
        (v36/*: any*/),
        (v37/*: any*/)
      ]
    }
  ]
},
v39 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "endCursor",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasNextPage",
      "args": null,
      "storageKey": null
    }
  ]
},
v40 = [
  "condition",
  "orderBy"
],
v41 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "topicNum",
  "args": null,
  "storageKey": null
},
v42 = {
  "kind": "Literal",
  "name": "first",
  "value": 20
},
v43 = {
  "kind": "Literal",
  "name": "orderBy",
  "value": [
    "CREATED_AT_DESC"
  ]
},
v44 = [
  {
    "kind": "Variable",
    "name": "condition",
    "variableName": "delivered"
  },
  (v42/*: any*/),
  (v43/*: any*/)
],
v45 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "totalCount",
    "args": null,
    "storageKey": null
  },
  (v38/*: any*/),
  (v39/*: any*/)
],
v46 = [
  {
    "kind": "Variable",
    "name": "condition",
    "variableName": "participated"
  },
  (v42/*: any*/),
  (v33/*: any*/)
],
v47 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "topic",
  "storageKey": null,
  "args": null,
  "concreteType": "Topic",
  "plural": false,
  "selections": [
    (v18/*: any*/),
    (v19/*: any*/)
  ]
},
v48 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "read",
  "args": null,
  "storageKey": null
},
v49 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "CommentsEdge",
    "plural": true,
    "selections": [
      (v35/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
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
          },
          (v20/*: any*/),
          (v22/*: any*/),
          (v47/*: any*/),
          (v27/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "parentId",
            "args": null,
            "storageKey": null
          },
          (v48/*: any*/),
          (v36/*: any*/),
          (v37/*: any*/)
        ]
      }
    ]
  },
  (v39/*: any*/)
],
v50 = [
  (v42/*: any*/),
  {
    "kind": "Variable",
    "name": "usercode",
    "variableName": "userCode"
  }
],
v51 = [
  {
    "kind": "Variable",
    "name": "condition",
    "variableName": "mentioned"
  },
  (v42/*: any*/)
],
v52 = [
  {
    "kind": "Variable",
    "name": "condition",
    "variableName": "otherDelivered"
  },
  (v42/*: any*/),
  (v43/*: any*/)
],
v53 = [
  (v42/*: any*/),
  {
    "kind": "Variable",
    "name": "topicid",
    "variableName": "topicId"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "queries_appQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "container_data",
        "args": [
          (v1/*: any*/)
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isHomePage",
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "home_data",
            "args": null
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isSectionPage",
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Sid_data",
            "args": [
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isUserCenterPage",
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "user_data",
            "args": [
              {
                "kind": "Variable",
                "name": "delivered",
                "variableName": "delivered"
              },
              {
                "kind": "Variable",
                "name": "mentioned",
                "variableName": "mentioned"
              },
              {
                "kind": "Variable",
                "name": "participated",
                "variableName": "participated"
              },
              (v1/*: any*/)
            ]
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isOtherCenterPage",
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Uid_data",
            "args": [
              {
                "kind": "Variable",
                "name": "otherCode",
                "variableName": "otherCode"
              },
              {
                "kind": "Variable",
                "name": "otherDelivered",
                "variableName": "otherDelivered"
              }
            ]
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isTopicAddPage",
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "topicAdd_data",
            "args": null
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isTopicPage",
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Tid_data",
            "args": [
              (v4/*: any*/),
              {
                "kind": "Variable",
                "name": "likes",
                "variableName": "likes"
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "queries_appQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": (v5/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": (v16/*: any*/)
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isHomePage",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": "hotTopics",
            "name": "topics",
            "storageKey": "topics(first:10,orderBy:\"COMMENT_NUM_DESC\")",
            "args": [
              (v17/*: any*/),
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": "COMMENT_NUM_DESC"
              }
            ],
            "concreteType": "TopicsConnection",
            "plural": false,
            "selections": (v29/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": "recentTopics",
            "name": "topics",
            "storageKey": "topics(first:10,orderBy:\"CREATED_AT_DESC\")",
            "args": [
              (v17/*: any*/),
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": "CREATED_AT_DESC"
              }
            ],
            "concreteType": "TopicsConnection",
            "plural": false,
            "selections": (v29/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sectionsList",
            "storageKey": "sectionsList(first:10)",
            "args": [
              (v17/*: any*/)
            ],
            "concreteType": "Section",
            "plural": true,
            "selections": (v32/*: any*/)
          },
          {
            "kind": "ScalarField",
            "alias": "homeStatistics",
            "name": "getHomeStatisticsList",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isSectionPage",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "section",
            "storageKey": null,
            "args": [
              (v3/*: any*/)
            ],
            "concreteType": "Section",
            "plural": false,
            "selections": (v32/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "topics",
            "storageKey": null,
            "args": (v34/*: any*/),
            "concreteType": "TopicsConnection",
            "plural": false,
            "selections": [
              (v38/*: any*/),
              (v39/*: any*/)
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "topics",
            "args": (v34/*: any*/),
            "handle": "connection",
            "key": "section_topics",
            "filters": (v40/*: any*/)
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isUserCenterPage",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": (v5/*: any*/),
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v41/*: any*/),
              (v21/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "receivedCommentNum",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "receivedMentionNum",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "deliveredTopics",
            "name": "topics",
            "storageKey": null,
            "args": (v44/*: any*/),
            "concreteType": "TopicsConnection",
            "plural": false,
            "selections": (v45/*: any*/)
          },
          {
            "kind": "LinkedHandle",
            "alias": "deliveredTopics",
            "name": "topics",
            "args": (v44/*: any*/),
            "handle": "connection",
            "key": "delivered_deliveredTopics",
            "filters": (v40/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": "participatedComments",
            "name": "comments",
            "storageKey": null,
            "args": (v46/*: any*/),
            "concreteType": "CommentsConnection",
            "plural": false,
            "selections": (v49/*: any*/)
          },
          {
            "kind": "LinkedHandle",
            "alias": "participatedComments",
            "name": "comments",
            "args": (v46/*: any*/),
            "handle": "connection",
            "key": "participated_participatedComments",
            "filters": (v40/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": "receivedComments",
            "name": "getUserReceivedComments",
            "storageKey": null,
            "args": (v50/*: any*/),
            "concreteType": "CommentsConnection",
            "plural": false,
            "selections": (v49/*: any*/)
          },
          {
            "kind": "LinkedHandle",
            "alias": "receivedComments",
            "name": "getUserReceivedComments",
            "args": (v50/*: any*/),
            "handle": "connection",
            "key": "comment_receivedComments",
            "filters": [
              "usercode"
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "receivedMentions",
            "name": "mentions",
            "storageKey": null,
            "args": (v51/*: any*/),
            "concreteType": "MentionsConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "MentionsEdge",
                "plural": true,
                "selections": [
                  (v35/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Mention",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": "mentionId",
                        "name": "id",
                        "args": null,
                        "storageKey": null
                      },
                      (v47/*: any*/),
                      (v22/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "commentId",
                        "args": null,
                        "storageKey": null
                      },
                      (v48/*: any*/),
                      (v36/*: any*/),
                      (v37/*: any*/)
                    ]
                  }
                ]
              },
              (v39/*: any*/)
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": "receivedMentions",
            "name": "mentions",
            "args": (v51/*: any*/),
            "handle": "connection",
            "key": "mention_receivedMentions",
            "filters": [
              "condition"
            ]
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isOtherCenterPage",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": "otherUser",
            "name": "user",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "code",
                "variableName": "otherCode"
              }
            ],
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v41/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "otherDeliveredTopics",
            "name": "topics",
            "storageKey": null,
            "args": (v52/*: any*/),
            "concreteType": "TopicsConnection",
            "plural": false,
            "selections": (v45/*: any*/)
          },
          {
            "kind": "LinkedHandle",
            "alias": "otherDeliveredTopics",
            "name": "topics",
            "args": (v52/*: any*/),
            "handle": "connection",
            "key": "otherDelivered_otherDeliveredTopics",
            "filters": (v40/*: any*/)
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isTopicAddPage",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": "lv2Section",
            "name": "sectionsList",
            "storageKey": "sectionsList(first:20)",
            "args": [
              (v42/*: any*/)
            ],
            "concreteType": "Section",
            "plural": true,
            "selections": [
              (v30/*: any*/),
              (v7/*: any*/),
              (v31/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "tags",
            "name": "tagsList",
            "storageKey": null,
            "args": null,
            "concreteType": "Tag",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              {
                "kind": "ScalarField",
                "alias": "tagId",
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isTopicPage",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "topic",
            "storageKey": null,
            "args": [
              (v4/*: any*/)
            ],
            "concreteType": "Topic",
            "plural": false,
            "selections": [
              (v18/*: any*/),
              (v19/*: any*/),
              (v20/*: any*/),
              (v21/*: any*/),
              (v22/*: any*/),
              (v23/*: any*/),
              (v24/*: any*/),
              (v25/*: any*/),
              (v26/*: any*/),
              (v27/*: any*/),
              (v28/*: any*/),
              (v36/*: any*/)
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
                  (v10/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "comments",
            "name": "getTopicReceivedComments",
            "storageKey": null,
            "args": (v53/*: any*/),
            "concreteType": "CommentsConnection",
            "plural": false,
            "selections": (v49/*: any*/)
          },
          {
            "kind": "LinkedHandle",
            "alias": "comments",
            "name": "getTopicReceivedComments",
            "args": (v53/*: any*/),
            "handle": "connection",
            "key": "comments_comments",
            "filters": [
              "topicid"
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "queries_appQuery",
    "id": "5223ed33f1c08e537f4b87992d789bbf",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = '5b85c2d3ffe1cacfd94731b24b157019';
export default node;
