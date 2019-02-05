class DisplayIcon {
  constructor(icon) {
    this.icon = icon;
    //console.log(icon);
    this.iconContent = document.querySelector(`.content[data-icon='${icon.dataset.icon}']`);
    console.log(this.iconContent);
    this.icon.addEventListener('click', () => this.display());
  }

  display() {
    this.iconContent.classList.toggle('toggleDisplay');
  }
}






const icons = document.getElementsByClassName('icon');
console.log(icons);
Array.from(icons).forEach( icon => new DisplayIcon(icon));