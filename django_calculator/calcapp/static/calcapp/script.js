(function(){
  const display = document.getElementById('display');
  let expr = '';

  function updateDisplay() {
    display.textContent = expr || '0';
  }

  function safeEval(s) {
    if (!/^[0-9+\-*/(). ]*$/.test(s)) {
      throw new Error('Invalid characters');
    }
    return Function('"use strict"; return (' + s + ')')();
  }

  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const v = btn.getAttribute('data-value');
      if (v === 'C') {
        expr = '';
        updateDisplay();
        return;
      }
      if (v === 'back') {
        expr = expr.slice(0, -1);
        updateDisplay();
        return;
      }
      if (v === '=') {
        try {
          const result = safeEval(expr);
          expr = String(result);
        } catch(e) {
          expr = 'Error';
        }
        updateDisplay();
        return;
      }
      expr += v;
      updateDisplay();
    });
  });

  updateDisplay();
})();
