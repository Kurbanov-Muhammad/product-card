function loadUsers() {
  const usersJSON = localStorage.getItem("users");
  if (usersJSON === null || JSON.parse(usersJSON).users.length === 0) {
    fetch("users.json")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          renderUsers(data.users);
        }, 3000);
        localStorage.setItem("users", JSON.stringify(data));
      });
  } else {
    const users = JSON.parse(usersJSON);
    renderUsers(users.users);
  }
}
loadUsers();

function renderUsers(users) {
  const container = document.getElementById("app");
  const userCardCopy = document.getElementById("users-template");
  container.innerHTML = "";
  users.forEach((user) => {
    const cardClone = userCardCopy.content.cloneNode(true);
    cardClone.querySelector(".user-name").textContent = user.name;
    cardClone.querySelector(".user-surname").textContent = user.surname;
    cardClone.querySelector(".user-email").textContent = user.email;
    cardClone.querySelector(".user-age").textContent = user.age;
    cardClone.querySelector(".user-city").textContent = user.city;
    const deleteBtn = cardClone.querySelector(".delete-card-btn");
    const cardElement = cardClone.querySelector(".user-card");
    deleteBtn.addEventListener("click", () => {
      cardElement.remove();
    });
    container.appendChild(cardClone);
  });
}

const deleteAllBtn = document.getElementById("delete-all-btn");
deleteAllBtn.addEventListener("click", () => {
  const container = document.getElementById("app");
  container.innerHTML = "";
  localStorage.removeItem("users");
});

const getAllBtn = document.getElementById("get-all-btn");
getAllBtn.addEventListener("click", () => {
  const existingCards = document.querySelectorAll(".user-card");
  fetchUsersData().then((data) => {
    if (data.users.length === existingCards.length) {
      alert("Все карточки уже отображены");
    } else {
      renderUsers(data.users);
      localStorage.setItem("users", JSON.stringify(data));
    }
  });
});

function fetchUsersData() {
  return fetch("users.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка данных");
      }
      return response.json();
    })
    .catch((error) => {
      const container = document.getElementById("app");
      container.innerHTML = "Ошибка при загрузке данных";
    });
}
