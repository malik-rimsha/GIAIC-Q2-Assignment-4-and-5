import Link from "next/link";

export default function Footer (){
    return (
        <div className="footer">
            <ul className="footer-button">
               <Link href={"/"}> <li>Home</li></Link>
               <Link href={"about"}> <li>About</li></Link>
               <Link href={"blogs"}> <li>Blogs</li></Link>
            </ul>
        </div>
    )
}