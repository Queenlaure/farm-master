import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cards from "../data/data";
import colors from "../consts/colors";
import "../styles/home.css";
import PageLayout from "../components/PageLayout";
import { ProjectsApi } from "../api/api";
import moment from "moment";

interface Nav { }

const ProjectDetails = () => {
  const [data, setData] = useState<any>({});
  const { slug } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const _data = await ProjectsApi.getBySlug(slug);
      if (_data) setData(_data[0]);
      console.log(_data);
    };

    console.log("Fetching project");

    fetch();
  }, []);

  const downloadProject = () => {
    const a = document.createElement("a");
    a.href = data.document;
    a.setAttribute("download", "true");
    a.click();
  };

  const formatNumber = (v: any) => {
    return new Intl.NumberFormat("en-US", {
      maximumSignificantDigits: 3,
    }).format(v);
  };

  const getROI = (project: any) => {
    const amount = project.amount;
    const number_of_shares = project.project_financial.number_of_shares;
    const percentage_profit_on_share =
      project.project_financial.percentage_profit_on_share;

    const share_value = amount / number_of_shares;
    const roi = share_value + (percentage_profit_on_share / 100) * share_value;
    return formatNumber(roi);
  };

  return (
    <PageLayout>
      <div>
        <div className="hero-section" style={{ backgroundImage: `url(${data.image})` }}>
          <section className="">
            <div className="d-flex gap-4 container lh-sm  text">
              <div
                className="lh-sm py-2 px-4 rounded"
                style={{
                  color: colors.white,
                  backgroundColor: colors.green,
                  // width: 200,
                  // height: 150,
                }}
              >
                <p
                  className="lh-sm mb-4"
                  style={{
                    fontSize: 16,
                    fontStyle: "italic",
                    marginLeft: 10,
                    marginTop: 5,
                  }}
                >
                  Starting <br />
                  <span style={{ fontWeight: "bold", fontSize: 22 }}>
                    {" "}
                    {moment(data?.user?.updated_at).format("MMM YYYY")}
                  </span>
                </p>
                <p
                  style={{
                    fontSize: 16,
                    fontStyle: "italic",
                    marginLeft: 10,
                    marginTop: 5,
                  }}
                >
                  Raising <br />
                  <span style={{ fontWeight: "bold", fontSize: 22 }}>
                    {" "}
                    {formatNumber(data.amount)}F
                  </span>
                </p>
              </div>
              <div className="lh-sm" style={{}}>
                <div style={{ objectFit: "cover" }}>
                  <img
                    src={data?.user?.avatar}
                    style={{ width: 70, height: 70, borderRadius: 100 }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      color: colors.white,
                      fontSize: 12,
                      marginTop: 8,
                      fontWeight: "bold",
                    }}
                  >
                    Invest from 1M for 1.8M in 2years.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-3 text-center">
          <div className="d-flex">
            <p
              className="text-center"
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 80,
                textDecoration: "underline",
              }}
            >
              {data.title}
            </p>
            {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-cloud-arrow-down-fill ms-2 mt-2"
            viewBox="0 0 16 16"
          >
            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z" />
          </svg> */}
          </div>

          <div className="d-flex gap-4 container lh-sm  text">
            <div style={{}}>
              <img
                src={data?.user?.avatar}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  objectFit: "cover",
                }}
              />
            </div>
            <p style={{ fontSize: 16, fontWeight: "bold", marginTop: 10 }}>
              Backed by {data?.user?.name}
            </p>
          </div>
        </div>

        <div>
          <div>
            <p
              className="mt-3 mx-3"
              style={{ fontStyle: "italic", fontSize: 20, fontWeight: "bold" }}
            >
              Project Brief
            </p>
            <p className="mx-3" style={{ marginTop: "-1rem" }}>
              {data.description}
            </p>
          </div>

          <div className="mx-4">
            <div className="d-flex">
              <p style={{ textDecoration: "underline" }}>Total Investment: </p>
              <span className="ms-2">
                {data?.project_financial?.amount_raised}
              </span>
            </div>

            <div className="d-flex ">
              <p style={{ textDecoration: "underline" }}>Number of shares: </p>
              <span className="ms-2">
                {data?.project_financial?.number_of_shares} shares
              </span>
            </div>

            <div className="d-flex">
              <p style={{ textDecoration: "underline" }}>Price per share:</p>
              <span className="ms-2"> 1.2m (+investment fee)</span>
            </div>

            <div className="d-flex">
              <p style={{ textDecoration: "underline" }}>Duration: </p>
              <span className="ms-2"> {data.duration}months</span>
            </div>

            <div className="d-flex" onClick={downloadProject}>
              <p style={{ textDecoration: "underline" }}>
                Download full project document
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-cloud-arrow-down-fill mt-2 ms-3"
                viewBox="0 0 16 16"
              >
                <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z" />
              </svg>
            </div>
          </div>

          <div className="d-flex ms-3">
            <button
              className="px-3 ms-2 px-5"
              style={{
                backgroundColor: colors.green,
                color: colors.white,
                padding: 10,
                border: 0,
                borderRadius: 8,
                marginRight: 45,
                marginLeft: 20,
              }}
            >
              Get Started
            </button>
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

export default ProjectDetails;
