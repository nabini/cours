import './WidgetLg.css';

function Widgetlg() {
    const Button = ({type}) =>{
        return <button className={' widgetLgButton ' + type }>{type}</button>
    }
    return (
        <div  className='widgetlg'>
            <h3 className="widgetLgTitle">Latest transaction</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLTh">Customer</th>
                    <th className="widgetLTh">Date</th>
                    <th className="widgetLTh">Amount</th>
                    <th className="widgetLTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="/imge.png" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Batman Man</span>
                    </td>
                    <td className="widgetLgDate">08 Fab 2022</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <th className="widgetLTh">Customer</th>
                    <th className="widgetLTh">Date</th>
                    <th className="widgetLTh">Amount</th>
                    <th className="widgetLTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="/imge.png" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Batman Man</span>
                    </td>
                    <td className="widgetLgDate">08 Fab 2022</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Declined" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <th className="widgetLTh">Customer</th>
                    <th className="widgetLTh">Date</th>
                    <th className="widgetLTh">Amount</th>
                    <th className="widgetLTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="/imge.png" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Batman Man</span>
                    </td>
                    <td className="widgetLgDate">08 Fab 2022</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Pending" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <th className="widgetLTh">Customer</th>
                    <th className="widgetLTh">Date</th>
                    <th className="widgetLTh">Amount</th>
                    <th className="widgetLTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="/imge.png" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Batman Man</span>
                    </td>
                    <td className="widgetLgDate">08 Fab 2022</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
            </table>
        
        </div>
    );
}

export default Widgetlg;
