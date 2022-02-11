import { useState } from 'react';
import styled from 'styled-components';
const _NumberPadSection = styled.section`
display:flex;
flex-direction: column;
> .output{
  box-sizing: border-box;
  background:rgb(254, 210, 95);
  font-size: 36px;
  line-height: 64px;
  text-align:right;
  padding: 6px 16px;
  box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
              inset 0 5px 5px -5px rgba(0,0,0,0.25);
  > div{
    background-color: rgb(253, 253, 253);
    border-radius: 20px;
    padding: 0 20px;
    box-sizing: border-box;
  }
}
> .pad{ 
  background-color: rgb(254, 210, 95);
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  > button{
    font-size: 20px;
    width: 20%; 
    height: 60px; 
    border: 1px solid black;
    margin: 3px 4px;
    border-radius: 20px;
    background-color: rgb(253, 253, 253);
    /* &.ok{ height: 128px; float: right; } */
    &.zero{ width: 71%; }
    &:nth-child(14) {
      background:#A9A9A9;
     margin-left: 9px;
    }
    &:focus{
    background-color: rgb(210, 210, 210);
    }
  }
}
`;



const NumberPadSection = (props:any) => {
  const outStr = ''+props.value
  const _setOut = props.onChange

  function setOut(output: string) {
    if (output.length > 16) {
      output = output.slice(0, 16);
    } else if (output.length === 0) {
      output = '0';
    }
    _setOut(output);
  }

  const btnsClick = (e: React.MouseEvent) => {
    let text = (e.target as HTMLButtonElement).innerText
    if (text === 'OK') {
      // TODO 
      if (props.onOk) {props.onOk();}
      return;
    }
    if (/^[0-9]$/.test(text)) {
      // 数字就赋值
      if (outStr === '0') {
        setOut(text);
      } else {
        setOut(outStr + text);
      }
    } else if (/^\.$/.test(text)) {
      if (outStr.indexOf('.') >= 0) { return; }
      setOut(outStr + '.');
    } else if (/^删除$/.test(text)) {
      if (outStr.length === 1) {
        setOut('');
      } else {
        setOut(outStr.slice(0, -1));
      }
    } else if (/^清空$/.test(text)) {
      setOut('0');
    }


  }

  return (
    <_NumberPadSection>
      <div className="output">
        <div>
        {outStr}
        </div>
      </div>
      <div className="pad clearfix" onClick={btnsClick}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </_NumberPadSection>
  )
}
export { NumberPadSection }
