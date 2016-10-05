import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as BuscarActions from '../../actions/buscar.js';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Types',
            description: 'Explore @Types Packages',
            list_packages: [],
            show_list: [],
            text_search: ''
        };

        this.handleSearch = this.handleSearch.bind(this);
    }

    // Antes de renderizar el componente
    componentWillMount() {
        const { actions } = this.props;

        actions.listar().then(() => {
            var result = this.props.buscar.buscar.get('data_list').toJS();
            console.log('list ===>>=>==> ', result);

            this.setState({
                list_packages: result.items,
                show_list: result.items,
                cargando: false
            });
        }).catch(err => {
            console.log('ERROR> ', err);

            this.setState({
                cargando: false
            });
        });
    }

    handleSearch(e) {
//        console.log('Event: ', e.target.value);
        this.setState({
            text_search: e.target.value
        });
    }

    render() {
        return (
            <div>
                <div className="applicationLayout">
                    <div className="content-overlay"></div>
                    <div className="content">

                        <nav className="nav white">
                            <a className="logo" href="https://atmospherejs.com/">{this.state.title}</a>
                        </nav>

                        <div className="applicationHome">
                            <header>
                                <form style={{
                                    "opacity": 0.905357
                                }}>
                                    <div className="page-title">{this.state.description}</div>
                                    <div className="input-symbol center" data-search="">
                                        <span className="icon-search"></span>
                                        <input
                                            className="search-field"
                                            type="text"
                                            name="search"
                                            placeholder="Search packages now"
                                            onChange={this.handleSearch}
                                        />

                                    </div>
                                    <a
                                        href="https://npmjs.com"
                                        className="learn-more inverse">Learn more about NPM package management</a>
                                </form>
                            </header>

                            <section id="packages" className="waypoint">
                                <br />
                                <ol className="grid fixed-height">

                                    {
                                        this.state.cargando? 'Loading...': ''
                                    }

                                    {
                                        this.state.show_list.map((item, i) => {
                                            return (
                                                <li className="module packagesItem" key={i}>
                                                    <span className="metadata">
                                                        <a
                                                            href={'https://www.npmjs.com/package/' + item.name}
                                                            className="click-intercept"></a>
                                                        <span className="title">
                                                            <a href={'https://www.npmjs.com/package/' + item.name}>{item.name}</a>
                                                        </span>
                                                        <p className="description">
                                                            {item.description}
                                                        </p>

                                                        <div className="stats">
                                                            <span className="stat-installs">
                                                                <span className="icon-download"></span>
                                                                {item.version}
                                                            </span>

                                                            <span className="stat-stars">
                                                                <span className="icon-star"></span>
                                                                {item.access}
                                                                </span>
                                                        </div>
                                                    </span>
                                                </li>
                                            );
                                        })
                                    }

                                </ol>

                                <ol className="grid fixed-height"></ol>
                            </section>

                            <section id="searches-top" className="waypoint">
                                <div className="searches-wrapper">
                                    <div className="section-heading center select">
                                        <h2 className="section-title">Top Searches</h2>
                                        <span className="a-select nochrome small">
                                            <select name="searchesPeriod">

                                                <option value="day">Today</option>

                                                <option value="week">This Week</option>

                                                <option value="month">This Month</option>

                                                <option value="year">This Year</option>

                                            </select>
                                        </span>
                                    </div>

                                    <div className="list-searches">

                                        <a href="https://atmospherejs.com/packages/bootstrap">
                                            <span>bootstrap</span>
                                        </a>

                                        <a href="https://atmospherejs.com/packages/accounts">
                                            <span>accounts</span>
                                        </a>

                                        <a href="https://atmospherejs.com/packages/bootstrap3">
                                            <span>bootstrap3</span>
                                        </a>

                                        <a href="https://atmospherejs.com/packages/autoform">
                                            <span>autoform</span>
                                        </a>

                                        <a href="https://atmospherejs.com/packages/material">
                                            <span>material</span>
                                        </a>

                                        <a href="https://atmospherejs.com/packages/semantic">
                                            <span>semantic</span>
                                        </a>

                                        <a href="https://atmospherejs.com/packages/File%20upload">
                                            <span>File upload</span>
                                        </a>

                                        <a href="https://atmospherejs.com/packages/roles">
                                            <span>roles</span>
                                        </a>

                                        <a href="https://atmospherejs.com/packages/polymer">
                                            <span>polymer</span>
                                        </a>

                                        <a href="https://atmospherejs.com/packages/collection">
                                            <span>collection</span>
                                        </a>

                                    </div>
                                </div>
                            </section>
                        </div>
                        <footer className="applicationFooter">
                            <div className="footer-row">
                                <section className="about">
                                    <div className="subtitle">About</div>
                                    <p className="desc">Atmosphere is the catalog for Meteor packages, resources and
                                        tools.Explore the most popular, trusted, and reliable packages to install in
                                        your apps.</p>

                                    <div className="subtitle">Created By</div>
                                    <a href="http://percolatestudio.com/" className="attribution" target="_blank">
                                        <img
                                            src="./The trusted source for JavaScript packages, Meteor resources and tools _ Atmosphere_files/logo-percolate-inverse.svg"
                                            alt="Percolate Studio"/>
                                    </a>
                                </section>

                                <section className="links">

                                    <div className="documentation">
                                        <div className="subtitle">Learn More</div>
                                        <div className="list-vertical">
                                            <a href="https://atmospherejs.com/i/installing" className="link-secondary">Get Started with Atmosphere</a>
                                            <a href="https://atmospherejs.com/i/publishing" className="link-secondary">Publish Packages</a>
                                            <a
                                                href="https://github.com/percolatestudio/atmosphere-beta/issues"
                                                target="_blank"
                                                className="link-secondary">Github Issues</a>
                                        </div>

                                        <div className="subtitle">Mailing List</div>
                                        <form action="https://percolatestudio.us3.list-manage.com/subscribe/post">
                                            <input type="hidden" name="u" value="4eaab348037bea8afae9acd5f"/>
                                            <input type="hidden" name="id" value="a118b8ae30"/>

                                            <p className="desc-input">Get the latest news from Percolate.</p>
                                            <div className="input-symbol right">
                                                <input
                                                    name="EMAIL"
                                                    className="inverse"
                                                    type="email"
                                                    size="20"
                                                    value=""
                                                    placeholder="Add your email"/>
                                                <button
                                                    type="submit"
                                                    className="icon-proceed inverse"
                                                    name="subscribe"
                                                    id="mc-embedded-subscribe"></button>
                                            </div>
                                        </form>
                                    </div>

                                    <dl className="stats">
                                        <dt>Packages</dt>
                                        <dd>11507</dd>
                                        <dd>23</dd>
                                        <dt>Categories</dt>
                                    </dl>

                                </section>
                            </div>
                        </footer>
                    </div>
                </div>

                <section className="content">
                    {
                        this.props.children
                    }
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        buscar: state.buscar
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(BuscarActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);
