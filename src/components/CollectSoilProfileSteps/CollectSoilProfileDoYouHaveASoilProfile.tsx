import React from "react";
import CoolNav from "./CoolNav";
// interface CollectSoilSampleProps { }

const CollectSoilProfileDoYouHaveASoilProfile = ({ onNext, onPrevious, gotoPage }: any) => {

    const gotoNext = () => {
        onNext();
    }

    const gotoPrevious = () => {
        onPrevious();
    }

    return (
        <>
            <div className="container">
                <div className="">
                    <p className="page-title my-4 text-center">GET STARTED</p>
                    <p className="fst-italic fw-light my-4">Generating your calendar is based on a number of aspects, one of which is your soil profile. </p>

                    <div className="mb-5">
                        <p className="my-2 fw-bold">What is a soil profile?</p>
                        <p className="">Soil Profile is a profile that consists of all the secrets of soil. It is described as the vertical segment of soil that is surfaced by the soil pit. It is a section of different layers of soil also called the horizons.</p>
                    </div>

                    <div className="">
                        <p className="my-2 fw-bold">Do you have a soil profile</p>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col">
                        <button onClick={() => gotoPage(3)} className="w-100 btn btn-primary">Yes</button>
                    </div>
                    <div className="col">
                        <button onClick={() => gotoPage(2)} className="w-100 btn btn-outline-primary">No</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CollectSoilProfileDoYouHaveASoilProfile;