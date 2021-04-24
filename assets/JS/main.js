const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée");

  $.querySelector("#btn-display-form").addEventListener("click", () => {
    $.querySelector("#modal").classList.add("display");
  });

  $.querySelector("#btn-close-form").addEventListener("click", () => {
    $.querySelector("#modal").classList.add("hidden");
    console.log("fermer");
  });

  $.querySelector("#submit").addEventListener("click", async (event) => {
    event.preventDefault();

    const data = {
      name: $.querySelector("#name").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      subject: $.querySelector("#subject").value,
      message: $.querySelector("#message").value,
    };
    console.log(data);
    try {
      const response = await axios.post(
        "https://lereacteur-tripadvisor-backend.herokuapp.com/form",
        data
      );
      console.log(response);
      alert("Merci pour votre formulaire");
    } catch (error) {
      console.log(error.message);
    }
  });
});
