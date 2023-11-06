const initMenu = () => {
  const ulPrincipal = document.createElement("ul");
  document.querySelector("#navmenu").append(ulPrincipal);

  menuEntries.forEach((element, index) => {
    // console.log(element.name);
    // console.log(index);
    const liPrincipal = document.createElement("li");
    liPrincipal.id = "liPrincipal" + index;
    liPrincipal.textContent = element.name;
    ulPrincipal.append(liPrincipal);
    // au click creation d'un sous menu
    liPrincipal.addEventListener("click", () => {
      if (!document.body.contains(document.querySelector("#subUl" + index))) {
        // verification d'un sous menu existant avec son id
        const subUL = document.createElement("ul");
        subUL.id = "subUL" + index;
        liPrincipal.append(subUL);
        menuEntries[index].submenu.forEach((subelem, subindex) => {
          const subLi = document.createElement("li");
          subLi.innerText = subelem.subname;
          subUL.append(subLi);
        });
      } else {
        
      }
    });
  });
};

export { initMenu };
