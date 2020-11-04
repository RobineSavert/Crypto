import CanvasJSReact from '../plugins/canvasjs.react';
import React, {Component} from 'react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class CryptoChart extends Component {
    constructor() {
        super();
        this.toggleDataSeries = this.toggleDataSeries.bind(this);
    }

    toggleDataSeries(e){
        e.dataSeries.visible = !(typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible);
        this.chart.render();
    }

    render() {
        const options = {
            theme: "light2",
            animationEnabled: true,
            axisX: {
                title: "States"
            },
            axisY: {
                title: "Units Sold",
                titleFontColor: "#6D78AD",
                lineColor: "#6D78AD",
                labelFontColor: "#6D78AD",
                tickColor: "#6D78AD"
            },
            axisY2: {
                title: "Profit in USD",
                titleFontColor: "#51CDA0",
                lineColor: "#51CDA0",
                labelFontColor: "#51CDA0",
                tickColor: "#51CDA0"
            },
            toolTip: {
                shared: true
            },
            legend: {
                cursor: "pointer",
                itemclick: this.toggleDataSeries
            },
            data: [{
                type: "spline",
                name: "Sold",
                showInLegend: true,
                xValueFormatString: "MMM YYYY",
                yValueFormatString: "#,##0 Units",
                dataPoints: [
                    { x: new Date(2020, 0, 1), y: 120 },
                    { x: new Date(2020, 1, 1), y: 135 },
                    { x: new Date(2020, 2, 1), y: 144 },
                    { x: new Date(2020, 3, 1), y: 103 },
                    { x: new Date(2020, 4, 1), y: 93 },
                    { x: new Date(2020, 5, 1), y: 129 },
                    { x: new Date(2020, 6, 1), y: 143 },
                    { x: new Date(2020, 7, 1), y: 156 },
                    { x: new Date(2020, 8, 1), y: 122 },
                    { x: new Date(2020, 9, 1), y: 106 },
                    { x: new Date(2020, 10, 1), y: 137 },
                    { x: new Date(2020, 11, 1), y: 142 }
                ]
            },
                {
                    type: "spline",
                    name: "Profit",
                    axisYType: "secondary",
                    showInLegend: true,
                    xValueFormatString: "MMM YYYY",
                    yValueFormatString: "$#,##0.#",
                    dataPoints: [
                        { x: new Date(2020, 0, 1), y: 19034.5 },
                        { x: new Date(2020, 1, 1), y: 20015 },
                        { x: new Date(2020, 2, 1), y: 27342 },
                        { x: new Date(2020, 3, 1), y: 20088 },
                        { x: new Date(2020, 4, 1), y: 20234 },
                        { x: new Date(2020, 5, 1), y: 29034 },
                        { x: new Date(2020, 6, 1), y: 30487 },
                        { x: new Date(2020, 7, 1), y: 32523 },
                        { x: new Date(2020, 8, 1), y: 20234 },
                        { x: new Date(2020, 9, 1), y: 27234 },
                        { x: new Date(2020, 10, 1), y: 33548 },
                        { x: new Date(2020, 11, 1), y: 32534 }
                    ]
                }]
        }


        return (
            <div>
                <CanvasJSChart options = {options}
                               onRef={ref => this.chart = ref}
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }

}

export default CryptoChart;