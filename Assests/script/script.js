async function RegisterUser() {
  var full_name = document.getElementById("full_name").value; // $("#full_name").val();
  var User_Email = document.getElementById("User_Email").value; // $("#User_Email").val();
  var User_Phone = document.getElementById("User_Phone").value; // $("#User_Phone").val();
  if (full_name == "" || User_Email == "" || User_Phone == "") {
    alert("Please Fill The Form");
  } else {
    const formData = new FormData();
    formData.append("Type", "001");
    formData.append("full_name", full_name);
    formData.append("User_Email", User_Email);
    formData.append("User_Phone", User_Phone);
    let req = await fetch("https://kalamacademy.org/learn/leadcaptureapi.php", {
      method: "POST",
      body: formData,
    });
    let data = await req.json();
    console.log(data);
    if (data > 0) {
      location.href =
        "https://www.kalamacademy.org/thank-for-signup-for-free-demo-of-grocery-business/";
    } else {
      alert(data);
    }
  }
}
async function RegisterWDCUser() {
  var full_name = document.getElementById("full_name").value; // $("#full_name").val();
  var User_Email = document.getElementById("User_Email").value; // $("#User_Email").val();
  var User_Phone = document.getElementById("User_Phone").value; // $("#User_Phone").val();
  if (full_name == "" || User_Email == "" || User_Phone == "") {
    alert("Please Fill The Form");
  } else {
    const formData = new FormData();
    formData.append("Type", "002");
    formData.append("full_name", full_name);
    formData.append("User_Email", User_Email);
    formData.append("User_Phone", User_Phone);
    let req = await fetch("https://kalamacademy.org/learn/leadcaptureapi.php", {
      method: "POST",
      body: formData,
    });
    let data = await req.json();
    console.log(data);
    if (data > 0) {
      location.href =
        "https://www.kalamacademy.org/thank-you-for-signup-for-php-course/";
    } else {
      alert(data);
    }
  }
}
async function RegisterDMUser() {
  var full_name = document.getElementById("full_name").value; // $("#full_name").val();
  var User_Email = document.getElementById("User_Email").value; // $("#User_Email").val();
  var User_Phone = document.getElementById("User_Phone").value; // $("#User_Phone").val();
  if (full_name == "" || User_Email == "" || User_Phone == "") {
    alert("Please Fill The Form");
  } else {
    const formData = new FormData();
    formData.append("Type", "003");
    formData.append("full_name", full_name);
    formData.append("User_Email", User_Email);
    formData.append("User_Phone", User_Phone);
    let req = await fetch("https://kalamacademy.org/learn/leadcaptureapi.php", {
      method: "POST",
      body: formData,
    });
    let data = await req.json();
    console.log(data);
    if (data > 0) {
      location.href =
        "https://www.kalamacademy.org/thank-you-for-signingup/";
    } else {
      alert(data);
    }
  }
}


// let allItem = document.querySelectorAll('.item') 

// let accordion = Array.from(allItem)

// accordion.map((item)=>{

// item.addEventListener('click',()=>{

// item.classList.toggle('active')
// })


// })


