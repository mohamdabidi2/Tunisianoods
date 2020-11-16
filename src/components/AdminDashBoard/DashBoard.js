import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ChartUsers from '../chart';

import PieChart from '../Pie';
import BarChart from '../BarChar';



import "./admin.css"
import { withRouter } from 'react-router-dom';
const AdminDash = (props) => {
    const [UsersList, setUsersList] = useState([])
    const [CurrentUser, setCurrentUser] = useState({})
    useEffect(() => {
       Axios.get('http://localhost:4000/getallusersdata').then(
           res=>{
            setUsersList(res.data)
           }
       )
    }, [])
    const logout=()=>{
      localStorage.setItem('user','')
      props.history.push('/')
    }
    return ( 
        <div className="html">
            <div className="fixed-nav sticky-footer bg-dark" id="page-top">

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <p className="navbar-brand" >Mohamed Abidi</p>
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
      
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
          <p className="nav-link" href="#">
            <i className="fa fa-fw fa-link"></i>
            <span className="nav-link-text">Admins</span>
          </p>
        </li>
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
          <p className="nav-link" href="#">
            <i className="fa fa-fw fa-link"></i>
            <span className="nav-link-text">Add Admin</span>
          </p>
        </li>
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
          <p className="nav-link" href="#">
            <i className="fa fa-fw fa-link"></i>
            <span className="nav-link-text">Add Rule</span>
          </p>
        </li>
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
          <p className="nav-link" href="#">
            <i className="fa fa-fw fa-link"></i>
            <span className="nav-link-text">WhiteList Application</span>
          </p>
        </li>
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
          <p className="nav-link" href="#">
            <i className="fa fa-fw fa-link"></i>
            <span className="nav-link-text">Messages</span>
          </p>
        </li>
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
          <p className="nav-link" href="#">
            <i className="fa fa-fw fa-link"></i>
            <span className="nav-link-text">Banned</span>
          </p>
        </li>
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
          <p className="nav-link" href="#">
            <i className="fa fa-fw fa-link"></i>
            <span className="nav-link-text">Logs</span>
          </p>
        </li>
      </ul>
      <ul className="navbar-nav sidenav-toggler">
        <li className="nav-item">
          <p className="nav-link text-center" id="sidenavToggler">
            <i className="fa fa-fw fa-angle-left"></i>
          </p>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <p className="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-fw fa-envelope"></i>
            <span className="d-lg-none">Messages
              <span className="badge badge-pill badge-primary">12 New</span>
            </span>
            <span className="indicator text-primary d-none d-lg-block">
              <i className="fa fa-fw fa-circle"></i>
            </span>
          </p>
          <div className="dropdown-menu" aria-labelledby="messagesDropdown">
            <h6 className="dropdown-header">New Messages:</h6>
            <div className="dropdown-divider"></div>
            <p className="dropdown-item" href="#">
              <strong>David Miller</strong>
              <span className="small float-right text-muted">11:21 AM</span>
              <div className="dropdown-message small">Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>
            </p>
            <div className="dropdown-divider"></div>
            <p className="dropdown-item" href="#">
              <strong>Jane Smith</strong>
              <span className="small float-right text-muted">11:21 AM</span>
              <div className="dropdown-message small">I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>
            </p>
            <div className="dropdown-divider"></div>
            <p className="dropdown-item" href="#">
              <strong>John Doe</strong>
              <span className="small float-right text-muted">11:21 AM</span>
              <div className="dropdown-message small">I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>
            </p>
            <div className="dropdown-divider"></div>
            <p className="dropdown-item small" href="#">View all messages</p>
          </div>
        </li>
        <li className="nav-item dropdown">
          <p className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-fw fa-bell"></i>
            <span className="d-lg-none">Alerts
              <span className="badge badge-pill badge-warning">6 New</span>
            </span>
            <span className="indicator text-warning d-none d-lg-block">
              <i className="fa fa-fw fa-circle"></i>
            </span>
          </p>
          <div className="dropdown-menu" aria-labelledby="alertsDropdown">
            <h6 className="dropdown-header">New Alerts:</h6>
            <div className="dropdown-divider"></div>
            <p className="dropdown-item" href="#">
              <span className="text-success">
                <strong>
                  <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
              </span>
              <span className="small float-right text-muted">11:21 AM</span>
              <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
            </p>
            <div className="dropdown-divider"></div>
            <p className="dropdown-item" href="#">
              <span className="text-danger">
                <strong>
                  <i className="fa fa-long-arrow-down fa-fw"></i>Status Update</strong>
              </span>
              <span className="small float-right text-muted">11:21 AM</span>
              <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
            </p>
            <div className="dropdown-divider"></div>
            <p className="dropdown-item" href="#">
              <span className="text-success">
                <strong>
                  <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
              </span>
              <span className="small float-right text-muted">11:21 AM</span>
              <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
            </p>
            <div className="dropdown-divider"></div>
            <p className="dropdown-item small" href="#">View all alerts</p>
          </div>
        </li>
        <li className="nav-item">
          <form className="form-inline my-2 my-lg-0 mr-lg-2">
            <div className="input-group">
              <input className="form-control" type="text" placeholder="Search for..."/>
              <span className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </span>
            </div>
          </form>
        </li>
        <li className="nav-item">
          <p onClick={logout} className="nav-link" data-toggle="modal" data-target="#exampleModal">
            <i className="fa fa-fw fa-sign-out"></i>Logout</p>
        </li>
      </ul>
    </div>
  </nav>
  <div className="content-wrapper">
    <div className="container-fluid">
  
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <p href="#">Dashboard</p>
        </li>
        <li className="breadcrumb-item active">My Dashboard</li>
      </ol>

      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-primary o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-comments"></i>
              </div>
              <div className="mr-5">26 New Messages!</div>
            </div>
            <p className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-warning o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-list"></i>
              </div>
              <div className="mr-5">11 New Tasks!</div>
            </div>
            <p className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-success o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-shopping-cart"></i>
              </div>
              <div className="mr-5">123 New Orders!</div>
            </div>
            <p className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-danger o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-support"></i>
              </div>
              <div className="mr-5">13 New Tickets!</div>
            </div>
            <p className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    
      <div className="card mb-3">
        <div className="card-header">
          <i className="fa fa-area-chart"></i> Area Chart Example</div>
        <div className="card-body">
      <ChartUsers/>
        </div>
        <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
      </div>
      <div className="row">
        <div className="col-lg-8">
         
          <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-bar-chart"></i> Bar Chart Example</div>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-8 my-auto">
                  <BarChart/>
                </div>
                <div className="col-sm-4 text-center my-auto">
                  <div className="h4 mb-0 text-primary">$34,693</div>
                  <div className="small text-muted">YTD Revenue</div>
                  <hr/>
                  <div className="h4 mb-0 text-warning">$18,474</div>
                  <div className="small text-muted">YTD Expenses</div>
                  <hr/>
                  <div className="h4 mb-0 text-success">$16,219</div>
                  <div className="small text-muted">YTD Margin</div>
                </div>
              </div>
            </div>
            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
          </div>
       
          <div className="mb-0 mt-4">
            <i className="fa fa-newspaper-o"></i> News Feed</div>
          <hr className="mt-2"/>
          <div className="card-columns">
      
            <div className="card mb-3">
              <p href="#">
                <img className="card-img-top img-fluid w-100" src="https://unsplash.it/700/450?image=610" alt=""/>
              </p>
              <div className="card-body">
                <h6 className="card-title mb-1"><p href="#">David Miller</p></h6>
                <p className="card-text small">These waves are looking pretty good today!
                  <p href="#">#surfsup</p>
                </p>
              </div>
              <hr className="my-0"/>
              <div className="card-body py-2 small">
                <p className="mr-3 d-inline-block" href="#">
                  <i className="fa fa-fw fa-thumbs-up"></i>Like</p>
                <p className="mr-3 d-inline-block" href="#">
                  <i className="fa fa-fw fa-comment"></i>Comment</p>
                <p className="d-inline-block" href="#">
                  <i className="fa fa-fw fa-share"></i>Share</p>
              </div>
              <hr className="my-0"/>
              <div className="card-body small bg-faded">
                <div className="media">
                  <img className="d-flex mr-3" src="http://placehold.it/45x45" alt=""/>
                  <div className="media-body">
                    <h6 className="mt-0 mb-1"><p href="#">John Smith</p></h6>Very nice! I wish I was there! That looks amazing!
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <p href="#">Like</p>
                      </li>
                      <li className="list-inline-item">·</li>
                      <li className="list-inline-item">
                        <p href="#">Reply</p>
                      </li>
                    </ul>
                    <div className="media mt-3">
                      <p className="d-flex pr-3" href="#">
                        <img src="http://placehold.it/45x45" alt=""/>
                      </p>
                      <div className="media-body">
                        <h6 className="mt-0 mb-1"><p href="#">David Miller</p></h6>Next time for sure!
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <p href="#">Like</p>
                          </li>
                          <li className="list-inline-item">·</li>
                          <li className="list-inline-item">
                            <p href="#">Reply</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer small text-muted">Posted 32 mins ago</div>
            </div>
           
            <div className="card mb-3">
              <p href="#">
                <img className="card-img-top img-fluid w-100" src="https://unsplash.it/700/450?image=180" alt=""/>
              </p>
              <div className="card-body">
                <h6 className="card-title mb-1"><p href="#">John Smith</p></h6>
                <p className="card-text small">Another day at the office...
                  <p href="#">#workinghardorhardlyworking</p>
                </p>
              </div>
              <hr className="my-0"/>
              <div className="card-body py-2 small">
                <p className="mr-3 d-inline-block" href="#">
                  <i className="fa fa-fw fa-thumbs-up"></i>Like</p>
                <p className="mr-3 d-inline-block" href="#">
                  <i className="fa fa-fw fa-comment"></i>Comment</p>
                <p className="d-inline-block" href="#">
                  <i className="fa fa-fw fa-share"></i>Share</p>
              </div>
              <hr className="my-0"/>
              <div className="card-body small bg-faded">
                <div className="media">
                  <img className="d-flex mr-3" src="http://placehold.it/45x45" alt=""/>
                  <div className="media-body">
                    <h6 className="mt-0 mb-1"><p href="#">Jessy Lucas</p></h6>Where did you get that camera?! I want one!
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <p href="#">Like</p>
                      </li>
                      <li className="list-inline-item">·</li>
                      <li className="list-inline-item">
                        <p href="#">Reply</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-footer small text-muted">Posted 46 mins ago</div>
            </div>
        
            <div className="card mb-3">
              <p href="#">
                <img className="card-img-top img-fluid w-100" src="https://unsplash.it/700/450?image=281" alt=""/>
              </p>
              <div className="card-body">
                <h6 className="card-title mb-1"><p href="#">Jeffery Wellings</p></h6>
                <p className="card-text small">Nice shot from the skate park!
                  <p href="#">#kickflip</p>
                  <p href="#">#holdmybeer</p>
                  <p href="#">#igotthis</p>
                </p>
              </div>
              <hr className="my-0"/>
              <div className="card-body py-2 small">
                <p className="mr-3 d-inline-block" href="#">
                  <i className="fa fa-fw fa-thumbs-up"></i>Like</p>
                <p className="mr-3 d-inline-block" href="#">
                  <i className="fa fa-fw fa-comment"></i>Comment</p>
                <p className="d-inline-block" href="#">
                  <i className="fa fa-fw fa-share"></i>Share</p>
              </div>
              <div className="card-footer small text-muted">Posted 1 hr ago</div>
            </div>
           
            <div className="card mb-3">
              <p href="#">
                <img className="card-img-top img-fluid w-100" src="https://unsplash.it/700/450?image=185" alt=""/>
              </p>
              <div className="card-body">
                <h6 className="card-title mb-1"><p href="#">David Miller</p></h6>
                <p className="card-text small">It's hot, and I might be lost...
                  <p href="#">#desert</p>
                  <p href="#">#water</p>
                  <p href="#">#anyonehavesomewater</p>
                  <p href="#">#noreally</p>
                  <p href="#">#thirsty</p>
                  <p href="#">#dehydration</p>
                </p>
              </div>
              <hr className="my-0"/>
              <div className="card-body py-2 small">
                <p className="mr-3 d-inline-block" href="#">
                  <i className="fa fa-fw fa-thumbs-up"></i>Like</p>
                <p className="mr-3 d-inline-block" href="#">
                  <i className="fa fa-fw fa-comment"></i>Comment</p>
                <p className="d-inline-block" href="#">
                  <i className="fa fa-fw fa-share"></i>Share</p>
              </div>
              <hr className="my-0"/>
              <div className="card-body small bg-faded">
                <div className="media">
                  <img className="d-flex mr-3" src="http://placehold.it/45x45" alt=""/>
                  <div className="media-body">
                    <h6 className="mt-0 mb-1"><p href="#">John Smith</p></h6>The oasis is a mile that way, or is that just a mirage?
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <p href="#">Like</p>
                      </li>
                      <li className="list-inline-item">·</li>
                      <li className="list-inline-item">
                        <p href="#">Reply</p>
                      </li>
                    </ul>
                    <div className="media mt-3">
                      <p className="d-flex pr-3" href="#">
                        <img src="http://placehold.it/45x45" alt=""/>
                      </p>
                      <div className="media-body">
                        <h6 className="mt-0 mb-1"><p href="#">David Miller</p></h6>
                        <img className="img-fluid w-100 mb-1" src="https://unsplash.it/700/450?image=789" alt=""/>I'm saved, I found a cactus. How do I open this thing?
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <p href="#">Like</p>
                          </li>
                          <li className="list-inline-item">·</li>
                          <li className="list-inline-item">
                            <p href="#">Reply</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer small text-muted">Posted yesterday</div>
            </div>
          </div>
         
        </div>
        <div className="col-lg-4">
        
          <div className="card mb-3">
7            <div className="card-header">
              <i className="fa fa-pie-chart"></i> Pie Chart Example</div>
            <div className="card-body">
        <PieChart/>
            </div>
            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
          </div>
         
          <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-bell-o"></i> Feed Example</div>
            <div className="list-group list-group-flush small">
              <p className="list-group-item list-group-item-action" href="#">
                <div className="media">
                  <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt=""/>
                  <div className="media-body">
                    <strong>David Miller</strong>posted a new article to
                    <strong>David Miller Website</strong>.
                    <div className="text-muted smaller">Today at 5:43 PM - 5m ago</div>
                  </div>
                </div>
              </p>
              <p className="list-group-item list-group-item-action" href="#">
                <div className="media">
                  <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt=""/>
                  <div className="media-body">
                    <strong>Samantha King</strong>sent you a new message!
                    <div className="text-muted smaller">Today at 4:37 PM - 1hr ago</div>
                  </div>
                </div>
              </p>
              <p className="list-group-item list-group-item-action" href="#">
                <div className="media">
                  <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt=""/>
                  <div className="media-body">
                    <strong>Jeffery Wellings</strong>added a new photo to the album
                    <strong>Beach</strong>.
                    <div className="text-muted smaller">Today at 4:31 PM - 1hr ago</div>
                  </div>
                </div>
              </p>
              <p className="list-group-item list-group-item-action" href="#">
                <div className="media">
                  <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt=""/>
                  <div className="media-body">
                    <i className="fa fa-code-fork"></i>
                    <strong>Monica Dennis</strong>forked the
                    <strong>startbootstrap-sb-admin</strong>repository on
                    <strong>GitHub</strong>.
                    <div className="text-muted smaller">Today at 3:54 PM - 2hrs ago</div>
                  </div>
                </div>
              </p>
              <p className="list-group-item list-group-item-action" href="#">View all activity...</p>
            </div>
            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header">
          <i className="fa fa-table"></i> Users Data Table </div>
        <div className="card-body">
          <div className="table-responsive">
          <div className="table1">
          <p className="table1Item">FullName</p>
           <p className="table1Item">Email</p>
           <p className="table1Item">DiscordID</p>
           <p className="table1Item">verifiedEmail</p>
           <p className="table1Item">Emailtoken</p>
           <p className="table1Item table1ItemEnd">DateInscription</p>
          </div>
          {UsersList.map(el=>
                <div className="table2">
                <p className="table2Item">{el.FullName}</p>
                 <p className="table2Item">{el.Email}</p>
                 <p className="table2Item">{el.DiscordID}</p>
                 <p style={el.verifiedEmail?{backgroundColor:"green"}:{backgroundColor:"red"}} className="table2Item">{el.verifiedEmail?"true":"false"}</p>
                 <p className="table2Item">{el.Emailtoken}</p>
                 <p className="table2Item table2ItemEnd">{el.DateInscription.substr(0,10)}</p>
                </div>)}
          </div>
        </div>
        <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
      </div>
    </div>
 
    <footer className="sticky-footer">
      <div className="container">
        <div className="text-center">
          <small>Copyright © www.tunisianhoods.tn 2020</small>
        </div>
      </div>
    </footer>

    <p className="scroll-to-top rounded" href="#page-top">
      <i className="fa fa-angle-up"></i>
    </p>

    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          <div className="modal-footer">
            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <p className="btn btn-primary" >Logout</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
     );
}
 
export default withRouter(AdminDash);
