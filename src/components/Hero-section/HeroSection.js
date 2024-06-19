import './HeroSection.css'
const HeroSection = () => {
    const imgUrl= 'https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg='
  return (
    <div className=" bg-secondary d-flex justify-content-center">
      <div className="content row py-5 text-white container justify-content-center">
        <div className="col-md-5 text-center  py-3 rounded  px-2">
            <h1 className='mb-3'>Omar Abdou</h1>
            <h4 className='mb-3' >Junior Front-End Dev.. 'React Js'</h4>
            <button type="button" className="btn btn-dark my-3">Contact-Me</button>
        </div>
        <div className="col-md-5 text-center">
          <img src={imgUrl} alt="pic" className='img-fluid rounded port-img ' />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
