import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components'

ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
//   labels: ['Incomplete', 'Complete'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(46, 163, 38, 0.2)',

//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         '#229824',

//       ],
//       borderWidth: 1,
//     },
//   ],
// };

const DoughnutChart = (props:any) => {
   const data = {
    labels: ['Incomplete', 'Complete'],
    datasets: [
      {
        label: '# of Votes',
        data: [props.incomplete, props.complete],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(46, 163, 38, 0.2)',
  
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          '#229824',
  
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{width: '260px', height: '260px'}}>
     <Doughnut data={data} updateMode='resize'  />
     </div>
  )
}

export default DoughnutChart