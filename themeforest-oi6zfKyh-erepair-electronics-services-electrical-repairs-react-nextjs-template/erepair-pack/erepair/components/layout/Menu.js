import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>

            <ul className="main-menu__list">
                <li className="dropdown">
                    <Link href="/">Home </Link>
                    <ul>
                        <li><Link href="/">Home One</Link></li>
                        <li><Link href="index2">Home Two</Link></li>
                        <li><Link href="index3">Home Three</Link></li>
                        <li><Link href="index-dark">Home Dark</Link></li>
                        
                    </ul>
                </li>
                <li>
                    <Link href="about">About Us</Link>
                </li>
                <li className="dropdown">
                    <Link href="#">Pages</Link>
                    <ul>
                        <li><Link href="team">Team</Link></li>
                        <li><Link href="team-details">Team Details</Link></li>
                        <li className="dropdown">
                            <Link href="#">Projects</Link>
                            <ul>
                                <li><Link href="projects">Projects</Link></li>
                                <li><Link href="project-details">Project Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="testimonials">Testimonials</Link></li>
                        <li><Link href="pricing">Pricing</Link></li>
                        <li><Link href="faq">Faq</Link></li>
                        <li><Link href="404">404 Error</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Services</Link>
                    <ul>
                        <li><Link href="services">Services</Link></li>
                        <li><Link href="electric-panel-repair">Electric Panel Repair</Link></li>
                        <li><Link href="short-circuit-repair">Short Circuit Repair</Link>
                        </li>
                        <li><Link href="commercial-services">Commercial Services</Link>
                        </li>
                        <li><Link href="installing-ceiling-fan">Installing A Ceiling Fan</Link>
                        </li>
                        <li><Link href="lighting-fixtures">Lighting A Fixtures</Link>
                        </li>
                        <li><Link href="maintenance-service">Maintenance Service</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Shop</Link>
                    <ul>
                        <li><Link href="shop">Products</Link></li>
                        <li><Link href="shop-details">Products Details</Link></li>
                        <li><Link href="cart">Cart</Link></li>
                        <li><Link href="checkout">Checkout</Link></li>
                        <li><Link href="wishlist">Wishlist</Link></li>
                        <li><Link href="account">My Account</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Blog</Link>
                    <ul>
                        <li><Link href="blog">Blog</Link></li>
                        <li><Link href="blog-list">Blog List</Link></li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
