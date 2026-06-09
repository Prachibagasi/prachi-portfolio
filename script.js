
    // ── Accordion experience ──
    function toggleExp(idx) {
      const items = document.querySelectorAll('.exp-item');
      items.forEach((item, i) => {
        if (i === idx) {
          item.classList.toggle('open');
        } else {
          item.classList.remove('open'); // close others
        }
      });
    }

    // ── Scroll reveal ──
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
