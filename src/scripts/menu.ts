(document.querySelector('.hamburger') as HTMLDivElement).addEventListener('click', () => {
  (document.querySelector('.nav__links') as HTMLElement).classList.toggle('expanded');
})
