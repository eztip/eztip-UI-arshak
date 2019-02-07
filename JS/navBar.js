class NavLink {
  constructor(nav) {
    this.nav = nav;
    this.menu = document.getElementById('myBtn');
    this.menu.addEventListener('click', () => this.toggleContent());
    window.addEventListener("resize", () => this.resize(), true);
  }

  toggleContent() {
    this.nav.classList.toggle('toggleOn');
    if (this.nav.classList.contains("toggleOn")) {
      TweenMax.fromTo(".top-nav", 0.5, {right: -550}, {right: 0});
    } else if (!(this.nav.classList.contains("toggleOn"))) {
      TweenMax.fromTo(".top-nav", 0.5, {right: 0}, {right: -550});
    }
  }

  resize() {
    this.nav.classList.remove('toggleOn');
  }
}


const nav = document.getElementsByClassName('nav-bar');
Array.from(nav).forEach( nav => new NavLink(nav));

//TweenMax.to(".top-nav", 1.5, {right: 0, opacity:1, scale:1});


//TweenMax.fromTo(".top-nav", 1.5, {right: -550}, {right: 0});
//TweenMax.from(".top-nav", 1.5, {right: 100, opacity:0, scale:0.5});