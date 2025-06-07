// Các phần tử chính
const siteBrandBtn = document.getElementById('siteBrandBtn');
const openSidebarBtn = document.getElementById('openSidebarBtn');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');
const sidebarMenu = document.getElementById('sidebarMenu');
const overlay = document.getElementById('overlay');
const darkModeBtn = document.getElementById('darkModeBtn');

const homepageContent = document.getElementById('homepageContent');
const calculatorPrimary = document.getElementById('calculatorPrimary');
const calculatorSecondary = document.getElementById('calculatorSecondary');
const programmingContent = document.getElementById('programmingContent');
const forumContent = document.getElementById('forumContent');

const programmingTitle = document.getElementById('programmingTitle');
const programmingDescription = document.getElementById('programmingDescription');

// Các phần tử của Diễn đàn
const authContainer = document.getElementById('authContainer');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginUsernameInput = document.getElementById('loginUsername');
const loginPasswordInput = document.getElementById('loginPassword');
const loginBtn = document.getElementById('loginBtn');
const loginMessage = document.getElementById('loginMessage');
const showRegisterFormBtn = document.getElementById('showRegisterForm');

const registerUsernameInput = document.getElementById('registerUsername');
const registerPasswordInput = document.getElementById('registerPassword');
const registerBtn = document.getElementById('registerBtn');
const registerMessage = document.getElementById('registerMessage');
const showLoginFormBtn = document.getElementById('showLoginForm');

const postContainer = document.getElementById('postContainer');
const loggedInUsernameSpan = document.getElementById('loggedInUsername');
const logoutBtn = document.getElementById('logoutBtn');
const postTitleInput = document.getElementById('postTitle');
const postContentTextarea = document.getElementById('postContent');
const submitPostBtn = document.getElementById('submitPostBtn');
const postMessage = document.getElementById('postMessage');
const forumPostsDiv = document.getElementById('forumPosts');

// --- Dữ liệu lưu trữ (Tạm thời dùng localStorage) ---
// **Lưu ý quan trọng**: Việc lưu trữ tài khoản và mật khẩu dưới dạng plaintext trong localStorage là KHÔNG AN TOÀN.
// Trong một ứng dụng thực tế, bạn sẽ cần một backend (server-side) và cơ sở dữ liệu
// để xử lý xác thực người dùng và lưu trữ dữ liệu một cách an toàn và bền vững.
let accounts = JSON.parse(localStorage.getItem('forumAccounts')) || {};
let forumPosts = JSON.parse(localStorage.getItem('forumPosts')) || [];
let currentLoggedInUser = localStorage.getItem('currentLoggedInForumUser') || null;

