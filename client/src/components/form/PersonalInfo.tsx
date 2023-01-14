import Step from "~/appkit/Step";
import Header from "../header/Header";

function PersonalInfo() {
  return (
    <>
      <Header />
      <div className="flex-col items-center flex">
        <Step step={3} />
        <div className="card w-96 bg-base-100 mt-10 shadow-xl">
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
                  <span className="label-text">Spécial request</span>
                </label>
                <input
                  type="text"
                  placeholder="..."
                  className="input input-bordered"
                />
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                  Send Validate infromation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default PersonalInfo;
