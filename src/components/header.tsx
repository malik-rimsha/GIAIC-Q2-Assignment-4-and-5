import Link from "next/link";

export default function Header (){
    return (
        <div className="header">
            <ul className="header-button">
               <Link href={"/"}> <li>Home</li></Link>
               <Link href={"about"}> <li>About</li></Link>
               <Link href={"blogs"}> <li>Blogs</li></Link>

            </ul>

        </div>
    )
}