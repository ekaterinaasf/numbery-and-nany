function saveHandler() {
  debugger;
  // read user input & cast to Number
  const inp = document.getElementById("input").value;
  const rez = isNaN(inp);
  if (rez) {
    //if Not a Number
    if (!entries.nany.includes(inp)) {
      //if not already used => store into a state
      entries.nany.push(inp);
      //display
      const ulli = document.getElementById("nany");
      const elli = document.createElement("li");
      elli.innerText = inp;
      ulli.appendChild(elli);
    }
  } else {
    //If a Number
    if (!entries.numbery.includes(inp)) {
      //if not already used => store
      entries.numbery.push(inp);
      //display
      const ulli = document.getElementById("numbery");
      const elli = document.createElement("li");
      elli.innerText = inp;
      ulli.appendChild(elli);
    }
  }
  // update state (.current & .past)

  // render to user

  // log user interaction
  //  story name, increment, newCurrent, copy of state
  log.push({
    handler: "saveHandler",
    inp,
    entries: JSON.parse(JSON.stringify(entries))
  });
  return true;
}
