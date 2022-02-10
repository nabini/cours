import "./FeaturedInfo.css";
import { ArrowDownward ,ArrowUpward} from "@material-ui/icons";
export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featureMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredRate">
            $-11,4
            <ArrowDownward className="featureIcon negative"  />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featureMoneyContainer">
          <span className="featuredMoney">$4,225</span>
          <span className="featuredRate">
            $-1,4
            <ArrowUpward className="featureIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featureMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredRate">
            $+2,4
            <ArrowDownward className="featureIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

    </div>
  );
}
