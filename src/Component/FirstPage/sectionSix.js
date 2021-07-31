import visual_design from "../../Assets/svgs/visual_design.svg";
const SectionSix = () => {
  return (
    <>
      <div className="row sectionSix">
        <div className="col-6 ">
          <img src={visual_design} alt={visual_design} />
        </div>
        <div className="col-6 ">
          <h1>Visual Design</h1>
          <p>
            Yes we make your software product beautifull. We also make it easy
            to use delightful and compilling.
          </p>
          <br />
          <h4>Tactics</h4>
          <br />
          <table>
            <tr>
              <td>Design Workshop</td>
              <td className="pl-2">Custom Iconography</td>
            </tr>
            <tr>
              <td>Visual Design Content</td>
              <td className="pl-2">UI element</td>
            </tr>
            <tr>
              <td>Typography System</td>
              <td className="pl-2">Style Guide</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default SectionSix;
