import React from "react";
import colors from "../consts/colors";

type Props = {
  date: string;
  corperative: string;
  backgroundColor?: any;
};

const ProjectCard: React.FC<Props> = ({
  date,
  corperative,
  backgroundColor,
}) => {
  return (
    <div
      className="text-center lh-sm text-white rounded"
      style={{
        backgroundColor: colors.green,
        padding: 40,
      }}
    >{backgroundColor}
      <p className="fw-bold">{date}</p>
      <p>{corperative}</p>
    </div>
  );
};

export default ProjectCard;
