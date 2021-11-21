// let arrRss;

// function hideAll() {
//   /// making the rss hidden and
//   arrRss = document.querySelectorAll(".post_content");
//   console.log(arrRss);
//   arrRss.forEach((v) => v.classList.add("hidden"));
// }
// onpageload = hideAll();

function SBT(event) {
  event.preventDefault();
  const sT = document.getElementById("searchTitle").value;
  fetch("http://localhost:3000/search/title", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ sT }),
  })
    .then((res) => {
      console.log(res);
      console.log(res.json());
      res.json();
    })
    .then((res) => {
      console.log("sent request received detail");
      console.log(res);
      addElement(res);
    })
    .catch((err) => console.log(err));
}

function SBC(event) {
  event.preventDefault();
  const sC = document.getElementById("searchCat").value;

  fetch("http://localhost:3000/search/category", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ sC }),
  })
    .then((res) => res.json())
    .then((arr) => {
      console.log("sent request received detail");
      addElement(arr);
    })
    .catch((err) => console.log(err));
}

function addElement(arr) {
  const posts = document.getElementById("posts");

  arr.forEach((item) => {
    newDiv = document.createElement("div");
    newA = document.createElement("a");
    newA.setAttribute("href", item.link);
    newH2 = document.createElement("h2");
    newH2.innerText = item.title;
    newA.appendChild(newH2);
    newDiv.appendChild(newA);
    newP = document.createElement("p");
    newP.innerText = `${item.isoDate} | ${
      item.creator
    } | Catagories: ${item.categories.forEach((v) => v + ", ")}`;
    newDiv.appendChild(newP);
    newDiv2 = document.createElement("div");
    newDiv2.innerHTML = item.content;
    newDiv.appendChild(newDiv2);

    posts.appendChild(newDiv);
  });
}
