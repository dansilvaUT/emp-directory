import React from 'react';
import Department from './Department';

const DepartmentContainer = (props) => {
    let departments = props.data.map((department) => {
        return <Department title={department.title}
                           desc={department.description}
                           img={department.img_src}
                           key={department.id}/>
    });
    return (
        <div>
            <ul>
                {departments}
            </ul>
        </div>
    );
}

export default DepartmentContainer;