const apps = [
    // 🤖 Chatbots y Texto
    { name: 'ChatGPT', category: 'chatbots', logoUrl: 'https://cdn.openai.com/API/logo-openai.svg', color: '#10b981', free: false, description: 'Asistente de IA conversacional avanzado para múltiples tareas.', url: 'https://chat.openai.com' },
    { name: 'Claude AI', category: 'chatbots', logoUrl: 'https://claude.ai/images/claude_app_icon.png', color: '#10b981', free: true, description: 'IA conversacional segura y útil de Anthropic.', url: 'https://claude.ai' },
    { name: 'Copilot', category: 'chatbots', logoUrl: 'https://copilot.microsoft.com/rp/copilot-logo.svg', color: '#10b981', free: true, description: 'Asistente de IA de Microsoft integrado en Edge y Office.', url: 'https://copilot.microsoft.com' },
    { name: 'DeepSeek Chat', category: 'chatbots', logoUrl: 'https://chat.deepseek.com/favicon.ico', color: '#10b981', free: true, description: 'Asistente de IA conversacional avanzado.', url: 'https://chat.deepseek.com' },
    { name: 'Flux Kontext', category: 'chatbots', logoUrl: 'https://www.fluxpro.ai/favicon.ico', color: '#10b981', free: true, description: 'Herramienta de IA para gestión de contexto en conversaciones.', url: 'https://www.fluxpro.ai/im-tools/flux-kontext' },
    { name: 'Gemini', category: 'chatbots', logoUrl: 'https://ssl.gstatic.com/lamda/images/gemini_favicon_f069958c85030456e93de685481c559f160ea06b.png', color: '#10b981', free: true, description: 'IA multimodal de Google para conversación y análisis.', url: 'https://gemini.google.com/app' },
    { name: 'Gemini Studio', category: 'chatbots', logoUrl: 'https://ssl.gstatic.com/lamda/images/gemini_favicon_f069958c85030456e93de685481c559f160ea06b.png', color: '#10b981', free: true, description: 'Área de pruebas y prompts de Gemini Pro.', url: 'https://aistudio.google.com/prompts/new_chat' },
    { name: 'Grok', category: 'chatbots', logoUrl: 'https://grok.x.ai/favicon.ico', color: '#10b981', free: true, description: 'Asistente de IA desarrollado por xAI, equipo de Elon Musk.', url: 'https://grok.x.ai' },
    { name: 'Kimi', category: 'chatbots', logoUrl: 'https://www.kimi.com/favicon.ico', color: '#10b981', free: true, description: 'Asistente IA de búsqueda avanzada y productividad.', url: 'https://www.kimi.com/' },
    { name: 'Kimi.ai', category: 'chatbots', logoUrl: 'https://kimi.ai/favicon.ico', color: '#10b981', free: true, description: 'Asistente de IA avanzado para investigación y razonamiento.', url: 'https://kimi.ai' },
    { name: 'Le Chat - Mistral AI', category: 'chatbots', logoUrl: 'https://mistral.ai/favicon.ico', color: '#10b981', free: true, description: 'Demo pública de modelos de lenguaje de Mistral AI.', url: 'https://mistral.ai' },
    { name: 'Manus', category: 'chatbots', logoUrl: 'https://manus.im/favicon.ico', color: '#10b981', free: true, description: 'IA colaborativa para escritura y productividad.', url: 'https://manus.im/app' },
    { name: 'Meta AI', category: 'chatbots', logoUrl: 'https://about.meta.com/media/images/meta-app-icon.png', color: '#10b981', free: true, description: 'Asistente de IA de Meta integrado en sus plataformas.', url: 'https://ai.meta.com' },
    { name: 'MiniMax AI', category: 'chatbots', logoUrl: 'https://minimaxi.ai/favicon.ico', color: '#10b981', free: true, description: 'Asistente de IA conversacional para usuarios chinos.', url: 'https://minimaxi.ai' },
    { name: 'NotebookLM', category: 'chatbots', logoUrl: 'https://notebooklm.google.com/favicon.ico', color: '#10b981', free: true, description: 'IA de Google para resumir documentos y generar ideas.', url: 'https://notebooklm.google.com' },
    { name: 'Perplexity', category: 'chatbots', logoUrl: 'https://turing.com/kb/wp-content/uploads/2023/12/perplexity-ai-logo.webp', color: '#10b981', free: true, description: 'Motor de búsqueda con IA que proporciona respuestas precisas.', url: 'https://www.perplexity.ai/' },
    { name: 'Qwen', category: 'chatbots', logoUrl: 'https://qwen.ai/favicon.ico', color: '#10b981', free: true, description: 'Asistente de IA potente desarrollado por Alibaba.', url: 'https://qwen.ai' },

    // 🎨 Imágenes
    { name: 'Adobe Firefly', category: 'images', logoUrl: 'https://firefly.adobe.com/favicon.ico', color: '#06b6d4', free: true, description: 'IA generativa de Adobe integrada en Creative Cloud.', url: 'https://firefly.adobe.com' },
    { name: 'BFL Playground', category: 'images', logoUrl: 'https://playground.bfl.ai/favicon.ico', color: '#06b6d4', free: true, description: 'Editor de imágenes con IA para modificar y mejorar fotos fácilmente.', url: 'https://playground.bfl.ai/image/edit' },
    { name: 'DALL-E', category: 'images', logoUrl: 'https://cdn.openai.com/API/logo-openai.svg', color: '#06b6d4', free: false, description: 'Generador de imágenes a partir de texto de OpenAI.', url: 'https://openai.com/dall-e-2' },
    { name: 'EasyEdit', category: 'images', logoUrl: 'https://www.easyedit.io/favicon.ico', color: '#06b6d4', free: true, description: 'Plataforma de edición visual para generar imágenes de productos y escenas realistas.', url: 'https://www.easyedit.io/' },
    { name: 'Flux Kontext', category: 'images', logoUrl: 'https://www.fluxpro.ai/favicon.ico', color: '#06b6d4', free: true, description: 'IA para gestión de contexto visual y edición avanzada.', url: 'https://www.fluxpro.ai/im-tools/flux-kontext' },
    { name: 'Flux1 AI (Ghibli)', category: 'images', logoUrl: 'https://flux1.ai/favicon.ico', color: '#06b6d4', free: true, description: 'Generador de imágenes al estilo Studio Ghibli con IA.', url: 'https://flux1.ai/studio-ghibli' },
    { name: 'Flux1 AI (Login)', category: 'images', logoUrl: 'https://flux1.ai/favicon.ico', color: '#06b6d4', free: true, description: 'Portal de inicio de sesión para acceder a las herramientas visuales de Flux1.', url: 'https://flux1.ai/sign-in' },
    { name: 'Ideogram', category: 'images', logoUrl: 'https://ideogram.ai/favicon.ico', color: '#06b6d4', free: true, description: 'Generador de imágenes con especialidad en texto.', url: 'https://ideogram.ai/' },
    { name: 'Leonardo AI', category: 'images', logoUrl: 'https://leonardo.ai/favicon.ico', color: '#06b6d4', free: true, description: 'Plataforma de generación de imágenes con controles avanzados.', url: 'https://leonardo.ai' },
    { name: 'Lexica', category: 'images', logoUrl: 'https://lexica.art/favicon.ico', color: '#06b6d4', free: true, description: 'Buscador y generador de imágenes con IA.', url: 'https://lexica.art/' },
    { name: 'Midjourney', category: 'images', logoUrl: 'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/midjourney.png', color: '#06b6d4', free: false, description: 'Generador de arte e imágenes de alta calidad.', url: 'https://midjourney.com' },
    { name: 'Pika', category: 'images', logoUrl: 'https://pika.art/favicon.ico', color: '#06b6d4', free: true, description: 'IA para generar animaciones e imágenes.', url: 'https://pika.art' },
    { name: 'PNGimg', category: 'images', logoUrl: 'https://pngimg.com/favicon.ico', color: '#06b6d4', free: true, description: 'Banco de imágenes PNG transparentes de uso libre.', url: 'https://pngimg.com/' },
    { name: 'PromptHero', category: 'images', logoUrl: 'https://prompthero.com/favicon.ico', color: '#06b6d4', free: true, description: 'Banco de prompts para generación de imágenes con IA.', url: 'https://prompthero.com/' },
    { name: 'Recraft', category: 'images', logoUrl: 'https://recraft.ai/favicon.ico', color: '#06b6d4', free: true, description: 'Generador de arte con edición infinita.', url: 'https://recraft.ai' },
    { name: 'RedPanda AI', category: 'images', logoUrl: 'https://redpandaai.com/favicon.ico', color: '#06b6d4', free: true, description: 'Generador de imágenes con IA.', url: 'https://redpandaai.com/tools/ai-image-generator' },
    { name: 'Remove Photos', category: 'images', logoUrl: 'https://remove.photos/favicon.ico', color: '#06b6d4', free: true, description: 'Elimina fondos de fotos automáticamente con IA.', url: 'https://remove.photos/es/' },
    { name: 'SeaArt AI', category: 'images', logoUrl: 'https://seaart.ai/favicon.ico', color: '#06b6d4', free: true, description: 'Plataforma gratuita de generación de arte con IA.', url: 'https://seaart.ai' },
    { name: 'Stable Diffusion', category: 'images', logoUrl: 'https://stability.ai/favicon.ico', color: '#06b6d4', free: true, description: 'Modelo de generación de imágenes de código abierto.', url: 'https://stability.ai' },
    { name: 'Whisk (Google FX)', category: 'images', logoUrl: 'https://labs.google/favicon.ico', color: '#06b6d4', free: true, description: 'Herramienta experimental de Google para transformar imágenes en visuales interactivos.', url: 'https://labs.google/fx/es-419/tools/whisk' },



    // 📊 Presentaciones
    { name: 'Beautiful.AI', category: 'presentations', logoUrl: 'https://beautiful.ai/favicon.ico', color: '#0891b2', free: false, description: 'Presentaciones inteligentes con diseño automático.', url: 'https://beautiful.ai' },
    { name: 'FlipbookPDF', category: 'presentations', logoUrl: 'https://www.flipbookpdf.net/favicon.ico', color: '#0891b2', free: true, description: 'Convierte archivos PDF en flipbooks interactivos para presentaciones online.', url: 'https://www.flipbookpdf.net/es/' },
    { name: 'Gamma', category: 'presentations', logoUrl: 'https://gamma.app/favicon.ico', color: '#0891b2', free: true, description: 'Creador de presentaciones con IA desde texto.', url: 'https://gamma.app' },
    { name: 'Slides AI', category: 'presentations', logoUrl: 'https://slidesai.io/favicon.ico', color: '#0891b2', free: true, description: 'Generador automático de presentaciones.', url: 'https://slidesai.io' },
    { name: 'Slidesgo', category: 'presentations', logoUrl: 'https://slidesgo.com/favicon.ico', color: '#0891b2', free: true, description: 'Plantillas gratuitas para PowerPoint y Google Slides.', url: 'https://slidesgo.com' },
    { name: 'Tome', category: 'presentations', logoUrl: 'https://tome.app/favicon.ico', color: '#0891b2', free: true, description: 'Narrativas interactivas y presentaciones con IA.', url: 'https://tome.app' },

    // 🎥 Video y Animación
    { name: 'DreamActor-M1', category: 'video', logoUrl: 'https://dreamactor.ai/favicon.ico', color: '#4f46e5', free: true, description: 'Animación de imágenes humanas con IA.', url: 'https://dreamactor.ai' },
    { name: 'Fliki', category: 'video', logoUrl: 'https://fliki.ai/favicon.ico', color: '#4f46e5', free: true, description: 'Creador de videos con voces de IA y avatares.', url: 'https://fliki.ai' },
    { name: 'HeyGen', category: 'video', logoUrl: 'https://heygen.com/favicon.ico', color: '#4f46e5', free: false, description: 'Creador de videos con avatares de IA.', url: 'https://heygen.com' },
    { name: 'LumaLabs', category: 'video', logoUrl: 'https://lumalabs.ai/favicon.ico', color: '#4f46e5', free: true, description: 'Captura 3D y generación de videos realistas.', url: 'https://lumalabs.ai' },
    { name: 'Pika Labs', category: 'video', logoUrl: 'https://pika.art/favicon.ico', color: '#4f46e5', free: true, description: 'Generador de videos a partir de texto e imágenes.', url: 'https://pika.art' },
    { name: 'RunwayML', category: 'video', logoUrl: 'https://runwayml.com/favicon.ico', color: '#4f46e5', free: true, description: 'Suite completa de herramientas de video con IA.', url: 'https://runwayml.com' },
    { name: 'Syllaby.io', category: 'video', logoUrl: 'https://syllaby.io/favicon.ico', color: '#4f46e5', free: true, description: 'Herramienta para crear videos sin rostro con IA.', url: 'https://syllaby.io' },
    { name: 'VEED', category: 'video', logoUrl: 'https://veed.io/favicon.ico', color: '#4f46e5', free: true, description: 'Editor de videos online gratuito.', url: 'https://veed.io' },
    { name: 'WAN AI', category: 'video', logoUrl: 'https://videomaker.me/favicon.ico', color: '#4f46e5', free: true, description: 'Herramienta de generación de videos con IA.', url: 'https://videomaker.me/es/features/wan-ai' },
    { name: 'Wan2.1', category: 'video', logoUrl: 'https://wan2.1.ai/favicon.ico', color: '#4f46e5', free: true, description: 'Generador gratuito de videos con IA.', url: 'https://wan.video/wanxiang/videoCreation' },

    // 🎵 Audio
    { name: '123Apps', category: 'audio', logoUrl: 'https://123apps.com/favicon.ico', color: '#ec4899', free: true, description: 'Suite de herramientas para audio y video online.', url: 'https://123apps.com/es/' },
    { name: 'AI Studios', category: 'audio', logoUrl: 'https://app.aistudios.com/favicon.ico', color: '#ec4899', free: true, description: 'Generación de voz e imagen con avatares realistas.', url: 'https://app.aistudios.com/dashboard' },
    { name: 'ElevenLabs', category: 'audio', logoUrl: 'https://elevenlabs.io/favicon.ico', color: '#ec4899', free: true, description: 'Síntesis de voz realista con IA.', url: 'https://elevenlabs.io' },
    { name: 'HookSounds', category: 'audio', logoUrl: 'https://www.hooksounds.com/favicon.ico', color: '#ec4899', free: false, description: 'Música libre de derechos para tus proyectos.', url: 'https://www.hooksounds.com/es/royalty-free-music/' },
    { name: 'MiniMax Audio', category: 'audio', logoUrl: 'https://www.minimax.io/favicon.ico', color: '#ec4899', free: true, description: 'Plataforma de audio basada en IA para generación avanzada de voz.', url: 'https://www.minimax.io/audio' },
    { name: 'Murf', category: 'audio', logoUrl: 'https://murf.ai/favicon.ico', color: '#ec4899', free: false, description: 'Generador de voces profesionales para contenido.', url: 'https://murf.ai' },
    { name: 'Narakeet', category: 'audio', logoUrl: 'https://www.narakeet.com/favicon.ico', color: '#ec4899', free: true, description: 'Conversión de texto a voz con voces naturales en múltiples idiomas.', url: 'https://www.narakeet.com/app/text-to-audio/?projectId=c89e8e47-e976-4549-a947-447a0ed7e9cb' },
    { name: 'Riffusion', category: 'audio', logoUrl: 'https://riffusion.com/favicon.ico', color: '#ec4899', free: true, description: 'Generador de sonidos musicales basado en difusión.', url: 'https://riffusion.com' },
    { name: 'Speechify', category: 'audio', logoUrl: 'https://speechify.com/favicon.ico', color: '#ec4899', free: true, description: 'Convertidor de texto a voz de alta calidad.', url: 'https://speechify.com' },
    { name: 'Suno', category: 'audio', logoUrl: 'https://suno.ai/favicon.ico', color: '#ec4899', free: true, description: 'Generador de música completa con IA.', url: 'https://suno.ai' },
    { name: 'Udio', category: 'audio', logoUrl: 'https://udio.com/favicon.ico', color: '#ec4899', free: true, description: 'Plataforma de generación musical con IA.', url: 'https://udio.com' },
    { name: 'Zonos', category: 'audio', logoUrl: 'https://zonos.live/favicon.ico', color: '#ec4899', free: true, description: 'Plataforma para creación de música y beats con IA.', url: 'https://zonos.live/' },



    // 📚 Educación
    { name: 'Eduaide', category: 'education', logoUrl: 'https://www.eduaide.ai/favicon.ico', color: '#f22828', free: true, description: 'Asistente de IA para educadores.', url: 'https://www.eduaide.ai/' },
    { name: 'Eduprompts', category: 'education', logoUrl: 'https://view.genially.com/favicon.ico', color: '#f22828', free: true, description: 'Prompts educativos para usar con IA.', url: 'https://view.genially.com/66672ac99a3055001534989e/interactive-content-eduprompts' },
    { name: 'Grammarly', category: 'education', logoUrl: 'https://static.grammarly.com/assets/files/efe57d016d9efff36da7884c193b646b/favicon.svg', color: '#f22828', free: true, description: 'Asistente de escritura con corrección inteligente.', url: 'https://grammarly.com' },
    { name: 'Khan Academy', category: 'education', logoUrl: 'https://cdn.kastatic.org/images/favicon.ico', color: '#f22828', free: true, description: 'Plataforma educativa con tutor de IA Khanmigo.', url: 'https://khanacademy.org' },
    { name: 'Quizlet', category: 'education', logoUrl: 'https://quizlet.com/favicon.ico', color: '#f22828', free: true, description: 'Plataforma de estudio con IA para flashcards.', url: 'https://quizlet.com' },
    { name: 'Socratic', category: 'education', logoUrl: 'https://socratic.org/favicon.ico', color: '#f22828', free: true, description: 'Asistente de tareas escolares de Google.', url: 'https://socratic.org' },
    { name: 'StudyX', category: 'education', logoUrl: 'https://studyx.ai/favicon.ico', color: '#f22828', free: true, description: 'Ayuda escolar con IA.', url: 'https://studyx.ai' },
    { name: 'Teachy', category: 'education', logoUrl: 'https://www.teachy.app/favicon.ico', color: '#f22828', free: true, description: 'Plataforma educativa con IA para profesores.', url: 'https://www.teachy.app/es' },
    { name: 'Wolfram Alpha', category: 'education', logoUrl: 'https://www.wolframalpha.com/favicon.ico', color: '#f22828', free: true, description: 'Motor computacional para matemáticas y ciencias.', url: 'https://wolframalpha.com' },


    // 🌐 Otros
    { name: 'AI Findy', category: 'others', logoUrl: 'https://aifindy.com/favicon.ico', color: '#a8a29e', free: true, description: 'Directorio de herramientas de IA.', url: 'https://aifindy.com/' },
    { name: 'Futurepedia', category: 'others', logoUrl: 'https://futurepedia.io/favicon.ico', color: '#a8a29e', free: true, description: 'Directorio de herramientas de IA.', url: 'https://futurepedia.io' },
    { name: 'Temp Mail', category: 'others', logoUrl: 'https://temp-mail.io/favicon.ico', color: '#a8a29e', free: true, description: 'Correo temporal desechable.', url: 'https://temp-mail.io' },
    { name: 'Toolify.ai', category: 'others', logoUrl: 'https://www.toolify.ai/favicon.ico', color: '#a8a29e', free: true, description: 'Directorio con +7,000 herramientas de IA, actualizado diariamente.', url: 'https://www.toolify.ai/' },
    { name: 'Venice AI', category: 'others', logoUrl: 'https://venice.ai/favicon.ico', color: '#a8a29e', free: true, description: 'IA privada y sin censura.', url: 'https://venice.ai' }
];

