import React, { useEffect, useState } from "react";
import colors from "../consts/colors";
import { Link } from "react-router-dom";
import "../styles/home.css";
import PageLayout from "../components/PageLayout";
import { OrganicWaste, ProjectsApi } from "../api/api";
import moment from "moment";

interface Home { }

const Home = () => {
  const [projects, setProjects] = useState<any>([]);
  const [organicWastes, setOrganicWastes] = useState<any>([]);

  useEffect(() => {
    const fetch = async () => {
      const _projects = await ProjectsApi.getAll();
      if (_projects) setProjects(_projects);
    };

    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const _organicWastes = await OrganicWaste.getAll();
      if (_organicWastes) setOrganicWastes(_organicWastes);
    };

    fetch();
  }, []);

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
        <div className="hero-section">
          <section className="">
            <div className="container text">
              <div className="text-center text-white">
                <h1 className=" mb-4">Farm Master</h1>
                <p>
                  AI powered farming calendar generator for sustainable land use
                  and optimal crop yield.
                </p>
              </div>
              <div className="row justify-content-center text-white lh-sm mt-5 text-center">
                <button
                  className="col btn btn-primary me-4"
                  data-bs-toggle="modal"
                  data-bs-target="#reg-modal"
                >
                  <Link
                    to={"/soil-profile"}
                    style={{ textDecoration: "none", color: colors.white }}
                  >
                    {" "}
                    Get my calendar
                  </Link>{" "}
                </button>
                <button
                  className="col btn"
                  data-bs-toggle="modal"
                  data-bs-target="#reg-modal"
                  style={{
                    backgroundColor: colors.black,
                    color: colors.white,
                    fontSize: 16,
                  }}
                >
                  Sign-up
                </button>
              </div>
            </div>
          </section>
        </div>

        <div className="services px-4 mt-5">
          <h3
            className=""
            style={{
              fontWeight: "bold",
              color: colors.green,
              textAlign: "center",
            }}
          >
            OUR SERVICES
          </h3>
          <div className=" container mt-5">
            <div className="row mb-5">
              <div className="col-4">
                <img
                  src={require("../consts/prediction.png")}
                  className="img-fluid"
                />
              </div>
              <div className="col-8">
                <p className="fw-bold">Farm Prediction</p>
                <p className="">
                  Predictions are made on which kinds of crops are best produced
                  on your farmland and the season of production.
                </p>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-8">
                <p className="fw-bold">Organic waste market</p>
                <p className="">
                  Here, people are able to sell their organic waste to farmers
                  at moderate prices there by ...
                </p>
              </div>
              <div className="col-4">
                <img
                  src={require("../consts/organic.png")}
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-4">
                <img
                  src={require("../consts/funds.png")}
                  className="img-fluid"
                />
              </div>
              <div className="col-8">
                <p className="fw-bold">Agro project funding</p>
                <p className="">
                  Funds are provided to farmers who have little capital to
                  finance their cultivation for that season and readily
                  availible manure.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-3 py-5 px-3"
          style={{ backgroundColor: colors.green }}
        >
          <div className="text-center col-lg-12 col-md-12 col-sm-12 ">
            <h3 className="text-white mb-4">ITS FREE</h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-12 d-sm-block  col-sm-12 lh-sm text-center">
              <p className="  " style={{ color: colors.white }}>
                In 5 minutes, get a farm calendar which will help you maximize
                your yield the next season. What are you waiting for.
              </p>

              <Link
                className="btn btn-outline-primary fw-bold px-4 py-2"
                to={"/soil-profile"}
              >
                Generate my crop calendar
              </Link>
            </div>
          </div>
        </div>

        <div className="py-5 px-4" style={{ backgroundColor: colors.grey }}>
          <h3
            style={{
              fontWeight: "bold",
              color: colors.green,
              textAlign: "center",
            }}
          >
            PROJECTS
          </h3>

          <div className="row mt-5">
            {projects.map((project: any, key: any) => (

              <Link
                to={`/project-details/${project.slug}`}
                style={{ textDecoration: "none" }}
                className="my-4 row" key={key}
              >
                <div
                  className="col-5 text-center py-5 text-white"
                  style={{
                    backgroundColor: colors.green,
                    borderRadius: 10,
                  }}
                >
                  <p className="fw-bold">
                    {moment(project.start_date).format("MMM Y")}
                  </p>
                  <p className="mb-0">By {project.cooperative?.name}..</p>
                </div>
                <div className="col-7 text-dark">
                  <p className="fw-bold">{project.title}</p>
                  <div className="d-fle">
                    <p>
                      {formatNumber(project.amount)}F @ {project.duration}months
                    </p>
                    <p className="" style={{ marginLeft: "auto" }}>
                      {getROI(project)}F ROI
                    </p>
                  </div>
                  <div className="d-flex">
                    {formatNumber(project.project_financial?.amount_raised)} raised
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "end", marginRight: 25 }}>
            <Link
              className=""
              style={{ fontStyle: "italic", color: colors.green }}
              to={"/projects"}
            >
              see more...
            </Link>
          </div>
        </div>

        <div className="my-5 px-4">
          <h3
            style={{
              fontWeight: "bold",
              color: colors.green,
              textAlign: "center",
            }}
          >
            ORGANIC WASTE MARKET
          </h3>
          <div className="row mt-5 " style={{ justifyContent: "space-around" }}>
            {organicWastes.map((organicWaste: any, key: any) => (


              <Link
                to={`/card-details/${organicWaste.slug}`}
                style={{ textDecoration: "none", color: colors.black }}
                className="col-lg-3 col-md-4 col-sm-12" key={key}
              >
                <div className="card border-0">
                  <img src={organicWaste.image} className="rounded img-fluid" />
                  <div className="card-body">
                    <div
                      className="card-text lh-sm"
                      style={{ textAlign: "center" }}
                    >
                      <p style={{ fontSize: 19, fontWeight: "bold" }}>
                        {organicWaste.title}
                      </p>
                      <p style={{ fontSize: 16 }}>{organicWaste.description}</p>
                      <p style={{ fontStyle: "italic", fontSize: 16 }}>
                        {organicWaste.location}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

            ))}
          </div>
          <div style={{ textAlign: "end", marginRight: 25 }}>
            <Link
              className=""
              style={{ fontStyle: "italic", color: colors.green }}
              to={"/Market"}
            >
              see more...
            </Link>
          </div>
        </div>
        <div className="py-5 px-4" style={{ backgroundColor: colors.grey }}>
          <h3 className="text-center fw-bold" style={{ color: colors.green }}>
            TESTIMONIES
          </h3>
          <div className="row mt-5 " style={{ justifyContent: "space-around" }}>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card border-0">
                <img
                  src={require("../consts/farmer.jpg")}
                  className="img-fluid rounded"
                />
                <div className="card-body">
                  <div
                    className="card-text lh-sm"
                    style={{ textAlign: "center" }}
                  >
                    <p className="fw-light">
                      Farm master has helped me better plan my planting season.
                      Their algorithm helped me get a better yield
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="text-center px-4 py-1 pt-4 fw-bold">
          <p className="text-dark"> FarmMaster © 2022</p>
          <p className="text-dark"> Developed during TegPlanet Hackerthon</p>
        </div>
      </footer>
    </PageLayout>
  );
};

export default Home;
