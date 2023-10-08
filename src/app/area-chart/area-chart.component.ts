import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {

  Highcharts = Highcharts
  chartOptions = {}

  constructor(){
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text:'Yearly Placement Evaluation - Luminar Technolab',
          align: 'center'
      },
      xAxis:{
        categories:['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
      },
      yAxis: {
          title: {
              useHTML: true,
              text: 'Number of Placements'
          }
      },
      tooltip: {
          shared: true,
          headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      credits:{
        enabled:false
      },
      plotOptions: {
          // series: {
          //     pointStart: 1
          // },
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'MEARN',
          data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214,16240,16250,16260]
      }, {
          name: 'PYTHON',
          data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039,5030,5020,5010]
  
      }, {
          name: 'TESTING',
          data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913,4916,4920,4990]
      }, {
          name: 'FLUTTER',
          data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550,2000,2005,2010]
  
      }, {
          name: 'BIG DATA',
          data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186,2170,2190,2200]
      }]
  }

  //chart exporting step
  HC_exporting(Highcharts);
  }

}
