import React from "react";
import "./MHHeader.css";

import imgSearch from "./../../image/icon/search.svg";
import imgLogo from "./../../image/icon/logo.svg";

export default function MHHeader() {
    return( 
        <div className="content-header"> 
            <img src={imgSearch} style={{ height:'50px', minHeight:'50px' }} />
            <img src={imgLogo} style={{ height:'30px', minHeight:'30px' }} />
        </div>
    )
}