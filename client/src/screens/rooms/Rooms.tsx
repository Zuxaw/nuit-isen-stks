import Step from '~/appkit/Step';
import Header from '~/components/header/Header';

const Rooms = () => {
  // fake carte chamber hotel data
  const rooms = [
    { id: 1, name: 'Chambre 1', price: 100, images: ['https://picsum.photos/200/300'] },
    { id: 2, name: 'Chambre 2', price: 200, images: ['https://picsum.photos/200/300'] },
    { id: 3, name: 'Chambre 3', price: 300, images: ['https://picsum.photos/200/300'] },
    { id: 4, name: 'Chambre 4', price: 400, images: ['https://picsum.photos/200/300'] },
    { id: 5, name: 'Chambre 5', price: 500, images: ['https://picsum.photos/200/300'] },
    { id: 6, name: 'Chambre 6', price: 600, images: ['https://picsum.photos/200/300'] },
    { id: 7, name: 'Chambre 7', price: 700, images: ['https://picsum.photos/200/300'] },
    { id: 8, name: 'Chambre 8', price: 800, images: ['https://picsum.photos/200/300'] },
    { id: 9, name: 'Chambre 9', price: 900, images: ['https://picsum.photos/200/300'] },
    { id: 10, name: 'Chambre 10', price: 1000, images: ['https://picsum.photos/200/300'] },
  ];
  return (
    <div>
      <Header />
      <Step step={2} />
      <div className="flex flex-wrap justify-center">
        {rooms.map((room) => (
          <div className="card w-96 bg-base-100 shadow-xl m-5" key={room.id}>
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{room.name}</h2>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">{room.price} €</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
