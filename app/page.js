import Image from "next/image";
import React from "react";
import styles from "./../styles/LatestProducts.module.css";
import YouTube from "@/components/icons/YouTube";
import Instagram from "@/components/icons/Instagram";

export default function Home() {
	const latestProducts = {
		"Today": [
			{
				product_id: 1,
				name: "Product 1",
				image: "/images/today-1.avif",
			},
			{
				product_id: 2,
				name: "Product 2",
				image: "/images/today-2.avif",
			},
			{
				product_id: 3,
				name: "Product 3",
				image: "/images/today-3.avif",
			},
			{
				product_id: 4,
				name: "Product 4",
				image: "/images/today-4.avif",
			},
			{
				product_id: 5,
				name: "Product 5",
				image: "/images/today-5.avif",
			}
		],
		"21 Apr 2025": [
			{
				product_id: 1,
				name: "Product 1",
				image: "/images/today-1.avif",
			},
			{
				product_id: 2,
				name: "Product 2",
				image: "/images/today-2.avif",
			},
			{
				product_id: 3,
				name: "Product 3",
				image: "/images/today-3.avif",
			},
			{
				product_id: 4,
				name: "Product 4",
				image: "/images/today-4.avif",
			},
			{
				product_id: 5,
				name: "Product 5",
				image: "/images/today-5.avif",
			}
		]
	};

	return (
		<div className="max-w-[1400px]">
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
								<div className="font-normal border-b-2 border-[#a8a8a8] py-2 flex justify-between">
									<p className="text-3xl">{day}</p>
									<div className="flex gap-2 flex-wrap justify-end">
										<input placeholder="type to search all products" className="border-2 border-[#cbcbcb] px-[10px] py-[5px] text-md outline-none rounded-md" />
										<input type="date" className="border-2 border-[#cbcbcb] px-[10px] py-[5px] text-md outline-none cursor-pointer rounded-md" />
									</div>
								</div>
								{
									latestProducts[day]?.map((product, ind) => {
										return (
											<div key={ind} className="flex items-center justify-start gap-4 my-8 bg-[#FFF]">
												<Image src={product.image} alt={product.name} width={100} height={100} />
												<p className="text-xl">{product.name}</p>
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
