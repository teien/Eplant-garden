import { NavLink } from "react-router-dom";
import "../../assets/styles/sidebar.css"
import "../../assets/styles/plantCard.css"

export default function SideBarFilter() {
    return (
        <div className="sidebar">
            <div className="m-auto">
                <NavLink to={"/shop"} className="nav-style" style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "#42c4c1" : "black",
                    };
                }}>
                    <h4 className="text-style">Plants And Trees</h4>
                </NavLink>
                <NavLink to={"/flower-plants"} className="nav-style" style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "#42c4c1" : "black",
                    };
                }}>
                    <h4 className="text-style">Flower Plants</h4>
                </NavLink>
                <NavLink to={"/for-beginner"} className="nav-style" style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "#42c4c1" : "black",
                    };
                }}>
                    <h4 className="text-style">For Beginner</h4>
                </NavLink>
                <NavLink to={"/pet-friendly"} className="nav-style" style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "#42c4c1" : "black",
                    };
                }}>
                    <h4 className="text-style">Pet friendly</h4>
                </NavLink>
                <NavLink to={"/new-arrival"} className="nav-style" style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "#42c4c1" : "black",
                    };
                }}>
                    <h4 className="text-style">New Arrival</h4>
                </NavLink>

            </div>
        </div>
    )
}