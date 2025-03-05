// translation.js
const translations = {
    'pt': {
        // Traduções em português (padrão)
        'usp-title': 'Universidade de São Paulo',
        // outras traduções...
    },
    'en': {
        // Traduções em inglês
        'usp-title': 'University of São Paulo',
        // outras traduções...
    },
    'es': {
        // Traduções em espanhol
        'usp-title': 'Universidad de São Paulo',
        // outras traduções...
    },
    'zh': {
        // Traduções em chinês
        'usp-title': '圣保罗大学',
        // outras traduções...
    }
};

// Função de tradução otimizada
function translatePage(lang) {
    // Remover classe 'active' de todas as bandeiras
    document.querySelectorAll('.language-flag').forEach(flag => {
        flag.classList.remove('active');
    });

    // Adicionar classe 'active' à bandeira clicada
    document.querySelector(`.language-flag[data-lang="${lang}"]`).classList.add('active');

    // Obter o dicionário de traduções para o idioma selecionado
    const translation = translations[lang] || translations['pt'];

    // Traduzir elementos específicos
    Object.keys(translation).forEach(key => {
        const element = document.querySelector(`[data-translate="${key}"]`);
        if (element) {
            element.textContent = translation[key];
        }
    });

    // Salvar preferência no localStorage
    localStorage.setItem('preferred-language', lang);
}

// Evento de carregamento
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar evento de clique nas bandeiras
    document.querySelectorAll('.language-flag').forEach(flag => {
        flag.addEventListener('click', () => {
            const lang = flag.dataset.lang;
            translatePage(lang);
        });
    });

    // Verificar idioma salvo ou usar português como padrão
    const savedLanguage = localStorage.getItem('preferred-language') || 'pt';
    translatePage(savedLanguage);
});