import { series } from './Data.js';

// Referencias DOM (null-safe)
const seriesTbody = document.getElementById('series');
const promedioDiv = document.getElementById('promedio');

// Render y cálculo
if (seriesTbody) renderSeriesInTable(series);
if (promedioDiv) promedioDiv.textContent = 'Promedio de temporadas: ' + calcularPromedioTemporadas(series);

function renderSeriesInTable(series) {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < series.length; i++) {
    const s = series[i];
    const tr = document.createElement('tr');
    // Reemplazamos el enlace por un span para evitar navegación al hacer click
    tr.innerHTML =
      '<th scope="row">' + s.id + '</th>' +
      '<td><span class="serie-link" data-id="' + s.id + '" style="cursor:pointer; color: #fff;">' + s.nombre + '</span></td>' +
      '<td>' + s.canal + '</td>' +
      '<td>' + s.temporadas + '</td>';
    frag.appendChild(tr);
  }
  seriesTbody.appendChild(frag);
  // Añadir listeners a los títulos para mostrar el panel derecho
  const links = document.querySelectorAll('.serie-link');
  links.forEach(link => {
    link.addEventListener('click', (evt) => {
      const idAttr = evt.currentTarget.getAttribute('data-id');
      if (!idAttr) return;
      const id = Number(idAttr);
      const found = series.find(s => s.id === id);
      if (found) renderDetail(found);
    });
  });

  // Mostrar la primera serie por defecto
  if (series.length > 0) renderDetail(series[0]);
}

function renderDetail(s) {
  const detail = document.getElementById('detail');
  if (!detail) return;
  detail.innerHTML = '' +
    '<div class="card">' +
      '<img src="' + s.imagen + '" class="card-img-top" alt="' + s.nombre + '">' +
      '<div class="card-body">' +
        '<h5 class="card-title">' + s.nombre + '</h5>' +
        '<p class="card-text">' + s.sinopsis + '</p>' +
        '<p class="card-text"><strong>Canal:</strong> ' + s.canal + '<br><strong>Temporadas:</strong> ' + s.temporadas + '</p>' +
        '<a href="' + s.link + '" target="_blank">' + s.link + '</a>' +
      '</div>' +
    '</div>';
}

function calcularPromedioTemporadas(series) {
  if (!series || series.length === 0) return 0;
  const total = series.reduce((acc, s) => acc + s.temporadas, 0);
  return total / series.length;
}