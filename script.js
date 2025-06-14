// Các phần tử chính
const siteBrandBtn = document.getElementById('siteBrandBtn');
const openSidebarBtn = document.getElementById('openSidebarBtn');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');
const sidebarMenu = document.getElementById('sidebarMenu');
const overlay = document.getElementById('overlay');
const darkModeBtn = document.getElementById('darkModeBtn'); // Đảm bảo đã lấy được nút này

const homepageContent = document.getElementById('homepageContent');
const calculatorPrimary = document.getElementById('calculatorPrimary');
const calculatorSecondary = document.getElementById('calculatorSecondary');
const programmingContent = document.getElementById('programmingContent');
const forumContent = document.getElementById('forumContent');

const programmingTitle = document.getElementById('programmingTitle');
const programmingDescription = document.getElementById('programmingDescription');

// Các phần tử của Diễn đàn (Đã kiểm tra và khớp với index.html của bạn)
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
const registerConfirmPasswordInput = document.getElementById('registerConfirmPassword');
const registerBtn = document.getElementById('registerBtn');
const registerMessage = document.getElementById('registerMessage');
const showLoginFormBtn = document.getElementById('showLoginForm');

const postContainer = document.getElementById('postContainer');
const loggedInUsernameSpan = document.getElementById('loggedInUsername');
const logoutBtn = document.getElementById('logoutBtn');
const postTitleInput = document.getElementById('postTitle');
const postContentTextarea = document.getElementById('postContent');
const submitPostBtn = document.getElementById('submitPostBtn');
const postMessageDiv = document.getElementById('postMessage');
const forumPostsDiv = document.getElementById('forumPosts');

// Biến toàn cục để lưu người dùng hiện tại
let currentLoggedInUser = null;

// Hàm ẩn tất cả các section và hiển thị section được chọn
function showSection(sectionElement) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
    });
    sectionElement.classList.remove('hidden');

    // Cập nhật trạng thái active cho sidebar items
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === sectionElement.id) {
            item.classList.add('active');
        }
    });

    closeSidebar(); // Đóng sidebar sau khi chọn
}

// Chức năng Sidebar
openSidebarBtn.addEventListener('click', () => {
    sidebarMenu.classList.add('open');
    overlay.classList.add('visible');
});

closeSidebarBtn.addEventListener('click', () => {
    closeSidebar();
});

overlay.addEventListener('click', () => {
    closeSidebar();
});

function closeSidebar() {
    sidebarMenu.classList.remove('open');
    overlay.classList.remove('visible');
}

// Chức năng Trang chủ (nhấp vào logo)
siteBrandBtn.addEventListener('click', () => {
    showSection(homepageContent);
});

// Chức năng Máy tính Cơ bản
const displayPrimary = document.getElementById('displayPrimary');
const keysPrimary = calculatorPrimary.querySelector('.calculator-keys');
let firstValue = '';
let operator = '';
let waitingForSecondValue = false;

keysPrimary.addEventListener('click', e => {
    const { target } = e;
    const { action } = target.dataset;

    if (!target.matches('button')) return;

    if (action === 'clear') {
        displayPrimary.value = '';
        firstValue = '';
        operator = '';
        waitingForSecondValue = false;
        return;
    }

    if (action === 'calculate') {
        if (firstValue === '' || operator === '' || displayPrimary.value === '') return;
        let result = calculate(firstValue, operator, displayPrimary.value);
        displayPrimary.value = result;
        firstValue = result; // Để có thể tiếp tục tính toán với kết quả
        operator = '';
        waitingForSecondValue = true; // Sẵn sàng cho phép toán mới
        return;
    }

    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
        if (firstValue && operator && displayPrimary.value && !waitingForSecondValue) {
            // Nếu đã có phép toán trước đó, tính toán rồi mới lưu operator mới
            const result = calculate(firstValue, operator, displayPrimary.value);
            displayPrimary.value = result;
            firstValue = result;
        } else {
            firstValue = displayPrimary.value;
        }
        operator = action;
        waitingForSecondValue = true;
        return;
    }

    if (action === 'decimal') {
        if (!displayPrimary.value.includes('.')) {
            displayPrimary.value += '.';
        }
        return;
    }

    // Nếu là số
    if (waitingForSecondValue) {
        displayPrimary.value = target.textContent;
        waitingForSecondValue = false;
    } else {
        displayPrimary.value = displayPrimary.value === '0' ? target.textContent : displayPrimary.value + target.textContent;
    }
});

