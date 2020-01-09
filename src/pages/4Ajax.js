import React from "react";

import Page from "../components/Page/Page";
import Title from "../components/Title/Title";
import Card from "../components/Card/Card";
import CodeBlock from "../components/CodeBlock/CodeBlock";

const ajaxCode = `<p:menubar>
    <p:submenu label="Opciones">
        <p:menuitem value="Guardar" actionListener="#{bean.save}" update="comp"/>
        <p:menuitem value="Actualizar" actionListener="#{bean.update}" ajax="false"/>
        <p:menuitem value="Salir" url="http://www.primefaces.org"/>
    </p:submenu>
</p:menubar>`;

const Ajax = () => {
    return (
        <Page>
            <div className="row">
                <div className="col-md-6">
                    <Title align="left" color="white" className="pt-4 pb-2">Ajax</Title>
                    <Card>
                        <p>Utiliza AJAX cuando no quieras recargar la página al realizar una acción en el servidor.</p>
                        <CodeBlock code={ajaxCode}/>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Title align="left" color="white" className="pt-4 pb-2">Estilos</Title>
                    <Card>
                        <p>Se puede agregar estilos en línea en todos los componentes, y preferiblemente se puede
                            referir a las clases de css de la siguiente lista:</p>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Clase</th>
                                <th>Aplica</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>.ui-menubar</td>
                                <td>Elemento contenedor del menubar.</td>
                            </tr>
                            <tr>
                                <td>.ui-menu-list</td>
                                <td>Contenedor de lista.</td>
                            </tr>
                            <tr>
                                <td>.ui-menuitem</td>
                                <td>Cada menuitem.</td>
                            </tr>
                            <tr>
                                <td>.ui-menuitem-link</td>
                                <td>El elemento "a" en un item link.</td>
                            </tr>
                            <tr>
                                <td>.ui-menuitem-text</td>
                                <td>Elemento de texto en un item.</td>
                            </tr>
                            </tbody>
                        </table>
                    </Card>
                </div>
            </div>
        </Page>
    );
};

export default Ajax;