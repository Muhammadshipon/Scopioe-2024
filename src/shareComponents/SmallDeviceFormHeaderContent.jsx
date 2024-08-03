

const SmallDeviceFormHeaderContent = ({title,subTitle}) => {
  return (
    <div className="max-w-[300px] ml-9 text-center">
    <h1 className="text-5xl text-blue-500 font-serif text-center lg:text-left">Scopioe</h1>
    <h3 className="text-xl text-white font-bold mt-5  ">{title}</h3>
    <h3 className="text-xl text-white font-bold  ">{subTitle}</h3>
    </div>
  );
};

export default SmallDeviceFormHeaderContent;