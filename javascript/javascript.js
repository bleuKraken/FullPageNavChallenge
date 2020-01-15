
let dropdownPeople = document.getElementById('dropdown-people');
let dropdownNature = document.getElementById('dropdown-nature');
let dropdownArchitecture = document.getElementById('dropdown-architecture');
let dropdownFood = document.getElementById('dropdown-food');
let dropdownSports = document.getElementById('dropdown-sports');

//Event listeners below
window.addEventListener("click", function(event) {

  //Clear all
  if(event.target.matches('body') || event.target.matches('#menu-row')) {
    // if if DOES NOT have invisible, it is SHOWING>
    if(!dropdownPeople.classList.contains("invisible")){
      dropdownPeople.classList.toggle('invisible');
    }
    if(!dropdownNature.classList.contains("invisible")){
      dropdownNature.classList.toggle('invisible');
    }
    if(!dropdownArchitecture.classList.contains("invisible")){
      dropdownArchitecture.classList.toggle('invisible');
    }
    if(!dropdownFood.classList.contains("invisible")){
      dropdownFood.classList.toggle('invisible');
    }
    if(!dropdownSports.classList.contains("invisible")){
      dropdownSports.classList.toggle('invisible');
    }
  }


  if(event.target.matches('.button-people')) {
    // if if DOES NOT have invisible, it is SHOWING>
    if(!dropdownNature.classList.contains("invisible")){
      dropdownNature.classList.toggle('invisible');
    }
    if(!dropdownArchitecture.classList.contains("invisible")){
      dropdownArchitecture.classList.toggle('invisible');
    }
    if(!dropdownFood.classList.contains("invisible")){
      dropdownFood.classList.toggle('invisible');
    }
    if(!dropdownSports.classList.contains("invisible")){
      dropdownSports.classList.toggle('invisible');
    }
    //Display dropdown
    dropdownPeople.classList.toggle('invisible');
  }



  if(event.target.matches('.button-nature')) {
    // if if DOES NOT have invisible, it is SHOWING>
    if(!dropdownPeople.classList.contains("invisible")){
      dropdownPeople.classList.toggle('invisible');
    }
    if(!dropdownArchitecture.classList.contains("invisible")){
      dropdownArchitecture.classList.toggle('invisible');
    }
    if(!dropdownFood.classList.contains("invisible")){
      dropdownFood.classList.toggle('invisible');
    }
    if(!dropdownSports.classList.contains("invisible")){
      dropdownSports.classList.toggle('invisible');
    }

    dropdownNature.classList.toggle('invisible');
  }


  if(event.target.matches('.button-architecture')) {
    // if if DOES NOT have invisible, it is SHOWING>
    if(!dropdownPeople.classList.contains("invisible")){
      dropdownPeople.classList.toggle('invisible');
    }
    if(!dropdownNature.classList.contains("invisible")){
      dropdownNature.classList.toggle('invisible');
    }
    if(!dropdownFood.classList.contains("invisible")){
      dropdownFood.classList.toggle('invisible');
    }
    if(!dropdownSports.classList.contains("invisible")){
      dropdownSports.classList.toggle('invisible');
    }

    dropdownArchitecture.classList.toggle('invisible');
  }


  if(event.target.matches('.button-food')) {
    // if if DOES NOT have invisible, it is SHOWING>
    if(!dropdownPeople.classList.contains("invisible")){
      dropdownPeople.classList.toggle('invisible');
    }
    if(!dropdownNature.classList.contains("invisible")){
      dropdownNature.classList.toggle('invisible');
    }
    if(!dropdownArchitecture.classList.contains("invisible")){
      dropdownArchitecture.classList.toggle('invisible');
    }
    if(!dropdownSports.classList.contains("invisible")){
      dropdownSports.classList.toggle('invisible');
    }

    dropdownFood.classList.toggle('invisible');
  }

  if(event.target.matches('.button-sports')) {
    // if if DOES NOT have invisible, it is SHOWING>
    if(!dropdownPeople.classList.contains("invisible")){
      dropdownPeople.classList.toggle('invisible');
    }
    if(!dropdownNature.classList.contains("invisible")){
      dropdownNature.classList.toggle('invisible');
    }
    if(!dropdownArchitecture.classList.contains("invisible")){
      dropdownArchitecture.classList.toggle('invisible');
    }
    if(!dropdownFood.classList.contains("invisible")){
      dropdownFood.classList.toggle('invisible');
    }

    dropdownSports.classList.toggle('invisible');
  }


});
