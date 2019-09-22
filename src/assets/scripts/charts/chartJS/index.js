import Chart from 'chart.js';
import { COLORS } from '../../constants/colors';
import CanvasJS from './canvasjs.min.js';

import "./owl.carousel.min.js";

import {data} from "./test.js";


export default (function () {

var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("v1");
if (c) {
  document.getElementById("head").innerHTML = "Данные по Well #" + c;
console.log(c);
console.log(data[0])

let bk = []; 
var GZ1 = [], GZ2 = [], GZ3 = [], GZ4 = [], GZ5 = [], GZ6 = [], GZ7= [], DGK= [], NKTM= [], NKTR= [], ALPS= []; 
for (var item in data) {
  bk.push({x: data[item]['bk '], y: -data[item]['depth, m ']});
  GZ1.push({x: data[item]['GZ1 '], y: -data[item]['depth, m ']}) ;
  GZ2.push({x: data[item]['GZ2 '], y: -data[item]['depth, m ']}) ;
  GZ3.push({x: data[item]['GZ3 '], y: -data[item]['depth, m ']}) ;
  GZ4.push({x: data[item]['GZ4 '], y: -data[item]['depth, m ']}) ;
  GZ5.push({x: data[item]['GZ5 '], y: -data[item]['depth, m ']}) ;
  GZ7.push({x: data[item]['GZ7 '], y: -data[item]['depth, m ']}) ;
  DGK.push({x: data[item]['DGK '], y: -data[item]['depth, m ']}) ;
  NKTR.push({x: data[item]['NKTR '], y: -data[item]['depth, m ']}) ;
  ALPS.push({x: data[item]['ALPS '], y: -data[item]['depth, m ']}) ;
  NKTM.push({x: data[item]['NKTM '], y: -data[item]['depth, m ']}) ;
}

var owl = $('.owl-carousel');

owl.owlCarousel(
{
    items: 3,
    margin: 40,
});

$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})

    // Initialize a Line chart in the container with the ID chart1

var chart = new CanvasJS.Chart("chart1", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "bk"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: bk
  }]
});
chart.render();

var chart = new CanvasJS.Chart("chart2", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "GZ1"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: GZ1
  }]
});
chart.render();

var chart = new CanvasJS.Chart("chart3", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "GZ2"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: GZ2
  }]
});
chart.render();
var chart = new CanvasJS.Chart("chart4", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "GZ3"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: GZ3
  }]
});
chart.render();
var chart = new CanvasJS.Chart("chart5", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "GZ4"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: GZ4
  }]
});
chart.render();
var chart = new CanvasJS.Chart("chart6", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "GZ5"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: GZ5
  }]
});
chart.render();

var chart = new CanvasJS.Chart("chart8", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "GZ7"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: GZ7
  }]
});
chart.render();

var chart = new CanvasJS.Chart("chart9", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "DGK"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: DGK
  }]
});
chart.render();

var chart = new CanvasJS.Chart("chart10", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "NKTM"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: NKTM
  }]
});
chart.render();

var chart = new CanvasJS.Chart("chart11", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "NKTR"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: NKTR
  }]
});
chart.render();
var chart = new CanvasJS.Chart("chart12", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "ALPS"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: ALPS
  }]
});
chart.render();

//second info

var chart = new CanvasJS.Chart("chart21", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "bk"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: bk
  }]
});
chart.render();

var chart = new CanvasJS.Chart("chart22", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "GZ1"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: GZ1
  }]
});
chart.render();

var chart = new CanvasJS.Chart("chart23", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "GZ2"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: GZ2
  }]
});
chart.render();
var chart = new CanvasJS.Chart("chart24", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "GZ3"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: GZ3
  }]
});
chart.render();
var chart = new CanvasJS.Chart("chart25", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "GZ4"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: GZ4
  }]
});
chart.render();
var chart = new CanvasJS.Chart("chart26", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "GZ5"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: GZ5
  }]
});
chart.render();

var chart = new CanvasJS.Chart("chart28", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "GZ7"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: GZ7
  }]
});
chart.render();

var chart = new CanvasJS.Chart("chart29", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "DGK"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: DGK
  }]
});
chart.render();

var chart = new CanvasJS.Chart("chart210", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "NKTM"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: NKTM
  }]
});
chart.render();

var chart = new CanvasJS.Chart("chart211", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "NKTR"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: NKTR
  }]
});
chart.render();
var chart = new CanvasJS.Chart("chart212", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "ALPS"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: ALPS
  }]
});
chart.render();


/*
var chart = new CanvasJS.Chart("chart2", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "GZ2"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line",       
    dataPoints: [
        {x: 0.0, y: -2465.00},
        {x: 0.6651979286673, y: -2465.546},
        {x: 0.1151528258196, y: -2465.646},
        {x: 0.15525366187725, y: -2465.746},
        {x: 0.1253146285666, y: -2465.8145},
        {x: 0.0, y: -2467},
    ]
  }]
});
chart.render();*/


