function submitData(firstName,email){
  const configObject = {
  method: 'Post',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
body: JSON.stringify({ 
 "name": firstName,
 "email": email
 })
}
return fetch("http://localhost:3000/users",configObject)
.then(response => response.json())
.then(body => assignId(body.id))
.catch(error => document.body.append(error) )
};


function assignId (newID){ 
  document.getElementsByTagName("body")[0].innerHTML= newID;
}

submitData('steve', 'steve@steve.com')





















// function submitData(firstName, email) {
//     const configObject = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify({ 
//             "name": firstName,
//             "email": email
//         })
//       };
//       return fetch ("http://localhost:3000/users", configObject)
//       .then(response => response.json())
//       .then(body => addNewContact(body.id))
//       .catch(message => document.body.append(message))
//     }

//     function addNewContact(newID){ 
//         document.getElementsByTagName("body")[0].innerHTML = newID;

//     };

//     submitData('steve','steve@steve.com');
