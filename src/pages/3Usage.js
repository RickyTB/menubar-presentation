import React from "react";

import Page from "../components/Page/Page";
import Title from "../components/Title/Title";
import Card from "../components/Card/Card";
import Subtitle from "../components/Subtitle/Subtitle";
import CodeBlock from "../components/CodeBlock/CodeBlock";

const simpleCode = `<p:menubar>
    <p:submenu label="Archivo">
        <p:submenu label="Nuevo">
            <p:menuitem value="Proyecto" url="#"/>
            <p:menuitem value="Otro" url="#"/>
        </p:submenu>
        <p:menuitem value="Abrir" url="#"></p:menuitem>
        <p:menuitem value="Salir" url="#"></p:menuitem>
    </p:submenu>
    <p:submenu label="Editar">
        <p:menuitem value="Deshacer" url="#"></p:menuitem>
        <p:menuitem value="Rehacer" url="#"></p:menuitem>
    </p:submenu>
    <p:submenu label="Ayuda">
        <p:menuitem value="Contenidos" url="#" />
        <p:submenu label="Buscar">
            <p:submenu label="Texto">
                <p:menuitem value="Espacio de trabajo" url="#" />
            </p:submenu>
            <p:menuitem value="Archivo" url="#" />
        </p:submenu>
    </p:submenu>
</p:menubar>
`;

const beanCode = `MenuModel model = new DefaultMenuModel();
        
Submenu fileSubmenu = new Submenu();
fileSubmenu.setLabel("Archivo");

Submenu newSubmenu = new Submenu();
newSubmenu.setLabel("Nuevo");

MenuItem projectItem = new MenuItem();
projectItem.setValue("Proyecto");
projectItem.setUrl("#");
newSubmenu.getChildren().add(projectItem);

MenuItem otherItem = new MenuItem();
otherItem.setValue("Otro");
otherItem.setUrl("#");
newSubmenu.getChildren().add(otherItem);

fileSubmenu.getChildren().add(newSubmenu);

MenuItem openItem = new MenuItem();
openItem.setValue("Abrir");
openItem.setUrl("#");
fileSubmenu.getChildren().add(openItem);

MenuItem exitItem = new MenuItem();
exitItem.setValue("Salir");
exitItem.setUrl("#");
fileSubmenu.getChildren().add(exitItem);

model.addSubmenu(fileSubmenu);

Submenu editSubmenu = new Submenu();
editSubmenu.setLabel("Editar");

MenuItem undoItem = new MenuItem();
undoItem.setValue("Deshacer");
undoItem.setUrl("#");
editSubmenu.getChildren().add(undoItem);

MenuItem redoItem = new MenuItem();
redoItem.setValue("Rehacer");
redoItem.setUrl("#");
editSubmenu.getChildren().add(redoItem);

model.addSubmenu(editSubmenu);

Submenu helpSubmenu = new Submenu();
helpSubmenu.setLabel("Ayuda");

MenuItem contentItem = new MenuItem();
contentItem.setValue("Contenidos");
contentItem.setUrl("#");
helpSubmenu.getChildren().add(contentItem);

Submenu searchSubmenu = new Submenu();
searchSubmenu.setLabel("Buscar");

Submenu textSubmenu = new Submenu();
textSubmenu.setLabel("Texto");

MenuItem wokspaceItem = new MenuItem();
wokspaceItem.setValue("Espacio de trabajo");
wokspaceItem.setUrl("#");
textSubmenu.getChildren().add(wokspaceItem);
searchSubmenu.getChildren().add(textSubmenu);

MenuItem fileItem = new MenuItem();
fileItem.setValue("Archivo");
fileItem.setUrl("#");
searchSubmenu.getChildren().add(fileItem);

helpSubmenu.getChildren().add(searchSubmenu);
model.addSubmenu(helpSubmenu);

nameItem = new MenuItem();
nameItem.setValue(nombre == null ? "No ha iniciado sesión" : nombre);
nameItem.setUrl("#");
model.addMenuItem(nameItem);`;

const Usage = () => {
    return (
        <Page>
            <Title align="left" color="white" className="pt-4 pb-2">Uso</Title>
            <div className="row">
                <div className="col-md-6">
                    <Card>
                        <Subtitle align="left">Simple</Subtitle>
                        <CodeBlock code={simpleCode}/>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card>
                        <Subtitle align="left">Con bean</Subtitle>
                        <CodeBlock code={beanCode}/>
                    </Card>
                </div>
            </div>
        </Page>
    );
};

export default Usage;