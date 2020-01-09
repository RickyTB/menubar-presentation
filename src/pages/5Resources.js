import React from "react";

import Page from "../components/Page/Page";
import Title from "../components/Title/Title";
import Card from "../components/Card/Card";

const Resources = () => {
    return (
        <Page>
            <Title align="left" color="white" className="pt-4 pb-2">Recursos</Title>
            <div className="container">
                <Card className="text-center">
                    <Title>menubar.ricardobaquero.com</Title>
                    <a className="py-1" href="/WEB_Menubar.zip">Proyecto Netbeans</a>
                    <a className="py-1" href="/simple.xhtml">Ejemplo Simple XHTML</a>
                    <a className="py-1" href="/conbean.xhtml">Ejemplo con Bean XHTML</a>
                    <a className="py-1" href="/ajax.xhtml">Ejemplo Ajax XHTML</a>
                    <a className="py-1" href="/ManagedMenu.java">Managed Bean Menu Java</a>
                </Card>
            </div>
        </Page>
    );
};

export default Resources;