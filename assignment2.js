// Question 1:
// Convert function sau về Arrow Function ngắn nhất có thể theo các bước sau:
// B1: Ko có keyword function
// B2: Không có dấu {} và keyword return trong function body
// B3: Không có dấu ngoặc ở argument
let rtNum = (a) => a + 100;
// Question 2:
// Convert function sau về Arrow Function ngắn nhất có thể:
// a:
(a, b) => a + b + 100;
// b:
(a, b) => a + b + 42;
// c:
(a) => a + 100;
// Exercise 5: Parameter
// Question 1: khai báo 1 function multiply() có 2 tham số a,b. Và có b có
// default value
// Kết quả:
// multiply(5,3) -> 15
// multiply(5) -> 5
let multiply = (a, b = 1) => a * b;
// var rs = multiply(5);
let rs = multiply(5, 3);
console.log(rs);
// Question 2: khai báo 1 function multiply() có tham số không giới hạn
// Kết quả:
// multiply(5) -> 5
// multiply(5,3) -> 15
// multiply(5,3,2) -> 30
let multiplyNoLimit = (...numbers) => (numbers.reduce((num, ind) => num * ind));
let rsNoLimit = multiplyNoLimit(5, 6, 7, 8, 9);
console.log(rsNoLimit);
// Question 3: khai báo 1 function printInformation() có 2 tham số name, email.
// Và có email là optional parameter
// Kết quả:
// printInformation("Nam","Namvv20@gmail.com")
//  tôi là Nam. Email của tối là Namvv20@gmail.com
// printInformation("Nam")
//  tôi là Nam. Tôi chưa có Email
let printInformation = (name, mail) => mail ? `tôi là ${name}. Email của tối là ${mail}` : `tôi là ${name}. Tôi chưa có Email`;
let printI = printInformation("Vinh");
console.log(printI);
// Exercise 5: Callback
// Question 1: Viết callback thực hiện các lệnh sau
// B1: Call API Create User (1)
// B2: Nếu (1) thành công thì Call API Create Group (2)
// Nếu (1) lỗi thì in ra lỗi và in ra text "End!"
// B3: Nếu (2) thành công thì Call API Add User To Group (3)
// Nếu (2) lỗi thì in ra lỗi và in ra text "End!"
// B4: Nếu (3) thành công thì in ra text "End!"
// Chú ý: Sử dụng setTimeout() để mô phỏng Call API
// Exercise 6: Promise
// Question 1:
// Sửa lại Question 1 ở Exercise 5 theo Promise
function callApiCreateUser() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Call Api User");
            let mathRanDom = Math.random() > 0;
            if (mathRanDom) {
                res("Create User Success");
            }
            else {
                console.log("Create User Failure");
                rej("End");
            }
        }, 3000);
    });
}
function callApiCreateGroup() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Call Api Group");
            let mathRanDom = Math.random() > 0;
            if (mathRanDom) {
                res("Create Group Success");
            }
            else {
                console.log("Create Group Failure");
                rej("End");
            }
        }, 3000);
    });
}
function callApiAddUserToGroup() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Call Api Add User");
            let mathRanDom = Math.random() > 0;
            if (mathRanDom) {
                res("End");
            }
        }, 3000);
    });
}
callApiCreateUser()
    .then((mess) => {
    console.log(mess);
    return callApiCreateGroup();
})
    .then((mess) => {
    console.log(mess);
    return callApiAddUserToGroup();
})
    .then((mess) => {
    console.log(mess);
})
    .catch((err) => {
    console.log(err);
});
