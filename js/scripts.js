window.onload = function () {
    const userTableBody = document.getElementById("user-table-body");
    const users = JSON.parse(localStorage.getItem("usuarios")) || [];

    users.forEach((user, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.status}</td>
            <td class="action-buttons">
                <button class="icon-button edit" onclick="editUser(${index})">✏️</button>
                <button class="icon-button delete" onclick="deleteUser(${index})">🗑️</button>
            </td>
        `;

        userTableBody.appendChild(row);
    });
    
};

function editUser(index) {
    localStorage.setItem("editIndex", index);
    window.location.href = "pages/register.html";
}

function deleteUser(index) {
    const users = JSON.parse(localStorage.getItem("usuarios")) || [];
    users.splice(index, 1);
    localStorage.setItem("usuarios", JSON.stringify(users));
    location.reload();
}