import KawanBantuLogo from './assets/kawan_bantu_logo.png';
import HeroImage from './assets/hero_img.png';
import DecoreImg1 from './assets/decore_img_1.png';
import DecoreImg2 from './assets/decore_img_2.png';
import DoYouKnowImg from './assets/do_you_know_img.png';

import Img1 from './assets/img_1.png';
import Img2 from './assets/img_2.png';
import Img3 from './assets/img_3.png';
import Img4 from './assets/img_4.png';
import Img5 from './assets/img_5.png';
import Img6 from './assets/img_6.png';
import Img7 from './assets/img_7.png';
import Img8 from './assets/img_8.png';

import YtIcon from './assets/youtube_icon.png';
import TtIcon from './assets/tiktok_icon.png';
import IgIcon from './assets/instagram_icon.png';

import PaymentImg from './assets/payment_img.png';

import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import Card from './components/Card';

function App() {
	const [isToggleMenu, setIsToggleMenu] = useState(false);

	return (
		<div>
			<header className="relative mt-[3.5rem] px-5 lg:px-0">
				<div className="container mx-auto flex items-center justify-between lg:justify-start">
					<a href="#">
						<img src={KawanBantuLogo} alt="kawan bantu logo" className="lg:mr-[12rem]" />
					</a>
					{!isToggleMenu ? <FiMenu size={32} color="#38AA90" className="lg:hidden" onClick={() => setIsToggleMenu(!isToggleMenu)} /> : <IoClose size={32} color="#38AA90" className="lg:hidden" onClick={() => setIsToggleMenu(!isToggleMenu)} />}
					<nav className={`${isToggleMenu ? 'visible' : 'invisible'} absolute left-0 right-0 bottom-[-6.5rem] mx-5 flex flex-col gap-x-8 gap-y-2 rounded-md bg-white p-2 lg:visible lg:static lg:flex-row lg:bg-inherit`}>
						<a href="#" className="font-medium text-[#6D7D8B] lg:text-[1.2rem]">
							Beranda
						</a>
						<a href="#" className="font-medium text-[#6D7D8B] lg:text-[1.2rem]">
							Fitur
						</a>
						<a href="#" className="font-medium text-[#6D7D8B] lg:text-[1.2rem]">
							Contact Us
						</a>
					</nav>
				</div>
			</header>
			<section className="mt-[-9.4rem] bg-gradient-to-r from-[#FAEEFF] to-[#C5F1E761] px-5 pb-10 pt-[10rem] lg:px-0 lg:pb-0">
				<div className="container mx-auto grid items-center lg:grid-cols-2">
					<img src={HeroImage} alt="hero image" className="w-full" />
					<div>
						<h1 className="text-3xl font-bold text-[#1B1B1B] lg:text-[3rem]">Solusi #DonasiTanpaWorry</h1>
						<p className="mt-5 font-normal text-[#6D7D8B] lg:text-[1.5rem]">
							Platform donasi pertama yang berfokus pada bantuan rutin yang aman dari <span className="font-black">laman</span> dan <span className="font-black">cara kamu</span> sendiri
						</p>
						<a href="#" className="mt-4 inline-block w-full rounded-[0.5rem] bg-[#38AA90] py-[1rem] px-[1.5rem] text-center font-semibold text-white lg:w-auto">
							Contact Us
						</a>
					</div>
				</div>
			</section>
			<section className="relative px-5 pt-[4rem] lg:px-0">
				<img src={DecoreImg1} alt="decore img 1" className="absolute top-0 left-0 z-[-1]" />
				<div className="container mx-auto">
					<h1 className="text-center text-3xl font-bold lg:text-[3rem]">
						<span className="text-[#9B4ABA]">Tahukah</span> Kamu?
					</h1>
					<p className="text-center text-[#181D29] lg:text-[1.3rem]">Platform digital membantu meningkatkan pengumpulan donasi sebesar </p>
					<h1 className="mt-5 text-center text-3xl font-bold text-[#9B4ABA] lg:text-[3rem]">70% - 400%</h1>
					<div className="mx-auto mt-10 grid items-center gap-y-5 lg:mt-0 lg:w-4/5 lg:grid-cols-2">
						<img src={DoYouKnowImg} alt="do you know img" className="w-full" />
						<h1 className="text-center text-3xl lg:text-left lg:text-[3rem] lg:leading-[4rem]">Tetapi media digital hanya digunakan oleh 3.84% campaigners</h1>
					</div>
					<p className="mt-10 text-center font-bold lg:mt-20 lg:text-[1.3rem]">source: Outlook Filantropi Indonesia 2022, Baznas, Donorbox</p>
				</div>
			</section>
			<section className="relative overflow-x-hidden py-[10rem] px-5 lg:px-0">
				<img src={DecoreImg1} alt="decore img 1" className="absolute top-[10rem] left-0 z-[-1]" />
				<img src={DecoreImg1} alt="decore img 1" className="absolute right-10 bottom-20 z-[-1]" />
				<img src={DecoreImg2} alt="decore img 2" className="absolute top-[-5rem] right-[-12rem] z-[-1] lg:right-[-16rem]" />
				<div className="container mx-auto">
					<h1 className="text-center text-3xl font-bold text-[#07335E] lg:text-[3rem]">Ayo Kawan, Bantu Mereka!</h1>
					<div className="mt-10 grid gap-10 lg:mt-40 lg:grid-cols-4">
						<Card img={Img1} title="Pendidikan" subtitle="Bantuan untuk sekolah, kuliah dll." />
						<Card img={Img2} title="Non-profit" subtitle="Organisasi nirlaba, yayasan dll." />
						<Card img={Img3} title="Tempat Ibadah" subtitle="Donasi untuk keberlangsungan politik, dll" />
						<Card img={Img4} title="Lembaga Amal" subtitle="Zakat, wakaf, infaq, dll." />
						<Card img={Img5} title="Organisasi" subtitle="Program sosial, bantuan sosial, dll" />
						<Card img={Img6} title="Komunitas" subtitle="Komunitas, lembaga masyarakat, dll." />
						<Card img={Img7} title="Kampanye aksi sosial" subtitle="Donasi untuk keberlangsungan politik, dll" />
						<Card img={Img8} title="Perusahaan" subtitle="Program sosial perusahaan , CSR, dll." />
					</div>
				</div>
			</section>
			<footer className="bg-[#181D29] py-5 px-5 lg:px-0">
				<div className="container mx-auto grid items-end gap-y-10 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-20">
					<div>
						<img src={KawanBantuLogo} alt="kawan bantu logo" />
						<p className="text-white">QP office, tanjung mas raya blok B1 no.44, Jagakarsa, Jakarta Selatan 12530</p>
						<div className="mt-10 flex gap-x-4">
							<a href="#">
								<img src={YtIcon} alt="youtube icon" />
							</a>
							<a href="#">
								<img src={TtIcon} alt="tiktok icon" />
							</a>
							<a href="#">
								<img src={IgIcon} alt="instagram icon" />
							</a>
						</div>
					</div>
					<div className="col-span-2 grid gap-y-10 lg:grid-cols-3 lg:gap-y-0">
						<div>
							<h1 className="text-[1.1rem] font-bold text-white">Seputar KawanBantu</h1>
							<ul className="mt-4 space-y-4">
								<li>
									<a href="#" className="text-white">
										Beranda
									</a>
								</li>
								<li>
									<a href="#" className="text-white">
										Fitur
									</a>
								</li>
								<li>
									<a href="#" className="text-white">
										Tentang Kami
									</a>
								</li>
								<li>
									<a href="#" className="text-white">
										Contact Us
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h1 className="text-[1.1rem] font-bold text-white">Kontak Kami</h1>
							<ul className="mt-4 space-y-4">
								<li>
									<a href="#" className="text-white">
										+628231264835
									</a>
								</li>
								<li>
									<a href="#" className="text-white">
										kawanbantu@gmail.com
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h1 className="text-[1.1rem] font-bold text-white">Platform Berdonasi</h1>
							<img src={PaymentImg} alt="payment img" className="mt-4" />
						</div>
					</div>
				</div>
				<p className="mt-10 text-center text-white lg:mt-5">© Copyright 2022 KawanBantu. All rights reserved</p>
			</footer>
		</div>
	);
}

export default App;
