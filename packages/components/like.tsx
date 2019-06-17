import { useState } from 'react';
import { Icon } from 'antd';
import { commitMutation } from 'react-relay';
import useRelayContext from '@regneva/hooks/useRelayContext';
import useLayoutContext from '@regneva/hooks/useLayoutContext';
import { topicLikeMutation } from '@regneva/relay/custom/mutations';
import { fragments_likesBasic } from '@regneva/relay/generated/fragments_likesBasic.graphql';

interface likeProps{
  topicId: number
  likeNum: number
  likesList: fragments_likesBasic[]
}

export default function Like({ topicId, likeNum = 0, likesList }: likeProps) {
  const { environment } = useRelayContext();
  const { user: { userCode: currentUserCode } } = useLayoutContext();
  const [likes, setLikeNum] = useState(likeNum);
  const [liketype, setLikeType] = useState(likesList.length ? 'CANCEL' : 'LIKE');

  const commitLike = () => {
    const variables = {
      input: {
        topicid: topicId,
        usercode: currentUserCode,
        type: liketype
      },
      topicId
    }
    commitMutation(environment, {
      mutation: topicLikeMutation,
      variables,
      onCompleted: (res) => {
        const like_num = +res.likeTopic.query.topic.likeNum
        setLikeNum(like_num)
        setLikeType(liketype === 'CANCEL' ? 'LIKE' : 'CANCEL');
      },
      onError: err => console.error(err),
    });
  }

  return (
    <a onClick={commitLike}>
      <Icon
        type="like"
        theme={liketype === 'CANCEL' ? 'twoTone' : 'outlined'}
        twoToneColor="#fe751a"
        style={{ marginRight: 5 }}
      />
      {+likes || null}
    </a>
  );
}