function calculate(n1, operator, n2) {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    if (operator === 'add') return num1 + num2;
    if (operator === 'subtract') return num1 - num2;
    if (operator === 'multiply') return num1 * num2;
    if (operator === 'divide') {
        if (num2 === 0) return 'Error'; // Xử lý chia cho 0
        return num1 / num2;
    }
    return n2; // Trả về số thứ hai nếu không có operator
}

// Chức năng Máy tính Nâng cao (tương tự như máy tính cơ bản nhưng có thêm các phép toán)
const displaySecondary = document.getElementById('displaySecondary');
const keysSecondary = calculatorSecondary.querySelector('.calculator-keys');
let expression = ''; // Sử dụng biểu thức để dễ dàng xử lý các phép toán phức tạp hơn

keysSecondary.addEventListener('click', e => {
    const { target } = e;
    const { action } = target.dataset;
    const keyContent = target.textContent;

    if (!target.matches('button')) return;

    if (action === 'clear') {
        expression = '';
        displaySecondary.value = '';
        return;
    }

    if (action === 'calculate') {
        try {
            // Thay thế các ký hiệu toán học thân thiện với người dùng bằng ký hiệu JavaScript
            let evalExpression = expression.replace(/×/g, '*').replace(/÷/g, '/').replace(/ⁿ/g, '**');

            // Xử lý các hàm toán học nâng cao
            evalExpression = evalExpression.replace(/sin\(([^)]*)\)/g, (match, p1) => Math.sin(eval(p1) * Math.PI / 180)); // Chuyển đổi độ sang radian
            evalExpression = evalExpression.replace(/cos\(([^)]*)\)/g, (match, p1) => Math.cos(eval(p1) * Math.PI / 180));
            evalExpression = evalExpression.replace(/tan\(([^)]*)\)/g, (match, p1) => Math.tan(eval(p1) * Math.PI / 180));
            evalExpression = evalExpression.replace(/√\(([^)]*)\)/g, (match, p1) => Math.sqrt(eval(p1)));
            evalExpression = evalExpression.replace(/log\(([^)]*)\)/g, (match, p1) => Math.log10(eval(p1))); // log cơ số 10

            // Thay thế hằng số
            evalExpression = evalExpression.replace(/π/g, 'Math.PI');
            evalExpression = evalExpression.replace(/e/g, 'Math.E');

            // Đánh giá biểu thức
            const result = eval(evalExpression); // Cẩn thận với eval(), có thể gây ra lỗ hổng bảo mật nếu input không được kiểm soát
            if (isNaN(result) || !isFinite(result)) {
                displaySecondary.value = 'Error';
                expression = ''; // Reset
            } else {
                displaySecondary.value = result;
                expression = result.toString(); // Để có thể tiếp tục tính toán với kết quả
            }
        } catch (error) {
            displaySecondary.value = 'Error';
            expression = ''; // Reset
        }
        return;
    }

    if (action === 'decimal') {
        // Tránh nhiều dấu thập phân liên tiếp hoặc dấu thập phân sau một toán tử
        const lastChar = expression.slice(-1);
        if (!/\d/.test(lastChar) && lastChar !== '.') {
            // Nếu ký tự cuối không phải số và không phải dấu chấm, thêm "0."
            expression += '0.';
        } else if (!expression.split(/[\+\-\*\/]/).pop().includes('.')) {
            // Đảm bảo không có nhiều dấu thập phân trong cùng một số
            expression += keyContent;
        }
        displaySecondary.value = expression;
        return;
    }

    // Xử lý các nút hàm
    if (action === 'sin' || action === 'cos' || action === 'tan' || action === 'sqrt' || action === 'log') {
        expression += `${action}(`;
        displaySecondary.value = expression;
        return;
    }

    // Xử lý hằng số
    if (action === 'pi' || action === 'e') {
        expression += keyContent;
        displaySecondary.value = expression;
        return;
    }

    // Xử lý dấu ngoặc
    if (action === 'parenthesis-open') {
        expression += '(';
        displaySecondary.value = expression;
        return;
    }
    if (action === 'parenthesis-close') {
        expression += ')';
        displaySecondary.value = expression;
        return;
    }

    // Nếu là toán tử
    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide' || action === 'power') {
        const lastChar = expression.slice(-1);
        // Tránh nhiều toán tử liên tiếp, trừ trường hợp dấu trừ là số âm
        if (['+', '-', '×', '÷', 'ⁿ'].includes(lastChar) && keyContent !== '-') {
            expression = expression.slice(0, -1) + keyContent; // Thay thế toán tử cuối cùng
        } else {
            expression += keyContent;
        }
        displaySecondary.value = expression;
        return;
    }

    // Nếu là số
    expression += keyContent;
    displaySecondary.value = expression;
});


