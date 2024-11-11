import React from 'react'
import Highcharts, { color } from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LineChart = ({
    data,
    categories,
    series
}) => {
    const options = {
        chart: {
            type: "line",
            height: 133, // Set chart height
            backgroundColor: "#2b2b2b", // Set chart background color
        },
        title: {
            text: null,
        },
        xAxis: {
            categories: categories,
            labels: {
                style: {
                    color: "#999", // Set x-axis label color
                },
            },
        },
        yAxis: {
            title: {
                text: null,
            },
            labels: {
                formatter: function () {
                    return `${this.value}`; // Show values as percentages
                },
                style: {
                    color: "#999", // Set y-axis label color
                },
            },
        },
        tooltip: {
            formatter: function () {
                return `${this.y}%`; // Show actual value in tooltip
            },
            backgroundColor: "black",
            style: {
                color: "white"
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: false,
                    formatter: function () {
                        return `${this.y}%`; // Show percentage next to data points
                    },
                    color: "#FF5733",
                },
            },
        },
        series: [
            {
                name: "Sample Data",
                data: data,
                color: "green",
            },
        ],
        legend: {
            enabled: false,
        },
        credits: {
            enabled: false,
        },
    };
    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </>
    )
}

export default LineChart
