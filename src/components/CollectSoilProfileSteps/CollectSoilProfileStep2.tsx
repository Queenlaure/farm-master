import React from "react";
import Input from "../Input";
import CoolNav from "./CoolNav";
// interface CollectSoilSampleProps { }

const CollectSoilProfileStep2 = ({ onNext, onPrevious, onChange }: any) => {
  const gotoNext = () => {
    onNext();
  };

  const gotoPrevious = () => {
    onPrevious();
  };

  return (
    <>
      <div className="container">
        <div>
          <p className="page-title my-4 text-center">Soil profile [GENERAL]</p>
          <div className="form-group mb-4">
            <label className="fst-italic form-label">
              Sample depth in inches
            </label>
            <div className="row">
              <Input placeholder="F1" />
              <Input placeholder="F2" />
              <Input placeholder="F3" />
              <Input placeholder="F4" />
            </div>
          </div>
          <div className="form-group mb-4">
            <label className="fst-italic form-label">PH of soil sample</label>
            <div className="row">
              <Input placeholder="F1" name="pH-0" onChange={onChange} />
              <Input placeholder="F2" name="pH-1" onChange={onChange} />
              <Input placeholder="F3" name="pH-2" onChange={onChange} />
              <Input placeholder="F4" name="pH-3" onChange={onChange} />
            </div>
          </div>
          <div className="form-group mb-4">
            <label className="fst-italic form-label">
              Percentage of organic matter
            </label>
            <div className="row">
              <Input placeholder="F1" />
              <Input placeholder="F2" />
              <Input placeholder="F3" />
              <Input placeholder="F4" />
            </div>
          </div>
        </div>
        <CoolNav nextStep={gotoNext} previousStep={gotoPrevious} />
      </div>
    </>
  );
};

export default CollectSoilProfileStep2;
