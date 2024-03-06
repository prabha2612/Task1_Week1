import { BrowserRouter, Routes, Route} from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
             <Route path="/" element={Dashboard}></Route>
             </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes