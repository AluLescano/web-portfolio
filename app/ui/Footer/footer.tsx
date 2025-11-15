import styles from "@/ui/Footer/footer.module.scss"

interface Props {
    webname: string
}

const Footer = ({webname}: Props) => {
    const {footer} = styles
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className={footer}>
            <p style={{margin: 0}}>© {webname} {year} | Diseñado por {webname}</p>
        </div>
    )
}

export default Footer