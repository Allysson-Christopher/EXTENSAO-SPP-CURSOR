async function toggleSidebar() {
  let sidebar = document.querySelector(".minha-sidebar");
  if (sidebar) {
    // Se a sidebar já está aberta, remove-a e reseta o padding da body
    sidebar.remove();
    document.body.style.paddingRight = "";
  } else {
    // Caso contrário, cria e adiciona a sidebar
    sidebar = document.createElement("div");
    sidebar.classList.add("minha-sidebar");
    document.body.appendChild(sidebar);
    document.body.style.paddingRight = "500px";
  }
}
