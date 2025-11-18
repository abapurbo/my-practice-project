const { createBrowserRouter } = require("react-router");
const { default: RootLayout } = require("../Layouts/RootLayout");

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout ,
        children:[
            {
                
            }
        ]
    }
])