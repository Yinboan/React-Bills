import { Link, useHistory, useParams } from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import { Button } from 'components/Button';
import styled from 'styled-components';
import useTags from 'hook/useTags';
import { Input } from '../components/Input';
import { Center } from '../components/Center';
import { Space } from '../components/Space';
type P = {
  id: string
}
const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 40px;
  padding: 14px;
  background:white;
`;
const InputWrapper = styled.div`
  background:white;
  padding: 0 16px;
  margin-top: 8px;
  background-color: rgb(253, 253, 253)f;
`;

export default function TagEdit() {
  const { findTag, updateTag, deleteTag } = useTags();
  let { id: idString } = useParams<P>();
  const tag = findTag(idString);
  const tagContent = (tag: { id: number; name: string }) => (
    <div>
      <InputWrapper>
        <Input label="标签名称" type="text" placeholder="请输入标签名"
          value={tag.name}
          onChange={(e) => {
            updateTag(tag.id, { name: e.target.value });
          }}
        />
      </InputWrapper>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button onClick={() => {
          deleteTag(tag.id);
          history.goBack()
        }}>删除标签</Button>
      </Center>
    </div>
  );
  const history = useHistory()
  const onClickBack = ()=>{
    history.goBack()
  }
  return (
    <Layout>
      <Topbar>
      <Icon name="left" onClick={onClickBack}/>
        <span>编辑</span>
        <Icon />
      </Topbar>

      {tag ? tagContent(tag) : <Center>tag 不存在</Center>}

    </Layout>
  );
}