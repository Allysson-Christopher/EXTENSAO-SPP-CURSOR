async function toggleSidebar() {
    const textHTML = `
      <style>
          body {
              font-family: Arial, sans-serif;
              padding: 15px;
              min-width: 400px;
              background-color: #f4f4f4;
          }
          h1 {
              font-size: 20px;
              text-align: center;
              margin-bottom: 20px;
              color: #333;
          }
          select, button {
              width: 100%;
              padding: 10px 15px;
              margin: 10px 0;
              border: 1px solid #ccc;
              border-radius: 4px;
              font-size: 14px;
              box-sizing: border-box;
          }
          button {
              background-color: #1d1d1d;
              color: white;
              cursor: pointer;
              transition: background-color 0.3s;
          }
          button:hover {
              background-color: #272c27;
          }
          .separator {
              margin: 20px 0;
              border-top: 1px solid #ccc;
          }
          #status {
              text-align: center;
              color: #555;
              font-size: 14px;
              min-height: 20px;
              margin-bottom: 20px;
          }
          #placeholder-form {
              margin-top: 20px;
              display: none;
              background-color: #fff;
              padding: 15px;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              width: 100%;
              box-sizing: border-box;
          }
          #placeholder-form h2 {
              margin-top: 0;
              font-size: 12px;
              color: #333;
              text-align: center;
          }
          .placeholder-form-label {
              display: block;
              font-size: 12px;
              margin-bottom: 5px;
              font-weight: bold;
              color: #333;
          }
          .input-full-width {
              width: 100%;
              padding: 8px;
              margin-bottom: 15px;
              border: 1px solid #ccc;
              border-radius: 4px;
              box-sizing: border-box;
          }
          .button-submit {
              background-color: #1d1d1d;
              color: white;
              border: none;
              padding: 10px 20px;
              cursor: pointer;
              border-radius: 5px;
              font-size: 14px;
              transition: background-color 0.3s;
              margin-top: 10px;
          }
          .button-submit:hover {
              background-color: #272c27;
          }
          .button-cancel {
              background-color: #f44336;
              color: white;
              border: none;
              padding: 10px 20px;
              cursor: pointer;
              border-radius: 5px;
              font-size: 14px;
              margin-left: 0px;
              transition: background-color 0.3s;
          }
          .button-cancel:hover {
              background-color: #d32f2f;
          }
          .modal {
              display: none;
              position: fixed;
              z-index: 10001;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              overflow: auto;
              background-color: rgba(0,0,0,0.4);
          }
          .modal-content {
              background-color: #fefefe;
              margin: 10% auto;
              padding: 20px;
              border: 1px solid #888;
              width: 80%;
              max-width: 500px;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
          .modal-header {
              font-size: 18px;
              margin-bottom: 10px;
              text-align: center;
              color: #333;
          }
          .modal-body {
              max-height: 330px;
              overflow-y: auto;
              margin-bottom: 20px;
          }
          .modal-footer {
              text-align: right;
          }
          .modal-footer button {
              width: auto;
              margin-left: 10px;
              padding: 10px 20px;
              border: none;
              border-radius: 4px;
              color: white;
              cursor: pointer;
              transition: background-color 0.3s;
          }
          #pieces-submit {
              background-color: #1d1d1d;
          }
          #pieces-submit:hover {
              background-color: #272c27;
          }
          #pieces-cancel {
              background-color: #f44336;
              color: white;
          }
          #pieces-cancel:hover {
              background-color: #d32f2f;
          }
          .modal-body::-webkit-scrollbar {
              width: 8px;
          }
          .modal-body::-webkit-scrollbar-thumb {
              background-color: #ccc;
              border-radius: 4px;
          }
          .modal-body::-webkit-scrollbar-thumb:hover {
              background-color: #aaa;
          }
          #placeholder-form input:focus {
              border-color: #4CAF50;
              outline: none;
              box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
          }
      </style>
  
      <h1>Automação</h1>
      
      <!-- Dropdown para seleção de kits -->
      <select id="kit-select">
          <option value="" disabled selected>Selecione um Kit</option>
          <option value="criar-kit">Criar Kit</option>
          <option value="kit-flagrante-trafico">Kit Flagrante Tráfico</option>
          <option value="kit-flagrante-sem-fianca">Kit Flagrante Sem Fiança</option>
          <option value="kit-flagrante-com-fianca">Kit Flagrante Com Fiança</option>
          <option value="kit-vpi-posse">Kit VPI DE POSSE</option>
          <option value="kit-tco">Kit TCO</option>
          <option value="kit-tco-receptacao">Kit TCO Recepção</option>
          <option value="kit-cumprimento-de-mandado-de-prisao">Kit Cumprimento de Mandado de Prisão</option>
          <option value="kit-BOC">Kit BOC (em desenvolvimento)</option>
          <option value="kit-AAFAI">kit AAFAI (em desenvolvimento)</option>
          <option value="kit-violencia-domestica">kit Violência Doméstica (em desenvolvimento)</option>
      </select>
      
      <!-- Botão para adicionar mais peças ao kit selecionado -->
      <button id="add-more-pieces">Adicionar Mais Peças ao Kit</button>
      
      <!-- Elemento de status -->
      <p id="status" style="margin-top: 10px; color: red;"></p>
      
      <!-- Formulário dinâmico para preencher placeholders -->
      <div id="placeholder-form" style="display: none;">
          <h2>Preencha os Campos</h2>
          <form id="form-placeholders">
              <div id="form-fields"></div>
              <button id="executar" type="submit" class="button-submit">Enviar</button>
              <button type="button" class="button-cancel">Cancelar</button>
          </form>
      </div>
      
      <!-- Botão Iniciar -->
      <button id="start-button">Iniciar</button>
      
      <!-- Modal para seleção de peças -->
      <div id="pieces-modal" class="modal">
          <div class="modal-content">
              <div class="modal-header" id="pieces-modal-title">Escolha as Peças</div>
              <div class="modal-body" id="pieces-modal-body">
                  <form id="pieces-form">
                      <!-- Peças serão adicionadas dinamicamente aqui -->
                  </form>
              </div>
              <div class="modal-footer">
                  <button id="pieces-submit">Confirmar</button>
                  <button id="pieces-cancel" class="button-cancel">Cancelar</button>
              </div>
          </div>
      </div>
      
      <!-- Elemento para exibir status/messages -->
      <div id="status-message" style="margin-top: 10px; color: red;"></div>
    `;
  
    const sidebar = document.querySelector(".minha-sidebar");
  
    if (sidebar) {
      // Se a sidebar já existe, remove-a e reseta o padding do body
      sidebar.remove();
      document.body.style.paddingRight = "";
    } else {
      // Cria a sidebar e define suas propriedades de estilo
      const novaSidebar = document.createElement("div");
      novaSidebar.classList.add("minha-sidebar");
      novaSidebar.style.position = "fixed";
      novaSidebar.style.top = "0";
      novaSidebar.style.right = "0";
      novaSidebar.style.width = "330px";
      novaSidebar.style.height = "100%";
      novaSidebar.style.background = "#f0f0f0";
      novaSidebar.style.borderLeft = "1px solid #ccc";
      novaSidebar.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
      novaSidebar.style.zIndex = "9999";
      novaSidebar.style.padding = "20px";
      novaSidebar.style.overflowY = "auto";
  
      // Insere o conteúdo HTML definido em textHTML
      novaSidebar.innerHTML = textHTML;
  
      document.body.appendChild(novaSidebar);
      document.body.style.paddingRight = "340px";
    }
  }
  