// Dữ liệu bài học lập trình (Đã Cập Nhật Đầy Đủ Chi Tiết và kiểm tra ký tự)
const programmingLessons = {
    "Python": `## Python là gì?
Python là một ngôn ngữ lập trình bậc cao, được phát triển bởi Guido van Rossum và lần đầu tiên được phát hành vào năm 1991. Python nổi bật với cú pháp rõ ràng và dễ đọc, giúp lập trình viên dễ dàng viết và duy trì mã nguồn. Python hỗ trợ nhiều kiểu lập trình, bao gồm lập trình hướng đối tượng, lập trình hàm và lập trình thủ tục. Nó cũng có một cộng đồng lớn và nhiều thư viện phong phú, giúp người dùng dễ dàng phát triển ứng dụng trong nhiều lĩnh vực khác nhau như web, khoa học dữ liệu, trí tuệ nhân tạo và tự động hóa.

## Tại sao nên học Python?
Python là một trong những ngôn ngữ lập trình phổ biến nhất hiện nay, được sử dụng rộng rãi trong nhiều lĩnh vực khác nhau. Dưới đây là một số lý do tại sao bạn nên học Python:
* **Dễ học và dễ đọc:** Cú pháp của Python rất rõ ràng và dễ hiểu, giúp người mới bắt đầu dễ dàng tiếp cận.
* **Cộng đồng lớn:** Python có một cộng đồng lập trình viên lớn, cung cấp nhiều tài liệu, thư viện và hỗ trợ trực tuyến.
* **Đa dụng:** Python có thể được sử dụng trong nhiều lĩnh vực như phát triển web, khoa học dữ liệu, trí tuệ nhân tạo, tự động hóa và nhiều lĩnh vực khác.
* **Thư viện phong phú:** Python có nhiều thư viện mạnh mẽ giúp bạn thực hiện các tác vụ phức tạp một cách dễ dàng.

## Các lệnh cơ bản trên Python
Python cung cấp nhiều lệnh cơ bản để thực hiện các tác vụ khác nhau. Dưới đây là một số lệnh cơ bản mà bạn nên biết:
\`\`\`python
# In ra một chuỗi
print("Hello, World!")

# Lấy vào một chuỗi (nhập từ người dùng)
name = input("Nhập tên của bạn: ")
print("Chào bạn, " + name + "!")
\`\`\`
Để chạy mã Python, bạn có thể sử dụng một trình biên dịch trực tuyến hoặc cài đặt Python trên máy tính của mình. Sau khi cài đặt, bạn có thể chạy mã bằng cách sử dụng lệnh \`python\` trong terminal hoặc command prompt.
Để bắt đầu học Python, bạn có thể tham gia các khóa học trực tuyến, đọc sách hoặc tham gia vào các diễn đàn lập trình để trao đổi và học hỏi từ những người khác.

## Cách lưu biến trong Python
Trong Python, bạn có thể lưu trữ giá trị trong biến bằng cách sử dụng cú pháp sau:
\`\`\`python
biến_tên = giá_trị
\`\`\`
Ví dụ:
\`\`\`python
# Lưu một số nguyên
x = 10

# Lưu một chuỗi
name = "VinaCas"

# Lưu một số thực
pi = 3.14

# Lưu một danh sách (List)
numbers = [1, 2, 3, 4]

# Lưu một Tuple
coordinates = (10, 20)

# Lưu một Dictionary
person = {"name": "Alice", "age": 30}

# Lưu một tập hợp (Set)
unique_numbers = {1, 2, 2, 3} # Kết quả sẽ là {1, 2, 3}
\`\`\`
Trong Python, bạn không cần phải khai báo kiểu dữ liệu của biến trước khi sử dụng. Python sẽ tự động xác định kiểu dữ liệu dựa trên giá trị mà bạn gán cho biến.

## Cách sử dụng thuật toán đơn giản
Python cung cấp nhiều thuật toán và cấu trúc dữ liệu khác nhau để giúp bạn giải quyết các bài toán lập trình. Một số thuật toán đơn giản mà bạn có thể sử dụng bao gồm:
* **Sắp xếp:** Sắp xếp danh sách hoặc mảng theo thứ tự tăng dần hoặc giảm dần.
* **Tìm kiếm:** Tìm kiếm một giá trị trong danh sách hoặc mảng.
* **Tính toán:** Thực hiện các phép toán số học như cộng, trừ, nhân, chia.
* **Đệ quy:** Sử dụng đệ quy để giải quyết các bài toán phức tạp hơn.
Các thuật toán này có thể được sử dụng trong nhiều bài toán khác nhau, từ đơn giản đến phức tạp.

Đây là ví dụ đếm số từ 1 đến 10:
\`\`\`python
# Tính tổng của các số từ 1 đến 10
total = 0
for i in range(1, 11): # range(1, 11) tạo ra các số từ 1 đến 10
    total += i
print("Tổng của các số từ 1 đến 10 là:", total)
\`\`\`
Trong ví dụ trên, chúng ta sử dụng vòng lặp \`for\` để lặp qua các số từ 1 đến 10 và cộng dồn vào biến \`total\`. Cuối cùng, chúng ta in ra kết quả.

## So sánh trong Python
Trong Python, bạn có thể sử dụng các toán tử so sánh để so sánh các giá trị. Dưới đây là một số toán tử so sánh phổ biến:
* \`==\`: So sánh bằng
* \`!=\`: So sánh khác
* \`>\`: Lớn hơn
* \`<\`: Nhỏ hơn
* \`>=\`: Lớn hơn hoặc bằng
* \`<=\`: Nhỏ hơn hoặc bằng
Ví dụ:
\`\`\`python
a = 5
b = 10

if a < b:
    print("a nhỏ hơn b")
elif a == b:
    print("a bằng b")
else:
    print("a lớn hơn b")

# So sánh chuỗi
str1 = "hello"
str2 = "world"
if str1 == str2:
    print("Hai chuỗi bằng nhau")
else:
    print("Hai chuỗi khác nhau")
\`\`\`
Trong ví dụ trên, chúng ta sử dụng các toán tử so sánh để kiểm tra mối quan hệ giữa các biến. Dựa vào kết quả so sánh, chúng ta in ra thông báo tương ứng.

## Cách tạo một hàm trong Python
Để tạo một hàm trong Python, bạn có thể sử dụng từ khóa \`def\` theo cú pháp sau:
\`\`\`python
def ten_ham(tham_so1, tham_so2):
    # Thực hiện một số thao tác
    return ket_qua

# Gọi hàm
ket_qua = ten_ham(giá_trị1, giá_trị2)
\`\`\`
Ví dụ:
\`\`\`python
# Định nghĩa một hàm tính tổng
def tinh_tong(a, b):
    return a + b

# Gọi hàm và in kết quả
ket_qua = tinh_tong(5, 10)
print("Tổng là:", ket_qua)

# Hàm không có tham số và không trả về giá trị
def chao():
    print("Chào bạn!")
chao()
\`\`\`
Trong ví dụ trên, chúng ta định nghĩa một hàm \`tinh_tong\` nhận hai tham số \`a\` và \`b\`, sau đó trả về tổng của chúng. Cuối cùng, chúng ta gọi hàm và in kết quả.

Hy vọng rằng những thông tin trên sẽ giúp bạn hiểu rõ hơn về Python và cách sử dụng nó trong lập trình.`,

    "JavaScript": `## JavaScript là gì?
JavaScript là một ngôn ngữ lập trình kịch bản (scripting language) nhẹ, thông dịch, được phát triển chủ yếu cho các trang web động. Nó cho phép bạn thêm tương tác vào trang web, xử lý dữ liệu, kiểm soát đa phương tiện, và nhiều hơn nữa. Ban đầu được tạo ra để chạy trên trình duyệt client-side, JavaScript ngày nay đã mở rộng sang server-side (với Node.js), ứng dụng di động (React Native) và máy tính để bàn (Electron).

## Tại sao nên học JavaScript?
* **Phổ biến rộng rãi:** JavaScript là một trong những ngôn ngữ phổ biến nhất thế giới, là nền tảng của mọi trang web hiện đại.
* **Đa năng (Full-stack):** Bạn có thể sử dụng JavaScript để phát triển cả frontend (phía người dùng) và backend (phía máy chủ) của ứng dụng, giúp bạn trở thành một lập trình viên full-stack.
* **Cộng đồng lớn và Framework phong phú:** Có một cộng đồng lớn hỗ trợ, cùng với vô số framework và thư viện (React, Angular, Vue, Node.js, Express.js...) giúp tăng tốc độ phát triển.
* **Nhu cầu thị trường cao:** Với sự phát triển của web và các ứng dụng đa nền tảng, nhu cầu về lập trình viên JavaScript luôn ở mức cao.

## Các lệnh cơ bản trên JavaScript
JavaScript có cú pháp tương tự C/Java. Dưới đây là một số lệnh cơ bản:
\`\`\`javascript
// In ra console (dùng cho debug hoặc thông báo)
console.log("Hello, World!");

// Hiển thị hộp thoại cảnh báo trên trình duyệt
alert("Chào bạn!");

// Lấy vào một chuỗi từ người dùng qua hộp thoại
let name = prompt("Nhập tên của bạn:");
console.log("Chào bạn, " + name + "!");

// Lấy tham chiếu đến một phần tử HTML bằng ID
const myElement = document.getElementById("myId");
if (myElement) {
    myElement.textContent = "Nội dung mới";
}
\`\`\`
JavaScript được thực thi trực tiếp trong trình duyệt web hoặc thông qua môi trường runtime như Node.js. Bạn có thể nhúng mã JavaScript vào thẻ \`<script>\` trong HTML hoặc liên kết đến một file \`.js\` bên ngoài.

## Cách lưu biến trong JavaScript
Trong JavaScript, bạn sử dụng \`var\`, \`let\` hoặc \`const\` để khai báo biến.
* \`var\`: Phạm vi hàm (function scope), có thể khai báo lại và gán lại giá trị.
* \`let\`: Phạm vi khối (block scope), có thể gán lại giá trị nhưng không khai báo lại.
* \`const\`: Phạm vi khối, không thể khai báo lại và không thể gán lại giá trị (dành cho hằng số).
\`\`\`javascript
// Khai báo biến với let (nên dùng cho biến có thể thay đổi)
let age = 30;

// Khai báo hằng số với const (nên dùng cho giá trị không đổi)
const PI = 3.14159;

// Khai báo biến với var (phong cách cũ, ít dùng trong code hiện đại)
var message = "Hello";

// Kiểu dữ liệu cơ bản
let integerNum = 10;   // Number
let floatNum = 20.5;   // Number
let textStr = "Hi";    // String
let isActive = true;   // Boolean
let emptyVal = null;   // Null
let undefinedVal;      // Undefined

// Đối tượng (Object)
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
};

// Mảng (Array)
let colors = ["red", "green", "blue"];
\`\`\`
JavaScript là ngôn ngữ kiểu động (dynamically typed), nghĩa là bạn không cần chỉ định kiểu dữ liệu khi khai báo biến.

## Cách sử dụng thuật toán đơn giản
JavaScript hỗ trợ đầy đủ các thuật toán và cấu trúc dữ liệu. Dưới đây là một ví dụ đơn giản về vòng lặp và tính toán:
\`\`\`javascript
// Tính tổng các số từ 1 đến 10
let total = 0;
for (let i = 1; i <= 10; i++) {
    total += i;
}
console.log("Tổng của các số từ 1 đến 10 là: " + total);

// Tìm kiếm một phần tử trong mảng
const numbers = [10, 20, 30, 40, 50];
const searchTerm = 30;
let found = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === searchTerm) {
        found = true;
        break;
    }
}
if (found) {
    console.log(searchTerm + " được tìm thấy trong mảng.");
} else {
    console.log(searchTerm + " không tìm thấy trong mảng.");
}
\`\`\`
Bạn có thể sử dụng các vòng lặp (\`for\`, \`while\`, \`forEach\`), câu lệnh điều kiện (\`if/else\`, \`switch\`), và các hàm để xây dựng thuật toán.

## So sánh trong JavaScript
JavaScript sử dụng các toán tử so sánh tương tự Python, nhưng có thêm \`===\` và \`!==\` để so sánh cả giá trị và kiểu dữ liệu.
* \`==\`: So sánh bằng (chỉ giá trị, có thể ép kiểu)
* \`!=\`: So sánh khác (chỉ giá trị, có thể ép kiểu)
* \`===\`: So sánh bằng (giá trị và kiểu dữ liệu)
* \`!==\`: So sánh khác (giá trị và kiểu dữ liệu)
* \`>\`: Lớn hơn
* \`<\`: Nhỏ hơn
* \`>=\`: Lớn hơn hoặc bằng
* \`<=\`: Nhỏ hơn hoặc bằng
Ví dụ:
\`\`\`javascript
let a = 5;
let b = 10;

if (a < b) {
    console.log("a nhỏ hơn b");
} else if (a === b) { // Nên dùng === để so sánh chặt chẽ
    console.log("a bằng b");
} else {
    console.log("a lớn hơn b");
}

// Ví dụ về == và ===
console.log(5 == '5');   // true (ép kiểu)
console.log(5 === '5');  // false (kiểu khác nhau)
console.log(null == undefined); // true
console.log(null === undefined); // false
\`\`\`

## Cách tạo một hàm trong JavaScript
Trong JavaScript, bạn có thể tạo hàm bằng từ khóa \`function\` hoặc sử dụng cú pháp arrow function (ES6+).
\`\`\`javascript
// Định nghĩa hàm truyền thống
function addNumbers(a, b) {
    return a + b;
}

// Gọi hàm
let result = addNumbers(5, 10);
console.log("Tổng là: " + result);

// Định nghĩa hàm bằng biểu thức hàm (Function Expression)
const multiply = function(x, y) {
    return x * y;
};
console.log("Tích là: " + multiply(3, 4));

// Arrow Function (ES6+) - ngắn gọn hơn cho hàm đơn giản
const subtract = (a, b) => a - b;
console.log("Hiệu là: " + subtract(20, 7));

// Hàm không có tham số và không trả về giá trị
function sayHello() {
    console.log("Chào bạn!");
}
sayHello();
\`\`\`
Hàm là một khối mã có thể tái sử dụng, giúp tổ chức code và làm cho nó dễ quản lý hơn.`,

    "C++": `## C++ là gì?
C++ là một ngôn ngữ lập trình mạnh mẽ, hiệu suất cao, đa mô hình (multi-paradigm) được phát triển bởi Bjarne Stroustrup như một phần mở rộng của ngôn ngữ C. Nó kết hợp các tính năng của lập trình hướng đối tượng (Object-Oriented Programming - OOP), lập trình thủ tục và lập trình chung. C++ được sử dụng rộng rãi trong phát triển phần mềm hệ thống, trò chơi, ứng dụng hiệu suất cao, hệ điều hành, và phần mềm nhúng.

## Tại sao nên học C++?
* **Hiệu suất cao:** C++ cung cấp quyền kiểm soát trực tiếp phần cứng và bộ nhớ, dẫn đến hiệu suất rất cao, làm cho nó lý tưởng cho các ứng dụng đòi hỏi tốc độ.
* **Đa năng:** Được sử dụng trong nhiều lĩnh vực từ phát triển game, hệ điều hành, trình duyệt web, đến hệ thống tài chính và khoa học.
* **Hiểu sâu về máy tính:** Học C++ giúp bạn hiểu sâu hơn về cách máy tính hoạt động, quản lý bộ nhớ, và cấu trúc dữ liệu ở mức độ thấp.
* **Nền tảng vững chắc:** Là ngôn ngữ nền tảng cho nhiều ngôn ngữ khác (như Java, C#), việc nắm vững C++ giúp bạn dễ dàng học các ngôn ngữ khác.

## Các lệnh cơ bản trên C++
C++ yêu cầu bạn khai báo kiểu dữ liệu cho biến. Dưới đây là một số lệnh cơ bản:
\`\`\`cpp
#include <iostream> // Thư viện cho nhập/xuất cơ bản
#include <string>   // Thư viện cho kiểu chuỗi string

int main() {
    // In ra màn hình (Console Output)
    std::cout << "Hello, World!" << std::endl; // std::endl để xuống dòng

    // Lấy giá trị từ bàn phím (Console Input)
    std::cout << "Nhập tên của bạn: ";
    std::string name;
    std::cin >> name; // Đọc một từ
    std::cout << "Chào bạn, " << name << "!" << std::endl;

    // Ví dụ đọc cả dòng (cần cin.ignore() nếu đã đọc số trước đó)
    // std::cin.ignore(); // Bỏ qua ký tự xuống dòng còn lại từ cin >> name
    // std::cout << "Nhập câu nói yêu thích của bạn: ";
    // std::getline(std::cin, favoriteQuote); // Đọc cả dòng
    // std::cout << "Câu nói: " << favoriteQuote << std::endl;

    return 0; // Chương trình kết thúc thành công
}
\`\`\`
Để chạy mã C++, bạn cần một trình biên dịch (compiler) như g++ (GNU Compiler Collection). Sau khi biên dịch, bạn sẽ nhận được một file thực thi.

## Cách lưu biến trong C++
Trong C++, bạn phải khai báo kiểu dữ liệu của biến trước khi sử dụng.
\`\`\`cpp
#include <string> // Cần cho kiểu string

int main() {
    // Lưu một số nguyên (integer)
    int age = 30;

    // Lưu một số thực (floating-point)
    double pi = 3.14159; // double cho độ chính xác cao hơn float

    // Lưu một ký tự (character)
    char initial = 'D';

    // Lưu một chuỗi (string)
    std::string fullName = "Nguyễn Văn A";

    // Lưu một giá trị boolean
    bool isActive = true; // true hoặc false

    // Khai báo mà không gán giá trị khởi tạo (giá trị sẽ không xác định)
    int count;
    count = 100; // Gán giá trị sau

    return 0;
}
\`\`\`
C++ là ngôn ngữ kiểu tĩnh (statically typed), nghĩa là kiểu dữ liệu của biến được kiểm tra tại thời điểm biên dịch, giúp phát hiện lỗi sớm.

## Cách sử dụng thuật toán đơn giản
C++ hỗ trợ các thuật toán thông qua thư viện chuẩn (Standard Library) và các cấu trúc dữ liệu.
\`\`\`cpp
#include <iostream> // Cho nhập xuất
#include <vector>   // Cho std::vector (mảng động)
#include <numeric>  // Cho std::accumulate (tính tổng)

int main() {
    // Tính tổng các số từ 1 đến 10
    int total = 0;
    for (int i = 1; i <= 10; ++i) { // Vòng lặp for
        total += i;
    }
    std::cout << "Tổng của các số từ 1 đến 10 là: " << total << std::endl;

    // Sắp xếp một vector (mảng động)
    std::vector<int> numbers = {5, 2, 8, 1, 9};
    // std::sort(numbers.begin(), numbers.end()); // Cần #include <algorithm>
    // std::cout << "Mảng sau khi sắp xếp: ";
    // for (int num : numbers) {
    //     std::cout << num << " ";
    // }
    // std::cout << std::endl;

    return 0;
}
\`\`\`
Bạn có thể sử dụng các vòng lặp (\`for\`, \`while\`), câu lệnh điều kiện (\`if/else\`, \`switch\`), và các hàm để xây dựng thuật toán.

## So sánh trong C++
Các toán tử so sánh trong C++ tương tự như Python và JavaScript.
* \`==\`: So sánh bằng
* \`!=\`: So sánh khác
* \`>\`: Lớn hơn
* \`<\`: Nhỏ hơn
* \`>=\`: Lớn hơn hoặc bằng
* \`<=\`: Nhỏ hơn hoặc bằng
Ví dụ:
\`\`\`cpp
#include <iostream>
#include <string>

int main() {
    int a = 5;
    int b = 10;

    if (a < b) {
        std::cout << "a nhỏ hơn b" << std::endl;
    } else if (a == b) {
        std::cout << "a bằng b" << std::endl;
    } else {
        std::cout << "a lớn hơn b" << std::endl;
    }

    std::string s1 = "apple";
    std::string s2 = "banana";
    if (s1 < s2) { // So sánh chuỗi theo thứ tự từ điển
        std::cout << s1 << " đứng trước " << s2 << std::endl;
    }

    return 0;
}
\`\`\`

## Cách tạo một hàm trong C++
Để tạo một hàm trong C++, bạn định nghĩa kiểu trả về, tên hàm, và danh sách các tham số.
\`\`\`cpp
#include <iostream>

// Định nghĩa một hàm tính tổng
// int là kiểu dữ liệu trả về, tinhTong là tên hàm
// int a, int b là các tham số với kiểu dữ liệu
int tinhTong(int a, int b) {
    return a + b; // Trả về tổng của a và b
}

// Hàm không trả về giá trị (kiểu void)
void chaoBan(std::string name) {
    std::cout << "Chào bạn, " << name << "!" << std::endl;
}

int main() {
    // Gọi hàm tinhTong và in kết quả
    int ketQua = tinhTong(5, 10);
    std::cout << "Tổng là: " << ketQua << std::endl;

    // Gọi hàm chaoBan
    chaoBan("Alice");

    return 0;
}
\`\`\`
Hàm trong C++ có thể được khai báo trước (function prototype) và định nghĩa sau, hoặc định nghĩa trực tiếp.`,

    "Java": `## Java là gì?
Java là một ngôn ngữ lập trình hướng đối tượng (Object-Oriented Programming - OOP) mạnh mẽ, bảo mật và đa nền tảng, được phát triển bởi Sun Microsystems (nay thuộc Oracle). Java nổi tiếng với triết lý "Write Once, Run Anywhere" (WORA) nhờ vào Java Virtual Machine (JVM). Nó được sử dụng rộng rãi trong phát triển ứng dụng di động (Android), ứng dụng doanh nghiệp (Enterprise), phần mềm máy tính để bàn, và các hệ thống lớn.

## Tại sao nên học Java?
* **Đa nền tảng:** Mã Java có thể chạy trên bất kỳ thiết bị nào có JVM, không cần biên dịch lại, giúp tiết kiệm thời gian và công sức.
* **Lập trình hướng đối tượng:** Java là một ngôn ngữ hướng đối tượng thuần túy, giúp bạn nắm vững các khái niệm OOP quan trọng.
* **Cộng đồng lớn và Framework phong phú:** Có một cộng đồng lớn và nhiều framework (Spring, Hibernate, Android SDK) hỗ trợ phát triển các ứng dụng phức tạp.
* **Bảo mật:** Java được thiết kế với nhiều tính năng bảo mật tích hợp, phù hợp cho các ứng dụng yêu cầu độ an toàn cao.
* **Nhu cầu thị trường:** Java vẫn là một trong những ngôn ngữ được yêu cầu nhiều nhất trong ngành công nghiệp phần mềm, đặc biệt là trong các công ty lớn.

## Các lệnh cơ bản trên Java
Java là một ngôn ngữ kiểu tĩnh và yêu cầu mọi thứ phải nằm trong các lớp (classes).
\`\`\`java
public class Main {
    public static void main(String[] args) {
        // In ra màn hình (Console Output)
        System.out.println("Hello, World!");

        // In ra màn hình nhưng không xuống dòng
        System.out.print("Đây là một dòng ");
        System.out.println("không xuống dòng sau.");

        // Nhập dữ liệu từ bàn phím (cần import java.util.Scanner;)
        /*
        import java.util.Scanner; // Đặt ở đầu file, ngoài class Main

        Scanner scanner = new Scanner(System.in);
        System.out.print("Nhập tên của bạn: ");
        String name = scanner.nextLine(); // Đọc cả dòng
        System.out.println("Chào bạn, " + name + "!");
        scanner.close(); // Đóng scanner khi không còn dùng
        */
    }
}
\`\`\`
Để chạy mã Java, bạn cần bộ Java Development Kit (JDK) để biên dịch (javac) và chạy (java) các chương trình.

## Cách lưu biến trong Java
Trong Java, bạn phải khai báo kiểu dữ liệu của biến trước khi sử dụng.
\`\`\`java
public class VariablesExample {
    public static void main(String[] args) {
        // Lưu một số nguyên (integer)
        int age = 25;

        // Lưu một số thực (floating-point)
        double price = 99.99; // double là kiểu số thực mặc định

        // Lưu một ký tự (character)
        char grade = 'A';

        // Lưu một chuỗi (String) - String là một đối tượng
        String productName = "Laptop ASUS";

        // Lưu một giá trị boolean
        boolean isAvailable = true; // true hoặc false

        // Khai báo hằng số (không thể thay đổi giá trị sau khi gán)
        final int MAX_USERS = 1000;
        // MAX_USERS = 1200; // Lỗi: không thể gán lại cho final variable

        // Mảng (Array)
        int[] numbers = {1, 2, 3, 4, 5};
        String[] names = new String[3]; // Mảng 3 chuỗi rỗng
        names[0] = "Alice";
    }
}
\`\`\`
Java là ngôn ngữ kiểu tĩnh (statically typed), giúp phát hiện lỗi kiểu dữ liệu tại thời điểm biên dịch.

## Cách sử dụng thuật toán đơn giản
Java có cú pháp tương tự C++ cho các cấu trúc điều khiển và vòng lặp.
\`\`\`java
public class AlgorithmsExample {
    public static void main(String[] args) {
        // Tính tổng các số từ 1 đến 10
        int total = 0;
        for (int i = 1; i <= 10; i++) { // Vòng lặp for
            total += i;
        }
        System.out.println("Tổng của các số từ 1 đến 10 là: " + total);

        // Tìm kiếm một phần tử trong mảng
        int[] numbers = {10, 20, 30, 40, 50};
        int searchTerm = 30;
        boolean found = false;
        for (int number : numbers) { // Vòng lặp for-each
            if (number == searchTerm) {
                found = true;
                break;
            }
        }
        if (found) {
            System.out.println(searchTerm + " được tìm thấy trong mảng.");
        } else {
            System.out.println(searchTerm + " không tìm thấy trong mảng.");
        }
    }
}
\`\`\`
Bạn có thể sử dụng các vòng lặp (\`for\`, \`while\`, \`do-while\`), câu lệnh điều kiện (\`if/else\`, \`switch\`), và các phương thức để xây dựng thuật toán.

## So sánh trong Java
Các toán tử so sánh trong Java cũng tương tự các ngôn ngữ khác.
* \`==\`: So sánh bằng (dùng cho kiểu nguyên thủy và so sánh tham chiếu đối tượng)
* \`!=\`: So sánh khác
* \`>\`: Lớn hơn
* \`<\`: Nhỏ hơn
* \`>=\`: Lớn hơn hoặc bằng
* \`<=\`: Nhỏ hơn hoặc bằng
**Lưu ý quan trọng:** Đối với chuỗi và các đối tượng khác, bạn nên dùng phương thức \`.equals()\` để so sánh nội dung, không phải \`==\`.
\`\`\`java
public class ComparisonExample {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;

        if (a < b) {
            System.out.println("a nhỏ hơn b");
        } else if (a == b) {
            System.out.println("a bằng b");
        } else {
            System.out.println("a lớn hơn b");
        }

        String str1 = "hello";
        String str2 = "Hello";
        String str3 = new String("hello");

        System.out.println("str1 == str2: " + (str1 == str2)); // false (khác đối tượng)
        System.out.println("str1.equals(str2): " + (str1.equals(str2))); // false (phân biệt hoa thường)
        System.out.println("str1.equalsIgnoreCase(str2): " + (str1.equalsIgnoreCase(str2))); // true

        System.out.println("str1 == str3: " + (str1 == str3)); // false (khác đối tượng)
        System.out.println("str1.equals(str3): " + (str1.equals(str3))); // true
    }
}
\`\`\`

## Cách tạo một hàm (phương thức) trong Java
Trong Java, các hàm được gọi là "phương thức" (methods) và luôn thuộc về một lớp (class).
\`\`\`java
public class MethodExample {

    // Định nghĩa một phương thức tính tổng
    // public static là access modifier và keyword cho phép gọi trực tiếp từ main
    // int là kiểu dữ liệu trả về
    // tinhTong là tên phương thức
    // (int a, int b) là danh sách tham số
    public static int tinhTong(int a, int b) {
        return a + b; // Trả về tổng của a và b
    }

    // Phương thức không trả về giá trị (kiểu void)
    public static void chaoBan(String name) {
        System.out.println("Chào bạn, " + name + "!");
    }

    public static void main(String[] args) {
        // Gọi phương thức tinhTong và in kết quả
        int ketQua = tinhTong(5, 10);
        System.out.println("Tổng là: " + ketQua);

        // Gọi phương thức chaoBan
        chaoBan("Bob");
    }
}
\`\`\`
Phương thức là một khối mã thực hiện một nhiệm vụ cụ thể và có thể được gọi từ các phần khác của chương trình.`,
};

