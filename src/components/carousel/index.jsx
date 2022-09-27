import { useEffect, useRef, useState } from 'react'
import { instagramFeed } from '../instagram'
import styles from './styles.module.scss'

export function Carousel() {

    const [data, setData] = useState([])
    const container = useRef(null)

    useEffect(() => {
        const dataInstagram = instagramFeed()
        setData(dataInstagram)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="https://i.pinimg.com/originals/5a/4e/9e/5a4e9e5b232b9ff0848852b19665cf59.jpg" alt="Logo Instagram" />
            </div>
            <div className={styles.carousel}>
                return (
                    <div className={styles.item}>
                        <div className={styles.image}>
                            <img src='https://place-hold.it/300x500' alt="" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.text}>Texto</div>
                        </div>
                    </div>
                )
                {/* {data.map(item => {
                    return (
                        <div className={styles.item}>
                            <div className={styles.image}>
                                <img src={item.media_url} alt="" />
                            </div>
                            <div className={styles.info}>
                                <div className={styles.text}>{item.text}</div>
                            </div>
                        </div>
                    )
                })} */}
            </div>
        </div>
    )
}