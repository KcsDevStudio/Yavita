 document.querySelectorAll('.faq-question').forEach(question => {
      question.addEventListener('click', () => {
        const currentlyActive = document.querySelector('.faq-question.active');
        if (currentlyActive && currentlyActive !== question) {
          currentlyActive.classList.remove('active');
          currentlyActive.nextElementSibling.classList.remove('open');
        }

        question.classList.toggle('active');
        question.nextElementSibling.classList.toggle('open');
      });
    });