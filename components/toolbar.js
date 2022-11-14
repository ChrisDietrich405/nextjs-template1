import { useRouter } from "next/router";

import styles from "../styles/toolbar.module.css"


const Toolbar = () => {
    const router = useRouter()
  return (
    <div className={styles}>
       <div onClick={() => router.push("/")}>Home</div>
       <div onClick={() => router.push("/eom")}>EOM</div>
       <div onClick={() => router.push("/feed/1")}>News</div>
       <div onClick={() => window.location.href="https://twitter.com"}>Twitter</div>
    </div>
  )
}

export default Toolbar
