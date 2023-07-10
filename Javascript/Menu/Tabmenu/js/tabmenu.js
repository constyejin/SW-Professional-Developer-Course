function setMenu(value) {
  if (value == 'tab1') {
    document.getElementById('web').style.display = 'block';
    document.getElementById('native').style.display = 'none';
    document.getElementById('sw').style.display = 'none';
  }
  if (value == 'tab2') {
    document.getElementById('web').style.display = 'none';
    document.getElementById('native').style.display = 'block';
    document.getElementById('sw').style.display = 'none';
  }
  if (value == 'tab3') {
    document.getElementById('web').style.display = 'none';
    document.getElementById('native').style.display = 'none';
    document.getElementById('sw').style.display = 'block';
  }
}
