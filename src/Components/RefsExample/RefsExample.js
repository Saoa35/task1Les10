import React from 'react'

class RefsExample extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.inputRef = React.createRef();
        this.scrollRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    componentDidMount() {
        console.log(this.myRef.current.textContent);
    }

    handleChange(e) {
        // console.log(this.inputRef.current.value);
        console.log(this.myRef.current.contains(e.target));
    }

    handleFocus() {
        // this.inputRef.current.focus();
        // console.log(this.myRef.current.getBoundingClientRect());
        this.scrollRef.current.scrollIntoView({
            behavior: 'smooth'
        });

    }

    render() {


        return(
            <div >
                <h2>
                    Refs Example
                </h2>

                <input type='text' ref={this.inputRef} onChange={this.handleChange}/>
                    <br/>
                <button ref={this.myRef} onClick={this.handleFocus}>Focus on input</button>

                <div style={{height:'150vh'}}></div>

                <h3 ref={this.scrollRef}>
                    Scroll here!
                </h3>

                <div style={{height:'150vh'}}></div>

            </div>
        )
    }
}

export default RefsExample;