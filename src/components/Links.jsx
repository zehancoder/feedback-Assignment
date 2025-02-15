import { Contain } from "./commonItems/Container";
import myData from "../dataBase/Data.json"
import {NavLink} from "react-router-dom"
export const LinksItem = () => {
  return (
    <>
      <Contain className={"mx-auto"}>
        <div className="hidden lg:flex gap-6 flex-wrap items-center px-2 justify-center lg:justify-between">
          {myData.navberTwo.map(({Text, img, link}, i) => (
            <NavLink key={i} to={link} className={"text-center text-grays py-2 font-medium space-y-2"}>
                <img src={img} alt="" className="mx-auto"/>
                <p className="">{Text}</p>
            </NavLink>
          ))}
        </div>
      </Contain>
    </>
  );
};