// Dữ liệu bài học lập trình (có thể mở rộng)
const programmingLessons = {
    'c': {
        title: 'Lập trình C: Giới thiệu cơ bản',
        description: 'Học những kiến thức cơ bản nhất về ngôn ngữ lập trình C, từ cú pháp đến các khái niệm cơ bản.',
        content: `
            <h3>1. Cấu trúc chương trình C đầu tiên</h3>
            <p>Mọi chương trình C đều bắt đầu với hàm <code>main()</code>.</p>
            <pre><code>#include &lt;stdio.h&gt;

int main() {
    // In ra màn hình dòng chữ "Hello, World!"
    printf("Hello, World!\\n");
    return 0; // Kết thúc chương trình thành công
}</code></pre>
            <h3>2. Biến và kiểu dữ liệu</h3>
            <p>Trong C, bạn phải khai báo kiểu dữ liệu cho biến trước khi sử dụng.</p>
            <pre><code>int age = 30; // Số nguyên
double pi = 3.14159; // Số thực
char initial = 'J'; // Ký tự đơn
float temperature = 25.5f; // Số thực (ít chính xác hơn double)
</code></pre>
            <h3>3. Nhập và xuất dữ liệu</h3>
            <p>Sử dụng <code>printf()</code> để xuất và <code>scanf()</code> để nhập.</p>
            <pre><code>#include &lt;stdio.h&gt;

int main() {
    int number;
    printf("Nhap mot so: ");
    scanf("%d", &number); // %d cho số nguyên
    printf("So ban vua nhap la: %d\\n", number);
    return 0;
}</code></pre>
            <h3>4. Câu lệnh điều kiện (if-else)</h3>
            <pre><code>int score = 85;
if (score >= 70) {
    printf("Dau roi!\\n");
} else {
    printf("Chuc ban may man lan sau!\\n");
}</code></pre>
        `
    },
    'cpp': {
        title: 'Lập trình C++: Cơ bản và Hướng đối tượng',
        description: 'Tìm hiểu về C++, một ngôn ngữ mạnh mẽ hỗ trợ lập trình hướng đối tượng.',
        content: `
            <h3>1. Hello C++</h3>
            <p>C++ sử dụng <code>cout</code> để xuất ra màn hình.</p>
            <pre><code>#include &lt;iostream&gt;

int main() {
    std::cout &lt;&lt; "Hello, C++!" &lt;&lt; std::endl;
    return 0;
}</code></pre>
            <h3>2. Lớp và đối tượng</h3>
            <p>Khái niệm cốt lõi của lập trình hướng đối tượng trong C++.</p>
            <pre><code>#include &lt;iostream&gt;

class Car {
public:
    std::string brand;
    void honk() {
        std::cout &lt;&lt; "Beep beep!" &lt;&lt; std::endl;
    }
};

int main() {
    Car myCar;
    myCar.brand = "Ford";
    std::cout &lt;&lt; myCar.brand &lt;&lt; std::endl;
    myCar.honk();
    return 0;
}</code></pre>
        `
    },
    'java': {
        title: 'Lập trình Java: Nền tảng và JVM',
        description: 'Java là một ngôn ngữ đa nền tảng, được sử dụng rộng rãi trong phát triển ứng dụng doanh nghiệp và Android.',
        content: `
            <h3>1. Chương trình Java đầu tiên</h3>
            <p>Mọi thứ trong Java đều là lớp và đối tượng.</p>
            <pre><code>public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}</code></pre>
            <h3>2. Khai báo biến</h3>
            <pre><code>int count = 100;
String name = "Alice";
boolean isActive = true;
double price = 19.99;</code></pre>
            <h3>3. Vòng lặp For</h3>
            <pre><code>for (int i = 0; i &lt; 5; i++) {
    System.out.println("Loop iteration: " + i);
}</code></pre>
        `
    },
    'python': {
        title: 'Lập trình Python: Đơn giản và mạnh mẽ',
        description: 'Python là ngôn ngữ lập trình dễ học, linh hoạt, được ứng dụng trong nhiều lĩnh vực.',
        content: `
            <h3>1. Hello Python</h3>
            <p>Python nổi tiếng với cú pháp đơn giản.</p>
            <pre><code>print("Hello, Python!")</code></pre>
            <h3>2. Biến</h3>
            <p>Không cần khai báo kiểu dữ liệu cho biến trong Python.</p>
            <pre><code>name = "Bob"
age = 25
is_student = True
price = 99.99</code></pre>
            <h3>3. Cấu trúc điều kiện</h3>
            <pre><code>score = 90
if score >= 80:
    print("Excellent!")
elif score >= 50:
    print("Pass!")
else:
    print("Fail!")</code></pre>
            <h3>4. Vòng lặp For với List</h3>
            <pre><code>fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x)</code></pre>
        `
    },
    'html': {
        title: 'Lập trình HTML: Cấu trúc Web',
        description: 'HTML (HyperText Markup Language) là ngôn ngữ chuẩn để tạo ra các trang web.',
        content: `
            <h3>1. Cấu trúc cơ bản của một trang HTML</h3>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="vi"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Tiêu đề trang&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Chào mừng đến với trang web của tôi&lt;/h1&gt;
    &lt;p&gt;Đây là một đoạn văn bản.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
            <h3>2. Các thẻ HTML phổ biến</h3>
            <ul>
                <li><code>&lt;h1&gt;</code> đến <code>&lt;h6&gt;</code>: Tiêu đề</li>
                <li><code>&lt;p&gt;</code>: Đoạn văn</li>
                <li><code>&lt;a&gt;</code>: Liên kết</li>
                <li><code>&lt;img&gt;</code>: Hình ảnh</li>
                <li><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>: Danh sách</li>
                <li><code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>: Thẻ phân chia nội dung</li>
            </ul>
        `
    },
    'css': {
        title: 'Lập trình CSS: Định kiểu Web',
        description: 'CSS (Cascading Style Sheets) được sử dụng để định dạng và tạo kiểu cho các trang web.',
        content: `
            <h3>1. Cách nhúng CSS vào HTML</h3>
            <p>Có 3 cách chính:</p>
            <ol>
                <li>Inline: Dùng thuộc tính <code>style</code> trực tiếp trên thẻ HTML.</li>
                <li>Internal: Dùng thẻ <code>&lt;style&gt;</code> trong phần <code>&lt;head&gt;</code>.</li>
                <li>External (phổ biến nhất): Liên kết đến một tệp <code>.css</code> bên ngoài.</li>
            </ol>
            <pre><code>&lt;!-- Liên kết đến tệp CSS ngoài --&gt;
&lt;link rel="stylesheet" href="style.css"&gt;</code></pre>
            <h3>2. Các Selector cơ bản</h3>
            <ul>
                <li>Selector thẻ: <code>p { color: blue; }</code></li>
                <li>Selector ID: <code>#myId { font-size: 20px; }</code></li>
                <li>Selector Class: <code>.myClass { background-color: yellow; }</code></li>
            </ul>
            <h3>3. Thuộc tính CSS phổ biến</h3>
            <pre><code>body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

h1 {
    color: #333;
    text-align: center;
}

.container {
    width: 80%;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
}</code></pre>
        `
    },
    'javascript': {
        title: 'Lập trình JavaScript: Tương tác Web',
        description: 'JavaScript là ngôn ngữ lập trình cho phép bạn tạo ra các trang web tương tác.',
        content: `
            <h3>1. Nhúng JavaScript vào HTML</h3>
            <p>Thường đặt trước thẻ đóng <code>&lt;/body&gt;</code> để đảm bảo HTML đã được tải.</p>
            <pre><code>&lt;script src="script.js"&gt;&lt;/script&gt;
&lt;script&gt;
    // alert("Hello from inline JavaScript!");
&lt;/script&gt;</code></pre>
            <h3>2. Biến và hằng số</h3>
            <pre><code>let message = "Hello, JavaScript!"; // Có thể gán lại
const PI = 3.14159; // Không thể gán lại

var oldVar = "Cũ rồi"; // Tránh dùng var trong code mới
</code></pre>
            <h3>3. Hàm</h3>
            <pre><code>function greet(name) {
    return "Xin chào, " + name + "!";
}

let greeting = greet("World");
console.log(greeting); // In ra console của trình duyệt</code></pre>
            <h3>4. Xử lý sự kiện (Event Handling)</h3>
            <pre><code>const myButton = document.getElementById('myButton');
myButton.addEventListener('click', () => {
    alert('Nút đã được bấm!');
});</code></pre>
        `
    }
};

