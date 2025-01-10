document
  .getElementById("prediction-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = [];

    const fields = ["noise_level", "lighting", "resources", "comfort"];
    fields.forEach((field) => {
      const selectedValue = Number(document.getElementById(field).value);
      formData.push(selectedValue);
    });

    const motivation = document.getElementById("motivation").value;
    formData.push(motivation === "1" ? 1 : 0);
    formData.push(motivation === "2" ? 1 : 0);
    formData.push(motivation === "3" ? 1 : 0);

    const environmentWithOthers = document.getElementById(
      "environment_with_others",
    ).value;
    formData.push(environmentWithOthers === "1" ? 1 : 0);
    formData.push(environmentWithOthers === "2" ? 1 : 0);
    formData.push(environmentWithOthers === "3" ? 1 : 0);

    const aloneOrWithOthers = document.getElementById(
      "alone_or_with_others",
    ).value;
    formData.push(aloneOrWithOthers === "1" ? 1 : 0);
    formData.push(aloneOrWithOthers === "2" ? 1 : 0);
    formData.push(aloneOrWithOthers === "3" ? 1 : 0);

    const studyTime = document.getElementById("study_time").value;
    formData.push(studyTime === "1" ? 1 : 0);
    formData.push(studyTime === "2" ? 1 : 0);

    // console.log(formData);
    fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: formData }),
    })
      .then((response) => response.json())
      .then((data) => {
        const prediction = data.prediction;
        const propapilites = data.propapilites;
        // console.log(propapilites);

        const predictionText = document.getElementById("predictionText2");
        const propaField = document.getElementById("propa");
        if (predictionText) {
          predictionText.textContent = `${prediction}`;
          // alert(`The predicted study preference is: ${prediction}`);
        } else {
          console.error('Element with id "predictionText" not found');
        }
        if (propaField) {
          propaField.textContent = `${propapilites}`;
        } else {
          console.error('Element with id "propa" not found');
        }

        const resultDiv = document.getElementById("result");
        if (resultDiv) {
          resultDiv.style.display = "block";
        }
      })
      .catch((error) => {
        alert("Error with prediction: " + error);
      });
  });
