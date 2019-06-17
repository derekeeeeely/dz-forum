import { graphql } from 'react-relay';

/**
 * 订阅回复通知
 */
export const subscribeComment = graphql`
  subscription subscriptionsCommentSubscription($topicName: String!, $userCode: String!){
    listen(topic: $topicName) {
      query{
        user(code: $userCode){
          unreadCommentNum
          unreadMentionNum
        }
        getUserReceivedCommentsList(usercode: $userCode, first: 1) {
          commentId: id
          userByUserCode{
            name
          }
          topic{
            title
            topicId: id
          }
        }
      }
    }
  }
`

/**
 * 订阅mention通知
 */
export const subscribeMention = graphql`
  subscription subscriptionsMentionSubscription($userCode: String!,$topicName: String!, $condition: MentionCondition){
    listen(topic: $topicName) {
      query{
        user(code: $userCode){
          unreadMentionNum
          unreadCommentNum
        }
        getUserReceivedMentionsList: mentionsList(first: 1, condition: $condition, orderBy: CREATED_AT_DESC) {
          commentId
          userByUserCode{
            name
          }
          topic{
            title
            topicId: id
          }
        }
      }
    }
  }
`