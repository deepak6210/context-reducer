import './App.css';
import CakeReducer from './components/cake/CakeReducer'
import IceCreamReducer from './components/iceCream/IceCreamReducer'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Typography } from 'antd';

const { Title } = Typography;


const App = () => {
  return (
    <div className="store">
       <Title className="heading">IceCream Store</Title>
      <Row gutter={[16, 16]}>
        <Col span={12} >
          <div className="cakeStore">
            <Title level={2}>Cake store</Title>
            <CakeReducer />
          </div>
        </Col>
        <Col span={12}>
          <div className="iceCreamStore" >
            <Title level={2}>IceCream Store</Title>
            <IceCreamReducer />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default App;