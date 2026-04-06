interface HeaderProps {
    total: number;
}

function Header({ total }: HeaderProps) {
    return (
        <header className="bg-slate-800 border-b border-slate-700">
            <div className= "flex items-center justify-between px-6 py-4">
                <p className="text-white font-bold text-xl">Helm 🧭</p>
                <span className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-full">{total} Applications</span>
                
            </div>

        </header>
    );
}

export default Header;