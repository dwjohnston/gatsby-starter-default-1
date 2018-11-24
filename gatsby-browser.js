/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
const Layout = require("./src/components/layout").default
const { renderToString } = require('react-dom/server');
const JssProvider = require('react-jss/lib/JssProvider').default;
const getPageContext = require('./src/getPageContext').default;
const withRoot = require("./src/withRoot").default;

function replaceRenderer({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) {
    // Get the context of the page to collected side effects.
    const muiPageContext = getPageContext();

    const bodyHTML = renderToString(
        <JssProvider registry={muiPageContext.sheetsRegistry}>{bodyComponent}</JssProvider>,
    );

    replaceBodyHTMLString(bodyHTML);
    setHeadComponents([
        <style
            type="text/css"
            id="jss-server-side"
            key="jss-server-side"
            dangerouslySetInnerHTML={{ __html: muiPageContext.sheetsRegistry.toString() }}
        />,
    ]);
}

const wrapPageElement = ({ element, props }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return <withRoot><Layout {...props}>{element}</Layout></withRoot>;
}

// exports.replaceComponentRenderer = replaceRenderer;
exports.wrapPageElement = wrapPageElement;
