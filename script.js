const addButtons = document.querySelectorAll('.add-button');
const activityInputs = document.querySelectorAll('.activity-input');
const activityDivs = document.querySelectorAll('.activity');
const saveButtons = document.querySelectorAll('.save-button'); // Agregamos esta línea para seleccionar los botones de guardar

const today = new Date();
const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

for (let i = 1; i <= 5; i++) {
  const day = new Date(today);
  day.setDate(today.getDate() + (i - today.getDay()));
  document.getElementById(`day${i}`).innerHTML = `<div>${days[day.getDay()]}</div><div>${day.toLocaleDateString()}</div>`;
}

addButtons.forEach((addButton, index) => {
  addButton.addEventListener('click', () => {
    activityInputs[index].style.display = 'block';
    addButton.style.display = 'none';
    activityInputs[index].value = activityDivs[index].textContent;
  });
});

saveButtons.forEach((saveButton, index) => {
  saveButton.addEventListener('click', () => {
    activityDivs[index].textContent = activityInputs[index].value;
    activityInputs[index].style.display = 'none';
    addButtons[index].style.display = 'block';
  });
});


