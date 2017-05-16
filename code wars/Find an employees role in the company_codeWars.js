function findEmployeesRole(name) {
  let [employee] = employees.filter(x => `${x.firstName} ${x.lastName}` === name);  
  return employee ? employee.role : 'Does not work here!';// Passed employees role
}

/*
OTHER SOLUTIONS: 

1) 

function findEmployeesRole(name) {
  for(var i = 0; i < employees.length; i++)
    if(name === employees[i].firstName + " " + employees[i].lastName) return employees[i].role;
  return "Does not work here!";
}

-----------------------

2)

const findEmployeesRole = (() => {
    
    let employees = [
        { firstName: "Ollie",  lastName: "Hepburn",  role: "Boss" },
        { firstName: "Morty",  lastName: "Smith",    role: "Truck Driver" },
        { firstName: "Peter",  lastName: "Ross",     role: "Warehouse Manager" },
        { firstName: "Cal",    lastName: "Neil",     role: "Sales Assistant" },
        { firstName: "Jesse",  lastName: "Saunders", role: "Admin" },
        { firstName: "Anna",   lastName: "Jones",    role: "Sales Assistant" },
        { firstName: "Carmel", lastName: "Hamm",     role: "Admin" },
        { firstName: "Tori",   lastName: "Sparks",   role: "Sales Manager" },
        { firstName: "Peter",  lastName: "Jones",    role: "Warehouse Picker" },
        { firstName: "Mort",   lastName: "Smith",    role: "Warehouse Picker" },
        { firstName: "Anna",   lastName: "Bell",     role: "Admin" },
        { firstName: "Jewel",  lastName: "Bell",     role: "Receptionist" },
        { firstName: "Colin",  lastName: "Brown",    role: "Trainee" }
    ];
    
    return name => employees.reduce((o, e) => (o[`${e.firstName} ${e.lastName}`] = e.role, o), {})[name] || 'Does not work here!';
    
})();




*/