import { useState } from 'react';

const Voto = () => {
  const [like, setLike] = useState(0);
  console.log(like);
  const clickMeGusta = () => {
    setLike(1);
  };
  const clickNoMeGusta = () => {
    setLike(-1);
  };
  return (
    <section>
      <button onClick={clickMeGusta}>Me gusta</button>
      <button onClick={clickNoMeGusta}>No me gusta</button>
    </section>
  );
};

export default Voto;
