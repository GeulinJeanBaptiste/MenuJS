
/* Création d'une fonction pour initialiser mon menu */
const initMenu = () => {
  const ulPrincipal = document.createElement("ul");
  document.querySelector("#navmenu").append(ulPrincipal);
  menuEntries.forEach((element, index) => {
    const liPrincipal = document.createElement("li");
    liPrincipal.id = "liPrincipal" + index;
    /* Ajout de css avec liPrincipal.classlist.add("maClass") */
    liPrincipal.textContent = element.name;
    ulPrincipal.append(liPrincipal);
    // au click creation d'un sous menu
    liPrincipal.addEventListener("click", () => {
      // verification d'un sous menu existant avec son id
      if (document.body.contains(document.querySelector("#subUl" + index))) {
        document.querySelector("#subUl" + index).remove();
      } else {
        /* detruire tous les elements subMenu qui peuvent exister */
        for (let i = 0; i < menuEntries.length; i++) {
          if (document.body.contains(document.querySelector("#subUl" + i))) {
            document.querySelector("#subUl" + i).remove();
          }
        }
        /* dernière étape : je peux maintenant créer l'element lier à l'event. */
        const subUL = document.createElement("ul");
        subUL.id = "subUl" + index;
        liPrincipal.append(subUL);
        menuEntries[index].submenu.forEach((subelem, subindex) => {
          const subLi = document.createElement("li");
          subLi.innerText = subelem.subname;
          subUL.append(subLi);
        });
      }
      //verification d'un sous menu existant avec son id
    });
  });
};

export { initMenu };
