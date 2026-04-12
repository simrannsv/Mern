 const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

let userCopy={...user}
user.name='kiran'
user.preferences.theme="light"
console.log("Original Copy : ",user)
console.log("Shallow Copy: ",userCopy)

//the difference is name which was a property of Object got changed in orginal but not in the copy..that means both are referring to different objects
//but theme which is a property of nested object got changed in both original and copy that means both are reffering to the same object..the nested object actually didnt get a copy
