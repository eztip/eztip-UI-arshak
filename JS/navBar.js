class NavLink {
  constructor(nav) {
    this.nav = nav;
    this.menu = document.getElementById('myBtn');
    this.menu.addEventListener('click', () => this.toggleContent());
  }

  toggleContent() {
    this.nav.classList.toggle('toggleDisplay');
  }
}


const nav = document.getElementsByClassName('nav-bar');
Array.from(nav).forEach( nav => new NavLink(nav));