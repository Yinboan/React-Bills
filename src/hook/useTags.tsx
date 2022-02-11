import { useUpdate } from "hook/useUdate";
import createId from "lib/createId";
import { useEffect, useState } from "react";


export default function useTags(){
    
    const [tags,setTags]=useState<{id:number,name:string}[]>([])

    useEffect(()=>{
      
      // 第一次执行，拿数据
      let localTags = JSON.parse(localStorage.getItem('tags')||'[]')
      if(localTags.length <= 0){
        localTags = [
          {id: createId(), name: '衣服'},
          {id: createId(), name: '食物'},
          {id: createId(), name: '房租'},
          {id: createId(), name: '交通'},
          {id: createId(), name: '医药'},
          {id: createId(), name: '交通'},
          {id: createId(), name: '运动'},
          {id: createId(), name: '其他'}
        ];
        // localStorage.setItem('tags',JSON.stringify(localTags))
      }
      setTags(localTags)
    },[])

    useUpdate(()=>{
      localStorage.setItem('tags',JSON.stringify(tags))
    },[tags])
    
    const findTag =(id:string)=>{
        return tags.filter((tag)=>{return tag.id == +id})[0] || {id:-1,name:'id已不存在'}
    }
    const findTagIndex = (id: number) => {
        let result = -1;
        for (let i = 0; i < tags.length; i++) {
          if (tags[i].id === id) {
            result = i;
            break;
          }
        }
        return result;
      };
      const updateTag = (id: number, {name}: { name: string }) => {
        setTags(tags.map(tag => tag.id === id ? {id, name: name} : tag));
      };

      const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id));
      };
      const addTag = () => {
        console.log('hi');
        const tagName = window.prompt('新标签的名称为：');
        if (tagName !== null && tagName !== '') {
          setTags([...tags, {id: createId(), name: tagName}]);
        }
      };
      const getName = (id: number) => {
        const tag = tags.filter(t => t.id === id)[0];
        return tag ? tag.name : '';
      };
      return {tags, getName, addTag, setTags, findTag, updateTag, findTagIndex, deleteTag};
}