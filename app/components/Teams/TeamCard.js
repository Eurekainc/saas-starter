import React, { PropTypes, Component } from 'react';
import moment from 'moment';
import reactMixin from 'react-mixin';
import {History, Link} from 'react-router';
import Icon from '../Icons/Icon.js';
import styles from './teamCard.css';

@reactMixin.decorate(History)
export default class TeamCard extends Component {
  static PropTypes = {
    team: React.PropTypes.object.isRequired
  }

  render() {
    if (!this.props.team) return null;

    let team = this.props.team;

    return (
      <div key={team._id}
        className="cardShadow"
        onClick={this.props.makeClickable ? () => this.history.pushState(null, `/team/${team._id}`) : ''} >

        <div className={styles.info}>
          <h1 className={styles.teamTitle}>{team.name}</h1>
          <p className={styles.desc}><em>{team.desc}</em></p>
          <img src={team.picture} className={styles.picture} />

        </div>
      </div>
    );
  }
}
