class School {
    constructor(Schoolname, place){
        this.Schoolname = Schoolname;
        this.place  = place;
    }
 IsStudent(){
   console.log('It\'s true');
}
}
class Student extends School {
  constructor(name, age, weight, sex){
    super(name, age, weight);
    console.log()
    console.log(name);
    console.log(age);
    console.log(weight);
    console.log(sex);
  }
}

let KMS  = new Student('Mahesh', 21, 70, 'Male');

KMS.IsStudent();
