import ContentMain from "@/components/content-main";
import SearchCard from "@/components/search-card";
import styles from "@styles/page.module.css";

const SearchPage = () => {
	return (
		<ContentMain>
			<main className="px-6 py-6">
				<h1 className=" text-2xl font-bold -tracking-wider mb-6">Browse all</h1>

				<section className={`${styles.searchContainer} gap-3 pb-16`}>
					{Array.from({ length: 77 }, (_, index) => (
						<SearchCard key={index + 1} title={`Music ${index + 1}`} />
					))}
				</section>
			</main>
		</ContentMain>
	);
};

export default SearchPage;
