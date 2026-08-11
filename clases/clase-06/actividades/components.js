/**
 * COMPONENTES BASE (Puros)
 * Funciones simples que retornan un elemento del DOM.
 */

// Botón Base
function ButtonComponent(props) {
  const btn = document.createElement('button');
  btn.className = 'btn-simple';
  btn.innerText = props.label || 'Botón';
  return btn;
}

// Tarjeta Base
function CardComponent(props) {
  const card = document.createElement('div');
  card.className = 'card-simple';
  
  const title = document.createElement('h3');
  title.innerText = props.title || 'Título';
  card.appendChild(title);
  
  const content = document.createElement('p');
  content.innerText = props.content || 'Contenido descriptivo...';
  card.appendChild(content);
  
  return card;
}

/**
 * HIGHER-ORDER COMPONENT (HOC)
 * Una función que envuelve un componente para añadirle una característica
 * (en este caso, registrar clics para analíticas).
 */
function withClickTracker(WrappedComponent, config = {}) {
  return function(props) {
    // 1. Instanciamos el componente original
    const element = WrappedComponent(props);
    
    // 2. Le añadimos comportamiento extra (escuchador de clics)
    element.addEventListener('click', () => {
      console.log(
        `[HOC ClickTracker] Clic detectado en <${WrappedComponent.name}>. ` +
        `ID: "${config.id || 'sin-id'}", Categoría: "${config.category || 'general'}"`
      );
    });
    
    // 3. Devolvemos el componente ya modificado
    return element;
  };
}
