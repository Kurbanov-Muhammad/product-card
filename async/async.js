function loadAndRenderUsers() {
  const usersJSON = localStorage.getItem('users');
  if (usersJSON === null || JSON.parse(usersJSON).users.length === 0) {
    const container = document.getElementById('app');
    container.innerHTML = '<h1 class="title">Данные загружаются</h1>';
    fetch('users.json')
    .then(response => response.json())
    .then(data => {
      setTimeout(() => {
        renderUsers(data.users);}, 3000);
        localStorage.setItem('users', JSON.stringify(data));
    });
  }
  else {
    const users = JSON.parse(usersJSON);
    renderUsers(users.users);
  }
}
loadAndRenderUsers();

function renderUsers(users) {
  const container = document.getElementById('app');
  const namesArray = users.map(user => {
    return `<div class="user-card" data-id="${user.id}"> ${user.name}, ${user.surname}, ${user.email}, ${user.age}, ${user.city}, <button class="delete-card-btn" data-id="${user.id}">Удалить</button> </div>`
  });
  container.innerHTML = namesArray.join('');
  const deleteButtons = document.querySelectorAll('.delete-card-btn');
  deleteButtons.forEach(baton => {
    baton.addEventListener('click', () => {
      const userId = baton.dataset.id;
      baton.closest('.user-card').remove();
      const usersJSON = localStorage.getItem("users");
      const users = JSON.parse(usersJSON);
      const updatedUsers = users.users.filter(user => user.id !== userId);
      localStorage.setItem('users', JSON.stringify({ users: updatedUsers }));
    });
  });
}

const deleteAllBtn = document.getElementById('delete-all-btn');
deleteAllBtn.addEventListener('click', () => {
  const container = document.getElementById('app');
  container.innerHTML = '';
  localStorage.removeItem("users");
});


const getAllBtn = document.getElementById('get-all-btn');
getAllBtn.addEventListener('click', () => {
  const existingCards = document.querySelectorAll('.user-card');
  fetchUsersData().then(data => {
    if (data.users.length === existingCards.length) {
      alert('Все карточки уже отображены');
    } else {
      renderUsers(data.users);
      localStorage.setItem('users', JSON.stringify(data));
    }
  });
});

function fetchUsersData() {
  return fetch('users.json').then(response => {
    if (!response.ok) { throw new Error('Ошибка данных');
    }
    return response.json();
  })
    .catch(error => { 
    const container = document.getElementById('app');
    container.innerHTML = 'Ошибка при загрузке данных';
  });
}