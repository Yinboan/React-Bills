import { useState } from 'react';
import styled from 'styled-components';
const _CategorySection = styled.section`
font-size: 24px;
> ul{
  display:flex;
  > li {
    width: 50%; 
    text-align:center;
    padding: 16px 0;
    position:relative;
    background-color: rgb(254, 210, 95);
    &.selected::after{
      content: '';
      display:block; 
      height: 3px;
      background:#333;
      position:absolute;
      bottom:0;
      width: 100%;
      left: 0;
    }
  }
}
`;

type P ={
  value:'-'|'+',
  onChange:(str:'-'|'+')=>void
}

const CategorySection = (props:P) => {
  const categoryMap ={'-':'支出','+':'收入'}
  type Keys = keyof typeof categoryMap
  const [list]=useState<Keys[]>(['-','+'])

  const type    = props.value
  const setType = props.onChange
  return (
    <_CategorySection>
      <ul>
        {list.map((item)=>{
        return <li className={type===item?'selected':""}
                   key={item}
                   onClick={()=>{setType(item)}}
               >{categoryMap[item]}</li>
        })}
      </ul>
    </_CategorySection>
  )
}
export { CategorySection }