function showProgrammingLesson(lang) {
    const lesson = programmingLessons[lang];
    if (lesson) {
        programmingTitle.textContent = lesson.title;
        programmingDescription.textContent = lesson.description;
        document.getElementById('lessonContent').innerHTML = lesson.content;
    } else {
        programmingTitle.textContent = 'Bài học không tìm thấy';
        programmingDescription.textContent = 'Vui lòng chọn một ngôn ngữ khác.';
        document.getElementById('lessonContent').innerHTML = '<p class="no-lesson-selected">Nội dung bài học không có sẵn.</p>';
    }
    showSection(programmingContent); // Chuyển đến phần lập trình
}

// Gắn sự kiện cho các mục trong sidebar menu (đảm bảo không bị trùng lặp)
document.querySelectorAll('.sidebar-item').forEach(item => {
    if (!item.hasAttribute('data-listener-added')) { // Tránh gắn nhiều lần
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = item.getAttribute('data-section');
            const lang = item.getAttribute('data-lang'); // Lấy lang nếu có

            if (lang) {
                showProgrammingLesson(lang);
            } else if (sectionId) {
                showSection(document.getElementById(sectionId));
            }
        });
        item.setAttribute('data-listener-added', 'true'); // Đánh dấu đã gắn listener
    }
});


