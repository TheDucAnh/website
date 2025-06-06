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
const forumContent = document.getElementById('forumContent'); // Thêm diễn đàn

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

// Dữ liệu bài học lập trình
const programmingLessons = {
    "Python": `# Python cơ bản

# Bình luận (Comments) - Bắt đầu bằng #
print("Hello, World!") # In ra màn hình

# Biến (Variables) và Gán giá trị
age = 30
name = "ducanh_abc"

# Hằng số (Constants) - Quy ước viết HOA
PI = 3.14159

# Kiểu dữ liệu cơ bản
integer_num = 10        # Số nguyên (int)
float_num = 20.5        # Số thực (float)
text_str = "Hello"      # Chuỗi (str)
is_active = True        # Boolean (bool)

# Phép toán số học
sum_val = 5 + 3     # Cộng
diff_val = 10 - 4   # Trừ
prod_val = 6 * 7    # Nhân
quot_val = 10 / 2   # Chia (luôn trả về float)
int_div = 10 // 3   # Chia lấy phần nguyên
mod_val = 10 % 3    # Chia lấy phần dư
power_val = 2 ** 3  # Lũy thừa (2 mũ 3)

# Câu lệnh điều kiện (Conditional Statements)
if age >= 18:
    print("Bạn đã đủ tuổi.")
else:
    print("Bạn chưa đủ tuổi.")

# In các giá trị
print(f"Tên: {name}, Tuổi: {age}")
print(f"PI: {PI}")
print(f"Tổng: {sum_val}, Hiệu: {diff_val}, Tích: {prod_val}, Thương: {quot_val}")
print(f"Chia nguyên: {int_div}, Chia dư: {mod_val}, Lũy thừa: {power_val})`,

    "JavaScript": `// JavaScript cơ bản

// Bình luận (Comments) - Dùng // cho 1 dòng, /* */ cho nhiều dòng
console.log("Hello, World!"); /* In ra màn hình console */

// Biến (Variables) và Gán giá trị
let age = 25; // Sử dụng let hoặc const
const name = "ChatGPT"; // const cho hằng số hoặc biến không thay đổi

// Hằng số (Constants) - Khai báo với const, quy ước viết HOA
const PI = 3.14159;

// Kiểu dữ liệu cơ bản
let integerNum = 10;    // Number (số nguyên)
let floatNum = 20.5;    // Number (số thực)
let textStr = "Hi";     // String (chuỗi)
let isActive = true;    // Boolean (true/false)
let emptyVal = null;    // Null
let undefinedVal;       // Undefined

// Phép toán số học
let sumVal = 5 + 3;     // Cộng
let diffVal = 10 - 4;   // Trừ
let prodVal = 6 * 7;    // Nhân
let quotVal = 10 / 2;   // Chia
let modVal = 10 % 3;    // Chia lấy phần dư
let powerVal = 2 ** 3;  // Lũy thừa (ES6+)

// Câu lệnh điều kiện (Conditional Statements)
if (age >= 18) {
    console.log("Bạn đã đủ tuổi.");
} else {
    console.log("Bạn chưa đủ tuổi.");
}

// In các giá trị
console.log(\`Tên: \${name}, Tuổi: \${age}\`);
console.log(\`PI: \${PI}\`);
console.log(\`Tổng: \${sumVal}, Hiệu: \${diffVal}, Tích: \${prodVal}, Thương: \${quotVal}\`);
console.log(\`Chia dư: \${modVal}, Lũy thừa: \${powerVal}\`);`,

    "C++": `// C++ cơ bản

// Bình luận (Comments) - Dùng // cho 1 dòng, /* */ cho nhiều dòng
#include <iostream> // Thư viện nhập xuất

int main() {
    // In ra màn hình
    std::cout << "Hello, World!" << std::endl;

    // Biến (Variables) và Gán giá trị
    int age = 30; // Khai báo kiểu dữ liệu và tên biến
    std::string name = "John Doe"; // Chuỗi cần #include <string>

    // Hằng số (Constants) - Giá trị không đổi
    const double PI = 3.14159; // const hoặc #define

    // Kiểu dữ liệu cơ bản
    int integerNum = 10;        // Số nguyên
    double floatNum = 20.5;     // Số thực (kép)
    char singleChar = 'A';      // Ký tự
    bool isActive = true;       // Boolean (true/false)

    // Phép toán số học
    int sumVal = 5 + 3;     // Cộng
    int diffVal = 10 - 4;   // Trừ
    int prodVal = 6 * 7;    // Nhân
    double quotVal = 10.0 / 2.0; // Chia (cần ít nhất 1 số thực)
    int intDiv = 10 / 3;    // Chia lấy phần nguyên
    int modVal = 10 % 3;    // Chia lấy phần dư

    // Câu lệnh điều kiện (Conditional Statements)
    if (age >= 18) {
        std::cout << "Bạn đã đủ tuổi." << std::endl;
    } else {
        std::cout << "Bạn chưa đủ tuổi." << std::endl;
    }

    // In các giá trị
    std::cout << "Tên: " << name << ", Tuổi: " << age << ", PI: " << PI << std::endl;
    std::cout << "Tổng: " << sumVal << ", Hiệu: " << diffVal << ", Tích: " << prodVal << ", Thương: " << quotVal << std::endl;
    std::cout << "Chia nguyên: " << intDiv << ", Chia dư: " << modVal << std::endl;

    return 0; // Kết thúc chương trình
}`,

    "Java": `// Java cơ bản

// Bình luận (Comments) - Dùng // cho 1 dòng, /* */ cho nhiều dòng
public class Main {
    public static void main(String[] args) {
        // In ra màn hình
        System.out.println("Hello, World!");

        // Biến (Variables) và Gán giá trị
        int age = 28; // Khai báo kiểu dữ liệu và tên biến
        String name = "JavaUser"; // Chuỗi là một đối tượng

        // Hằng số (Constants) - Dùng final
        final double PI = 3.14159;

        // Kiểu dữ liệu cơ bản
        int integerNum = 10;            // Số nguyên
        double floatNum = 20.5;         // Số thực (double)
        char singleChar = 'B';          // Ký tự
        boolean isActive = false;       // Boolean (true/false)

        // Phép toán số học
        int sumVal = 5 + 3;     // Cộng
        int diffVal = 10 - 4;   // Trừ
        int prodVal = 6 * 7;    // Nhân
        double quotVal = (double)10 / 3; // Chia (cần ép kiểu để lấy số thực)
        int intDiv = 10 / 3;    // Chia lấy phần nguyên
        int modVal = 10 % 3;    // Chia lấy phần dư

        // Câu lệnh điều kiện (Conditional Statements)
        if (age >= 18) {
            System.out.println("Bạn đã đủ tuổi.");
        } else {
            System.out.println("Bạn chưa đủ tuổi.");
        }

        // In các giá trị
        System.out.println("Tên: " + name + ", Tuổi: " + age);
        System.out.println("PI: " + PI);
        System.out.println("Tổng: " + sumVal + ", Hiệu: " + diffVal + ", Tích: " + prodVal + ", Thương: " + quotVal);
        System.out.println("Chia nguyên: " + intDiv + ", Chia dư: " + modVal);
    }
}`
};

