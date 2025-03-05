// Este código deve ser adicionado ao seu arquivo main.js ou implementado diretamente no HTML

document.addEventListener('DOMContentLoaded', function() {
    // 1. Configuração dos links para as linhas de pesquisa
    const pesquisaCards = document.querySelectorAll('#pesquisa .card-hover');
    
    // Criar seções detalhadas para cada linha de pesquisa (caso não existam)
    const secoesPesquisa = [
        // ... seu código original para secoesPesquisa ...
    ];

    // ... manter todo o código original para criação de seções de pesquisa, 
    // eventos de clique, configuração dos links, cards da equipe, etc ...

    // INÍCIO DO CÓDIGO DE TRADUÇÃO
    // Flag para controlar traduções simultâneas
    let isTranslating = false;
    
    // Dicionário de traduções
    const translations = {
        // ... seu dicionário de traduções original ...
    };
    
    // Função para traduzir a página (versão corrigida)
    function translatePage(lang) {
        // Evitar múltiplas traduções simultâneas
        if (isTranslating) return;
        isTranslating = true;
        
        console.log('Traduzindo para:', lang);
        const translation = translations[lang];
        if (!translation) {
            console.error('Tradução não encontrada para:', lang);
            isTranslating = false;
            return;
        }
        
        // Atualizar bandeiras ativas
        document.querySelectorAll('.language-flag').forEach(flag => {
            if (flag.dataset.lang === lang) {
                flag.classList.add('active');
            } else {
                flag.classList.remove('active');
            }
        });
        
        // Lista de elementos a traduzir
        const elementsToTranslate = [
            // Menu de navegação
            { selector: '.nav-link[href="#inicio"]', key: 'inicio' },
            { selector: '.nav-link[href="#pesquisa"]', key: 'pesquisa' },
            { selector: '.nav-link[href="#equipe"]', key: 'equipe' },
            { selector: '.nav-link[href="#publicacoes"]', key: 'publicacoes' },
            { selector: '.nav-link[href="#infra"]', key: 'infra' },
            { selector: '.nav-link[href="#ensino"]', key: 'ensino' },
            { selector: '.nav-link[href="#contato"]', key: 'contato' },
            
            // Títulos de seções
            { selector: '#inicio .section-title', key: 'sobre-laboratorio' },
            { selector: '#pesquisa .section-title', key: 'linhas-pesquisa' },
            { selector: '#equipe .section-title', key: 'nossa-equipe' },
            { selector: '#publicacoes .section-title', key: 'publicacoes-recentes' },
            { selector: '#infra .section-title', key: 'infraestrutura' },
            { selector: '#ensino .section-title', key: 'ensino-formacao' },
            { selector: '.bg-gray-100 .text-center .section-title', key: 'numeros' }
        ];
        
        // Traduzir elementos
        elementsToTranslate.forEach(item => {
            const elements = document.querySelectorAll(item.selector);
            elements.forEach(element => {
                if (translation[item.key]) {
                    element.textContent = translation[item.key];
                }
            });
        });
        
        // Traduzir cards de pesquisa
        document.querySelectorAll('#pesquisa .card-hover h3').forEach((el, index) => {
            if (index === 0 && translation['energia-mitocondrial']) {
                el.textContent = translation['energia-mitocondrial'];
            } else if (index === 1 && translation['aplicacoes-biomedicas']) {
                el.textContent = translation['aplicacoes-biomedicas'];
            } else if (index === 2 && translation['nanotecnologia']) {
                el.textContent = translation['nanotecnologia'];
            }
        });
        
        // Traduzir seções dinâmicas de pesquisa
        secoesPesquisa.forEach(secao => {
            const element = document.getElementById(secao.id);
            if (element) {
                const titulo = element.querySelector('h3');
                if (titulo && translation[secao.id]) {
                    titulo.textContent = translation[secao.id];
                }
            }
        });
        
        // Traduzir biografias da equipe
        equipeMembros.forEach(membro => {
            const element = document.getElementById(membro.id);
            if (element) {
                const titulo = element.querySelector('h3');
                if (titulo) {
                    if (membro.id === 'marina-silva') {
                        titulo.textContent = 'Dra. Marina Silva';
                    } else if (membro.id === 'ricardo-oliveira') {
                        titulo.textContent = 'Dr. Ricardo Oliveira';
                    } else if (membro.id === 'ana-costa') {
                        titulo.textContent = 'Profa. Ana Costa';
                    }
                }
            }
        });
        
        // Salvar preferência
        localStorage.setItem('preferredLanguage', lang);
        
        console.log('Tradução concluída para:', lang);
        
        // Liberar flag após um tempo
        setTimeout(() => {
            isTranslating = false;
        }, 300);
    }
    
    // Detector de idioma do navegador
    function detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        
        if (browserLang.startsWith('pt')) return 'pt';
        if (browserLang.startsWith('en')) return 'en';
        if (browserLang.startsWith('es')) return 'es';
        if (browserLang.startsWith('zh')) return 'zh';
        
        return 'pt'; // Padrão para português
    }
    
    // Seletor de idiomas
    const languageFlags = document.querySelectorAll('.language-flag');
    
    // Adicionar eventos de clique às bandeiras
    languageFlags.forEach(flag => {
        flag.addEventListener('click', function() {
            const lang = this.dataset.lang;
            console.log('Bandeira clicada:', lang);
            translatePage(lang);
        });
    });
    
    // Verificar se há uma preferência de idioma salva
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        translatePage(savedLanguage);
    } else {
        // Usar idioma do navegador como fallback
        const detectedLang = detectBrowserLanguage();
        translatePage(detectedLang);
    }
    
    // FIM DO CÓDIGO DE TRADUÇÃO
});

