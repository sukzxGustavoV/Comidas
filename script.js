// Função para ampliar a imagem
function expandImage(src) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';
 
    const img = document.createElement('img');
    img.src = src;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    modal.appendChild(img);
 
    modal.onclick = function () {
        document.body.removeChild(modal);
    };
 
    document.body.appendChild(modal);
}
 
// Função para ouvir a descrição do prato
function playDescription(description) {
    const utterance = new SpeechSynthesisUtterance(description);
    speechSynthesis.speak(utterance);
}
 
 