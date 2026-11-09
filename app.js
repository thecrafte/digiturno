
const ICONS = {
  ambulance:'<path d="M10 10H6"/><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"/><path d="M8 8v4"/><path d="M9 18h6"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  scan:'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M12 7v10"/><path d="M8 9h8"/><path d="M8 12h8"/><path d="M9 15h6"/>',
  user:'<circle cx="12" cy="7" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  stethoscope:'<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',
  flask:'<path d="M9 3h6"/><path d="M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3"/><path d="M7 15h10"/>',
  accessibility:'<circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="M4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/>',
  ticket:'<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/>',
  headset:'<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
  monitor:'<rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>',
  layout:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/>',
  home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>',
  megaphone:'<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
  check:'<path d="M20 6 9 17l-5-5"/>',
  play:'<path d="m6 3 14 9-14 9V3z"/>',
  x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  swap:'<path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/>',
  printer:'<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
  volume:'<path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
  mute:'<path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="m23 9-6 6"/><path d="m17 9 6 6"/>',
  refresh:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
  plus:'<path d="M12 5v14"/><path d="M5 12h14"/>',
  expand:'<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',
  logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
  clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  star:'<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  arrow:'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  tab:'<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'
};
const ic = (n, cls='') => `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]||''}</svg>`;


const AREAS = [
  {id:1, nombre:'Urgencias',              prefijo:'URG', color:'#e74c3c', icono:'ambulance',     ventanillas:3},
  {id:2, nombre:'Radiología',             prefijo:'RAD', color:'#8e44ad', icono:'scan',          ventanillas:3},
  {id:3, nombre:'Consulta Externa',       prefijo:'CEX', color:'#2e86de', icono:'user',          ventanillas:2},
  {id:4, nombre:'Consulta Especialistas', prefijo:'ESP', color:'#16a085', icono:'stethoscope',   ventanillas:2},
  {id:5, nombre:'Laboratorio',            prefijo:'LAB', color:'#e67e22', icono:'flask',         ventanillas:2},
  {id:6, nombre:'Rehabilitación',         prefijo:'REH', color:'#27ae60', icono:'accessibility', ventanillas:1},
];
const area = id => AREAS.find(a => a.id === +id);

const KEY = 'digiturno-demo-v1';
const hoy = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; };
const nuevoEstado = () => ({fecha:hoy(), seq:0, contadores:{}, turnos:[]});
function cargar(){
  try { const s = JSON.parse(localStorage.getItem(KEY)); if (s && s.fecha === hoy()) return s; } catch(e){}
  return nuevoEstado(); // cada día la numeración arranca de cero
}
function guardar(){
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch(e){}
  render();
}
const ses = {
  get(k){ try { return sessionStorage.getItem(k); } catch(e){ return null; } },
  set(k,v){ try { v == null ? sessionStorage.removeItem(k) : sessionStorage.setItem(k,v); } catch(e){} }
};
let state = cargar();
window.addEventListener('storage', e => { if (e.key === KEY) { state = cargar(); render(); } });

/*Regla */
const ACTIVOS = ['llamado','atencion'];
function crearTurno(areaId, tipo, creado = Date.now()){
  const a = area(areaId);
  const n = (state.contadores[areaId] || 0) + 1;
  state.contadores[areaId] = n;
  const t = {id:++state.seq, numero:`${a.prefijo}-${String(n).padStart(3,'0')}`, areaId:a.id, tipo,
             estado:'espera', ventanilla:null, llamados:0, creado};
  state.turnos.push(t);
  return t;
}

const cola = areaId => state.turnos.filter(t => t.areaId === +areaId && t.estado === 'espera')
  .sort((a,b) => (a.tipo === b.tipo ? 0 : a.tipo === 'preferencial' ? -1 : 1) || a.creado - b.creado);
