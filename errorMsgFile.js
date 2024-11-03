
export const errorMsgs = document.getElementById("errorDisplay");


export function displayErrors(messages) {
    if (messages.length > 0) {
        errorMsgs.style.display = "block";
        errorMsgs.innerHTML = `${messages.join('<br>')}`;
        
    } else {
      
        errorMsgs.style.display = "none";
        errorMsgs.innerHTML = "";
        
    }
  }