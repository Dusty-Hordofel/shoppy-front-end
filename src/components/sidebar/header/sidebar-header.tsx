// import { Button } from "@/components/ui/Button";
import CommunityIcon from "@/assets/icons/CommunityIcon";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/redux/use-redux-hooks";
import React from "react";
import ContactIcon from "./Contact";

interface SidebarHeaderProps {}

const SidebarHeader = (props: SidebarHeaderProps) => {
  const dispatch = useAppDispatch();
  const { user, status, error } = useAppSelector((state) => ({
    ...state.user,
  }));

  return (
    <div>
      <Button className="w-[40px] h-[40px] rounded-full flex items-center justify-center">
        <img
          src={user?.picture}
          alt={user?.name}
          className="w-full h-full rounded-full object-cover"
        />
      </Button>

      <ul className="flex items-center gap-x-2 5 bg-red-200">
        <li>
          <button className="btn">
            <CommunityIcon />
          </button>
        </li>

        {/* <li>
          <Button className="btn">
            <StoryIcon className="dark:fill-dark_svg_1" />
          </Button>
        </li> */}
        {/* <li>
          <Button className="btn">
            <ChatIcon className="dark:fill-dark_svg_1" />
          </Button>
        </li> */}
        {/* <li className="relative" onClick={() => setShowMenu((prev) => !prev)}> */}
        {/* <Button className={`btn ${showMenu ? "bg-dark_hover_1" : ""}`}> */}
        {/* <DotsIcon className="dark:fill-dark_svg_1" /> */}
        {/* </Button> */}
        {/* {showMenu ? (
                <Menu setShowCreateGroup={setShowCreateGroup} />
              ) : null} */}
        {/* </li> */}
      </ul>
    </div>
  );
};

export default SidebarHeader;