const actualDe = (areaId, num) => state.turnos.find(t => t.areaId === +areaId && t.ventanilla === +num && ACTIVOS.includes(t.estado));
const turno = id => state.turnos.find(t => t.id === +id);
function stats(areaId){
  const ts = state.turnos.filter(t => !areaId || t.areaId === +areaId);
  const llamados = ts.filter(t => t.llamadoEn);
  const prom = llamados.length ? llamados.reduce((s,t) => s + (t.primerLlamado - t.creado), 0) / llamados.length : 0;
  return {
    espera: ts.filter(t => t.estado === 'espera').length,
    atendidos: ts.filter(t => t.estado === 'finalizado').length,
    noPresento: ts.filter(t => t.estado === 'no_presento').length,
    enCurso: ts.filter(t => ACTIVOS.includes(t.estado)).length,
    total: ts.length,
    prom: Math.round(prom / 60000)
  };
}
function marcarLlamado(t, num){
  const now = Date.now();
  t.estado = 'llamado'; t.ventanilla = +num; t.llamados++; t.llamadoEn = now;
  if (!t.primerLlamado) t.primerLlamado = now;
}

const hace = ts => { const m = Math.floor((Date.now() - ts) / 60000); if (m < 1) return 'ahora'; if (m < 60) return `${m} min`; return `${Math.floor(m/60)} h ${m%60} min`; };
const hora = ts => new Date(ts).toLocaleTimeString('es-CO', {hour:'2-digit', minute:'2-digit'});
let toastT;
function toast(msg){ const el = document.getElementById('toast'); el.textContent = msg; el.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('show'), 2600); }
let modalT;
function modal(html){ clearTimeout(modalT); const m = document.getElementById('modal'); m.innerHTML = `<div class="modal" role="dialog" aria-modal="true">${html}</div>`; m.hidden = false; }
function cerrarModal(){ clearTimeout(modalT); const m = document.getElementById('modal'); m.hidden = true; m.innerHTML = ''; }
document.getElementById('modal').addEventListener('click', e => { if (e.target.id === 'modal') cerrarModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrarModal(); });

/* Naevgación */
const RUTAS = [
  ['inicio','home','Inicio'], ['totem','ticket','Tótem'], ['recepcion','headset','Recepción'],
  ['tv','monitor','Pantalla TV'], ['todo','layout','Todo junto']
];
let ruta = 'inicio';
function leerRuta(){
  const r = location.hash.slice(1);
  ruta = RUTAS.some(x => x[0] === r) ? r : 'inicio';
  document.body.dataset.view = ruta;
  document.querySelectorAll('#tabs a').forEach(a => a.classList.toggle('on', a.dataset.r === ruta));
  render();
}
document.getElementById('tabs').innerHTML = RUTAS.map(([r,i,t]) => `<a href="#${r}" data-r="${r}">${ic(i)}<span>${t}</span></a>`).join('');
window.addEventListener('hashchange', leerRuta);

function vInicio(){
  const s = stats();
  return `
  <div class="hero">
    <div>
      <h1>Gestión de turnos para la Clínica Boyacá</h1>
      <p>Prototipo interactivo: el paciente saca su turno en el tótem, la recepcionista lo llama desde su ventanilla y la pantalla de la sala lo muestra y lo anuncia por voz.</p>
      <div class="acts">
        <a class="btn lg" href="#todo" style="color:var(--blue)">${ic('layout')} Ver todo junto</a>
        <button class="btn lg ghost" data-act="ejemplo">${ic('plus')} Cargar turnos de ejemplo</button>
      </div>
    </div>
    <div class="hero-stats">
      <div><b>${s.total}</b><span>Turnos de hoy</span></div>
      <div><b>${s.espera}</b><span>En espera</span></div>
      <div><b>${s.atendidos}</b><span>Atendidos</span></div>
      <div><b>${s.prom} min</b><span>Espera promedio</span></div>
    </div>
  </div>
  <div class="steps">
    <a class="card step" href="#totem"><div class="n">${ic('ticket')}</div><h3>1. Tótem</h3><p>El paciente elige el servicio y si es atención preferencial. Recibe su ticket con el número.</p></a>
    <a class="card step" href="#recepcion"><div class="n">${ic('headset')}</div><h3>2. Recepción</h3><p>Cada ventanilla llama al siguiente, lo atiende, lo vuelve a llamar, lo transfiere o lo marca como no presentado.</p></a>
    <a class="card step" href="#tv"><div class="n">${ic('monitor')}</div><h3>3. Pantalla TV</h3><p>Muestra el turno llamado y la ventanilla, con sonido y voz: “Turno U R G, 0 0 5…”.</p></a>
  </div>
  <div class="card tips">
    ${ic('info')}
    <div>
      <b>Cómo probarlo</b>
      <ul>
        <li>Abre la <a href="#tv" target="_blank">Pantalla TV en otra pestaña</a> (o en otro monitor) y deja la Recepción aquí: se sincronizan al instante.</li>
        <li>Abre más pestañas de Recepción para simular varias ventanillas atendiendo al mismo tiempo.</li>
        <li>Toca la pantalla TV una vez para que el navegador permita el sonido y la voz.</li>
        <li>Los datos se guardan solo en este navegador y se reinician cada día. <button class="btn" style="padding:4px 10px;font-size:13px;margin-left:4px" data-act="reiniciar">${ic('refresh')} Reiniciar demo</button></li>
      </ul>
    </div>
  </div>`;
}

