import React from 'react';

export default class Quote extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quote: '',
            author: '',
        }
    }
    componentWillMount(){
        let headers = new Headers();
        let myInit = {
            method: 'GET',
            headers: headers,
            mode: 'cors',
            cache: 'default'
        };

        fetch('https://quotes.rest/qod', myInit)
            .then(response => {
                return response.json();
            })
            .then(data => {
                let quoteData = (data.contents.quotes[0]);
                let quote = quoteData.quote;
                let author = quoteData.author;
                this.setState({
                    quote: quote,
                    author: author,
                })

            })
    }
    render(){
        console.log(this.state);
        return (
            <div>
                <p>{this.state.quote} - {this.state.author}</p>
            </div>
        )
    }
}