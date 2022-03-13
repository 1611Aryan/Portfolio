import styles from "./index.module.scss"

const ImageSpan: React.FC<{
  top: number
  left: number
}> = ({ top, left }) => {
  return (
    <span
      className={styles.image_span}
      style={{
        top: top - (window.innerWidth * 4) / 100 + "px",
        left: left - (window.innerHeight * 4) / 100 + "px",
      }}
    ></span>
  )
}

export default ImageSpan
