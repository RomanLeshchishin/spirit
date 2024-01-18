import styles from "./styles/Comment.module.scss"

interface CommentProps {
    src: string,
    alt?: string,
    user: string,
    data: string,
    time: string,
    comment: string,
}

const Comment = ( { src, alt, user, data, time, comment } : CommentProps ) => {
    return (
        <>
            <div className={styles.container}>
                <img src={src} alt={alt} className={styles.avatar} />
                <div className={styles.infComment}>
                    <p className={styles.user}>{user}</p>
                    <div className={styles.dataTimeCom}>
                        <p className={styles.data}>{data}</p>
                        <p className={styles.time}>{time}</p>
                    </div>
                    <p className={styles.comment}>{comment}</p>
                </div>
            </div>
        </>
    );
};

export default Comment;
