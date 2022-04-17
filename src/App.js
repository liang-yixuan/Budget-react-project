import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const zoomElement = document.querySelector(".word");
  let zoom = 1;
  const ZOOM_SPEED = 0.1;

  document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
    } else {
      zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
    }
  });

  return (
    <div className="text-center font-retro-sans">
      <header className="flex bg-retro-yellow min-h-screen justify-center flex-col">
        {/* <ExpenseItem></ExpenseItem> */}
        <div className="word">
          <p className="text-retro-green  text-xl">人人生而平等</p>
        </div>
      </header>
    </div>
  );
}

export default App;
