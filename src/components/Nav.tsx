import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';
import Icon from './Icon'

const Nav = styled.nav`
/* backgtound:rgb(255, 244, 216); */
line-height:24px;
box-shadow:0 0 3px rgba(0,0,0,.25);
> ul {
  display:flex;
  /* color: rgb(196, 196, 196); */
  > li{
  width: 33.3333%;
  text-align:center;
    >a{
      display: flex;
      flex-direction: column;
      padding: 4px 0;
      justify-content: center;
      align-items: center;
      &.selected{
        color: rgb(251, 215, 93);
        .icon{
          fill: rgb(251, 215, 93);
        }
      }
    }
    .icon{
      width: 24px;      
      height: 24px;
    }
  }
}
`;

function nav (){
    return (
        <Nav>
        <ul>
          <li>
            <NavLink to="/tags" activeClassName="selected">
             <Icon name='biaoqian'/>
              标签管理
              </NavLink>
          </li>
          <li>
            <NavLink to="/money" activeClassName="selected">
            <Icon name='jizhang'/>
              记一笔</NavLink>
          </li>
          <li>
            <NavLink to="/statistics" activeClassName="selected">
            <Icon name='fenxi'/>
              统计</NavLink>
          </li>
        </ul>
      </Nav>
    )
}
export default nav