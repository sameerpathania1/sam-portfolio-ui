import Sidebar from './components/Sidebar';
import Home from './pages/home';
import Skill from './pages/skills';

const settings = {
  dots: false,
  speed: 500,
  infinite: false,
  vertical: true,
  arrows: false,
  // slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  adaptiveHeight: true,
  verticalSwiping: true,
  centerMode: true,
  focusOnSelect: true,
  slidesToShow: 1,
  // focusOnSelect: false,
  // variableWidth: true
};

function App() {
  return (
    <div className='h-screen relative'>
      {/* <div className='fixed left-0 top-0 h-full w-[70px]'>
        <Sidebar />
      </div> */}
      <div className='h-full'>
          <Home />
          {/* <Skill /> */}
      </div>
    </div>
  );
}

export default App;
