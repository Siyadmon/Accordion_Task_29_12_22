import Accordion from './Accordion';
import Data from '../Data/Data';
import '../styles/styles.css';

const App = () => {
  const AccRenderFunc = Data.map((data, index) => (
    <Accordion {...data} key={index} />
  ));
  return <div className="container mt-4">{AccRenderFunc}</div>;
};
//   return (
//     <div className="container mt-5">
//       <Accordion data={Data} />
//     </div>
//   );
//};

export default App;
