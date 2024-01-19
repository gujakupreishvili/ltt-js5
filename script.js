//1) დაწერეთ ფუნქცია processNumbers, რომელიც პარამეტრად იღებს ორ რიცხვს და callBack ფუნქციას.
// და ამ ფუნქციის გამოძახებით უნდა შესრულდეს არითმეტიკული
//ოპერაციები ციფრებზეც მაგალითად მიმატება ან გამოკლება რომელიც უნდა გვეწეროს callBack ფუნქციაში.
// function myName(sayName, callBackFoo) {
//   console.log(`say my ${sayName}`);
//   return setInterval(() => {
//     return callBackFoo();
//   }, 3000);
// }
function processNumbers(num1 ,num2,callBack){
  return callBack(num1,num2);
}
function sum(a,b){
  return  a + b;
}
console.log(processNumbers(3, 2, sum));



//2)შექმენით ფუნქცია isValidUser, რომელიც იღებს მომხმარებლის სახელს და პაროლს პარამეტრად
//და აბრუნებს true, თუ ორივე ცარიელი სტრიქონებია; წინააღმდეგ შემთხვევაში,
//დააბრუნეთ ყალბი. გამოიყენეთ ლოგიკური ოპერატორები.დაგჭირდებათ გაიგოთ მონაცემთა ტიპი
//და ისე შეამოწმოთ თუ სტრინგი აქვს ტიპად!!
function isValidUser(firstName,lastName){
  if(yourNmae =="" || yourlastName ==""){
    console.log("error")
  }else if(yourNmae !="" || yourlastName !=""){
    console.log("true");
  }
  yourNmae=firstName;
  yourlastName=lastName

  
}
let yourNmae=prompt("enter your name");
let yourlastName=prompt("enter your last name");

console.log(isValidUser(yourNmae,yourlastName))

//3)შექმენით რეკურსიული ფუნქცია, რომელიც დააბრუნებს n რიცხვს ფიბონაჩის მიმდევრობაში.
function Foo(n){
  if(n===1){
    return 1;
  }
  return Foo(n - 1) +(n - 2);
}
console.log(Foo(5));

//4)შექმენით უკუმთვლელი ტაიმერი, რომელიც ითვლის 10-დან 0 წამამდე, შემდეგ დაბეჭდავს "დრო ამოიწურა!".
//გამოიყენეთ setInterval მეთოდი და დროის დასრულების შემდეგ უნდა დავამთავროთ ტაიმერი!!
let counter =10;
function intervalTime(){
  let  setInter= setInterval(() => {
    console.log(counter)
    counter--;
    if( counter===0){
      clearInterval(setInter);
      return console.log("ფუნქციამ მუშაობა შეწყვიტა");
    }

  },1000)
}
intervalTime();

//5)შექმენით ფუნქცია, რომელიც ითვლის და აბრუნებს ასაკს მოცემული დაბადების თარიღის მიხედვით თარიღის ობიექტების გამოყენებით.


//6) დაწერეთ ფუნქცია, რომელიც ბეჭდავს კვირის მიმდინარე დღის
// სახელს თარიღის გამოყენებით.დაგჭირდებათ array-ში შეინახოთ
//კვირის დღეები და ისე შეამოწმოთ new Date() დახმარებით!!
function printCurrentDay() {
  // Array of days of the week
  const daysOfWeek = ['კვირა', 'ორშაბათი', 'სამშაბათ', 'ოთხშაბათ', 'ხუთშაბათი', 'პასრასკევი', 'შაბათი'];
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  const currentDay = daysOfWeek[dayIndex];
  console.log(`დღეს არის  ${currentDay}`);
}
printCurrentDay();