// Mới: Ánh xạ ngôn ngữ với đường dẫn logo
const languageLogos = {
    "Python": "https://i.pinimg.com/736x/ed/66/63/ed666327dd3ce274d94f2b3547155891.jpg",
    "JavaScript": "https://i.pinimg.com/736x/37/fc/63/37fc630b338d68d18b5fe5fde855562e.jpg",
    "C++": "https://i.pinimg.com/736x/c3/39/89/c33989e2abdcd80df55ef3b48435e6a9.jpg",
    "Java": "https://i.pinimg.com/736x/db/ba/84/dbba84d3fb1e4f101b42901d0313fe4b.jpg"
};


// --- Quản lý hiển thị các phần ---

// Ẩn tất cả các phần nội dung
function hideAllSections() {
    homepageContent.classList.add('hidden');
    calculatorPrimary.classList.add('hidden');
    calculatorSecondary.classList.add('hidden');
    programmingContent.classList.add('hidden');
    forumContent.classList.add('hidden');
}

// Hàm cập nhật giao diện người dùng diễn đàn
function updateForumUI() {
    // Hiển thị phần đăng nhập/đăng ký hoặc phần đăng bài
    if (currentLoggedInUser) {
        authContainer.classList.add('hidden');
        postContainer.classList.remove('hidden');
        loggedInUsernameSpan.textContent = currentLoggedInUser;
    } else {
        authContainer.classList.remove('hidden');
        postContainer.classList.add('hidden');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    }
    
    // Luôn luôn hiển thị các bài đăng, bất kể người dùng đã đăng nhập hay chưa
    renderForumPosts(); 
}


