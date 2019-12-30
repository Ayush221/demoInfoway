
{
    ename:string;
    age:number;
    isMarried:boolean;
    constructor(ename:string,age:number,isMarried:boolean){
        this.ename=ename;
        this.age=age;
        this.isMarried=isMarried;
        
    }
    getEmployeeDetails()
     {
         console.log("Employee name:",this.ename);
         console.log("Employee age:",this.age);
         console.log("Employee isMarried:",this.isMarried);
     }
}
var emp = new Employee("ketan",24,false);
// emp.getEmployeeDetails();
// var emp = new Employee();
// emp.ename="ketan";
// emp.age=24;
// emp.isMarried=true;
 emp.getEmployeeDetails();
// class Manager extends  Employee 
// {
//     skills:string;
//  constructor(ename:string,age:number,isMarried:boolean,  skills:string)
//  {
//      super(ename,age,isMarried);
//      this.skills=skills;
//  }
//  getEmployeeDetails()
//  {
//      super.getEmployeeDetails();
//      console.log("skils are:", this.skills);
//  }

// }
// var mgr= new Manager("ketan",24,true,"reading");
// mgr.getEmployeeDetails();
// // interface ketan{
// //     skills:string;

// // }
