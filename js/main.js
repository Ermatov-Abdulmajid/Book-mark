document.addEventListener("DOMContentLoaded", function () {
  const modifiers = {
    tabItemActive: "tabs__item--active",
    tabPanelActive: "tabpanels__item--active",
    accordionItemOpen: "accordion__item--open",
  };

  const elsTabsItem = document.querySelectorAll(".tabs__item");
  const elsTabsPanel = document.querySelectorAll(".tabpanels__item");
  const elsTabLink = document.querySelectorAll(".js-tab-link");

  const elsAccordionItem = document.querySelectorAll(".accordion__item");
  const elsAccordionItemToggler = document.querySelectorAll(
    ".accordion__item-toggler"
  );

  const mobile_menu = document.querySelector(".mobile-menu");
  const site_overlay = document.querySelector(".site-overlay");
  const header_burger = document.getElementById("burger");
  const mobile_close_btn = document.getElementById("mobile-menu-close-btn");

  function deactivateTabItems() {
    elsTabsItem.forEach(function (elTabsItem) {
      elTabsItem.classList.remove(modifiers.tabItemActive);
    });
  }

  function deactivateTabPanels() {
    elsTabsPanel.forEach(function (elTabsPanel) {
      elTabsPanel.classList.remove(modifiers.tabPanelActive);
    });
  }

  function closeAccordionItems() {
    elsAccordionItem.forEach(function (elAccordionItem) {
      elAccordionItem.classList.remove(modifiers.accordionItemOpen);
    });
  }

  if (elsTabLink) {
    elsTabLink.forEach(function (elTabLink) {
      elTabLink.addEventListener("click", function (evt) {
        // Prevent page move
        evt.preventDefault();

        // Remove active class from tabs__item elements
        deactivateTabItems();

        // Add active class to current tabs__item
        elTabLink.parentElement.classList.add(modifiers.tabItemActive);

        // Remove active class from tabs__panel elements
        deactivateTabPanels();

        // Show active tab panel
        const elTargetPanel = document.querySelector(
          elTabLink.dataset.tabTarget
        );
        if (elTargetPanel) {
          elTargetPanel.classList.add(modifiers.tabPanelActive);
        } else {
          console.error("Target panel not found for", elTabLink);
        }
      });
    });
  }

  if (elsAccordionItemToggler) {
    elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
      elAccordionItemToggler.addEventListener("click", function () {
        closeAccordionItems();
        const accordionItem =
          elAccordionItemToggler.closest(".accordion__item");
        if (accordionItem) {
          accordionItem.classList.add(modifiers.accordionItemOpen);
        } else {
          console.error("Accordion item not found for", elAccordionItemToggler);
        }
      });
    });
  }

  function openOverlay() {
    if (site_overlay) {
      site_overlay.style.width = "100%";
      site_overlay.style.opacity = "1";
    }
  }

  function closeOverlay() {
    if (site_overlay) {
      site_overlay.style.width = "0";
      site_overlay.style.opacity = "0";
    }
  }

  function openMobileMenu() {
    if (mobile_menu) {
      mobile_menu.style.right = "0";
      openOverlay();
    }
  }

  function closeMobileMenu() {
    if (mobile_menu) {
      mobile_menu.style.right = "-375px";
      closeOverlay();
    }
  }

  if (header_burger) {
    header_burger.addEventListener("click", () => openMobileMenu());
  }

  if (mobile_close_btn) {
    mobile_close_btn.addEventListener("click", () => closeMobileMenu());
  }

  if (site_overlay) {
    site_overlay.addEventListener("click", () => closeMobileMenu());
  }
});
