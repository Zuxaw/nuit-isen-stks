const Step: React.FC<{step: number}> = ({step}) => {
  return (
    <div className="flex flex-col items-center mb-5">
      <ul className="steps">
        <li className={step < 1 ? 'step' : 'step step-secondary'}>Choose date</li>
        <li className={step < 2 ? 'step' : 'step step-secondary'}>Choose room</li>
        <li className={step < 3 ? 'step' : 'step step-secondary'}>Your information</li>
        <li className={step < 4 ? 'step' : 'step step-secondary'}>Payment</li>
      </ul>
      <h1 className="text-4xl mt-5 font-bold text-center">10 Themed relaxation areas</h1>
      <h2 className="text-md font-bold text-center text-secondary">CHOOSE YOUR LOVE NEST</h2>
    </div>
  );
};

export default Step;
