import user_experience_design from "../../Assets/svgs/user_experience_design.svg";

const SectionFive = () => {
  return (
    <>
      <div className="row sectionFive">
        <div className="col-6 ">
          <h1>User Experience Design</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
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
        <div className="col-6 ">
          <img src={user_experience_design} alt={user_experience_design} />
        </div>
      </div>
    </>
  );
};

export default SectionFive;
