document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     MOBILE MENU
  ========================= */

  const mobileMenu =
    document.getElementById("mobileMenu");

  const menuButton =
    document.querySelector(".mobile-menu");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
    });
  }


  /* =========================
     CLOSE MOBILE MENU
  ========================= */

  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
      });
    });
  }


  /* =========================
     SEARCH
  ========================= */

  const searchButtons =
    document.querySelectorAll('[aria-label="Search"]');

  searchButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      const query = prompt("Search OXCINOB:");

      if (!query || !query.trim()) {
        return;
      }

      const searchText =
        query.trim().toLowerCase();

      const articles =
        document.querySelectorAll(".article");

      let found = false;

      articles.forEach(function (article) {

        const text =
          article.innerText.toLowerCase();

        if (!found && text.includes(searchText)) {

          article.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });

          article.style.outline =
            "2px solid #18d9ff";

          setTimeout(function () {
            article.style.outline = "";
          }, 2500);

          found = true;
        }

      });

      if (!found) {
        alert("No matching article found yet.");
      }

    });

  });


  /* =========================
     ARTICLE CARDS
     ========================= */

  const articles =
    document.querySelectorAll(".article");

  articles.forEach(function (article) {

    article.style.cursor = "pointer";

    article.addEventListener("click", function () {

      window.location.href = "article.html";

    });

  });


  /* =========================
     FEATURE CARDS
  ========================= */

  document
    .querySelectorAll(".trend")
    .forEach(function (card) {

      card.addEventListener("click", function (event) {

        const href =
          card.getAttribute("href");

        if (!href || href === "#") {

          event.preventDefault();

          window.location.href =
            "article.html";

        }

      });

    });


  /* =========================
     CATEGORY CARDS
  ========================= */

  document
    .querySelectorAll(".category")
    .forEach(function (card) {

      card.addEventListener("click", function (event) {

        const href =
          card.getAttribute("href");

        if (!href || href === "#") {

          event.preventDefault();

          window.location.href =
            "article.html";

        }

      });

    });


  /* =========================
     NEWSLETTER
  ========================= */

  const newsletter =
    document.querySelector(".newsletter-form");

  if (newsletter) {

    newsletter.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();

        const input =
          newsletter.querySelector(
            "input[type='email']"
          );

        if (!input || !input.value.trim()) {
          return;
        }

        alert(
          "Thanks for subscribing to OXCINOB!"
        );

        newsletter.reset();

      }
    );

  }


  /* =========================
     SMOOTH ANCHOR LINKS
  ========================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(function (link) {

      link.addEventListener(
        "click",
        function (event) {

          const targetId =
            link.getAttribute("href");

          if (
            !targetId ||
            targetId === "#"
          ) {
            return;
          }

          const target =
            document.querySelector(targetId);

          if (target) {

            event.preventDefault();

            target.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }

        }
      );

    });


  /* =========================
     LAZY LOAD IMAGES
  ========================= */

  document
    .querySelectorAll("img")
    .forEach(function (image) {

      image.loading = "lazy";

    });


  console.log(
    "OXCINOB main.js loaded successfully."
  );

});