function renderApps(appsToRender = apps) {
    const grid = document.getElementById('appsGrid');
    grid.innerHTML = '';
    appsToRender.forEach(app => {
        const appCard = document.createElement('div');
        appCard.className = 'app-card';
        appCard.style.background = `linear-gradient(135deg, ${app.color} 0%, ${adjustColor(app.color, -20)} 100%)`;
        appCard.dataset.category = app.category;
        appCard.innerHTML = `
            <div class="app-icon">
                <img src="${app.logoUrl}" alt="${app.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <i class="fas fa-robot" style="display: none; color: white; font-size: 1.2rem;"></i>
            </div>
            <div class="app-name">${app.name}</div>
            ${app.free ? '<div class="badge-free">Gratis</div>' : '<div class="badge-premium">Premium</div>'}
        `;
        appCard.addEventListener('click', () => showAppModal(app));
        grid.appendChild(appCard);
    });
}

function adjustColor(color, amount) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * amount);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

function showAppModal(app) {
    document.getElementById('modalTitle').textContent = app.name;
    document.getElementById('modalBody').innerHTML = `
        <div class="d-flex align-items-center mb-3">
            <div class="me-3" style="width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 12px; background: ${app.color};">
                <img src="${app.logoUrl}" alt="${app.name}" style="width: 32px; height: 32px; border-radius: 8px; object-fit: contain;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <i class="fas fa-robot" style="display: none; color: white; font-size: 1.5rem;"></i>
            </div>
            <div>
                <h6 class="mb-1">${app.name}</h6>
                <span class="badge ${app.free ? 'bg-success' : 'bg-warning'}">${app.free ? 'Gratis' : 'Premium'}</span>
            </div>
        </div>
        <p>${app.description}</p>
        <div class="mt-3">
            <strong>Categoría:</strong> ${getCategoryName(app.category)}
        </div>
    `;
    document.getElementById('modalVisitBtn').href = app.url;
    const modal = new bootstrap.Modal(document.getElementById('appModal'));
    modal.show();
}

