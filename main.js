
  function Twingkling (){
    let pasko = document.querySelectorAll(".pasko");
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    for (let i = 0; i < pasko.length; i++) {
      pasko[i].style.color = `rgb(${red},${green},${blue})`;
    }
  };



  function startin(){
    start_color = setInterval(Twingkling, 300);
}

  function stopin(){
    clearInterval(start_color);
}
