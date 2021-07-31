import Header from "../header";
import ProductDesign from "../../Assets/images/ProductDesign.png";
import { useState } from "react";
import FormControl from "./formControl";

const SecondPage = () => {
  const [fields, setFields] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }
  return (
    <>
      <Header
        title="Product Design"
        description=" Our multifaceted app are custom build and develop to support
              multiple platforms, including both Android and iOS, making app
              accessible for all"
        image={ProductDesign}
      />

      <div className="second-page">
        <div className="row">
          <div className="col-6 ">
            <h1>Dynamic input fields</h1>
            <button
              type="button"
              className="btn btn-black btn-sm "
              onClick={() => handleAdd()}
            >
              +
            </button>

            {fields.map((field, idx) => {
              return (
                <div key={`${field}-${idx}`}>
                  <input
                    type="text"
                    placeholder="Enter text"
                    value={field.value || ""}
                    onChange={(e) => handleChange(idx, e)}
                  />
                  <button type="button" className="btn btn-black btn-sm"onClick={() => handleRemove(idx)}>
                    X
                  </button>
                </div>
              );
            })}
          </div>
          <div className="col-6 ">
              <h1>Form Control</h1>
              <FormControl />
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
