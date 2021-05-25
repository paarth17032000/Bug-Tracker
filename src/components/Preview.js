import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Card, CardContent, CardHeader, Container, IconButton } from '@material-ui/core'
import { connect } from 'react-redux';
import { bugAdded, bugRemoved, bugResolvedToTrue, bugResolvedToFalse } from '../redux/actions'
import DeleteIcon from '@material-ui/icons/Delete'

class Preview extends Component{
    state = {
        desc: ''
    }
    handleDesc = (e) => {
        this.setState({
            desc: e.target.value
        })
    }
    bugStatus = (bug) => {
        // console.log(bug,223)
        // console.log(111,bug.id, bug.resolved)
        bug.resolved ? this.props.bugResolvedToFalse(bug.id) : this.props.bugResolvedToTrue(bug.id) 
    }
    render() {
        const {bugs, bugAdded, bugRemoved} = this.props;
        return (
            <>
                <Container>
                        
                        <Typography 
                            variant="h3"
                            gutterBottom={true}
                        >
                            Bug Tracker
                        </Typography>

                        <form> 
                            <TextField
                                variant="standard"
                                placeholder="Add a bug"
                                // gutterBottom={true}
                                onChange={this.handleDesc}
                            />
                            <Button
                                variant="contained"
                                color="secondary"
                                // gutterBottom={true}
                                onClick={() => bugAdded(this.state.desc)}
                            >
                                Add Bug
                            </Button>
                        </form>

                        {bugs.map(bug => {
                            return(
                                <Card
                                    key={bug.id}             
                                >
                                    <CardHeader
                                        action={
                                            <IconButton
                                                onClick={() => bugRemoved(bug.id)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        }
                                        title={bug.id}
                                    />
                                    <CardContent >
                                        <Button
                                            variant="contained"
                                            color={bug.resolved ? 'primary' : 'inherit' }
                                            onClick={() => {this.bugStatus(bug)}}
                                        >
                                            Bug Status : {bug.resolved ? 'True' : 'False'}   
                                        </Button>
                                        <Typography variant="body2" color="primary">
                                            {bug.desc}
                                        </Typography>
                                    </CardContent>
                                    
                                </Card>
                            )
                        })}

                </Container>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bugs: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        bugAdded: (e) => dispatch(bugAdded(e)),
        bugRemoved: (e) => dispatch(bugRemoved(e)),
        bugResolvedToTrue: (e) => dispatch(bugResolvedToTrue(e)),
        bugResolvedToFalse: (e) => dispatch(bugResolvedToFalse(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview)