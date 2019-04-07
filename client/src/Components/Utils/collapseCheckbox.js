import React, { Component } from 'react';
// FaIcons from FontAwesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';
// import the List checkboxes from Material-UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';

class CollapseCheckbox extends Component {

    state = {
        open: false,
        checked: []
    }

    // The props got from the index file of Shop component
    componentDidMount(){
        if(this.props.initState) {
            this.setState({
                open: this.props.initState
            })
        }
    }
    // Handle Click on the ListItem
    handleClick = () => (
        this.setState({
            open: !this.state.open
        })
    )
    // Handle Arrow Angle on the ListItemText
    handleAngle = () => (
        this.state.open
            ?
                <FontAwesomeIcon
                    icon = {faAngleUp}
                    className = "icon"
                />
            :
                <FontAwesomeIcon
                    icon = {faAngleDown}
                    className = "icon"
                />
    )
    // Deploy the elements comprised within the relevant list
    renderList = () => (
        this.props.List 
            ?
                this.props.list.map((value) =>(
                    <ListItem>
                        
                    </ListItem>
                ))
            :
                null
    )

    render(){
        return(
            <div className="collapse_items_wrapper">
                <List style={{borderBottom: '1px solid #dbdbdb'}}>
                    <ListItem onClick={this.handleClick} style={{padding: '10px 23px 10px 0'}}>
                        <ListItemText
                            primary = {this.props.title}
                            className = "collapse_title"
                        />
                        {this.handleAngle()}
                    </ListItem>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {this.renderList()}
                        </List>
                    </Collapse>
                </List>
            </div>
        )
    }
}

export default CollapseCheckbox;