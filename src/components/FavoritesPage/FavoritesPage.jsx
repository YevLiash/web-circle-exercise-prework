import {useNavigate} from 'react-router-dom'
import {CiBookmark} from 'react-icons/ci'
import NavBar from '../NavBar/NavBar.jsx'
import styles from './FavoritesPage.module.css'
import stylesFavIcon from '../../views/RestaurantView.module.css'
import Button from '../Button/Button.jsx'
import FavoriteItem from '../FavoriteItem/FavoriteItem.jsx'
import {useState} from 'react'

function FavoritesPage() {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || [])
  const navigate = useNavigate()

  function deleteItem(id) {
    const newFavArr = favorites.filter((item) => {
      return item.idMeal !== id
    })

    setFavorites(newFavArr)
    localStorage.setItem('favorites', JSON.stringify(newFavArr))
  }

  return (
    <>
      <NavBar>
        <h1>ReDI React Restaurant</h1>

        <p className={styles.title}>Your favorites</p>


        <div className={stylesFavIcon.favIconWrapper}>
          <div className={stylesFavIcon.favIconLink}>
            <CiBookmark />
          </div>
          <span className={styles.favCount}>{favorites.length}</span>
        </div>

      </NavBar>

      <div className={styles.wrapper}>
        <div className={styles.backBtn}>
          <Button onClick={() => navigate('/')}>return Home</Button>
        </div>

        {favorites?.length === 0 ? <p>Your favorites list is empty</p> :
          <ul className={styles.favList}>
            {favorites.map(item => {
              return <FavoriteItem
                item={item}
                key={item.idMeal}
                deleteItem={deleteItem}
              />
            })}
          </ul>
        }

      </div>
    </>
  )
}

export default FavoritesPage