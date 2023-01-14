import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Step from '~/appkit/Step';
import Header from '~/components/header/Header';
import { ChamberProps } from './Rooms';

const RoomsDetail = () => {
  const { state }: any = useLocation();
  const navigate = useNavigate();
  const [Mystery, setMystery] = useState(false);
  const [Condom, setCondom] = useState(false);
  const [Toys, setToys] = useState(false);

  const handleSupplement = (type: string) => {
    if (type === 'Mystery') {
      setMystery(!Mystery);
    } else if (type === 'Condom') {
      setCondom(!Condom);
    } else if (type === 'Toys') {
      setToys(!Toys);
    }
  };
  const room: ChamberProps = state.room;
  const adult = state.adult;
  const startDate = state.startDate;
  const endDate = state.endDate;

  const bill = {
    roomChoice: room?.typology,
    roomPrice: room?.pricing,
    mystery: Mystery ? 10 : 0,
    condom: Condom ? 0 : 0, // free
    toys: Toys ? 5 : 0,
    total: room?.pricing + (Mystery ? 10 : 0) + (Toys ? 5 : 0)
  }

  const goToForm = () => {
    navigate('/form', {
      state: {
        bill,
        adult,
        startDate,
        endDate,
      },
    });
  };
  

  return (
    <>
      <Header />
      <div>
        <Step step={2} />
        <div className="hero h-full">
          <div className="hero-content flex-col lg:flex-row bg-base-300 rounded-xl">
            {room.pictures && room.pictures.length > 0 ? (
              <img
                src={room.pictures[Math.floor(Math.random() * room.pictures.length)]}
                className="max-w-sm rounded-lg shadow-2xl w-1/2"
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
              <p className="badge">{room?.pricing + '€/night'}</p>
              <p className="py-9">{room?.description}</p>

              <div className="form-control">
                <h1>Additional packages :</h1>
                <label className="label cursor-pointer">
                  <span className="label-text">Mystery Box (10€)</span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={() => handleSupplement('Mystery')}
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text">Condom (free)</span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={() => handleSupplement('Condom')}
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text">Toys (5€)</span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={() => handleSupplement('Toys')}
                  />
                </label>
              </div>
              <div className="mt-10 flex flex-row-reverse">
                <button onClick={goToForm} className="btn btn-primary">
                  Choose
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomsDetail;
