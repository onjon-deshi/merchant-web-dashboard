import { Chart } from "react-google-charts";
const $ = require( "jquery" );


window.addEventListener("load",()=>{
    $(".chart-div-right").find("rect").attr("width","100");
    console.log("Chart load.");
});

const gChart = () => {
    return (
        <Chart
            height={140}
            width={140}
            
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
                ["Name", "Age"],
                ["IAP", 120],
                ["QR", 190],
                ["QR II", 210],
            ]}
            options={{
                legend: "none",
                chartArea: { left: 10, top: 10, right: 10, bottom: 10 },
                pieSliceText: "none",
                pieHole: .4,
                colors: ['#077721', '#05A72B', '#00D632'],
            }}

            chartWrapperParams={{ view: { columns: [0, 1] } }}
            render={({ renderControl, renderChart }) => {
                return (
                    <div className="relative flow-root left-full">
                        {renderChart()}
                    </div>
                );
            }}
            />
    );
}



export default gChart;