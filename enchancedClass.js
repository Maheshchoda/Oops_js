class School {
    constructor(Schoolname, Place){
        this.Schoolname = Schoolname;
        this.Place      = Place;
    }
}
class Student extends School {
  constructor(Schoolname, name, age){
  super(Schoolname);
   this.name = name;
   this.age = age;
  }
}

let student  = new Student('Krishna School','Ongole''Mahehs', 21);
