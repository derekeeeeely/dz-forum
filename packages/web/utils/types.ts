import { RecordMap } from 'relay-runtime';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { RelayPaginationProp } from 'react-relay';
import { queries_appQuery } from '@regneva/relay/generated/queries_appQuery.graphql';
import { fragments_topicBasic } from '@regneva/relay/generated/fragments_topicBasic.graphql';
import { fragments_userBasic } from '@regneva/relay/generated/fragments_userBasic.graphql';
import { fragments_sectionBasic } from '@regneva/relay/generated/fragments_sectionBasic.graphql';
import { fragments_userStatistic } from '@regneva/relay/generated/fragments_userStatistic.graphql';
import { fragments_commentBasic } from '@regneva/relay/generated/fragments_commentBasic.graphql'
import { fragments_mentionBasic } from '@regneva/relay/generated/fragments_mentionBasic.graphql'
import { fragments_tagsList } from '@regneva/relay/generated/fragments_tagsList.graphql'
import { fragments_likesBasic } from '@regneva/relay/generated/fragments_likesBasic.graphql'

export interface topicNodeWithUser extends fragments_topicBasic {
  userByUserCode: fragments_userBasic
}

export interface commentNodeWithUser extends fragments_commentBasic {
  userByUserCode: fragments_userBasic
}

export interface MentionNodeWithUser extends fragments_mentionBasic {
  userByUserCode: fragments_userBasic
}

export interface topicConnectionWithUser {
  cursor: any,
  edges: {
    node: topicNodeWithUser
  }[],
  pageInfo: {
    hasNextPage: boolean
  }
}

export interface commentConnectionWithUser {
  cursor: any,
  edges: {
    node: commentNodeWithUser
  }[],
  pageInfo: {
    hasNextPage: boolean
  }
}

export interface MentionConnectionWithUser {
  cursor: any,
  edges: {
    node: MentionNodeWithUser
  }[],
  pageInfo: {
    hasNextPage: boolean
  }
}

export interface RegnevaProps {
  pageProps: { data: queries_appQuery['response'] | null };
  relayRecords: RecordMap;
  statusCode: number | undefined;
  variables: queries_appQuery['variables'];
  isMobile: boolean
  apiEndPoint: string
}

export interface HomePageProps {
  data: {
    sectionsList: fragments_sectionBasic[],
    hotTopics: {
      nodes: fragments_topicBasic[]
    },
    recentTopics: {
      nodes: fragments_topicBasic[]
    },
    homeStatistics: [number, number, number]
  };
}

export interface SectionPageProps {
  data: {
    section: fragments_sectionBasic,
    topics: topicConnectionWithUser
  };
  relay: RelayPaginationProp
}


export interface TopicDetailPageProps {
  data: {
    comments: commentConnectionWithUser,
    topic: topicNodeWithUser,
    likesList: fragments_likesBasic[]
  },
  relay: RelayPaginationProp

}

export interface TopicCommentsPageProps {
  data: {
    comments: commentConnectionWithUser,
  },
  topicId: number
  targetUser: string
  relay: RelayPaginationProp
}

export interface TopicContentProps {
  data: topicNodeWithUser
  likesList: fragments_likesBasic[]
}


export interface UserCenterPageProps {
  data: {
    user: fragments_userStatistic,
    deliveredTopics: topicConnectionWithUser,
    participatedComments: commentConnectionWithUser,
    receivedComments: commentConnectionWithUser,
    receivedMentions: MentionConnectionWithUser
  };
}

export interface OtherCenterPageProps {
  data: {
    otherUser: fragments_userStatistic,
    otherDeliveredTopics: topicConnectionWithUser,
  };
}

export interface UserEditProps {
  form: WrappedFormUtils
}

export interface TopicAddProps {
  data: {
    lv2Section: fragments_sectionBasic[]
    tags: fragments_tagsList[]
  },
  form: WrappedFormUtils
}

export interface DeliveredPageProps {
  data: {
    deliveredTopics: topicConnectionWithUser
  },
  relay: RelayPaginationProp
}

export interface OtherDeliveredPageProps {
  data: {
    otherDeliveredTopics: topicConnectionWithUser
  },
  relay: RelayPaginationProp
}

export interface ParticipatedPageProps {
  data: {
    participatedComments: commentConnectionWithUser
  },
  relay: RelayPaginationProp
}

export interface CommentPageProps {
  data: {
    receivedComments: commentConnectionWithUser
  },
  relay: RelayPaginationProp
}

export interface MentionPageProps {
  data: {
    receivedMentions: MentionConnectionWithUser
  },
  relay: RelayPaginationProp
}
