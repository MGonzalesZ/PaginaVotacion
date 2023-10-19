import Card from './Card';

const CuadroMensaje = (props) => {
  return (
    <section style={props.parestilo}>
      <h2>{props.mensaje}</h2>
    </section>
  );
};

export default CuadroMensaje;
