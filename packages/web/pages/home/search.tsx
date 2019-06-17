import * as React from 'react';
import { Input, message, Empty } from 'antd';
import { fetchQuery } from 'react-relay';
import useRelayContext from '@regneva/hooks/useRelayContext';
import { searchQuery } from '@regneva/relay/custom/queries';
import TopicList from '@regneva/components/topicList';

const { Search } = Input;
const { useState } = React;

export default function SearchList() {
  const { environment } = useRelayContext();
  const [searchList, setSearchList] = useState();

  const getTopic = async (value: any) => {
    if (!value) {
      message.error('请输入搜索关键词');
      return
    }
    const data = await fetchQuery(environment, searchQuery, { keyword: value });
    const { getFullTextSearch: { nodes } } = data
    setSearchList(nodes)
  }

  return (
    <>
      <Search
        placeholder="关键字搜索"
        onSearch={getTopic}
      />
      {searchList && searchList.length ? <TopicList data={searchList} /> : ''}
      {searchList && !searchList.length ? <Empty className="search-empty" /> : ''}
    </>
  );
}
