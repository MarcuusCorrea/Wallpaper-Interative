import React, { useEffect, useState } from "react";
import "./MHGallery.css";
import { useNavigate } from "react-router-dom";


interface IBtnFilter {
    nome:string;
    action:()=>void;
}

function BtnFilter(props:IBtnFilter) {
    return(
        <div 
            className="btn-filter" 
            onClick={props.action}
        >
            {props.nome}
        </div>
    )
}

interface IMHGallery {
    imageref:string[];
    
    getTitulo:string;
    setTitulo:React.Dispatch<React.SetStateAction<string>>;
    
    getFiltro:string;
    setFiltro:React.Dispatch<React.SetStateAction<string>>;
}

export default function MHGallery(props:IMHGallery) {
    const total = props.imageref.length;
    const qtdImagem = props.imageref.length/4;
    const navigate = useNavigate();

    const navigateTo = (title:string) => {
        props.setTitulo(title);
        navigate('/tela-filtro');
    }

    return (
        <div className="container-gallery-g">
            <div style={{
                display:"flex",
                flexDirection:'row',
                width:'100%',
                height:'auto',

                alignItems:'center',
                justifyContent:'center',

                gap:'20px'
            }}>
                <BtnFilter nome="Plants" action={
                    () => {
                        props.setFiltro("plants");
                        navigateTo('Plants');
                    }
                }/>
                <BtnFilter nome="Nature" action={
                    () => {
                        props.setFiltro("animals");
                        navigateTo('Nature');
                    }
                }/>
                <BtnFilter nome="Wallpapers" action={
                    () => {
                        props.setFiltro("*");
                        navigateTo('Wallpapers');
                    }
                }/>
                <BtnFilter nome="Architectura & Interiors" action={
                    () => {
                        props.setFiltro("city");
                        navigateTo('Architectura & Interiors');
                    }
                }/>
            </div>

            <div className="container-coluna">
                {
                    props.imageref.map((c, i) => {
                        if(i>=0 && i<=qtdImagem) {
                            return (
                                <img className="gallery-image" key={i} src={c} alt={`Imagem ${i}`} />
                            );
                        }
                    })
                }
            </div>

            <div className="container-coluna">
                {
                    props.imageref.map((c, i) => {
                        if(i>=((total/4)) && i<=qtdImagem*2) {
                            return (
                                <img className="gallery-image" key={i} src={c} alt={`Imagem ${i}`} />
                            );
                        }
                    })
                }
            </div>

            <div className="container-coluna">
                {
                    props.imageref.map((c, i) => {
                        if(i>=(total/2) && i<=qtdImagem*3) {
                            return (
                                <img className="gallery-image" key={i} src={c} alt={`Imagem ${i}`} />
                            );
                        }
                    })
                }
            </div>

            <div className="container-coluna">
                {
                    props.imageref.map((c, i) => {
                        if(i>=((total-qtdImagem)) && i<=total) {
                            return (
                                <img className="gallery-image" key={i} src={c} alt={`Imagem ${i}`} />
                            );
                        }
                    })
                }
            </div>

        </div>
    )
}