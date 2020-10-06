
// while loop printing from 1 to 20 ---------------------

var n = 20;
var x = 1;

while (x<=n){
    console.log(x);
    x++
}



// while loop form 20 to 1 ---------------------------

var n = 20

while (n>=0){
    console.log(n);
    n--
}

// print even numbers until 100

var n = 1
while(n<100){
    if(n%2==0){
        console.log(n);
    }
        n++
    
}

var n = 0

while (n<=100){
    console.log(n);
    n=n+2}

// ading n numbers

n = 20
x = 0

while(n>=0){
    x = x +n 
    n--    
}

console.log(x)

// multiplication table

y=1
x=1
while(x<=10){
    while(y<=10){
        console.log(x*y);
        y++
        }
    x++
    y=1
    }


// ------------------------------------ from xyz to zyx



result=0
a=0
n=234

while (n>0) {
    a = n%10
    n= n-a
    n=n/10
    result = result*10 +a
}
console.log(result)


//  ----------------------------- Polindro


original = 131
result=0
a=0
n=131

while (n>0) {
    a = n%10
    n= n-a
    n=n/10
    result = result*10 +a
}

console.log(result)
console.log(original)

if (original == result) {
    console.log("yes")
}



//  ----- create loop to make 4^4



 var x = 1
 var y = 4
 

while(x<4){
    y=4*y;
    x++
    
}
console.log(y)


// ------------ crate factorial



var x = 4
var y = (x-1)

while(y>1){
    x=x*y
    y--
}
console.log(x)



var x = 5
var a = 1
var n = 1

while (a<=x) {
    n = n*a
    a++
}

console.log(n)





//  --------------  MDC --------------


var x = 80
var y = 30
var acc
acc = x%y

while (acc!=0) {
    
    x = y;
    y = acc;
    acc = x%y;
}
console.log(y)



//  numero primo -----------------------


n = 17
a = 2

while (n%a>0) {
    a++
}
if (n==a) { console.log("it's prime")}
else {console.log("it's not prime")}

// ------------ Check if the numberber is narcissistic/Armstrong

result = 0
a = 0
n = 153
num = n

while (n>0) {
    a = n%10 
    n = n-a  
    n = n/10 
    result = result + a*a*a 
}
if (result == num) {
    console.log("The number is narcissistic")
}
else{
    console.log("The number is not nasrcissistic")
}



//  ----------------------- Check if the number is a perfect number

n = 6
num = 0
i = 1

while (i<n) {
    if (n%i == 0) {
        num = num + i
    }
    i++
}
if (num == n) {
    console.log("The number is a perfect number")
}
else{
    console.log("The number is not a perfect number")
}



// --------------Fibonacci


var n = 20
var b = 1
var a = 1
var fibo = 0
var result = [1, 1]

while (fibo<n) {
    fibo = a + b;
    result.push(fibo);
    b = a;
    a = fibo;
}
console.log(result)

// --------------- find the biggest number of a list

a = [1, 4, 3, 9]
i = 1
max = a[0]

while (i< a.length) {
    if (a[i] > max) {
        max = a[i]
    }
    i++
}
console.log(max)



// ---------------- verify if number is within a list
i = 0
n = 9
a = [4, -6, 9, 55]


while (i < a.length) {
    
    if (a[i] == n) {
        console.log("Is in the list")
        break;}
    else {
        console.log("Is not in the list")
    }
    i++
}
    


// ------------- find the indexes in the array two values that added gives the value of n 

a = [1,3,3,6,6,9,9, 10,18]
n = 15
i = 0

while (i<a.length) {
    if (a[i] + a[i+1] == n) {
        console.log("The indexes that gives the value of n is " + i + " and " + (i+1) )
    }    
    i++
}



// -------------------------- add two arrays in new array without repeating values  



a = [1, 3, 5, 8, 11, 18, 19]
b = [1, 2, 5, 9, 11,13,18, 20]
new_array = []
i = 0
n = 0
    while (n < b.length) {
        if (a[i] == b[n]) {
            new_array.push(b[n]);
            n++
            i++
            
            
        }
        else if (a[i]<b[n] && new_array[n-1]!=a[i]){
            new_array.push(a[i]);
            i++

        }
        else {
            new_array.push(b[n]);
            n++
        }
    } 



