import * as React from 'react';
import '../../App.css';
import './ScoreModal.css';
import IProfileProps from '../../Pages/Profile/interfaceProps';
import levels from '../../Data/levels';

function DesignBarScore() {
  return (
    <div className="design-bar-profil">
      <div className="percent-design-bar-box-profil">
        <div className="progress-container-profil">
          <div className="progress-bar-profil" style={{ width: '33%' }}>
            <div className="progress-bar-inside-profil" />
          </div>
        </div>
      </div>
    </div>
  );
}

function createTodoList(currentLevel: number, numLevels: number, todosLevel: number[]): number[] {
  const todoList = [];

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

function ScoreModal({ profile }: IProfileProps) {
  const currentLevel = profile.level;
  const todos = createTodoList(currentLevel, levels.length, profile.todos);
  const { numberOfScan } = profile;
  const { score } = profile;

  return (
    <div className="category score-box">
      <div className="box-header">
        <span className="title-two">Score</span>
      </div>
      <div className="box">
        <div className="scoreProfile">
          <div className="round-border">
            <div className="colorScoreModale">{score}</div>
          </div>
          <div className="numberScoreModale"> FairScore</div>
        </div>
        <div className="titleScoreModale">
          {numberOfScan}
          {' '}
          products scanned
        </div>
        <div className="levelComponent">
          <div className="titleScoreModale">
            Level
            {' '}
            { currentLevel}
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
  );
}

export default ScoreModal;
