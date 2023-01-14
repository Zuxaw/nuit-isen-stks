import { useLocation, useNavigate } from 'react-router-dom';
import Error from '~/appkit/Error';
import Loading from '~/appkit/Loading';

import { useQuery } from '@apollo/client';
import Step from '~/appkit/Step';
import Header from '~/components/header/Header';
import { getChambersQuery } from '~/queries/queries';

export type ChamberProps = {
  number: number;
  typology: string;
  description?: string;
  pricing: number;
  pictures?: string[];
};

const Rooms = () => {
  const navigate = useNavigate();
  const { state }: any = useLocation();

  const adults = state?.adults;
  const startDate = state?.startDate;
  const endDate = state?.endDate;
  console.log('state', state);

  const goToRoomDetails = (room: ChamberProps) => {
    navigate('/roomsdetail', {
      state: {
        adults,
        startDate,
        endDate,
        room,
      },
    });
  };

  const { loading, error, data } = useQuery(getChambersQuery);
  if (loading) return <Loading />;
  if (error) return <Error error={error.message} />;

  const rooms: ChamberProps[] = data.chambers;
  console.warn(rooms.length);

  if (rooms.length === 0) return <Error error={'No chambers found.'} />;

  return (
    <div>
      <Header />
      <Step step={2} />
      <div className="flex flex-wrap justify-center">
        {rooms.map((room) => (
          <div className="card w-96 bg-base-100 shadow-xl m-5" key={room.number}>
            <figure>
              {room.pictures && room.pictures.length > 0 ? (
                <img src={room.pictures[Math.floor(Math.random() * room.pictures.length)]} />
              ) : (
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              )}
            </figure>
            <div className="card-body">
              <h2 className="card-title">{room.typology}</h2>
              <p>{room?.description}</p>
              <div className="card-actions justify-end">
                <a onClick={() => goToRoomDetails(room)}>
                  <button className="btn btn-primary">{room.pricing} €</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
