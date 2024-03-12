import Audit from "../get/audit";
import Budget from "../get/projectbudget";

function Content (){
    return (
      <div className="pagecontent">
        <Audit />
        <Budget />
      </div>
    );
}

export default Content;