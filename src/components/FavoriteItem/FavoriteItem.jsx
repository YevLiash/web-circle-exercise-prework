import styles from './FavoriteItem.module.css'
import {CiTrash} from 'react-icons/ci'

function FavoriteItem({item, deleteItem}) {
  return (
    <li>
      <img
        className={styles.img}
        src={item.strMealThumb}
        alt="dish image"
      />
      <div className={styles.description}>
        <h2>{item.strMeal}</h2>
        <p>{item.strCategory}</p>
        <p>{item.strArea}</p>
      </div>
      <button
        className={styles.deleteBtn}
        onClick={() => deleteItem(item.idMeal)}
      >

        <CiTrash className={styles.deleteIcon} />
      </button>
    </li>
  )
}

export default FavoriteItem