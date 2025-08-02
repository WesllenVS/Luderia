import { IconShoppingCartCopy } from "@tabler/icons-react";
import Link from "next/link";
const CartButton = () => {
    return (
        <Link href="/cart">
            <div className="fixed z-400 top-0 p-3 mt-8 bg-transparent">
                <div className="flex justify-center p-4">
                    <IconShoppingCartCopy color="#fff" size={40} stroke={2} />
                    <div className="flex justify-center bg-slate-500 border-2 text-zinc-100 -ml-2 mb-2 font-bold border-stone-400 items-center w-[30px] h-[30px] rounded-full">
                        0
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default CartButton;