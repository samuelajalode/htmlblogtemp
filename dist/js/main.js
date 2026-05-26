$(document).ready(function(){
    $('.banner-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    });
  });

  const faq = document.querySelector(".faq");

  faq.addEventListener("click", () => {
    faq.classList.toggle("active")
  });

  const backdrop = document.getElementById('backdrop');

  function openModal() {
    backdrop.classList.add('active');
  }

  function closeModal() {
    backdrop.classList.remove('active');
  }

  function handleLogin(e) {
    e.preventDefault();
    alert('Login submitted!');
    closeModal();
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
  