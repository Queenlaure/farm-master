import React, { useState } from "react";
import Input from "../Input";
import CoolNav from "./CoolNav";

const CollectSoilProfileStep7 = ({ onNext, onPrevious }: any) => {


    const gotoNext = () => {
        onNext();
    }

    const gotoPrevious = () => {
        onPrevious();
    }

    return (
        <>
            <div className="container mt-5 pt-5 text-center">
                <div>
                    <p className="page-title my-4 text-center">Generating weather profile</p>
                    <p className="fst-italic">Connecting to weather API</p>
                    <img className="my-4" src="./loading.gif" />
                    <p>Please be patient</p>
                </div>
                <CoolNav nextStep={gotoNext} previousStep={gotoPrevious} />
            </div>
        </>
    );
};

export default CollectSoilProfileStep7;