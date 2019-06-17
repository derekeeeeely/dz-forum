import { graphql } from 'react-relay';

/**
 * 编辑个人信息
 */
export const userEditMutation: any = graphql`
  mutation mutations_userEditMutation($input: UpdateUserInput!) {
    updateUser(input: $input) {
      user {
        code
      }
    }
  }
`;

/**
 * 发帖
 */
export const topicAddMutation: any = graphql`
  mutation mutations_topicAddMutation($input: CreateTopicInput!) {
    createTopic(input: $input) {
      topic {
        topicId: id
        title
      }
    }
  }
`;

/**
 * 更新 | 删除帖子
 */
export const topicUpdateMutation: any = graphql`
  mutation mutations_topicUpdateMutation($input: UpdateTopicInput!) {
    updateTopic(input: $input) {
      topic {
        topicId: id
        content
        deletedAt
      }
    }
  }
`;

/**
 * 帖子点赞
 */
export const topicLikeMutation: any = graphql`
  mutation mutations_topicLikeMutation($input: LikeTopicInput!, $topicId: Int!) {
    likeTopic(input: $input) {
      query{
        topic(id: $topicId) {
          likeNum
        }
      }
    }
  }
`;

/**
 * 删除评论
 */
export const topicDetailDeleteComment = graphql`
  mutation mutations_topicDetailDeleteCommentMutation($input: UpdateCommentInput!) {
    updateComment(input: $input) {
      comment {
        commentId: id
      }
    }
  }
`;

/**
 * 新增评论
 */
export const addCommentMutation = graphql`
  mutation mutations_addCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      comment {
        commentId: id
      }
    }
  }
`;

// 更新评论
// export const updateCommentmutation = graphql`
//   mutation mutations_updateCommentMutation($input: UpdateCommentInput!) {
//     updateComment(input: $input) {
//       comment {
//         commentId: id
//       }
//     }
//   }
// `;

/**
 * 标记评论为已读
 */
export const markCommentAsread = graphql`
mutation mutations_markCommentAsreadMutation($input: MarkCommentAsreadInput!, $userCode: String!) {
  markCommentAsread(input: $input) {
    query {
      user(code: $userCode){
        unreadCommentNum
      }
    }
  }
}
`

/**
 * 标记全部评论为已读
 */
export const markAllCommentAsread = graphql`
mutation mutations_markAllCommentAsreadMutation($input: MarkAllCommentAsreadInput!) {
  markAllCommentAsread(input: $input) {
    clientMutationId
  }
}
`

/**
 * 标记@为已读
 */
export const markMentionAsread = graphql`
mutation mutations_markMentionAsreadMutation($input: MarkMentionAsreadInput!, $userCode: String!) {
  markMentionAsread(input: $input) {
    query {
      user(code: $userCode){
        unreadMentionNum
      }
    }
  }
}
`

/**
 * 标记全部@为已读
 */
export const markAllMentionAsread = graphql`
mutation mutations_markAllMentionAsreadMutation($input: MarkAllMentionAsreadInput!) {
  markAllMentionAsread(input: $input) {
    clientMutationId
  }
}
`
