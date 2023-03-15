import React from "react";
const CoolNav = ({ nextStep, previousStep }: any) => {
    return (
        <div className="floating-btns my-5">
            <div className="d-flex justify-content-between">
                <div className="">
                    <button className="btn btn-outline-secondary" onClick={previousStep}> &lt; Prev</button>
                </div>
                <div className="">
                    <button className="btn btn-secondary" onClick={nextStep}>Next &gt; </button>
                </div>
            </div>
        </div>
    )
}

export default CoolNav;