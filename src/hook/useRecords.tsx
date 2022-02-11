import { useEffect, useState } from "react"
import { useUpdate } from "./useUdate"
export type RecordItem = {// 每一条就是一个消费记录
  tagIds: number[]
  note: string
  category: '+' | '-'
  amount: number
  createdAt: string // ISO 8601
}
  type newRecordItem = Omit<RecordItem, 'createdAt'>
const defaultData = [
  {"tagIds":[4],
  "note":"日常消费",
  "category":"-",
  "amount":69,
  "createdAt":"2021-02-11T06:01:44.097Z"},
  {"tagIds":[2],
  "note":"支出一笔",
  "category":"-",
  "amount":60,
  "createdAt":"2021-09-22T06:01:44.097Z"},
  {"tagIds":[1],
  "note":"意外支出",
  "category":"-",
  "amount":23,
  "createdAt":"2022-01-01T06:01:44.097Z"},
  {"tagIds":[2],
  "note":"彩票",
  "category":"+",
  "amount":50,
  "createdAt":"2021-01-01T06:01:44.097Z"},
  {"tagIds":[1],
  "note":"捡钱了",
  "category":"+",
  "amount":10,
  "createdAt":"2022-01-01T06:01:44.097Z"}
]
const useRecords =()=>{
    const [records,setRecords] = useState<RecordItem[]>([])
    useEffect(()=>{// 只在第一次执行
        // setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
        let data =localStorage.getItem('records') || JSON.stringify(defaultData) 
        setRecords(JSON.parse(data));

    },[])
    useUpdate(()=>{
        window.localStorage.setItem('records', JSON.stringify(records));
    },[records])
    const addRecord = (newRecord: newRecordItem) => {
        if (newRecord.amount <= 0) {
            alert('请输入金额');
            return false;
          }
          if (newRecord.tagIds.length === 0) {
            alert('请选择标签');
            return false;
          }
        const record = {...newRecord, createdAt: (new Date()).toISOString()};
        setRecords([...records, record]);
        return true;
      };
    return {records, addRecord};
}
export {useRecords}