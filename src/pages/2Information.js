import React from 'react';

import Page from "../components/Page/Page";
import Card from "../components/Card/Card";
import Title from "../components/Title/Title";
import Image from "../components/Image/Image";
import menubar from '../assets/menubar.png';
import Subtitle from "../components/Subtitle/Subtitle";
import CodeBlock from "../components/CodeBlock/CodeBlock";

const exampleCode = `<p:menubar>
    <p:submenu label="Achivo">
        <p:menuitem value="Nuevo" url="/nuevo" />
        <p:menuitem value="Guardar" url="/guardar" />
    </p:submenu>
        <p:menuitem value="Salir" actionListener="#{bean.exit()}" />
</p:menubar>`;

const Information = () => {
    return (
        <Page>
            <Title className="pt-4 pb-2" align="left" color="white">Menubar</Title>
            <div className="row">
                <div className="col-md-6">
                    <Card>
                        <p>Componente horizontal de navegación.</p>
                        <Image className="align-self-center" src={menubar} alt="Menubar"/>
                        <Subtitle align="left">Requerimientos</Subtitle>
                        <ul>
                            <li>Submenu</li>
                            <li>Menuitem</li>
                        </ul>
                        <Subtitle align="left">Ejemplo</Subtitle>
                        <CodeBlock code={exampleCode}/>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card>
                        <Subtitle align="left">Atributos</Subtitle>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Tipo</th>
                                <th>Descripción</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>id</td>
                                <td>String</td>
                                <td>Identificador único del componente.</td>
                            </tr>
                            <tr>
                                <td>rendered</td>
                                <td>Boolean</td>
                                <td>Especifica si el componente se debe renderizar en pantalla.</td>
                            </tr>
                            <tr>
                                <td>binding</td>
                                <td>Object</td>
                                <td>Una expresión que resuelve la instancia del UIComponent en el backing bean del
                                    servidor.
                                </td>
                            </tr>
                            <tr>
                                <td>widgetVar</td>
                                <td>String</td>
                                <td>Nombre del widget en el lado del cliente.</td>
                            </tr>
                            <tr>
                                <td>model</td>
                                <td>MenuModel</td>
                                <td>El modelo para crear menús programaticamente.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>String</td>
                                <td>Estilo en línea del menubar.</td>
                            </tr>
                            <tr>
                                <td>styleClass</td>
                                <td>String</td>
                                <td>Clase de estilo del menubar</td>
                            </tr>
                            <tr>
                                <td>autoDisplay</td>
                                <td>Boolean</td>
                                <td>Define si el pimer nivel de los submenús se mostrarán al pasar el cursor encima,
                                    caso contrario se debe hacer click.
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </Card>
                </div>
            </div>
        </Page>
    );
};

export default Information;