// Hiển thị một phần nội dung cụ thể
function showSection(sectionElement) {
    hideAllSections();
    sectionElement.classList.remove('hidden');
    closeSidebar();

    if (sectionElement === forumContent) {
        updateForumUI(); // Gọi updateForumUI để cập nhật giao diện diễn đàn và hiển thị bài đăng
    }
    // Chạy lại highlight cú pháp nếu phần được hiển thị là nội dung lập trình
    if (sectionElement === programmingContent) {
        hljs.highlightAll(); // Yêu cầu Highlight.js tìm và highlight tất cả các khối code
    }
}

// --- Quản lý Sidebar Menu ---

function openSidebar() {
    sidebarMenu.style.width = '250px';
    overlay.classList.add('open');
}

function closeSidebar() {
    sidebarMenu.style.width = '0';
    overlay.classList.remove('open');
}

// Gắn sự kiện cho nút mở/đóng
openSidebarBtn.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Tạo các mục lập trình trong sidebar
function renderProgrammingLessonsInSidebar() {
    const ul = sidebarMenu.querySelector('.sidebar-content ul');

    // Xóa các mục lập trình cũ (nếu có) để tránh trùng lặp
    ul.querySelectorAll('[data-category="programming-lesson"]').forEach(item => item.remove());

    // Tìm thẻ <li> chứa category "Lập trình"
    let programmingCategoryLi = null;
    ul.querySelectorAll('li').forEach(li => {
        if (li.classList.contains('menu-category') && li.textContent.trim() === 'Lập trình') {
            programmingCategoryLi = li;
        }
    });

    // Hàm chung để tạo và gắn listener cho một item bài học
    const createLessonItem = (lang) => {
        let li = document.createElement('li');
        li.setAttribute('data-category', 'programming-lesson');

        let a = document.createElement('a');
        a.href = "#";
        a.className = 'sidebar-item';
        a.setAttribute('data-section', 'programmingContent');
        a.setAttribute('data-lang', lang);

        // THÊM LOGO VÀO ĐÂY (trên sidebar)
        if (languageLogos[lang]) {
            const img = document.createElement('img');
            img.src = languageLogos[lang];
            img.alt = `${lang} Logo`;
            img.classList.add('lang-logo');
            a.appendChild(img);
        }

        const spanText = document.createElement('span');
        spanText.textContent = lang;
        a.appendChild(spanText);

        // CẬP NHẬT: Sửa đổi sự kiện click để thêm logo vào tiêu đề chính
        a.addEventListener('click', (e) => {
            e.preventDefault();

            // Tạo một thẻ img cho logo
            let logoHtml = '';
            if (languageLogos[lang]) {
                logoHtml = `<img src="${languageLogos[lang]}" alt="${lang} Logo" class="title-logo">`;
            }

            // Cập nhật programmingTitle sử dụng innerHTML để chèn thẻ img
            programmingTitle.innerHTML = `${logoHtml} Bài học lập trình: ${lang}`;
            programmingDescription.innerHTML = programmingLessons[lang]; // Đổi textContent thành innerHTML để Markdown hoạt động
            showSection(programmingContent);
            // Sau khi nội dung được thêm, gọi highlight.js để làm nổi bật cú pháp
            hljs.highlightAll(); 
        });
        li.appendChild(a);
        return li;
    };


    // Nếu tìm thấy category "Lập trình", chèn các bài học vào sau nó
    if (programmingCategoryLi) {
        let currentElement = programmingCategoryLi;
        Object.keys(programmingLessons).forEach(lang => {
            const newLi = createLessonItem(lang);
            currentElement.parentNode.insertBefore(newLi, currentElement.nextElementSibling);
            currentElement = newLi;
        });
    } else {
        // Fallback: nếu không tìm thấy category "Lập trình", thêm vào cuối
        Object.keys(programmingLessons).forEach(lang => {
            const newLi = createLessonItem(lang);
            ul.appendChild(newLi);
        });
    }
}


