import '../style.css';

const ctx = document.getElementById('myChart').getContext('2d');

Chart.defaults.font.size = 16;
Chart.defaults.font.color = '#000';

const labels = [
  'Paslon 1',
  'Paslon 2',
  'Paslon 3',
];

const data = {
  labels: labels,
  datasets: [{
    label: '',
    data: [75, 35, 65, 80],
    backgroundColor: [
      '#DC5555',
      '#2C4496',
      '#0C8E5F'
    ]
  },
  ]
}

const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    layout: {
      padding: {
        right: 20
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          borderWidth: 2,
          borderColor: '#000',
        }
      },
      y: {
        grid: {
          display: false,
          borderWidth: 2,
          borderColor: '#000',
        },
        ticks: {
          callback: function (value) {
            return value + '%';
          },
        }
      }
    }
  }
}
const myChart = new Chart(ctx, config);


// Presentase
const paslonSatu = document.getElementById('paslonSatu');
const paslonDua = document.getElementById('paslonDua');
const paslonTiga = document.getElementById('paslonTiga');

function showData(elemen, position) {
  elemen.firstElementChild.style.backgroundColor = data.datasets[0].backgroundColor[position];
  elemen.lastElementChild.innerText = data.datasets[0].data[position] + ' %';
}

showData(paslonSatu, 0);
showData(paslonDua, 1);
showData(paslonTiga, 2);
