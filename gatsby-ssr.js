const React = require('react')
const { renderToString } = require('react-dom/server')
const JssProvider = require('react-jss/lib/JssProvider').default
const getPageContext = require('./src/getPageContext').default
const CssBaseline = require('@material-ui/core/CssBaseline')
//import { ServerStyleSheet, StyleSheetManager } from 'styled-components';


exports.replaceRenderer = ({
    bodyComponent,
    replaceBodyHTMLString,
    setHeadComponents,
}) => {

    //const sheet = new ServerStyleSheet(); //styled-components

    const pageContext = getPageContext();

    const app = (
        <JssProvider registry={pageContext.sheetsRegistry} generateClassName={pageContext.generateClassName} >


            {/* <StyleSheetManager sheet={sheet.instance}>
                {React.cloneElement(bodyComponent, {
                    pageContext,
                })} */}

            {React.cloneElement(bodyComponent, {
                pageContext
            })}
            {/* </StyleSheetManager> */}
        </JssProvider >
    );

    const body = renderToString(app);

    replaceBodyHTMLString(body);
    setHeadComponents([
        <style
            type="text/css"
            id="server-side-jss"
            key="server-side-jss"
            dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
        />
        //sheet.getStyleElement()
    ]);

    return;
};