function vTotem(){
  return `
  <div class="totem-head">
    <h2>Bienvenido</h2>
    <p>Toque el servicio al que desea ingresar</p>
  </div>
  <div class="areas">
    ${AREAS.map(a => {
      const n = cola(a.id).length;
      return `<button class="area" style="--c:${a.color}" data-act="totemArea" data-id="${a.id}">
        <div class="ico">${ic(a.icono)}</div>
        <b>${a.nombre}</b>
        <small>${n === 0 ? 'Sin espera' : n === 1 ? '1 persona en espera' : n + ' personas en espera'}</small>
      </button>`;
    }).join('')}
  </div>`;
}

let loginArea = 1;
function sesion(){ const v = ses.get('dt-ventanilla'); if (!v) return null; const [a,n] = v.split(':').map(Number); return area(a) && n <= area(a).ventanillas ? {areaId:a, num:n} : null; }

function vRecepcion(){
  const s = sesion();
  if (!s){
    const a = area(loginArea);
    return `
    <div class="card login">
      <h2 class="title">Ingreso de recepción</h2>
      <p class="muted">En el sistema real cada usuario entra con su clave y su ventanilla ya viene asignada. Para la demo, elija una.</p>
      <div class="seg">${AREAS.map(x => `<button class="${x.id === a.id ? 'on' : ''}" data-act="recArea" data-id="${x.id}">${x.nombre}</button>`).join('')}</div>
      <div class="vent-list">
        ${Array.from({length:a.ventanillas}, (_,i) => i+1).map(n => {
          const cur = actualDe(a.id, n);
          return `<button class="vent" data-act="recEntrar" data-a="${a.id}" data-n="${n}">
            <b>Ventanilla ${n}</b><small>${cur ? 'Atendiendo ' + cur.numero : 'Disponible'}</small></button>`;
        }).join('')}
      </div>
    </div>`;
  }
  const a = area(s.areaId), cur = actualDe(s.areaId, s.num), q = cola(s.areaId), st = stats(s.areaId);
  let actual;
  if (!cur){
    actual = `<div class="empty">${ic('users')}<div>Sin turno en curso</div></div>
      <button class="btn primary lg block" data-act="llamar" ${q.length ? '' : 'disabled'}>${ic('megaphone')} ${q.length ? 'Llamar siguiente · ' + q[0].numero : 'No hay turnos en espera'}</button>`;
  } else {
    const chips = `<span class="chip ${cur.estado === 'atencion' ? 'ok' : 'blue'}">${cur.estado === 'atencion' ? 'En atención desde ' + hora(cur.atendidoEn) : 'Llamado' + (cur.llamados > 1 ? ' · ' + cur.llamados + ' veces' : '')}</span>
      ${cur.tipo === 'preferencial' ? `<span class="chip pref">${ic('star')} Preferencial</span>` : ''}
      <span class="chip">${ic('clock')} Llegó ${hora(cur.creado)}</span>`;
    const acts = cur.estado === 'llamado'
      ? `<button class="btn ok lg wide" data-act="atender">${ic('play')} Iniciar atención</button>
         <button class="btn" data-act="rellamar">${ic('repeat')} Volver a llamar</button>
         <button class="btn" data-act="transferir">${ic('swap')} Transferir</button>
         <button class="btn danger wide" data-act="noPresento">${ic('x')} No se presentó</button>`
      : `<button class="btn primary lg wide" data-act="finalizar">${ic('check')} Finalizar atención</button>
         <button class="btn wide" data-act="transferir">${ic('swap')} Transferir a otra ventanilla</button>`;
    actual = `<div class="lbl">Turno actual</div><div class="big num">${cur.numero}</div><div class="meta">${chips}</div><div class="acts">${acts}</div>`;
  }
  return `
  <div class="rec-top">
    <div class="rec-who" style="--c:${a.color}">
      <div class="ico">${ic(a.icono)}</div>
      <div><b>${a.nombre} · Ventanilla ${s.num}</b><span class="muted" style="font-size:13px">Usuario demo</span></div>
    </div>
    <button class="btn" data-act="recSalir">${ic('logout')} Cambiar ventanilla</button>
  </div>
  <div class="rec-grid">
    <div>
      <div class="card actual" style="--c:${a.color}">${actual}</div>
      <div class="stats">
        <div class="card stat"><b>${st.espera}</b><span>En espera</span></div>
        <div class="card stat"><b>${st.atendidos}</b><span>Atendidos</span></div>
        <div class="card stat"><b>${st.prom}′</b><span>Espera prom.</span></div>
      </div>
    </div>
    <div class="card cola">
      <h3>Cola de ${a.nombre} <span class="chip">${q.length}</span></h3>
      ${q.length ? `<ol>${q.map((t,i) => `<li class="${i === 0 ? 'next' : ''}">
          <span class="n num">${t.numero}</span>
          ${t.tipo === 'preferencial' ? `<span class="chip pref">${ic('star')} Pref.</span>` : i === 0 ? '<span class="chip blue">Siguiente</span>' : ''}
          <span class="w">${ic('clock')} ${hace(t.creado)}</span></li>`).join('')}</ol>`
        : `<div class="empty" style="text-align:center">${ic('check')}<div>Nadie en espera</div><div style="font-size:13px;margin-top:4px">Saque turnos desde el <a href="#totem">Tótem</a>.</div></div>`}
    </div>
  </div>`;
}

