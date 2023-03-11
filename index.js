
// getData();
// const xlabels = [];
// const ylabels = [];

// async function getData() {
//     const response = await fetch('./ZonAnnTs+dSST.csv');
//     const data = await response.text();
//     const rows = data.split("\n").slice(1);

//     rows.forEach(elt => {
//         const row = elt.split(',');
//         const year = row[0];
//         const temp = row[1];
//         xlabels.push(year);
//         ylabels.push(temp);
//     });
// }

// console.log(xlabels);
// console.log(ylabels);

// const ctx = document.getElementById('mychart').getContext('2d');
// const myChart = new CharacterData(ctx, {
//     type:'line',
//     data:{
//         labels: xlabels,
//         datasets: [
//             {
//                 data:ylabels
//             }
//         ]
//     } 
// }
// )
// papa.parse('test.csv')

// const Chart = require('chart.js');
// import Chart from 'chart.js/auto';

// const ctx = document.getElementById("myChart");
// const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

