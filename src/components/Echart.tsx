import echarts from 'echarts'
import { useEffect, useRef } from 'react'

function sum(arr:any){
    let sum =0
    arr.forEach((obj:any)=>{
        sum+= +obj.amount
    })
    return sum
}
function dealData(arr:any){
    let x:any=[],val:any=[]
    arr.forEach((day:any)=>{
        // ['2022年02月11日', Array(8)]
        x.unshift(day[0].substring(5))
        val.unshift(sum(day[1]))
    })
    return {
        x,val
    }
}
export default function Echart(props:any){
    let ref:any = useRef(null)
    let char:any = useRef(null)
    // console.log(props.array)
    useEffect(()=>{
        // 初始化表格大小
        const devW = document.documentElement.clientWidth
        ref.current.style.width =  devW-20+'px'
        ref.current.style.height = (devW-20)*1.2+'px'
        char.current = echarts.init(ref.current,'light')
        char.current.setOption({
            xAxis: {
                type: 'category',
                data: [],
                axisLabel: {
                  interval:0,
                  textStyle: {
                      color: '#7c8893',
                      fontSize: 12
                  },
                  formatter: function(value:any) {
                      return value.substring(0,3) +'\n'+ value.substring(3)
                  }
              }
              },
              yAxis: {
                type: 'value'
              },
              series: [
                {
                  data: [],
                //   type: 'line'
                  type: 'line',
                  symbolSize: 15,
                  symbol: "circle",
                  itemStyle : { normal: {label : {show: true}}},
                //   markPoint: {
                //     data: [{
                //       type: "min"
                //     }],
                //     symbol: "circle",
                //     animation:true
                //   }
                }
              ]
        })

    },[])
    useEffect(()=>{
        // console.log()
        let res = dealData(props.array)
        char.current.setOption({
            xAxis: {
                data:res.x
            },
            series:[{
                data:res.val
            }]
        })
    },[props])
    return (
        <div ref={ref}>
        </div>
    )
}