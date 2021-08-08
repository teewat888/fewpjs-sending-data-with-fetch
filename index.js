// Add your code here
const submitData = (name, email) => {
 

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
        name: `${name}`,
        email: `${email}`
    }),
  };
  //console.log("config_obj : ",configObj);
  return fetch("http://localhost:3000/users", configObj)
    .then((response) => response.json())
    .then((obj) => {
      //console.log("obj : ", obj);
      document.body.innerHTML = obj.id;
    })
    .catch((e) => {
      //console.log(e.message);
      document.body.innerHTML = e.message;
    });
};

//submitData("Peter", "peter@peter.com");
