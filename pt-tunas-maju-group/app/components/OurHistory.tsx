// app/components/OurHistory.tsx
'use client';

const OurHistory = () => {
  const history = [
    { year: '2000', description: 'Founded in 2000 with a mission to innovate.' },
    { year: '2005', description: 'Expanded operations globally.' },
    { year: '2010', description: 'Launched our first major product.' },
    { year: '2020', description: 'Celebrated 20 years of excellence.' },
  ];

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4 text-center">Our History</h2>
      <div className="relative flex justify-center items-center">
        <div className="absolute top-1/2 transform -translate-y-4 w-3/4 h-1 bg-black"></div>
        <div className="relative w-3/4 flex justify-between items-center">
          {history.map((event, index) => (
            <div key={index} className="relative flex flex-col items-center group">
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <span className="mt-2 text-center text-sm">{event.year}</span>
              <div className="absolute bottom-6 flex-col items-center hidden mb-6 group-hover:flex">
                <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">{event.description}</span>
                <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
