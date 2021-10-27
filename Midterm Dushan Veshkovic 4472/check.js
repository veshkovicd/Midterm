function checkForm(form)
{
  if(form.inputfield.value == "") {
    alert("Error: Input is empty!");
    form.inputfield.focus();
    return false;
  }

  var re = /^[\w ]+$/;

  if(!re.test(form.inputfield.value)) {
    alert("Error: Input contains invalid characters!");
    form.inputfield.focus();
    return false;
  }

  return true;
  
}
let che = document.getElementById("submit");
    che.textContent = `you have entered everything sucessfully! ${checkForm}`;
