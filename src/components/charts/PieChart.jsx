import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import React from "react";
import { Pie } from "react-chartjs-2";


export default function PieChart({ expensies, categories }) {


 const [dataSet, setDataSet] = useState([
   {name: 'Dining Out', amount: 30.15},
   {name: 'Transit', amount: 5.3}
 ]);


 const setupData = () => {


   let newData = [];
   categories.map((cate, index) => {
     let total = 0;
     let name = cate.name;
     let categoryId = cate.id;
     expensies.filter((item) => item.category == categoryId).forEach(element => {
       console.log(element);
       total += element.amount;
     });
     if (total > 0) newData.push({ name: name, amount: total })
   });
   console.log(newData)
   setDataSet(newData)
   console.log(dataSet)


   setChartData({
     labels: newData.map((data) => data.name),
     datasets: [
       {
         label: "Expensive ",
         data: newData.map((data) => data.amount),
         backgroundColor: [
           "rgba(75,192,192,1)",
           "#ecf0f1",
           "#50AF95",
           "#f3ba2f",
           "#2a71d0"
         ],
         borderColor: "black",
         borderWidth: 2
       }
     ]
   });
 }


 useEffect(() => {
   setupData();
 }, [expensies])
 const [chartData, setChartData] = useState({
   labels: dataSet.map((data) => data.name),
   datasets: [
     {
       label: "Expensive ",
       data: dataSet.map((data) => data.amount),
       backgroundColor: [
         "rgba(75,192,192,1)",
         "#ecf0f1",
         "#50AF95",
         "#f3ba2f",
         "#2a71d0"
       ],
       borderColor: "black",
       borderWidth: 2
     }
   ]
 });


 return (
   <>
     <h2>Expense Analysis </h2>


     <Pie
       data={chartData}
       options={{
         plugins: {
           title: {
             display: true,
             text: "Expense Analysis"
           }
         }
       }}
     />
   </>
 );
}
