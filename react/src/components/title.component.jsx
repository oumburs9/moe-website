export const Titles = ({ title, subtitle }) => {
    const colors = ['#F8BE15', '#D1503E', '#3C8FC2', '#1F48A2'];
  
    return (
      <>
        <div className="flex flex-row max-w-2xl text-left ">
  {/* Bannner */}
          <div className="mr-5 w-4 flex flex-col h-auto">
            {colors.map((color, index) => (
              <div key={index} className={`bg-[${color}] h-1/4 w-full`}></div>
            ))}
          </div>
  {/* Titles */}
          <div className="flex flex-col h-full">
            <h2 className="text-3xl font-bold leading-tight text-dark sm:text-4xl lg:text-5xl">
              {title ? title : 'Latest from News'}
            </h2>
            <p className="max-w-xl mt-4 text-base leading-relaxed text-gray-600">
              {subtitle
                ? subtitle
                : 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.'}
            </p>
          </div>
        </div>
      </>
    );
  };
  
  export default Titles;