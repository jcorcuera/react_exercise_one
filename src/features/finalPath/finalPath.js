
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectFullPath, resetPath } from './pathSlice';
import styles from './FinalPath.module.css'


function Path({path}) {
  return (
    <li>
      <p><b>{path.question.text}</b> &rarr; {path.option.text}</p>
    </li>
  );
}

function FinalPath() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetPath());
  }

  const paths = useSelector(selectFullPath);

  const renderedPath = paths.map(path => {
    return <Path key={path.question.id} path={path} />
  })

  return (
    <div className={styles.finalPath}>
      <div>This is the path you have taken:</div>
      <ul className={styles.pathList}>{renderedPath}</ul>
      <Link to='/' onClick={handleClick}>Start Again!</Link>
    </div>
  );
}

export default FinalPath