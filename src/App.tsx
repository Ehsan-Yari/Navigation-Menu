import {
  IoHomeOutline,
  IoPersonOutline,
  IoChatbubbleOutline,
  IoCameraOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import classNames from "classnames";
import { useState } from "react";

const App = () => {
  const [active, setActive] = useState("home");
  const menuItems = [
    {
      name: "Home",
      icon: <IoHomeOutline />,
    },
    {
      name: "Profile",
      icon: <IoPersonOutline />,
    },
    {
      name: "Chat",
      icon: <IoChatbubbleOutline />,
    },
    {
      name: "Camera",
      icon: <IoCameraOutline />,
    },
    {
      name: "Settings",
      icon: <IoSettingsOutline />,
    },
  ];
  return (
    <div className="flex min-h-screen flex-col items-center justify-end overflow-hidden bg-primary font-Poppins">
      <nav className="h-[70px] w-full rounded-t-[10px] bg-white px-3">
        <ul className="relative z-20 flex h-full items-center justify-center">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative block h-full w-full text-center"
              onClick={() => setActive(item.name)}
            >
              <a href="#" className="w-fulll relative block h-full font-medium">
                <span
                  className={classNames(
                    "block absolute left-1/2 transform -translate-x-1/2 text-3xl transition-all duration-500",
                    active === item.name
                      ? "-translate-y-[20px] top-0"
                      : "translate-y-1/2 top-2"
                  )}
                >
                  {item.icon}
                </span>
                <span
                  className={classNames(
                    "block transform transition-all duration-500 ",
                    active === item.name
                      ? "translate-y-10 opacity-100 text-blue-600"
                      : "translate-y-14 opacity-0"
                  )}
                >
                  {item.name}
                </span>
              </a>
            </li>
          ))}
          <li
            className="indicator absolute -top-10 -z-10 block h-[70px] w-[70px] rounded-full border-[6px] border-primary bg-blue-600 transition-all duration-500"
            style={{
              left: `calc((94vw) * ${menuItems.findIndex(
                (item) => item.name === active
              )} / 5 + 1.5px)`,
            }}
          />
        </ul>
      </nav>
    </div>
  );
};

export default App;
