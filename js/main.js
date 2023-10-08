const Link = document.querySelectorAll('.features__link');
const Item = document.querySelectorAll('.features__item');
const TabsPanel = document.querySelectorAll('.features__inner')

const AccordionToggler = document.querySelectorAll('.accordion__item-toggler');
const accordionItem = document.querySelectorAll('.accordion__item');

function deactivateTabsPanel () {
     TabsPanel.forEach(function (TabsPanel) {
          TabsPanel.classList.remove('features__inner-open');
     });
}

function deactivateTabsItem () {
     Item.forEach(function (Item) {
          Item.classList.remove('features__link--active');
     });
}

function Accordion () {
     accordionItem.forEach(function (accordionItem) {
          accordionItem.classList.remove('accordion__item--open');
     });
}

Link.forEach(function (Link) {
     Link.addEventListener('click' , function (evt) {
          evt.preventDefault();
          
          deactivateTabsItem ();

          Link.parentElement.classList.add('features__link--active');
          
          deactivateTabsPanel ();

          const elActivePanel = document.getElementById(Link.dataset.tabTarget);
          elActivePanel.classList.add('features__inner-open');
     });
});


AccordionToggler.forEach(function (AccordionToggler) {
     AccordionToggler.addEventListener('click' , function () {
          Accordion ();

          AccordionToggler.closest('.accordion__item').classList.add('accordion__item--open');
     });
});