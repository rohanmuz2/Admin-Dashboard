import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import OutboxIcon from '@mui/icons-material/Outbox';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';



const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">DekkoAdmin</span>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
        <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <li>
          <p className="title">LISTS</p>
            <PersonIcon className="icon"/>
            <span>Users</span>
          </li>
          <li>
            <Inventory2Icon className="icon"/>
            <span>Products</span>
          </li>
          <li>
            <OutboxIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <li>
          <p className="title">USEFUL LINKS</p>
            <AssessmentIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <li>
          <p className="title">SERVICE</p>
            <SettingsSystemDaydreamIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon"/>
            <span>Settings</span>
          </li>
          <li>
          <p className="title">USER</p>
            <AccountCircleIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
