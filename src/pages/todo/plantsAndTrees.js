import Card from "../../components/Card";
import getListProducts from "../../data";
import { useState, useEffect } from "react";
import SideBarFilter from "../../components/layouts/Sidebar"

export function AllProduct(){
    const [renderList, setRenderList] = useState([])

    useEffect(() => {
        const listData = getListProducts()
        setRenderList(listData)
    }, [])
    return (
        <div className="row mx-0">
            <div className="col-2">

                <SideBarFilter />
            </div>
            <div className="row mx-0 justify-content-evenly col-10">
                {
                    renderList.map((item) => {
                        return (
                            <div className="col-3 py-3" key={item.id}>
                                <Card data={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default function PlantsAndTrees() {

    const [renderList, setRenderList] = useState([])

    useEffect(() => {
        const listData = getListProducts().filter((item) => item.type === "plant&tree")
        setRenderList(listData)
    }, [])

    return (
        <div className="row mx-0">
            <div className="col-2">

                <SideBarFilter />
            </div>
            <div className="row mx-0 justify-content-evenly col-10">
                {
                    renderList.map((item) => {
                        return (
                            <div className="col-3 py-3" key={item.id}>
                                <Card data={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export function FlowerPlants() {

    const [renderList, setRenderList] = useState([])

    useEffect(() => {
        const listData = getListProducts().filter((item) => item.type === "flower plants")
        setRenderList(listData)
    }, [])

    return (
        <div className="row mx-0">
            <div className="col-2">

                <SideBarFilter />
            </div>

            <div className="row col-10 mx-0">
                {
                    renderList.map((item) => {
                        return (
                            <div className="col-3 py-3" key={item.id}>
                                <Card data={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export function ForBeginner() {

    const [renderList, setRenderList] = useState([])

    useEffect(() => {
        const listData = getListProducts().filter((item) => item.status === "Easy Care")
        setRenderList(listData)
    }, [])

    return (
        <div className="row mx-0">
            <div className="col-2">

                <SideBarFilter />
            </div>
            <div className="row justify-content-evenly col-10 mx-0">
                {
                    renderList.map((item) => {
                        return (
                            <div className="col-3 py-3" key={item.id}>
                                <Card data={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}
export function PetFriendly() {

    const [renderList, setRenderList] = useState([])

    useEffect(() => {
        const listData = getListProducts().filter((item) => item.status === "Pet-friendly")
        setRenderList(listData)
    }, [])

    return (
        <div className="row mx-0">
            <div className="col-2">

                <SideBarFilter />
            </div>
            <div className="row mx-0 justify-content-evenly col-10">
                {
                    renderList.map((item) => {
                        return (
                            <div className="col-3 py-3" key={item.id}>
                                <Card data={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export function NewArrival() {

    const [renderList, setRenderList] = useState([])

    useEffect(() => {
        const listData = getListProducts().filter((item) => item.status === "New Arrival")
        setRenderList(listData)
    }, [])

    return (
        <div className="row mx-0">
            <div className="col-2">

                <SideBarFilter />
            </div>
            <div className="row mx-0 justify-content-evenly col-10">
                {
                    renderList.map((item) => {
                        return (
                            <div className="col-3 py-3" key={item.id}>
                                <Card data={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
