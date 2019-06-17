import { useState, useEffect } from 'react';
import { fetchQuery } from 'react-relay';
import { debounce } from 'lodash';
import ReactQuill, { Quill } from 'react-quill';
import quillEmoji from 'quill-emoji';
import quillMention from 'quill-mention';
import useRelayContext from '@regneva/hooks/useRelayContext';
import useLayoutContext from '@regneva/hooks/useLayoutContext';
import { mentionQuery } from '@regneva/relay/custom/queries';

const { EmojiBlot, ToolbarEmoji } = quillEmoji;

Quill.register({
  'formats/emoji': EmojiBlot,
  'modules/emoji-toolbar': ToolbarEmoji,
  'modules/mention': quillMention
}, true);

const formats = ['font', 'header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'color', 'background', 'list', 'indent', 'align', 'link', 'image', 'clean', 'emoji', 'mention'];

const toolbar = [
  [{ 'header': [] }, 'bold', 'italic', 'underline', 'strike'],
  [{ 'font': [] }, 'blockquote', 'code-block', { 'color': [] }, { 'background': [] }],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }, { 'align': [] }],
  ['emoji', 'link', 'image'],
]

export default function MyEditor(props: any) {
  const { environment } = useRelayContext();
  const [modules, setModules] = useState();
  const { user: { userCode, nickname, name } } = useLayoutContext();

  const { value, onChange, mention = true } = props;

  // 关键字查询数据
  const getData = async (keyword: string) => {
    const result = await fetchQuery(environment, mentionQuery, { keyword });
    const { getUserByKeywordList } = result;
    const list = getUserByKeywordList.map((item: any) => ({
      value: item.nickname ? `${item.nickname}(${item.name})` : item.name,
      id: item.code
    }))
    return list
  }

  // react16下react-quill的一个bug
  // 这里只创建props.modules一次，避免react-quill的shouldComponentRegenerate逻辑
  // 里因为modules重新生成改变editor area的key，使得每次输入后失去焦点
  // modules不能扔出去是因为要用到context里的environment
  useEffect(() => {
    const modules = {
      toolbar,
      'emoji-toolbar': true,
      'mention': {
        allowedChars: /^[a-zA-Z0-9\u4e00-\u9fa5]*$/,
        mentionDenotationChars: ["@"],
        renderItem: (item: any) => {
          return `<span style="white-space: nowrap;">${item.value}</span>`
        },
        // 这里防抖有问题...不能做到无searchTerm直接显示默认
        source: debounce(async (searchTerm: string, renderList: Function) => {
          if (searchTerm) {
            const data = await getData(searchTerm);
            renderList(data, searchTerm);
          } else {
            const defaultData = [{
              value: nickname ? `${nickname}(${name})` : name,
              id: userCode
            }]
            renderList(defaultData, searchTerm)
          }
        }, 200),
      }
    }
    if (!mention) {
      delete modules.mention
    }
    setModules(modules)
  }, [])

  return (
    <div className="text-editor">
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        onChange={onChange}
        defaultValue={value}
      />
    </div>
  );
}