import Step from "~/appkit/Step";
import Header from "../header/Header";

function PersonalInfo() {
  return (
    <>
      <Header />
      <Step step={3} />

      <div className="flex flex-col items-center mt-10 ">
        <div className="flex flex-row">
          <div className="flex card w-96 bg-base-100 shadow-xl mr-5">
            <div className="card-body">
              <h2 className="card-title">Your information</h2>
              <p className="text-error">All * are obligatory</p>

              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
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
                  <input
                    type="number"
                    placeholder="0692012938"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Membership card</span>
                  </label>
                  <input
                    type="number"
                    placeholder="0000-0000-0000"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Special request</span>
                  </label>
                  <textarea
                    placeholder="..."
                    className="input input-bordered textarea h-24"
                  ></textarea>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    Send Validate infromation
                  </button>
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
                  <span className="label-text font-bold mt-3">Hotel</span>
                  <span className="label-text">Chatelet</span>
                  <span className="label-text font-bold mt-3">ARRIVÉE</span>
                  <span className="label-text">
                    Vendredi, 27 Janvier - 14h20
                  </span>
                  <span className="label-text font-bold mt-3">DÉPART</span>
                  <span className="label-text">
                    Vendredi, 27 Janvier - 16h20
                  </span>
                </div>
                {/* <div className="divider"></div> */}

                <div className="flex mt-5">
                  <div className="flex flex-col">
                    <span className="label-text flex-col">Endroit + ROOM</span>
                    <span className="label-text flex-col">Durée?</span>
                  </div>
                  <span className="label-text flex-row ml-32 font-bold text-red-500">
                    Price
                  </span>
                </div>
              </div>
            </div>

            <div className="flex card item-start mt-5 w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Total</h2>
               

                <div className="flex">
                  <div className="flex flex-col">
                    <span className="label-text flex-col">Endroit + ROOM</span>
                    <span className="label-text flex-col">Durée?</span>
                  </div>
                  <span className="label-text flex-row ml-32 font-bold text-red-500">
                    Price
                  </span>
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
