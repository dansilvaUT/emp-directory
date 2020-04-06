import React, {Component} from 'react';

class Home extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        let teacherName = this.name.value;
        let teacherTopic = this.topic.value;
        let path = `teachers/${teacherTopic}/${teacherName}`;
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="main-content home">
                <h2>Super Banking Employee Directory</h2>
                <p>Welcome to our company's employee directory.</p>
                <p>If you are looking for contact information from a specific employee or some general information of
                    how a certain department works, then you're in the right place.</p>
                <p>Please use our navigation menu up top to assist you in your request.</p>
                <hr/>
                <h3>Featured Employees</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" ref={(input) => this.name = input}/>
                    <input type="text" placeholder="Department" ref={(input) => this.department = input}/>
                    <button type="submit">Go!</button>
                </form>
            </div>
        );
    }
}

export default Home;