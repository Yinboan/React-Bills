import styled from 'styled-components';
import React, { ChangeEventHandler, useRef } from 'react';
import { Input } from 'components/Input';
const _NotesSection = styled.section`
/* background: #f5f5f5; */
padding: 14px 16px;
font-size: 14px;
`;
type P = {
  value: string,
  onChange: (str: string) => void
}
const NotesSection = (props: P) => {
  const note = props.value

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <_NotesSection>
      <Input label="备注" type="text" value={note} onChange={onChange}
      placeholder="请填写备注"/>
    </_NotesSection>
  )
}
export { NotesSection }
