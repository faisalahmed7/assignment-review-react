import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid,  Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const MyChart = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (

        <div className='grid grid-cols-2 mt-16 mb-10 m-20'>
            <div>
                
                <LineChart width={400} height={400} data={data}>
                    <Line dataKey={'sell'} stroke="#8884d8" />
                    <Line dataKey={'investment'}> </Line>
                    <Line dataKey={'revenue'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    
                </LineChart>

                <h1 className='text-3xl'>Line Chart: Monthly Revenue, Sell and Investment</h1>
                
            </div>
            
            <div>
            <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        <h1 className='text-3xl'>Area Chart: Monthly Revenue</h1>
            </div>
        </div>
    );
};

export default MyChart;