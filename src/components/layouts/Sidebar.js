import { NavLink } from "react-router-dom";
import "../../assets/styles/sidebar.css"
import "../../assets/styles/plantCard.css"

export default function SideBarFilter() {
    return (
        <div className="sidebar">
            <div className="m-auto">
                <NavLink to={"/plantsAndTrees"} className="nav-style" style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "orange" : "black",
                    };
                }}>
                    <h5 className="text-style">Plants And Trees</h5>
                </NavLink>
                <NavLink to={"/flower-plants"} className="nav-style" style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "orange" : "black",
                    };
                }}>
                    <h5 className="text-style">Flower Plants</h5>
                </NavLink>
                <NavLink to={"/for-beginner"} className="nav-style" style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "orange" : "black",
                    };
                }}>
                    <h5 className="text-style">For Beginner</h5>
                </NavLink>
                <NavLink to={"/pet-friendly"} className="nav-style" style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "orange" : "black",
                    };
                }}>
                    <h5 className="text-style">Pet friendly</h5>
                </NavLink>
                <NavLink to={"/new-arrival"} className="nav-style" style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "orange" : "black",
                    };
                }}>
                    <h5 className="text-style">New Arrival</h5>
                </NavLink>

            </div>
        </div>
    )
}