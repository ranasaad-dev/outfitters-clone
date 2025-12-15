import React, { Component, createRef } from 'react';
import './search.css';

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };

        this.wrapperRef = createRef();
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    // Close overlay when clicking outside the search bar
    handleClickOutside = (e) => {
        if (this.wrapperRef.current && !this.wrapperRef.current.contains(e.target)) {
            if (this.props.onClose) this.props.onClose();
        }
    };

    render() {
        return (
            <div className={`search-overlay ${this.props.active ? "active" : ""}`}>
                <div className="search-wrapper" ref={this.wrapperRef}>
                    <input
                        type="search"
                        placeholder="Search"
                        className="search-input"
                    />
                </div>
            </div>
        );
    }
}

export default Search;
