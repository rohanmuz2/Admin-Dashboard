import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import ListIcon from '@mui/icons-material/List';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search"/>
          <SearchIcon/>
          </div>
          <div className="items">
            <div className="item">
              <LanguageIcon className="icon"/> 
              English
          </div>
          <div className="item">
            <DarkModeIcon className="icon"/>
            Dark Mode
          </div>
          <div className="item">
              <ChatBubbleIcon className="icon"/> 
              <div className="counter">2</div>
          </div>
          <div className="item">
              <NotificationsIcon className="icon"/> 
              <div className="counter">5</div>
          </div>
          <div className="item">
              <FullscreenIcon className="icon"/> 
              Fullscreen
          </div>
          <div className="item">
              <ListIcon className="icon"/> 
              Lists
          </div>
          <div className="item">
            <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            alt=""
            className="avatar"/>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