// Remova qualquer código que esteja fora do evento DOMContentLoaded

// ... (resto do código de tradução)
    // 1. Configuração dos links para as linhas de pesquisa
    const pesquisaCards = document.querySelectorAll('#pesquisa .card-hover');
    
    // Criar seções detalhadas para cada linha de pesquisa (caso não existam)
    const secoesPesquisa = [
        {
            id: 'energia-mitocondrial',
            titulo: 'Energia Mitocondrial',
            conteudo: `
                <div class="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h3 class="text-2xl font-bold text-primary mb-4">Energia Mitocondrial</h3>
                    <p class="mb-4">Nossa pesquisa em energia mitocondrial foca na compreensão profunda dos mecanismos celulares responsáveis pela produção de ATP e outros processos bioenergéticos.</p>
                    <p class="mb-4">Utilizamos técnicas avançadas de microscopia e análise molecular para investigar:</p>
                    <ul class="list-disc pl-6 mb-4">
                        <li>Cadeia de transporte de elétrons</li>
                        <li>Fosforilação oxidativa</li>
                        <li>Dinâmica mitocondrial</li>
                        <li>Adaptações em condições de estresse</li>
                    </ul>
                    <p>Nosso objetivo é aplicar esse conhecimento no desenvolvimento de soluções para doenças metabólicas e novas tecnologias de energia biomimética.</p>
                </div>
            `
        },
        {
            id: 'aplicacoes-biomedicas',
            titulo: 'Aplicações Biomédicas',
            conteudo: `
                <div class="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h3 class="text-2xl font-bold text-primary mb-4">Aplicações Biomédicas</h3>
                    <p class="mb-4">Nossa linha de pesquisa em aplicações biomédicas busca traduzir o conhecimento sobre processos mitocondriais em soluções práticas para a medicina.</p>
                    <p class="mb-4">Principais áreas de desenvolvimento:</p>
                    <ul class="list-disc pl-6 mb-4">
                        <li>Terapias para doenças neurodegenerativas</li>
                        <li>Tratamentos para disfunções metabólicas</li>
                        <li>Dispositivos médicos de monitoramento energético celular</li>
                        <li>Biomarcadores mitocondriais para diagnóstico precoce</li>
                    </ul>
                    <p>Colaboramos ativamente com hospitais e centros de pesquisa clínica para validar nossas tecnologias.</p>
                </div>
            `
        },
        {
            id: 'nanotecnologia',
            titulo: 'Nanotecnologia',
            conteudo: `
                <div class="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h3 class="text-2xl font-bold text-primary mb-4">Nanotecnologia</h3>
                    <p class="mb-4">Nossa pesquisa em nanotecnologia explora a interface entre materiais em escala nanométrica e processos biológicos energéticos.</p>
                    <p class="mb-4">Linhas de investigação atuais:</p>
                    <ul class="list-disc pl-6 mb-4">
                        <li>Nanopartículas para entrega direcionada de substratos energéticos</li>
                        <li>Sensores nanométricos para monitoramento da função mitocondrial</li>
                        <li>Nanomateriais inspirados em estruturas mitocondriais</li>
                        <li>Interfaces bio-eletrônicas em escala celular</li>
                    </ul>
                    <p>Esta pesquisa tem aplicações promissoras tanto na medicina quanto em tecnologias de energia renovável.</p>
                </div>
            `
        }
    ];

    // Função para criar as seções de pesquisa
    function criarSecoesPesquisa() {
        const pesquisaSection = document.querySelector('#pesquisa');
        if (!pesquisaSection) return;
        
        const detalhesContainer = document.createElement('div');
        detalhesContainer.id = 'detalhes-pesquisa';
        detalhesContainer.className = 'mt-8';
        
        secoesPesquisa.forEach(secao => {
            const secaoElement = document.createElement('div');
            secaoElement.id = secao.id;
            secaoElement.style.display = 'none'; // Inicialmente oculto
            secaoElement.innerHTML = secao.conteudo;
            detalhesContainer.appendChild(secaoElement);
        });
        
        pesquisaSection.appendChild(detalhesContainer);
    }
    
    criarSecoesPesquisa();
    
    // Adicionar eventos de clique aos cards de pesquisa
    pesquisaCards.forEach((card, index) => {
        if (index < secoesPesquisa.length) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function() {
                // Ocultar todas as seções
                secoesPesquisa.forEach(secao => {
                    const element = document.getElementById(secao.id);
                    if (element) element.style.display = 'none';
                });
                
                // Mostrar apenas a seção correspondente
                const secaoId = secoesPesquisa[index].id;
                const element = document.getElementById(secaoId);
                if (element) {
                    element.style.display = 'block';
                    // Rolar suavemente até a seção
                    element.scrollIntoView({behavior: 'smooth'});
                }
            });
        }
    });
    
    // 2. Configuração dos links para publicações (abrir em nova aba)
    const publicacoesLinks = document.querySelectorAll('#publicacoes a');
    publicacoesLinks.forEach(link => {
        link.target = '_blank'; // Configurar para abrir em nova aba
    });
    
    // 3. Configuração dos cards da equipe
    const equipeMembros = [
        {
            id: 'marina-silva',
            nome: 'Dra. Marina Silva',
            cargo: 'Coordenadora',
            bio: `
                <div class="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h3 class="text-2xl font-bold text-primary mb-4">Dra. Marina Silva</h3>
                    <p class="mb-4">A Dra. Marina Silva lidera o MitLab desde sua fundação em 2018. Com doutorado em Bioquímica Celular pela Universidade de Cambridge e pós-doutorado no MIT, ela trouxe para o Brasil técnicas inovadoras em pesquisa mitocondrial.</p>
                    <p class="mb-4">Principais contribuições científicas:</p>
                    <ul class="list-disc pl-6 mb-4">
                        <li>Descoberta de um novo complexo proteico na cadeia respiratória mitocondrial</li>
                        <li>Desenvolvimento de técnicas não-invasivas para mensuração da atividade mitocondrial in vivo</li>
                        <li>Pioneirismo em modelos computacionais de dinâmica mitocondrial</li>
                    </ul>
                    <p>Atualmente, coordena projetos em colaboração com instituições na Europa, Estados Unidos e Japão.</p>
                </div>
            `
        },
        {
            id: 'ricardo-oliveira',
            nome: 'Dr. Ricardo Oliveira',
            cargo: 'Pesquisador Sênior',
            bio: `
                <div class="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h3 class="text-2xl font-bold text-primary mb-4">Dr. Ricardo Oliveira</h3>
                    <p class="mb-4">O Dr. Ricardo Oliveira é especialista em bioenergia celular, com formação em Biofísica pela UFRJ e doutorado em Fisiologia Celular pela Universidade de Oxford.</p>
                    <p class="mb-4">Principais áreas de pesquisa:</p>
                    <ul class="list-disc pl-6 mb-4">
                        <li>Adaptações mitocondriais em condições de hipóxia</li>
                        <li>Metabolismo energético em células tumorais</li>
                        <li>Desenvolvimento de biomarcadores para estresse oxidativo</li>
                    </ul>
                    <p>Em seus 15 anos de carreira, publicou mais de 45 artigos em revistas científicas internacionais e orientou 12 teses de doutorado.</p>
                </div>
            `
        },
        {
            id: 'ana-costa',
            nome: 'Profa. Ana Costa',
            cargo: 'Especialista em Nanotecnologia',
            bio: `
                <div class="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h3 class="text-2xl font-bold text-primary mb-4">Profa. Ana Costa</h3>
                    <p class="mb-4">A Profa. Ana Costa é responsável pela integração de nanotecnologia às pesquisas do MitLab. Com formação interdisciplinar em Química e Engenharia de Materiais pelo Instituto Tecnológico de Tokyo, traz uma perspectiva única ao laboratório.</p>
                    <p class="mb-4">Projetos atuais:</p>
                    <ul class="list-disc pl-6 mb-4">
                        <li>Desenvolvimento de nanopartículas para delivery direcionado de drogas às mitocôndrias</li>
                        <li>Nanosensores para monitoramento em tempo real da atividade mitocondrial</li>
                        <li>Materiais biomiméticos baseados em estruturas mitocondriais</li>
                    </ul>
                    <p>Além da pesquisa acadêmica, tem duas patentes registradas e colabora com empresas de biotecnologia no desenvolvimento de produtos.</p>
                </div>
            `
        }
    ];
    
    // Função para criar as seções de biografia da equipe
    function criarSecoesBioEquipe() {
        const equipeSection = document.querySelector('#equipe');
        if (!equipeSection) return;
        
        const bioContainer = document.createElement('div');
        bioContainer.id = 'detalhes-equipe';
        bioContainer.className = 'mt-8';
        
        equipeMembros.forEach(membro => {
            const membroElement = document.createElement('div');
            membroElement.id = membro.id;
            membroElement.style.display = 'none'; // Inicialmente oculto
            membroElement.innerHTML = membro.bio;
            bioContainer.appendChild(membroElement);
        });
        
        equipeSection.appendChild(bioContainer);
    }
    
    criarSecoesBioEquipe();
    
    // Adicionar eventos de clique aos cards da equipe
    const equipePesquisadores = document.querySelectorAll('#equipe .card-hover');
    equipePesquisadores.forEach((card, index) => {
        if (index < equipeMembros.length) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function() {
                // Ocultar todas as biografias
                equipeMembros.forEach(membro => {
                    const element = document.getElementById(membro.id);
                    if (element) element.style.display = 'none';
                });
                
                // Mostrar apenas a biografia correspondente
                const membroId = equipeMembros[index].id;
                const element = document.getElementById(membroId);
                if (element) {
                    element.style.display = 'block';
                    // Rolar suavemente até a biografia
                    element.scrollIntoView({behavior: 'smooth'});
                }
            });
        }
    });

    // INÍCIO DO CÓDIGO DE TRADUÇÃO
    // Dicionário de traduções
    const translations = {
        // Inglês (padrão)
        'en': {
            'inicio': 'Home',
            'pesquisa': 'Research',
            'equipe': 'Team',
            'publicacoes': 'Publications',
            'infra': 'Infrastructure',
            'ensino': 'Education',
            'contato': 'Contact',
            'sobre-laboratorio': 'About the Laboratory',
            'linhas-pesquisa': 'Research Lines',
            'energia-mitocondrial': 'Mitochondrial Energy',
            'aplicacoes-biomedicas': 'Biomedical Applications',
            'nanotecnologia': 'Nanotechnology',
            'numeros': 'MitLab in Numbers',
            'pesquisadores': 'Researchers',
            'publicacoes-count': 'Publications',
            'projetos': 'Ongoing Projects',
            'patentes': 'Patents',
            'nossa-equipe': 'Our Team',
            'equipe-completa': 'See Full Team',
            'infraestrutura': 'Infrastructure',
            'labs-especializados': 'Specialized Laboratories',
            'equipamentos': 'Equipment',
            'ensino-formacao': 'Education and Training',
            'pos-graduacao': 'Graduate Programs',
            'ic': 'Scientific Initiation',
            'cursos': 'Courses and Workshops',
            'processo-seletivo': 'Selection Process',
            'publicacoes-recentes': 'Recent Publications',
            'artigos': 'Scientific Papers',
            'conferencias': 'Conferences and Events',
            'todas-publicacoes': 'See All Publications',
            'colaboracoes': 'Collaborations and Partnerships',
            'info-contato': 'Contact Information',
            'redes-sociais': 'Follow on Social Media',
            'localizacao': 'Location',
            'envie-mensagem': 'Send a Message',
            'nome': 'Name',
            'assunto': 'Subject',
            'mensagem': 'Message',
            'enviar': 'Send Message',
            'imprensa': 'Press Information',
            'footer-about': 'Mitochondrial Energy Research Laboratory, dedicated to the investigation and application of cellular bioenergetic mechanisms.',
            'links-rapidos': 'Quick Links',
            'recursos': 'Resources',
            'area-aluno': 'Student Area',
            'biblioteca': 'Library',
            'agendamento': 'Equipment Scheduling',
            'politica-dados': 'Data Policy',
            'faqs': 'FAQs',
            'direitos': 'All rights reserved',
            'privacidade': 'Privacy Policy',
            'termos': 'Terms of Use',
            'acessibilidade': 'Accessibility'
        },
        // Português
        'pt': {
            'inicio': 'Início',
            'pesquisa': 'Pesquisa',
            'equipe': 'Equipe',
            'publicacoes': 'Publicações',
            'infra': 'Infraestrutura',
            'ensino': 'Ensino',
            'contato': 'Contato',
            'sobre-laboratorio': 'Sobre o Laboratório',
            'linhas-pesquisa': 'Linhas de Pesquisa',
            'energia-mitocondrial': 'Energia Mitocondrial',
            'aplicacoes-biomedicas': 'Aplicações Biomédicas',
            'nanotecnologia': 'Nanotecnologia',
            'numeros': 'O MitLab em Números',
            'pesquisadores': 'Pesquisadores',
            'publicacoes-count': 'Publicações',
            'projetos': 'Projetos em Andamento',
            'patentes': 'Patentes',
            'nossa-equipe': 'Nossa Equipe',
            'equipe-completa': 'Ver Equipe Completa',
            'infraestrutura': 'Infraestrutura',
            'labs-especializados': 'Laboratórios Especializados',
            'equipamentos': 'Equipamentos',
            'ensino-formacao': 'Ensino e Formação',
            'pos-graduacao': 'Pós-Graduação',
            'ic': 'Iniciação Científica',
            'cursos': 'Cursos e Workshops',
            'processo-seletivo': 'Processo Seletivo',
            'publicacoes-recentes': 'Publicações Recentes',
            'artigos': 'Artigos Científicos',
            'conferencias': 'Conferências e Eventos',
            'todas-publicacoes': 'Ver Todas as Publicações',
            'colaboracoes': 'Colaborações e Parcerias',
            'info-contato': 'Informações de Contato',
            'redes-sociais': 'Acompanhe nas Redes Sociais',
            'localizacao': 'Localização',
            'envie-mensagem': 'Envie uma Mensagem',
            'nome': 'Nome',
            'assunto': 'Assunto',
            'mensagem': 'Mensagem',
            'enviar': 'Enviar Mensagem',
            'imprensa': 'Informações para Imprensa',
            'footer-about': 'Laboratório de Pesquisa em Energia Mitocondrial, dedicado à investigação e aplicação dos mecanismos bioenergéticos celulares.',
            'links-rapidos': 'Links Rápidos',
            'recursos': 'Recursos',
            'area-aluno': 'Área do Aluno',
            'biblioteca': 'Biblioteca',
            'agendamento': 'Agendamento de Equipamentos',
            'politica-dados': 'Política de Dados',
            'faqs': 'FAQs',
            'direitos': 'Todos os direitos reservados',
            'privacidade': 'Política de Privacidade',
            'termos': 'Termos de Uso',
            'acessibilidade': 'Acessibilidade'
        },
        // Espanhol
        'es': {
            'inicio': 'Inicio',
            'pesquisa': 'Investigación',
            'equipe': 'Equipo',
            'publicacoes': 'Publicaciones',
            'infra': 'Infraestructura',
            'ensino': 'Enseñanza',
            'contato': 'Contacto',
            'sobre-laboratorio': 'Sobre el Laboratorio',
            'linhas-pesquisa': 'Líneas de Investigación',
            'energia-mitocondrial': 'Energía Mitocondrial',
            'aplicacoes-biomedicas': 'Aplicaciones Biomédicas',
            'nanotecnologia': 'Nanotecnología',
            'numeros': 'MitLab en Números',
            'pesquisadores': 'Investigadores',
            'publicacoes-count': 'Publicaciones',
            'projetos': 'Proyectos en Curso',
            'patentes': 'Patentes',
            'nossa-equipe': 'Nuestro Equipo',
            'equipe-completa': 'Ver Equipo Completo',
            'infraestrutura': 'Infraestructura',
            'labs-especializados': 'Laboratorios Especializados',
            'equipamentos': 'Equipos',
            'ensino-formacao': 'Enseñanza y Formación',
            'pos-graduacao': 'Posgrado',
            'ic': 'Iniciación Científica',
            'cursos': 'Cursos y Talleres',
            'processo-seletivo': 'Proceso de Selección',
            'publicacoes-recentes': 'Publicaciones Recientes',
            'artigos': 'Artículos Científicos',
            'conferencias': 'Conferencias y Eventos',
            'todas-publicacoes': 'Ver Todas las Publicaciones',
            'colaboracoes': 'Colaboraciones y Asociaciones',
            'info-contato': 'Información de Contacto',
            'redes-sociais': 'Síguenos en Redes Sociales',
            'localizacao': 'Ubicación',
            'envie-mensagem': 'Enviar un Mensaje',
            'nome': 'Nombre',
            'assunto': 'Asunto',
            'mensagem': 'Mensaje',
            'enviar': 'Enviar Mensaje',
            'imprensa': 'Información para Prensa',
            'footer-about': 'Laboratorio de Investigación en Energía Mitocondrial, dedicado a la investigación y aplicación de mecanismos bioenergéticos celulares.',
            'links-rapidos': 'Enlaces Rápidos',
            'recursos': 'Recursos',
            'area-aluno': 'Área de Estudiantes',
            'biblioteca': 'Biblioteca',
            'agendamento': 'Programación de Equipos',
            'politica-dados': 'Política de Datos',
            'faqs': 'Preguntas Frecuentes',
            'direitos': 'Todos los derechos reservados',
            'privacidade': 'Política de Privacidad',
            'termos': 'Términos de Uso',
            'acessibilidade': 'Accesibilidad'
        },
        // Mandarim
        'zh': {
            'inicio': '首页',
            'pesquisa': '研究',
            'equipe': '团队',
            'publicacoes': '出版物',
            'infra': '基础设施',
            'ensino': '教育',
            'contato': '联系方式',
            'sobre-laboratorio': '关于实验室',
            'linhas-pesquisa': '研究方向',
            'energia-mitocondrial': '线粒体能量',
            'aplicacoes-biomedicas': '生物医学应用',
            'nanotecnologia': '纳米技术',
            'numeros': 'MitLab数据',
            'pesquisadores': '研究人员',
            'publicacoes-count': '出版物',
            'projetos': '进行中的项目',
            'patentes': '专利',
            'nossa-equipe': '我们的团队',
            'equipe-completa': '查看完整团队',
            'infraestrutura': '基础设施',
            'labs-especializados': '专业实验室',
            'equipamentos': '设备',
            'ensino-formacao': '教育与培训',
            'pos-graduacao': '研究生课程',
            'ic': '科学启蒙',
            'cursos': '课程和工作坊',
            'processo-seletivo': '选拔流程',
            'publicacoes-recentes': '最新出版物',
            'artigos': '科学论文',
            'conferencias': '会议和活动',
            'todas-publicacoes': '查看所有出版物',
            'colaboracoes': '合作与伙伴关系',
            'info-contato': '联系信息',
            'redes-sociais': '社交媒体关注',
            'localizacao': '位置',
            'envie-mensagem': '发送消息',
            'nome': '姓名',
            'assunto': '主题',
            'mensagem': '消息',
            'enviar': '发送消息',
            'imprensa': '媒体信息',
            'footer-about': '线粒体能量研究实验室，致力于细胞生物能量机制的研究和应用。',
            'links-rapidos': '快速链接',
            'recursos': '资源',
            'area-aluno': '学生区域',
            'biblioteca': '图书馆',
            'agendamento': '设备预约',
            'politica-dados': '数据政策',
            'faqs': '常见问题',
            'direitos': '版权所有',
            'privacidade': '隐私政策',
            'termos': '使用条款',
            'acessibilidade': '无障碍'
        }
    };
