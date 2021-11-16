const getData = async function () {
  try {
    const data = await fetch("http://localhost:3000/user")
    .then((res) =>res.json());

    let root = document.getElementById("root");
    newDiv = document.createElement("div");

    newDiv.appendChild(document.createTextNode(data.firstName + " " + data.lastName));
    root.appendChild(newDiv);
    
  } catch (err) {
    console.log(err);
  }
};