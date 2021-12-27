import {Container} from './styles'
import Logo from '../../assets/burger1.png'
import H1 from '../../components/Title';
import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>

      <img src={Logo} alt="logo"/>

      <H1>Faça seu pedido!</H1>

      <Label>Pedido</Label>

      <Input/>

      <Label>Nome do Cliente</Label>

      <Input haveSpace={true}/>

      <Link to="/requests">
        <Button>Novo Pedido</Button>
      </Link>
        
    </Container>
  );
}

export default Home;
