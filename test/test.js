import React from 'react';
import ReactDOM from 'react-dom';

import AppBar from '../components/essence-appbar/src/appbar.jsx';
import Text from '../components/essence-core/src/text/text.jsx';
import Block from '../components/essence-core/src/block/block.jsx';
import Icon from '../components/essence-icon/src/icon.jsx';
import Menu from '../components/essence-menu/src/menu.jsx';
import List from '../components/essence-list/src/list.jsx';
import ListItem from '../components/essence-list/src/item.jsx';
import Navigation from '../components/essence-navigation/src/navigation.jsx';

ReactDOM.render(

	<AppBar classes={'e-background-yellow-100'}>
		<Icon name={'navigation-menu'} classes={'e-left'} />
	    <Menu type={'cover'} classes={'e-left'} placeholder={'Options'}>			
	    	<Block>
	    		<Icon name='notification-sms' />
				<Text>Notifications</Text>				
			</Block>
			<Block>
	    		<Icon name='notification-tap-and-play' />
				<Text>Tap & Play</Text>				
			</Block>
			<Block>
	    		<Icon name='notification-vibration' />
				<Text>Vibrations</Text>				
			</Block>


		</Menu>
	    <Icon name={'navigation-more-vert'} classes={'e-right'} />
	    <Icon name={'action-favorite'} classes={'e-right'} />
	    <Icon name={'action-search'} classes={'e-right'} />	    
	</AppBar>
	,
	document.querySelector('.app')
);