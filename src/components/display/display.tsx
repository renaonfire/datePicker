import { Component, h } from '@stencil/core';

@Component({
  tag: 'dates-display',
  styleUrl: 'display.css',
  shadow: false
})
export class Display {


componentDidLoad(){
  
  
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
 
  const displayedDate = document.querySelector(".selected-date");
  const cal = document.querySelector(".calendar");
  const prevArrow = document.querySelector(".prev-mth");
  const nextArrow = document.querySelector(".next-mth");
  const mth_element = document.querySelector(".mth");
  const days_element = document.querySelector(".days")


  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  let selectedDate = date;
  let selectedDay = day;
  let selectedMonth = month;
  let selectedYear = year;


  displayedDate.addEventListener("click", showCalendar);
 
  nextArrow.addEventListener("click", goToNextMonth);

  prevArrow.addEventListener("click", goToPrevMonth);

  

  function formatDate (d) {

    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
  
    return day + ' / ' + month + ' / ' + year;
  }


  function showCalendar() {
   cal.classList.toggle("active");
  }


  function goToNextMonth () {
    month++;
    if(month > 11){
      month = 0;
      year++;
    }
    mth_element.textContent = months[month] + " " + year;
    populateDates();
  }

  function goToPrevMonth () {
    month--;
    if(month < 0){
      month = 11;
      year--;
    }
    mth_element.textContent = months[month] + " " + year;
    populateDates();
  }

  function populateDates() {
    days_element.innerHTML = "";

    let amount_days = 31;

    if(month == 1){
      amount_days = 28;
    }
    else if(month == 3) {
      amount_days = 30;
    } else if(month == 5) {
      amount_days = 30;
    } else if(month == 8) {
      amount_days = 30;
    } else if(month == 10) {
      amount_days = 30;
    }

    for(let i = 0; i < amount_days; i++) {
      const day_element = document.createElement("div");
      day_element.classList.add("day");
      day_element.textContent = String(i + 1);

      console.log("selected date for class function: ", selectedDay, selectedYear, selectedMonth);

      if(selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
        day_element.classList.add("selected");
       
      }

      day_element.addEventListener("click", function () {
          console.log("day clicked");
        
          selectedDate = new Date(year + "-" + (month + 1) + "-" + (i + 1));
          selectedDay = (i + 1);
          selectedMonth = month;
          selectedYear = year;

          displayedDate.textContent = formatDate(selectedDate);
          console.log("selectedDate from event listener: ", selectedDay, selectedYear, selectedMonth);
          console.log("years var: ", year, month)
          
        
          populateDates();
      });

      days_element.appendChild(day_element);

    }

  
  }

 

  populateDates();

 

}


  render() {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();




    return (
      <div class="input-box">
  <div class="selected-date">{day + " / " + (month + 1) + " / " + year}</div>
        <div class="calendar">
            <div class="month">
                <div class="prev-mth">&lt;</div>
                <div class="mth">{(months[month] + " " + year)}</div>
                <div class="next-mth">&gt;</div>
            </div>
            <div class="days">
           
            </div>
        </div>
        </div>
          

    );

  }
}




