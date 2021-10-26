// assets/include-html.js

document.addEventListener('DOMContentLoaded', e =>{

  const includeHTML = (el, url) => {
    const xhr = new XMLHttpRequest;

    xhr.addEventListener('readystatechange', e => {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        let html = xhr.responseText;
        el.outerHTML = html;

      } else {
        let message = xhr.statusText || 'Ocurro un error en la carga del data-include';
        el.outerHTML = `<p><b>Error ${xhr.status}: ${message}</b></p>`;

      }
    })

    xhr.open('GET', url);
    xhr.setRequestHeader("Content-type", "text/HTML, charset=utf-8")
    xhr.send();
  }

  document
    .querySelectorAll('[data-include]')
    .forEach( el => includeHTML (el, el.getAttribute('data-include')))
});
