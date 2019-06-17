import { FunctionComponent, useEffect, useState } from 'react';
import { Card, Divider } from 'antd';
import { graphql, createFragmentContainer } from 'react-relay';
import useLayoutContext from '@regneva/hooks/useLayoutContext';
import { HomePageProps } from '../../utils/types';
import DynamicHotTopic from './hot';
import SectionList from './section';
import SearchList from './search';
import './index.less';


const HomePage: FunctionComponent<HomePageProps> = ({ data }) => {
  const { isMobile } = useLayoutContext();
  const [isPhone, setPhone] = useState(isMobile);
  const { sectionsList, recentTopics, hotTopics, homeStatistics } = data;
  const [today, total, comments] = homeStatistics;

  const statistics = (<div className="home-statistic">
    <span>今日发帖：{today}</span>
    <Divider type="vertical" />
    <span>总帖数：{total}</span>
    <Divider type="vertical" />
    <span>评论：{comments}</span>
  </div>)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setPhone(window.innerWidth < 900)
    })
    return () => {
      window.removeEventListener('resize', () => {
        console.log('resize listener removed')
      })
    };
  }, [])

  return (
    <div className={`regneva-home ${isPhone ? 'phone' : ''}`}>
      <div className="regneva-home-left">
        {!isPhone ? statistics : ''}
        <section className="section-list">
          <SectionList data={sectionsList}/>
        </section>
      </div>
      <div className="regneva-home-right">
        {isPhone ? statistics : ''}
        <section className="search-result">
          <SearchList />
        </section>
        <section className="hot-recent">
          <Card bordered={false} key='hot-card' className="hot-card-parent">
            <DynamicHotTopic data={hotTopics.nodes} title="热门" />
          </Card>
          <Card bordered={false} key='recent-card' className="hot-card-parent">
            <DynamicHotTopic data={recentTopics.nodes} title="最新" />
          </Card>
        </section>
      </div>
    </div>
  );
};

export default createFragmentContainer(HomePage, {
  data: graphql`
    fragment home_data on Query {
      hotTopics: topics(first: 10, orderBy: COMMENT_NUM_DESC) {
        nodes{
          ...fragments_topicBasic @relay(mask: false)
        }
      }
      recentTopics: topics(first: 10, orderBy: CREATED_AT_DESC) {
        nodes{
          ...fragments_topicBasic @relay(mask: false)
        }
      }
      sectionsList(first: 10) {
        ...fragments_sectionBasic @relay(mask: false)
      }
      homeStatistics: getHomeStatisticsList
    }
  `,
});

