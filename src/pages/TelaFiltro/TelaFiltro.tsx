import React, { useEffect, useRef, useState } from "react";
import "./TelaFiltro.css";
import axios from "axios";
import MHHeader from "../../Components/MHHeader/MHHeader";

interface IFilteredItem {
    addressImage:string;
    view:string;
    downloads:string;
    category:string;
    urlFile:string;
}

function FilteredItem(props:IFilteredItem) {
    return(
        <div className="container-item">
            <div className="container-item-image">
                <img src={props.addressImage} style={{ width:'100px', height:'auto' }} />
            </div>
            <div className="container-description">
                <label>Views</label>
                <label style={{ fontWeight:'bold' }}>{props.view}</label>

                <br/> 

                <label>DOWNLOADS</label>
                <label style={{ fontWeight:'bold' }}>{props.downloads}</label>

                <br/> 
                
                <label>CATEGORY</label>
                <label style={{ fontWeight:'bold' }}>{props.category}</label>

                <br/>
                
                <a className="btn-download" target="_blank" href={props.urlFile}>
                    DOWNLOAD
                </a>
            </div>
        </div>
    )
}

interface ITelaFiltro { 
    getTitulo:string;
    setTitulo:React.Dispatch<React.SetStateAction<string>>;
    
    getFiltro:string;
    setFiltro:React.Dispatch<React.SetStateAction<string>>;
}

type TFile = {
    ext:string;
    url:string;
}

type  TCoverImage = {
    id:string;
    url:string;
}

type TData= {
    coverImage:TCoverImage;
    views:string;
    downloads:string;
    category:string;
    file:TFile;
}

export default function TelaFiltro(props:ITelaFiltro) {
    const [getData, setData] = useState<TData[]>([]);
    const [getDataFiltered, setDataFiltered] = useState<TData[]>([]);

    const getItems = async () => {
        await axios.get("https://strapi-production-dad8.up.railway.app/api/wallpapers?populate=*")
        .then((content) => {
            setData(content.data.data);
        })
        .catch(e => console.log("erro=", e))
    }

    useEffect(() => {
        const filteredData = getData.filter(content => content.category === props.getFiltro);
        setDataFiltered(filteredData);
    }, [getData, props.getFiltro]);
    
    useEffect(() => {
        getItems();
    }, []);

    return(
        <div className="container-filter">
            <div className='container-header'>
                <MHHeader />
            </div>
            <div className="container-options">
                <div className="op-filter" onClick={() => { props.setFiltro('plants') }}>Plants</div>
                <div className="op-filter" onClick={() => { props.setFiltro('animals') }}>Nature</div>
                <div className="op-filter" onClick={() => { props.setFiltro('*') }}>Wallpapers</div>
                <div className="op-filter" onClick={() => { props.setFiltro('city') }}>Architecture & Interiors</div>
            </div>

            <div className="container-filtered-items">

                <div className="container-title">
                    {props.getTitulo}
                </div>

                <div className="container-all-items"> 
                {
                    props.getFiltro !== '*' && props.getFiltro !== '' ?
                    getDataFiltered.map((content, index) => {
                        return(
                            <FilteredItem 
                                key={index}
                                addressImage={content.coverImage.url}
                                view={content.views}
                                downloads={content.downloads}
                                category={content.category}
                                urlFile={content.file.url}
                            />
                        )
                    })
                    :
                    getData.map((content, index) => {
                        return(
                            <FilteredItem 
                                key={index}
                                addressImage={content.coverImage.url}
                                view={content.views}
                                downloads={content.downloads}
                                category={content.category}
                                urlFile={content.file.url}
                            />
                        )
                    })
                }

                </div>
            </div>
        </div>
    )
}