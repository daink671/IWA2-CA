import React from 'react'; //8.4k (gzipped: 3.4k)
import axios from 'axios';


class App extends React.Component {

    state = {
        title: '',
        director: ''
    };

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value //dinamic pass

        })
    };

    submit = (event) => {
        event.preventDefault();

        const payload = {
            title: this.state.title,
            director: this.state.director
        };

        axios({
            url: '/api/save',
            method:'POST',
            data:payload
        })
        .then(() => {
            console.log('data sent to the server');
        })
        .catch(() => {
            console.log('internal server wrong');
        });
    }

    render() {

        console.log('State : ', this.state);

        //JSX
        return (
            <div>
                <h1>Welcome to Dublin Cinema</h1>
                <form onSubmit={this.submit}>
                    <div className="form-input">
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-input">
                        <textarea
                            placeholder="Director"
                            name="director"
                            cols="30"
                            rows="10"
                            value={this.state.director}
                            onChange={this.handleChange}></textarea>
                    </div>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default App;
