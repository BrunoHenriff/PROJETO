import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PermIdentityIcon from "@material-ui/icons/PermIdentity"
;
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active Icon={HomeIcon} text="Inicio" />
      <SidebarOption Icon={SearchIcon} text="Explorar" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notificações" />
      <SidebarOption Icon={MailOutlineIcon} text="Mensagens" />
      <SidebarOption Icon={PermIdentityIcon} text="Perfil" />
      <SidebarOption Icon={MoreHorizIcon} text="Mais" />

      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Escrever Algo
      </Button>
    </div>
  );
}

export default Sidebar;
