import './App.css'
import { debugData } from "../utils/debugData";
import Carousel from './Carousel';

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: 'setVisible',
    data: true,
  }
])

const App: React.FC = () => {
  return (
    <div className="w-full h-screen">
      <Carousel />
    </div>
  );
}

export default App;
