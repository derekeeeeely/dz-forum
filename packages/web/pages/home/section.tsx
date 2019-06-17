import * as React from 'react';
import { Card, Avatar } from 'antd';
import useAppContext from '@regneva/hooks/useAppContext';
import { HomePageProps } from '../../utils/types';
import { defaultAvatar } from '../../utils';

export interface SectionListProps {
  data: HomePageProps['data']['sectionsList']
}

const { Meta } = Card;

const toTree = (arr: HomePageProps['data']['sectionsList']) => {
  const levelone = arr.filter(item => item.level === 1);
  const resarr = levelone.map(item => {
    const children = arr.filter(_item => _item.parent === item.sectionId);
    return {
      ...item,
      children,
    };
  });
  return resarr;
};

export default function SectionList (props: SectionListProps) {
  const { data } = props;
  const { router } = useAppContext();
  return (
    <>
      {toTree(data).map(item => (
        <Card
          bordered={false}
          className="section-card-parent"
          key={item.sectionId}
          title={
            <span>
              {item.name}
              <span className="section-card-des">
                {item.description}
              </span>
            </span>
          }
        >
          {(item.children || []).map(child => (
            <Card
              key={child.sectionId}
              onClick={() => router.push(`/section/$sid`, `/section/${child.sectionId}`)}
            >
              <Meta
                avatar={<Avatar src={child.avatar || defaultAvatar} />}
                title={child.name}
                description={child.description}
              />
            </Card>
          ))}
        </Card>
      ))}
    </>
  );
}