var chart = new CanvasJS.Chart("bar", {
  animationEnabled: true,
  title:{
    text: "Model",
  },
  theme: "light2",
  axisX: {
    interval: 0,
  },
  axisY:{
       title: "",
       tickLength: 0,
       lineThickness:0,
       margin:0,
       valueFormatString:" " //comment this to show numeric values
  },
  data: [{
    type: "stackedColumn",
    showInLegend: false,
    color: "#212529",
    name: "Q1",
    dataPoints: [
      { y: -2465.00},
    ]
    },
    {        
      type: "stackedColumn",
      showInLegend: false,
      name: "Q2",
      color: "#388e3c",
      dataPoints: [
        { y: -2465.446},
      ]
    },
    {        
      type: "stackedColumn",
      showInLegend: false,
      name: "Q3",
      color: "#212529",
      dataPoints: [
        { y: -2465.646},
      ]
    },
    {        
      type: "stackedColumn",
      showInLegend: false,
      name: "Q4",
      color: "#212529",
      dataPoints: [
        { y: -2467},
      ]
  }]
});
chart.render();

/*var chart = new CanvasJS.Chart("bar2", {
  animationEnabled: true,
  title:{
    text: "Model",
  },
  theme: "light2",
  axisX: {
    interval: 0,
  },
  axisY:{
       title: "",
       tickLength: 0,
       lineThickness:0,
       margin:0,
       valueFormatString:" " //comment this to show numeric values
  },
  data: [{
    type: "stackedColumn",
    showInLegend: false,
    color: "#212529",
    name: "Q1",
    dataPoints: [
      { y: -2465.00},
    ]
    },
    {        
      type: "stackedColumn",
      showInLegend: false,
      name: "Q2",
      color: "#388e3c",
      dataPoints: [
        { y: -2465.446},
      ]
    },
    {        
      type: "stackedColumn",
      showInLegend: false,
      name: "Q3",
      color: "#212529",
      dataPoints: [
        { y: -2465.646},
      ]
    },
    {        
      type: "stackedColumn",
      showInLegend: false,
      name: "Q4",
      color: "#212529",
      dataPoints: [
        { y: -2467},
      ]
  }]
});
chart.render();*/



  // ------------------------------------------------------
  // @Line Charts
  // ------------------------------------------------------

  const lineChartBox = document.getElementById('line-chart');

  if (lineChartBox) {
    const lineCtx = lineChartBox.getContext('2d');
    lineChartBox.height = 80;

    new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label                : 'Series A',
          backgroundColor      : 'rgba(237, 231, 246, 0.5)',
          borderColor          : COLORS['deep-purple-500'],
          pointBackgroundColor : COLORS['deep-purple-700'],
          borderWidth          : 2,
          data                 : [60, 50, 70, 60, 50, 70, 60],
        }, {
          label                : 'Series B',
          backgroundColor      : 'rgba(232, 245, 233, 0.5)',
          borderColor          : COLORS['blue-500'],
          pointBackgroundColor : COLORS['blue-700'],
          borderWidth          : 2,
          data                 : [70, 75, 85, 70, 75, 85, 70],
        }],
      },

      options: {
        legend: {
          display: false,
        },
      },

    });
  }

  // ------------------------------------------------------
  // @Bar Charts
  // ------------------------------------------------------

  const barChartBox = document.getElementById('bar-chart');

  if (barChartBox) {
    const barCtx = barChartBox.getContext('2d');

    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['Risk Level'],
        datasets: [
          {
            label: 'Low',
            data: [67.8],
            backgroundColor: '#D6E9C6',
          },
          {
            label: 'Moderate',
            data: [20.7],
            backgroundColor: '#FAEBCC',
          },
          {
            label: 'High',
            data: [11.4],
            backgroundColor: '#EBCCD1',
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{ stacked: true }],
          yAxes: [{ stacked: true }]
        }
      }
});
  }

  // ------------------------------------------------------
  // @Area Charts
  // ------------------------------------------------------

  const areaChartBox = document.getElementById('area-chart');

  if (areaChartBox) {
    const areaCtx = areaChartBox.getContext('2d');

    new Chart(areaCtx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          backgroundColor : 'rgba(3, 169, 244, 0.5)',
          borderColor     : COLORS['light-blue-800'],
          data            : [10, 50, 20, 40, 60, 30, 70],
          label           : 'Dataset',
          fill            : 'start',
        }],
      },
    });
  }

  // ------------------------------------------------------
  // @Scatter Charts
  // ------------------------------------------------------

  const scatterChartBox = document.getElementById('scatter-chart');

  if (scatterChartBox) {
    const scatterCtx = scatterChartBox.getContext('2d');

    Chart.Scatter(scatterCtx, {
      data: {
        datasets: [{
          label           : 'My First dataset',
          borderColor     : COLORS['red-500'],
          backgroundColor : COLORS['red-500'],
          data: [
            { x: 10, y: 20 },
            { x: 30, y: 40 },
            { x: 50, y: 60 },
            { x: 70, y: 80 },
            { x: 90, y: 100 },
            { x: 110, y: 120 },
            { x: 130, y: 140 },
          ],
        }, {
          label           : 'My Second dataset',
          borderColor     : COLORS['green-500'],
          backgroundColor : COLORS['green-500'],
          data: [
            { x: 150, y: 160 },
            { x: 170, y: 180 },
            { x: 190, y: 200 },
            { x: 210, y: 220 },
            { x: 230, y: 240 },
            { x: 250, y: 260 },
            { x: 270, y: 280 },
          ],
        }],
      },
    });
  }
  }
}())
