function animatedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down");

  arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      // Check for validation
      if (input.type === "text" && validateUser(input)) {
        nextSlide(parent, nextForm);
      }
    });
  });
}

function validateUser(user) {
  if (user.value.length < 6) {
    console.log("Not enough characters");
    error("rgb(189, 87, 87)"); // red background
  } else {
    error("rgb(87, 189, 130)"); // green background
    return true;
  }
}

function validateEmail(email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (validation.test(email.value)) {
    error("rgb(87, 189, 130)"); //green background
    return true;
  } else {
    error("rgb(189, 87, 87)"); // red background
  }
}

function nextSlide(parent, nextForm) {
  parent.classList.add("inactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
}

function error(color) {
  document.body.style.backgroundColor = color;
}

animatedForm();
