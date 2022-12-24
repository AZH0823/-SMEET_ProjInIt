// ============  chart.js ============ //

const myChart1 = document.getElementById('myChart1').getContext('2d');
const myChart2 = document.getElementById('myChart2').getContext('2d');

// global options

let massPopChart1 = new Chart(myChart1, {
    type: 'line', // bar條狀圖, horizontalBar橫條圖, pie圓餅圖, line折線圖, doughnut甜甜圈圓餅圖, radar雷達圖, polarArea極坐標園餅圖
    data: {
        labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6'],
        datasets: [{
            label: 'date',
            data: [50, 50, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }]
    },
    options: {
        title: {
            display: true,
            text: "新增會員數"
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: false // false 才能用父容器調整大小
    }
});

let massPopChart2 = new Chart(myChart2, {
    type: 'line', // bar條狀圖, horizontalBar橫條圖, pie圓餅圖, line折線圖, doughnut甜甜圈圓餅圖, radar雷達圖, polarArea極坐標園餅圖
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'month',
            data: [50, 50, 3, 5, 2, 3, 10],
            borderWidth: 1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }]
        
    },
    options: {
        title: {
            display: true,
            text: "總訂單數"
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: false // false 才能用父容器調整大小
    }
});