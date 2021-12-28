import {Container} from './styles'
import Snack from '../../assets/snack.png'
import H1 from '../../components/Title';
import Button from '../../components/Button';
import ListRequests from '../../components/ContainerRequests';
import { Link } from 'react-router-dom';


function Requests() {



  

  return (
    <Container>

      <img src={Snack} alt="snack"/>

      <H1>Pedidos</H1>

    <ListRequests></ListRequests>

      <Link to="/">
        <Button isBack={true} >Voltar</Button>
      </Link>
        
    </Container>
  );
}

export default Requests;
