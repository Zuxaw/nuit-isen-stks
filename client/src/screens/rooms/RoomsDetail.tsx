import { useLocation } from 'react-router-dom';
import Step from '~/appkit/Step';
import Header from '~/components/header/Header';
import { ChamberProps } from './Rooms';

const RoomsDetail = () => {
  const { state }: any = useLocation();
  console.log(state);

  const room: ChamberProps = state.room;
  return (
    <>
      <Header />
      <div>
        <Step step={2} />
        <div className="hero min-h-screen bg-base-300">
          <div className="hero-content flex-col lg:flex-row">
            {room.pictures && room.pictures.length > 0 ? (
              <img src={room.pictures[Math.floor(Math.random() * room.pictures.length)]} />
            ) : (
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            )}
            <div>
              <h1 className="text-5xl font-bold">{room.typology}</h1>
              <p className="py-9">{room?.description}</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomsDetail;
