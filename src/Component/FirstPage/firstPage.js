import ProductDesign from "../../Assets/images/ProductDesign.png";
import Header from "../header";
import SectionFive from "./sectionFive";
import SectionFour from "./sectionFour";
import SectionSix from "./sectionSix";
import SectionThree from "./sectionThree";
import SectionTwo from "./sectionTwo";
import fetch from "../fetch";
import { useEffect, useState, useCallback } from "react";
const FirstPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function fetchMyAPI() {
    fetch()
      .then((respones) => respones.json())
      .then((tasks) => {
        console.log(tasks);
        setTitle(tasks[0]?.title);
        setDescription(tasks[0]?.description);
      });
  }

  const callAPI = useCallback(
    debounce(() => {
      fetchMyAPI();
    }, 1000),
    []
  );
  useEffect(() => {
    callAPI();
  }, [callAPI]);
  function debounce(func, wait, immediate) {
    var timeout;

    return (...args) => {
      var context = this;

      var later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;

      clearTimeout(timeout);

      timeout = setTimeout(later, wait);

      if (callNow) func.apply(context, args);
    };
  }
  return (
    <>
      <Header title={title} description={description} image={ProductDesign} />
      <div className="sections">
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
      </div>
    </>
  );
};

export default FirstPage;
