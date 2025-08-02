document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const phoneNumber = '628895355345';
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !message) {
      alert('Nama dan pesan tidak boleh kosong!');
      return;
    }

    const templateMessage = `Halo, nama saya *${name}*. Saya ingin bertanya tentang: ${message}`;
    const encodedMessage = encodeURIComponent(templateMessage);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  });
});
