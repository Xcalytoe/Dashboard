import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image'

const BackBtn = () => {
    const router = useRouter();
    // console.log(router)
    return(
        <Link href="">
          <a  onClick={(e) =>{e.preventDefault(); router.back()}} className="flex items-center">
            <Image width={24} height={24} src="/images/back.svg" alt="Back arrow"/>
          </a>
      </Link>
    )
}
export default BackBtn;