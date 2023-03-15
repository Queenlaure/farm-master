import React, { useEffect, useState } from "react";
import projects from "../data/projects";
import { Link } from "react-router-dom";
import colors from "../consts/colors";
// import randomColor from "randomcolor";
import ProjectCard from "../components/Projectcard";
import { ProjectsApi } from "../api/api";
import PageLayout from "../components/PageLayout";
import moment from "moment";

interface Projects { }

const Projects = () => {
  const [projects, setProjects] = useState<Array<any>>([]);
  const [isLoading, setLoading] = useState(true);

  // const StateButton: React.FC<Props> = ({ btnText, backgroundColor }) => {
  //     return <button className={`ms-auto btn btn-sm btn-secondary `}>{btnText}</button>;
  // };

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const data = await ProjectsApi.getAll();
      console.log(data);
      setProjects(data);
      setLoading(false);
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

  const randomColor = require("randomcolor");
  const generateColor = () =>
    randomColor({
      luminosity: "dark",
      format: "rgba",
      alpha: "0.8",
    });

  return (
    <PageLayout>
      <div className="px-4 py-5 pt-2">
        <h3
          className="py-3 fw-bold text-center"
          style={{
            color: colors.green,
          }}
        >
          Approved agricultural projects for funding
        </h3>
        {isLoading && (
          <div
            style={{
              width: "100%",
              height: "90vh",
              background: "rgb(199 210 213 / 0%)",
              backdropFilter: "blur(4px)",
              zIndex: "99",
              display: "grid",
              placeContent: "center",
            }}
          >
            <img className="my-4" src="./loading.gif" />
          </div>
        )}
        {projects.map((project) => (
          <Link
            to={`/project-details/${project.slug}`}
            className="col"
            style={{ textDecoration: "none", color: colors.black }}
          >
            <div
              className="row row-cols-1 row-cols-md-2 card rounded mb-3"
            >
              <ProjectCard
                date={moment(project.updated_at).format("MMM YYYY")}
                corperative={project.title}
              />
              <div className=" col ms-2 lh-sm mt-3">
                <p style={{ fontSize: 15, fontWeight: "bold" }}>
                  {project.title}
                </p>
                <div className="d-flex lh-sm" style={{ fontSize: 13 }}>
                  <p>

                    {formatNumber(project.amount)}F @ {project.duration}months
                  </p>
                  <p className="" style={{ marginLeft: "50px" }}>
                    {/* {Number(
                      project.project_financial.percentage_profit_on_share
                    ) * 100} */}
                    {getROI(project)}F ROI
                  </p>
                </div>
                <div className="d-flex lh-sm" style={{ fontStyle: "italic" }}>
                  <p>{formatNumber(project.project_financial.amount_raised)}F raised</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </PageLayout>
  );
};

export default Projects;
