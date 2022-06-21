// function edit_row(no)
// {
//  document.getElementById("edit_button"+no).style.display="none";
//  document.getElementById("save_button"+no).style.display="block";
	
//  var name=document.getElementById("name"+no);
//  var job=document.getElementById("job"+no);

//  var name=name.innerHTML;
//  var job=job.innerHTML;
	
//  name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name+"'>";
//  job.innerHTML="<input type='text' id='country_text"+no+"' value='"+job+"'>";
// }

// function save_row(no)
// {
//  var name_val=document.getElementById("name_text"+no).value;
//  var country_val=document.getElementById("country_text"+no).value;
//  var age_val=document.getElementById("age_text"+no).value;

//  document.getElementById("name_row"+no).innerHTML=name_val;
//  document.getElementById("country_row"+no).innerHTML=country_val;
//  document.getElementById("age_row"+no).innerHTML=age_val;

//  document.getElementById("edit_button"+no).style.display="block";
//  document.getElementById("save_button"+no).style.display="none";
// }

// function delete_row(no)
// {
//  document.getElementById("row"+no+"").outerHTML="";
// }

function add_row()
{
 var name=document.getElementById("name").value;
 var job=document.getElementById("job").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name"+table_len+"'>"+name+"</td><td id='job"+table_len+"'>"+job+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("name").value="";
 document.getElementById("job").value="";

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
}