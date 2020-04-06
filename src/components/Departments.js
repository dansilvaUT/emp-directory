import React from 'react';
import {Route, NavLink, Redirect} from 'react-router-dom';

import DepartmentContainer from './courses/DepartmentContainer';
import {Finance, HumanResources, InformationTechnology} from '../data/departments';

const Departments = ({match}) => (
    <div className="main-content courses">
        <div className="course-header group">
            <h2>Departments</h2>
            <ul className="course-nav">
                <li><NavLink to={`${match.url}/finance`}>Finance</NavLink></li>
                <li><NavLink to={`${match.url}/humanresources`}>Human Resources</NavLink></li>
                <li><NavLink to={`${match.url}/informationtechnology`}>Information Technology</NavLink></li>
            </ul>
        </div>

        {/* Write routes here... */}

        <Route exact path={match.path} render={() => <Redirect to={`${match.path}/finance`}/>}/>
        <Route path={`${match.url}/finance`} render={() => <DepartmentContainer data={Finance}/>}/>
        <Route path={`${match.url}/humanresources`} render={() => <DepartmentContainer data={HumanResources}/>}/>
        <Route path={`${match.url}/informationtechnology`} render={() => <DepartmentContainer data={InformationTechnology}/>}/>
    </div>
);

export default Departments;







