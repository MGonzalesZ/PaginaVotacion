import Card from './Card';
import CuadroMensaje from './CuadroMensaje';
import Voto from './Voto';

const Fondo = (props) => {
  return (
    <Card className="fondo">
      <CuadroMensaje mensaje={props.mensaje} parestilo={props.parestilo} />
      <div>
        <br />
      </div>
      <Voto />
    </Card>
  );
};

export default Fondo;
