import React from "react";
import Input from "../Input";
import CoolNav from "./CoolNav";
// interface CollectSoilSampleProps { }

const CollectSoilProfileStep4 = ({ onNext, onPrevious, onChange }: any) => {

    const gotoNext = () => {
        onNext();
    }

    const gotoPrevious = () => {
        onPrevious();
    }

    return (
        <>
            <div className="container">
                <div>
                    <p className="page-title my-4 text-center">Soil profile [EXCHANGEABLE CATIONS]</p>
                    <div className="form-group mb-4">
                        <label className="fst-italic form-label">CALCIUM (Value found)</label>
                        <div className="row">
                            <Input placeholder="F1" name="calcium-0" onChange={onChange}/>
                            <Input placeholder="F2" name="calcium-1" onChange={onChange}/>
                            <Input placeholder="F3" name="calcium-2" onChange={onChange}/>
                            <Input placeholder="F4" name="calcium-3" onChange={onChange}/>
                        </div>
                    </div>
                    <div className="form-group mb-4">
                        <label className="fst-italic form-label">MAGNESIUM (Value found)</label>
                        <div className="row">
                            <Input placeholder="F1" name="magnesium-0" onChange={onChange} />
                            <Input placeholder="F2" name="magnesium-1" onChange={onChange}/>
                            <Input placeholder="F3" name="magnesium-2" onChange={onChange}/>
                            <Input placeholder="F4" name="magnesium-3" onChange={onChange}/>
                        </div>
                    </div>
                    <div className="form-group mb-4">
                        <label className="fst-italic form-label">POTASSIUM (Value Found)</label>
                        <div className="row">
                            <Input placeholder="F1" name="potassium-0" onChange={onChange}/>
                            <Input placeholder="F2" name="potassium-1" onChange={onChange}/>
                            <Input placeholder="F3" name="potassium-2" onChange={onChange}/>
                            <Input placeholder="F4" name="potassium-3" onChange={onChange}/>
                        </div>
                    </div>
                </div>
                <CoolNav nextStep={gotoNext} previousStep={gotoPrevious} />
            </div>
        </>
    );
};

export default CollectSoilProfileStep4;