 const slider = tns({
    container: '.slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput: false,
    speed: 1000,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    controls: false,
    nav: false,
    controlsText: [
      '<img src="img/left.svg">',
      '<img src="img/right.svg">'
   ]
  });
 document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});
 document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});

 const tabsBtn = document.querySelectorAll('.place');
 const tabsItems = document.querySelectorAll('.tabs_item')


 tabsBtn.forEach(function(item){
  item.addEventListener('click', function() {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if ( ! currentBtn.classList.contains('active')){
      tabsBtn.forEach(function(item) {
        item.classList.remove('active')
      });

      tabsItems.forEach(function(item) {
        item.classList.remove('active')
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
 })

 function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}