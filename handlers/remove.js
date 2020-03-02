function removeHandler() {
  debugger;
  // read user input & cast to Number
  const inp = document.getElementById("input").value;
  const rez = isNaN(inp);
  if (rez) {
    //if Not a Number
    if (entries.nany.includes(inp)) {
      //if already used => remove from store
      const index = entries.nany.indexOf(inp);
      entries.nany.splice(index, 1);
      //display
      const ulli = document.getElementById("nany");
      //const elli = ulli.children;
      for (let i = 0; i < ulli.children.length; i++) {
        if (ulli.children[i].innerText === inp) {
          ulli.removeChild(ulli.children[i]);
          break;
        }
      }
    }
  } else {
    //If a Number
    if (entries.numbery.includes(inp)) {
      //if not already used => store
      const index = entries.numbery.indexOf(inp);
      entries.numbery.splice(index, 1);
      //display
      const ulli = document.getElementById("numbery");
      //const elli = ulli.children;
      for (let i = 0; i < ulli.children.length; i++) {
        if (ulli.children[i].innerText === inp) {
          ulli.removeChild(ulli.children[i]);
          break;
        }
      }
    }
  }
  // update state (.current & .past)

  // render to user

  // log user interaction
  //  story name, increment, newCurrent, copy of state
  log.push({
    handler: "removeHandler",
    inp,
    entries: JSON.parse(JSON.stringify(entries))
  });
  return true;
}