function tvArea(){ return +(ses.get('dt-tv-area') || 0); }
function turnosTV(){
  const f = tvArea();
  return state.turnos.filter(t => t.llamadoEn && (!f || t.areaId === f)).sort((a,b) => b.llamadoEn - a.llamadoEn);
}
const sonidoOn = () => ses.get('dt-sonido') !== '0';
const necesitaGesto = () => sonidoOn() && navigator.userActivation && !navigator.userActivation.hasBeenActive;

function vTV(){
  const ls = turnosTV(), f = tvArea(), titulo = f ? area(f).nombre : 'Sala de espera';
  // En grande: el último llamado que sigue activo; los finalizados pasan a la lista
  const top = ls.find(t => ACTIVOS.includes(t.estado)) || ls[0];
  const main = top
    ? `<div class="tv-main ${Date.now() - top.llamadoEn < 4000 ? 'nuevo' : ''}" style="--c:${area(top.areaId).color}">
        <div class="lbl">Turno</div>
        <div class="big num">${top.numero}</div>
        <div class="dest">${ic('arrow')} Ventanilla ${top.ventanilla}</div>
        <div class="area-n">${area(top.areaId).nombre}${top.estado === 'atencion' ? ' · en atención' : ''}</div>
      </div>`
    : `<div class="tv-main vacio" style="--c:var(--blue)">${ic('monitor')}<div class="lbl">Esperando llamados…</div></div>`;
  const resto = ls.filter(t => t !== top).slice(0, 6);
  return `
  <div class="tv-box">
    <div class="tv-top">
      <div class="brand"><img src="logo.png" alt="" onerror="this.remove()"><div><strong>Clínica Boyacá</strong><span>${titulo}</span></div></div>
      <div class="tv-tools">
        <select data-change="tvArea" aria-label="Área de la pantalla">
          <option value="0">Todas las áreas</option>
          ${AREAS.map(a => `<option value="${a.id}" ${a.id === f ? 'selected' : ''}>${a.nombre}</option>`).join('')}
        </select>
        <button class="${sonidoOn() ? 'on' : ''}" data-act="sonido" title="Sonido y voz" aria-label="Sonido y voz">${ic(sonidoOn() ? 'volume' : 'mute')}</button>
        <button class="hide-sm" data-act="pantallaCompleta" title="Pantalla completa" aria-label="Pantalla completa">${ic('expand')}</button>
      </div>
      <div class="tv-clock"><b class="js-hora num"></b><span class="js-fecha"></span></div>
    </div>
    ${necesitaGesto() ? `<button class="unlock" data-act="desbloquear">${ic('volume')} Toque aquí para activar el sonido y la voz</button>` : ''}
    <div class="tv-body">
      ${main}
      <div class="tv-side">
        <h3>Últimos llamados</h3>
        ${resto.length ? resto.map(t => `<div class="tv-row" style="--c:${area(t.areaId).color}">
            <b>${t.numero}</b><span>${area(t.areaId).nombre}</span><em>Vent. ${t.ventanilla}</em></div>`).join('')
          : '<span style="color:rgba(255,255,255,.5);font-size:14px">Aún no hay más llamados.</span>'}
      </div>
    </div>
    <div class="tv-ticker"><div>Por favor esté atento al llamado de su turno · Tenga a mano su documento de identidad · Los turnos preferenciales (adultos mayores, gestantes y personas con discapacidad) se atienden primero · Gracias por su paciencia</div></div>
  </div>`;
}

