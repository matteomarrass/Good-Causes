const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Recieved Donations (in M$)",
        data: [12, 19, 20, 18, 50, 124],
        backgroundColor: [
          "#b1b2ff",
          "#b1b2ff",
          "#b1b2ff",
          "#b1b2ff",
          "#b1b2ff",
          "#b1b2ff",
        ],
        borderColor: [
          "#eef1ff",
          "#eef1ff",
          "#eef1ff",
          "#eef1ff",
          "#eef1ff",
          "#eef1ff",
        ],
        borderWidth: 1,
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
});

const ctx2 = document.getElementById("secondChart");
const mySecondChart = new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["School (in M$)", "Hospitals (in M$)", "Food (in M$)"],
    datasets: [
      {
        label: "Usage of the Money",
        data: [200, 170, 130],
        backgroundColor: ["#b1b2ff", "#AAC4FF", "#D2DAFF"],
        hoverOffset: 4,
      },
    ],
  },
});

const datas = [10000, "2000 liters", "more than 50.000"];

const books = (document.getElementById("books").innerHTML = datas[0]);
const water = (document.getElementById("water").innerHTML = datas[1]);
const saved = (document.getElementById("saved").innerHTML = datas[2]);
