// DEMONSTRAÇÃO: personalize o número de WhatsApp e os dados da panificadora antes de publicar.
const WHATSAPP_NUMBER = '5517999999999'; // Exemplo: 55 + DDD + número, somente dígitos.
const DEFAULT_MESSAGE = 'Olá! Gostaria de conhecer os produtos da panificadora.';

function configureWhatsAppLinks() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
  document.querySelectorAll('.whatsapp-link').forEach((link) => {
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
}

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  menuToggle.textContent = isOpen ? '×' : '☰';
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    menuToggle.textContent = '☰';
  });
});

configureWhatsAppLinks();
