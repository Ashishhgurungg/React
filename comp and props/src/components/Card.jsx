import styles from './Card.module.css'

const Card = (props) => {

    console.log(props)
  return (
    <div>
        <h1 className={styles.haha}> {props.user} {props.age} </h1>
    </div>
  )
}

export default Card