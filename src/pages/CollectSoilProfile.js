import React, { useRef, useState, useEffect } from "react";
import "../styles/home.css";
import StepWizard from "react-step-wizard";
import CollectSoilProfileStep1 from "../components/CollectSoilProfileSteps/CollectSoilProfileStep1";
import CollectSoilProfileStep2 from "../components/CollectSoilProfileSteps/CollectSoilProfileStep2";
import CollectSoilProfileStep3 from "../components/CollectSoilProfileSteps/CollectSoilProfileStep3";
import CollectSoilProfileStep4 from "../components/CollectSoilProfileSteps/CollectSoilProfileStep4";
import CollectSoilProfileStep5 from "../components/CollectSoilProfileSteps/CollectSoilProfileStep5";
import CollectSoilProfileStep6 from "../components/CollectSoilProfileSteps/CollectSoilProfileStep6";
import CollectSoilProfileStep8 from "../components/CollectSoilProfileSteps/CollectSoilProfileStep8";
import CollectSoilProfileStep7 from "../components/CollectSoilProfileSteps/CollectSoilProfileStep7";
import CollectSoilProfileDoYouHaveASoilProfile from "../components/CollectSoilProfileSteps/CollectSoilProfileDoYouHaveASoilProfile";
import CollectSoilProfileHowToGetSoilProfile from "../components/CollectSoilProfileSteps/CollectSoilProfileHowToGetSoilProfile";
import Model from "../ai/model";
import axios from "axios";
import useCalendar from "../context/useCalendar";
import { useNavigate } from "react-router-dom";
import { Calendar } from "../api/api";
import PageLayout from "../components/PageLayout";

// interface CollectSoilSampleProps { }

const CollectSoilProfile = () => {
  const wizard = useRef();
  const ai = useRef(new Model());
  const { handleCalendar } = useCalendar();
  const navigate = useNavigate();

  const [soilData, setSoilData] = useState({
    Beans: 0,
    Tomatoes: 0,
    Corn: 0,
    Yam: 0,
    Potato: 0,
  });
  const [isLoading, setLoading] = useState(false);

  const farmProfile = [];

  const onNext = () => {
    wizard?.current.nextStep();
    window.scrollTo(0, 0);
  };

  const onPrevious = () => {
    wizard?.current.previousStep();
    window.scrollTo(0, 0);
  };

  const gotoPage = (n) => {
    wizard?.current.goToStep(n);
  };

  const handleDataChange = (e) => {
    setSoilData((soilData) => {
      return {
        ...soilData,
        [e.target.name]: e.target.value.trim(),
      };
    });
  };

  const generateCalendar = async () => {
    setLoading(true);
    const pH = getAverageFromData("pH");
    const sulphur = getAverageFromData("sulphur");
    const phosphorus = getAverageFromData("phosphorus");
    const calcium = getAverageFromData("calcium");
    const magnesium = getAverageFromData("magnesium");
    const potassium = getAverageFromData("potassium");
    const iron = getAverageFromData("iron");
    const manganese = getAverageFromData("manganese");
    const zinc = getAverageFromData("zinc");
    const nitrogen = getAverageFromData("nitrogen");

    const input = [
      pH,
      nitrogen,
      potassium,
      phosphorus,
      magnesium,
      calcium,
      zinc,
      sulphur,
      iron,
      manganese,
      soilData.Beans,
      soilData.Tomatoes,
      soilData.Corn,
      soilData.Yam,
      soilData.Potato,
    ];
    // const calender = ai.current.genCalendar([6.8, 5, 110, 17, 50, 700, 1.5, 7.5, 10, 6, 1, 0, 0, 0, 1]);
    // const calender = ai.current.genCalendar(input);
    // console.log(input);
    // console.log(calender);
    // pH | N | K | P | Mg | Ca | Zn | S | Fe | Mn | Beans | Tomatoes | Corn | Yam | Potatoes

    try {
      const res = await axios.post("https://farm-api.onrender.com/calendar", {
        input,
      });
      const data = res.data;
      handleCalendar(data);

      const calendarBody = {
        farm_calendar_crops: data,
        calendar_name: soilData.name,
        farm_profile_data: farmProfile,
      };

      const resp = await Calendar.save(calendarBody);
      console.log(resp);

      navigate(`/farm-calendar/${resp[0].slug}`);
    } catch (e) {}
    setLoading(false);
  };

  const getAverageFromData = (field_name) => {
    let sum = 0;
    const obj = {};
    for (let i = 0; i < 4; i++) {
      let val = parseInt(soilData[`${field_name}-${i}`]);
      obj[`field${i + 1}`] = val;
      val = val ? val : 0;
      sum += val;
    }
    farmProfile.push({
      category: field_name,
      ...obj,
    });
    return sum / 4;
  };

  const handleCropChange = (e) => {
    setSoilData((soilData) => {
      return {
        ...soilData,
        [e.target.name]: Number(e.target.checked),
      };
    });
  };

  return (
    <PageLayout>
      <div className="container pt-4" style={{ position: "relative" }}>
        {isLoading && (
          <div
            style={{
              width: "100%",
              height: "100vh",
              position: "absolute",
              top: "0",
              left: "0",
              background: "rgb(199 210 213 / 0%)",
              backdropFilter: "blur(4px)",
              zIndex: "99",
              display: "grid",
              placeContent: "center",
            }}
          >
            <img className="my-4" src="./loading.gif" />
          </div>
        )}
        <StepWizard ref={wizard}>
          <CollectSoilProfileDoYouHaveASoilProfile
            onNext={onNext}
            onPrevious={onPrevious}
            gotoPage={gotoPage}
          />
          <CollectSoilProfileHowToGetSoilProfile
            onNext={onNext}
            onPrevious={onPrevious}
          />
          <CollectSoilProfileStep1 onNext={onNext} onPrevious={onPrevious} />
          <CollectSoilProfileStep2
            onNext={onNext}
            onPrevious={onPrevious}
            onChange={handleDataChange}
          />
          <CollectSoilProfileStep3
            onNext={onNext}
            onPrevious={onPrevious}
            onChange={handleDataChange}
          />
          <CollectSoilProfileStep4
            onNext={onNext}
            onPrevious={onPrevious}
            onChange={handleDataChange}
          />
          <CollectSoilProfileStep6
            onNext={onNext}
            onPrevious={onPrevious}
            onChange={handleDataChange}
          />
          <CollectSoilProfileStep7
            onNext={onNext}
            onPrevious={onPrevious}
            onChange={handleDataChange}
          />
          <CollectSoilProfileStep8
            onNext={onNext}
            onPrevious={onPrevious}
            onChange={handleDataChange}
            onCropChange={handleCropChange}
            generateCalendar={generateCalendar}
          />
        </StepWizard>
      </div>
    </PageLayout>
  );
};

export default CollectSoilProfile;
