function initToogleMenu(){
  const toogle = document.querySelector('[data-menu="toogle"]')
  const nav = document.querySelector('[data-menu="nav"]')
  
  toogle.addEventListener("click", (e) => {
      e.preventDefault();
      toogle.classList.toggle('current');
      if(toogle.classList.contains('current')){
        nav.classList.add('current')
      }else{
        nav.classList.remove('current')
      }
  });

  nav.addEventListener("click", () => {
    toogle.classList.remove('current')
    nav.classList.remove('current')
  });
}
initToogleMenu();

function initScrollSuave() {
  const linkAbout = document.querySelector('#about a[href^="#"]');
  const linksInternos = document.querySelectorAll('header a[href^="#"]');
  
  linkAbout.addEventListener('click', scrollToSection);
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();

function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tabs="services"] li');
  const tabContent = document.querySelectorAll('[data-tabs="services-sections"] section');

  if(tabMenu.length && tabContent.length) {
    tabMenu[0].classList.add('current');
    tabContent[0].classList.add('current');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('current');
      });
      tabContent[index].classList.add('current');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', (e) => {
        e.preventDefault();
        tabMenu.forEach((li) => {
          li.classList.remove('current');
        });
        itemMenu.classList.add('current');
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible)
          section.classList.add('current');
        else 
          section.classList.remove('current');
      })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();