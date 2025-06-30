// ---------------- To-Do List ----------------
let todos = JSON.parse(localStorage.getItem("todos")) || [];
const todoList = document.getElementById("todoList");

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;
    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.onclick = () => removeTodo(index);
    li.appendChild(btn);
    todoList.appendChild(li);
  });
}

function addTodo() {
  const input = document.getElementById("todoInput");
  const value = input.value.trim();
  if (value) {
    todos.push(value);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
    input.value = "";
  }
}

function removeTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

renderTodos();

// ---------------- Product Listing ----------------
const products = [
  { name: "Java Book", category: "Books", rating: 4.5 },
  { name: "Headphones", category: "Electronics", rating: 4.8 },
  { name: "Python Book", category: "Books", rating: 4.2 },
  { name: "Smartphone", category: "Electronics", rating: 4.9 }
];

function displayProducts(filtered) {
  const list = document.getElementById("productList");
  list.innerHTML = "";
  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `<strong>${p.name}</strong><br>Category: ${p.category}<br>Rating: ${p.rating}`;
    list.appendChild(card);
  });
}

function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  const filtered = category === "all" ? products : products.filter(p => p.category === category);
  displayProducts(filtered);
}

function sortProducts() {
  const sort = document.getElementById("sortRating").value;
  const sorted = [...products].sort((a, b) => sort === "high" ? b.rating - a.rating : a.rating - b.rating);
  displayProducts(sorted);
}

displayProducts(products);
