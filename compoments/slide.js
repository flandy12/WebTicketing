import Image from "next/image";

export default function Slide() {
    return (
        <div>
            <div className="slide skeleton skeleton-slide">
                <Image src="/image/benner01.jpg" alt="me" 
                width={4000} height={1000} quality={78}
                placeholder = 'empty'
                    />
            </div>
        </div>
       
    )
}