console.log(new_array)



//  --------------------- avrerage, perimeter, heron

var a = 3
var b = 4
var c = 5
var average

function calculateTriangle(a, b, c) {
    var average = (a + b + c)/2;
    var perimeter = a + b + c
    var heron = Math.sqrt(average*(average-a)*(average-b)*(average-c))
    console.log(average, perimeter, heron)
}
console.log(calculateTriangle(3,4,5))



// ------------------------------------------------


function maximumResult(a, b, c) {
    if (a>c && c>0) {
        x = a*(b+c);
        console.log(a + "*(" + b + "+" + c+ ") = " + x)
    }
    else if (a>c && c<0) {
        x = a+(b*c);
        console.log(a + "+(" + b + "*" + c+ ") = " + x)
    }
    else if (c>a && a<0) {
        x = (a+b)*c;
        console.log("(" + a + "+" + b + ")" + "*" + c +  " = " + x)
    }
    else if (c>a && a<0) {
        x = (a*b)+c;
        console.log("(" + a + "*" + b + ")" + "+" + c +  " = " + x)
    }
}   
 
console.log(maximumResult(10,1,2))


// ------------------------------- 
// finds the winner between two matches where the goal as a visitor has more weight 
// ------------------------------

function matchWinner(a, b, c, d) {
    if (a+c>b+d) {
        return "The first team wins"
    }
    else if(a+c<b+d){
        return "The second team wins"
    }
    else{
        if (b>c) {
            return "The second team wins"
        }
        else if (b<c) {
            return "The first team wins"
        }
        else{
            return "No winner"
        }
    }
}
console.log(matchWinner(1,1,1,1))




￼// --------------------------- Create function that prints "Hello World" and caal this function


function hello() {
    console.log("Hello World")
}

console.log(hello())



// --------------------------------- Function that receives a parameter that uses variable name as argument

name = "David"

function helloName(name) {
    return("Hello, " + name + "!")
}

console.log(helloName(name))



//  ----- Function that checks if the name is Alice returns "Helo dear Alice", other returns "Hello + name"



name = "Rachel"

function helloAlice(name) {
    if (name == "Alice") {
        return("Helo dear Alice")
    }
    else{
    return("Hello, " + name + "!")
    }
}

console.log(helloAlice(name))





// ------- Function that receives a number and adds the numbers until the number



function addNumbers(num) {
    x = 0;
    while (num >= 1) {
      x =  x + num 
        num--
    }
    return x
}
console.log(addNumbers(num))



// --------------------------- Multiply two numbers


function multiplyNumbers(a, b) {
    return a*b
}

console.log(multiplyNumbers(3,4))

// ------------------------------------------------






// ---------------------------------------------
// Make function that receives the amount money to buy telephones and accessories (paying also the vat) and returns the purchases and the amount paid 
// ----------------------------------------------


accessory_amounts = 0
phone_amounts = 0
phone = 849
accessory = 39
vat = 17 / 100
money = parseFloat(prompt("How much money do you have"))


function buyPhone(money) {
        while (money > phone + (phone * vat)) {
            money = money - (phone + (phone * vat))
            money = Math.round(money * 100) / 100
            phone_amounts = phone_amounts + 1
        }
        if (money < phone + (phone * vat)) {
            while (money > accessory + (accessory * vat)) {
                money = money - (accessory + (accessory * vat))
                money = Math.round(money * 100) / 100
                accessory_amounts = accessory_amounts + 1
            }
        }
        return "You can purchase " + phone_amounts + " smartphones and " + accessory_amounts + " smartphone accessories with total cost of " + Math.round((phone_amounts * (phone + (phone * vat)) + accessory_amounts * (accessory + (accessory * vat))) * 100) / 100 + " NIS."
    }

console.log(buyPhone(money))



// --------------------------------------------



