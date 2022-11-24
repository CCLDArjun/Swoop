/* App.js */
import React from "react";
import { Component } from 'react';
import CanvasJSReact from 'C:/Users/Shrey/github-workspace/CS151-Swoop-2/CS151-Swoop/swoop/src/impactViews/canvasjs-3.7.2/canvasjs.react.js';
import { Navbar } from "../components/reactMenu/navbar";
import "./viewImpact.css";

//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class viewImpact extends Component {
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Gas cost saved by Trip Date"
			},
			axisY: {
				title: "Gas Cost($)",
				prefix: "$"
			},
			axisX: {
				title: "Trip Date(s)",
				interval: 2,
                prefix: "Week "
			},
			data: [{
				type: "line",
				toolTipContent: "Week {x}: ${y}",
				dataPoints: [
					{ x: 1, y: 64 },
					{ x: 2, y: 61 },
					{ x: 3, y: 64 },
					{ x: 4, y: 62 },
					{ x: 5, y: 64 },
					{ x: 6, y: 60 },
					{ x: 7, y: 58 },
					{ x: 8, y: 59 },
					{ x: 9, y: 53 },
					{ x: 10, y: 54 },
					{ x: 11, y: 61 },
					{ x: 12, y: 60 },
					{ x: 13, y: 55 },
					{ x: 14, y: 60 },
					{ x: 15, y: 56 },
					{ x: 16, y: 60 },
					{ x: 17, y: 59.5 },
					{ x: 18, y: 63 },
					{ x: 19, y: 58 },
					{ x: 20, y: 54 },
					{ x: 21, y: 59 },
					{ x: 22, y: 64 },
					{ x: 23, y: 59 }
				]
			}]
		}
        const co2 = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "CO2 saved by Trip Date"
			},
			axisY: {
				title: "CO2",
				suffix: " pounds"
			},
			axisX: {
				title: "Trip Date(s)",
				interval: 2,
                prefix: "Week "
			},
			data: [{
				type: "line",
				toolTipContent: "Week {x}: {y} tons of CO2 saved",
				dataPoints: [
					{ x: 1, y: 64 },
					{ x: 2, y: 61 },
					{ x: 3, y: 64 },
					{ x: 4, y: 62 },
					{ x: 5, y: 64 },
					{ x: 6, y: 60 },
					{ x: 7, y: 58 },
					{ x: 8, y: 59 },
					{ x: 9, y: 53 },
					{ x: 10, y: 54 },
					{ x: 11, y: 61 },
					{ x: 12, y: 60 },
					{ x: 13, y: 55 },
					{ x: 14, y: 60 },
					{ x: 15, y: 56 },
					{ x: 16, y: 60 },
					{ x: 17, y: 59.5 },
					{ x: 18, y: 63 },
					{ x: 19, y: 58 },
					{ x: 20, y: 54 },
					{ x: 21, y: 59 },
					{ x: 22, y: 64 },
					{ x: 23, y: 59 }
				]
			}]
		}
		return (
            <div id = "container"> 
                <Navbar />   
                <div id="viewImpactGraph1Styles">
                <CanvasJSChart options = {options}
                    /* onRef={ref => this.chart = ref} */
                />
                
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                </div>
                <div id = "viewImpactGraph2Styles">
                <CanvasJSChart co2 = {co2}
                    /* onRef={ref => this.chart = ref} */
                />
                </div>
            </div>
		);

	}
}

export default viewImpact;
//module.exports = viewImpact;