// Gắn sự kiện cho các mục trong sidebar menu (đảm bảo không bị trùng lặp)
document.querySelectorAll('.sidebar-item').forEach(item => {
    // Chỉ thêm listener nếu chưa có (tránh thêm nhiều lần nếu gọi renderProgrammingLessonsInSidebar lại)
    if (!item.hasAttribute('data-listener-added')) {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = item.getAttribute('data-section');
            if (sectionId) {
                // Đảm bảo không xử lý lại các bài học lập trình đã có listener riêng
                if (item.getAttribute('data-lang')) {
                    // Nếu là bài học lập trình, đã có listener ở createLessonItem rồi.
                    // Do đó, không cần làm gì ở đây.
                    return;
                }
                showSection(document.getElementById(sectionId));
            }
        });
        item.setAttribute('data-listener-added', 'true');
    }
});


// --- Xử lý Nút Site Brand (Trang Chủ) ---
siteBrandBtn.addEventListener('click', () => {
    showSection(homepageContent);
    closeSidebar();
});


// --- Chức năng Tính toán An toàn hơn ---

function safeCalculate(expression, allowAdvanced = false) {
    expression = expression.replace(/\s+/g, '');

    // Convert comma to dot for decimal numbers if user inputs with comma
    expression = expression.replace(/(\d+),(\d+)/g, '$1.$2');

    if (allowAdvanced) {
        // Escape any backticks within the expression that might interfere with Math.sqrt or Math.pow
        expression = expression
            .replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)')
            .replace(/pow\(([^,]+),([^)]+)\)/g, 'Math.pow($1,$2)');
    }

    // List of allowed characters and operations
    const allowedChars = /^[0-9+\-*/%.() ]+$/;
    if (allowAdvanced) {
        // Add specific characters/patterns for advanced functions if needed
        // For example, if you allow 'sqrt', 'pow', you might add them to the regex.
        // For simplicity and safety, the .replace above transforms them to Math. functions.
        // So the regex still focuses on what remains after transformation.
        // This regex allows Math. keywords after the replacements.
        const advancedAllowedChars = /^[0-9+\-*/%.()Mtha\.]+\s*$/; 
        if (!advancedAllowedChars.test(expression)) {
            return "Lỗi: Biểu thức chứa ký tự không hợp lệ.";
        }
    } else {
        if (!allowedChars.test(expression)) {
            return "Lỗi: Biểu thức chỉ được chứa số và các toán tử cơ bản (+ - * / %).";
        }
    }

    try {
        // Basic check to prevent some common malicious inputs (though not foolproof for all)
        if (expression.includes('constructor') || expression.includes('prototype') || expression.includes('__')) {
            return "Lỗi: Biểu thức không an toàn.";
        }

        // Using Function constructor for evaluation is generally risky, but for a calculator with
        // strict input validation, it's a common approach.
        // Ensure that only valid characters and mathematical operations are allowed.
        const result = new Function('return ' + expression)();
        
        if (isNaN(result) || !isFinite(result)) {
            return "Lỗi: Phép tính không hợp lệ.";
        }
        return result;
    } catch (e) {
        return "Lỗi: Biểu thức không hợp lệ.";
    }
}


