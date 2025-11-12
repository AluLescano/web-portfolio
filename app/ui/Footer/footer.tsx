import styles from "@/ui/Footer/footer.module.scss"

const Footer = () => {
    const {footer} = styles
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className={footer}>
            © KatyaDesign {year} | Diseñado por KatyaDesign
        </div>
    )
}

export default Footer