// --- Quản lý hiển thị các phần ---

// Ẩn tất cả các phần nội dung
function hideAllSections() {
    homepageContent.classList.add('hidden');
    calculatorPrimary.classList.add('hidden');
    calculatorSecondary.classList.add('hidden');
    programmingContent.classList.add('hidden');
    forumContent.classList.add('hidden'); // Ẩn diễn đàn
}

// Hiển thị một phần nội dung cụ thể
function showSection(sectionElement) {
    hideAllSections();
    sectionElement.classList.remove('hidden');
    closeSidebar(); // Đóng sidebar khi chọn một mục

    if (sectionElement === homepageContent) {
        siteBrandBtn.classList.add('active');
    } else {
        siteBrandBtn.classList.remove('active');
    }

    if (sectionElement === forumContent) {
        updateForumUI(); // Cập nhật giao diện diễn đàn khi hiển thị
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
        // Sử dụng textContent.trim() để so sánh chính xác hơn và bỏ qua khoảng trắng thừa
        if (li.classList.contains('menu-category') && li.textContent.trim() === 'Lập trình') {
            programmingCategoryLi = li;
        }
    });

    // Nếu tìm thấy category "Lập trình", chèn các bài học vào sau nó
    if (programmingCategoryLi) {
        let currentElement = programmingCategoryLi; // Bắt đầu từ category "Lập trình"
        Object.keys(programmingLessons).forEach(lang => {
            let li = document.createElement('li');
            li.setAttribute('data-category', 'programming-lesson'); // Đánh dấu là item của lập trình
            let a = document.createElement('a');
            a.href = "#";
            a.className = 'sidebar-item';
            a.setAttribute('data-section', 'programmingContent');
            a.setAttribute('data-lang', lang);
            a.textContent = lang;

            a.addEventListener('click', (e) => {
                e.preventDefault();
                programmingTitle.textContent = `Bài học lập trình: ${lang}`;
                programmingDescription.textContent = programmingLessons[lang];
                showSection(programmingContent);
            });
            li.appendChild(a);
            // Chèn item mới ngay sau currentElement
            currentElement.parentNode.insertBefore(li, currentElement.nextElementSibling);
            currentElement = li; // Cập nhật currentElement để chèn item tiếp theo sau nó
        });
    } else {
        // Fallback: nếu không tìm thấy category "Lập trình", thêm vào cuối
        Object.keys(programmingLessons).forEach(lang => {
            let li = document.createElement('li');
            li.setAttribute('data-category', 'programming-lesson');
            let a = document.createElement('a');
            a.href = "#";
            a.className = 'sidebar-item';
            a.setAttribute('data-section', 'programmingContent');
            a.setAttribute('data-lang', lang);
            a.textContent = lang;

            a.addEventListener('click', (e) => {
                e.preventDefault();
                programmingTitle.textContent = `Bài học lập trình: ${lang}`;
                programmingDescription.textContent = programmingLessons[lang];
                showSection(programmingContent);
            });
            li.appendChild(a);
            ul.appendChild(li);
        });
    }
}


