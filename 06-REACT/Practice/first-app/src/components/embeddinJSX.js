// string
const name = "Chaitaly";

function PassString() {
  return <h1>Hello {name}</h1>;
}



// object
const user = {
  firstName: "First",
  lastName: "Name",
};

function PassObject(user) {
    return user.firstName + ' ' + user.lastName;
}

function Embedding() {
  return (
    <>
    <PassString />

    {PassObject(user)}

<br/>
    
    <PassObject firstName= "Second" lastName= "Name"/>
    </>
  );
}

export default Embedding;
