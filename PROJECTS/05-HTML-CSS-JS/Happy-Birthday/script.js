function turnOnLights() {
    let res = document.getElementById("bulb_container");
    res.style.display = "flex";
    document.body.style.backgroundColor = "rgb(70, 62, 85)";
  
    let btn = document.getElementById("bulb_on");
    btn.style.display = "none";
  }
  
  function loveMessage() {
      const res = document.getElementById("message");
    res.style.display = "block";
    for (let i = 0; i < 10; i++) document.write("I love you\n");
  }
  
  function showElements() {
    const res = document.getElementById("demo");
    res.style.display = "block";
  }
  