// Gắn sự kiện cho các mục trong sidebar menu
document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = item.getAttribute('data-section');
        if (sectionId) {
            showSection(document.getElementById(sectionId));
        }
    });
});


// --- Xử lý Nút Site Brand (Trang Chủ) ---
siteBrandBtn.addEventListener('click', () => {
    showSection(homepageContent);
    closeSidebar();
});


// --- Chức năng Tính toán An toàn hơn ---

function safeCalculate(expression, allowAdvanced = false) {
    expression = expression.replace(/\s+/g, '');

    if (allowAdvanced) {
        expression = expression.replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)');
        expression = expression.replace(/(\d+(\.\d+)?)\^(\d+(\.\d+)?)/g, 'Math.pow($1,$3)');
    }

    const validCharsRegex = allowAdvanced ? /^[0-9+\-*/().,MatH]*$/i : /^[0-9+\-*/().]*$/;
    if (!validCharsRegex.test(expression)) {
        throw new Error('Biểu thức chứa ký tự không hợp lệ.');
    }

    try {
        const calculateFunction = new Function('return ' + expression);
        return calculateFunction();
    } catch (e) {
        throw new Error('Biểu thức không hợp lệ hoặc lỗi cú pháp.');
    }
}

document.getElementById('calcBtnPrimary').addEventListener('click', () => {
    const exp = document.getElementById('expressionPrimary').value;
    try {
        const res = safeCalculate(exp, false);
        document.getElementById('resultPrimary').textContent = 'Kết quả: ' + res;
    } catch (e) {
        document.getElementById('resultPrimary').textContent = 'Lỗi: ' + e.message;
    }
});

document.getElementById('calcBtnSecondary').addEventListener('click', () => {
    const exp = document.getElementById('expressionSecondary').value;
    try {
        const res = safeCalculate(exp, true);
        document.getElementById('resultSecondary').textContent = 'Kết quả: ' + res;
    } catch (e) {
        document.getElementById('resultSecondary').textContent = 'Lỗi: ' + e.message;
    }
});

// --- Nút bật tắt sáng tối ---

function loadDarkModeState() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
        document.body.classList.add('dark');
        darkModeBtn.textContent = '☀️';
    } else {
        document.body.classList.remove('dark');
        darkModeBtn.textContent = '🌙';
    }
}

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    if (isDark) {
        darkModeBtn.textContent = '☀️';
    } else {
        darkModeBtn.textContent = '🌙';
    }
    localStorage.setItem('darkMode', isDark);
});

// --- Forum Logic ---

function saveAccounts() {
    localStorage.setItem('forumAccounts', JSON.stringify(accounts));
}

function savePosts() {
    localStorage.setItem('forumPosts', JSON.stringify(forumPosts));
}

function displayMessage(element, message, isSuccess = false) {
    element.textContent = message;
    element.classList.remove('success');
    if (isSuccess) {
        element.classList.add('success');
    }
}

