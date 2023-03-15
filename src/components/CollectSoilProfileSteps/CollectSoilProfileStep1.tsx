import React from "react";
import CoolNav from "./CoolNav";
// interface CollectSoilSampleProps { }

const CollectSoilProfileStep1 = ({ onNext, onPrevious }: any) => {

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
                    <p className="page-title my-4 text-center">Have a soil profile report document?</p>
                    <div className="">
                        <button className="my-3 w-100 btn btn-primary btn-lg">Yes, upload document</button>
                        <button onClick={gotoNext} className="my-3 w-100 btn btn-primary btn-lg">No, manually enter report</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CollectSoilProfileStep1;