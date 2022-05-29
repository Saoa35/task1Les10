import React from 'react';
import { MyContext } from '../../context-api/myContext';

export default class ContextExample extends React.Component {

render() {

    return(
        <div>
            <h2>
                Context Example

                <MyContext.Consumer>
                    {(value) => {
                        console.log(value);
                        return <span>context content!</span>
                    }}
                </MyContext.Consumer>
            </h2>
        </div>
    )
}
}