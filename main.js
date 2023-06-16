import React from "react";
import ReactDOM from "react-dom/client";

//JSX

//React Element
const jsxHeading = (
    <div>
        <h1>Learn react 🚀</h1>
        <h3>wallah</h3>
    </div>
);

//React Functional Component

const HeadingComponent = () => {
    return (
        //Empty root tags
        // <React.Fragment>  </React.Fragment> 
        //<>  </>
        <div>
            {jsxHeading}
            <h3>im function component</h3>
            <p>im content if the function component</p>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
