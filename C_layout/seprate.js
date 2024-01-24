function loadContent() {
  // Array to store the promises for each fetch call
  const fetchPromises = [];

  // Function to fetch content and set innerHTML
  const fetchAndSetContent = (url, elementId) => {
    return fetch(url)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(elementId).innerHTML += data;
        console.warn("Success for " + elementId + " " + url);
      })
      .catch((error) => console.error("Error fetching content:", error));
  };

  // Add promises for both fetch calls to the array

  // Use Promise.all to wait for all fetch calls to complete
  Promise.all(fetchPromises)
    .then(() => {
      console.log("Content loaded successfully");
      // You can add additional code here to run after both fetch calls complete
    })
    .catch((error) => console.error("Error loading content:", error));

  fetchPromises.push(fetchAndSetContent("C_layout/head.html", "head"));
  fetchPromises.push(fetchAndSetContent("C_layout/header.html", "header"));
  fetchPromises.push(fetchAndSetContent("C_layout/footer.html", "footer"));

  addScriptFiles("js/jquery.js");
  addScriptFiles("js/popper.min.js");
  addScriptFiles("js/bootstrap.min.js");
  addScriptFiles("js/jquery.fancybox.js");
  addScriptFiles("js/appear.js");
  addScriptFiles("js/parallax.min.js");
  addScriptFiles("js/tilt.jquery.min.js");
  addScriptFiles("js/jquery.paroller.min.js");
  addScriptFiles("js/owl.js");
  addScriptFiles("js/wow.js");
  addScriptFiles("js/nav-tool.js");
  addScriptFiles("js/jquery-ui.js");
  addScriptFiles("js/script.js");

}

const addScriptFiles = (scriptFileAddress)=>{
  const script = document.createElement("script");
  script.src = scriptFileAddress;
  script.async = true;
  document.body.appendChild(script);
}
