'use strict';
const den1 = {
  name: "Pondělí",
  menu: [
  {
    title: 'Telecí hanger steak',
    info: 'Tymiánový porto demiglace, květákové pyré, ragú ze žluté řepy s bylinkami',
    price: 299,
  },
  {
    title: 'Grilované kuřecí stripsy',
    info: 'Stehenní kuřecí stripsy marinované v bílém jogurtu s limetkou a kurkumou, máslový kuskus s mátou, lístky rukoly, bylinkový dip',
    price: 169,
  },
  {
    title: 'Quesadilla s kuřecím masem',
    info: 'Se sýrem cheddar, jalapenos papričkami a bbq omáčkou, malý listový salátek, česnekový dip',
    price: 159,
  },
  {
    title: 'Čočka na kyselo',
    info: 'Uzená krkovice, sázené vejce, kyselá okurka, cibulka smažená v sádle',
    price: 149,
  },
  ]
};

document.querySelector(".menu").appendChild(renderDailyMenu(den1));

//document.querySelector(".menu").appendChild(renderMenuItem(den1.menu[0]));

