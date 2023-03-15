import React from "react";
import Input from "../Input";
import CoolNav from "./CoolNav";
// interface CollectSoilSampleProps { }

const CollectSoilProfileStep6 = ({ onNext, onPrevious, onChange }: any) => {

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
                    <p className="page-title my-4 text-center">Soil profile [TRACE ELEMENTS]</p>
                    <div className="form-group mb-4">
                        <label className="fst-italic form-label">Iron (p.p.m)</label>
                        <div className="row">
                            <Input placeholder="F1" name="iron-0" onChange={onChange}/>
                            <Input placeholder="F2" name="iron-1" onChange={onChange}/>
                            <Input placeholder="F3" name="iron-2" onChange={onChange}/>
                            <Input placeholder="F4" name="iron-3" onChange={onChange}/>
                        </div>
                    </div>
                    <div className="form-group mb-4">
                        <label className="fst-italic form-label">Manganese (p.p.m)</label>
                        <div className="row">
                            <Input placeholder="F1" name="manganese-0" onChange={onChange}/>
                            <Input placeholder="F2" name="manganese-1" onChange={onChange}/>
                            <Input placeholder="F3" name="manganese-2" onChange={onChange}/>
                            <Input placeholder="F4" name="manganese-3" onChange={onChange}/>
                        </div>
                    </div>
                    <div className="form-group mb-4">
                        <label className="fst-italic form-label">Zinc (p.p.m)</label>
                        <div className="row">
                            <Input placeholder="F1" name="zinc-0" onChange={onChange}/>
                            <Input placeholder="F2" name="zinc-1" onChange={onChange}/>
                            <Input placeholder="F3" name="zinc-2" onChange={onChange}/>
                            <Input placeholder="F4" name="zinc-3" onChange={onChange}/>
                        </div>
                    </div>
                </div>
                <CoolNav nextStep={gotoNext} previousStep={gotoPrevious} />
            </div>
        </>
    );
};

export default CollectSoilProfileStep6;