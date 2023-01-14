import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Header from '~/components/header/Header';
import { Head } from '~/components/shared/Head';
import './index.scss';

function Index() {
  const [adults, setAdults] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();

  // go to the rooms
  const goToRooms = () => {
    navigate('/rooms', {
      state: {
        adults,
        rooms,
        startDate,
        endDate,
      },
    });
  };

  const handleDateChange = (dates: Date, type: string) => {
    if (type === 'start') {
      setStartDate(dates);
    } else if (type === 'end') {
      setEndDate(dates);
    }
  };

  const addItem = (type: string) => {
    if (type === 'adults') {
      setAdults(adults + 1);
    } else if (type === 'rooms') {
      setRooms(rooms + 1);
    }
  };

  const removeItem = (type: string) => {
    if (type === 'adults' && adults > 0) {
      setAdults(adults - 1);
    } else if (type === 'rooms' && rooms > 0) {
      setRooms(rooms - 1);
    }
  };

  return (
    <>
      <Head title="Home" />
      <div className="relative min-h-screen">
        <Header />
        <div className="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="min-h-screen bg-base-200 flex flex-col items-center">
          <div className="text-center w-2/3 relative flex flex-col">
            <div className="flex justify-center flex-col items-center font-semibold mt-24">
              <h1 className="text-5xl text-neutral-content text-center pl-5 pr-5 pb-2">
                Looking for a cosy nest ?
              </h1>
              <TypeAnimation
                className="text-5xl text-center text-secondary"
                cursor={true}
                sequence={[
                  'a rustic cell ⛓️?',
                  4000,
                  `a dungeon 🕸️?`,
                  4000,
                  `a classroom 📝?`,
                  4000,
                  `bdsm 🕯️?`,
                  4000,
                  `a hot room 🔥?`,
                  4000,
                  `some massages 😏?`,
                  4000,
                ]}
                wrapper="h2"
                repeat={Infinity}
              />
            </div>

            <div className="rounded-2xl p-5 w-full mt-24 bg-base-100 shadow-xl border border-base-300">
              <div className="h-40">
                <div className="form-control">
                  <div className="flex flex-row items-center">
                    <div className="flex flex-row w-full">
                      <div className="mr-2 w-full">
                        <label className="label">
                          <span className="label-text">Arrival Date</span>
                        </label>
                        <input
                          type="date"
                          className="input input-bordered border border-base-300 w-full"
                          placeholder="Select Date"
                          onChange={(e) => handleDateChange(new Date(e.target.value), 'start')}
                        />
                      </div>
                      <div className="w-full">
                        <label className="label">
                          <span className="label-text">Departure Date</span>
                        </label>
                        <input
                          type="date"
                          className="input input-bordered border border-base-300 w-full"
                          placeholder="Select Date"
                          onChange={(e) => handleDateChange(new Date(e.target.value), 'end')}
                        />
                      </div>
                    </div>
                    <div className="dropdown dropdown-end w-full mt-9">
                      <div
                        tabIndex={0}
                        className="flex justify-between items-center rounded-md border border-base-300 h-12 w-full m-1"
                      >
                        <div className="flex items-center">
                          <i className="fa-solid fa-people-group m-5"></i>{' '}
                          <div className="text-left">
                            {rooms} Room {rooms > 1 ? 's' : ''}, {adults} Adult{' '}
                            {adults > 1 ? 's' : ''}
                          </div>
                        </div>
                        <i className="fa-solid fa-chevron-down m-5 flex-end" />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content absolute menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a className="flex flex-row w-full justify-between">
                            Rooms
                            <div className="flex items-center">
                              <button
                                className="bg-gray-300 text-gray-800 rounded-md p-1"
                                onClick={() => removeItem('rooms')}
                              >
                                <i className="fas fa-minus"></i>
                              </button>
                              <span className="px-2">{rooms}</span>
                              <button
                                className="bg-gray-300 text-gray-800 rounded-md p-1"
                                onClick={() => addItem('rooms')}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a className="flex flex-row w-full justify-between">
                            Adults
                            <div className="flex items-center">
                              <button
                                className="bg-gray-300 text-gray-800 rounded-md p-1"
                                onClick={() => removeItem('adults')}
                              >
                                <i className="fas fa-minus"></i>
                              </button>
                              <span className="px-2">{adults}</span>
                              <button
                                className="bg-gray-300 text-gray-800 rounded-md p-1"
                                onClick={() => addItem('adults')}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mt-5">
              <button
                type="button"
                className="btn btn-primary normal-case min-w-60"
                onClick={goToRooms}
              >
                Let's Go
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
