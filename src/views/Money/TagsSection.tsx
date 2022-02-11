import createId from 'lib/createId';
import React, { useState } from 'react';
import styled from 'styled-components';
import useTags from 'hook/useTags'

const _TagSection = styled.section`
/* background: #FFFFFF;  */
padding: 12px 16px;
flex-grow: 1; 
flex-shrink: 1; overflow: auto;
display:flex;
flex-direction: column;
align-items: flex-start;
> ol { margin: 0 -12px;
  > li{
     background: #ffffff; 
     text-align: center;
     box-sizing: border-box;
     border-radius: 50%;
     display:inline-block; 
     font-size: 18px; 
     margin: 8px 12px;
     width: 50px;
     height: 50px;
     line-height: 50px;
     /* dotted solid double dashed;  */
     border: 1px solid black;
     &.selected{
      background: #fdd463;
     }
  }
}
> button{
  background:none; border: none; padding: 2px 4px;
  border-bottom: 1px solid #333; color: #666;
  margin-top: 8px;
}
`
type P = {
  selected: number[],
  onChange: (val: number[]) => void
}
const TagSection: React.FC<P> = (props: P) => {
  const { tags, addTag } = useTags();

  const selTagIds = props.selected
  const setSelect = props.onChange


  const changeClass = (tagId: number) => {
    if (selTagIds.includes(tagId)) {
      setSelect(selTagIds.filter((item) => item != tagId))
    } else {
      setSelect([...selTagIds, tagId])
    }
  }
  const getClass = (tagId: number) => {
    return selTagIds.includes(tagId) ? 'selected' : ''
  }
  return (
    <_TagSection>
       {/* <button onClick={addTag}>新增标签</button> */}
      <ol>
        {tags.map((item) => {
          return (
            <li key={item.id}
              onClick={() => { changeClass(item.id) }}
              className={getClass(item.id)}
            >{item.name.substring(0,2)}</li>
          )
        })}
      </ol>
    </_TagSection>
  )
}
export { TagSection }