// --- Chức năng chuyển đổi Dark Mode ---
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    // Lưu trạng thái dark mode vào localStorage
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Kiểm tra trạng thái dark mode khi tải trang
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
}


// --- Xử lý Form Đăng nhập/Đăng ký Diễn đàn ---

// Lưu tài khoản vào localStorage
function saveAccounts() {
    localStorage.setItem('forumAccounts', JSON.stringify(accounts));
}

// Xử lý đăng ký
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = registerUsernameInput.value.trim();
    const password = registerPasswordInput.value.trim();

    if (!username || !password) {
        registerMessage.textContent = 'Vui lòng nhập đầy đủ tên người dùng và mật khẩu.';
        registerMessage.style.color = 'red';
        return;
    }
    if (accounts[username]) {
        registerMessage.textContent = 'Tên người dùng đã tồn tại.';
        registerMessage.style.color = 'red';
    } else {
        accounts[username] = password; // Lưu mật khẩu plaintext (KHÔNG AN TOÀN TRONG THỰC TẾ)
        saveAccounts();
        registerMessage.textContent = 'Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.';
        registerMessage.style.color = 'green';
        registerUsernameInput.value = '';
        registerPasswordInput.value = '';
        // Chuyển về form đăng nhập sau khi đăng ký thành công
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        loginMessage.textContent = ''; // Xóa thông báo cũ
    }
});

