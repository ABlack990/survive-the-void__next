import styles from "../../styles/base.module.css"
import Link from "next/link";

export function PageHeader(props) {
    return (
        <nav className={styles.navBar}>
            <Link href="/">
                <div className={styles.link}>
                    <div className={styles.linkText}>
                        Home
                    </div>
                </div>
            </Link>
        </nav>
    )
}