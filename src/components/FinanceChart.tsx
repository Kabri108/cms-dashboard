"use client";
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        expence: 4000,
        income: 2400,
        
    },
    {
        name: 'Feb',
        expence: 3000,
        income: 1398,
        
    },
    {
        name: 'Mar',
        expence: 2000,
        income: 9800,

    },
    {
        name: 'Apr',
        expence: 2780,
        income: 3908,
        
    },
    {
        name: 'May',
        expence: 1890,
        income: 4800,
        
    },
    {
        name: 'Jun',
        expence: 2390,
        income: 3800,
        
    },
    {
        name: 'July',
        expence: 3490,
        income: 4300,
        
    },
    {
        name: 'Aug',
        expence: 3490,
        income: 4300,
       
    },
    {
        name: 'Sep',
        expence: 3490,
        income: 4300,
       
    },
    {
        name: 'Oct',
        expence: 3490,
        income: 4300,
        
    },
    {
        name: 'Nov',
        expence: 3490,
        income: 4300,
        
    },
    {
        name: 'Dec',
        expence: 3490,
        income: 4300,
        
    },
];


const FinanceChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            <div className="flex justify-between items-center">
                <h1 className="font-semibold text-lg">Finance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>

            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#BDBDBD" }}
            tickLine={false}
            tickMargin={10}
          />
                     <YAxis axisLine={false} tick={{ fill: "#BDBDBD" }} tickLine={false}  tickMargin={20}/>
                    <Tooltip />
                    <Legend align='center' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}/>
                    <Line type="monotone" dataKey="expence" stroke="#CFCEFF" strokeWidth={5}/>
                    <Line type="monotone" dataKey="income"  stroke="#C3EBFA" strokeWidth={5}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default FinanceChart