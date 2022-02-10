import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import  './Home.css';
import { userData } from './dummyDatas';
import Widgetlg from '../../components/WidgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import Chart from '../../components/chart/Chart';

export default function Home() {
  return(
  <div className='home'>

  <FeaturedInfo />
  <Chart data={userData} title="User Analytics"  grid dataKey="Active User" />
  <div className='homeWidgets'>
    <WidgetSm />
    <Widgetlg />
  </div>
  </div>
  
  );
}
