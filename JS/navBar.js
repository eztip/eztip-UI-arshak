class NavLink {
  constructor(nav) {
    this.nav = nav;
    this.menu = document.getElementById('myBtn');
    this.menu.addEventListener('click', () => this.toggleContent());
    window.addEventListener("resize", () => this.resize(), true);
  }

  toggleContent() {
    this.nav.classList.toggle('toggleOn'); 
  }

  resize() {
    this.nav.classList.remove('toggleOn');
  }
}


const nav = document.getElementsByClassName('nav-bar');
Array.from(nav).forEach( nav => new NavLink(nav));