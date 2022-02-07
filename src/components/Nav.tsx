import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

const Nav = styled.nav`
border: 1px solid blue;
> ul {
  display:flex;
  > li{
    width: 33.3333%;
    text-align:center;
    padding: 16px;
  }
}
`;

function nav (){
    return (
        <Nav>
        <ul>
          <li>
            <Link to="/tags">标签页</Link>
          </li>
          <li>
            <Link to="/money">记账页</Link>
          </li>
          <li>
            <Link to="/statistics">统计页</Link>
          </li>
        </ul>
      </Nav>
    )
}
export default nav