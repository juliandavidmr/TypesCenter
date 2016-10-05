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
            list_packages: []
        };
    }

    // Antes de renderizar el componente
    componentWillMount() {
        const { actions } = this.props;

        actions.listar().then(() => {
            var result = this.props.buscar.buscar.get('data_list').toJS();
            console.log('list ===>>=>==> ', result);

            this.setState({
                list_packages: result.items,
                cargando: false
            });
        }).catch(err => {
            console.log('ERROR> ', err);

            this.setState({
                cargando: false
            });
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
                                            placeholder="Search packages now"/>
                                    </div>
                                    <a
                                        href="https://atmospherejs.com/i/installing"
                                        className="learn-more inverse">Learn more about Meteor package management</a>
                                </form>
                            </header>

                            <section id="packages" className="waypoint">
                                <div className="section-heading center">
                                    <h2 className="section-title">Trending</h2>
                                    <a href="https://atmospherejs.com/packages/trending" className="more">View all</a>
                                </div>

                                <ol className="grid fixed-height">

                                    {
                                        this.state.list_packages.map((item, i) => {
                                            return (
                                                <li className="module packagesItem" key={i}>
                                                    <span className="metadata">
                                                        <a
                                                            href="https://atmospherejs.com/fortawesome/fontawesome"
                                                            className="click-intercept"></a>
                                                        <span className="title">
                                                            <a href="https://atmospherejs.com/fortawesome/fontawesome">{item.name}</a>
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

                                    <li className="module packagesItem">
                                        <span className="metadata">
                                            <a
                                                href="https://atmospherejs.com/aslagle/reactive-table"
                                                className="click-intercept"></a>
                                            <span className="title">

                                                <a href="https://atmospherejs.com/aslagle" className="author">aslagle</a>
                                                <span className="colon">: </span>

                                                <a href="https://atmospherejs.com/aslagle/reactive-table">­reactive-table</a>
                                            </span>
                                            <p className="description">A reactive table designed for Meteor</p>

                                            <div className="stats">
                                                <span className="stat-installs">
                                                    <span className="icon-download"></span>
                                                    8.1K</span>

                                                <span className="stat-stars">
                                                    <span className="icon-star"></span>
                                                    133</span>

                                            </div>

                                            <svg viewBox="0 -0.1 5.5 1" className="graph">
                                                <path
                                                    d="M 0 1 L 0.7142857142857143 1 L 1.4285714285714286 0.7420337069787388 L 2.142857142857143 0.750557733569315 L 2.857142857142857 0.75666522089957 L 3.5714285714285716 0.30080719905761144 L 4.285714285714286 0 L 4.900247567275044 0.04332260560483326"></path>
                                                <circle cx="5" cy="0.05035482896967747" r="0.1"></circle>
                                            </svg>

                                        </span>
                                    </li>

                                    <li className="module packagesItem">
                                        <span className="metadata">
                                            <a href="https://atmospherejs.com/jalik/ufs-gridfs" className="click-intercept"></a>
                                            <span className="title">

                                                <a href="https://atmospherejs.com/jalik" className="author">jalik</a>
                                                <span className="colon">: </span>

                                                <a href="https://atmospherejs.com/jalik/ufs-gridfs">­ufs-gridfs</a>
                                            </span>
                                            <p className="description">GridFS store for UploadFS</p>

                                            <div className="stats">
                                                <span className="stat-installs">
                                                    <span className="icon-download"></span>
                                                    987</span>

                                                <span className="stat-stars">
                                                    <span className="icon-star"></span>
                                                    3</span>

                                            </div>
                                            <svg viewBox="0 -0.1 5.5 1" className="graph">
                                                <path
                                                    d="M 0 1 L 0.7142857142857143 1 L 1.4285714285714286 0.30730019175070644 L 2.142857142857143 0.3558255833976277 L 2.857142857142857 0.43379615649333736 L 3.5714285714285716 0.47433940024703125 L 4.285714285714286 0.30797827698065405 L 4.9081721016845465 0.0395933970627272"></path>
                                                <circle cx="5" cy="0" r="0.1"></circle>
                                            </svg>

                                        </span>
                                    </li>

                                    <li className="module packagesItem">
                                        <span className="metadata">
                                            <a href="https://atmospherejs.com/jalik/ufs" className="click-intercept"></a>
                                            <span className="title">

                                                <a href="https://atmospherejs.com/jalik" className="author">jalik</a>
                                                <span className="colon">: </span>

                                                <a href="https://atmospherejs.com/jalik/ufs">­ufs</a>
                                            </span>
                                            <p className="description">Base package for UploadFS</p>

                                            <div className="stats">
                                                <span className="stat-installs">
                                                    <span className="icon-download"></span>
                                                    1.6K</span>

                                                <span className="stat-stars">
                                                    <span className="icon-star"></span>
                                                    5</span>

                                            </div>

                                            <svg viewBox="0 -0.1 5.5 1" className="graph">
                                                <path
                                                    d="M 0 1 L 0.7142857142857143 1 L 1.4285714285714286 0 L 2.142857142857143 0.07080449275805467 L 2.857142857142857 0.198591091442068 L 3.5714285714285716 0.2746184713361757 L 4.285714285714286 0.2939357132605699 L 4.906496084873543 0.05855010665957789"></path>
                                                <circle cx="5" cy="0.02309565903979105" r="0.1"></circle>
                                            </svg>

                                        </span>
                                    </li>

                                    <li className="module packagesItem">
                                        <span className="metadata">
                                            <a
                                                href="https://atmospherejs.com/meteor/angular2-compilers"
                                                className="click-intercept"></a>
                                            <span className="title">

                                                <a href="https://atmospherejs.com/meteor/angular2-compilers">­angular2-compilers</a>
                                            </span>
                                            <p className="description">Angular 2 Templates, HTML and TypeScript compilers for Meteor</p>

                                            <div className="stats">
                                                <span className="stat-installs">
                                                    <span className="icon-download"></span>
                                                    9.3K</span>

                                                <span className="stat-stars">
                                                    <span className="icon-star"></span>
                                                    3</span>

                                            </div>

                                            <svg viewBox="0 -0.1 5.5 1" className="graph">
                                                <path
                                                    d="M 0 1 L 0.7142857142857143 1 L 1.4285714285714286 0.057906458797327365 L 2.142857142857143 0.0639414819501466 L 2.857142857142857 0.10270101578275159 L 3.5714285714285716 0.15858380274053407 L 4.285714285714286 0.28903911653467007 L 4.907301864942393 0.03751074188604725"></path>
                                                <circle cx="5" cy="1.1102230246251565e-16" r="0.1"></circle>
                                            </svg>

                                        </span>
                                    </li>

                                    <li className="module packagesItem">
                                        <span className="metadata">
                                            <a href="https://atmospherejs.com/manuel/viewmodel" className="click-intercept"></a>
                                            <span className="title">

                                                <a href="https://atmospherejs.com/manuel" className="author">manuel</a>
                                                <span className="colon">: </span>

                                                <a href="https://atmospherejs.com/manuel/viewmodel">­viewmodel</a>
                                            </span>
                                            <p className="description">MVVM, two-way data binding, and components for
                                                Meteor.Similar to Angular and Knockout.</p>

                                            <div className="stats">
                                                <span className="stat-installs">
                                                    <span className="icon-download"></span>
                                                    2.7K</span>

                                                <span className="stat-stars">
                                                    <span className="icon-star"></span>
                                                    88</span>

                                            </div>

                                            <svg viewBox="0 -0.1 5.5 1" className="graph">
                                                <path
                                                    d="M 0 1 L 0.7142857142857143 1 L 1.4285714285714286 0.6985943322891393 L 2.142857142857143 0.4403053419547245 L 2.857142857142857 0.4242253521126761 L 3.5714285714285716 0.1485533699891889 L 4.285714285714286 0.27363156511035924 L 4.90661761464908 0.03577331556023549"></path>
                                                <circle cx="5" cy="0" r="0.1"></circle>
                                            </svg>

                                        </span>
                                    </li>

                                    <li className="module packagesItem">
                                        <span className="metadata">
                                            <a href="https://atmospherejs.com/jalik/ufs-local" className="click-intercept"></a>
                                            <span className="title">

                                                <a href="https://atmospherejs.com/jalik" className="author">jalik</a>
                                                <span className="colon">: </span>

                                                <a href="https://atmospherejs.com/jalik/ufs-local">­ufs-local</a>
                                            </span>
                                            <p className="description">File system based store for UploadFS</p>

                                            <div className="stats">
                                                <span className="stat-installs">
                                                    <span className="icon-download"></span>
                                                    228</span>

                                                <span className="stat-stars">
                                                    <span className="icon-star"></span>
                                                    1</span>
                                            </div>
                                            <svg viewBox="0 -0.1 5.5 1" className="graph">
                                                <path
                                                    d="M 0 1 L 0.7142857142857143 1 L 1.4285714285714286 0.3990839453095849 L 2.142857142857143 0.461777806709584 L 2.857142857142857 0.5147502490030951 L 3.5714285714285716 0.5342571952841504 L 4.285714285714286 0.37366520200779774 L 4.911392157038868 0.04635353455536508"></path>
                                                <circle cx="5" cy="0" r="0.1"></circle>
                                            </svg>

                                        </span>
                                    </li>
                                    <li className="module packagesItem">
                                        <span className="metadata">
                                            <a
                                                href="https://atmospherejs.com/jcbernack/reactive-aggregate"
                                                className="click-intercept"></a>
                                            <span className="title">

                                                <a href="https://atmospherejs.com/jcbernack" className="author">jcbernack</a>
                                                <span className="colon">: </span>

                                                <a href="https://atmospherejs.com/jcbernack/reactive-aggregate">­reactive-aggregate</a>
                                            </span>
                                            <p className="description">Reactively publish aggregations.</p>

                                            <div className="stats">
                                                <span className="stat-installs">
                                                    <span className="icon-download"></span>
                                                    589</span>

                                                <span className="stat-stars">
                                                    <span className="icon-star"></span>
                                                    9</span>
                                            </div>
                                            <svg viewBox="0 -0.1 5.5 1" className="graph">
                                                <path
                                                    d="M 0 1 L 0.7142857142857143 1 L 1.4285714285714286 0.946477266305701 L 2.142857142857143 0.9485296111346193 L 2.857142857142857 0.9451382935005562 L 3.5714285714285716 0.2966581181877809 L 4.285714285714286 0.29429208374561455 L 4.907540141842552 0.038094286047970966"></path>
                                                <circle cx="5" cy="0" r="0.1"></circle>
                                            </svg>

                                        </span>
                                    </li>

                                    <li className="module packagesItem">
                                        <span className="metadata">
                                            <a
                                                href="https://atmospherejs.com/akryum/vue-component"
                                                className="click-intercept"></a>
                                            <span className="title">

                                                <a href="https://atmospherejs.com/akryum" className="author">akryum</a>
                                                <span className="colon">: </span>

                                                <a href="https://atmospherejs.com/akryum/vue-component">­vue-component</a>
                                            </span>
                                            <p className="description">VueJS single-file components that hot-reloads</p>

                                            <div className="stats">
                                                <span className="stat-installs">
                                                    <span className="icon-download"></span>
                                                    145</span>

                                            </div>
                                            <svg viewBox="0 -0.1 5.5 1" className="graph">
                                                <path
                                                    d="M 0 1 L 0.7142857142857143 1 L 1.4285714285714286 0.7655237067103352 L 2.142857142857143 0.6212306031474646 L 2.857142857142857 0.29629629629629617 L 3.5714285714285716 0.2655167420522063 L 4.285714285714286 0.35969935293976163 L 4.910685512474074 0.044976908719710815"></path>
                                                <circle cx="5" cy="0" r="0.1"></circle>
                                            </svg>

                                        </span>
                                    </li>

                                    <li className="module packagesItem">
                                        <span className="metadata">
                                            <a
                                                href="https://atmospherejs.com/universe/utilities"
                                                className="click-intercept"></a>
                                            <span className="title">

                                                <a href="https://atmospherejs.com/universe" className="author">universe</a>
                                                <span className="colon">: </span>

                                                <a href="https://atmospherejs.com/universe/utilities">­utilities</a>
                                            </span>
                                            <p className="description">Many awesome utilities</p>

                                            <div className="stats">
                                                <span className="stat-installs">
                                                    <span className="icon-download"></span>
                                                    509</span>

                                                <span className="stat-stars">
                                                    <span className="icon-star"></span>
                                                    7</span>

                                            </div>

                                            <svg viewBox="0 -0.1 5.5 1" className="graph">
                                                <path
                                                    d="M 0 1 L 0.7142857142857143 1 L 1.4285714285714286 0.884994064798559 L 2.142857142857143 0.862811536409777 L 2.857142857142857 0.8733629534745289 L 3.5714285714285716 0.8870194356370068 L 4.285714285714286 0.8876805860400736 L 4.937309121459551 0.07790926612301421"></path>
                                                <circle cx="5" cy="0" r="0.1"></circle>
                                            </svg>

                                        </span>
                                    </li>

                                </ol>

                                <div className="section-heading center">
                                    <h2 className="section-title">Recent</h2>
                                    <a href="https://atmospherejs.com/packages/recent" className="more">View all</a>
                                </div>

                                <ol className="grid fixed-height"></ol>

                                <div className="section-heading center select">
                                    <h2 className="section-title">Most Used</h2>
                                    <a href="https://atmospherejs.com/packages/most-used" className="more">View all</a>
                                </div>

                                <ol className="grid fixed-height">

                                    <li className="module packagesItem">
                                        <span className="metadata">
                                            <a
                                                href="https://atmospherejs.com/meteor/standard-minifier-css"
                                                className="click-intercept"></a>
                                            <span className="title">
                                                <a href="https://atmospherejs.com/meteor/standard-minifier-css">­standard-minifier-css</a>
                                            </span>
                                            <p className="description">Standard css minifier used with Meteor apps by default.</p>

                                            <div className="stats">
                                                <span className="stat-installs">
                                                    <span className="icon-download"></span>
                                                    302.2K</span>

                                            </div>

                                            <svg viewBox="0 -0.1 5.5 1" className="graph">
                                                <path
                                                    d="M 0 1 L 0.7142857142857143 1 L 1.4285714285714286 0 L 2.142857142857143 0.027880908268519744 L 2.857142857142857 0.06253732592323391 L 3.5714285714285716 0.12392680344621565 L 4.285714285714286 0.13572229923792356 L 4.900152737644244 0.16972116041586394"></path>
                                                <circle cx="5" cy="0.17524603146058448" r="0.1"></circle>
                                            </svg>

                                        </span>
                                    </li>

                                </ol>
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
