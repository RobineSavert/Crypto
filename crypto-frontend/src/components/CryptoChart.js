import CanvasJSReact from '../plugins/canvasjs.react';
import React, {Component} from 'react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class CryptoChart extends Component {
    constructor(props) {
        super(props);
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
                title: "Months"
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
                yValueFormatString: "#,##0",
                dataPoints: [
                    { x: new Date(2020, 0, 1), y: this.props.crypto.archived_data[0].sold },
                    { x: new Date(2020, 1, 1), y: this.props.crypto.archived_data[1].sold },
                    { x: new Date(2020, 2, 1), y: this.props.crypto.archived_data[2].sold },
                    { x: new Date(2020, 3, 1), y: this.props.crypto.archived_data[3].sold },
                    { x: new Date(2020, 4, 1), y: this.props.crypto.archived_data[4].sold },
                    { x: new Date(2020, 5, 1), y: this.props.crypto.archived_data[5].sold },
                    { x: new Date(2020, 6, 1), y: this.props.crypto.archived_data[6].sold },
                    { x: new Date(2020, 7, 1), y: this.props.crypto.archived_data[7].sold },
                    { x: new Date(2020, 8, 1), y: this.props.crypto.archived_data[8].sold },
                    { x: new Date(2020, 9, 1), y: this.props.crypto.archived_data[9].sold },
                    { x: new Date(2020, 10, 1), y: this.props.crypto.archived_data[10].sold },
                    { x: new Date(2020, 11, 1), y: this.props.crypto.quantity }
                ]
            },
                {
                    type: "spline",
                    name: "Bought",
                    showInLegend: true,
                    xValueFormatString: "MMM YYYY",
                    yValueFormatString: "#,##0.#",
                    dataPoints: [
                        { x: new Date(2020, 0, 1), y: this.props.crypto.archived_data[0].bought },
                        { x: new Date(2020, 1, 1), y: this.props.crypto.archived_data[1].bought },
                        { x: new Date(2020, 2, 1), y: this.props.crypto.archived_data[2].bought },
                        { x: new Date(2020, 3, 1), y: this.props.crypto.archived_data[3].bought },
                        { x: new Date(2020, 4, 1), y: this.props.crypto.archived_data[4].bought },
                        { x: new Date(2020, 5, 1), y: this.props.crypto.archived_data[5].bought },
                        { x: new Date(2020, 6, 1), y: this.props.crypto.archived_data[6].bought },
                        { x: new Date(2020, 7, 1), y: this.props.crypto.archived_data[7].bought },
                        { x: new Date(2020, 8, 1), y: this.props.crypto.archived_data[8].bought },
                        { x: new Date(2020, 9, 1), y: this.props.crypto.archived_data[9].bought },
                        { x: new Date(2020, 10, 1), y: this.props.crypto.archived_data[10].bought },
                        { x: new Date(2020, 11, 1), y: this.props.crypto.quantity },
                    ]
                },
                {
                    type: "spline",
                    name: "Wallet",
                    showInLegend: true,
                    xValueFormatString: "MMM YYYY",
                    yValueFormatString: "#,##0.#",
                    dataPoints: [
                        { x: new Date(2020, 0, 1), y: this.props.crypto.archived_data[0].wallet },
                        { x: new Date(2020, 1, 1), y: this.props.crypto.archived_data[1].wallet },
                        { x: new Date(2020, 2, 1), y: this.props.crypto.archived_data[2].wallet },
                        { x: new Date(2020, 3, 1), y: this.props.crypto.archived_data[3].wallet },
                        { x: new Date(2020, 4, 1), y: this.props.crypto.archived_data[4].wallet },
                        { x: new Date(2020, 5, 1), y: this.props.crypto.archived_data[5].wallet },
                        { x: new Date(2020, 6, 1), y: this.props.crypto.archived_data[6].wallet },
                        { x: new Date(2020, 7, 1), y: this.props.crypto.archived_data[7].wallet },
                        { x: new Date(2020, 8, 1), y: this.props.crypto.archived_data[8].wallet },
                        { x: new Date(2020, 9, 1), y: this.props.crypto.archived_data[9].wallet },
                        { x: new Date(2020, 10, 1), y: this.props.crypto.archived_data[10].wallet },
                        { x: new Date(2020, 11, 1), y: this.props.crypto.wallet },
                    ]
                }
            ]
        }


        return (
            <div>
                <CanvasJSChart options = {options}
                               onRef={ref => this.chart = ref}
                />
            </div>
        );
    }

}

export default CryptoChart;