// Xử lý đăng nhập
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = loginUsernameInput.value.trim();
    const password = loginPasswordInput.value.trim();

    if (accounts[username] && accounts[username] === password) {
        currentLoggedInUser = username;
        localStorage.setItem('currentLoggedInForumUser', username);
        loginMessage.textContent = 'Đăng nhập thành công!';
        loginMessage.style.color = 'green';
        loginUsernameInput.value = '';
        loginPasswordInput.value = '';
        updateForumUI(); // Cập nhật giao diện sau khi đăng nhập
    } else {
        loginMessage.textContent = 'Tên người dùng hoặc mật khẩu không đúng.';
        loginMessage.style.color = 'red';
    }
});

// Xử lý đăng xuất
logoutBtn.addEventListener('click', () => {
    currentLoggedInUser = null;
    localStorage.removeItem('currentLoggedInForumUser');
    postTitleInput.value = '';
    postContentTextarea.value = '';
    postMessage.textContent = '';
    updateForumUI(); // Cập nhật giao diện sau khi đăng xuất
});

// Chuyển đổi giữa form đăng nhập và đăng ký
showRegisterFormBtn.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
    loginMessage.textContent = ''; // Clear messages when switching forms
    registerMessage.textContent = '';
});

showLoginFormBtn.addEventListener('click', () => {
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    registerMessage.textContent = ''; // Clear messages when switching forms
    loginMessage.textContent = '';
});


