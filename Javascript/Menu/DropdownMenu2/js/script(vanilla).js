const submenuWrapper = document.querySelector('.submenu-wrapper');
const mainMenuItems = document.querySelectorAll('.main-menu li');

mainMenuItems.forEach((item) => {
  menuItem.addEventListener('mouseenter', handleMainMenuHover);
  menuItem.addEventListener('mouseleave', handleMainMenuLeave);
});

submenuWrapper.addEventListener('mouseenter', handleMainMenuHover);
submenuWrapper.addEventListener('mouseleave', handleMainMenuLeave);

const submenuItems = document.querySelectorAll('.submenu-list > li');

function handleSubmenuHover() {
  let index = Array.from(this.parentNode.children).indexOf(this);
  let mainMenuItem = document.querySelectorAll('.main-menu li a')[index];
  mainMenuItem.classList.add('on');
}

function handleSubmenuLeave() {
  let index = Array.from(this.parentNode.children).indexOf(this);
  let mainMenuItem = document.querySelectorAll('.main-menu li a')[index];
  mainMenuItem.classList.remove('on');
}

// Add event listeners for mouseenter and mouseleave on submenu list items
submenuItems.forEach((item) => {
  item.addEventListener('mouseenter', handleSubmenuHover);
  item.addEventListener('mouseleave', handleSubmenuLeave);
});
