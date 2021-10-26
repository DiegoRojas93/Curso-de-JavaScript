const d = document,
      $main = d.querySelector('main');

const getHTML = (options) => {
  let { url, success, error } = options;

  const xhr = new XMLHttpRequest;

  xhr.addEventListener('readystatechange', e => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      let html = xhr.response
      success(html)
    } else {
      let message = xhr.responseText || 'Ocurrio un error';
      error(message)
    }
  })

  xhr.open('GET', url)
  xhr.setRequestHeader('Content-Type', 'text/html; charset=utf-8')
  xhr.send();
}

d.addEventListener('DOMContentLoaded', e => {
  getHTML({
    url: './assets/home.html',
    success: (res) => $main.innerHTML = res,
    error: (err) => $main.innerHTML = err,
  })
});

d.addEventListener('click', e => {
  if (e.target.matches('.menu a')) {
    e.preventDefault();
    getHTML({
      url: e.target.href,
      success: (res) => $main.innerHTML = res,
      error: (err) => $main.innerHTML = err,
    })
  }
})