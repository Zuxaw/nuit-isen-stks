import { useLocation, useNavigate } from 'react-router-dom';
import Step from '~/appkit/Step';
import Header from '~/components/header/Header';
import { ChamberProps } from './Rooms';

const RoomsDetail = () => {
  const { state }: any = useLocation();
  const navigate = useNavigate();
  console.log(state);

  const room: ChamberProps = state.room;
  return (
    <>
      <Header />
      <div>
        <Step step={2} />
        <div className="hero min-h-16 bg-base-300">
          <div className="hero-content flex-col lg:flex-row">
            {room.pictures && room.pictures.length > 0 ? (
              <img
                src={room.pictures[Math.floor(Math.random() * room.pictures.length)]}
                className="max-w-sm rounded-lg shadow-2xl"
              />
            ) : (
              <img
                src="https://placeimg.com/400/225/arch"
                alt="Shoes"
                className="max-w-sm rounded-lg shadow-2xl"
              />
            )}
            <div className="ml-5">
              <h1 className="text-5xl font-bold">{room.typology}</h1>
              <p className="py-9">{room?.description}</p>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Mystery Box</span>
                  <input type="checkbox" checked className="checkbox" />
                </label>
              </div>
              <a onClick={() => navigate('/form')}>
                <button className="btn btn-primary">Get Started</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomsDetail;
