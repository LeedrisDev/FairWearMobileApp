import * as React from 'react';
import levels from '../../Data/levels';

import './LevelsPage.css';
import { GeneralContext } from '../../Contexts/GeneralContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { getUserExperience, updateLevel } from '../../DataAccess/UserDataAccess';

import './LevelsPage.css';

interface IProgressLevelProp {
  currentLevel: number,
  totalLevels: number,
}
function createTodoList(currentLevel: number, numLevels: number, todosLevel: number[]): number[][] {
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

function LevelPage() {
  const generalContext = React.useContext(GeneralContext);
  const currentLevel = generalContext?.level;
  const todo = generalContext?.todos;

  const todos = createTodoList(currentLevel, levels.length, todo);

  const updateTask = async (index, taskIndex) => {
    if (todo[taskIndex] === 0) {
      todo[taskIndex] = 1;
    }

    let finished = true;
    for (const e in todo) {
      if (todo[e] === 0) {
        finished = false;
      }
    }

    if (finished) {
      const newCurrentLevel = currentLevel + 1;
      const newTodo = [0, 0, 0];

      const experience = await getUserExperience(generalContext?.id);

      await updateLevel({
        userId: generalContext?.id,
        score: generalContext?.score + 20,
        level: newCurrentLevel,
        todos: newTodo,
        id: experience.id,
      });
    } else {
      const experience = await getUserExperience(generalContext?.id);

      await updateLevel({
        userId: generalContext?.id,
        score: generalContext?.score + 20,
        level: currentLevel,
        todos: todo,
        id: experience.id,
      });
    }

    window.location.reload();
  };

  return (
    <div className="levelPage" style={{ width: window.innerWidth, height: window.innerHeight }}>
      <button className="back-product-page" type="button" aria-label="Go back">
        <Link className="nav-link" to="/Profile">
          <FontAwesomeIcon icon={faArrowLeft} className="icon-navigation" />
        </Link>
      </button>
      <div className="componentPage">
        <div className="headerLevel">
          <h1 className="titlePage">
            Level
            {' '}
            {currentLevel}
          </h1>
          <ProgressBar currentLevel={currentLevel} totalLevels={levels.length} />
        </div >
        <div className="levelComponent">
          {levels.map((levelTasks, index) => (
            <div key={`level${index + 1}`}>
              <h2 className="textLevel">
                Level
                {' '}
                {index + 1}
              </h2>
              <div className="taskComponent">
                {levelTasks.map((task, taskIndex) => (
                  <button
                    key={`task${taskIndex + 1}`}
                    className="textTask"
                    onClick={() => updateTask(index, taskIndex)}
                    style={{
                      color:
                        todos[index][taskIndex] === 1 ? '#D0D0D0' : '#2A301E',
                    }}
                  >
                    {task}
                  </button >
                ))
                }
                {
                  currentLevel - 1 === index
                    ? (
                      <div className="circleBox">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                          <path d="M14.1668 8.49984C14.1668 7.71854 13.5315 7.08317 12.7502 7.08317H12.0418V4.95817C12.0418 3.0053 10.453 1.4165 8.50016 1.4165C6.54729 1.4165 4.9585 3.0053 4.9585 4.95817V7.08317H4.25016C3.46887 7.08317 2.8335 7.71854 2.8335 8.49984V14.1665C2.8335 14.9478 3.46887 15.5832 4.25016 15.5832H12.7502C13.5315 15.5832 14.1668 14.9478 14.1668 14.1665V8.49984ZM6.37516 4.95817C6.37516 3.78659 7.32858 2.83317 8.50016 2.83317C9.67174 2.83317 10.6252 3.78659 10.6252 4.95817V7.08317H6.37516V4.95817Z" fill="#FFFFFF" />
                        </svg>
                      </div>
                    ) : null
                }
              </div >
              <div className="separatorComponent">
                <div className="separator" />
              </div>
            </div >
          ))
          }
        </div >
      </div >
    </div >
  );
}

export default LevelPage;
