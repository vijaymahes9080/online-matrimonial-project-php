// Mock Database for online-matrimonial-project-php (static deployment on GitHub Pages)

const DEFAULT_PROFILES = [
  {
    id: 6,
    cust_id: 6,
    firstname: "Vikram",
    lastname: "Sen",
    email: "vikram@example.com",
    age: "28",
    height: "175",
    sex: "Male",
    religion: "Hindu",
    caste: "General",
    subcaste: "Sub-caste A",
    district: "New Delhi",
    state: "Delhi",
    country: "India",
    maritalstatus: "Single",
    profilecreatedby: "Self",
    education: "B.Tech",
    education_sub: "Computer Science",
    occupation: "Software Engineer",
    occupation_descr: "Senior developer at tech company",
    annual_income: "1500000",
    fathers_occupation: "Retired Officer",
    mothers_occupation: "Homemaker",
    no_bro: 1,
    no_sis: 0,
    aboutme: "I am a warm, friendly and down-to-earth person. I value family traditions and am looking for a partner who is progressive yet values family.",
    pic: "profile/6/picture.jpg",
    profilecreationdate: "2026-01-10"
  },
  {
    id: 7,
    cust_id: 7,
    firstname: "Karthik",
    lastname: "Raja",
    email: "karthik@example.com",
    age: "29",
    height: "180",
    sex: "Male",
    religion: "Hindu",
    caste: "Pillai",
    subcaste: "Sub-caste B",
    district: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    maritalstatus: "Single",
    profilecreatedby: "Self",
    education: "MBA",
    education_sub: "Finance",
    occupation: "Business Manager",
    occupation_descr: "Managing family business",
    annual_income: "2000000",
    fathers_occupation: "Businessman",
    mothers_occupation: "Teacher",
    no_bro: 0,
    no_sis: 1,
    aboutme: "Ambitious, career-oriented, and enjoys exploring new cultures. Seeking an independent, understanding partner to build a life together.",
    pic: "profile/7/article_img_1.jpg",
    profilecreationdate: "2026-02-15"
  },
  {
    id: 12,
    cust_id: 12,
    firstname: "Aswin",
    lastname: "Kumar",
    email: "aswin@example.com",
    age: "26",
    height: "172",
    sex: "Male",
    religion: "Hindu",
    caste: "Thiyya",
    subcaste: "Sub-caste C",
    district: "Wayanad",
    state: "Kerala",
    country: "India",
    maritalstatus: "Single",
    profilecreatedby: "Self",
    education: "B.Des",
    education_sub: "UI/UX Design",
    occupation: "UI/UX Designer",
    occupation_descr: "Designer at a creative agency",
    annual_income: "800000",
    fathers_occupation: "Agriculturist",
    mothers_occupation: "Homemaker",
    no_bro: 1,
    no_sis: 1,
    aboutme: "Creative mind, nature lover, and music enthusiast. Looking for a partner who shares a positive outlook on life and enjoys the little things.",
    pic: "images/5.jpg",
    profilecreationdate: "2026-02-28"
  },
  {
    id: 13,
    cust_id: 13,
    firstname: "Reshma",
    lastname: "Nair",
    email: "reshma@example.com",
    age: "25",
    height: "162",
    sex: "Female",
    religion: "Hindu",
    caste: "Nair",
    subcaste: "Sub-caste D",
    district: "Ernakulam",
    state: "Kerala",
    country: "India",
    maritalstatus: "Single",
    profilecreatedby: "Self",
    education: "M.Sc",
    education_sub: "Data Science",
    occupation: "Data Analyst",
    occupation_descr: "Analyzing data at an IT firm",
    annual_income: "950000",
    fathers_occupation: "Engineer",
    mothers_occupation: "Bank Manager",
    no_bro: 1,
    no_sis: 0,
    aboutme: "Optimistic, career-focused, and family-oriented. Looking for a well-educated partner with progressive values and a good sense of humor.",
    pic: "profile/13/1.jpg",
    profilecreationdate: "2026-03-01"
  },
  {
    id: 14,
    cust_id: 14,
    firstname: "Rahul",
    lastname: "Sharma",
    email: "rahul@example.com",
    age: "27",
    height: "178",
    sex: "Male",
    religion: "Hindu",
    caste: "Brahmin",
    subcaste: "Sub-caste E",
    district: "Pune",
    state: "Maharashtra",
    country: "India",
    maritalstatus: "Single",
    profilecreatedby: "Self",
    education: "B.Arch",
    education_sub: "Architecture",
    occupation: "Architect",
    occupation_descr: "Freelance architect",
    annual_income: "1200000",
    fathers_occupation: "Doctor",
    mothers_occupation: "Professor",
    no_bro: 0,
    no_sis: 1,
    aboutme: "Passionate about history, design, and travel. I appreciate simple living and honest conversations. Looking for a partner to explore the world with.",
    pic: "profile/14/img-1.jpg",
    profilecreationdate: "2026-03-12"
  }
];

