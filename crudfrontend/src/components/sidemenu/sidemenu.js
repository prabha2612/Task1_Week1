import { Menu } from "antd";


function Sidemenu(){
    return <div className="SideMenu">
        <Menu onClick={(item) => {
            //item.key
        }}
         items = {[
                {
                    label: "Dashboard",
                    key:'/'
                },
            ]} >
           
        </Menu>
    </div>;
}

export default Sidemenu;