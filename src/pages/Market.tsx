import React, { useState, useEffect } from "react";
import cards from "../data/data";
import colors from "../consts/colors";
import { Link } from "react-router-dom";
import { OrganicWaste } from "../api/api";
import PageLayout from "../components/PageLayout";

interface Market { }

const Market = () => {
  const [wastes, setWastes] = useState<Array<any>>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await OrganicWaste.getAll();
      console.log(data);
      setWastes(data);
    };

    fetch();
  }, []);

  return (
    <PageLayout>
      <div className={`pt-2 px-4`}>
        <h3
          className="py-3 fw-bold text-center"
          style={{
            color: colors.green,
          }}
        >
          Organic waste marketplace
        </h3>
        {wastes.map((waste, id) => (
          <Link
            to={`/card-details/${waste.slug}`}
            className="col"
            style={{ textDecoration: "none", color: colors.black }}
          >
            <div className={` card m-3`}>
              <div style={{ height: 200, overflow: 'hidden'  }}>
                <img src={waste.image} className="img-fluid rounded" width={"100%"} />
              </div>
              <div className={`card-body`} style={{ textAlign: "center" }}>
                <h5 className={`card-title`}>{waste.title}</h5>
                <p className={`card-text`}>{waste.description}</p>
                <p className={`card-text`}>{waste.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};

export default Market;
