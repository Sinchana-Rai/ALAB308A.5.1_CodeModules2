const colorDropdown = document.getElementById("colorDropdown");
colorDropdown.style.backgroundColor= "rgb(244, 185, 217)";
colorDropdown.style.color = "white";



export function fillDropdown(colors){
    console.log("hello")
  colors.forEach((color,index) => {
    const option = document.createElement('option');

    switch(index){
      case 0:
        option.value= color;
        option.textContent = "Lavender";
        break;
        case 1:
          option.value = color;
          option.textContent = "Pink";
          break;
        case 2:
          option.value = color;
          option.textContent = "Turquoise";
          break;
        default:
          option.textContent="no color";

    }
    colorDropdown.appendChild(option);
    
  });
}
