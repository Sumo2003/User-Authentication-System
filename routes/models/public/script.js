function showAlert(msg) {
  alert(msg);
}

// REGISTER
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    showAlert(data.message || "Registered");
    if (res.ok) window.location.href = "index.html";
  });
}

// LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    showAlert(data.message);
    if (res.ok && data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "dashboard.html";
    }
  });
}

// PROFILE PAGE: fetch + update + change password
if (window.location.pathname.endsWith("/profile") || window.location.pathname.endsWith("/profile.html")) {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Please login first");
    window.location.href = "index.html";
  } else {
    // Fill form values
    fetch("/api/auth/me", { headers: { Authorization: "Bearer " + token } })
      .then(r => r.json())
      .then(user => {
        document.getElementById("profileName").value = user.name || "";
        document.getElementById("profileEmail").value = user.email || "";
      })
      .catch(() => {
        localStorage.removeItem("token");
        window.location.href = "index.html";
      });
  }

  // Update profile
  const profileForm = document.getElementById("profileForm");
  if (profileForm) {
    profileForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("profileName").value.trim();
      const email = document.getElementById("profileEmail").value.trim();
      const res = await fetch("/api/auth/me", {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      showAlert(data.message);
      if (res.ok) location.reload();
    });
  }

  // Change password
  const passForm = document.getElementById("changePassForm");
  if (passForm) {
    passForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const oldPassword = document.getElementById("oldPassword").value;
      const newPassword = document.getElementById("newPassword").value;
      const res = await fetch("/api/auth/change-password", {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
        body: JSON.stringify({ oldPassword, newPassword }),
      });
      const data = await res.json();
      showAlert(data.message);
      if (res.ok) {
        localStorage.removeItem("token");
        window.location.href = "index.html";
      }
    });
  }
}

// Logout button (works on dashboard/profile)
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("token");
    alert("Logged out");
    window.location.href = "index.html";
  });
}  