

const OverlayContainer = ({link,title,subTitle}) => {
  return (
    <div className="p-10 bg-[rgb(0,0,0,0.5)] lg:hover:bg-[rgb(0,0,0,0.5)] rounded-2xl text-center hover:bg-black hover:scale-90 lg:hover:scale-100">
  <h3 className="text-xl font-bold text-white"><span className="text-blue-500">{link}</span> {title}</h3>
  <p className="text-xl text-white font-bold">{subTitle}</p>
</div>
  );
};

export default OverlayContainer;