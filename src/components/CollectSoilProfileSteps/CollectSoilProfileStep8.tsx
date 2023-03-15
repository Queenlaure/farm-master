import React, { useState } from "react";
import Input from "../Input";
// interface CollectSoilProfileStep8 { }

const SelectCrop = ({ crop, onChange }: any) => {
    return (
        <div className="py-2 d-flex justify-content-between">
            <div>
                <label htmlFor={'checkbox' + crop.id + 'xx'} className="form-label">{crop.name}</label>
            </div>
            <div>
                <input id={'checkbox' + crop.id + 'xx'} type="checkbox" className="form-cdontrol" name={crop.name} onChange={onChange}  />
            </div>
        </div>
    )
}

const CollectSoilProfileStep8 = ({ onNext, onPrevious, onChange, generateCalendar, onCropChange }: any) => {

    const [crops, setCrops] = useState([
        { name: 'Beans', id: 1, },
        { name: 'Tomatoes', id: 2, },
        { name: 'Corn', id: 3, },
        { name: 'Yam', id: 4, },
        { name: 'Potato', id: 5, },
    ])

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
                    <p className="page-title my-4 text-center">Last step, farmers preference</p>
                    <div className="form-group mb-4">
                        <label className="fst-italic form-label">What type of crops do you usually plant?</label>
                        <div className="row">
                            {crops.map((crop, key) => <SelectCrop key={key} crop={crop} onChange={onCropChange}/>)}
                        </div>
                    </div>
                    <div className="form-group mb-4">
                        <label className="fst-italic form-label">Give a name to this calendar</label>
                        <div className="row">
                            <Input placeholder="Calendar name" name="name" onChange={onChange} type="text"/>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={generateCalendar} className="my-4 py-3 btn w-100 btn-primary btn-lg fw-bold">Generage my planting calendar</button>
            <div className="text-center">
                <a href="" className="link text-decoration-none" onClick={gotoPrevious}>Back</a>
            </div>
        </>
    );
};

export default CollectSoilProfileStep8;
