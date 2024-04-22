// Scatter Plot
// Tạo dữ liệu mẫu
var scatterData = [
    { x: [1, 2, 3, 4, 5], y: [1, 2, 4, 8, 16], mode: 'markers', type: 'scatter' }
];


// Line Chart
// Tạo dữ liệu mẫu
var lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
        label: 'Sales',
        data: [20, 40, 30, 50, 45],
        borderColor: 'blue',
        borderWidth: 1,
        fill: false
    }]
};
// Vẽ biểu đồ
var lineChart = new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: lineData
});

// Bar Chart
// Tạo dữ liệu mẫu
var barData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: 'Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange']
    }]
};
// Vẽ biểu đồ
var barChart = new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: barData
});

// Pie Chart
// Tạo dữ liệu mẫu
var pieData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: ['red', 'blue', 'yellow']
    }]
};
// Vẽ biểu đồ
var pieChart = new Chart(document.getElementById('pieChart'), {
    type: 'pie',
    data: pieData
});

// Donut Chart
// Tạo dữ liệu mẫu
var donutData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: ['red', 'blue', 'yellow']
    }]
};
// Vẽ biểu đồ
var donutChart = new Chart(document.getElementById('donutChart'), {
    type: 'doughnut',
    data: donutData
});

// Bubble Chart
// Tạo dữ liệu mẫu
var bubbleData = {
    datasets: [{
        label: 'First Dataset',
        data: [{
            x: 20,
            y: 30,
            r: 15
        }, {
            x: 40,
            y: 10,
            r: 10
        }],
        backgroundColor: ['red', 'blue']
    }]
};
// Vẽ biểu đồ
var bubbleChart = new Chart(document.getElementById('bubbleChart'), {
    type: 'bubble',
    data: bubbleData
});
