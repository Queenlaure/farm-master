import cards from "../data/data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import colors from "../consts/colors";
import { OrganicWaste } from "../api/api";
import PageLayout from "../components/PageLayout";
import moment from "moment";
interface Nav {}

const CardDetails = () => {
  const [wasteDetails, setWasteDetails] = useState<any>({});
  const { slug } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const _data = await OrganicWaste.getBySlug(slug);
      setWasteDetails(_data[0]);
      console.log(_data);
    };

    fetch();
  }, []);

  return (
    <PageLayout>
      <div>
        <img src={wasteDetails.image} style={{ width: "100%", height: 300 }} />

        <div className="m-4">
          <div className="d-flex" style={{ fontSize: 20, fontWeight: "bold" }}>
            <p>{wasteDetails.title}</p>
            <p style={{ marginLeft: "auto" }}>10,000F</p>
          </div>
          <div className="d-flex" style={{ fontSize: 18, fontStyle: "italic" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-geo-alt-fill mt-1 me-2"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <p>{wasteDetails.location}</p>
          </div>
          {/* <div className="d-flex" style={{ fontSize: 18, fontStyle: "italic" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-person-fill mt-2 me-2"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
            <p>{wasteDetails.name} Here</p>
          </div> */}
          <div className="d-flex" style={{ fontSize: 18, fontStyle: "italic" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-alarm mt-2 me-2"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
              <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
            </svg>
            <p>{moment(wasteDetails.updated_at).fromNow()}</p>
          </div>
          <p className="description" style={{ margin: 5, marginBottom: 60 }}>
            {wasteDetails.description}
          </p>
          <div className="d-flex mt-3">
            <a
              className="px-4 ms-2"
              style={{
                backgroundColor: colors.green,
                color: colors.white,
                padding: 10,
                border: 0,
                borderRadius: 8,
                marginRight: 20,
              }}
              href={`https://wa.link/69f97l`}
              target="_blank"
            >
              contact on Wattsapp
            </a>
            <button
              type="button"
              className="btn btn-outline-success px-5"
              style={{}}
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CardDetails;
