import React, { useState, useEffect } from "react";
import "./../styles/calendar.css";
import moment from "moment";
import useCalendar from "../context/useCalendar";
import PageLayout from "../components/PageLayout";
import { useParams } from "react-router-dom";
import { Calendar } from "../api/api";
// interface FarmCalendarProps { }

const CalendarCard = ({ data, index }: any) => {
  if (!data.crop) {
    return (
      <div className="border rounded text-center border-secondary mb-2 p-2 no-farming-period-calendar">
        <div className="">
          <h5 className="my-3 fw-bold">
            {data.crop ? data.crop.name : "Let the farm fallow"}
          </h5>
          <p className="">
            {data.start_date} -- {data.end_date}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="border rounded bg-light mb-2 calendar-item">
      <div className="row">
        <div className="col-4">
          <img
            src={data.crop.image}
            className="img-fluid rounded"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div className="col-8 p-2">
          <h5 className="my-3 fw-bold">
            [{index + 1}] {data.crop.name}
          </h5>
          <p className="">
            {moment(data.start_date).format("DD MMM Y")} --{" "}
            {moment(data.end_date).format("DD MMM Y")}
          </p>
        </div>
      </div>
    </div>
  );
};

const FarmCalendar = () => {
  // const { calendar: ogCalendar } = useCalendar();
  const { slug } = useParams();
  const [calendar, setCalendar] = useState<any>({});

  useEffect(() => {
    const fetch = async () => {
      const _data = await Calendar.getBySlug(slug);
      console.log(_data);
      setCalendar(_data[0]);
    };

    fetch();
  }, []);

  const [ocalendar, setoCalendar] = useState([
    {
      id: 1,
      start_date: "2022-02-12",
      end_date: "2022-04-11",
      crop_id: 2,
      crop: { image: "corn.png", name: "Corn", id: 2 },
    },
    {
      id: 2,
      start_date: "2022-04-25",
      end_date: "2022-05-22",
      crop_id: 3,
      crop: { image: "groundnuts.png", name: "Groundnuts", id: 3 },
    },
    {
      id: 3,
      start_date: "2022-05-08",
      end_date: "2022-06-29",
      crop_id: null,
      crop: null,
    },
    {
      id: 4,
      start_date: "2022-06-16",
      end_date: "2022-09-24",
      crop_id: 4,
      crop: { image: "tomatoes.png", name: "Tomatoes", id: 4 },
    },
    {
      id: 2,
      start_date: "2022-04-12",
      end_date: "2022-05-19",
      crop_id: 3,
      crop: { image: "groundnuts.png", name: "Groundnuts", id: 3 },
    },
    {
      id: 5,
      start_date: "2022-06-11",
      end_date: "2022-09-08",
      crop_id: 4,
      crop: { image: "pepper.png", name: "Pepper", id: 4 },
    },
  ]);

  return (
    <PageLayout>
      <div className="container ">
        <div>
          <div className="fw-light mt-3 text-center">
            <i className="fa fa-check-circle text-success my-3 fa-2x"></i>
            <p>Calendar Generated Succesfully!!!</p>
          </div>
          <p className="page-title text-center">
            [CL#{calendar.id}] - {calendar.name}
          </p>
          {calendar?.farm_calendar_crops?.map((item: any, key: number) => (
            <CalendarCard key={key} index={key} data={item} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default FarmCalendar;
