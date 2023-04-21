function showAlertSignup(message) {
    if (message === "Firebase: Error (auth/invalid-email).") {
      const div = document.createElement("div");
      div.appendChild(document.createTextNode("Please Enter Valid Email"));
      const container = document.querySelector(".signup-classic");
      const posts = document.querySelector("#alert");
      const newpost = container.insertBefore(div, posts);
      div.style.color = "red";
      setTimeout(() => {
        newpost.remove();
      }, 4000);
    } else if (message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
      const div = document.createElement("div");
      div.appendChild(document.createTextNode("Password should be at least 6 characters"));
      const container = document.querySelector(".signup-classic");
      const posts = document.querySelector("#alert");
      const newpost = container.insertBefore(div, posts);
      div.style.color = "red";
  
      setTimeout(() => {
        newpost.remove();
      }, 4000);
    } else if (message === "Firebase: Error (auth/email-already-in-use).") {
      const div = document.createElement("div");
      div.appendChild(document.createTextNode("The Email is Already in Use"));
      const container = document.querySelector(".signup-classic");
      const posts = document.querySelector("#alert");
      const newpost = container.insertBefore(div, posts);
      div.style.color = "red";
  
      setTimeout(() => {
        newpost.remove();
      }, 4000);
    } else {
      const div = document.createElement("div");
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector(".signup-classic");
  
      const posts = document.querySelector("#alert");
  
      const newpost = container.insertBefore(div, posts);
      div.style.color = "green";
  
      // setTimeout(() => {
      //   newpost.remove();
      //   location.replace("/Login.html");
      // }, 2000);
    }
  }
  
  function showAlertLogin(message) {
    if (message === "Firebase: Error (auth/user-not-found).") {
      const div = document.createElement("div");
      div.appendChild(document.createTextNode("User not Found"));
      const container = document.querySelector(".login-classic");
      const posts = document.querySelector("#alert");
      const newpost = container.insertBefore(div, posts);
      div.style.color = "red";
  
      setTimeout(() => {
        newpost.remove();
      }, 4000);
    } else if (message === "Firebase: Error (auth/wrong-password).") {
      const div = document.createElement("div");
      div.appendChild(document.createTextNode("Incorrect Password"));
      const container = document.querySelector(".login-classic");
      const posts = document.querySelector("#alert");
      const newpost = container.insertBefore(div, posts);
      div.style.color = "red";
  
      setTimeout(() => {
        newpost.remove();
      }, 4000);
    } else if (message === "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).") {
      const div = document.createElement("div");
      div.appendChild(document.createTextNode("account has been temporarily disabled due to many failed login"));
      const container = document.querySelector(".login-classic");
      const posts = document.querySelector("#alert");
      const newpost = container.insertBefore(div, posts);
      div.style.color = "red";
  
      setTimeout(() => {
        newpost.remove();
      }, 4000);
    } else if (message === "Firebase: Error (auth/invalid-email).") {
      const div = document.createElement("div");
      div.appendChild(document.createTextNode("Please Enter Valid Email"));
      const container = document.querySelector(".login-classic");
      const posts = document.querySelector("#alert");
      const newpost = container.insertBefore(div, posts);
      div.style.color = "red";
  
      setTimeout(() => {
        newpost.remove();
      }, 4000);
    } else {
      setTimeout(() => {
        newpost.remove();
      }, 4000);
    }
  }
  