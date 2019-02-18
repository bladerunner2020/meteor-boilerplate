import React from 'react';
// import { Tracker } from 'meteor/tracker';
// import { Session } from 'meteor/session';

export default class ErrorMessage extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {message: ''};
    // }

    // componentDidMount() {
    //     console.log('ErrorMessage - mount')

    //     this.tracker = Tracker.autorun(() => {
    //         console.log('Tracker');
    //         this.setState({message: Session.get('errorMessage')});
    //     });
    // }

    // componentWillUnmount() {
    //     console.log('ErrorMessage - unmount')

    //     this.tracker.stop();
    // }

    // render() {
    //     return (
    //         <div>
    //             {this.state.message ? <p>{this.state.message}</p> : undefined}
    //         </div>
    //     );
    // }


    render() {
        return (
            <div>
                {this.props.message ? <p>{this.props.message}</p> : undefined}
            </div>
        );
    }
}
