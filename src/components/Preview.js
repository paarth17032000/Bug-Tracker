import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Card, CardContent, CardHeader, Container, IconButton } from '@material-ui/core'
import { connect } from 'react-redux';
import { bugAdded, bugRemoved } from '../redux/actions'
import DeleteIcon from '@material-ui/icons/Delete';

class Preview extends Component{
    state={
        desc: ''
    }
    handleDesc = (e) => {
        this.setState({
            desc: e.target.value
        })
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
                                    <CardContent>
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
        bugRemoved: (e) => dispatch(bugRemoved(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview)