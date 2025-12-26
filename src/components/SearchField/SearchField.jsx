import styles from './SearchField.module.css'

const SearchField = ({searchQuery, setSearchQuery}) => {

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.search}
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value)
        }}
        placeholder="Filter dishes..."
        type="text"
      />
    </div>
  )
}

export default SearchField
