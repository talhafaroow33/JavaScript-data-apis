drawChart();
async function drawChart() {
  const { xs, globData, nHemData, sHemData } = await getData();
  const ctx = document.getElementById("canvas").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: xs,
      datasets: [
        {
          label:
            "Combined Land-Surface Air and Sea-Surface Water Temperature of Glob in °C",
          data: globData,
          color: "#fff",
          label: "Buying",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "#2a2c30",
          borderColor: "#2a2c30",
          borderCapStyle: "round",
          borderJoinStyle: "round",
          pointBorderColor: "#2a2c30",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#2a2c30",
          pointHoverBorderColor: "#fff",
          pointHoverBorderWidth: 5,
          pointRadius: 0,
          pointHitRadius: 5,
        },
        {
          label:
            "Combined Land-Surface Air and Sea-Surface Water Temperature of NHem in °C",
          data: nHemData,
          lineTension: 0.3,
          backgroundColor: "#f84c1e",
          borderColor: "#f84c1e",
          borderCapStyle: "round",
          borderJoinStyle: "round",
          pointBorderColor: "#f84c1e",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#f84c1e",
          pointHoverBorderColor: "#fff",
          pointHoverBorderWidth: 5,
          pointRadius: 0,
          pointHitRadius: 5,
        },
        {
          label:
            "Combined Land-Surface Air and Sea-Surface Water Temperature of SHem in °C",
          data: sHemData,
          lineTension: 0.3,
          backgroundColor: "#a41ef8",
          borderColor: "#a41ef8",
          borderCapStyle: "round",
          borderJoinStyle: "round",
          pointBorderColor: "#a41ef8",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#a41ef8",
          pointHoverBorderColor: "#fff",
          pointHoverBorderWidth: 5,
          pointRadius: 0,
          pointHitRadius: 5,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
    options: {
      scales: {
        y: {
          ticks: {
            callback: function (value, index, ticks) {
              return value + "°C";
            },
          },
        },
      },
    },
  });
}

async function getData() {
  const xs = [];
  const globData = [];
  const nHemData = [];
  const sHemData = [];

  const response = await fetch("../csv/ZonAnn.Ts+dSST.csv");
  const data = await (await response.text()).trim();
  console.log(data);

  const table = data.split("\n").splice(1);
  table.forEach((row) => {
    const columns = row.split(",");
    const year = columns[0];
    xs.push(year);
    const tempGlob = columns[1];
    globData.push(parseFloat(tempGlob) + 14);
    const tempNHem = columns[2];
    nHemData.push(parseFloat(tempNHem) + 14);
    const tempsHem = columns[3];
    sHemData.push(parseFloat(tempsHem) + 14);
  });

  return { xs, globData, nHemData, sHemData };
}
