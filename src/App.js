import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Tutorial from './components/Tutorial';
import AddTutorial from './components/AddTutorial';
import { useSelector, useDispatch } from 'react-redux';
import { getThemeColor, changeColor } from './features/theme/themeSlice';

const App = () => {

  const dispatch = useDispatch();
  const bgLight = useSelector(getThemeColor)
  const handleBgColr = (curbg) => {
    return curbg ? " bg-white " : "dark:bg-slate-800 dark:text-white"
  }

  const handlebgChange = (bg) => {
    dispatch(changeColor(bg));
  }
  return (
    <div className={`${handleBgColr(bgLight)}`}>
      <Navbar changeBg={handlebgChange} />
      <div className={` flex flex-col justify-center min-h-screen container w-full px-5 md:px-0 md:w-4/5 mx-auto `}>
        <Routes>
          <Route path="/" element={<Tutorial card="card" data={handleBgColr(bgLight)} />} />
          <Route path="/Tutorials"  element={<Tutorial data1="data1"/>} />
          <Route path="/AddTutorial" element={<AddTutorial />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
