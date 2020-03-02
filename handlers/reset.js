function resetHandler() {
  debugger;
  // read user input & cast to Number

  const numbery = document.getElementById("numbery");
  const nany = document.getElementById("nany");
  while (numbery.firstChild) {
    numbery.removeChild(numbery.lastChild);
  }
  /* //doesn't work correctly, cannot understand why
  for (let i = 0; i < nany.children.length; i++) {
    nany.removeChild(nany.children[i]);
  } */
  while (nany.firstChild) {
    nany.removeChild(nany.lastChild);
  }

  // update state (.current & .past)
  entries.nany = [];
  entries.numbery = [];

  // render to user

  // log user interaction
  //  story name, increment, newCurrent, copy of state
  log.push({
    handler: "resetHandler",
    entries: JSON.parse(JSON.stringify(entries))
  });
  return true;
}
