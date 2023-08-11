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
                    <h4 className="text-styles">All</h4>
                </NavLink>
                <NavLink to={"/plant-and-tree"} className="nav-style" style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "#42c4c1" : "black",
                    };
                }}>
                    <h4 className="text-styles">Plants And Trees</h4>
                </NavLink>
                <NavLink to={"/flower-plants"} className="nav-style" style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "#42c4c1" : "black",
                    };
                }}>
                    <h4 className="text-styles">Flower Plants</h4>
                </NavLink>
                <NavLink to={"/for-beginner"} className="nav-style" style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "#42c4c1" : "black",
                    };
                }}>
                    <h4 className="text-styles">Best for Beginner</h4>
                </NavLink>
                <NavLink to={"/pet-friendly"} className="nav-style" style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "#42c4c1" : "black",
                    };
                }}>
                    <h4 className="text-styles">Pet friendly Plants</h4>
                </NavLink>
                <NavLink to={"/new-arrival"} className="nav-style" style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "#42c4c1" : "black",
                    };
                }}>
                    <h4 className="text-styles">New Arrival</h4>
                </NavLink>

            </div>
        </div>
    )
}