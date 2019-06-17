import { graphql } from 'react-relay';

/**
 * 用户基础信息
 */
export const userBasic = graphql`
  fragment fragments_userBasic on User {
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
`;

/**
 * 用户统计信息
 */
export const userStatistic = graphql`
  fragment fragments_userStatistic on User {
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
`;

/**
 * 帖子基础信息
 */
export const topicBasic = graphql`
  fragment fragments_topicBasic on Topic {
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
`;

/**
 * 评论基础信息
 */
export const commentBasic = graphql`
  fragment fragments_commentBasic on Comment {
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
  }
`;


/**
 * 板块基础信息
 */
export const sectionBasic = graphql`
  fragment fragments_sectionBasic on Section {
    sectionId: id
    level
    parent
    name
    sort
    description
    avatar
  }
`;

/**
 * 话题标签列表
 */
export const tagsBasic = graphql`
  fragment fragments_tagsList on Tag {
    name
    tagId:id
  }
`

/**
 * mention基础信息
 */
export const mentionBasic = graphql`
  fragment fragments_mentionBasic on Mention {
    mentionId: id
    topic {
      topicId: id
      title
    }
    updatedAt
    commentId
    read
  }
`

export const likesBasic = graphql`
  fragment fragments_likesBasic on Like {
    topicId
    userByUserCode{
      avatar
    }
  }
`
