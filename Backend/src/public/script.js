document.addEventListener("DOMContentLoaded", () => {
  const checklistForm = document.getElementById("checklistForm");
  const checklistList = document.getElementById("checklistList");

  // Função para carregar checklists
  const loadChecklists = async () => {
    const response = await fetch("/checklists");
    const checklists = await response.json();
    checklistList.innerHTML = "";

    checklists.forEach((checklist) => {
      const li = document.createElement("li");
      li.innerHTML = `
                <strong>${checklist.title}</strong><br>
                Itens: ${checklist.items.join(", ")}
                <button onclick="deleteChecklist('${
                  checklist._id
                }')">Deletar</button>
            `;
      checklistList.appendChild(li);
    });
  };

  // Função para adicionar checklist
  checklistForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const items = document
      .getElementById("items")
      .value.split(",")
      .map((item) => item.trim());

    await fetch("/checklists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, items }),
    });

    checklistForm.reset();
    loadChecklists();
  });

  // Função para deletar checklist
  window.deleteChecklist = async (id) => {
    await fetch(`/checklists/${id}`, {
      method: "DELETE",
    });
    loadChecklists();
  };

  // Carregar checklists ao iniciar
  loadChecklists();
});
