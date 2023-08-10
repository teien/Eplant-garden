import Card from "../../components/Card";
import getListProducts from "../../data";
import { useState, useEffect } from "react";

export default function PlantsAndTrees() {

    const [renderList, setRenderList] = useState([])
 
    useEffect(() => {
        const listData = getListProducts().filter((item) => item.type === "plant&tree")
        setRenderList(listData)
    }, [])

    return(
        <div className="row justify-content-evenly">
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
    )
}

export function FlowerPlants() {

    const [renderList, setRenderList] = useState([])
 
    useEffect(() => {
        const listData = getListProducts().filter((item) => item.type === "flower plants")
        setRenderList(listData)
    }, [])

    return(
        <div className="row ">
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
    )
}
export function ForBeginner() {

    const [renderList, setRenderList] = useState([])
 
    useEffect(() => {
        const listData = getListProducts().filter((item) => item.status === "Easy Care")
        setRenderList(listData)
    }, [])

    return(
        <div className="row justify-content-evenly">
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
    )
}
export function PetFriendly() {

    const [renderList, setRenderList] = useState([])
 
    useEffect(() => {
        const listData = getListProducts().filter((item) => item.status === "Pet-friendly")
        setRenderList(listData)
    }, [])

    return(
        <div className="row justify-content-evenly">
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
    )
}
export function NewArrival() {

    const [renderList, setRenderList] = useState([])
 
    useEffect(() => {
        const listData = getListProducts().filter((item) => item.status === "New Arrival")
        setRenderList(listData)
    }, [])

    return(
        <div className="row justify-content-evenly">
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
    )
}