function getCategoryName(category) {
    const categories = {
        'chatbots': 'Chatbots y Texto',
        'images': 'Imágenes',
        'presentations': 'Presentaciones',
        'video': 'Video y Animación',
        'audio': 'Audio',
        'education': 'Educación',
        'others': 'Otras herramientas de IA'
    };
    return categories[category] || category;
}

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.dataset.category;
        const filteredApps = category === 'all' ? apps : apps.filter(app => app.category === category);
        renderApps(filteredApps);
    });
});


const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');

// Función de búsqueda
searchInput.addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    clearSearchBtn.classList.toggle('d-none', searchTerm === '');

    if (searchTerm === '') {
        renderApps(); // Muestra todas las apps si no hay búsqueda
        return;
    }

    const filteredApps = apps.filter(app =>
        app.name.toLowerCase().includes(searchTerm) ||
        app.description.toLowerCase().includes(searchTerm) ||
        app.category.toLowerCase().includes(searchTerm)
    );
    renderApps(filteredApps);
});

// Botón para limpiar búsqueda
clearSearchBtn.addEventListener('click', () => {
    searchInput.value = ''; // Limpia el input
    clearSearchBtn.classList.add('d-none'); // Oculta el botón
    renderApps(); // Restablece la lista completa
});


// Initialize the app
renderApps();

// Add some animation on scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.app-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        } else {
            card.style.opacity = '0.7';
        }
    });
});

// Add hover sound effect (optional)
document.querySelectorAll('.app-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px) scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});