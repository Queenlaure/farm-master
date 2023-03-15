import React from "react";
import Input from "../Input";
import CoolNav from "./CoolNav";
// interface CollectSoilSampleProps { }

const CollectSoilProfileStep3 = ({ onNext, onPrevious, onChange }: any) => {
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
          <p className="page-title my-4 text-center">Soil profile [ANIONS]</p>
          <div className="form-group mb-4">
            <label className="fst-italic form-label">Sulphur p.p.m</label>
            <div className="row">
              <Input placeholder="F1" name="sulphur-0" onChange={onChange} />
              <Input placeholder="F2" name="sulphur-1" onChange={onChange} />
              <Input placeholder="F3" name="sulphur-2" onChange={onChange} />
              <Input placeholder="F4" name="sulphur-3" onChange={onChange} />
            </div>
          </div>
          <div className="form-group mb-4">
            <label className="fst-italic form-label">
             Nitrogen (Nitrates) p.p.m
            </label>
            <div className="row">
              <Input placeholder="F1" name="nitrogen-0" onChange={onChange}/>
              <Input placeholder="F2" name="nitrogen-1" onChange={onChange}/>
              <Input placeholder="F3" name="nitrogen-2" onChange={onChange}/>
              <Input placeholder="F4" name="nitrogen-3" onChange={onChange}/>
            </div>
          </div>
          <div className="form-group mb-4">
            <label className="fst-italic form-label">
              Phosphorus (ibs/acre)
            </label>
            <div className="row">
              <Input placeholder="F1" name="phosphorus-0" onChange={onChange} />
              <Input placeholder="F2" name="phosphorus-1" onChange={onChange} />
              <Input placeholder="F3" name="phosphorus-2" onChange={onChange} />
              <Input placeholder="F4" name="phosphorus-3" onChange={onChange} />
            </div>
          </div>
        </div>
        <CoolNav nextStep={gotoNext} previousStep={gotoPrevious} />
      </div>
    </>
  );
};

export default CollectSoilProfileStep3;
