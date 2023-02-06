const ctx = document.getElementById('canvas');
let ranges = document.querySelectorAll(".form-range");
let hl = ranges[0].value;
let il = ranges[1].value;
let sl = ranges[2].value;
let ml = ranges[3].value;
let cl = ranges[4].value;
let rl = ranges[5].value;
const data = {
    labels: [
      'Health Life',
      'Inner Life',
      'Social Life',
      'Money Life',
      'Career Life',
      'Relationship Life',
    ],
    datasets: [{
      label: "",
      data: [hl, il, sl, ml, cl, rl],
      fill: true,
      backgroundColor: 'rgba(13, 110, 253, 0.2)',
      borderColor: 'rgb(13, 110, 253)',
      pointBackgroundColor: 'rgb(13, 110, 253)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(13, 110, 253)'
    }]
  };

  const config = {
    type: 'radar',
    data: data,
    options: {
      legend: {
        display: false
      },
      elements: {
        line: {
          borderWidth: 3
        }
      },
      scale: {
        max: 10,
        min: 0,
        stepSize: 1
      }
    },
  };

  let chartUpdate = new Chart(ctx, config);

  function rangeChange(){
    let ranges = document.querySelectorAll(".form-range");
    let labels = document.querySelectorAll(".label");
    let hl_new = ranges[0].value;
    let il_new = ranges[1].value;
    let sl_new = ranges[2].value;
    let ml_new = ranges[3].value;
    let cl_new = ranges[4].value;
    let rl_new = ranges[5].value;
    labels[0].innerHTML = hl_new;
    labels[1].innerHTML = il_new;
    labels[2].innerHTML = sl_new;
    labels[3].innerHTML = ml_new;
    labels[4].innerHTML = cl_new;
    labels[5].innerHTML = rl_new;
    console.log([hl_new, il_new, sl_new, ml_new, cl_new, rl_new]);
    chartUpdate.data.datasets[0].data = [hl_new, il_new, sl_new, ml_new, cl_new, rl_new];
    chartUpdate.update();
  }