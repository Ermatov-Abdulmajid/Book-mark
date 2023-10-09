const modifiers = {
     FeaturesInnerOpen: 'features__inner-open' ,
     FeaturesLinkActive: 'features__link--active' ,
     AccordionItemopen: 'accordion__item--open'
};

const Link = document.querySelectorAll('.features__link');
const Item = document.querySelectorAll('.features__item');
const TabsPanel = document.querySelectorAll('.features__inner')

const AccordionToggler = document.querySelectorAll('.accordion__item-toggler');
const accordionItem = document.querySelectorAll('.accordion__item');

function deactivateTabsPanel () {
     TabsPanel.forEach(function (TabsPanel) {
          TabsPanel.classList.remove(modifiers.FeaturesInnerOpen);
     });
}

function deactivateTabsItem () {
     Item.forEach(function (Item) {
          Item.classList.remove(modifiers.FeaturesLinkActive);
     });
}

function Accordion () {
     accordionItem.forEach(function (accordionItem) {
          accordionItem.classList.remove(modifiers.AccordionItemopen);
     });
}

Link.forEach(function (Link) {
     Link.addEventListener('click' , function (evt) {
          evt.preventDefault();
          
          deactivateTabsItem ();

          Link.parentElement.classList.add(modifiers.FeaturesLinkActive);
          
          deactivateTabsPanel ();

          const elActivePanel = document.getElementById(Link.dataset.tabTarget);
          elActivePanel.classList.add(modifiers.FeaturesInnerOpen);
     });
});


AccordionToggler.forEach(function (AccordionToggler) {
     AccordionToggler.addEventListener('click' , function () {
          Accordion ();

          AccordionToggler.closest('.accordion__item').classList.add(modifiers.AccordionItemopen);
     });
});