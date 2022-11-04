import { Link } from 'react-router-dom';

import './HomePageStyle.scss';
import bg from '../../assets/img/bg.png';
import { useDispatch } from 'react-redux';
import { setCategory, setType } from '../../redux/slices/filterSlice';
import { windowScroll } from '../../assets/function';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  const onChangeCategory = (): void => {
    dispatch(setCategory(0));
    dispatch(setType(null));
    windowScroll();
  };
  return (
    <section className="home">
      <img src={bg} alt="" className="home-bg"></img>
      <div className="container">
        <div className="home__content">
          <div className="home__content-title">
            <p>Нова коллекція</p>
            <p>Нові ідеї </p>
            <p>Нові емоції</p>
          </div>
          <Link to="/clothing" onClick={onChangeCategory}>
            <div className="home__content-btn">
              <span>До каталогу</span>
              <i className="fa-solid fa-right-long"></i>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