// --- Xử lý Bài đăng Diễn đàn ---

// Lưu bài đăng vào localStorage
function saveForumPosts() {
    localStorage.setItem('forumPosts', JSON.stringify(forumPosts));
}

// Render các bài đăng ra giao diện
function renderForumPosts() {
    forumPostsDiv.innerHTML = ''; // Xóa các bài đăng cũ
    if (forumPosts.length === 0) {
        forumPostsDiv.innerHTML = '<p class="no-posts-message">Chưa có bài đăng nào. Hãy là người đầu tiên đăng bài!</p>';
        return;
    }

    // Sắp xếp bài đăng theo thời gian giảm dần (bài mới nhất lên đầu)
    const sortedPosts = [...forumPosts].sort((a, b) => b.timestamp - a.timestamp);

    sortedPosts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('forum-post-item');

        const date = new Date(post.timestamp);
        const formattedDate = date.toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        postElement.innerHTML = `
            <h3>${escapeHTML(post.title)}</h3>
            <p class="post-meta">Đăng bởi: <strong>${escapeHTML(post.author)}</strong> vào lúc ${formattedDate}</p>
            <div class="post-content-display">${escapeHTML(post.content)}</div>
            ${currentLoggedInUser === post.author ? `<button class="delete-post-btn" data-index="${post.timestamp}">Xóa</button>` : ''}
        `;
        forumPostsDiv.appendChild(postElement);
    });

    // Gắn sự kiện cho nút xóa bài đăng
    document.querySelectorAll('.delete-post-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            // Sử dụng timestamp để tìm bài đăng cần xóa
            const timestampToDelete = parseInt(e.target.dataset.index);
            forumPosts = forumPosts.filter(post => post.timestamp !== timestampToDelete);
            saveForumPosts();
            renderForumPosts(); // Render lại danh sách sau khi xóa
        });
    });
}

// Xử lý khi người dùng gửi bài đăng mới
submitPostBtn.addEventListener('click', () => {
    const title = postTitleInput.value.trim();
    const content = postContentTextarea.value.trim();

    if (!currentLoggedInUser) {
        postMessage.textContent = 'Bạn cần đăng nhập để đăng bài.';
        postMessage.style.color = 'red';
        return;
    }

    if (!title || !content) {
        postMessage.textContent = 'Vui lòng nhập đầy đủ tiêu đề và nội dung bài viết.';
        postMessage.style.color = 'red';
        return;
    }

    const newPost = {
        title: title,
        content: content,
        author: currentLoggedInUser,
        timestamp: Date.now() // Thời gian hiện tại để sắp xếp và làm ID duy nhất
    };

    forumPosts.push(newPost);
    saveForumPosts();
    postMessage.textContent = 'Bài viết của bạn đã được đăng!';
    postMessage.style.color = 'green';
    postTitleInput.value = '';
    postContentTextarea.value = '';
    renderForumPosts(); // Cập nhật lại danh sách bài đăng
});


// Hàm thoát HTML để ngăn chặn XSS (Cross-Site Scripting)
function escapeHTML(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}


// --- Khởi tạo khi tải trang ---
document.addEventListener('DOMContentLoaded', () => {
    renderProgrammingLessonsInSidebar();
    showSection(homepageContent); // Mặc định hiển thị trang chủ khi tải trang
    updateForumUI(); // Cập nhật trạng thái UI diễn đàn ngay khi tải trang
});
