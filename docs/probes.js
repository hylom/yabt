(function() {
  function addClass(id, className) {
    const el = document.getElementById(id);
    if (!el) {
      console.log(`invalid ID: ${id}`);
    }
    el.classList.add(className);
  }

  window.setResult = function (id, result, data) {
    if (result) {
      addClass(id, 'pass');
    } else {
      addClass(id, 'fail');
    }
  };
}).apply(this);
