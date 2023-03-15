import React from "react";
import Input from "../Input";
import CoolNav from "./CoolNav";
// interface CollectSoilSampleProps { }

const CollectSoilProfileStep5 = ({ onNext, onPrevious }: any) => {

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
                    <p className="page-title my-4 text-center">Soil profile [BASE SATURATION %]</p>
                    <div className="form-group mb-4">
                        <label className="fst-italic form-label">Calcium (60-70%)</label>
                        <div className="row">
                            <Input placeholder="F1" />
                            <Input placeholder="F2" />
                            <Input placeholder="F3" />
                            <Input placeholder="F4" />
                        </div>
                    </div>
                    <div className="form-group mb-4">
                        <label className="fst-italic form-label">Magnesium (10-20%)</label>
                        <div className="row">
                            <Input placeholder="F1" />
                            <Input placeholder="F2" />
                            <Input placeholder="F3" />
                            <Input placeholder="F4" />
                        </div>
                    </div>
                    <div className="form-group mb-4">
                        <label className="fst-italic form-label">Potassium (2-5%)</label>
                        <div className="row">
                            <Input placeholder="F1" />
                            <Input placeholder="F2" />
                            <Input placeholder="F3" />
                            <Input placeholder="F4" />
                        </div>
                    </div>
                    <div className="form-group mb-4">
                        <label className="fst-italic form-label">Sodium (.5-3%)</label>
                        <div className="row">
                            <Input placeholder="F1" />
                            <Input placeholder="F2" />
                            <Input placeholder="F3" />
                            <Input placeholder="F4" />
                        </div>
                    </div>
                    <div className="form-group mb-4">
                        <label className="fst-italic form-label">Other basess (Variable)</label>
                        <div className="row">
                            <Input placeholder="F1" />
                            <Input placeholder="F2" />
                            <Input placeholder="F3" />
                            <Input placeholder="F4" />
                        </div>
                    </div>
                    <div className="form-group mb-4">
                        <label className="fst-italic form-label">Exchangeable Hydrogen (10-15%)</label>
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

export default CollectSoilProfileStep5;