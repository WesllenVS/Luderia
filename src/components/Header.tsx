const Header = () => {
    return (
        <header className="fixed z-80 top-0 left-0 right-0 p-4 shadow-2xl rounded-2xl"
            style={{
                backgroundImage: "url(/logo.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "280px"
            }}>
            <div className="flex justify-around items-center text-center fixed z-40 left-0 right-0">
                <div>
                    <img src="logo.png" alt="logo" className="mx-auto w-[130px] h-[130px] rounded-full" />
                    <h1 className="text-3xl font-bold text-zinc-100">Luderia Sobral</h1>
                    <p className="font-bold text-zinc-100">A melhor luderia de Sobral!</p>
                    <div className="text-zinc-100 border-t py-3 pb-2">
                        <h2>Siga-nos nas redes sociais</h2>
                        <span className="bg-zinc-600 py-1 px-2 rounded-full text-zinc-50">Segunda á Domingo - 10:00 às 22:00</span>

                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;