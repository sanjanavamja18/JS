window.onload = function () {
  const tbody = document.getElementById("tb");
  let store = localStorage.getItem("user");
  let scr = JSON.parse(store);
  console.log(scr);
  if (scr === null) {
    table.style.display = "none";
  }
  scr.map((data) => {
    let tr = document.createElement("tr");
    // console.log(tr);
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        let td = document.createElement("td");
        td.innerHTML = `${data[key]}`;
        tr.appendChild(td);
        // tr.appendChild(edit);
      }
    }
    tbody.appendChild(tr);
  });
};
let selectedtr = null;
function empty() {
  if (selectedtr == null) {
    add();
  } else {
    update();
    selectedtr = null;
  }
}
function edit(y) {
  selectedtr = y.parentElement.parentElement;
  // console.log(selectedtr);
  document.getElementById("name").value = selectedtr.cells[0].innerHTML;
  document.getElementById("job").value = selectedtr.cells[1].innerHTML;
}
function update() {
  selectedtr.cells[0].innerHTML = document.getElementById("name").value;
  selectedtr.cells[1].innerHTML = document.getElementById("job").value;
}
const add = () => {
  const name = document.getElementById("name").value;
  const job = document.getElementById("job").value;
  document.getElementById("table").style.display = "block";
  let table = document.getElementById("table");
  let row = table.insertRow(-1);
  let nm = row.insertCell(0);
  let jb = row.insertCell(1);
  let edit = row.insertCell(2);
  nm.innerHTML = document.getElementById("name").value;
  jb.innerHTML = document.getElementById("job").value;
  edit.innerHTML = `<a class="edit" id="edit" onClick="edit(this)">Edit</a>`;
  
  if (name === "" && job === "") {
    alert("Name and Job Required");
    return false;
  }
  if (!isNaN(name)) {
    alert("Enter Valid Input For Name");
    return false;
  }
  if (!isNaN(job)) {
    alert("Enter Valid Input For Job");
    return false;
  }
  fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      job: job,
    }),
    headers: {
      "content-Type": "application/JSON; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.table(data);
      let store = new Array();
      store = JSON.parse(localStorage.getItem("user"))
        ? JSON.parse(localStorage.getItem("user"))
        : [];
      store.push({
        name: data.name,
        job: data.job,
      });
      localStorage.setItem("user", JSON.stringify(store));
    });
};