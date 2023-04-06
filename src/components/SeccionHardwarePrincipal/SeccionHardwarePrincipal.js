import "./seccionHardwarePrincipal.scss"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";




export const SeccionHardwarePrincipal = () => { 


    return (
        <div className="contenedor-principal">
            <div className="contenedor-secciones">
                    <div className="seccion seccion1"> 
                        <div className="contenedor-img">
                            <Link to={'/productos/auriculares'}>
                                <img src="https://spacegamer.com.ar/img/Public/1058-categoria-auri-6454.jpg" alt="auriculares"/>
                            </Link>
                        </div>
                        <div className="contenedor-titulo-subtitulo">
                            <Link to={'/productos/auriculares'}>
                                <h3>Auriculares</h3>
                                <h4>15 Productos</h4>
                            </Link>
                        </div>
                    </div>
                <div className="seccion seccion2">
                    <div className="contenedor-img">
                        <Link to={'/productos/gabinete'}>
                            <img src="https://spacegamer.com.ar/img/Public/1058-categoria-ax6-b-800-6456.jpg" alt="gabinete"/>
                        </Link>
                    </div>
                    <div className="contenedor-titulo-subtitulo">
                        <Link to={'/productos/gabinete'}>
                            <h3>Gabinete</h3>
                            <h4>12 Productos</h4>
                        </Link>
                    </div>
                </div>
                <div className="seccion seccion3">
                    <div className="contenedor-img">
                        <Link to={'/productos/monitores'}>
                            <img src="https://spacegamer.com.ar/img/Public/1058-categoria-monitor-86.jpg" alt="monitores"/>
                        </Link>
                    </div>
                    <div className="contenedor-titulo-subtitulo">
                        <Link to={'/productos/monitores'}>
                            <h3>Monitores</h3>
                            <h4>18 Productos</h4>
                        </Link>
                    </div>
                </div>
                <div className="seccion seccion4">
                    <div className="contenedor-img">
                        <Link to={'/productos/pcarmada'}>
                            <img src="https://spacegamer.com.ar/img/Public/1058-categoria-pcgamer-8381.jpg" alt="pc armadas"/>
                        </Link>
                    </div>
                    <div className="contenedor-titulo-subtitulo">
                        <Link to={'/productos/pcarmada'}>
                            <h3>Pc Armadas</h3>
                            <h4>9 Productos</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
 }