function clearAuthMessages() {
    displayMessage(loginMessage, '');
    displayMessage(registerMessage, '');
}

function updateForumUI() {
    clearAuthMessages();
    if (currentLoggedInUser) {
        authContainer.classList.add('hidden');
        postContainer.classList.remove('hidden');
        loggedInUsernameSpan.textContent = currentLoggedInUser;
        renderForumPosts();
    } else {
        authContainer.classList.remove('hidden');
        postContainer.classList.add('hidden');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    }
}

// Chuyển đổi giữa form đăng nhập và đăng ký
showRegisterFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
    clearAuthMessages();
});

showLoginFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    clearAuthMessages();
});

// Đăng ký tài khoản
registerBtn.addEventListener('click', () => {
    const username = registerUsernameInput.value.trim();
    const password = registerPasswordInput.value.trim();

    if (!username || !password) {
        displayMessage(registerMessage, 'Tên tài khoản và mật khẩu không được để trống.');
        return;
    }
    if (accounts[username]) {
        displayMessage(registerMessage, 'Tên tài khoản đã tồn tại.');
        return;
    }

    accounts[username] = password; // Lưu mật khẩu dưới dạng plaintext (KHÔNG AN TOÀN TRONG THỰC TẾ)
    saveAccounts();
    displayMessage(registerMessage, 'Đăng ký thành công! Bạn có thể đăng nhập.', true);
    registerUsernameInput.value = '';
    registerPasswordInput.value = '';
    setTimeout(() => {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        clearAuthMessages();
    }, 1500);
});

// Đăng nhập
loginBtn.addEventListener('click', () => {
    const username = loginUsernameInput.value.trim();
    const password = loginPasswordInput.value.trim();

    if (!username || !password) {
        displayMessage(loginMessage, 'Tên tài khoản và mật khẩu không được để trống.');
        return;
    }
    if (!accounts[username] || accounts[username] !== password) {
        displayMessage(loginMessage, 'Tên tài khoản hoặc mật khẩu không đúng.');
        return;
    }

    currentLoggedInUser = username;
    localStorage.setItem('currentLoggedInForumUser', username);
    updateForumUI();
    loginUsernameInput.value = '';
    loginPasswordInput.value = '';
});

// Đăng xuất
logoutBtn.addEventListener('click', () => {
    currentLoggedInUser = null;
    localStorage.removeItem('currentLoggedInForumUser');
    updateForumUI();
    displayMessage(postMessage, 'Đã đăng xuất.');
    // Xóa nội dung bài viết hiện tại trong form
    postTitleInput.value = '';
    postContentTextarea.value = '';
});

// Định dạng thời gian
function formatDateTime(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

// Hiển thị các bài viết
function renderForumPosts() {
    forumPostsDiv.innerHTML = '';
    if (forumPosts.length === 0) {
        forumPostsDiv.innerHTML = '<p class="no-posts">Chưa có bài viết nào. Hãy là người đầu tiên đăng bài!</p>';
        return;
    }

    // Sắp xếp bài viết mới nhất lên đầu
    const sortedPosts = [...forumPosts].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    sortedPosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'forum-post';
        postDiv.innerHTML = `
            <h4>${post.title}</h4>
            <p>${post.content}</p>
            <div class="post-meta">
                Đăng bởi: <strong>${post.author}</strong> vào lúc ${formatDateTime(new Date(post.timestamp))}
            </div>
        `;
        forumPostsDiv.appendChild(postDiv);
    });
}

// Đăng bài viết mới
submitPostBtn.addEventListener('click', () => {
    const title = postTitleInput.value.trim();
    const content = postContentTextarea.value.trim();

    if (!title || !content) {
        displayMessage(postMessage, 'Tiêu đề và nội dung bài viết không được để trống.');
        return;
    }

    const newPost = {
        title: title,
        content: content,
        author: currentLoggedInUser,
        timestamp: new Date().toISOString() // Lưu thời gian theo chuẩn ISO 8601
    };

    forumPosts.push(newPost);
    savePosts();
    renderForumPosts();
    displayMessage(postMessage, 'Bài viết của bạn đã được đăng!', true);
    postTitleInput.value = '';
    postContentTextarea.value = '';
});


// --- Khởi tạo trạng thái ban đầu ---
loadDarkModeState();
renderProgrammingLessonsInSidebar();
showSection(homepageContent); // Mặc định hiển thị trang chủ khi tải trang
// updateForumUI() sẽ được gọi khi chuyển đến section forumContent