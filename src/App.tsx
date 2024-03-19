import Scene from 'Page/Scene';
import { ControlProvider } from 'provider/ControlProvider';

function App() {
  return (
    <ControlProvider>
      <Scene />
    </ControlProvider>
  );
}

export default App;