function reloj(){
  const d = new Date();
  document.querySelectorAll('.js-hora').forEach(el => el.textContent = d.toLocaleTimeString('es-CO', {hour:'2-digit', minute:'2-digit', second:'2-digit'}));
  document.querySelectorAll('.js-fecha').forEach(el => el.textContent = d.toLocaleDateString('es-CO', {weekday:'long', day:'numeric', month:'long'}));
}

let voz = null, actx = null;
function elegirVoz(){
  if (!('speechSynthesis' in window)) return;
  const vs = speechSynthesis.getVoices();
  voz = ['es-CO','es-MX','es-US','es-419','es-ES'].map(l => vs.find(v => v.lang.replace('_','-') === l)).find(Boolean)
     || vs.find(v => v.lang.toLowerCase().startsWith('es')) || null;
}
if ('speechSynthesis' in window){ elegirVoz(); speechSynthesis.onvoiceschanged = elegirVoz; }

function campana(){
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    if (actx.state === 'suspended') actx.resume();
    const t0 = actx.currentTime;
    [[880,0],[659,.3]].forEach(([f,d]) => {
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = 'sine'; o.frequency.value = f;
      g.gain.setValueAtTime(.0001, t0+d);
      g.gain.exponentialRampToValueAtTime(.28, t0+d+.02);
      g.gain.exponentialRampToValueAtTime(.0001, t0+d+.7);
      o.connect(g).connect(actx.destination); o.start(t0+d); o.stop(t0+d+.75);
    });
  } catch(e){}
}
function textoAnuncio(t){
  const [p, n] = t.numero.split('-');
  return `Turno ${p.split('').join(' ')}, ${n.split('').join(' ')}. Diríjase a ${area(t.areaId).nombre}, ventanilla ${t.ventanilla}`;
}
function hablar(texto){
  if (!('speechSynthesis' in window)) return;
  const u = new SpeechSynthesisUtterance(texto);
  u.lang = voz ? voz.lang : 'es-CO'; if (voz) u.voice = voz; u.rate = .92;
  speechSynthesis.speak(u);
}
function anunciar(t){
  if (!sonidoOn()) return;
  campana();
  setTimeout(() => hablar(textoAnuncio(t)), 900);
}
const vistos = new Map();
function revisarAnuncios(){
  if (ruta !== 'tv' && ruta !== 'todo') return;
  const f = tvArea(), now = Date.now();
  state.turnos.filter(t => t.llamados).sort((a,b) => a.llamadoEn - b.llamadoEn).forEach(t => {
    if (t.llamados > (vistos.get(t.id) || 0)){
      vistos.set(t.id, t.llamados);
      if ((!f || t.areaId === f) && now - t.llamadoEn < 15000) anunciar(t);
    }
  });
}


function render(){
  document.getElementById('v-inicio').innerHTML = vInicio();
  document.getElementById('totem').innerHTML = vTotem();
  document.getElementById('recepcion').innerHTML = vRecepcion();
  document.getElementById('tv').innerHTML = vTV();
  reloj();
  revisarAnuncios();
}

/*Aciones*/

