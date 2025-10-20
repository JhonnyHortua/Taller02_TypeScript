import { series } from './Data.js';
import { Serie } from './Serie.js';

const seriesTbody = document.getElementById('series');
const promedioDiv = document.getElementById('promedio');

if (seriesTbody) renderSeriesInTable(series);
if (promedioDiv) promedioDiv.textContent = `Promedio de temporadas: ${calcularPromedioTemporadas(series)}`;

function renderSeriesInTable(series: Serie[]): void {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < series.length; i++) {
    const s = series[i];
    const tr = document.createElement('tr');
    tr.innerHTML = `<th scope="row">${s.id}</th>` +
      `<td><a class="serie-link" href="${s.link}" target="_blank">${s.nombre}</a></td>` +
      `<td>${s.canal}</td>` +
      `<td>${s.temporadas}</td>`;
    frag.appendChild(tr);
  }
  seriesTbody!.appendChild(frag);
}

function calcularPromedioTemporadas(series: Serie[]): number {
  if (!series || series.length === 0) return 0;
  const total = series.reduce((acc, s) => acc + s.temporadas, 0);
  return total / series.length;
}