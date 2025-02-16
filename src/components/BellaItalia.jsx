import { Contain } from "./commonItems/Container";
import { Link } from "react-router-dom";
export const BellaItaliaItem = () => {
  return (
    <>
      <div>
        <Contain>
          <h3 className="text-lg md:text-xl font-bold font-roboto">
            <Link to="/">Home</Link> / All restaurants
          </h3>
        </Contain>
        <div className="max-w-[1600px] mx-auto mt-3 pb-12 bg-[url(/homePageImage/BellaPage.png)]">
            <Contain>
                <h1>Bella italia</h1>
            </Contain>
        </div>
      </div>
    </>
  );
};
