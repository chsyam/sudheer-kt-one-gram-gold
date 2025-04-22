"use client";

import Image from "next/image";
import React from "react";
import styles from "./../styles/LatestProducts.module.css";
import YouTube from "@/components/icons/YouTube";
import Instagram from "@/components/icons/Instagram";
import Whatsapp from "@/components/icons/Whatsapp";
import { ShoppingCart } from "lucide-react";

export default function Home() {
	const latestProducts = {
		"Today": [
			{
				product_id: 1,
				name: "Rose gold chain",
				tag: "ch_01",
				image: "/images/today-1.avif",
			},
			{
				product_id: 2,
				name: "Necklace combo",
				tag: "nc_01",
				image: "/images/today-2.avif",
			},
			{
				product_id: 3,
				name: "Ear rings",
				tag: "er_01",
				image: "/images/today-3.avif",
			}
		],
		"21 Apr 2025": [
			{
				product_id: 1,
				name: "Rose gold chain",
				tag: "ch_01",
				image: "/images/today-1.avif",
			},
			{
				product_id: 2,
				name: "Necklace combo",
				tag: "nc_01",
				image: "/images/today-2.avif",
			},
			{
				product_id: 3,
				name: "Ear rings",
				tag: "er_01",
				image: "/images/today-3.avif",
			}
		],
		"20 Apr 2025": [
			{
				product_id: 1,
				name: "Rose gold chain",
				tag: "ch_01",
				image: "/images/today-1.avif",
			},
			{
				product_id: 2,
				name: "Necklace combo",
				tag: "nc_01",
				image: "/images/today-2.avif",
			},
			{
				product_id: 3,
				name: "Ear rings",
				tag: "er_01",
				image: "/images/today-3.avif",
			}
		]
	};

	const handleYTRedirect = () => {
		window.open("https://www.youtube.com/@sudheer_kt_onegram_gold8371", "_blank")
	}

	return (
		<div className="max-w-[1400px] mb-[75px]">
			<div className={styles.latestProductsContainer}>
				<div className="flex justify-center gap-4">
					<Image src="/images/sudheerkt-logo.png" alt={"Logo"} priority width={100} height={100} className="w-[100px] h-[100px]" />
					<div className={styles.company_metadata}>
						<p className="text-2xl">
							Sudheer KT One Gram Gold
						</p>
						<p className="text-gray-600">
							Best Quality products since 1985
						</p>
						<div className="flex justify-start gap-[10px] items-center flex-wrap mt-2">
							<YouTube height={32} width={32} />
							<Instagram height={24} width={24} />
						</div>
					</div>
				</div>
				{
					Object.keys(latestProducts)?.map((day, index) => {
						return (
							<div key={index} className="mt-6">
								<div className="font-normal border-b-2 border-[#a8a8a8] py-2 flex justify-between flex-wrap">
									<p className="text-xl sm:text-2xl">{day}</p>
									{
										index === 0 ? (
											<div className="flex gap-2 flex-wrap justify-start">
												<input placeholder="Rose gold chain..." className="border-2 border-[#cbcbcb] px-[10px] py-[5px] text-md outline-none rounded-md w-[160px] sm:w-fit" />
												<input type="date" defaultValue={new Date().toISOString().split('T')[0]} placeholder="Date" className="border-2 border-[#cbcbcb] px-[10px] py-[5px] text-md outline-none cursor-pointer rounded-md" />
											</div>
										) : (
											""
										)
									}
								</div>
								{
									latestProducts[day]?.map((product, ind) => {
										return (
											<div key={ind} className="shadow-xl hover:shadow-2xl flex items-center justify-between gap-4 my-4 bg-[#FFF] border border-[#dcdcdc] rounded-2xl">
												<div className="cursor-pointer grow flex justify-start items-center gap-4">
													<Image src={product.image} alt={product.name} width={100} height={100} className="h-[100px] p-2 rounded-2xl" />
													<div>
														<p className="text-xl">{product?.name}</p>
														<p className="text-gray-500 text-sm">{product?.tag}</p>
													</div>
												</div>
												<div className="mr-4 flex justify-end gap-2 items-center flex-wrap">
													<Whatsapp height={30} width={30} />
													<ShoppingCart className="cursor-pointer" size={30} />
												</div>
											</div>
										);
									})
								}
							</div>
						);
					})
				}
			</div>
		</div>
	);
}
