import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { updatePath } from '../finalPath/pathSlice';
import { questions_data } from '../data/questions';

import styles from './Questions.module.css';

function Option({questionId, option}) {
  const dispatch = useDispatch()
  const history = useHistory()

  function handleChange() {
    dispatch(updatePath(questionId, option.id))
    const nextStep = option.toQuestionId ? '/questions/' + option.toQuestionId : '/final';
    history.push(nextStep)
  }

  return (
    <li>
      <label>
        <input type="radio" name={ 'option-' + questionId } onChange={handleChange} />
        {option.text}
      </label>
    </li>
  );
}

function Question() {
  const { id } = useParams();

  const question = questions_data[id];

  const renderedOptions = question.options.map(option => {
    return <Option key={'question-' + id + 'option- ' + option.id} questionId={id} option={option} />
  })

  if (question) {
    return (
      <div className={styles.question}>
        <h2>{question.text}</h2>
        <ul className={styles.optionList}>{renderedOptions}</ul>
      </div>
    );
  }
}

export default Question;