function conTurnoActual(fn){
  return () => {
    const s = sesion(); if (!s) return;
    const t = actualDe(s.areaId, s.num); if (!t) return toast('Ese turno ya no está en su ventanilla');
    fn(t, s); guardar();
  };
}
function mostrarTicket(t){
  const a = area(t.areaId), antes = cola(a.id).findIndex(x => x.id === t.id);
  modal(`
    <div class="ticket" style="--c:${a.color}">
      <img src="logo.png" alt="" onerror="this.remove()">
      <div class="lbl">Su turno</div>
      <div class="big num">${t.numero}</div>
      <div><b>${a.nombre}</b>${t.tipo === 'preferencial' ? ' · <span class="chip pref">Preferencial</span>' : ''}</div>
      <div class="det">${new Date(t.creado).toLocaleDateString('es-CO', {day:'numeric', month:'long', year:'numeric'})} · ${hora(t.creado)}</div>
      <div class="wait">${antes <= 0 ? 'Usted es el siguiente' : antes === 1 ? '1 persona antes de usted' : antes + ' personas antes de usted'}</div>
    </div>
    <div class="row">
      <button class="btn" data-act="imprimir" data-id="${t.id}">${ic('printer')} Imprimir</button>
      <button class="btn primary" data-act="cerrarModal">${ic('check')} Listo</button>
    </div>
    <div class="bar"><i></i></div>`);
  modalT = setTimeout(cerrarModal, 12000);
}

