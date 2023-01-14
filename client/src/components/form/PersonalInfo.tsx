import { useLocation } from 'react-router-dom';
import Step from '~/appkit/Step';
import Header from '../header/Header';

function PersonalInfo() {
  const { state }: any = useLocation();
  console.log(state);

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  function createBillString(bill: any) {
    const billItems = Object.entries(bill).map(([key, value]) => `${key}: ${value}`);
    return billItems.join(' + ');
  }
  console.log(
    createBillString({
      roomChoice: 'BDSM',
      roomPrice: 61,
      mystery: 0,
      condom: 0,
      toys: 5,
      total: 66,
    })
  );
  // Output: "roomChoice: BDSM + roomPrice: 61 + mystery: 0 + condom: 0 + toys: 5 + total: 66"

  return (
    <>
      <Header />
      <Step step={3} />

      <div className="flex flex-col items-center ">
        <div className="flex flex-row">
          <div className="flex card w-96 bg-base-100 shadow-xl mr-5">
            <div className="card-body">
              <h2 className="card-title">Your information</h2>
              {/* <p className="text-error">All * are obligatory</p> */}

              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Mail</span>
                  </label>
                  <input
                    type="email"
                    placeholder="test@gmail.com"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input type="number" placeholder="0692012938" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Special request</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />{' '}
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Validate</button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <div className="flex card item-start w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <span className="flex-row italic text-orange-400 mb-2">
                  {/* <span className="countdown">
                    <span style={{ "--value": 10 }}></span>:
                    <span style={{ "--value": 24 }}></span>:
                    <span style={{ "--value": 52 }}></span>
                  </span> */}
                  <span className=""> to complete the reservation</span>
                </span>
                <h2 className="card-title">Overview</h2>
                <div className="form-control">
                  <span className="label-text font-bold mt-3">Room</span>
                  <span className="label-text">{state.bill.roomChoice}</span>
                  <span className="label-text font-bold mt-3">Arrival</span>
                  <span className="label-text">{formatDate(state.startDate)}</span>
                  <span className="label-text font-bold mt-3">Departure</span>
                  <span className="label-text">{formatDate(state.endDate)}</span>
                </div>
              </div>
            </div>

            <div className="flex card item-start mt-5 w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Total</h2>

                <div className="flex">
                  <div className="flex flex-col">
                    <span className="label-text flex-col">Specialities + ROOM</span>
                  </div>
                  <div className="flex flex-col justify-end items-end">
                    <span className="label-text flex-row ml-32 font-bold text-red-500 pr-1">
                      Price
                    </span>
                    <p className="badge">{state.bill.total + '€'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PersonalInfo;
