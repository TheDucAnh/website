// Các phần tử chính
const menuBtn = document.getElementById('menuBtn');
const leftMenuBtn = document.getElementById('leftMenuBtn');
const darkModeBtn = document.getElementById('darkModeBtn');

const calculatorPrimary = document.getElementById('calculatorPrimary');
const calculatorSecondary = document.getElementById('calculatorSecondary');
const programmingContent = document.getElementById('programmingContent');

const progDropdown = document.getElementById('progDropdown');

const programmingTitle = document.getElementById('programmingTitle');
const programmingDescription = document.getElementById('programmingDescription');

// Dữ liệu bài học lập trình
const programmingLessons = {
  "Python": `# Python cơ bản
print("Hello, World!")

# Biến và kiểu dữ liệu
x = 5
y = "ducanh_abc"
print(x, y)`,
  "JavaScript": `// JavaScript cơ bản
console.log("Hello, World!");

// Biến và kiểu dữ liệu
let x = 5;
let y = "ChatGPT";
console.log(x, y);`,
  "C++": `// C++ cơ bản
#include <iostream>
using namespace std;

int main() {
  cout << "Hello, World!";
  return 0;
}`,
  "Java": `// Java cơ bản
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`
};

// Hiện phần Tiểu học
function showCalculatorPrimary() {
  calculatorPrimary.classList.remove('hidden');
  calculatorSecondary.classList.add('hidden');
  programmingContent.classList.add('hidden');
  menuBtn.textContent = 'Tiểu học ▼';
  leftMenuBtn.textContent = 'Lập trình ▼';
  hideProgDropdown();
}

// Hiện phần Cấp 2
function showCalculatorSecondary() {
  calculatorPrimary.classList.add('hidden');
  calculatorSecondary.classList.remove('hidden');
  programmingContent.classList.add('hidden');
  menuBtn.textContent = 'Cấp 2 ▼';
  leftMenuBtn.textContent = 'Lập trình ▼';
  hideProgDropdown();
}

// Hiện phần Lập trình
function showProgramming() {
  calculatorPrimary.classList.add('hidden');
  calculatorSecondary.classList.add('hidden');
  programmingContent.classList.remove('hidden');
  menuBtn.textContent = 'Tiểu học ▼';
  leftMenuBtn.textContent = 'Lập trình ▼';
  hideProgDropdown();
}

// Hiện dropdown lập trình
function showProgDropdown() {
  progDropdown.classList.remove('hidden');
  progDropdown.style.opacity = '1';
}

// Ẩn dropdown lập trình
function hideProgDropdown() {
  progDropdown.classList.add('hidden');
  progDropdown.style.opacity = '0';
}

// Xử lý click menu bên trái (Tiểu học / Cấp 2)
menuBtn.addEventListener('click', () => {
  if (menuBtn.textContent.startsWith('Tiểu học')) {
    showCalculatorSecondary();
  } else {
    showCalculatorPrimary();
  }
});

// Xử lý click menu bên phải (Lập trình)
leftMenuBtn.addEventListener('click', () => {
  if (!progDropdown.classList.contains('hidden')) {
    hideProgDropdown();
  } else {
    showProgDropdown();
  }
});

// Tạo danh sách ngôn ngữ lập trình trong dropdown
function renderProgDropdown() {
  progDropdown.innerHTML = '';
  Object.keys(programmingLessons).forEach(lang => {
    const item = document.createElement('div');
    item.className = 'dropdown-item';
    item.textContent = lang;
    item.addEventListener('click', () => {
      leftMenuBtn.textContent = lang + ' ▼';
      programmingTitle.textContent = `Bài học lập trình: ${lang}`;
      programmingDescription.textContent = programmingLessons[lang];
      showProgramming();
      hideProgDropdown();
    });
    progDropdown.appendChild(item);
  });
}
renderProgDropdown();

// Tính toán biểu thức (Tiểu học)
document.getElementById('calcBtnPrimary').addEventListener('click', () => {
  const exp = document.getElementById('expressionPrimary').value;
  try {
    // Chỉ cho phép phép tính cơ bản + - * /
    if (/[^-()\d/*+.]/.test(exp)) {
      throw new Error('Biểu thức chỉ chứa số và phép toán + - * /');
    }
    const res = eval(exp);
    document.getElementById('resultPrimary').textContent = 'Kết quả: ' + res;
  } catch (e) {
    document.getElementById('resultPrimary').textContent = 'Lỗi biểu thức!';
  }
});

// Tính toán biểu thức (Cấp 2)
document.getElementById('calcBtnSecondary').addEventListener('click', () => {
  let exp = document.getElementById('expressionSecondary').value;

  // Xử lý toán tử ^ thành Math.pow
  exp = exp.replace(/\^/g, '**');

  // Xử lý sqrt(x) thành Math.sqrt(x)
  exp = exp.replace(/sqrt\(/g, 'Math.sqrt(');

  try {
    // Chỉ cho phép ký tự hợp lệ (số, toán tử, Math)
    if (/[^-()\d/*+.Mathpowertsrq]/i.test(exp)) {
      throw new Error('Biểu thức không hợp lệ');
    }
    const res = eval(exp);
    document.getElementById('resultSecondary').textContent = 'Kết quả: ' + res;
  } catch (e) {
    document.getElementById('resultSecondary').textContent = 'Lỗi biểu thức!';
  }
});

// Nút bật tắt sáng tối
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    darkModeBtn.textContent = '☀️';
  } else {
    darkModeBtn.textContent = '🌙';
  }
});

// Ẩn dropdown khi click ngoài
document.addEventListener('click', (e) => {
  if (!leftMenuBtn.contains(e.target) && !progDropdown.contains(e.target)) {
    hideProgDropdown();
  }
});
