// a) Create a test with an expect statement using the variable provided.
/*
describe("capitalizeName", () => {
    it("returns an array with a sentence about each person with their name capitalized.", () => {
        const hitchhikersCharacters = [
            { name: "ford prefect", occupation: "a hitchhiker" },
            { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
            { name: "arthur dent", occupation: "a radio employee" }
          ]
          // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
        expect(capitalizeName()).toEqual( // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
    })
})
*/

  
  // b) Create the function that makes the test pass.
  const hitchhikersCharacters = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]

   // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

    const capitalizeName = (nestedObj) => {
       //since the output needs to be a new array with the similar values, a high order map method is needed 
        return nestedObj.map(value => {
            let seperateStr = value.name.split(" ")
            console.log(seperateStr)
            let capFirstStrChar = seperateStr[0][0].toUpperCase() + seperateStr[0].slice(1);
            //separateStr[0][0] accesses the first character of the first word. The second bracket notation that is concatinated will slice through the string to make sure 
            //the full word itself is printed out, not just the first character itself, for instance, it will print "Ford" sucessfully instead of just "F."
            console.log(capFirstStrChar)
             let capSecondStrChar = seperateStr[1][0].toUpperCase() + seperateStr[1].slice(1)
             //separateStr[1][0] accesses the first character of the second word. The same rule of the first variable "capFirstStrChar" applies here.
            return `${capFirstStrChar} ${capSecondStrChar} is ${value.occupation}`
            //with both the first and second worc characters capatilized, they can be connected using string interpolation
            //that also uses dot notation on "occupation" to access its value in the second key value pair to make the full sentenct
        })
    };

    console.log(capitalizeName(hitchhikersCharacters))

  // Pseudo code:
  /*
// Pseudo code:
  /*
    function name: capitalize name
    input: an array that nests an object that holds the key value pairs of name, string value and occupation, string value.
    output: A new array that only displays first value's string with both the first and second word's starting character capitalized
    process: Inside the arrow function that is taking an input of the nested object, the input can be chained to a high order Map method that returns a new array 
    with the same values. Only this time, it will grabing the first key value pairs string. Since this string in particular needs both the first and second starting character
    capitalized, a good way to grab both strings at once since they are on the same line is the "split method," this built in string method will help make sure both
    strings can be accesed because they will turn into an array. From this point, we can grab them as elements and it makes the task easier. For instance, now 
    both strings can be accesed as elements using zero based indexing which makes it possible to modify them one at a time. Afterwards, I seperate both strings into seperate 
    variables and accesss their first character. This process is done using double bracket notation. The double bracket notation will start with the first bracket [0], which
    is the first element in the array, and the second bracket notation number chained to is [1], which acceses the first character inthe first word. In addtion, with the 
    first character accessed, and with the process of dot notation since we are accessing the objects first key value pair "name." we can chain the double bracket notation
    syntax with a built in method ".toUpperCase()" that will capitalize the first character. Afterwards, the new string is concatinated with a slice method 
    that will make sure the full word is printed is displayed not just the character itself. This same process will be done with the secong string, only this time, the bracket
    notation will be accessing the second element in the array starting with [1][0] for the first character of the second word.
*/


  /* interview questions

    initials// AR

    As a Rails developer, I am creating an application with a model called Cohort and a model called Student. The relationship between these models is that a cohort has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?
Your answer:
It’s important to note that Rails migration do not automatically 
create an index on the foreign key column or create a foreign key at all, It is possible to consider adding one manually using method add_foreign_key inside the active records of Cohort model. 
This will make sure foreign key's join tables. 
Researched answer:
The foreign key would be on the student model. 
This is because each student belongs to a single cohort. 
the name of the foreign key would be cohort_id. 
To fix the mistake, you would need to add a column called cohort_id to the students table. 
You would also need to add a foreign key constraint to the column, which would ensure that the value in the column references a valid cohort.
The syntax in the active records would look like  add_column :students, :cohort_id, :integer

  add_foreign_key :students, :cohorts, column: :cohort_id

Which RESTful routes must always be passed params?
Your answer:
Some of the most common RESTful routes passed into params are
GET index route to sort out results, POST for creating new resources or to send a request of data,
and PUT to update and existing resource.   
Researched answer:



Name three rails generator commands. What is created by each?
Your answer:

Researched answer:

Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?
action: "GET" location: /students

action: "POST" location: /students

action: "GET" location: /students/new

action: "GET" location: /students/2

action: "GET" location: /students/2/edit

action: "PATCH" location: /students/2

action: "DELETE" location: /students/2

As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Here is a resource to help you create your user stories.

  */




