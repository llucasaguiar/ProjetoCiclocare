const calendarGrid = document.getElementById('calendarGrid');

const monthYear = document.getElementById('monthYear');

const prevMonth = document.getElementById('prevMonth');

const nextMonth = document.getElementById('nextMonth');

let currentDate = new Date();

function renderCalendar(){

  calendarGrid.innerHTML = '';

  const year = currentDate.getFullYear();

  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();

  const lastDate = new Date(year, month + 1, 0).getDate();

  const monthNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ];

  monthYear.textContent =
  `${monthNames[month]} ${year}`;

  for(let i = 0; i < firstDay; i++){

    const empty = document.createElement('div');

    calendarGrid.appendChild(empty);
  }

  for(let day = 1; day <= lastDate; day++){

    const dayElement =
    document.createElement('div');

    dayElement.classList.add('day');

    dayElement.textContent = day;

    dayElement.addEventListener('click', () => {

      dayElement.classList.toggle('selected');

    });

    calendarGrid.appendChild(dayElement);
  }
}

prevMonth.addEventListener('click', () => {

  currentDate.setMonth(
    currentDate.getMonth() - 1
  );

  renderCalendar();
});

nextMonth.addEventListener('click', () => {

  currentDate.setMonth(
    currentDate.getMonth() + 1
  );

  renderCalendar();
});

renderCalendar();

const ctx =
document.getElementById('cycleChart');

new Chart(ctx, {

  type:'line',

  data:{

    labels:[
      'Dom',
      'Seg',
      'Ter',
      'Qua',
      'Qui',
      'Sex',
      'Sáb'
    ],

    datasets:[

      {

        label:'Humor',

        data:[12, 25, 19, 24, 22, 38, 20],

        borderColor:'#d48fb0',

        backgroundColor:
        'rgba(212,143,176,0.2)',

        tension:0.4,

        fill:true
      },

      {

        label:'Energia',

        data:[10, 28, 22, 18, 30, 40, 15],

        borderColor:'#c79672',

        backgroundColor:
        'rgba(199,150,114,0.2)',

        tension:0.4,

        fill:true
      }

    ]
  },

  options:{

    responsive:true,

    maintainAspectRatio:false
  }

});

const moodButtons =
document.querySelectorAll('.mood-btn');

const currentMood =
document.getElementById('currentMood');

let humorSelecionado = '';

moodButtons.forEach(button => {

  button.addEventListener('click', () => {

    moodButtons.forEach(btn =>

      btn.classList.remove(
        'selectedMood'
      )
    );

    button.classList.add(
      'selectedMood'
    );

    const emoji =
    button.innerText;

    const humor =
    button.dataset.humor;

    humorSelecionado =
    `${humor} ${emoji}`;

    currentMood.innerText =
    humorSelecionado;

  });

});

const energyButtons =
document.querySelectorAll('.energy-btn');

const currentEnergy =
document.getElementById('currentEnergy');

let energiaSelecionada = '';

energyButtons.forEach(button => {

  button.addEventListener('click', () => {

    energyButtons.forEach(btn =>

      btn.classList.remove(
        'selectedEnergy'
      )
    );

    button.classList.add(
      'selectedEnergy'
    );

    const emoji =
    button.innerText;

    energiaSelecionada =
    `${emoji}`;

    currentEnergy.innerText =
    energiaSelecionada;

  });

});