let date = new Date().toDateString();
window.onload = () => {
  const timeContainer = document.querySelector(".time-container-div");
  timeContainer.classList.add("dateTime");
  timeContainer.innerText = `${date}`;
};
