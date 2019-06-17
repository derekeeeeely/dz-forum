import { graphql } from 'react-relay';

/**
 * 查询、搜索帖子query
 */
export const searchQuery = graphql`
  query queries_searchQuery($keyword: String!) {
    getFullTextSearch(keyword: $keyword) {
      nodes{
        ...fragments_topicBasic @relay(mask: false)
      }
    }
  }
`

/**
 * 查询@的人
 */
export const mentionQuery = graphql`
  query queries_mentionQuery($keyword: String!) {
    getUserByKeywordList(keyword: $keyword) {
      nickname,
      name,
      code
    }
  }
`


/**
 * 整个app的query
 */
export const appQuery = graphql`
  query queries_appQuery(
    $userCode: String!,
    $otherCode: String!,
    $isHomePage: Boolean!,
    $isSectionPage: Boolean!,
    $isUserCenterPage: Boolean!,
    $isOtherCenterPage: Boolean!,
    $isTopicAddPage: Boolean!,
    $isTopicPage: Boolean!,
    $sectionId: Int!,
    $topicId: Int!,
    $sectionTopicCondition: TopicCondition,
    $delivered: TopicCondition,
    $mentioned: MentionCondition,
    $otherDelivered: TopicCondition,
    $participated: CommentCondition,
    $likes: LikeCondition,
  ) {
    ...container_data
      @arguments(userCode: $userCode)
    ...home_data
      @include(if: $isHomePage)
    ...Sid_data
      @include(if: $isSectionPage)
      @arguments(
        id: $sectionId,
        condition: $sectionTopicCondition
      )
    ...user_data
      @include(if: $isUserCenterPage)
      @arguments(
        userCode: $userCode,
        delivered: $delivered,
        participated: $participated,
        mentioned: $mentioned
      )
    ...Uid_data
      @include(if: $isOtherCenterPage)
      @arguments(
        otherCode: $otherCode,
        otherDelivered: $otherDelivered,
      )
    ...topicAdd_data
      @include(if: $isTopicAddPage)
    ...Tid_data
      @include(if: $isTopicPage)
      @arguments(id: $topicId, likes: $likes)
  }
`;