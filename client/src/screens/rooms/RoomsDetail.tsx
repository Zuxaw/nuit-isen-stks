import { useNavigate } from "react-router-dom";
import Step from "~/appkit/Step";
import Header from "~/components/header/Header";

const RoomsDetail = () => {
  const navigate = useNavigate();

  const rooms = [
    {
      id: 1,
      name: "Chambre 1",
      price: 100,
      images: ["https://picsum.photos/200/300"],
    },
    {
      id: 2,
      name: "Chambre 2",
      price: 200,
      images: ["https://picsum.photos/200/300"],
    },
    {
      id: 3,
      name: "Chambre 3",
      price: 300,
      images: ["https://picsum.photos/200/300"],
    },
    {
      id: 4,
      name: "Chambre 4",
      price: 400,
      images: ["https://picsum.photos/200/300"],
    },
    {
      id: 5,
      name: "Chambre 5",
      price: 500,
      images: ["https://picsum.photos/200/300"],
    },
    {
      id: 6,
      name: "Chambre 6",
      price: 600,
      images: ["https://picsum.photos/200/300"],
    },
    {
      id: 7,
      name: "Chambre 7",
      price: 700,
      images: ["https://picsum.photos/200/300"],
    },
    {
      id: 8,
      name: "Chambre 8",
      price: 800,
      images: ["https://picsum.photos/200/300"],
    },
    {
      id: 9,
      name: "Chambre 9",
      price: 900,
      images: ["https://picsum.photos/200/300"],
    },
    {
      id: 10,
      name: "Chambre 10",
      price: 1000,
      images: ["https://picsum.photos/200/300"],
    },
  ];
  return (
    <>
      <Header />
      <div>
        <Step step={2} />
        <div className="hero min-h-screen bg-base-300">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://placeimg.com/260/400/arch"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="ml-5">
              <h1 className="text-5xl font-bold">ROOM</h1>
              <p className="py-9">Room decoration dragibus avec lit en forme de coeur</p>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Mystery Box</span>
                  <input type="checkbox" checked className="checkbox" />
                </label>
              </div>
              <a onClick={() => navigate("/form")}>
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