// --- Chức năng Diễn đàn ---
// Hàm lưu người dùng vào Local Storage
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Hàm lấy người dùng từ Local Storage
function getUsers() {
    const usersJson = localStorage.getItem('users');
    return usersJson ? JSON.parse(usersJson) : [];
}

// Hàm lưu bài viết vào Local Storage
function savePosts(posts) {
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Hàm lấy bài viết từ Local Storage
function getPosts() {
    const postsJson = localStorage.getItem('posts');
    return postsJson ? JSON.parse(postsJson) : [];
}

// Hiển thị form đăng ký
showRegisterFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
    loginMessage.textContent = ''; // Xóa thông báo cũ
    registerMessage.textContent = ''; // Xóa thông báo cũ
});

// Hiển thị form đăng nhập
showLoginFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    loginMessage.textContent = ''; // Xóa thông báo cũ
    registerMessage.textContent = ''; // Xóa thông báo cũ
});

// Xử lý đăng ký
registerBtn.addEventListener('click', () => {
    const username = registerUsernameInput.value.trim();
    const password = registerPasswordInput.value.trim();
    const confirmPassword = registerConfirmPasswordInput.value.trim();

    if (!username || !password || !confirmPassword) {
        registerMessage.textContent = 'Vui lòng điền đầy đủ các trường.';
        registerMessage.className = 'auth-message';
        return;
    }

    if (password !== confirmPassword) {
        registerMessage.textContent = 'Mật khẩu xác nhận không khớp.';
        registerMessage.className = 'auth-message';
        return;
    }

    let users = getUsers();
    if (users.some(user => user.username === username)) {
        registerMessage.textContent = 'Tên đăng nhập đã tồn tại.';
        registerMessage.className = 'auth-message';
        return;
    }

    users.push({ username, password });
    saveUsers(users);
    registerMessage.textContent = 'Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.';
    registerMessage.className = 'auth-message success';

    // Xóa form
    registerUsernameInput.value = '';
    registerPasswordInput.value = '';
    registerConfirmPasswordInput.value = '';

    // Chuyển về form đăng nhập sau 2 giây
    setTimeout(() => {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        registerMessage.textContent = '';
    }, 2000);
});

// Xử lý đăng nhập
loginBtn.addEventListener('click', () => {
    const username = loginUsernameInput.value.trim();
    const password = loginPasswordInput.value.trim();

    let users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        currentLoggedInUser = user;
        localStorage.setItem('currentLoggedInUser', JSON.stringify(user)); // Lưu trạng thái đăng nhập
        loginMessage.textContent = 'Đăng nhập thành công!';
        loginMessage.className = 'auth-message success';
        setTimeout(() => {
            updateForumUI();
        }, 500);
    } else {
        loginMessage.textContent = 'Tên đăng nhập hoặc mật khẩu không đúng.';
        loginMessage.className = 'auth-message';
    }
});

