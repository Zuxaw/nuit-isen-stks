import { useState } from 'react';

const Book = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="card card-compact w-full mt-5 bg-base-100 shadow-xl border border-base-300">
      <div className="card-body h-96">
        {/* select date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Select Date</span>
          </label>
          <div className="flex flex-row bg-red-500">
            <input type="date" className="input input-bordered mr-2" placeholder="Select Date" />
            <input type="date" className="input input-bordered" placeholder="Select Date" />
            <div className="dropdown">
              <label tabIndex={0} className="btn m-1">
                Click
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-primary normal-case min-w-60 absolute -bottom-5">
        Let's Go
      </button>
    </div>
  );
};

export default Book;
