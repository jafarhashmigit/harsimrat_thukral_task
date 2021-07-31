import morethanvisualdesign from "../../Assets/images/morethanvisualdesign.png";
const SectionTwo = () => {
  return (
    <>
      <div className="row sectionTwo">
        <div className="col-6 ">
          <img src={morethanvisualdesign} alt={morethanvisualdesign} />
        </div>
        <div className="col-6 ">
          <h1>More than Visual Design, more than interaction</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <br />
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
          <br />
          <p>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsu4 It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsu
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