// Xử lý đăng xuất
logoutBtn.addEventListener('click', () => {
    currentLoggedInUser = null;
    localStorage.removeItem('currentLoggedInUser'); // Xóa trạng thái đăng nhập
    updateForumUI();
    // Chuyển về form đăng nhập
    authContainer.classList.remove('hidden');
    postContainer.classList.add('hidden');
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden'); // Đảm bảo register form ẩn
    loginUsernameInput.value = '';
    loginPasswordInput.value = '';
    loginMessage.textContent = '';
});

// Hiển thị các bài viết
function renderPosts() {
    let posts = getPosts();
    forumPostsDiv.innerHTML = ''; // Xóa các bài viết cũ

    if (posts.length === 0) {
        forumPostsDiv.innerHTML = '<p class="no-posts">Chưa có bài viết nào. Hãy là người đầu tiên đăng bài!</p>';
        return;
    }

    posts.sort((a, b) => b.timestamp - a.timestamp); // Sắp xếp bài mới nhất lên trước

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h4>${escapeHTML(post.title)}</h4>
            <p>${escapeHTML(post.content).replace(/\n/g, '<br>')}</p>
            <p class="post-meta">Đăng bởi: ${escapeHTML(post.author)} vào lúc: ${new Date(post.timestamp).toLocaleString()}</p>
        `;
        forumPostsDiv.appendChild(postElement);
    });
}

// Hàm để ngăn chặn XSS
function escapeHTML(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

// Xử lý đăng bài mới
submitPostBtn.addEventListener('click', () => {
    const title = postTitleInput.value.trim();
    const content = postContentTextarea.value.trim();

    if (!title || !content) {
        postMessageDiv.textContent = 'Vui lòng nhập đầy đủ tiêu đề và nội dung bài viết.';
        postMessageDiv.className = 'auth-message';
        return;
    }

    if (!currentLoggedInUser) {
        postMessageDiv.textContent = 'Bạn cần đăng nhập để đăng bài.';
        postMessageDiv.className = 'auth-message';
        return;
    }

    let posts = getPosts();
    const newPost = {
        title: title,
        content: content,
        author: currentLoggedInUser.username,
        timestamp: Date.now()
    };
    posts.push(newPost);
    savePosts(posts);
    renderPosts(); // Cập nhật danh sách bài viết

    postMessageDiv.textContent = 'Bài viết của bạn đã được đăng!';
    postMessageDiv.className = 'auth-message success';

    // Xóa form
    postTitleInput.value = '';
    postContentTextarea.value = '';

    setTimeout(() => {
        postMessageDiv.textContent = '';
    }, 3000);
});

// Cập nhật giao diện diễn đàn dựa trên trạng thái đăng nhập
function updateForumUI() {
    if (currentLoggedInUser) {
        authContainer.classList.add('hidden');
        postContainer.classList.remove('hidden');
        loggedInUsernameSpan.textContent = currentLoggedInUser.username;
        renderPosts(); // Tải các bài viết khi người dùng đăng nhập
    } else {
        authContainer.classList.remove('hidden');
        postContainer.classList.add('hidden');
        loginForm.classList.remove('hidden'); // Hiển thị form đăng nhập
        registerForm.classList.add('hidden'); // Ẩn form đăng ký
        loginMessage.textContent = '';
        registerMessage.textContent = '';
    }
}


// --- Chức năng Chế độ Sáng/Tối ---
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    // Lưu trạng thái chế độ tối vào Local Storage
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Kiểm tra trạng thái chế độ tối đã lưu khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark');
    }

    // Tải trạng thái đăng nhập từ Local Storage
    const savedUser = localStorage.getItem('currentLoggedInUser');
    if (savedUser) {
        currentLoggedInUser = JSON.parse(savedUser);
    }
    updateForumUI(); // Cập nhật giao diện dựa trên trạng thái đăng nhập

    // Mặc định hiển thị trang chủ hoặc forum tùy theo trạng thái đăng nhập
    if (currentLoggedInUser) {
        showSection(forumContent); // Nếu đã đăng nhập, chuyển thẳng đến forum
    } else {
        showSection(homepageContent); // Mặc định hiển thị trang chủ
    }
});


// Gán hàm showSection ra global scope nếu cần gọi từ HTML onclick attribute
window.showSection = showSection;
// Gán hàm showProgrammingLesson ra global scope
window.showProgrammingLesson = showProgrammingLesson;