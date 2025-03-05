// Arquivo navigation.js
document.addEventListener('DOMContentLoaded', () => {
    // Função para gerenciar navegação entre páginas
    function setupNavigation() {
        const navLinks = document.querySelectorAll('.main-navigation a');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                // Exemplo de navegação suave
                event.preventDefault();
                const targetUrl = event.target.getAttribute('href');
                window.location.href = targetUrl;
            });
        });
    }

    // Função para destacar página atual na navegação
    function highlightCurrentPage() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.main-navigation a');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (currentPath.endsWith(href)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Inicializar funções de navegação
    setupNavigation();
    highlightCurrentPage();
});

// Tratamento de erros de navegação
window.addEventListener('error', (event) => {
    console.error('Erro de navegação:', event.error);
    // Opcional: implementar tratamento de erros de navegação
});