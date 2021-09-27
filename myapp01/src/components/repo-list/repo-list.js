import $ from 'jquery';

import React, { Component } from 'react';


class  RepoList extends Component{

    constructor(props){
        super(props);
        this.state = {
                    loading: true,
                    error: null,
                    data: null
                };
    }


    componentDidMount() { // use of fat arrow fn takes care of the context binding here.
        this.props.prm.then(resp=>resp.json()).then(
            value => this.setState({loading: false, data: value}),
            error => this.setState({loading: false, error: error}));

            // this.props.prm
            // .then((res) => res.json())
            // .then(
            //   (value) => this.setState({ loading: false, data: value }),
            //   (error) => this.setState({ loading: false, error: error })
            // );
    }

    render() {
        if (this.state.loading) {
            return <span>Loading...</span>;
        }
        else if (this.state.error !== null) {
            return <span>Error: {this.state.error.message}</span>;
        }
        else {
            let  repos = this.state.data.items;
            let  repoList = repos.map(function (repo, idx) {
                return (
                    <li key={idx}><a href={repo.html_url}>{repo.name}</a>
                        {repo.description}<br/>
                    </li>
                );
            });
            return (
                <section>
                    <h4>Most Popular JS Projects @ Github</h4>
                    <ul>{repoList}</ul>
                </section>
            );
        }
    }
 }


 export default RepoList ;


    // <RepoList prm={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')} />