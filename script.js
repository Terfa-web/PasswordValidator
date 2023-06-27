const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll('.requirement-list li')

eyeIcon.addEventListener('click', () => {

  const requirements = [
    {regex: /.{8,}/, index: 0},//minimum of 8 characters
    {regex: /[0-9]/, index: 1},//at least one number
    {regex: /[a-z]/, index: 2},//at least two lowercase letter
    {regex: /[^A-Za-z0-9]/, index: 3},//at least one special character
    {regex: /[A-z]/, index: 4},//at least one uppercase letter
  ]

  passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach((item) => {
      //check if the password matches the requirement regex
      const isValid = item.regex.test(e.target.value);
      const requirementItem = requirementList[item.index];

      //updating  class and icon of requirement item if requirement matched or not
      if(isValid) {
        requirementItem.firstElementChild.className = "fa-solid fa-check";
        requirementItem.classList.add('valid');
      }else {
        requirementItem.firstElementChild.className = "fa-solid fa-circle";
        requirementItem.classList.remove('valid');
      }
    })
  });
  //toggle the password input elements' type between 'password' and 'text'

  passwordInput.type = passwordInput.type === "password" ? "text": "password";

  //update the eye icons' class based on the password input type

  eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "": "-slash"}`;
});