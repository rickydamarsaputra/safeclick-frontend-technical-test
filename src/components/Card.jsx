function Card({ img, title, subtitle }) {
	return (
		<div>
			<div className="relative overflow-hidden rounded-md">
				<div className="absolute inset-0 bg-[#2C2B2B]/50"></div>
				<img src={img} alt="img 1" className="w-full" />
				<h1 className="absolute bottom-2 right-1/2 w-[60%] translate-x-1/2 text-center text-[2rem] font-bold text-white">{title}</h1>
			</div>
			<p className="mt-4 text-center font-medium text-[#07335E]">{subtitle}</p>
		</div>
	);
}

export default Card;
