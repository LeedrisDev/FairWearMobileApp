import * as React from 'react';
import levels from '../../Data/levels';
import { profile } from '../../Business/BusinessGeneral';
import './LevelsPage.css';
import { Link } from 'react-router-dom';

interface IProgressLevelProp {
  currentLevel: number,
  totalLevels: number,
}
function createTodoList(currentLevel: number, numLevels: number, todosLevel: number[]): number[][] {
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

  return todoList;
}

function ProgressBar({ currentLevel, totalLevels }: IProgressLevelProp) {
  const levelsInter = Array.from({ length: totalLevels }, (_, i) => i + 1);

  return (
    <div className="progress-bar">
      {levelsInter.map((level) => (
        <div
          key={level}
          className={`progress-dot ${level <= currentLevel ? 'completed' : 'remaining'}`}
        />
      ))}
    </div>
  );
}

function LevelsPage() {
  const currentLevel = profile.level;
  const todos = createTodoList(currentLevel, levels.length, profile.todos);

  return (
    <div className='levelPage'>
      <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      <div>
        <button className="back-brand-page" type="button" aria-label="Back to Previous Page">
          <Link className="nav-link" to="/Profile">
            <i className="bx bx-left-arrow-alt" />
          </Link>
        </button>

        <div className="levels-content">
          <div className="headerLevel">
            <div>
              <div className="title-one titlePage">
                Level
                {' '}
                {currentLevel}
              </div>
              <div className='level-title'>Beginner</div>
            </div>

            <ProgressBar currentLevel={profile.level} totalLevels={levels.length} />
          </div>
          <div className="levelComponent">
            {levels.map((levelTasks, index) => (
              <div key={`level${index + 1}`}>
                <div className="textLevel title-four">
                  Level
                  {' '}
                  {index + 1}
                </div>
                <div className="taskComponent">
                  {levelTasks.map((task, taskIndex) => (
                    <div
                      key={`task${taskIndex + 1}`}
                      className="textTask"
                      style={{
                        color:
                          todos[index][taskIndex] === 1 ? 'var(--accentuation-color)' : 'var(--secondary-color)',
                      }}
                    >
                      {task}
                    </div>
                  ))}
                  {
                    currentLevel - 1 === index
                      ? (
                        <div className="circleBox">
                          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                            <path d="M14.1668 8.49984C14.1668 7.71854 13.5315 7.08317 12.7502 7.08317H12.0418V4.95817C12.0418 3.0053 10.453 1.4165 8.50016 1.4165C6.54729 1.4165 4.9585 3.0053 4.9585 4.95817V7.08317H4.25016C3.46887 7.08317 2.8335 7.71854 2.8335 8.49984V14.1665C2.8335 14.9478 3.46887 15.5832 4.25016 15.5832H12.7502C13.5315 15.5832 14.1668 14.9478 14.1668 14.1665V8.49984ZM6.37516 4.95817C6.37516 3.78659 7.32858 2.83317 8.50016 2.83317C9.67174 2.83317 10.6252 3.78659 10.6252 4.95817V7.08317H6.37516V4.95817Z" fill="var(--text-color)" />
                          </svg>
                        </div>
                      ) : null
                  }
                </div>
                <div className="separatorComponent">
                  <div className="separator" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>

  );
}

export default LevelsPage;
