/**
 * LÓGICA DE CONTROL (app.js)
 * Inicializa y monta los componentes en el DOM.
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. MONTAJE DE COMPONENTES BASE (Sin HOC)
  const baseBtnMount = document.getElementById('base-btn-mount');
  const baseCardMount = document.getElementById('base-card-mount');

  // Creamos el botón base e inyectamos acción de clic simple
  const baseBtn = ButtonComponent({ label: 'Botón Normal' });
  baseBtn.addEventListener('click', () => {
    console.log('[Componente Base] Clic en Botón Normal');
  });
  baseBtnMount.appendChild(baseBtn);

  // Creamos la tarjeta base e inyectamos acción de clic simple
  const baseCard = CardComponent({
    title: 'Tarjeta Normal',
    content: 'Este es un componente normal sin ningún tipo de envoltura HOC.'
  });
  baseCard.addEventListener('click', () => {
    console.log('[Componente Base] Clic en Tarjeta Normal');
  });
  baseCardMount.appendChild(baseCard);


  // 2. MONTAJE DE COMPONENTES MEJORADOS (Con HOC)
  const trackedBtnMount = document.getElementById('tracked-btn-mount');
  const trackedCardMount = document.getElementById('tracked-card-mount');

  // Envolvemos los componentes usando la función withClickTracker
  const TrackedButton = withClickTracker(ButtonComponent, { id: 'btn-compra', category: 'ecommerce' });
  const TrackedCard = withClickTracker(CardComponent, { id: 'tarjeta-producto', category: 'ecommerce' });

  // Instanciamos los componentes envueltos
  const trackedBtn = TrackedButton({ label: 'Botón con Click Tracker' });
  trackedBtnMount.appendChild(trackedBtn);

  const trackedCard = TrackedCard({
    title: 'Tarjeta con Click Tracker',
    content: 'Al hacer clic en esta tarjeta, el HOC interceptará el evento e imprimirá analíticas en la consola.'
  });
  trackedCardMount.appendChild(trackedCard);

});
