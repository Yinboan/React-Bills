import Layout from 'components/Layout';
import { useRecords } from 'hook/useRecords';
import { useState } from 'react';
import styled from 'styled-components';
import { CategorySection } from './Money/CategorySection';
import { NotesSection } from './Money/NotesSection';
import { NumberPadSection } from './Money/NumberPadSection';
import { TagSection } from './Money/TagsSection';


const MyLayout = styled(Layout)`
display:flex;
flex-direction: column;
`
const CategoryWrapper = styled.div`
    background:#c4c4c4;
`;

type Category = '-' | '+'

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
};

export default function Money() {
   const [state,setState] = useState(defaultFormData)
   const {records, addRecord} = useRecords();

   const onChange = (obj:Partial<typeof state>)=>{
     setState({
       ...state,
       ...obj
     })
   }
   const submit = () => {
    if (addRecord(state)) {
      alert('保存成功');
      setState(defaultFormData);
    }
  };

    return (
      <MyLayout>
        {/* {records.length} */}
        <CategoryWrapper>
        <CategorySection value={state.category}
          onChange={category => onChange({category})}/>
      </CategoryWrapper>
      
        <TagSection selected={state.tagIds}
                    onChange={(tagIds)=>{
                      onChange({tagIds})
                    }}
        />
        <NotesSection value={state.note}
                      onChange={(note)=>{
                        onChange({note})
                      }}
        />
      
        <NumberPadSection value={state.amount}
                          onChange={(amount:number)=>{
                            onChange({amount})
                          }}
                          onOk={submit}/>    
      </MyLayout>
    );
  }