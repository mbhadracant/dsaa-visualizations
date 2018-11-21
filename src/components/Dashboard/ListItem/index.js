import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BorderAll from '@material-ui/icons/BorderAll';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import CompareArrows from '@material-ui/icons/CompareArrows';
import SwapHoriz from '@material-ui/icons/SwapHoriz';
import DragIndicator from '@material-ui/icons/DragIndicator';
import Grain from '@material-ui/icons/Grain';
import Sort from '@material-ui/icons/Sort';
import ListAlt from '@material-ui/icons/ListAlt';
import CallMerge from '@material-ui/icons/CallMerge';


export default (
  <div>
    <ListItem button>
      <ListItemIcon>
        <BorderAll />
      </ListItemIcon>
      <ListItemText primary="Array" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MoreHoriz />
      </ListItemIcon>
      <ListItemText primary="Linked List" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CompareArrows />
      </ListItemIcon>
      <ListItemText primary="Queue" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SwapHoriz />
      </ListItemIcon>
      <ListItemText primary="Stack" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CallMerge />
      </ListItemIcon>
      <ListItemText primary="Binary Tree" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DragIndicator />
      </ListItemIcon>
      <ListItemText primary="Binary Heap" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Grain />
      </ListItemIcon>
      <ListItemText primary="Graph" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Sort />
      </ListItemIcon>
      <ListItemText primary="Sorting" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ListAlt />
      </ListItemIcon>
      <ListItemText primary="Hash Map" />
    </ListItem>
  </div>
);