function initDB() {
  if (!localStorage.getItem("matrimony_profiles")) {
    localStorage.setItem("matrimony_profiles", JSON.stringify(DEFAULT_PROFILES));
  }
  if (!localStorage.getItem("matrimony_users")) {
    const defaultUsers = DEFAULT_PROFILES.map(p => ({
      email: p.email,
      password: "password123",
      id: p.id,
      name: `${p.firstname} ${p.lastname}`
    }));
    localStorage.setItem("matrimony_users", JSON.stringify(defaultUsers));
  }
}

function getProfiles() {
  initDB();
  return JSON.parse(localStorage.getItem("matrimony_profiles"));
}

function getProfile(id) {
  const profiles = getProfiles();
  return profiles.find(p => p.id == id || p.cust_id == id);
}

function registerUser(firstname, lastname, email, password, sex) {
  initDB();
  const users = JSON.parse(localStorage.getItem("matrimony_users"));
  if (users.find(u => u.email === email)) {
    return { success: false, message: "Email already registered!" };
  }
  
  const newId = Date.now();
  users.push({ email, password, id: newId, name: `${firstname} ${lastname}` });
  localStorage.setItem("matrimony_users", JSON.stringify(users));

  const profiles = getProfiles();
  const newProfile = {
    id: newId,
    cust_id: newId,
    firstname,
    lastname,
    email,
    sex,
    age: "24",
    height: "170",
    religion: "Hindu",
    caste: "General",
    subcaste: "",
    district: "",
    state: "",
    country: "India",
    maritalstatus: "Single",
    profilecreatedby: "Self",
    education: "Graduate",
    education_sub: "",
    occupation: "Professional",
    occupation_descr: "",
    annual_income: "",
    fathers_occupation: "",
    mothers_occupation: "",
    no_bro: 0,
    no_sis: 0,
    aboutme: "New profile created.",
    pic: "profile/6/user.png",
    profilecreationdate: new Date().toISOString().split('T')[0]
  };
  profiles.push(newProfile);
  localStorage.setItem("matrimony_profiles", JSON.stringify(profiles));

  return { success: true, userId: newId };
}

function loginUser(email, password) {
  initDB();
  const users = JSON.parse(localStorage.getItem("matrimony_users"));
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    return { success: true, user };
  }
  return { success: false, message: "Invalid email or password!" };
}

function logoutUser() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}

function getLoggedInUser() {
  const userStr = localStorage.getItem("loggedInUser");
  return userStr ? JSON.parse(userStr) : null;
}

function updateProfile(id, profileData) {
  const profiles = getProfiles();
  const index = profiles.findIndex(p => p.id == id || p.cust_id == id);
  if (index !== -1) {
    profiles[index] = { ...profiles[index], ...profileData };
    localStorage.setItem("matrimony_profiles", JSON.stringify(profiles));
    return true;
  }
  return false;
}

function searchProfiles(filters) {
  const profiles = getProfiles();
  return profiles.filter(p => {
    if (filters.sex && p.sex !== filters.sex) return false;
    if (filters.maritalstatus && filters.maritalstatus !== "any" && p.maritalstatus.toLowerCase() !== filters.maritalstatus.toLowerCase()) return false;
    if (filters.state && filters.state !== "any" && p.state.toLowerCase() !== filters.state.toLowerCase()) return false;
    if (filters.religion && filters.religion !== "any" && p.religion.toLowerCase() !== filters.religion.toLowerCase()) return false;
    if (filters.agemin && parseInt(p.age) < parseInt(filters.agemin)) return false;
    if (filters.agemax && parseInt(p.age) > parseInt(filters.agemax)) return false;
    return true;
  });
}

// Check login requirement for protected pages
function checkLogin() {
  const user = getLoggedInUser();
  if (!user) {
    window.location.href = "login.html";
  }
  return user;
}

// Function to dynamically update the navigation bar in HTML pages
function renderNav() {
  const user = getLoggedInUser();
  const colorNav = document.getElementById("colorNav");
  if (colorNav) {
    let listItems = "";
    if (user) {
      listItems = `
        <li class="green">
          <a href="#" class="icon-home"></a>
          <ul>
            <li><a href="userhome.html">Home</a></li>
            <li><a href="#" onclick="logoutUser(); return false;">Logout</a></li>
          </ul>
        </li>`;
    } else {
      listItems = `
        <li class="green">
          <a href="#" class="icon-home"></a>
          <ul>
            <li><a href="login.html">Login</a></li>
            <li><a href="register.html">Register</a></li>
          </ul>
        </li>`;
    }
    colorNav.innerHTML = `<ul>${listItems}</ul>`;
  }
}

// Run renderNav when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  renderNav();
});
