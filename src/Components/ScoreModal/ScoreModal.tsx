import * as React from 'react';
import './ScoreModal.css';
import { Link } from 'react-router-dom';
import { GeneralContext } from '../../Contexts/GeneralContext';
import '../../App.css';
import './ScoreModal.css';
import levels from '../../Data/levels';

function DesignBarScore() {
  return (
    <div className="design-bar-profil">
      <div className="progress-container-profil">
        <div className="progress-bar-profil" style={{ width: '33%' }}>
          <div className="progress-bar-inside-profil" />
        </div>
      </div>
    </div>
  );
}

function createTodoList(currentLevel: number, numLevels: number, todosLevel: number[]): number[] {
  const todoList: number[][] = [];

  for (let i = 0; i < numLevels; i += 1) {
    if (i < currentLevel - 1) {
      todoList.push([1, 1, 1]);
    } else if (i === currentLevel - 1) {
      todoList.push(todosLevel);
    } else {
      todoList.push([0, 0, 0]);
    }
  }

  return todoList[currentLevel - 1];
}

function ScoreModal() {
  const generalContext = React.useContext(GeneralContext);
  const currentLevel = generalContext?.level;
  const todos = generalContext?.todos;
  const numberOfScan = generalContext?.history.length;
  const score = generalContext?.score;

  return (
    <div className="category score-box">
      <div className="box-header">
        <span className="title-two">Progress</span>
        <Link to="/Levels" className="nav-link-score">
          <span className="title-see-all nav-link">See all</span>
        </Link>
      </div>
      <div className="content-box">
        <div className="subcontent-box">
          <div className="score-profile">
            <div className="round-border">
              <div className="colorScoreModale title-two">{score}</div>
            </div>
            <div className="fairscore-and-products">
              <div className="numberScoreModale title-four">Fairies</div>
              <div>
                {numberOfScan}
                {' '}
                products scanned
              </div>
            </div>
          </div>
          <div className="progress-content">
            <div className="levelComponent">
              <div className="title-four">
                Level
                {' '}
                {currentLevel}
              </div>
              <DesignBarScore />
            </div>
            <div className="taskComponent">
              {levels[currentLevel - 1].map((task, taskIndex) => (
                <div
                  key={`task${taskIndex + 1}`}
                  className="textScoreModale"
                  style={{
                    color:
                      todos[taskIndex] === 1 ? '#D0D0D0' : '#2A301E',
                  }}
                >
                  {task}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoreModal;