const ACT = {
  ejemplo(){
    const now = Date.now(), min = 60000;
    // Algunos ya atendidos (para las estadísticas) y algunos en curso
    [[1,'normal',58,52,40],[3,'normal',50,41,30],[5,'normal',45,37,33],[1,'preferencial',35,31,20]].forEach(([a,tp,c,l,f]) => {
      const t = crearTurno(a, tp, now - c*min);
      Object.assign(t, {estado:'finalizado', ventanilla:1, llamados:1, llamadoEn:now - l*min, primerLlamado:now - l*min, atendidoEn:now - l*min, finEn:now - f*min});
    });
    [[1,2,'normal',22,6],[2,1,'normal',18,4],[3,2,'preferencial',15,3]].forEach(([a,v,tp,c,l]) => {
      if (actualDe(a, v)) return;
      const t = crearTurno(a, tp, now - c*min);
      Object.assign(t, {estado:'atencion', ventanilla:v, llamados:1, llamadoEn:now - l*min, primerLlamado:now - l*min, atendidoEn:now - (l-1)*min});
      vistos.set(t.id, 1);
    });
    [[1,'normal',14],[1,'preferencial',9],[1,'normal',7],[1,'normal',3],[2,'normal',12],[3,'normal',10],[4,'normal',8],[5,'normal',6],[5,'preferencial',2],[6,'normal',5]]
      .forEach(([a,tp,c]) => crearTurno(a, tp, now - c*min));
    guardar(); toast('Se cargaron turnos de ejemplo');
  },
  reiniciar(){
    if (!confirm('¿Borrar todos los turnos de la demo?')) return;
    state = nuevoEstado(); vistos.clear(); guardar(); toast('Demo reiniciada');
  },
  totemArea(d){
    const a = area(d.id);
    modal(`
      <h3>${a.nombre}</h3>
      <p class="muted">¿Qué tipo de atención necesita?</p>
      <div class="opts">
        <button class="opt" data-act="totemTipo" data-id="${a.id}" data-tipo="normal">
          <span class="ico" style="color:${a.color}">${ic('user')}</span>
          <span><b>General</b><small>Atención por orden de llegada</small></span></button>
        <button class="opt" data-act="totemTipo" data-id="${a.id}" data-tipo="preferencial">
          <span class="ico" style="color:var(--warn)">${ic('star')}</span>
          <span><b>Preferencial</b><small>Adulto mayor, gestante, persona con discapacidad o con niños en brazos</small></span></button>
      </div>
      <button class="btn block" data-act="cerrarModal">Cancelar</button>`);
  },
  totemTipo(d){ const t = crearTurno(d.id, d.tipo); guardar(); mostrarTicket(t); },
  imprimir(d){
    const t = turno(d.id); if (!t) return; const a = area(t.areaId);
    document.getElementById('ticket-print').innerHTML = `<img src="logo.png" alt=""><p><b>Sociedad Clínica Boyacá</b></p><p>Su turno</p>
      <div class="big">${t.numero}</div><p><b>${a.nombre}</b>${t.tipo === 'preferencial' ? ' · Preferencial' : ''}</p>
      <p>${new Date(t.creado).toLocaleString('es-CO')}</p><p>Esté atento a la pantalla</p>`;
    clearTimeout(modalT);
    window.print();
  },
  cerrarModal,
  recArea(d){ loginArea = +d.id; render(); },
  recEntrar(d){ ses.set('dt-ventanilla', `${d.a}:${d.n}`); render(); toast(`Ingresó a ${area(d.a).nombre} · Ventanilla ${d.n}`); },
  recSalir(){ const s = sesion(); if (s) loginArea = s.areaId; ses.set('dt-ventanilla', null); render(); },
  llamar(){
    const s = sesion(); if (!s) return;
    if (actualDe(s.areaId, s.num)) return toast('Termine el turno actual antes de llamar otro');
    const t = cola(s.areaId)[0]; if (!t) return toast('No hay turnos en espera');
    marcarLlamado(t, s.num); guardar(); toast(`Llamando ${t.numero}`);
  },
  rellamar: conTurnoActual(t => { t.llamados++; t.llamadoEn = Date.now(); toast(`Volviendo a llamar ${t.numero}`); }),
  atender: conTurnoActual(t => { t.estado = 'atencion'; t.atendidoEn = Date.now(); }),
  finalizar: conTurnoActual(t => { t.estado = 'finalizado'; t.finEn = Date.now(); toast(`${t.numero} finalizado`); }),
  noPresento: conTurnoActual(t => { t.estado = 'no_presento'; t.finEn = Date.now(); toast(`${t.numero} marcado como no presentado`); }),
  transferir(){
    const s = sesion(); if (!s) return;
    const t = actualDe(s.areaId, s.num), a = area(s.areaId);
    const otras = Array.from({length:a.ventanillas}, (_,i) => i+1).filter(n => n !== s.num);
    modal(`
      <h3>Transferir ${t.numero}</h3>
      <p class="muted">Se transfiere dentro de ${a.nombre}. La pantalla lo vuelve a anunciar con la nueva ventanilla.</p>
      <div class="opts">
        ${otras.length ? otras.map(n => { const ocup = actualDe(a.id, n); return `
          <button class="opt" data-act="transferirA" data-n="${n}" ${ocup ? 'disabled' : ''}>
            <span class="ico" style="color:${a.color}">${ic('headset')}</span>
            <span><b>Ventanilla ${n}</b><small>${ocup ? 'Ocupada con ' + ocup.numero : 'Disponible'}</small></span></button>`; }).join('')
          : '<p class="muted">Esta área tiene una sola ventanilla.</p>'}
      </div>
      <button class="btn block" data-act="cerrarModal">Cancelar</button>`);
  },
  transferirA(d){
    const s = sesion(); const t = s && actualDe(s.areaId, s.num);
    if (!t) return cerrarModal();
    if (actualDe(s.areaId, d.n)) return toast('Esa ventanilla ya está ocupada');
    marcarLlamado(t, d.n); cerrarModal(); guardar(); toast(`${t.numero} transferido a la ventanilla ${d.n}`);
  },
  sonido(){
    ses.set('dt-sonido', sonidoOn() ? '0' : '1'); render();
    if (sonidoOn()){ campana(); setTimeout(() => hablar('Sonido activado'), 700); }
  },
  desbloquear(){ campana(); setTimeout(() => hablar('Sonido activado'), 700); render(); },
  pantallaCompleta(){
    const el = document.getElementById('v-tv');
    if (document.fullscreenElement) document.exitFullscreen();
    else if (el.requestFullscreen) el.requestFullscreen().catch(() => {});
  }
};

document.addEventListener('click', e => {
  const b = e.target.closest('[data-act]');
  if (b && ACT[b.dataset.act]) { e.preventDefault(); ACT[b.dataset.act](b.dataset, b); }
});
document.addEventListener('change', e => {
  if (e.target.dataset.change === 'tvArea'){ ses.set('dt-tv-area', e.target.value === '0' ? null : e.target.value); render(); }
});
// El primer toque en la página desbloquea el audio: ocultar el aviso
document.addEventListener('pointerdown', function primero(){
  document.removeEventListener('pointerdown', primero);
  if (document.querySelector('.unlock')) setTimeout(render, 0);
});

leerRuta();
setInterval(reloj, 1000);
setInterval(render, 20000); 