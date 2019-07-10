//list of options for the menu
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];
//The menu div in html
const menu = document.querySelector(".menu");

//for looping through the list to append the information using function tab2 to the defined menu
menuItems.forEach( list =>{
 menu.appendChild(tab2(list))
});

//allows us to loop through the list and add as many options as we would like.
function tab2(li){
  //Creating the new elements
  const wholeMenu = document.createElement('ul');
  const option = document.createElement("li");

  //structure and append the elements to ul in html
  wholeMenu.appendChild(option);

  option.textContent = li;

  return wholeMenu
}
const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  // Toggle the "menu--open" class on your menu refence. 
}

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', () =>{
  toggleMenu()
});