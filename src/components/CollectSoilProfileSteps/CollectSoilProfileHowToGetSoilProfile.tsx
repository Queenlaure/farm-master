import React from "react";
import CoolNav from "./CoolNav";
// interface CollectSoilSampleProps { }

const CollectSoilProfileHowToGetSoilProfile = ({ onNext, onPrevious }: any) => {

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
                    <p className="page-title my-4 text-center">GET MY SOIL PROFILE</p>

                    <div className="mb-3">
                        <p className="my-2 fw-bold">How to get a soil profile?</p>
                        <p className="">It is important you get a soil profile from a verified lab to ensure the predictions are better and more accurate.</p>
                        <p>Fortunately, FarmMaster has <span className="fw-bold">partnered with various labs</span> to assist you get soil analysis at moderate costs.  </p>
                    </div>

                    <div className="my-3">
                        <a href="" className="link">Download soil report template</a>
                    </div>

                    <div className="">
                        <p className="fw-bold ">List of soil analysis labs</p>
                        <ol>
                            <li>
                                <p>Lab of Soil testers, Malabo, Equatorial Guinea, +240 403 828 392</p>
                            </li>
                            <li>
                                <p>Lab of Soil testers, Malabo, Equatorial Guinea, +240 403 828 392</p>
                            </li>
                            <li>
                                <p>Lab of Soil testers, Malabo, Equatorial Guinea, +240 403 828 392</p>
                            </li>
                            <li>
                                <p>Lab of Soil testers, Malabo, Equatorial Guinea, +240 403 828 392</p>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col">
                        <a onClick={gotoPrevious} className="link text-decoration-none">Back to home</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CollectSoilProfileHowToGetSoilProfile;