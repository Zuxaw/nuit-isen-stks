import { User } from 'firebase/auth';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Outlet, useNavigate } from 'react-router-dom';
import Theme from '~/appkit/Theme';
import { getUser, useAuth } from '~/lib/firebase';

const Header = () => {
  const { data, isLoading } = useQuery<User | null, Error>('user', getUser);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    const auth = useAuth();
    auth.signOut();
    navigate('/');
  };

  return (
    <div className="sticky top-0 bg-base-100 z-50 mb-2">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-square"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>
                    <i className="fas fa-home mr-5" />
                    Home
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fas fa-user mr-5" />
                    Portfolio
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fas fa-envelope mr-5" />
                    Messages
                  </a>
                </li>
              </ul>
            )}
          </div>
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">
              Sugar Hotel
              <i className="ml-2 fas fa-heart text-red-500" />
            </a>
          </div>
        </div>
        <div className="flex-none gap-2 navbar-end">
          <Theme />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
