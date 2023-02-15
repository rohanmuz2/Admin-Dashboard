import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { KeyboardArrowUpOutlined } from "@mui/icons-material";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={4}/>
        </div>
        <p className="title">Total Sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">Previous transactions processing. Last payment may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <div className="resultAmount">
                <KeyboardArrowDownOutlined fontSize="small" />
                $10K
                </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <div className="resultAmount">
                <KeyboardArrowUpOutlined fontSize="small" />
                $10K
                </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <div className="resultAmount">
                <KeyboardArrowUpOutlined fontSize="small" />
                $150K
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured