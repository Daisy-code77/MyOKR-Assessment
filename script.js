// 🔐 LOGIN FUNCTIONALITY FOR index.html
if (window.location.pathname.includes("index.html")) {
    document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
  
      // Dummy login check
      if (username === "admin" && password === "admin") {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "dashboard.html";
      } else {
        document.getElementById("errorMsg").innerText = "Invalid username or password";
      }
    });
  }
document.getElementById("okrForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const objective = document.getElementById("objective").value.trim();
    const keyResult = document.getElementById("keyResult").value.trim();
    const progress = parseInt(document.getElementById("progress").value);
  
    const newOKR = { objective, keyResult, progress };
  
    let okrs = JSON.parse(localStorage.getItem("okrs")) || [];
    okrs.push(newOKR);
    localStorage.setItem("okrs", JSON.stringify(okrs));
  
    document.getElementById("okrForm").reset();
  
    loadOKRs(); // ✅ THIS LINE is important
  });