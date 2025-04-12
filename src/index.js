// Tusk 1
const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
let currentKeyIndex = 0;
let lastNotification = null;

const keyDisplay = document.querySelector("#key");
const newGameBtn = document.querySelector("#newGameBtn");

const notify = (type, text) => {
  if (lastNotification) lastNotification.close();
  lastNotification = PNotify[type]({ text });
};

const setNewKey = () => {
  if (currentKeyIndex >= keys.length) {
    notify("success", "Гру завершено! Вітаємо!");
    keyDisplay.textContent = "✅";
  } else {
    keyDisplay.textContent = keys[currentKeyIndex];
  }
};

document.addEventListener("keydown", ({ key }) => {
  const expected = keys[currentKeyIndex];
  key === expected
    ? (currentKeyIndex++,
      notify("success", `Правильно: "${key}"!`),
      setNewKey())
    : notify("error", `Неправильно!"`);
});

document.addEventListener("keypress", (e) => e.preventDefault());

newGameBtn.addEventListener("click", () => {
  currentKeyIndex = 0;
  notify("info", "Нова гра розпочата!");
  setNewKey();
});

setNewKey();

// Tusk 2

const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      backgroundColor: "rgba(33, 150, 243, 0.2)",
      borderColor: "#2196f3",
      borderWidth: 2,
      fill: true,
      tension: 0.4,
    },
  ],
};

const config = {
  type: "line",
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "День місяця",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Сума продажів",
        },
      },
    },
  },
};

const ctx = document.getElementById("sales-chart").getContext("2d");
const salesChart = new Chart(ctx, config);
