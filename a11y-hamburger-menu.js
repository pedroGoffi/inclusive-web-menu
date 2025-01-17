// Função para alternar o menu de acessibilidade
function toggleA11yMenu() {
    const menu = document.getElementById('a11y-menu-options');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// Função para alterar contraste
function changeContrast() {
    document.body.classList.toggle('high-contrast');
}

// Função para aumentar o tamanho do texto
function increaseTextSize() {
    let currentSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentSize + 2) + 'px';
}

// Função para diminuir o tamanho do texto
function decreaseTextSize() {
    let currentSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentSize - 2) + 'px';
}

// Função para aumentar o espaçamento do texto
function increaseTextSpacing() {
    document.body.classList.add('high-spacing');
}

// Função para diminuir o espaçamento do texto
function decreaseTextSpacing() {
    document.body.classList.remove('high-spacing');
}

// Função para restaurar as configurações padrão
function resetSettings() {
    document.body.classList.remove('high-contrast');
    document.body.classList.remove('high-spacing');
    document.body.style.fontSize = '16px'; // Tamanho padrão
    document.body.style.zoom = 1; // Reset zoom
    document.body.classList.remove('no-animation');
    document.body.style.fontFamily = 'Arial, sans-serif'; // Font default
}

// Função para ativar/desativar leitura de texto (Text-to-Speech)
let speechSynthesisEnabled = false;
function toggleTextToSpeech() {
    speechSynthesisEnabled = !speechSynthesisEnabled;
    if (speechSynthesisEnabled) {
        const text = document.body.innerText;
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
    } else {
        window.speechSynthesis.cancel(); // Stop reading
    }
}

// Função para aumentar o zoom da página
function zoomIn() {
    document.body.style.zoom = 1.2;
}

// Função para diminuir o zoom da página
function zoomOut() {
    document.body.style.zoom = 0.8;
}

// Função para habilitar/desabilitar animações
function toggleAnimations() {
    document.body.classList.toggle('no-animation');
}

// Função para habilitar um modo de leitura simplificada para leitores de tela
function toggleScreenReaderMode() {
    const content = document.querySelector('.main-content');
    content.classList.toggle('screen-reader-friendly');
}

// Função para trocar a fonte para um estilo amigável para dislexia
function changeFont() {
    const currentFont = document.body.style.fontFamily;
    document.body.style.fontFamily = (currentFont === 'Dyslexie, sans-serif') ? 'Arial, sans-serif' : 'Dyslexie, sans-serif';
}

// Função para destacar o foco no elemento
function highlightFocus() {
    document.body.classList.toggle('focus-highlight');
}
